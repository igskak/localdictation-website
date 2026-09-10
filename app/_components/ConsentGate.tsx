"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { consentCopy } from "../_data/consentCopy";
import { legalLocale, legalPaths } from "../_lib/legal";
import type { Locale } from "../_lib/locale";
import { type ConsentChoice, type GtagConfig, denyStorage, grantStorage, loadTags, readConsent, writeConsent } from "../_lib/gtag";

/** The footer link dispatches this; nothing else in the app listens for it. */
export const reopenConsentEvent = "witness:consent-reopen";
/** Dispatched by this component when the stored answer changes, so the snapshot below re-reads it. */
const consentChangedEvent = "witness:consent-changed";

const subscribeToHydration = () => () => {};

function subscribeToConsent(onChange: () => void) {
  window.addEventListener(consentChangedEvent, onChange);
  // Another tab deciding counts as this tab deciding: the answer is one per browser.
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(consentChangedEvent, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/**
 * Asks once about storage, and remembers the answer.
 *
 * The tag itself loads either way -- see `gtag.ts` for why -- so this banner
 * governs cookies, not measurement. It exists because § 25 TDDDG wants consent
 * before something is written to a reader's device, and for no other reason.
 *
 * The stored answer is read through `useSyncExternalStore` rather than in an
 * effect, so a returning reader never sees the banner flash before it is
 * dismissed by state that arrived one render too late.
 *
 * Both buttons are the same size and the same weight. A refusal that is harder
 * to click than an agreement is what gets a German consent banner declared
 * invalid rather than merely disliked -- and an invalid consent is worth less
 * than none, because it is the one a complaint can point at.
 */
export function ConsentGate({ config, locale }: { config: GtagConfig; locale: Locale }) {
  const c = consentCopy[locale];
  const hydrated = useSyncExternalStore(subscribeToHydration, () => true, () => false);
  const stored = useSyncExternalStore(subscribeToConsent, readConsent, () => null);
  const [reopened, setReopened] = useState(false);
  const banner = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (hydrated) loadTags(config, readConsent());
  }, [hydrated, config]);

  /**
   * Publishes the banner's height so the page can reserve it -- see
   * `--consent-height` in globals.css. The banner wraps to a different number
   * of lines per width and per language, so the number is measured rather
   * than guessed, and cleared the moment the banner goes away.
   */
  useEffect(() => {
    const node = banner.current;
    const root = document.documentElement;
    if (!node) {
      root.style.removeProperty("--consent-height");
      return;
    }
    // Border box, not content box: the banner's own padding is page it covers.
    const publish = () => root.style.setProperty("--consent-height", `${Math.ceil(node.getBoundingClientRect().height)}px`);
    // Once now, so the reservation is right on the first paint rather than one
    // observer tick later, and again whenever a rotation or a font swap
    // rewraps the text.
    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(node);
    return () => {
      observer.disconnect();
      root.style.removeProperty("--consent-height");
    };
  });

  useEffect(() => {
    const reopen = () => setReopened(true);
    window.addEventListener(reopenConsentEvent, reopen);
    return () => window.removeEventListener(reopenConsentEvent, reopen);
  }, []);

  const decide = useCallback((next: ConsentChoice) => {
    writeConsent(next);
    setReopened(false);
    if (next === "granted") grantStorage();
    else denyStorage();
    window.dispatchEvent(new Event(consentChangedEvent));
  }, []);

  if (!hydrated || (stored !== null && !reopened)) return null;

  const privacy = legalPaths[legalLocale(locale)].privacy;
  const tools = config.measurementId && config.adsConversionId ? c.tools.both : config.measurementId ? c.tools.analytics : c.tools.ads;

  return (
    <aside ref={banner} className="consent-banner" role="dialog" aria-modal="false" aria-label={c.region} lang={locale}>
      <div className="consent-inner">
        <div className="consent-text">
          <h2>{c.title}</h2>
          <p>{c.body(tools)}</p>
          <p className="consent-aside">{c.reassurance}</p>
          <a href={privacy} hrefLang={legalLocale(locale)}>{c.privacyLink}</a>
        </div>
        <div className="consent-actions">
          <button type="button" className="button button-primary" onClick={() => decide("granted")}>{c.accept}</button>
          <button type="button" className="button button-quiet" onClick={() => decide("denied")}>{c.decline}</button>
        </div>
      </div>
    </aside>
  );
}

/** Reopens the choice from the footer. Rendered only where a tag could load at all. */
export function ConsentReopenLink({ label }: { label: string }) {
  return (
    <button type="button" className="footer-link-button" onClick={() => window.dispatchEvent(new Event(reopenConsentEvent))}>
      {label}
    </button>
  );
}
