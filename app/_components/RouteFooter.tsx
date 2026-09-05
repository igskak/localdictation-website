import Link from "next/link";
import { landingCopy } from "../_data/landingCopy";
import { legalLocale, legalPaths } from "../_lib/legal";
import type { Locale } from "../_lib/locale";

/**
 * The legal links, in the language the reader is being sold to in.
 *
 * German for the German site, English everywhere else — including the Russian
 * and Ukrainian pages, whose readers have no set of their own and are better
 * served by a text they can read than by the one the contract was drafted in.
 * Every page linked here carries a switch to the other language.
 */
export function RouteFooter({ locale = "de" }: { locale?: Locale }) {
  const c = landingCopy[locale].footer;
  const legal = legalLocale(locale);
  const paths = legalPaths[legal];
  const lang = legal;

  return (
    <footer className="route-footer">
      <div className="route-footer-inner shell">
        <span>© 2026 Witness</span>
        <nav aria-label={c.legalNav}>
          <Link href={paths.terms} hrefLang={lang}>{c.agb}</Link>
          <Link href={paths.withdrawal} hrefLang={lang}>{c.widerruf}</Link>
          <Link href={paths.privacy} hrefLang={lang}>{c.datenschutz}</Link>
          <Link href={paths.imprint} hrefLang={lang}>{c.impressum}</Link>
          <Link href={paths.licences} hrefLang={lang}>{c.lizenzen}</Link>
          <a href="mailto:hallo@witnessmac.com">{c.kontakt}</a>
        </nav>
      </div>
    </footer>
  );
}
