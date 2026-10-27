import assert from "node:assert/strict";
import test from "node:test";

const { isAutomatedClient, preferredHomeLocale: rank } = await import("../app/_lib/browserLocale.ts");
const preferredHomeLocale = (header) => rank(header, ["de", "en", "ru", "uk"], "en");

test("picks the reader's highest-ranked language that has a home page", () => {
  assert.equal(preferredHomeLocale("de-DE,de;q=0.9,en;q=0.8"), "de");
  assert.equal(preferredHomeLocale("de-AT"), "de");
  assert.equal(preferredHomeLocale("en-US,en;q=0.9"), "en");
  assert.equal(preferredHomeLocale("ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7"), "ru");
  assert.equal(preferredHomeLocale("uk-UA,uk;q=0.9,ru;q=0.8"), "uk");
  // Order in the header is not rank: q decides, position only breaks ties.
  assert.equal(preferredHomeLocale("en;q=0.5,de;q=0.9"), "de");
  assert.equal(preferredHomeLocale("ru,uk"), "ru");
  // A language without a home page is skipped, not a reason to stop looking.
  assert.equal(preferredHomeLocale("pl-PL,pl;q=0.9,de;q=0.8"), "de");
  // q=0 means "not this one".
  assert.equal(preferredHomeLocale("en;q=0,de"), "de");
});

test("falls back to English for a header that names none of the four", () => {
  assert.equal(preferredHomeLocale("fr-FR,fr;q=0.9"), "en");
  assert.equal(preferredHomeLocale("es"), "en");
});

test("has nothing to say without a header", () => {
  assert.equal(preferredHomeLocale(null), null);
  assert.equal(preferredHomeLocale(""), null);
  assert.equal(preferredHomeLocale("*"), null);
});

test("treats crawlers, link previews and an empty user agent as automated", () => {
  for (const agent of [
    "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    "AdsBot-Google (+http://www.google.com/adsbot.html)",
    "Mozilla/5.0 (Linux; Android 6.0.1) Chrome/120.0 Mobile Safari/537.36 (compatible; Google-InspectionTool/1.0)",
    "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
    "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)",
    "Slackbot-LinkExpanding 1.0 (+https://api.slack.com/robots)",
    "TelegramBot (like TwitterBot)",
    "WhatsApp/2.23.20.0",
    "",
    null,
  ]) {
    assert.equal(isAutomatedClient(agent), true, String(agent));
  }
  assert.equal(isAutomatedClient("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15"), false);
});
