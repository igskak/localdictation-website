"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Lets a click on the hero animation do something.
 *
 * The animation looks like the app, and readers treat it as the app: between
 * 11.10 and 13.10 ad visitors clicked its confirm key, its window buttons three
 * times in a row and the text of the mail, and PostHog recorded every one as a
 * dead click. On 06.10 and 08.10 two visitors did the same to the picture on
 * /danke. A click now restarts the animation from the top and says plainly
 * that this is a picture, with the download one step away.
 *
 * The listener is attached by hand because the animation is decorative
 * (`aria-hidden`) and has no keyboard role to give it; the hero's own button
 * is the accessible way to the same download.
 */
export function TryableDemo({ children, hint, cta, href }: { children: ReactNode; hint: string; cta: string; href: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [plays, setPlays] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    function onClick(event: MouseEvent) {
      if (event.target instanceof Element && event.target.closest("a")) return;
      setPlays((count) => count + 1);
    }
    node.addEventListener("click", onClick);
    return () => node.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="demo-tryable" ref={ref} data-demo="hero">
      {/* A new key remounts the figure, which restarts its CSS animations. */}
      <div className="demo-replay" key={plays}>{children}</div>
      {plays > 0 && (
        <p className="demo-try-hint" role="status">
          <span>{hint}</span>
          <Link href={href} data-cta="demo"><span aria-hidden="true">↓</span> {cta}</Link>
        </p>
      )}
    </div>
  );
}
