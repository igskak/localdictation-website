"use client";

import { useState } from "react";
import Link from "next/link";
import { type MeasureConfig, reportStartStep } from "../_lib/measure";

/**
 * The buy button of the paid-entry page, behind the declaration.
 *
 * Digital content delivered at once is the one sale where the right of
 * withdrawal can be waived, and only by a declaration the buyer makes before
 * paying. The app asks it in a box that keeps its Buy buttons off until it is
 * ticked (`CheckoutConsent`), and this page does the same, in the same words,
 * for the same reason: Stripe's Payment Link cannot ask it.
 *
 * Until the box is ticked the link is inert and says so to assistive
 * technology. Without JavaScript the box cannot be ticked at all, so the page
 * says how to order another way rather than leaving a button that does nothing.
 */
export function StartCheckout({
  href,
  label,
  consent,
  termsHref,
  withdrawalHref,
  analytics,
  locale,
}: {
  /** `null` while there is no payment link to send anyone to. */
  href: string | null;
  label: string;
  consent: { label: string; declaration: string; terms: string; withdrawal: string; needsScript: string; soon: string };
  termsHref: string;
  withdrawalHref: string;
  analytics: MeasureConfig;
  locale: string;
}) {
  const [declared, setDeclared] = useState(false);

  return (
    <div className="start-checkout">
      {href !== null && (
        <>
          <label className="start-consent">
            <input type="checkbox" checked={declared} onChange={(event) => {
                setDeclared(event.target.checked);
                if (event.target.checked) reportStartStep(analytics, "start_consent_ticked", locale);
              }} />
            <span>{consent.label}</span>
          </label>
          <p className="start-declaration" lang="de">{consent.declaration}</p>
          <p className="start-consent-links">
            <Link href={termsHref}>{consent.terms}</Link>
            <Link href={withdrawalHref}>{consent.withdrawal}</Link>
          </p>
          <a
            className="button button-primary button-large start-buy"
            href={href}
            aria-disabled={!declared}
            tabIndex={declared ? 0 : -1}
            data-cta="start-buy"
            onClick={(event) => {
              if (!declared) {
                event.preventDefault();
                return;
              }
              reportStartStep(analytics, "start_buy_clicked", locale);
            }}
          >
            {label}
          </a>
          <noscript><p className="start-noscript">{consent.needsScript}</p></noscript>
        </>
      )}
      {href === null && <p className="start-noscript">{consent.soon}</p>}
    </div>
  );
}
