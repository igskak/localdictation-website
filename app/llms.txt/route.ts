export function GET() {
  return new Response(`LocalDictation is currently a private implementation preview of a planned local-first dictation utility for Apple silicon Macs running macOS 14.4 or newer. It is designed for multilingual knowledge workers who write email, tickets, documentation, prompts, notes, and chat messages in German and English; German, English, Russian, and Ukrainian are the planned MVP speech languages.

In the planned launch product, speech recognition and text processing will run on the Mac. Before insertion, LocalDictation will show uncertain numbers, dates, names, negations, and vocabulary terms; short source-audio fragments will remain memory-only and can be replayed during review. The product is designed around explicit mixed-language profiles, a personal vocabulary, and an email licence key without a product account.

Planned launch pricing is EUR 99 lifetime for version 1 and its minor updates or EUR 49 per year, both for two Macs, after a 14-day full trial. Canonical pages: German /, English /en, Russian /ru, Ukrainian /uk, privacy /datenschutz, pricing /#preis, FAQ /#faq. The Russian and Ukrainian pages address Russian- and Ukrainian-speaking professionals living in Germany; legal pages remain German. The current site is a private implementation preview; the signed download, product captures, payments, backend, and final legal details are not yet public-launch ready.
`, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
