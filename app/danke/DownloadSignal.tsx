"use client";

import { useEffect, useRef } from "react";
import { type DownloadMode, type MeasureConfig, reportDownload } from "../_lib/measure";
import type { Locale } from "../_lib/locale";

/**
 * Reports that the reader reached the page the file comes from.
 *
 * Three ways in, one report each: the download that starts by itself when the
 * page opens with `?download=auto`, the one a button click already started
 * before this page opened (`?download=started`, reported as `click`), and the
 * link for starting it again. The arrival is reported once per page load -- a
 * re-render must not look like a second arrival -- while a deliberate click on
 * the link is reported every time, because it is a deliberate click.
 */
export function DownloadSignal({ analytics, started, mode = "auto", locale }: { analytics: MeasureConfig; started: boolean; mode?: DownloadMode; locale: Locale }) {
  const reported = useRef(false);

  useEffect(() => {
    if (!started || reported.current) return;
    reported.current = true;
    reportDownload(analytics, mode, locale);
  }, [started, mode, analytics, locale]);

  return null;
}

export function DownloadLink({ analytics, href, label, locale }: { analytics: MeasureConfig; href: string; label: string; locale: Locale }) {
  return (
    <a className="inline-download" href={href} onClick={() => reportDownload(analytics, "link", locale)}>
      {label} ↓
    </a>
  );
}
