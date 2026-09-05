# Witness website

German-first product site for Witness, a local-first dictation utility for Apple silicon Macs. The site mirrors the native macOS product direction: restrained typography, compact system-like surfaces, one coral verification accent, and explicit uncertainty instead of hidden cleanup.

## Routes

- `/` — German landing page
- `/en` — English landing page
- `/ru` — Russian landing page
- `/uk` — Ukrainian landing page
- `/danke` — optional licence-key form and installation guide (`?lang=en|ru|uk`)
- `/vergleich` — German comparison hub with five source-dated buying guides
- `/agb`, `/widerruf`, `/datenschutz`, `/impressum`, `/lizenzen` — the legal texts, written against the business model rather than against a template
- `/llms.txt` — concise machine-readable product context

## Copy and locales

All four locales share one layout; only the text differs. Page copy lives in `app/_data/landingCopy.ts` and thank-you/form copy in `app/_data/thanksCopy.ts` — edit those, not the components. What the landing page says about the network has to match `/datenschutz`, and a test asserts it: no locale may disclose transmitted funnel events, because nothing is transmitted. `app/_lib/locale.ts` is the single source of truth for the locale list, home paths, and hreflang alternates; German stays `x-default` because paid search and the legal pages are German.

Each locale leads with the language pair its reader actually needs (`DE + EN`, `EN + DE`, `RU + EN`, `UK + EN`). `RU + DE` is not a supported speech profile and must not be promised. Legal pages remain German everywhere and are linked with `hreflang="de"`.

**That is a gap, not a decision.** The English, Russian and Ukrainian landing pages sell to buyers who may not read German, and a withdrawal notice they cannot read is a withdrawal notice that starts no clock. German is the operative language today; an English set of `/agb`, `/widerruf` and `/datenschutz` is the next thing owed.

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

## Deployment

Two build targets share one codebase:

| Target | Build | Start | Notes |
|---|---|---|---|
| Cloudflare Workers (default) | `npm run build` | — | What `npm test` exercises; `dist/server/index.js` is the Worker entry |
| Node (self-hosting, Render) | `npm run build:node` | `npm run start:node` | `VINEXT_PLATFORM=node` switches `next.config.ts` to `output: "standalone"` and drops the Cloudflare Vite plugin |

The standalone server binds `0.0.0.0` and honours `PORT`. `render.yaml` is a ready Render Blueprint for a free web service; free instances sleep when idle, so the first request after a pause takes about a minute — fine for review, not for paid traffic.

## Launch configuration

Copy `.env.example` to a local `.env` and configure only what is available:

- `DOWNLOAD_URL` — preferably a same-origin signed `.dmg` response with `Content-Disposition: attachment`. When absent, every CTA opens an honest private-preview fallback instead of a broken download.
- `LEAD_ENDPOINT` — optional same-origin or HTTPS endpoint. The form sends only `email`, the page `locale`, and optional coded `usecase`; it sends no audio, transcript, vocabulary, clipboard, target-app, or other product content. A successful response must be JSON containing `{ "keyDelivery": "queued" }`; otherwise the UI does not claim that email was sent. Cross-origin endpoints must explicitly allow the site's CORS preflight and origin.

Hosted runtime values belong in Sites environment settings, not in source control.

## Before public launch

Replace the animated UI prototype with real German product captures, and reverify every competitor claim and price.

Two things the legal texts describe but this repository cannot switch on:

- **The digital-content declaration.** `/widerruf` states that the right of withdrawal expires early only when the buyer expressly consented to immediate delivery *and* acknowledged losing the right. Stripe's Managed Payments checkout takes no custom text, so the app collects it instead — a checkbox above the Buy buttons, which refuse to open a checkout without it. This site only has to keep `/agb` and `/widerruf` reachable at those exact paths: the app links both from that checkbox.
- **A cancellation button for the annual licence.** Section 8 of `/agb` promises cancellation at any time by e-mail or through Stripe's portal. For consumers in Germany, §312k BGB wants a button on the website that leads to a confirmation page, and that needs an endpoint this site does not have yet.
