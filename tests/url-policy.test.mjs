import assert from "node:assert/strict";
import test from "node:test";

import { safeHttpsUrl } from "../app/_lib/urlPolicy.ts";

test("accepts only credential-free HTTPS download targets without fragments", () => {
  assert.equal(safeHttpsUrl(" https://downloads.example/Witness.dmg?channel=stable ")?.toString(), "https://downloads.example/Witness.dmg?channel=stable");

  for (const value of [
    null,
    "",
    "http://downloads.example/Witness.dmg",
    "https://user:secret@downloads.example/Witness.dmg",
    "https://downloads.example/Witness.dmg#fragment",
    "/Witness.dmg",
    "javascript:alert(1)",
  ]) {
    assert.equal(safeHttpsUrl(value), null, String(value));
  }
});
