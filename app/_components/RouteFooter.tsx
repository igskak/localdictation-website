import Link from "next/link";
import { landingCopy } from "../_data/landingCopy";
import type { Locale } from "../_lib/locale";

export function RouteFooter({ locale = "de" }: { locale?: Locale }) {
  const c = landingCopy[locale].footer;

  return (
    <footer className="route-footer">
      <div className="route-footer-inner shell">
        <span>© 2026 LocalDictation</span>
        <nav aria-label={c.legalNav}>
          <Link href="/impressum" hrefLang="de">{c.impressum}</Link>
          <Link href="/datenschutz" hrefLang="de">{c.datenschutz}</Link>
          <Link href="/widerruf" hrefLang="de">{c.widerruf}</Link>
          <a href="mailto:hallo@localdictation.app">{c.kontakt}</a>
        </nav>
      </div>
    </footer>
  );
}
