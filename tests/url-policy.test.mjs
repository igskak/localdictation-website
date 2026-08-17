import assert from "node:assert/strict";
import test from "node:test";

import { safeHttpsUrl, safeLeadEndpoint } from "../app/_lib/urlPolicy.ts";

test("accepts only credential-free HTTPS download targets without fragments", () => {
  assert.equal(safeHttpsUrl(" https://downloads.example/LocalDictation.dmg?channel=stable ")?.toString(), "https://downloads.example/LocalDictation.dmg?channel=stable");

  for (const value of [
    null,
    "",
    "http://downloads.example/LocalDictation.dmg",
    "https://user:secret@downloads.example/LocalDictation.dmg",
    "https://downloads.example/LocalDictation.dmg#fragment",
    "/LocalDictation.dmg",
    "javascript:alert(1)",
  ]) {
    assert.equal(safeHttpsUrl(value), null, String(value));
  }
});

test("allows same-origin paths or safe HTTPS lead endpoints and rejects origin escapes", () => {
  assert.equal(safeLeadEndpoint("/api/leads"), "/api/leads");
  assert.equal(safeLeadEndpoint("/api/leads?source=landing"), "/api/leads?source=landing");
  assert.equal(safeLeadEndpoint("https://leads.example/collect"), "https://leads.example/collect");

  for (const value of [
    "//collector.example/lead",
    "/\\collector.example/lead",
    "http://collector.example/lead",
    "https://user:secret@collector.example/lead",
    "https://collector.example/lead#fragment",
    "relative/lead",
    "javascript:alert(1)",
  ]) {
    assert.equal(safeLeadEndpoint(value), null, value);
  }
});
