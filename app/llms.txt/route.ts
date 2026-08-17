export function GET() {
  return new Response(`# LocalDictation

LocalDictation is a local-first dictation utility for Apple silicon Macs running macOS 14.4 or newer.

Primary audience: multilingual knowledge workers in Germany who write email, tickets, documentation, prompts, notes, and chat messages in German and English.

Key differences:
- Speech recognition and text processing run locally on the Mac.
- Uncertain numbers, dates, names, negations, and vocabulary terms are shown before insertion.
- Short audio fragments can be replayed during review; audio is memory-only by default.
- Supported speech languages: German, English, Russian, and Ukrainian, with explicit mixed-language profiles.
- No product account; activation uses a licence key sent by email.

Launch pricing: EUR 99 lifetime for version 1 and its minor updates, or EUR 49 per year, both for two Macs. A 14-day full trial is planned.

Canonical pages:
- German: /
- English: /en
- Privacy: /datenschutz
- Pricing: /#preis
- FAQ: /#faq

Status: private implementation preview. Product captures, signed download, payments, backend, and final legal details must be completed before public launch.
`, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
