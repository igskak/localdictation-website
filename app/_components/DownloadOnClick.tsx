"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Starts the file from the reader's own click, then shows /danke.
 *
 * Every download button on the site links to `/danke?download=auto`, and that
 * page used to fetch the file through a hidden iframe once it had loaded. A
 * download the page starts by itself is one Safari asks about: "Allow downloads
 * on witnessmac.com?". A first-time visitor who answers no, or does not see the
 * question, gets nothing, and Safari remembers the no for the next try. On
 * 06.10 an ad visitor pressed the button four times in four minutes and then
 * clicked the arrow on /danke as if it were a button.
 *
 * So the click itself now starts the file, through an anchor with `download`
 * clicked inside the same event, which is a download the reader asked for. The
 * reader then goes to `/danke?download=started`, which shows the same page
 * without the iframe and reports the same `download_started`. The navigation is
 * client-side for the reason `LandingPage.tsx` gives: a full page load would
 * drop the PostHog session and the ad click it came with.
 *
 * The links keep `download=auto`, so a reader without JavaScript, or one who
 * arrives at that address from anywhere else, still gets the iframe.
 */
export function DownloadOnClick() {
  const router = useRouter();

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target && anchor.target !== "_self") return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== "/danke") return;
      if (url.searchParams.get("download") !== "auto") return;

      event.preventDefault();

      const lang = url.searchParams.get("lang");
      const file = document.createElement("a");
      file.href = lang ? `/download?lang=${encodeURIComponent(lang)}` : "/download";
      file.download = "";
      file.hidden = true;
      document.body.appendChild(file);
      file.click();
      file.remove();

      url.searchParams.set("download", "started");
      router.push(`${url.pathname}${url.search}`);
    }

    // Capture, so this runs before the `Link` that was clicked: it sees the
    // prevented default and leaves the navigation to the push above.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return null;
}
