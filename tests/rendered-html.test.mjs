import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);
// Every route a buyer can reach from the footer, in both languages. Listing
// them once is what keeps a new legal page from shipping unlinked from the
// other four -- and keeps the two sets the same size, which is the cheapest
// way to notice that a document was translated and then forgotten.
// Most of these tests describe the thank-you page as it looks once an address
// can actually be received. The opposite state is asserted on its own below.
process.env.LEAD_ENDPOINT ??= "https://api.example/v1/leads";

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
  assert.equal((html.match(/<a[^>]+href="\/danke\?download=auto"[^>]*>[\s\S]*?Für Mac laden<\/a>/g) ?? []).length, 3);
  // One landing, one call to action: the hero offers the download and nothing competing with it.
  const hero = html.match(/<section class="hero[\s\S]*?<\/section>/)?.[0] ?? "";
  assert.equal((hero.match(/class="button/g) ?? []).length, 1, "hero must hold exactly one CTA");
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

test("renders the English variant and reciprocal language links", async () => {
  const [deResponse, enResponse, unrelatedResponse] = await Promise.all([render("/"), render("/en"), render("/enough")]);
  const [deHtml, enHtml, unrelatedHtml] = await Promise.all([deResponse.text(), enResponse.text(), unrelatedResponse.text()]);
  assert.equal(enResponse.status, 200);
  assert.match(enHtml, /<html lang="en">/i);
  assert.match(enHtml, /Dictate instead of typing/);
  assert.match(enHtml, /Everything stays on your Mac/);
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
  assert.match(ruHtml, /Куда прислать твой лицензионный ключ/);
  assert.match(ruHtml, /Где диктуешь чаще всего/);
  assert.match(ruHtml, /<option value="ai_prompts">Промпты для ИИ<\/option>/i);
  assert.match(ruHtml, /Универсальный доступ/);
  assert.match(ruHtml, /noindex/i);

  assert.match(ukHtml, /<html lang="uk">/i);
  assert.match(ukHtml, /Куди надіслати твій ліцензійний ключ/);
  assert.match(ukHtml, /<option value="ai_prompts">Промпти для ШІ<\/option>/i);
  assert.match(ukHtml, /Універсальний доступ/);
});

test("keeps the optional thank-you form honest and index-safe", async () => {
  const response = await render("/danke?preview=1");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Wohin sollen wir deinen Lizenzschlüssel schicken/);
  assert.match(html, /Wo diktierst du am meisten/);
  assert.match(html, /Überspringen/);
  // Why the key is worth having, in the numbers the app enforces:
  // `EntitlementPolicy.ungatedDuration` is three days and the trial key adds
  // ten. A page that asks for an address without naming the trade is the page
  // this assertion exists to stop shipping again.
  assert.match(html, /[Dd]rei Tage/);
  assert.match(html, /dreizehn/);
  assert.match(html, /Einstellungen → Lizenz/);
  assert.match(html, /Überspringen/);
  assert.match(html, /Der Download ist gerade nicht erreichbar/);
  assert.match(html, /noindex/i);
  assert.match(html, /<form[^>]+method="post"/i);
  assert.match(html, /<button[^>]+type="submit"[^>]+disabled/i);
  assert.match(html, /<option value="tickets_docs">Tickets &amp; Doku<\/option>/i);
  assert.match(html, /href="\/impressum"/i);
  assert.match(html, /href="\/widerruf"/i);
  assert.doesNotMatch(html, /LEAD_ENDPOINT|DOWNLOAD_URL/);
});

test("asks for an address only when something can receive it", async () => {
  // Production ran for a day in exactly this state: no endpoint, a form that
  // discarded what was typed, and a page promising a key by mail. With nothing
  // to receive an address the page must not ask for one and must send the
  // reader to the app instead.
  const original = process.env.LEAD_ENDPOINT;
  delete process.env.LEAD_ENDPOINT;
  try {
    const html = await (await render("/danke")).text();
    assert.doesNotMatch(html, /<form[^>]+method="post"/i);
    assert.doesNotMatch(html, /name="email"/);
    assert.doesNotMatch(html, /Wo diktierst du am meisten/);
    assert.doesNotMatch(html, /Trag deine Adresse ein/);
    // Nor may it ask a question it gives no way to answer.
    assert.doesNotMatch(html, /Wohin sollen wir deinen Lizenzschlüssel schicken/);
    assert.match(html, /Deinen Schlüssel holst du in der App/);
    // The trade is still named, and the key still has somewhere to come from.
    assert.match(html, /[Dd]rei Tage/);
    assert.match(html, /dreizehn/);
    assert.match(html, /Einstellungen → Lizenz/);
  } finally {
    if (original !== undefined) process.env.LEAD_ENDPOINT = original;
  }
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
  assert.match(thanksHtml, /Where should we send your licence key/);
  assert.match(thanksHtml, /Install Witness and request your licence key/);
  assert.match(thanksHtml, /Where do you dictate most/);
  assert.match(thanksHtml, /<option value="ai_prompts">AI prompts<\/option>/i);
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
  for (const [routes, stamp, counterparts] of [[legalRoutes, /Stand: 5\. September 2026/, legalRoutesEn], [legalRoutesEn, /Last updated: 5 September 2026/, legalRoutes]]) {
    for (const [index, route] of routes.entries()) {
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
  assert.match(datenschutz, /Úřad pro ochranu osobních údajů/);

  const lizenzen = await (await render("/lizenzen")).text();
  for (const holder of ["WhisperKit", "argmax", "OpenAI", "Apache-2.0"]) {
    assert.ok(lizenzen.includes(holder), `the attribution page must name ${holder}`);
  }
  // MIT is only satisfied by carrying the permission notice, not by naming it.
  assert.match(lizenzen, /Permission is hereby granted, free of charge/);

  // The landing page used to disclose transmitted funnel events. Nothing is
  // transmitted, so no locale may promise a disclosure the app does not make.
  for (const route of ["/", "/en", "/ru", "/uk"]) {
    const html = await (await render(route)).text();
    assert.doesNotMatch(html, /Funnel-Ereignisse|funnel events|событиями воронки|подіями воронки/, route);
    assert.doesNotMatch(html, /Entwurf|is currently a draft|черновиком|чернеткою/, route);
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
    ADS_LEAD_CONVERSION_LABEL: process.env.ADS_LEAD_CONVERSION_LABEL,
  };
  process.env.GA4_MEASUREMENT_ID = "G-TEST12345";
  process.env.ADS_CONVERSION_ID = "AW-123456789";
  process.env.ADS_LEAD_CONVERSION_LABEL = "abcdeFGHij_klm";
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

    // The identifiers reach the browser, because the banner needs them once
    // the reader agrees; the conversion label is not a secret either.
    const danke = await (await render("/danke")).text();
    assert.ok(danke.includes("G-TEST12345"), "the thank-you page must carry the measurement id for the tag it may load");
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
  const originals = { GA4_MEASUREMENT_ID: process.env.GA4_MEASUREMENT_ID, ADS_CONVERSION_ID: process.env.ADS_CONVERSION_ID, ADS_LEAD_CONVERSION_LABEL: process.env.ADS_LEAD_CONVERSION_LABEL };
  delete process.env.GA4_MEASUREMENT_ID;
  process.env.ADS_CONVERSION_ID = "AW-123456789";
  process.env.ADS_LEAD_CONVERSION_LABEL = "abcdeFGHij_klm";
  try {
    const datenschutz = await (await render("/datenschutz")).text();
    assert.match(datenschutz, /Conversion-Tag von Google Ads/);
    assert.doesNotMatch(datenschutz, /Google Analytics 4/);
    assert.doesNotMatch(datenschutz, /nach 14 Monaten/);

    const privacy = await (await render("/en/privacy")).text();
    assert.match(privacy, /Google Ads conversion tag/);
    assert.doesNotMatch(privacy, /Google Analytics 4/);
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

test("serializes only a policy-compliant lead endpoint into the client form", async () => {
  const original = process.env.LEAD_ENDPOINT;
  try {
    process.env.LEAD_ENDPOINT = "//collector.example/lead";
    const rejectedHtml = await (await render("/danke")).text();
    assert.doesNotMatch(rejectedHtml, /collector\.example/);

    process.env.LEAD_ENDPOINT = "/api/leads";
    const acceptedHtml = await (await render("/danke")).text();
    assert.match(acceptedHtml, /leadEndpoint.{0,20}\/api\/leads/);
  } finally {
    if (original === undefined) delete process.env.LEAD_ENDPOINT;
    else process.env.LEAD_ENDPOINT = original;
  }
});

test("removes all disposable starter-preview code", async () => {
  const packageJson = await readFile(new URL("package.json", projectRoot), "utf8");
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("app/_sites-preview/SkeletonPreview.tsx", projectRoot)));
  await assert.rejects(access(new URL("app/_sites-preview/preview.css", projectRoot)));
});
