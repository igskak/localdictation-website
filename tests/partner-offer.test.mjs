import assert from "node:assert/strict";
import test from "node:test";

const { checkoutWithCode, discountedPrice, offerForRef, offerHasEnded, partnerOffers } = await import("../app/_data/partnerOffers.ts");

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

test("TAMARA30 runs to the end of 2026, Prague time, the same second Stripe stops it", () => {
  const offer = partnerOffers.tamara;
  assert.equal(Date.parse(offer.endsAt) / 1000, 1798757999);
  assert.equal(offerHasEnded(offer, Date.parse("2026-12-31T23:59:58+01:00")), false);
  assert.equal(offerHasEnded(offer, Date.parse("2027-01-01T00:00:00+01:00")), true);
});

test("the discounted prices are the ones Stripe will charge", () => {
  assert.equal(discountedPrice("lifetime", 30), 69.3);
  assert.equal(discountedPrice("annual", 30), 34.3);
});

test("the checkout links are the app's Payment Links with the code prefilled", () => {
  assert.equal(checkoutWithCode("lifetime", "TAMARA30"), "https://buy.stripe.com/4gMeVd20c3xs58g8oads401?prefilled_promo_code=TAMARA30");
  assert.equal(checkoutWithCode("annual", "TAMARA30"), "https://buy.stripe.com/cNidR97kw6JEeIQ33Qds402?prefilled_promo_code=TAMARA30");
});

test("the code is not in the HTML the server sends, even with the partner's ref", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${Math.random()}`);
  const { default: worker } = await import(workerUrl.href);
  for (const path of ["/ru?ref=tamara", "/?ref=tamara"]) {
    const response = await worker.fetch(
      new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
      { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
      { waitUntil() {}, passThroughOnException() {} },
    );
    assert.equal(response.status, 200);
    assert.doesNotMatch(await response.text(), /TAMARA30/, path);
  }
});
