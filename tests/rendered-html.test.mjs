import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${Math.random()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the complete German landing page in the required order", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();

  assert.match(html, /Diktieren statt tippen/);
  assert.match(html, /Alles bleibt auf deinem Mac/);
  assert.match(html, /Für alle, die auf Deutsch und Englisch arbeiten/);
  assert.match(html, /€99/);
  assert.match(html, /€49/);
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
  assert.match(await llmsResponse.text(), /Speech recognition and text processing run locally/);
});

test("removes all disposable starter-preview code", async () => {
  const packageJson = await readFile(new URL("package.json", projectRoot), "utf8");
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("app/_sites-preview/SkeletonPreview.tsx", projectRoot)));
  await assert.rejects(access(new URL("app/_sites-preview/preview.css", projectRoot)));
});
