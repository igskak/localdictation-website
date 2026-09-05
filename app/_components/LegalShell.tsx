import type { ReactNode } from "react";
import Link from "next/link";
import { RouteFooter } from "./RouteFooter";

// `notice` defaults to the draft warning the privacy and withdrawal pages
// still need. The Impressum passes its own, because its provider details are
// now complete and a page that calls complete details a draft is telling the
// reader the one thing about it that is no longer true.
export function LegalShell({ title, eyebrow, notice, children }: { title: string; eyebrow: string; notice?: ReactNode; children: ReactNode }) {
  return (
    <div className="legal-page" lang="de">
      <header className="legal-header shell"><Link href="/">Witness</Link><Link href="/">Zur Startseite ↗</Link></header>
      <main>
        <article className="legal-article shell">
          <p className="section-kicker">{eyebrow}</p>
          <h1>{title}</h1>
          <div className="legal-notice">{notice ?? <><b>Diese Seite ist ein Entwurf.</b> Rechtsgrundlagen, Empfänger und Speicherfristen müssen von einer qualifizierten Stelle geprüft und vervollständigt werden. Die Anbieterangaben im Impressum sind davon nicht betroffen.</>}</div>
          {children}
        </article>
      </main>
      <RouteFooter />
    </div>
  );
}
