import type { ReactNode } from "react";
import Link from "next/link";
import { RouteFooter } from "./RouteFooter";
import { legalPaths, type LegalLocale, type LegalPage } from "../_lib/legal";

// Every legal page states when it was last written. A consumer text that does
// not say which version they agreed to is a text nobody can be held to, and
// `updated` is the one line that fixes that.
//
// `notice` is per page rather than shared: the pages are no longer all drafts,
// and one default sentence claiming they are would be wrong on every one of
// them that is finished.
//
// `page` and `locale` are what let the shell draw the link to the same
// document in the other language. Ten hardcoded hrefs across ten files is ten
// chances for one of them to point at the wrong document, in the one place on
// the site where that is expensive.

const chrome = {
  de: { home: "Zur Startseite ↗", updated: "Stand", other: "English version", otherLang: "en" },
  en: { home: "To the home page ↗", updated: "Last updated", other: "Deutsche Fassung", otherLang: "de" },
} as const;

export function LegalShell({
  locale = "de",
  page,
  title,
  eyebrow,
  updated,
  notice,
  children,
}: {
  locale?: LegalLocale;
  page: LegalPage;
  title: string;
  eyebrow: string;
  updated: string;
  notice: ReactNode;
  children: ReactNode;
}) {
  const c = chrome[locale];
  const other: LegalLocale = locale === "de" ? "en" : "de";
  const home = locale === "de" ? "/" : "/en";

  return (
    <div className="legal-page" lang={locale}>
      <header className="legal-header shell"><Link href={home}>Witness</Link><Link href={home}>{c.home}</Link></header>
      <main>
        <article className="legal-article shell">
          <p className="section-kicker">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="legal-updated">
            {`${c.updated}: ${updated}`}
            <Link className="legal-switch" href={legalPaths[other][page]} hrefLang={c.otherLang}>{c.other}</Link>
          </p>
          <div className="legal-notice">{notice}</div>
          {children}
        </article>
      </main>
      <RouteFooter locale={locale} />
    </div>
  );
}
