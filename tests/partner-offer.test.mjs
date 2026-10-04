import assert from "node:assert/strict";
import test from "node:test";

const {
  checkoutFor,
  checkoutWithCode,
  discountedPrice,
  offerCookieAssignment,
  offerForRef,
  offerHasEnded,
  partnerFromCookies,
  partnerOffers,
} = await import("../app/_data/partnerOffers.ts");

const lifetimeLink = "https://buy.stripe.com/9B614n34g2toeIQcEqds403";
const annualLink = "https://buy.stripe.com/6oU00j7kwd826ck7k6ds404";
const october = Date.parse("2026-10-04T12:00:00+02:00");
const january = Date.parse("2027-01-01T00:00:00+01:00");

test("a partner's ref finds its offer, whatever the case", () => {
  assert.equal(offerForRef("tamara")?.code, "TAMARA30");
  assert.equal(offerForRef(" Tamara ")?.code, "TAMARA30");
});

test("an unknown or missing ref shows nothing", () => {
  assert.equal(offerForRef(null), null);
  assert.equal(offerForRef(""), null);
  assert.equal(offerForRef("producthunt"), null);
  // Not an own key, so not an offer.
  assert.equal(offerForRef("constructor"), null);
  assert.equal(offerForRef("__proto__"), null);
});

test("TAMARA30 runs to the end of 2026, Prague time, the same minute Stripe stops it", () => {
  const offer = partnerOffers.tamara;
  assert.equal(Date.parse(offer.endsAt) / 1000, 1798757940);
  assert.equal(offerHasEnded(offer, Date.parse("2026-12-31T23:58:59+01:00")), false);
  assert.equal(offerHasEnded(offer, january), true);
});

test("the discounted prices are the ones Stripe will charge", () => {
  assert.equal(discountedPrice("lifetime", 30), 69.3);
  assert.equal(discountedPrice("annual", 30), 34.3);
});

test("the checkout links are the app's Payment Links with the code prefilled", () => {
  assert.equal(checkoutWithCode("lifetime", "TAMARA30"), `${lifetimeLink}?prefilled_promo_code=TAMARA30`);
  assert.equal(checkoutWithCode("annual", "TAMARA30"), `${annualLink}?prefilled_promo_code=TAMARA30`);
});

test("the cookie holds the partner's name and nothing else, and dies with the offer", () => {
  const assignment = offerCookieAssignment(partnerOffers.tamara, october);
  assert.match(assignment, /^witness_offer=tamara; Max-Age=\d+; Path=\/; SameSite=Lax; Secure$/);
  const maxAge = Number(/Max-Age=(\d+)/.exec(assignment)[1]);
  assert.equal(october + maxAge * 1000 <= Date.parse(partnerOffers.tamara.endsAt), true);
  assert.equal(offerCookieAssignment(partnerOffers.tamara, january), null);
});

test("the cookie is found among others, and only under its own name", () => {
  assert.equal(partnerFromCookies("a=1; witness_offer=tamara; b=2"), "tamara");
  assert.equal(partnerFromCookies("not_witness_offer=tamara"), null);
  assert.equal(partnerFromCookies(""), null);
  assert.equal(partnerFromCookies(null), null);
});

test("/buy prefills the code only for a known partner whose offer is still running", () => {
  assert.equal(checkoutFor("lifetime", "witness_offer=tamara", october), `${lifetimeLink}?prefilled_promo_code=TAMARA30`);
  assert.equal(checkoutFor("annual", "witness_offer=tamara", october), `${annualLink}?prefilled_promo_code=TAMARA30`);
  assert.equal(checkoutFor("lifetime", "witness_offer=tamara", january), lifetimeLink);
  assert.equal(checkoutFor("lifetime", "witness_offer=somebody", october), lifetimeLink);
  assert.equal(checkoutFor("annual", null, october), annualLink);
});

async function fetchFromWorker(path, headers = {}) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${Math.random()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html", ...headers } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("the code is not in the HTML the server sends, even with the partner's ref", async () => {
  for (const path of ["/ru?ref=tamara", "/?ref=tamara"]) {
    const response = await fetchFromWorker(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.doesNotMatch(html, /TAMARA30/, path);
    // The cards still render the list prices for everybody.
    assert.match(html, /<sup>€<\/sup>99/, path);
    assert.match(html, /<sup>€<\/sup>49/, path);
  }
});

test("/buy redirects the app's two buttons to Stripe, with the code when the cookie is there", async () => {
  // Valid until the end of 2026; after that the cookie stops mattering, and so does this case.
  const running = Date.now() < Date.parse(partnerOffers.tamara.endsAt);
  const cases = [
    ["/buy?plan=lifetime", {}, lifetimeLink],
    ["/buy?plan=annual", {}, annualLink],
    ["/buy?plan=lifetime", { cookie: "witness_offer=tamara" }, running ? `${lifetimeLink}?prefilled_promo_code=TAMARA30` : lifetimeLink],
    ["/buy?plan=annual", { cookie: "witness_offer=tamara" }, running ? `${annualLink}?prefilled_promo_code=TAMARA30` : annualLink],
  ];
  for (const [path, headers, target] of cases) {
    const response = await fetchFromWorker(path, headers);
    assert.equal(response.status, 307, path);
    assert.equal(response.headers.get("location"), target, path);
    assert.equal(response.headers.get("cache-control"), "private, no-store", path);
    assert.match(response.headers.get("x-robots-tag") ?? "", /noindex/, path);
  }
  const lost = await fetchFromWorker("/buy?plan=forever");
  assert.equal(lost.status, 307);
  assert.equal(lost.headers.get("location"), "http://localhost/#preis");
});
