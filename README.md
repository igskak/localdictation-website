# LocalDictation website

German-first product site for LocalDictation, a local-first dictation utility for Apple silicon Macs. The site mirrors the native macOS product direction: restrained typography, compact system-like surfaces, one coral verification accent, and explicit uncertainty instead of hidden cleanup.

## Routes

- `/` — German landing page
- `/en` — English landing page
- `/ru` — Russian landing page
- `/uk` — Ukrainian landing page
- `/danke` — optional licence-key form and installation guide (`?lang=en|ru|uk`)
- `/vergleich` — German comparison hub with five source-dated buying guides
- `/datenschutz`, `/impressum`, `/widerruf` — clearly marked legal drafts
- `/llms.txt` — concise machine-readable product context

## Copy and locales

All four locales share one layout; only the text differs. Page copy lives in `app/_data/landingCopy.ts` and thank-you/form copy in `app/_data/thanksCopy.ts` — edit those, not the components. `app/_lib/locale.ts` is the single source of truth for the locale list, home paths, and hreflang alternates; German stays `x-default` because paid search and the legal pages are German.

Each locale leads with the language pair its reader actually needs (`DE + EN`, `EN + DE`, `RU + EN`, `UK + EN`). `RU + DE` is not a supported speech profile and must not be promised. Legal pages remain German everywhere and are linked with `hreflang="de"`.

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
- `LEAD_ENDPOINT` — optional same-origin or HTTPS endpoint. The form sends only `email`, stable coded `role`/`languages`, the page `locale`, and optional coded `usecase`; it sends no audio, transcript, vocabulary, clipboard, target-app, or other product content. A successful response must be JSON containing `{ "keyDelivery": "queued" }`; otherwise the UI does not claim that email was sent. Cross-origin endpoints must explicitly allow the site's CORS preflight and origin.

Hosted runtime values belong in Sites environment settings, not in source control.

## Before public launch

Replace the animated UI prototype with real German product captures, connect the signed and notarised `.dmg`, connect and disclose the lead recipient and retention period, fill real legal identity details, and reverify every competitor claim and price.
