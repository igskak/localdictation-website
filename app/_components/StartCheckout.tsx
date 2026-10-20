"use client";

import Link from "next/link";
import { type MeasureConfig, reportStartStep } from "../_lib/measure";

/**
 * The buy button of the paid-entry page.
 *
 * It used to sit behind a box that asked the buyer to give up the right of
 * withdrawal once delivery began. That box was taken away on 21.10.2026: it put
 * people off, and without it the statutory fourteen days of withdrawal simply
 * apply, which the withdrawal instruction (linked here) and the purchase mail
 * say. So there is no declaration on this page and nothing here may claim one.
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
  consent: { terms: string; withdrawal: string; soon: string };
  termsHref: string;
  withdrawalHref: string;
  analytics: MeasureConfig;
  locale: string;
}) {
  return (
    <div className="start-checkout">
      {href !== null ? (
        <>
          <a
            className="button button-primary button-large start-buy"
            href={href}
            data-cta="start-buy"
            onClick={() => reportStartStep(analytics, "start_buy_clicked", locale)}
          >
            {label}
          </a>
          <p className="start-consent-links">
            <Link href={termsHref}>{consent.terms}</Link>
            <Link href={withdrawalHref}>{consent.withdrawal}</Link>
          </p>
        </>
      ) : (
        <p className="start-noscript">{consent.soon}</p>
      )}
    </div>
  );
}
