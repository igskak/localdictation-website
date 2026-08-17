import type { ReactNode } from "react";
import Link from "next/link";
import { RouteFooter } from "./RouteFooter";

export function LegalShell({ title, eyebrow, children }: { title: string; eyebrow: string; children: ReactNode }) {
  return (
    <div className="legal-page" lang="de">
      <header className="legal-header shell"><Link href="/">LocalDictation</Link><Link href="/">Zur Startseite ↗</Link></header>
      <main>
        <article className="legal-article shell">
          <p className="section-kicker">{eyebrow}</p>
          <h1>{title}</h1>
          <div className="legal-notice"><b>Entwurf für die private Produktvorschau.</b> Vor einer öffentlichen Veröffentlichung müssen Anbieterangaben, Rechtsgrundlagen, Empfänger und Speicherfristen von einer qualifizierten Stelle geprüft und vervollständigt werden.</div>
          {children}
        </article>
      </main>
      <RouteFooter />
    </div>
  );
}
