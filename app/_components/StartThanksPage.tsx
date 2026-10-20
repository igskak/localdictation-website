import { getAnalyticsConfig } from "../_lib/analytics";
import { getDownloadTarget } from "../_lib/download";
import { StartDownload } from "./StartDownload";
import { cancelPaths, startCopy, thanksPaths, type StartLocale } from "../_data/startCopy";
import { RouteFooter } from "./RouteFooter";

/**
 * Where the €4.99 payment lands: `/start/danke` and `/en/start/danke`.
 *
 * It is not `/danke`. That page says the first three days ask for nothing and a
 * free key follows, which is true for a download and wrong for somebody who has
 * just paid. This one says the same three days, then asks for the address they
 * paid with, and puts the way to stop the subscription next to the way to start
 * using it.
 */
export function StartThanksPage({ locale }: { locale: StartLocale }) {
  const c = startCopy[locale].thanks;
  const available = Boolean(getDownloadTarget());
  const downloadPath = locale === "de" ? "/download" : `/download?lang=${locale}`;
  const home = locale === "de" ? "/start" : "/en/start";
  // The Payment Link has one return address, so an English buyer lands here
  // first and needs the way to their own language.
  const other: StartLocale = locale === "de" ? "en" : "de";

  return (
    <div className="thanks-page" lang={locale}>
      <header className="thanks-header shell">
        <a href={home} className="thanks-brand">Witness</a>
        <span>
          {locale === "de" ? "Kauf" : "Purchase"} · <a href={thanksPaths[other]} hrefLang={other}>{other.toUpperCase()}</a>
        </span>
      </header>
      <main>
        <section className="thanks-hero shell">
          <h1>{c.title}</h1>
          <p>{c.lede}</p>
          {available && <StartDownload analytics={getAnalyticsConfig()} locale={locale} href={downloadPath} label={c.download} />}
          <p className="start-keep">{c.keep}</p>
        </section>
        <section className="install-section shell" id="installation">
          <div className="install-grid">
            {c.steps.map((step, index) => (
              <article key={step.title}><b>{`0${index + 1}`}</b><h3>{step.title}</h3><p>{step.body}</p></article>
            ))}
          </div>
          <p className="help-line">
            <a href="/manage">{c.manage}</a>{" · "}<a href={cancelPaths[locale]}>{c.cancel}</a>{" · "}{c.help} <a href="mailto:hallo@witnessmac.com">{c.helpLink} ↗</a>
          </p>
        </section>
      </main>
      <RouteFooter locale={locale} />
    </div>
  );
}
