import assert from "node:assert/strict";
import test from "node:test";

const { addressFromForm, forwardCancellation } = await import("../app/_lib/cancelSubscription.ts");

function form(email) {
  const data = new FormData();
  if (email !== undefined) data.set("email", email);
  return data;
}

test("only something shaped like an address is forwarded", () => {
  assert.equal(addressFromForm(form("  Buyer@Example.com ")), "Buyer@Example.com");
  assert.equal(addressFromForm(form("nope")), null);
  assert.equal(addressFromForm(form("a@b")), null);
  assert.equal(addressFromForm(form("two words@example.com")), null);
  assert.equal(addressFromForm(form("")), null);
  assert.equal(addressFromForm(form(undefined)), null);
  assert.equal(addressFromForm(form(`${"a".repeat(250)}@example.com`)), null);
});

test("the address goes to the activation service as JSON and nothing else does", async () => {
  let seen;
  const result = await forwardCancellation("buyer@example.com", async (url, init) => {
    seen = { url, init };
    return new Response("{}", { status: 200 });
  });

  assert.equal(result, "done");
  assert.equal(seen.url, "https://api.witnessmac.com/v1/subscriptions/cancel");
  assert.equal(seen.init.method, "POST");
  assert.deepEqual(JSON.parse(seen.init.body), { email: "buyer@example.com" });
});

test("a refused or unreachable service is reported as failed and never thrown", async () => {
  assert.equal(await forwardCancellation("buyer@example.com", async () => new Response("{}", { status: 429 })), "failed");
  assert.equal(await forwardCancellation("buyer@example.com", async () => { throw new Error("offline"); }), "failed");
});
