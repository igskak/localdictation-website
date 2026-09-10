"use client";

import { useEffect, useRef } from "react";
import { type GtagConfig, reportDownload } from "../_lib/gtag";

/**
 * Reports that the reader reached the page the file comes from.
 *
 * Two ways in, one report each: the download that starts by itself when the
 * page opens with `?download=auto`, and the link for starting it again. The
 * automatic one is reported once per page load -- a re-render must not look
 * like a second arrival -- while a deliberate click is reported every time,
 * because it is a deliberate click.
 */
export function DownloadSignal({ analytics, started }: { analytics: GtagConfig; started: boolean }) {
  const reported = useRef(false);

  useEffect(() => {
    if (!started || reported.current) return;
    reported.current = true;
    reportDownload(analytics);
  }, [started, analytics]);

  return null;
}

export function DownloadLink({ analytics, href, label }: { analytics: GtagConfig; href: string; label: string }) {
  return (
    <a className="inline-download" href={href} onClick={() => reportDownload(analytics)}>
      {label} ↓
    </a>
  );
}
