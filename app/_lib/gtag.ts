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
  adsLeadLabel: string | null;
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

function ensureGtag(): (...args: unknown[]) => void {
  window.dataLayer = window.dataLayer ?? [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
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
  if (config.adsConversionId) gtag("config", config.adsConversionId, { allow_enhanced_conversions: true });
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
 * The one conversion the campaign optimises on.
 *
 * The address is handed over for enhanced conversions, which hashes it in the
 * browser before it goes anywhere: what reaches Google is a hash, never the
 * address. The caller passes it rather than the tag reading the field, so
 * there is exactly one line in this codebase where a lead becomes a number.
 */
export function reportLead(config: GtagConfig, email: string): void {
  const gtag = window.gtag;
  if (!gtag) return;

  if (config.adsConversionId && config.adsLeadLabel) {
    gtag("set", "user_data", { email });
    gtag("event", "conversion", { send_to: `${config.adsConversionId}/${config.adsLeadLabel}` });
  }
  if (config.measurementId) gtag("event", "lead_created");
}
