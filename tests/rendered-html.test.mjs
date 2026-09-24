import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);
// Every route a buyer can reach from the footer, in both languages. Listing
// them once is what keeps a new legal page from shipping unlinked from the
// other four -- and keeps the two sets the same size, which is the cheapest
// way to notice that a document was translated and then forgotten.
// Shaped like a real PostHog project key, because `analytics.ts` refuses
// anything that is not: a test that configures an invalid key would assert
// that the policy stays silent and pass for the wrong reason.
const TEST_POSTHOG_KEY = "phc_Ab3kQ9zR7mT2wX5vY8nL4jH6gD1sF0pC9eU";

const legalRoutes = ["/agb", "/widerruf", "/datenschutz", "/impressum", "/lizenzen"];
const legalRoutesEn = ["/en/terms", "/en/cancellation", "/en/privacy", "/en/legal-notice", "/en/licences"];
const comparisonPaths = [
  "/vergleich",
  "/vergleich/wispr-flow-alternative",
  "/vergleich/superwhisper-alternative",
  "/vergleich/sprecho-alternative",
  "/vergleich/voiceink-vs-witness",
  "/vergleich/macwhisper-alternative",
  "/vergleich/diktiersoftware-mac-dsgvo",
];

async function render(path = "/", headers = {}, origin = "http://localhost") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${Math.random()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`${origin}${path}`, { headers: { accept: "text/html", ...headers } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the complete German landing page in the required order", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();

  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.equal(response.headers.get("content-security-policy"), "base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'");
  assert.equal(response.headers.get("strict-transport-security"), "max-age=31536000");
  assert.equal(response.headers.get("permissions-policy"), "camera=(), geolocation=(), microphone=()");
  assert.match(html, /Diktieren statt tippen/);
  assert.match(html, /Alles bleibt auf deinem Mac/);
  assert.match(html, /Für alle, die mehr als eine Sprache benutzen/);
  assert.match(html, /€99/);
  assert.match(html, /€49/);
  // Four copies of one download: header, hero, pricing, closing section. The
  // header copy is the one on screen on a laptop, where the hero's sits
  // below the fold or under the consent banner.
  assert.equal((html.match(/<a[^>]+href="\/danke\?download=auto"[^>]*>[\s\S]*?Für Mac kostenlos testen<\/a>/g) ?? []).length, 4);
  const header = html.match(/<header class="site-header-wrap[\s\S]*?<\/header>/)?.[0] ?? "";
  assert.match(header, /<a[^>]+href="\/danke\?download=auto"[^>]*data-cta="header"[^>]*>[\s\S]*?Für Mac kostenlos testen<\/a>/);
  // The button says what it gives, and the price says it again next to the price:
  // three of ten Mac visitors from the ads opened the pricing section and left.
  assert.match(html, /13 Tage kostenlos, ohne Kreditkarte/);
  // One landing, one call to action: the hero offers the download and nothing competing with it.
  const hero = html.match(/<section class="hero[\s\S]*?<\/section>/)?.[0] ?? "";
  assert.equal((hero.match(/class="button/g) ?? []).length, 1, "hero must hold exactly one CTA");
  // The campaign buys `spracherkennung` and `sprache zu text`; the page has to say both.
  assert.match(html, /<title>[^<]*Spracherkennung für den Mac[^<]*<\/title>/);
  assert.match(hero, /Sprache zu Text/);
  assert.match(html, /nicht öffentlich dokumentiert/);
  assert.match(html, /Die vollständige Datenschutzerklärung lesen/);
  assert.match(html, /UI-Prototyp/);
  assert.match(html, /Roh-Transkript · vor der Einfügung/);
  assert.match(html, /Die ersten drei Tage ab deiner ersten erfolgreichen Diktierung fragen nach nichts/);
  assert.match(html, /\$15 Monat \/ \$144 Jahr/);
  assert.match(html, /\$25 \/ \$39 \/ \$49 einmalig/);
  assert.doesNotMatch(html, /€15 Monat|\$29–69/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
  assert.doesNotMatch(html, />\s*(?:ohne|kein) Abo\s*</i);

  const anchors = ["funktion", "verifikation", "datenschutz", "vergleich", "preis", "faq"];
  const positions = anchors.map((id) => html.indexOf(`id="${id}"`));
  assert.ok(positions.every((position) => position >= 0));
  assert.deepEqual([...positions].sort((a, b) => a - b), positions);
  assert.deepEqual(
    [...html.matchAll(/data-section="(S\d+)"/g)].map((match) => match[1]),
    Array.from({ length: 11 }, (_, index) => `S${index + 1}`),
  );
});

test("scopes the no-storage promise to the measurement tools, because the badge is not one", async () => {
  // The badge loads an image from api.producthunt.com, and that response sets a
  // Cloudflare __cf_bm cookie whatever the reader answers here -- before they
  // have answered at all. An unqualified "nothing is stored" in the banner
  // would be a promise the page breaks 700px further down, so each locale has
  // to say whose storage it is talking about. The banner is client-only and
  // never reaches the server HTML, so this reads the copy where it is written.
  const copy = await readFile(new URL("app/_data/consentCopy.ts", projectRoot), "utf8");
  const scoped = [
    ["de", "speichern diese Dienste nichts auf deinem Ger\u00e4t", "wird nichts gespeichert"],
    ["en", "these services store nothing on your device", "decline and nothing is stored"],
    ["ru", "\u044d\u0442\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u044e\u0442", "\u043f\u0440\u0438 \u043e\u0442\u043a\u0430\u0437\u0435 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f"],
    ["uk", "\u0446\u0456 \u0441\u0435\u0440\u0432\u0456\u0441\u0438 \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u044e\u0442\u044c", "\u0437\u0430 \u0432\u0456\u0434\u043c\u043e\u0432\u0438 \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454\u0442\u044c\u0441\u044f"],
  ];
  for (const [locale, required, forbidden] of scoped) {
    assert.ok(copy.includes(required), `the ${locale} banner must scope the promise: ${required}`);
    assert.ok(!copy.includes(forbidden), `the ${locale} banner must not promise more than it keeps: ${forbidden}`);
  }
  // Section 8 of both policies makes the same promise, and names the exception.
  for (const route of ["/datenschutz", "/en/privacy"]) {
    const html = await (await render(route)).text();
    assert.doesNotMatch(html, /(Einwilligung<\/strong> wird nichts auf deinem|consent<\/strong> nothing is stored on your)/, route);
    assert.match(html, /Product Hunt/, route);
  }
});

test("carries the live Product Hunt badge on every locale, in the two neutral themes", async () => {
  const pages = await Promise.all(["/", "/en", "/ru", "/uk"].map(async (path) => [path, await (await render(path)).text()]));
  for (const [path, html] of pages) {
    const strip = html.match(/<aside class="trust-strip[\s\S]*?<\/aside>/)?.[0] ?? "";
    assert.match(strip, /href="https:\/\/www\.producthunt\.com\/products\/witness-for-mac\?embed=true(&amp;|&)utm_source=badge-featured/, path);
    assert.match(strip, /rel="noopener noreferrer"/, path);
    // Loaded from Product Hunt so the vote count is the live one, and so the
    // badge becomes "FEATURED ON" after the launch without a deploy. A copy in
    // `public/` would freeze whatever number it was fetched on.
    const sources = [...strip.matchAll(/<img[^>]+src="([^"]+)"/g)].map((match) => match[1].replaceAll("&amp;", "&"));
    assert.equal(sources.length, 2, path);
    for (const source of sources) {
      assert.match(source, /^https:\/\/api\.producthunt\.com\/widgets\/embed-image\/v1\/featured\.svg\?post_id=1258517&theme=/, path);
      // A cache-buster would refetch the badge on every view without making the
      // count any fresher than the response Product Hunt already serves.
      assert.doesNotMatch(source, /[?&]t=/, path);
    }
    // Their `light` badge is drawn in Product Hunt coral, a shade off the
    // page's own accent sitting next to it; `dark` and `neutral` are the two
    // that carry no coral at all.
    assert.deepEqual(sources.map((source) => source.split("theme=")[1]), ["dark", "neutral"], path);
    // The two images are one badge; the accessible name belongs to the link.
    assert.equal((strip.match(/alt=""/g) ?? []).length, 2, path);
    assert.match(strip, /aria-label="[^"]*Product Hunt[^"]*"/, path);
  }
  // The badge makes the landing page call a third party on load. Both policies
  // have to name it, or the page and the policy disagree.
  const policies = await Promise.all([render("/datenschutz"), render("/en/privacy")].map(async (pending) => (await pending).text()));
  for (const html of policies) assert.match(html, /Product Hunt/);
});

test("renders the English variant and reciprocal language links", async () => {
  const [deResponse, enResponse, unrelatedResponse] = await Promise.all([render("/"), render("/en"), render("/enough")]);
  const [deHtml, enHtml, unrelatedHtml] = await Promise.all([deResponse.text(), enResponse.text(), unrelatedResponse.text()]);
  assert.equal(enResponse.status, 200);
  assert.match(enHtml, /<html lang="en">/i);
  assert.match(enHtml, /Dictate instead of typing/);
  assert.match(enHtml, /Everything stays on your Mac/);
  // The English ad group buys `speech to text` and `voice to text`.
  assert.match(enHtml, /<title>[^<]*Speech to text for Mac[^<]*<\/title>/);
  assert.match(enHtml, /Voice to text app for Mac/);
  assert.match(enHtml, /<header class="site-header-wrap[\s\S]*?href="\/danke\?lang=en&amp;download=auto"[^>]*data-cta="header"[\s\S]*?<\/header>/);
  assert.match(enHtml, /UI prototype/);
  assert.match(enHtml, /€14,000/);
  assert.match(enHtml, /German/);
  assert.match(enHtml, /All languages/);
  assert.match(enHtml, /The first three days after your first successful dictation ask for nothing/);
  assert.match(enHtml, /href="\/"/i);
  assert.match(enHtml, /hreflang="de"/i);
  assert.match(deHtml, /href="\/en"/i);
  assert.match(unrelatedHtml, /<html lang="de">/i);
});

test("renders the Russian and Ukrainian variants with their own languages and reciprocal links", async () => {
  const [ruResponse, ukResponse] = await Promise.all([render("/ru"), render("/uk")]);
  const [ruHtml, ukHtml] = await Promise.all([ruResponse.text(), ukResponse.text()]);

  assert.equal(ruResponse.status, 200);
  assert.match(ruHtml, /<html lang="ru">/i);
  assert.match(ruHtml, /Диктуй, а не печатай/);
  assert.match(ruHtml, /Всё остаётся на твоём Mac/);
  assert.match(ruHtml, /14 000 €/);
  // The Russian page leads with the language its reader actually speaks, ticked.
  assert.match(ruHtml, /class="active">Русский/);
  assert.match(ruHtml, /Русский и английский в одном предложении/);
  assert.match(ruHtml, /href="\/danke\?lang=ru&amp;download=auto"/i);

  assert.equal(ukResponse.status, 200);
  assert.match(ukHtml, /<html lang="uk">/i);
  assert.match(ukHtml, /Диктуй, а не друкуй/);
  assert.match(ukHtml, /Усе лишається на твоєму Mac/);
  assert.match(ukHtml, /class="active">Українська/);
  assert.match(ukHtml, /href="\/danke\?lang=uk&amp;download=auto"/i);

  // Every locale offers the other three. Russian and Ukrainian readers have no
  // legal set of their own, and get the English one rather than a German
  // withdrawal instruction they cannot read.
  for (const [html, others] of [[ruHtml, ["de", "en", "uk"]], [ukHtml, ["de", "en", "ru"]]]) {
    for (const other of others) assert.match(html, new RegExp(`hreflang="${other}"`, "i"), other);
    assert.match(html, /href="\/en\/legal-notice" hreflang="en"/i);
    assert.doesNotMatch(html, /href="\/impressum"/i, "no locale may be sent to a document in a third language");
  }
});

test("serves the thank-you flow in Russian and Ukrainian", async () => {
  const [ruResponse, ukResponse] = await Promise.all([render("/danke?lang=ru"), render("/danke?lang=uk")]);
  const [ruHtml, ukHtml] = await Promise.all([ruResponse.text(), ukResponse.text()]);

  assert.match(ruHtml, /<html lang="ru">/i);
  assert.match(ruHtml, /Ключ ты забираешь в приложении/);
  assert.match(ruHtml, /Настройки → Лицензия/);
  assert.match(ruHtml, /Универсальный доступ/);
  assert.match(ruHtml, /noindex/i);

  assert.match(ukHtml, /<html lang="uk">/i);
  assert.match(ukHtml, /Ключ ти забираєш у застосунку/);
  assert.match(ukHtml, /Налаштування → Ліцензія/);
  assert.match(ukHtml, /Універсальний доступ/);
});

test("never asks for an address, and says where the key comes from instead", async () => {
  // The site has no lead. `docs/GTM.md` records the decision: a key names a
  // Mac, a browser does not know which Mac it is, and a form that collects an
  // address nothing can act on is the state production actually shipped in --
  // a field that discarded what was typed under a page promising a key by
  // mail. So the page hands over a file and names the trade, and the address
  // is asked for once, in the app, where it can be answered with a key.
  const response = await render("/danke?preview=1");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.doesNotMatch(html, /<form[^>]+method="post"/i);
  assert.doesNotMatch(html, /name="email"/);
  assert.doesNotMatch(html, /Wo diktierst du am meisten/);
  assert.doesNotMatch(html, /Trag deine Adresse ein/);
  // Nor may it ask a question it gives no way to answer.
  assert.doesNotMatch(html, /Wohin sollen wir deinen Lizenzschlüssel schicken/);

  assert.match(html, /Deinen Schlüssel holst du in der App/);
  // Why the key is worth having, in the numbers the app enforces:
  // `EntitlementPolicy.ungatedDuration` is three days and the trial key adds
  // ten. A page that names the key without naming the trade is the page this
  // assertion exists to stop shipping.
  assert.match(html, /[Dd]rei Tage/);
  assert.match(html, /dreizehn/);
  assert.match(html, /Einstellungen → Lizenz/);
  assert.match(html, /Der Download ist gerade nicht erreichbar/);
  assert.match(html, /noindex/i);
  assert.match(html, /href="\/impressum"/i);
  assert.match(html, /href="\/widerruf"/i);
  assert.doesNotMatch(html, /DOWNLOAD_URL/);
});

test("keeps query locale isolated and renders English download metadata", async () => {
  const [landingResponse, thanksResponse] = await Promise.all([
    render("/?lang=en"),
    render("/danke?lang=en"),
  ]);
  const [landingHtml, thanksHtml] = await Promise.all([landingResponse.text(), thanksResponse.text()]);
  assert.match(landingHtml, /<html lang="de">/i);
  assert.match(landingHtml, /Diktieren statt tippen/);
  assert.match(thanksHtml, /<html lang="en">/i);
  assert.match(thanksHtml, /You get your key inside the app/);
  assert.match(thanksHtml, /Install Witness and request your licence key/);
  assert.match(thanksHtml, /Settings → Licence/);
});

test("serves the legal pages, and no longer calls any of them a draft", async () => {
  // Each page states what it is. None of them may still say "Entwurf": the
  // product is on sale, and a text that calls itself unfinished beside a price
  // is the site telling a buyer not to rely on the terms they just agreed to.
  const notices = new Map([
    ["/impressum", /Anbieterangaben vollständig/],
    ["/agb", /Diese Bedingungen beschreiben das Produkt, das tatsächlich verkauft wird/],
    ["/widerruf", /Diese Belehrung gilt für Verbraucher/],
    ["/datenschutz", /aus dem Code geschrieben/],
    ["/lizenzen", /Witness steht auf fremder Arbeit/],
    ["/en/legal-notice", /Provider details complete/],
    ["/en/terms", /This English text applies to purchases made in English/],
    ["/en/cancellation", /This instruction is for consumers/],
    ["/en/privacy", /written from the code, not from an intention/],
    ["/en/licences", /Witness stands on other people/],
  ]);
  const updatedPages = new Set(["/agb", "/datenschutz", "/lizenzen", "/en/terms", "/en/privacy", "/en/licences"]);
  for (const [routes, counterparts] of [[legalRoutes, legalRoutesEn], [legalRoutesEn, legalRoutes]]) {
    for (const [index, route] of routes.entries()) {
      const date = updatedPages.has(route) ? "24" : "5";
      const stamp = route.startsWith("/en/")
        ? new RegExp(`Last updated: ${date} September 2026`)
        : new RegExp(`Stand: ${date}\\. September 2026`);
      const response = await render(route);
      assert.equal(response.status, 200, route);
      const html = await response.text();
      assert.match(html, notices.get(route), route);
      assert.doesNotMatch(html, /ist ein Entwurf|noch zu ergänzen|vor dem ersten Verkauf/, route);
      assert.match(html, stamp, route);
      for (const other of routes) assert.match(html, new RegExp(`href="${other}"`), `${route} must link ${other}`);
      // And the same document in the other language, which is the one link a
      // reader who cannot read this page needs.
      assert.match(html, new RegExp(`href="${counterparts[index]}"`), `${route} must link ${counterparts[index]}`);
      assert.match(html, /mailto:hallo@witnessmac\.com/);
    }
  }

  const impressum = await (await render("/impressum")).text();
  for (const detail of ["Ihor Skakovskyi", "Ostrovsk", "150 00 Praha 5", "17328691", "420 607 643 905"]) {
    assert.ok(impressum.includes(detail), `the Impressum must name ${detail}`);
  }

  // Deliberately absent. A Czech natural person's DIČ is built from their
  // birth number, so publishing it publishes that; Czech disclosure duty asks
  // for the name, the seat and the IČO, and Stripe is the merchant of record
  // a buyer's invoice comes from anyway.
  assert.doesNotMatch(impressum, /DIČ|CZ686026225/);

  // Removed on purpose: a 30-day guarantee was promised on every locale of the
  // landing page while the document that had to define it said it did not yet,
  // and the checkout said nothing at all. The statutory right of withdrawal is
  // unaffected and is what `/widerruf` still has to spell out.
  for (const route of ["/", "/en", "/ru", "/uk", "/widerruf"]) {
    const html = await (await render(route)).text();
    assert.doesNotMatch(html, /Geld zurück|money-back|Возврат денег|Повернення грошей/, route);
  }

  // The product ships. No visitor-facing route may still call it a preview --
  // the download button hands over a signed, notarized build, and a page that
  // says otherwise beside a price is the site arguing with itself.
  // Every comparison route, listed from the data rather than by hand: naming
  // them here is how one of them kept its "Private Vorschau" row through a
  // sweep that had already passed.
  const { comparisonSlugs } = await import("../app/_data/comparisons.ts");
  const routes = ["/", "/en", "/ru", "/uk", "/vergleich", ...comparisonSlugs.map((slug) => `/vergleich/${slug}`)];
  for (const route of routes) {
    const html = await (await render(route)).text();
    assert.doesNotMatch(html, /Vorschau|private preview|превью|прев'ю|\bMVP\b|\bLaunch\b|запуску|planned/i, route);
  }

  const llmsResponse = await render("/llms.txt");
  assert.equal(llmsResponse.status, 200);
  assert.match(llmsResponse.headers.get("content-type") ?? "", /^text\/plain/i);
  const llms = await llmsResponse.text();
  assert.match(llms, /local-first dictation utility/);
  assert.match(llms, /speech recognition and text processing run on the Mac/i);
  // The site sells a signed build. Nothing on it may call the product a
  // preview or its prices planned, in any of the four locales.
  assert.doesNotMatch(llms, /preview|planned/i);
  assert.equal(llms.trim().split(/\n\n+/).length, 3);
});

test("states the business model the same way in the legal text and on the landing page", async () => {
  const agb = await (await render("/agb")).text();
  // The four things a buyer pays for, in the document that has to bind us to
  // them: the two prices, the two Macs, the trial, and what "lifetime" means.
  for (const claim of ["€99", "€49", "zwei von ihr genutzte Macs", "ersten drei Tage ab deiner ersten erfolgreichen Diktierung", "Version 1", "Merchant of Record", "tschechisches Recht"]) {
    assert.ok(agb.includes(claim), `the terms must state ${claim}`);
  }
  // "Lifetime" is a version, not a duration, and the terms must say so rather
  // than leave the landing page's "lebenslang" to mean whatever a reader hopes.
  assert.match(agb, /künftige Hauptversion \(2\.0\) ist ein neues Produkt/);

  const widerruf = await (await render("/widerruf")).text();
  assert.match(widerruf, /vierzehn Tagen ohne Angabe von Gründen/);
  assert.match(widerruf, /Muster-Widerrufsformular/);
  // The early-expiry clause is the whole reason a key can be delivered at once.
  // It is stated as a condition, because the consent it depends on is collected
  // at the checkout and not by this page.
  assert.match(widerruf, /Liegen sie nicht vor, bleibt dein Widerrufsrecht die vollen vierzehn Tage bestehen/);

  const datenschutz = await (await render("/datenschutz")).text();
  for (const recipient of ["Cloudflare", "Stripe", "Resend", "Hugging Face", "api.witnessmac.com"]) {
    assert.ok(datenschutz.includes(recipient), `the privacy policy must name ${recipient}`);
  }
  assert.match(datenschutz, /Die übrigen sieben werden nicht übertragen/);
  // The three that do leave have to be named, and the way to stop them with
  // them. A policy that lists a transmission without its off switch is the
  // failure this assertion exists to catch.
  for (const event of ["trial_started", "activation_requested", "paywall_shown"]) {
    assert.ok(datenschutz.includes(event), `the privacy policy must name the ${event} event`);
  }
  assert.match(datenschutz, /Einstellungen → Privatsphäre/);
  // With no measurement configured the policy has to say the site sets none.
  assert.match(datenschutz, /keine Cookies/);
  assert.doesNotMatch(datenschutz, /Google Analytics 4/);
  assert.doesNotMatch(datenschutz, /PostHog/);
  assert.match(datenschutz, /Úřad pro ochranu osobních údajů/);

  const lizenzen = await (await render("/lizenzen")).text();
  for (const holder of ["WhisperKit", "argmax", "OpenAI", "Apache-2.0"]) {
    assert.ok(lizenzen.includes(holder), `the attribution page must name ${holder}`);
  }
  // MIT is only satisfied by carrying the permission notice, not by naming it.
  assert.match(lizenzen, /Permission is hereby granted, free of charge/);

  for (const route of ["/", "/en", "/ru", "/uk"]) {
    const html = await (await render(route)).text();
    assert.doesNotMatch(html, /Funnel-Ereignisse|funnel events|событиями воронки|подіями воронки/, route);
    assert.doesNotMatch(html, /Entwurf|is currently a draft|черновиком|чернеткою/, route);
  }
});

test("the landing page tells the same truth about product events as the policy", async () => {
  // It did not, for a release. Section 4a of both policies described the three
  // events the app sends while the sales page in all four languages still said
  // they were built and never sent -- the false half being the half that sells.
  // A promise about what leaves a Mac may not be looser on the page that is
  // trying to talk somebody into installing it than in the document nobody
  // reads, so each locale asserts both halves: that the events are named, and
  // that the old denial cannot come back.
  const claims = {
    "/": { says: /drei Ereignisse über den Test/, switch: /Einstellungen → Privatsphäre/, denies: /nicht gesendet|Mehr sendet die App nicht/ },
    "/en": { says: /three events about the trial/i, switch: /Settings → Privacy/, denies: /not sent|sends nothing else/ },
    "/ru": { says: /три события о триале/, switch: /Настройках → Приватность/, denies: /не отправляются|не отправляет ничего/ },
    "/uk": { says: /три події про тріал/, switch: /Налаштуваннях → Приватність/, denies: /не надсилає нічого|не надсилаються/ },
  };

  for (const [route, claim] of Object.entries(claims)) {
    const html = await (await render(route)).text();
    assert.match(html, claim.says, route);
    assert.match(html, claim.switch, `${route} must say where the switch is`);
    assert.doesNotMatch(html, claim.denies, `${route} may not deny what the app sends`);
  }
});

test("the English legal set says the same thing as the German one", async () => {
  // A translation that quietly disagrees with the original is worse than no
  // translation: two buyers then have two different contracts and neither
  // knows it. These are the claims a disagreement would be expensive in.
  const terms = await (await render("/en/terms")).text();
  for (const claim of ["€99", "€49", "up to two Macs they use", "first three days from your first successful dictation", "version 1 today", "merchant of record", "Czech law"]) {
    assert.ok(terms.includes(claim), `the English terms must state ${claim}`);
  }
  assert.match(terms, /future major version \(2\.0\) is a new product/);

  const cancellation = await (await render("/en/cancellation")).text();
  assert.match(cancellation, /fourteen days without giving any reason/);
  assert.match(cancellation, /Model withdrawal form/);
  assert.match(cancellation, /If those declarations were not made, your right of withdrawal runs the full fourteen days/);

  const privacy = await (await render("/en/privacy")).text();
  for (const recipient of ["Cloudflare", "Stripe", "Resend", "Hugging Face", "api.witnessmac.com"]) {
    assert.ok(privacy.includes(recipient), `the English privacy policy must name ${recipient}`);
  }
  assert.match(privacy, /The other seven are not transmitted/);
  for (const event of ["trial_started", "activation_requested", "paywall_shown"]) {
    assert.ok(privacy.includes(event), `the English privacy policy must name the ${event} event`);
  }
  assert.match(privacy, /Settings → Privacy/);
  assert.match(privacy, /no cookies/);
  assert.doesNotMatch(privacy, /Google Analytics 4/);
  assert.doesNotMatch(privacy, /PostHog/);
  assert.match(privacy, /Úřad pro ochranu osobních údajů/);

  const licences = await (await render("/en/licences")).text();
  for (const holder of ["WhisperKit", "argmax", "OpenAI", "Apache-2.0"]) {
    assert.ok(licences.includes(holder), `the English attribution page must name ${holder}`);
  }
  assert.match(licences, /Permission is hereby granted, free of charge/);

  // Both sets describe the same checkout. The declaration is made in the app,
  // because the payment page cannot ask -- and both pages have to say so, or
  // one of them is describing a product that does not exist.
  const [de, en] = await Promise.all([render("/widerruf"), render("/en/cancellation")].map(async (r) => (await r).text()));
  assert.match(de, /Kaufknöpfe tun nichts, solange nicht angekreuzt ist/);
  assert.match(en, /Buy buttons do nothing until it is ticked/);
});

test("declares the measurement it is configured for, in both languages, and asks before loading it", async () => {
  // The claim in section 8 is generated from the same environment the tag
  // reads. This is the assertion that stops the page describing a measurement
  // that is switched off -- or, worse, staying silent about one that is on.
  const originals = {
    GA4_MEASUREMENT_ID: process.env.GA4_MEASUREMENT_ID,
    ADS_CONVERSION_ID: process.env.ADS_CONVERSION_ID,
    ADS_DOWNLOAD_CONVERSION_LABEL: process.env.ADS_DOWNLOAD_CONVERSION_LABEL,
    POSTHOG_KEY: process.env.POSTHOG_KEY,
  };
  process.env.GA4_MEASUREMENT_ID = "G-TEST12345";
  process.env.ADS_CONVERSION_ID = "AW-123456789";
  process.env.ADS_DOWNLOAD_CONVERSION_LABEL = "abcdeFGHij_klm";
  process.env.POSTHOG_KEY = TEST_POSTHOG_KEY;
  try {
    const datenschutz = await (await render("/datenschutz")).text();
    assert.match(datenschutz, /Google Analytics 4/);
    assert.match(datenschutz, /Google Ireland Limited/);
    assert.match(datenschutz, /§ 25 Abs. 1 TDDDG/);
    assert.match(datenschutz, /witness.consent/);
    assert.doesNotMatch(datenschutz, /keine Cookies/);

    const privacy = await (await render("/en/privacy")).text();
    assert.match(privacy, /Google Analytics 4/);
    assert.match(privacy, /§ 25\(1\) TDDDG/);
    assert.doesNotMatch(privacy, /no cookies/);

    // Consent governs storage, not measurement, and the policy has to describe
    // that shape rather than a stricter one we do not run: both branches of
    // section 8 are named, and neither promises that declining stops the tag.
    assert.match(datenschutz, /Ohne deine Einwilligung/);
    // The policy names the event the site actually reports.
    assert.match(datenschutz, /Downloadseite/);
    assert.match(datenschutz, /Mit deiner Einwilligung/);
    assert.doesNotMatch(datenschutz, /passiert davon nichts/);
    assert.match(privacy, /Without your consent/);
    assert.match(privacy, /With your consent/);

    // PostHog is a processor in a second country with a second storage model,
    // so the paragraph may not reduce to naming it. These four are the claims
    // that make the disclosure worth reading: who, where, that the identifier
    // is optional, and that no replay is running.
    for (const claim of ["PostHog, Inc.", "EU Cloud", "Frankfurt am Main", "Session recording is switched off", "witnessmac.com/ingest"]) {
      assert.ok(privacy.includes(claim), `the English privacy policy must state ${claim}`);
    }
    // PostHog Cloud has no retention setting: a plan guarantees that data is
    // kept for a year, which is not a promise that it is deleted after one.
    // So the policies may state the criterion, and may not state a period.
    assert.match(privacy, /no automatic retention period to configure/);
    assert.doesNotMatch(privacy, /events in PostHog are deleted after \d+ months/);
    assert.match(datenschutz, /eine automatische Löschfrist bietet PostHog nicht an/);
    assert.doesNotMatch(datenschutz, /Ereignisse in PostHog werden nach \d+ Monaten gelöscht/);
    for (const claim of ["PostHog, Inc.", "EU Cloud", "Frankfurt am Main", "Sitzungsaufzeichnungen sind abgeschaltet", "witnessmac.com/ingest"]) {
      assert.ok(datenschutz.includes(claim), `the privacy policy must state ${claim}`);
    }
    // An entity that survives into the page is a string literal that was
    // written as if it were JSX text. It renders as itself, in a legal text.
    assert.doesNotMatch(datenschutz, /&apos;|&amp;apos;/);
    assert.doesNotMatch(privacy, /&apos;|&amp;apos;/);

    // The identifiers reach the browser, because the banner needs them once
    // the reader agrees; the conversion label is not a secret either.
    const danke = await (await render("/danke")).text();
    assert.ok(danke.includes("G-TEST12345"), "the thank-you page must carry the measurement id for the tag it may load");
    assert.ok(danke.includes(TEST_POSTHOG_KEY), "the thank-you page must carry the project key for the library it may load");
  } finally {
    for (const [key, value] of Object.entries(originals)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
});

test("names PostHog on its own, without borrowing Google's paragraph", async () => {
  // PostHog first and Google later is a real order to arrive in: product
  // analytics costs nothing to start and the ad account is a decision. The
  // section then may not claim an ad measurement that is not running.
  const originals = {
    GA4_MEASUREMENT_ID: process.env.GA4_MEASUREMENT_ID,
    ADS_CONVERSION_ID: process.env.ADS_CONVERSION_ID,
    ADS_DOWNLOAD_CONVERSION_LABEL: process.env.ADS_DOWNLOAD_CONVERSION_LABEL,
    POSTHOG_KEY: process.env.POSTHOG_KEY,
  };
  delete process.env.GA4_MEASUREMENT_ID;
  delete process.env.ADS_CONVERSION_ID;
  delete process.env.ADS_DOWNLOAD_CONVERSION_LABEL;
  process.env.POSTHOG_KEY = TEST_POSTHOG_KEY;
  try {
    const datenschutz = await (await render("/datenschutz")).text();
    assert.match(datenschutz, /PostHog/);
    assert.doesNotMatch(datenschutz, /Google Analytics 4/);
    assert.doesNotMatch(datenschutz, /Conversion-Tag von Google Ads/);
    // The banner exists because PostHog may store something once agreed to.
    assert.doesNotMatch(datenschutz, /keine Cookies/);
    assert.match(datenschutz, /§ 25 Abs. 1 TDDDG/);

    const privacy = await (await render("/en/privacy")).text();
    assert.match(privacy, /PostHog/);
    assert.doesNotMatch(privacy, /Google Analytics 4/);
    assert.doesNotMatch(privacy, /Google Ads conversion tag/);
    assert.doesNotMatch(privacy, /no cookies/);
  } finally {
    for (const [key, value] of Object.entries(originals)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
});

test("names only the measurement that is actually configured", async () => {
  // Ads without Analytics is the state the account reaches first, and the
  // policy may not name a product that is switched off.
  const originals = { GA4_MEASUREMENT_ID: process.env.GA4_MEASUREMENT_ID, ADS_CONVERSION_ID: process.env.ADS_CONVERSION_ID, ADS_DOWNLOAD_CONVERSION_LABEL: process.env.ADS_DOWNLOAD_CONVERSION_LABEL, POSTHOG_KEY: process.env.POSTHOG_KEY };
  delete process.env.GA4_MEASUREMENT_ID;
  delete process.env.POSTHOG_KEY;
  process.env.ADS_CONVERSION_ID = "AW-123456789";
  process.env.ADS_DOWNLOAD_CONVERSION_LABEL = "abcdeFGHij_klm";
  try {
    const datenschutz = await (await render("/datenschutz")).text();
    assert.match(datenschutz, /Conversion-Tag von Google Ads/);
    assert.doesNotMatch(datenschutz, /Google Analytics 4/);
    assert.doesNotMatch(datenschutz, /nach 14 Monaten/);

    const privacy = await (await render("/en/privacy")).text();
    assert.match(privacy, /Google Ads conversion tag/);
    assert.doesNotMatch(privacy, /Google Analytics 4/);
    assert.doesNotMatch(privacy, /PostHog/);
  } finally {
    for (const [key, value] of Object.entries(originals)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
});

test("ignores measurement identifiers that are not shaped like identifiers", async () => {
  const original = process.env.GA4_MEASUREMENT_ID;
  process.env.GA4_MEASUREMENT_ID = "G-<script>alert(1)</script>";
  try {
    const datenschutz = await (await render("/datenschutz")).text();
    assert.match(datenschutz, /keine Cookies/);
    assert.doesNotMatch(datenschutz, /alert\(1\)/);
  } finally {
    if (original === undefined) delete process.env.GA4_MEASUREMENT_ID;
    else process.env.GA4_MEASUREMENT_ID = original;
  }
});

test("derives complete social metadata from a sanitized forwarded origin", async () => {
  const response = await render("/en", {
    "user-agent": "Twitterbot/1.0",
    "x-forwarded-host": "preview.example, internal.invalid",
    "x-forwarded-proto": "https, http",
  });
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /<link rel="canonical" href="https:\/\/preview\.example\/en"/i);
  assert.match(html, /hreflang="de" href="https:\/\/preview\.example"/i);
  assert.match(html, /property="og:url" content="https:\/\/preview\.example\/en"/i);
  assert.match(html, /name="twitter:image" content="https:\/\/preview\.example\/og\.png"/i);
});

test("rejects malformed forwarded values without failing metadata rendering", async () => {
  const response = await render("/", {
    host: "safe.example",
    "x-forwarded-host": "bad host, attacker.example",
    "x-forwarded-proto": "javascript, https",
  });
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /<link rel="canonical" href="https:\/\/safe\.example"/i);
  assert.doesNotMatch(html, /attacker\.example|javascript:/i);
});

// witnessmac.com and www.witnessmac.com are both bound to the worker, and the
// canonical, the hreflang set and the sitemap are all built from the host that
// asked. Without this redirect each host published a self-canonicalising copy
// of the site and Google indexed pages under both.
test("redirects www to the apex, keeping the path and the query", async () => {
  const response = await render("/vergleich/wispr-flow-alternative?ref=producthunt", {}, "https://www.witnessmac.com");
  assert.equal(response.status, 301);
  assert.equal(response.headers.get("location"), "https://witnessmac.com/vergleich/wispr-flow-alternative?ref=producthunt");
  assert.equal(response.headers.get("strict-transport-security"), "max-age=31536000");
});

test("redirects the crawler's own routes on www as well", async () => {
  for (const path of ["/", "/en", "/sitemap.xml", "/robots.txt"]) {
    const response = await render(path, {}, "https://www.witnessmac.com");
    assert.equal(response.status, 301, path);
    assert.equal(response.headers.get("location"), `https://witnessmac.com${path === "/" ? "/" : path}`, path);
  }
});

test("serves the apex rather than redirecting it to itself", async () => {
  const response = await render("/", {}, "https://witnessmac.com");
  assert.equal(response.status, 200);
});

// The redirect reads the host the request arrived on and never the forwarded
// header, which any caller may write: taking `www.` off an attacker's value
// would hand them an open redirect. Metadata still derives from the forwarded
// host, by the decision the two tests above record -- a canonical that is wrong
// for one caller costs nothing, a redirect sends a reader somewhere else.
test("ignores a forwarded www host rather than redirecting off-site", async () => {
  const response = await render("/", {
    host: "safe.example",
    "x-forwarded-host": "www.attacker.example",
  });
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("location"), null);
});

test("keeps legal metadata route-specific and non-indexable", async () => {
  const expected = new Map([
    ["/impressum", "Anbieterkennzeichnung und rechtliche Hinweise"],
    ["/agb", "Vertrags- und Lizenzbedingungen für den Kauf"],
    ["/datenschutz", "Datenschutzerklärung für die Website"],
    ["/widerruf", "Widerrufsbelehrung und Muster-Widerrufsformular"],
    ["/lizenzen", "Quelloffene Komponenten und Spracherkennungsmodelle"],
    ["/en/legal-notice", "Provider identification and legal information"],
    ["/en/terms", "Terms of sale and licence terms"],
    ["/en/privacy", "Privacy policy for the website"],
    ["/en/cancellation", "Right of withdrawal and model withdrawal form"],
    ["/en/licences", "Open-source components and speech recognition models"],
  ]);
  for (const [route, description] of expected) {
    const response = await render(route);
    const html = await response.text();
    assert.match(html, /<meta name="robots" content="noindex, nofollow"/i, route);
    assert.match(html, new RegExp(description), route);
    assert.doesNotMatch(html, /property="og:/i, route);
  }
});

test("serves host-consistent crawl files containing only indexable landing routes", async () => {
  const [robotsResponse, sitemapResponse] = await Promise.all([
    render("/robots.txt", {}, "https://preview.example"),
    render("/sitemap.xml", {}, "https://preview.example"),
  ]);
  const [robots, sitemap] = await Promise.all([robotsResponse.text(), sitemapResponse.text()]);
  assert.equal(robotsResponse.status, 200);
  assert.match(robots, /Allow: \/\n/);
  assert.doesNotMatch(robots, /Disallow:\s*\/danke/);
  assert.match(robots, /Sitemap: https:\/\/preview\.example\/sitemap\.xml/);
  assert.deepEqual([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]), [
    "https://preview.example",
    "https://preview.example/en",
    "https://preview.example/ru",
    "https://preview.example/uk",
    ...comparisonPaths.map((path) => `https://preview.example${path}`),
  ]);
  assert.doesNotMatch(sitemap, /danke|impressum|datenschutz|widerruf|agb|lizenzen|download/);
  assert.doesNotMatch(sitemap, /\/en\/(terms|cancellation|privacy|legal-notice|licences)/);
});

test("renders the source-dated comparison hub and every required AEO route", async () => {
  for (const route of comparisonPaths) {
    const response = await render(route, {
      "user-agent": "Twitterbot/1.0",
      "x-forwarded-host": "preview.example",
      "x-forwarded-proto": "https",
    }, "https://preview.example");
    const html = await response.text();
    assert.equal(response.status, 200, route);
    assert.match(html, /<html lang="de">/i, route);
    assert.match(html, new RegExp(`<link rel="canonical" href="https://preview\\.example${route}"`, "i"), route);
    assert.doesNotMatch(html, /<meta name="robots" content="noindex/i, route);
    if (route !== "/vergleich") {
      assert.match(html, /\d{1,2}\. August 2026/, route);
      assert.match(html, /Offizielle Quellen/, route);
      assert.doesNotMatch(html, /(?:og:image|twitter:image|\/og\.png)/i, route);
      assert.match(html, /nicht öffentlich dokumentiert/, route);
    }
  }
});

test("keeps visible FAQ, offer data, and structured data in parity", async () => {
  for (const route of ["/", "/en"]) {
    const response = await render(route);
    const html = await response.text();
    const scripts = [...html.matchAll(/<script type="application\/ld\+json">([^<]+)<\/script>/g)].map((match) => JSON.parse(match[1]));
    assert.equal(scripts.length, 2, route);
    const software = scripts.find((entry) => entry["@type"] === "SoftwareApplication");
    const faq = scripts.find((entry) => entry["@type"] === "FAQPage");
    assert.deepEqual(software.offers.map((offer) => offer.price), ["99", "49"]);
    assert.match(software.operatingSystem, /macOS 14\.4/);
    assert.equal(faq.mainEntity.length, 9);
    for (const item of faq.mainEntity) {
      assert.ok(html.includes(item.name), `${route}: missing visible FAQ question`);
      assert.ok(html.includes(item.acceptedAnswer.text), `${route}: missing visible FAQ answer`);
    }
  }
});

test("keeps download routing index-safe and fails to an honest localized page", async () => {
  const response = await render("/download?lang=en");
  assert.equal(response.status, 307);
  assert.equal(response.headers.get("location"), "http://localhost/danke?lang=en&download=unavailable");
  assert.equal(response.headers.get("cache-control"), "private, no-store");
  assert.equal(response.headers.get("referrer-policy"), "no-referrer");
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-robots-tag"), "noindex, nofollow, noarchive");

  const original = process.env.DOWNLOAD_URL;
  process.env.DOWNLOAD_URL = "https://downloads.example/Witness.dmg";
  try {
    const startedPageHtml = await (await render("/danke?download=auto")).text();
    assert.match(startedPageHtml, /<iframe[^>]+aria-hidden="true"[^>]+tabindex="-1"/i);
  } finally {
    if (original === undefined) delete process.env.DOWNLOAD_URL;
    else process.env.DOWNLOAD_URL = original;
  }
});

test("redirects to a validated HTTPS download when the runtime target is configured", async () => {
  const original = process.env.DOWNLOAD_URL;
  process.env.DOWNLOAD_URL = "https://downloads.example/Witness.dmg?channel=stable";
  try {
    const response = await render("/download");
    assert.equal(response.status, 307);
    assert.equal(response.headers.get("location"), "https://downloads.example/Witness.dmg?channel=stable");
    assert.equal(response.headers.get("cache-control"), "private, no-store");
    assert.equal(response.headers.get("x-robots-tag"), "noindex, nofollow, noarchive");
  } finally {
    if (original === undefined) delete process.env.DOWNLOAD_URL;
    else process.env.DOWNLOAD_URL = original;
  }
});

test("keeps the two rules that decide whether the tag sends anything at all", async () => {
  // Both of these shipped broken, both were invisible from the outside, and
  // both produce the same symptom: gtag.js loads, `gtm.load` fires, the page
  // looks instrumented, and the property receives nothing. They are asserted
  // from the source because the browser half cannot be run here -- what makes
  // them true is one word and one line order, and both are easy to tidy away.
  const gtag = await readFile(new URL("app/_lib/gtag.ts", projectRoot), "utf8");
  const shim = gtag.slice(gtag.indexOf("function ensureGtag"), gtag.indexOf("let loading"));

  // gtag.js replays an `Arguments` object as a command and ignores an `Array`.
  // `function gtag(...args) { push(args) }` reads like Google's snippet and is
  // an off switch: every consent, config and event is dropped in silence.
  assert.match(shim, /push\(arguments\)/, "the dataLayer shim must push the arguments object, never an array");
  assert.doesNotMatch(shim, /push\(args\)/, "a rest parameter here disables the whole tag");

  const measure = await readFile(new URL("app/_lib/measure.ts", projectRoot), "utf8");
  const report = measure.slice(measure.indexOf("export function reportDownload"));

  // Effects run child-first: the download reports itself before the consent
  // banner at the bottom of the tree loads the tag. An `event` replayed ahead
  // of the `config` for its own measurement id is dropped, so the page sends a
  // page_view and no conversion -- which looks exactly like a working tag.
  const loaded = report.indexOf("startMeasurement(");
  const reported = report.indexOf("reportDownloadToGoogle(");
  assert.ok(loaded !== -1, "reportDownload must load the tag itself");
  assert.ok(loaded < reported, "the tag must be configured before the event is queued, or the event is dropped");
});

test("removes all disposable starter-preview code", async () => {
  const packageJson = await readFile(new URL("package.json", projectRoot), "utf8");
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("app/_sites-preview/SkeletonPreview.tsx", projectRoot)));
  await assert.rejects(access(new URL("app/_sites-preview/preview.css", projectRoot)));
});

test("forwards the analytics prefix to PostHog's EU region, without the cookie jar", async () => {
  // The proxy is the one piece no rendered page can show. It is also the piece
  // whose failure is invisible: a broken prefix means every event 404s and the
  // dashboard is simply empty, which looks exactly like having no visitors.
  //
  // The upstream is not called here. What is asserted is what the request is
  // turned into, because that is what section 8 of both policies describes.
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `proxy-${process.pid}-${Math.random()}`);
  const { default: worker } = await import(workerUrl.href);

  const seen = [];
  const realFetch = globalThis.fetch;
  globalThis.fetch = async (request) => {
    seen.push(request);
    return new Response("{}", { status: 200, headers: { "content-type": "application/json" } });
  };
  try {
    const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
    const ctx = { waitUntil() {}, passThroughOnException() {} };

    const captured = await worker.fetch(
      new Request("http://localhost/ingest/e/?ip=1", {
        method: "POST",
        body: "{}",
        headers: { cookie: "witness.consent=granted", "cf-connecting-ip": "203.0.113.7", "content-type": "application/json" },
      }),
      env,
      ctx,
    );
    assert.equal(captured.status, 200);
    assert.equal(seen.length, 1);
    assert.equal(seen[0].url, "https://eu.i.posthog.com/e/?ip=1");
    // The reader's own cookies are not a processor's business -- least of all
    // the answer they gave this site's consent banner.
    assert.equal(seen[0].headers.get("cookie"), null);
    // Without this every reader resolves to one Cloudflare address, and the
    // country column becomes a single row. The policies say it is passed on.
    assert.equal(seen[0].headers.get("x-forwarded-for"), "203.0.113.7");

    // PostHog serves its own bundles from a second host; routing those at the
    // ingest host returns 404 for each one.
    await worker.fetch(new Request("http://localhost/ingest/static/array.js"), env, ctx);
    assert.equal(seen[1].url, "https://eu-assets.i.posthog.com/static/array.js");

    // A path that merely starts with the same letters is the app's, not the proxy's.
    await worker.fetch(new Request("http://localhost/ingested"), env, ctx);
    assert.equal(seen.length, 2, "/ingested is a page, not the analytics prefix");
  } finally {
    globalThis.fetch = realFetch;
  }
});
