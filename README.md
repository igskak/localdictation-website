# LocalDictation website

German-first product site for LocalDictation, a local-first dictation utility for Apple silicon Macs. The site mirrors the native macOS product direction: restrained typography, compact system-like surfaces, one coral verification accent, and explicit uncertainty instead of hidden cleanup.

## Routes

- `/` — German landing page
- `/en` — English landing page
- `/danke` — optional licence-key form and installation guide
- `/vergleich` — German comparison hub with five source-dated buying guides
- `/datenschutz`, `/impressum`, `/widerruf` — clearly marked legal drafts
- `/llms.txt` — concise machine-readable product context

## Local development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Validation:

```bash
npm test
npm run lint
```

## Launch configuration

Copy `.env.example` to a local `.env` and configure only what is available:

- `DOWNLOAD_URL` — preferably a same-origin signed `.dmg` response with `Content-Disposition: attachment`. When absent, every CTA opens an honest private-preview fallback instead of a broken download.
- `LEAD_ENDPOINT` — optional same-origin or HTTPS endpoint. The form sends only `email`, `role`, `languages`, and optional `usecase`; it sends no audio, transcript, vocabulary, clipboard, target-app, or other product content.

Hosted runtime values belong in Sites environment settings, not in source control.

## Before public launch

Replace the animated UI prototype with real German product captures, connect the signed and notarised `.dmg`, connect and disclose the lead recipient and retention period, fill real legal identity details, and reverify every competitor claim and price.
