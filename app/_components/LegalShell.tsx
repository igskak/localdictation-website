import type { ReactNode } from "react";
import Link from "next/link";
import { RouteFooter } from "./RouteFooter";

// Every legal page states when it was last written. A consumer text that does
// not say which version they agreed to is a text nobody can be held to, and
// `updated` is the one line that fixes that.
//
// `notice` is per page rather than shared: the pages are no longer all drafts,
// and one default sentence claiming they are would be wrong on every one of
// them that is finished.
export function LegalShell({ title, eyebrow, updated, notice, children }: { title: string; eyebrow: string; updated: string; notice: ReactNode; children: ReactNode }) {
  return (
    <div className="legal-page" lang="de">
      <header className="legal-header shell"><Link href="/">Witness</Link><Link href="/">Zur Startseite ↗</Link></header>
      <main>
        <article className="legal-article shell">
          <p className="section-kicker">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="legal-updated">{`Stand: ${updated}`}</p>
          <div className="legal-notice">{notice}</div>
          {children}
        </article>
      </main>
      <RouteFooter />
    </div>
  );
}
