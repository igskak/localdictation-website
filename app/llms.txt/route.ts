export function GET() {
  return new Response(`# Witness

Witness is a local-first dictation utility for Apple silicon Macs running macOS 14.4 or newer. It is for multilingual knowledge workers who write email, tickets, documentation, prompts, notes, and chat messages. Users choose their speech languages. Whisper supports all 100 Witness languages; Parakeet supports 25 European languages. German, English, Russian, and Ukrainian are measured end to end. Other languages get recognition while uncalibrated language-specific review signals stay off.

Speech recognition and text processing run on the Mac. Witness inserts the text at the cursor at once and marks passages that deserve a second look with a sign in the menu bar; one click opens a review panel with the flagged passages, the raw transcript and, where available, a short replay of the source audio, which stays in memory only. The product is built around an explicit user-chosen language set rather than automatic detection, a personal vocabulary, and an email licence key without a product account.

Witness 0.6.27 offers four local recognition models shared by Dictation and Notetaker: Whisper large-v3 turbo (about 1.64 GB), full Whisper large-v3 (about 3.20 GB), Parakeet Ultra (about 632 MB), and Parakeet TDT v3 (about 483 MB). Users choose a model in Settings or the optional final setup step. Downloads show progress while the current engine keeps working; a completed choice is applied after restart and local preparation. Models differ in languages, speed, size and recognition. A larger model is not necessarily better.

Notetaker is a demo for local meeting transcripts from the microphone and selected meeting app. Speaker separation is still being improved and labels may be inaccurate. Recording starts only after the user starts it. Audio stays in memory; meeting notes remain stored locally until deleted. Participants must receive any required notice or consent. The app never uploads this content.

Pricing is EUR 99 lifetime for version 1 and its minor updates or EUR 49 per year, both for two Macs, after a free trial of three days plus ten more once you add an e-mail address. The signed, Apple-notarized build is at /download. Canonical pages: German /, English /en, Russian /ru, Ukrainian /uk, privacy /datenschutz (English /en/privacy), terms /agb (English /en/terms), pricing /#preis, FAQ /#faq. The Russian and Ukrainian pages address Russian- and Ukrainian-speaking professionals living in Germany and link the English legal set.
`, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
