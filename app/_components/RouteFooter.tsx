import Link from "next/link";
import { landingCopy } from "../_data/landingCopy";
import { consentCopy } from "../_data/consentCopy";
import { analyticsEnabled, getAnalyticsConfig } from "../_lib/analytics";
import { ConsentReopenLink } from "./ConsentGate";
import { cancelPaths, startCopy, startLocales, type StartLocale } from "../_data/startCopy";
import { legalLocale, legalPaths } from "../_lib/legal";
import type { PageLocale } from "../_lib/locale";

/**
 * The legal links, in the language the reader is being sold to in.
 *
 * German for the German site, English everywhere else, including the Russian
 * and Ukrainian pages, whose readers have no set of their own and are better
 * served by a text they can read than by the one the contract was drafted in.
 * Every page linked here carries a switch to the other language.
 */
export function RouteFooter({ locale = "de" }: { locale?: PageLocale }) {
  const isStartLocale = startLocales.includes(locale as StartLocale);
  const landingFooter = locale === "ru" || locale === "uk" ? landingCopy[locale].footer : landingCopy.en.footer;
  const startFooter = isStartLocale ? startCopy[locale as StartLocale].footer : null;
  const c = startFooter ?? {
    legalNav: landingFooter.legalNav,
    terms: landingFooter.agb,
    withdrawal: landingFooter.widerruf,
    cancel: startCopy[legalLocale(locale)].footer.cancel,
    privacy: landingFooter.datenschutz,
    imprint: landingFooter.impressum,
    licences: landingFooter.lizenzen,
    contact: landingFooter.kontakt,
  };
  const legal = legalLocale(locale);
  const paths = legalPaths[legal];
  const lang = legal;
  const showConsent = analyticsEnabled(getAnalyticsConfig());

  return (
    <footer className="route-footer">
      <div className="route-footer-inner shell">
        <span>© 2026 Witness</span>
        <nav aria-label={c.legalNav}>
          <Link href={paths.terms} hrefLang={lang}>{c.terms}</Link>
          <Link href={paths.withdrawal} hrefLang={lang}>{c.withdrawal}</Link>
          {/* §312k BGB: a button for ending a contract made on this site, on every page of it. */}
          <Link href={isStartLocale ? cancelPaths[locale as StartLocale] : cancelPaths[legal]} hrefLang={locale}>{c.cancel}</Link>
          <Link href={paths.privacy} hrefLang={lang}>{c.privacy}</Link>
          <Link href={paths.imprint} hrefLang={lang}>{c.imprint}</Link>
          <Link href={paths.licences} hrefLang={lang}>{c.licences}</Link>
          <a href="mailto:hallo@witnessmac.com">{c.contact}</a>
          {showConsent && <ConsentReopenLink label={consentCopy[locale].reopen} />}
        </nav>
      </div>
    </footer>
  );
}
