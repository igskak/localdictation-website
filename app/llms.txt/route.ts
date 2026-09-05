export function GET() {
  return new Response(`Witness is a local-first dictation utility for Apple silicon Macs running macOS 14.4 or newer. It is for multilingual knowledge workers who write email, tickets, documentation, prompts, notes, and chat messages in German and English; Users tick the languages they speak from the 100 the engine knows, singly or in any combination; German, English, Russian, and Ukrainian are measured end to end, and the rest are recognized with per-language marks left off rather than guessed.

Speech recognition and text processing run on the Mac. Before insertion, Witness marks uncertain numbers, dates, names, negations, and vocabulary terms; short source-audio fragments stay in memory only and can be replayed during review. The product is built around an explicit user-chosen language set rather than automatic detection, a personal vocabulary, and an email licence key without a product account.

Pricing is EUR 99 lifetime for version 1 and its minor updates or EUR 49 per year, both for two Macs, after a 14-day full trial. The signed, Apple-notarized build is at /download. Canonical pages: German /, English /en, Russian /ru, Ukrainian /uk, privacy /datenschutz, pricing /#preis, FAQ /#faq. The Russian and Ukrainian pages address Russian- and Ukrainian-speaking professionals living in Germany; legal pages remain German.
`, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
