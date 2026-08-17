import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);
const comparisonPaths = [
  "/vergleich",
  "/vergleich/wispr-flow-alternative",
  "/vergleich/superwhisper-alternative",
  "/vergleich/sprecho-alternative",
  "/vergleich/voiceink-vs-localdictation",
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
  assert.equal(response.headers.get("permissions-policy"), "camera=(), geolocation=(), microphone=()");
  assert.match(html, /Diktieren statt tippen/);
  assert.match(html, /Alles bleibt auf deinem Mac/);
  assert.match(html, /Für alle, die auf Deutsch und Englisch arbeiten/);
  assert.match(html, /€99/);
  assert.match(html, /€49/);
  assert.equal((html.match(/<a[^>]+href="\/danke\?download=auto"[^>]*>[\s\S]*?Für Mac laden<\/a>/g) ?? []).length, 3);
  assert.match(html, /nicht öffentlich dokumentiert/);
  assert.match(html, /Felder, Zweck, Empfänger und Speicherdauer ansehen/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
  assert.doesNotMatch(html, />\s*(?:ohne|kein) Abo\s*</i);

  const anchors = ["funktion", "verifikation", "datenschutz", "vergleich", "preis", "faq"];
  const positions = anchors.map((id) => html.indexOf(`id="${id}"`));
  assert.ok(positions.every((position) => position >= 0));
  assert.deepEqual([...positions].sort((a, b) => a - b), positions);
});

test("renders the English variant and reciprocal language links", async () => {
  const [deResponse, enResponse] = await Promise.all([render("/"), render("/en")]);
  const [deHtml, enHtml] = await Promise.all([deResponse.text(), enResponse.text()]);
  assert.equal(enResponse.status, 200);
  assert.match(enHtml, /<html lang="en">/i);
  assert.match(enHtml, /Dictate instead of typing/);
  assert.match(enHtml, /Everything stays on your Mac/);
  assert.match(enHtml, /href="\/"/i);
  assert.match(enHtml, /hreflang="de"/i);
  assert.match(deHtml, /href="\/en"/i);
});

test("keeps the optional thank-you form honest and index-safe", async () => {
  const response = await render("/danke?preview=1");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Wohin sollen wir deinen Lizenzschlüssel schicken/);
  assert.match(html, /Womit arbeitest du/);
  assert.match(html, /Welche Sprachen mischst du/);
  assert.match(html, /Überspringen/);
  assert.match(html, /signierte Build ist noch nicht/);
  assert.match(html, /noindex/i);
  assert.match(html, /<form[^>]+method="post"/i);
  assert.match(html, /<button[^>]+type="submit"[^>]+disabled/i);
  assert.doesNotMatch(html, /LEAD_ENDPOINT|DOWNLOAD_URL/);
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
  assert.match(thanksHtml, /Install LocalDictation and request your licence key/);
});

test("serves privacy, legal drafts, and llms context", async () => {
  for (const route of ["/impressum", "/datenschutz", "/widerruf"]) {
    const response = await render(route);
    assert.equal(response.status, 200, route);
    assert.match(await response.text(), /Entwurf für die private Produktvorschau/);
  }

  const llmsResponse = await render("/llms.txt");
  assert.equal(llmsResponse.status, 200);
  assert.match(llmsResponse.headers.get("content-type") ?? "", /^text\/plain/i);
  const llms = await llmsResponse.text();
  assert.match(llms, /Speech recognition and text processing run on the Mac/);
  assert.equal(llms.trim().split(/\n\n+/).length, 3);
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
    ["/datenschutz", "Datenschutzgrenzen und vorgesehener Daten-Allowlist"],
    ["/widerruf", "Entwurf der Widerrufsbelehrung"],
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
    ...comparisonPaths.map((path) => `https://preview.example${path}`),
  ]);
  assert.doesNotMatch(sitemap, /danke|impressum|datenschutz|widerruf|download/);
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
      assert.match(html, /18\. August 2026/, route);
      assert.match(html, /Offizielle Quellen/, route);
      assert.match(html, /https:\/\/preview\.example\/og\.png/, route);
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
});

test("removes all disposable starter-preview code", async () => {
  const packageJson = await readFile(new URL("package.json", projectRoot), "utf8");
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("app/_sites-preview/SkeletonPreview.tsx", projectRoot)));
  await assert.rejects(access(new URL("app/_sites-preview/preview.css", projectRoot)));
});
