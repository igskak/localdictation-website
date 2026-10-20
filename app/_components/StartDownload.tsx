"use client";

import { type MeasureConfig, reportDownload } from "../_lib/measure";

/**
 * The download button of the page after a payment.
 *
 * It reports `download_started` with `mode: "purchase"`, so these downloads are
 * told apart from the free ones (`auto`, `click`, `link`) that the same event
 * counts on the other pages. The click itself starts the file: the link goes to
 * `/download`, which redirects to the release.
 */
export function StartDownload({ analytics, href, label, locale }: { analytics: MeasureConfig; href: string; label: string; locale: string }) {
  return (
    <a className="button button-primary button-large" href={href} onClick={() => reportDownload(analytics, "purchase", locale)}>
      <span aria-hidden="true">↓</span>{label}
    </a>
  );
}
