# Witness website

German-first product site for Witness, a local-first dictation utility for Apple silicon Macs. The site mirrors the native macOS product direction: restrained typography, compact system-like surfaces, one coral verification accent, and explicit uncertainty instead of hidden cleanup.

## Routes

- `/` — German landing page
- `/en` — English landing page
- `/ru` — Russian landing page
- `/uk` — Ukrainian landing page
- `/danke` — optional licence-key form and installation guide (`?lang=en|ru|uk`)
- `/vergleich` — German comparison hub with five source-dated buying guides
- `/agb`, `/widerruf`, `/datenschutz`, `/impressum`, `/lizenzen` — the German legal texts, written against the business model rather than against a template
- `/en/terms`, `/en/cancellation`, `/en/privacy`, `/en/legal-notice`, `/en/licences` — the same five in English
- `/llms.txt` — concise machine-readable product context

## Copy and locales

All four locales share one layout; only the text differs. Page copy lives in `app/_data/landingCopy.ts` and thank-you/form copy in `app/_data/thanksCopy.ts` — edit those, not the components. What the landing page says about the network has to match `/datenschutz`, and a test asserts it: no locale may disclose transmitted funnel events, because nothing is transmitted. `app/_lib/locale.ts` is the single source of truth for the locale list, home paths, and hreflang alternates; German stays `x-default` because paid search and the legal pages are German.

Each locale leads with the language pair its reader actually needs (`DE + EN`, `EN + DE`, `RU + EN`, `UK + EN`). `RU + DE` is not a supported speech profile and must not be promised. Legal pages remain German everywhere and are linked with `hreflang="de"`.

The legal texts exist in **German and English**, and `app/_lib/legal.ts` is the single map of which document lives where. German readers get the German set; English, Russian and Ukrainian readers get the English one — Russian and Ukrainian have no set of their own, and English is the second language those locales already lead with. Every page carries a switch to the other language.

Neither language is a translation of record that overrides the other: each applies to purchases made in it, and both pages say so. That is deliberate. A clause making one version prevail over the one a consumer actually read is the kind of term that gets struck out. The consequence is that **the two sets have to keep saying the same thing** — a test compares the claims a disagreement would be expensive in, and it is not a substitute for reading both when either changes.

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
| Node (self-hosting) | `npm run build:node` | `npm run start:node` | `VINEXT_PLATFORM=node` switches `next.config.ts` to `output: "standalone"` and drops the Cloudflare Vite plugin |

The standalone server binds `0.0.0.0` and honours `PORT`. **witnessmac.com runs on the Cloudflare target and nothing else**; the Node build exists so the site can be served without Cloudflare, not because anything currently does.

## Launch configuration

Copy `.env.example` to a local `.env` and configure only what is available:

- `DOWNLOAD_URL` — preferably a same-origin signed `.dmg` response with `Content-Disposition: attachment`. When absent, every CTA opens an honest private-preview fallback instead of a broken download.
- `GA4_MEASUREMENT_ID`, `ADS_CONVERSION_ID`, `ADS_LEAD_CONVERSION_LABEL` — measurement for the paid-search campaign in `docs/GTM.md`. In production these are set in `tools/deploy-config.mjs` alongside `DOWNLOAD_URL`, not in a dashboard; all three ship to the browser, so none is a secret. All three empty is a valid state and the default: no tag, no consent banner, and section 8 of both privacy policies says the site sets no cookies. Set them and the same section describes Analytics and Ads instead — the text is generated from the same environment the tag reads, so it cannot drift from what is running. Consent governs storage, not measurement (advanced consent mode): declining means no cookies and no recognition, not an unmeasured visit.
- `POSTHOG_KEY` — product analytics: where readers came from and what they did on the page. Set in `tools/deploy-config.mjs` beside the three above, and public for the same reason. It must be an **EU Cloud** project key: the browser is pointed at `/ingest`, `worker/index.ts` forwards that prefix to `eu.i.posthog.com` (and `/ingest/static/*` to `eu-assets.i.posthog.com`), and section 8 of both privacy policies states that the events are processed in the European Union. Empty is a valid state and the default. Consent governs storage, not measurement, here too: before a reader agrees PostHog runs with `memory` persistence and writes nothing to their device; a withdrawal deletes what was written. Session replay is off in code, not in the dashboard, so switching it on is a commit that has to pass the privacy pages. Two things live outside this repository and have to match it: PostHog's data-processing agreement must be accepted for the project, and its retention must be set to the number in `app/_lib/retention.ts`.
- `LEAD_ENDPOINT` — optional same-origin or HTTPS endpoint. The form sends only `email`, the page `locale`, and optional coded `usecase`; it sends no audio, transcript, vocabulary, clipboard, target-app, or other product content. A successful response must be JSON containing `{ "keyDelivery": "queued" }`; otherwise the UI does not claim that email was sent. Cross-origin endpoints must explicitly allow the site's CORS preflight and origin.

Hosted runtime values belong in Sites environment settings, not in source control.

## Before public launch

Replace the animated UI prototype with real German product captures, and reverify every competitor claim and price.

Two things the legal texts describe but this repository cannot switch on:

- **The digital-content declaration.** `/widerruf` states that the right of withdrawal expires early only when the buyer expressly consented to immediate delivery *and* acknowledged losing the right. Stripe's Managed Payments checkout takes no custom text, so the app collects it instead — a checkbox above the Buy buttons, which refuse to open a checkout without it. This site only has to keep `/agb` and `/widerruf` reachable at those exact paths: the app links both from that checkbox.
- **A cancellation button for the annual licence.** Section 8 of `/agb` promises cancellation at any time by e-mail or through Stripe's portal. For consumers in Germany, §312k BGB wants a button on the website that leads to a confirmation page, and that needs an endpoint this site does not have yet.
