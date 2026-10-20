import { landingCopy } from "../_data/landingCopy";
import { introCheckoutLink } from "../_data/partnerOffers";
import { startCopy, startPaths, type StartLocale } from "../_data/startCopy";
import { getAnalyticsConfig } from "../_lib/analytics";
import { legalPaths } from "../_lib/legal";
import { HeroDemo } from "./HeroDemo";
import { RouteFooter } from "./RouteFooter";
import { StartCheckout } from "./StartCheckout";

/**
 * `/start` and `/en/start`: the page the ads send to.
 *
 * It is the one place on the site where the first thing offered is a payment
 * and not a download, and it is built to be reached only from an ad. It is
 * `noindex`, absent from the sitemap, linked from nowhere, and its header carries
 * anchors within itself and nothing that leads to the free download on the
 * pages beside it.
 *
 * It does not claim there is no free way to try the app, because there is one
 * and a sentence saying otherwise would be false. It simply does not lead with
 * it.
 */
export function StartPage({ locale }: { locale: StartLocale }) {
  const c = startCopy[locale];
  const demo = landingCopy[locale].demo;
  const legal = legalPaths[locale];
  const other: StartLocale = locale === "de" ? "en" : "de";
  const buyHref = introCheckoutLink() === null ? null : "/buy?plan=intro";

  return (
    <div className="site-root start-page" lang={locale}>
      <input className="theme-checkbox" type="checkbox" id={`theme-start-${locale}`} aria-label="Theme" />

      <header className="site-header-wrap">
        <div className="site-header shell">
          <a className="brand" href="#top" aria-label="Witness">
            <span className="brand-lockup">
              <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /><i /></span>
              <span>Witness</span>
            </span>
          </a>
          <nav className="site-nav" aria-label={locale === "de" ? "Seite" : "Page"}>
            <a href="#so-geht-es">{c.steps.kicker}</a>
            <a href="#preis">{c.price.kicker}</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="header-actions">
            <nav className="language-switch-group" aria-label="Language">
              <a className="language-switch" href={startPaths[other]} hrefLang={other}>{other.toUpperCase()}</a>
            </nav>
            <a className="button button-primary header-download" href="#preis" data-cta="start-header">{c.header.cta}</a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero shell" id="top">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" />{c.hero.eyebrow}</div>
            <h1>{c.hero.title} <span>{c.hero.titleMuted}</span></h1>
            <p className="hero-lede">{c.hero.lede}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#preis" data-cta="start-hero">{c.hero.cta}</a>
            </div>
            <p className="start-price-line">{c.price.line}</p>
            <p className="fine-print">
              {c.hero.fine.map((item, index) => <span key={item}>{index > 0 && <i />} {item}</span>)}
            </p>
          </div>
          <div className="start-demo"><HeroDemo d={demo} /></div>
        </section>

        <section className="section shell" id="so-geht-es">
          <div className="section-intro">
            <p className="section-kicker">01 / {c.steps.kicker}</p>
            <h2>{c.steps.title}</h2>
          </div>
          <ol className="start-steps">
            {c.steps.items.map((item, index) => (
              <li key={item.title}><b>{`0${index + 1}`}</b><h3>{item.title}</h3><p>{item.body}</p></li>
            ))}
          </ol>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="section-kicker">02 / {c.gives.kicker}</p>
            <h2>{c.gives.title}</h2>
          </div>
          <div className="start-gives">
            {c.gives.items.map((item) => (
              <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>
            ))}
          </div>
        </section>

        <section className="section pricing-section shell" id="preis">
          <div className="section-intro pricing-intro">
            <p className="section-kicker">03 / {c.price.kicker}</p>
            <h2>{c.price.title}</h2>
          </div>
          <div className="start-price-card price-card price-primary">
            <div className="start-price-row">
              <div><span className="start-price-amount">{c.price.today}</span><small>{c.price.todayNote}</small></div>
              <i aria-hidden="true">→</i>
              <div><span className="start-price-amount">{c.price.then}</span><small>{c.price.thenNote}</small></div>
            </div>
            <ul>{c.price.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <StartCheckout
            href={buyHref}
            label={c.hero.cta}
            consent={c.consent}
            termsHref={legal.terms}
            withdrawalHref={legal.withdrawal}
            analytics={getAnalyticsConfig()}
            locale={locale}
          />
          <p className="pricing-footnote">{c.price.line} {c.price.paymentNote}</p>
        </section>

        <section className="section faq-section" id="faq">
          <div className="shell faq-layout">
            <div className="section-intro faq-intro"><p className="section-kicker">04 / FAQ</p><h2>{c.faq.title}</h2></div>
            <div className="faq-list">
              {c.faq.items.map((item, index) => (
                <details key={item.q} open={index === 0}><summary><span>{item.q}</span><i aria-hidden="true">+</i></summary><p>{item.a}</p></details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <RouteFooter locale={locale} />
    </div>
  );
}
