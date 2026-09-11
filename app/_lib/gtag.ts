/**
 * The browser half of the measurement, and the only place that talks to Google.
 *
 * Advanced consent mode. The tag loads on every page; consent governs storage,
 * not measurement. Before a reader agrees, no cookie is written and Google
 * receives cookieless, pseudonymous pings it can model conversions from; after
 * they agree, the same tag stores and measures normally. Declining therefore
 * costs attribution accuracy, not the campaign's ability to see its own
 * traffic -- which is the whole point of paying for that traffic.
 *
 * What the product promises about privacy is about the app, where dictation
 * happens. This is a sales page, and it measures like one.
 */

export type GtagConfig = {
  measurementId: string | null;
  adsConversionId: string | null;
  adsDownloadLabel: string | null;
};

export type ConsentChoice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const consentStorageKey = "witness.consent";

/** Storage can throw outright in a locked-down browser, so every read is a guess with a fallback. */
export function readConsent(): ConsentChoice | null {
  try {
    const stored = window.localStorage.getItem(consentStorageKey);
    return stored === "granted" || stored === "denied" ? stored : null;
  } catch {
    return null;
  }
}

export function writeConsent(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(consentStorageKey, choice);
  } catch {
    // A reader who blocks storage gets asked again next time. That is the
    // honest outcome: we cannot remember a refusal we are not allowed to keep.
  }
}

/**
 * The shim, and the one line in this file that may not be tidied up.
 *
 * `dataLayer.push(arguments)` — the `arguments` object itself, never a rest
 * parameter collected into an array. gtag.js decides what a queued entry is by
 * looking at it: an `Arguments` object is a command it replays, an `Array` is a
 * GTM-style data push it has no use for. The two are indistinguishable in the
 * console, so the rest-parameter spelling reads like a faithful translation of
 * Google's snippet and behaves like an off switch — the tag loads, `gtm.load`
 * fires, and every `consent`, `config` and `event` below is dropped without a
 * word. It shipped that way, and the GA4 property recorded nothing at all.
 */
function ensureGtag(): (...args: unknown[]) => void {
  window.dataLayer = window.dataLayer ?? [];
  if (!window.gtag) {
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
  }
  return window.gtag;
}

let loading = false;

/**
 * Idempotent, and called once per page load whatever the reader has decided.
 *
 * The default is denied because a cookie may not be written before consent;
 * `url_passthrough` is what keeps attribution alive in that state, carrying the
 * ad click identifier in the address bar instead of in storage.
 */
export function loadTags(config: GtagConfig, consent: ConsentChoice | null): void {
  const primary = config.measurementId ?? config.adsConversionId;
  if (!primary || loading) return;
  loading = true;

  const gtag = ensureGtag();
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
  gtag("set", "url_passthrough", true);
  if (consent === "granted") grantStorage();
  gtag("js", new Date());

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(primary)}`;
  document.head.appendChild(script);

  // IP anonymisation is the default in GA4 and cannot be switched off; the
  // signal worth setting here is the one that is not a default -- Ads only
  // ever hears about the single conversion this site reports.
  if (config.measurementId) gtag("config", config.measurementId);
  // No `allow_enhanced_conversions`: that setting existed so a lead's address
  // could be hashed into the conversion, and there is no address any more.
  if (config.adsConversionId) gtag("config", config.adsConversionId);
}

export function grantStorage(): void {
  window.gtag?.("consent", "update", {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
    analytics_storage: "granted",
  });
}

/** Denies storage again. Measurement continues without cookies; that is the mode. */
export function denyStorage(): void {
  window.gtag?.("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
}

/**
 * Reaching the page the file downloads from.
 *
 * Named for what it is. The download starts by itself when the page opens, so
 * this reports an arrival, not a decision, and it measures the landing page
 * rather than intent to install. `docs/GTM.md` says why it must stay an
 * observation and never become a bidding target: a system told to optimise for
 * people who open download pages will find people who open download pages.
 */
export function reportDownload(config: GtagConfig): void {
  const gtag = ensureGtag();

  if (config.adsConversionId && config.adsDownloadLabel) {
    gtag("event", "conversion", { send_to: `${config.adsConversionId}/${config.adsDownloadLabel}` });
  }
  if (config.measurementId) gtag("event", "download_started");
}
