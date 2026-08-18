import { getDownloadTarget } from "../_lib/download";
import { landingCopy } from "../_data/landingCopy";
import { localeHome, localeLabels, locales, type Locale } from "../_lib/locale";

const waveHeights = [7, 13, 20, 10, 25, 16, 28, 12, 20, 8, 15, 6];

const dictionaryWords = ["Müller-Lüdenscheidt", "Auftragsverarbeitungsvertrag", "Kubernetes", "DB Navigator", "Zeiterfassung"];

function Brand() {
  return (
    <span className="brand-lockup">
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
      </span>
      <span>LocalDictation</span>
    </span>
  );
}

function Waveform({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "waveform waveform-compact" : "waveform"} aria-hidden="true">
      {waveHeights.map((height, index) => (
        <i key={index} style={{ height: compact ? Math.max(5, height * 0.65) : height }} />
      ))}
    </span>
  );
}

function ProductDemo({ locale, expanded = false }: { locale: Locale; expanded?: boolean }) {
  const d = landingCopy[locale].demo;
  return (
    <figure className={expanded ? "product-stage verification-stage" : "product-stage"}>
      <div className="stage-grid" aria-hidden="true" />
      <div className="mac-window mail-window" aria-hidden="true">
        <div className="window-bar">
          <div className="traffic-lights" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="window-title">{d.windowTitle}</span>
          <span className="window-action">{d.send}</span>
        </div>
        <div className="mail-meta">
          <div><span>{d.to}</span>{d.toValue}</div>
          <div><span>{d.subject}</span>{d.subjectValue}</div>
        </div>
        <div className="mail-body">
          <p>{d.greeting}</p>
          <p className="demo-inserted-copy">
            {d.before}
            <span>Müller-Lüdenscheidt</span>
            {d.middle}
            <span>{d.amount}</span>
            {d.after}
          </p>
          <span className="text-caret" aria-hidden="true" />
        </div>
      </div>

      <div className="dictation-bar" aria-hidden="true">
        <div className="review-transcript">
          <small>{d.rawLabel}</small>
          <p>
            {d.rawBefore}<mark className="risk-name">Müller-Lüdenscheidt</mark>{d.rawMiddle}<mark>{d.amount}</mark>
          </p>
        </div>
        <div className="recording-state">
          <span className="recording-dot" />
          <span>{d.state}</span>
        </div>
        <Waveform />
        <div className="risk-count"><b>2</b> {d.checks}</div>
        <span className="confirm-button" aria-hidden="true">↵</span>
      </div>

      <div className="risk-popover" aria-hidden="true">
        <div className="risk-label"><span /> {d.riskLabel}</div>
        <strong>{d.amount}</strong>
        <span className="listen-control"><span aria-hidden="true">▶</span> {d.play}</span>
      </div>

      {!expanded && (
        <figcaption className="stage-note">
          <span className="shortcut">⌥ Space</span>
          {d.stageNote}
        </figcaption>
      )}
      {expanded && <figcaption className="prototype-note">{d.prototypeNote}</figcaption>}
    </figure>
  );
}

export function LandingPage({ locale }: { locale: Locale }) {
  const c = landingCopy[locale];
  const downloadAvailable = Boolean(getDownloadTarget());
  const downloadHref = locale === "de" ? "/danke?download=auto" : `/danke?lang=${locale}&download=auto`;

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LocalDictation",
    applicationCategory: "BusinessApplication",
    operatingSystem: "macOS 14.4 or newer on Apple silicon",
    offers: [
      { "@type": "Offer", price: "99", priceCurrency: "EUR", category: "lifetime" },
      { "@type": "Offer", price: "49", priceCurrency: "EUR", category: "annual" },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: c.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="site-root" lang={locale}>
      <a className="skip-link" href="#main">{c.ui.skip}</a>
      <input className="theme-checkbox" type="checkbox" id={`theme-${locale}`} aria-label={c.ui.theme} />

      <header className="site-header-wrap">
        <div className="site-header shell">
          <a className="brand" href={localeHome(locale)} aria-label="LocalDictation">
            <Brand />
          </a>
          <nav className="site-nav" aria-label={c.ui.mainNav}>
            {c.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <div className="header-actions">
            <label className="theme-switch" htmlFor={`theme-${locale}`} title={c.ui.theme}>
              <span aria-hidden="true">◐</span>
              <span className="sr-only">{c.ui.theme}</span>
            </label>
            <nav className="language-switch-group" aria-label={c.ui.languageNav}>
              {locales.filter((item) => item !== locale).map((item) => (
                <a className="language-switch" key={item} href={localeHome(item)} hrefLang={item}>{localeLabels[item]}</a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero shell" id="top" data-section="S1">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" />{c.hero.eyebrow}</div>
            <h1>{c.hero.title} <span>{c.hero.titleMuted}</span></h1>
            <p className="hero-lede">{c.hero.lede}</p>
            <p className="audience-line">{c.hero.audience}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={downloadHref}>
                <span className="download-symbol" aria-hidden="true">↓</span>{c.hero.download}
              </a>
            </div>
            <p className="fine-print">
              {c.hero.fine.map((item, index) => <span key={item}>{index > 0 && <i />} {item}</span>)}
            </p>
          </div>
          <ProductDemo locale={locale} />
        </section>

        <aside className="trust-strip" id="vertrauen" data-section="S2" aria-label={c.ui.promises}>
          <div className="shell trust-grid">
            {c.trust.map((item, index) => <span key={item}><b aria-hidden="true">{index === 0 ? "●" : "✓"}</b>{item}</span>)}
          </div>
        </aside>

        <section className="section process-section shell" id="funktion" data-section="S3">
          <div className="section-intro">
            <p className="section-kicker">01 — {c.process.kicker}</p>
            <h2>{c.process.title}</h2>
            <p>{c.process.lede}</p>
          </div>
          <div className="steps-grid">
            {c.process.steps.map((step) => (
              <article className="step" key={step.number}>
                <span className="step-number">{step.number}</span>
                <div className="step-icon" aria-hidden="true">{step.number === "01" ? "⌥" : step.number === "02" ? <Waveform compact /> : step.number === "03" ? "!" : "↵"}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
          <a className="text-link" href="#verifikation">{c.process.link} <span aria-hidden="true">↘</span></a>
        </section>

        <section className="section verification-section" id="verifikation" data-section="S4">
          <div className="shell verification-layout">
            <div className="verification-copy">
              <p className="section-kicker">02 — {c.verification.kicker}</p>
              <h2>{c.verification.title}</h2>
              <p className="section-lede">{c.verification.lede}</p>
              <p>{c.verification.body}</p>
              <div className="verification-points">
                {c.verification.points.map((point, index) => <span key={point}><b>{`0${index + 1}`}</b>{point}</span>)}
              </div>
            </div>
            <ProductDemo locale={locale} expanded />
          </div>
        </section>

        <section className="section privacy-section shell" id="datenschutz" data-section="S5">
          <div className="privacy-panel">
            <div className="privacy-copy">
              <p className="section-kicker">03 — {c.privacy.kicker}</p>
              <h2>{c.privacy.title}</h2>
              <p className="section-lede">{c.privacy.lede}</p>
              <p>{c.privacy.body}</p>
            </div>
            <div className="offline-proof" role="img" aria-label={c.privacy.diagramAlt}>
              <div className="offline-status"><span />{c.privacy.ready}</div>
              <div className="device-frame">
                <div className="device-notch" />
                <div className="local-flow">
                  <div><span>1</span>{c.privacy.flow[0]}</div><i>→</i>
                  <div><span>2</span>{c.privacy.flow[1]}</div><i>→</i>
                  <div><span>3</span>{c.privacy.flow[2]}</div>
                </div>
                <p>{c.privacy.processedHere}</p>
              </div>
              <div className="network-blocked"><span aria-hidden="true">⌁</span><s>Cloud upload</s></div>
            </div>
          </div>
          <div className="privacy-facts">
            {c.privacy.facts.map((fact, index) => (
              <article key={fact.title}><span>{`0${index + 1}`}</span><h3>{fact.title}</h3><p>{fact.body}</p></article>
            ))}
          </div>
          <p className="privacy-disclosure">
            {c.privacy.disclosure}{" "}
            <a href="/datenschutz" hrefLang="de">{c.privacy.disclosureLink} ↗</a>
          </p>
        </section>

        <section className="section language-section" id="sprachen" data-section="S6">
          <div className="shell language-layout">
            <div className="section-intro">
              <p className="section-kicker">04 — {c.languages.kicker}</p>
              <h2>{c.languages.title}</h2>
              <p>{c.languages.body}</p>
              <div className="language-pills">
                {c.languages.pills.map((item, index) => <span className={index === 0 ? "active" : ""} key={item}>{item}{index === 0 && <b>✓</b>}</span>)}
              </div>
            </div>
            <div className="dictionary-window">
              <div className="dictionary-header"><span>{c.languages.dictionaryTitle}</span><b>+</b></div>
              {dictionaryWords.map((word, index) => (
                <div className="dictionary-row" key={word}><span>{word}</span><small>{index < 2 ? c.languages.tags.german : index === 2 ? c.languages.tags.english : c.languages.tags.all}</small></div>
              ))}
              <p>{c.languages.note}</p>
            </div>
          </div>
        </section>

        <section className="section features-section shell" id="funktionen" data-section="S7">
          <div className="section-intro section-intro-row">
            <div><p className="section-kicker">05 — {c.features.kicker}</p><h2>{c.features.title}</h2></div>
            <p>{c.features.lede}</p>
          </div>
          <div className="features-grid">
            {c.features.items.map((item) => <article key={item.title}><span className="feature-symbol" aria-hidden="true">{item.symbol}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}
          </div>
        </section>

        <section className="section comparison-section" id="vergleich" data-section="S8">
          <div className="shell">
            <div className="section-intro">
              <p className="section-kicker">06 — {c.comparison.kicker}</p>
              <h2>{c.comparison.title}</h2>
            </div>
            {/* The overflow region must be focusable so keyboard users can scroll the wide table. */}
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
            <div className="comparison-wrap" role="region" tabIndex={0} aria-label={c.comparison.tableLabel}>
              <table>
                <caption className="sr-only">{c.comparison.caption}</caption>
                <thead><tr><th scope="col">{c.comparison.featureHead}</th><th scope="col" className="featured-col">LocalDictation</th><th scope="col">Wispr Flow</th><th scope="col">sprecho.ai</th><th scope="col">Superwhisper</th><th scope="col">VoiceInk</th></tr></thead>
                <tbody>
                  {c.comparison.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={cell}>{cell}</th> : <td className={index === 1 ? "featured-col" : ""} key={`${row[0]}-${index}`}>{index === 1 && <b aria-hidden="true">✓</b>}{cell}</td>)}</tr>)}
                </tbody>
              </table>
            </div>
            <div className="comparison-note">
              <p>{c.comparison.note}</p>
              <span>
                {c.comparison.sources}{" "}
                <a href="https://docs.wisprflow.ai/articles/9559327591-flow-plans-and-what-s-included">Wispr Flow</a>{" · "}
                <a href="https://sprecho.ai/pricing">Sprecho</a>{" · "}
                <a href="https://superwhisper.com/docs/get-started/sw-pro">Superwhisper</a>{" · "}
                <a href="https://tryvoiceink.com/pricing">VoiceInk</a>
              </span>
            </div>
          </div>
        </section>

        <section className="section pricing-section shell" id="preis" data-section="S9">
          <div className="section-intro pricing-intro">
            <p className="section-kicker">07 — {c.pricing.kicker}</p>
            <h2>{c.pricing.title}</h2>
            <p>{c.pricing.lede}</p>
          </div>
          <div className="pricing-grid">
            <article className="price-card price-primary">
              <div className="price-top"><span>{c.pricing.lifetime.name}</span><b>{c.pricing.lifetime.badge}</b></div>
              <div className="price"><sup>€</sup>99 <small>{c.pricing.lifetime.vat}</small></div>
              <p>{c.pricing.lifetime.body}</p>
              <ul>{c.pricing.lifetime.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article className="price-card">
              <div className="price-top"><span>{c.pricing.annual.name}</span></div>
              <div className="price"><sup>€</sup>49 <small>{c.pricing.annual.vat}</small></div>
              <p>{c.pricing.annual.body}</p>
              <ul>{c.pricing.annual.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
          <a className="button button-primary pricing-download" href={downloadHref}>{c.pricing.download}</a>
          <p className="pricing-footnote">{c.pricing.footnote}</p>
          <p className="cost-compare"><span>{c.pricing.compare.cloud}</span><s>$360</s><i>→</i><span>{c.pricing.compare.product}</span><b>€99</b><small>{c.pricing.compare.asOf}</small></p>
        </section>

        <section className="section faq-section" id="faq" data-section="S10">
          <div className="shell faq-layout">
            <div className="section-intro faq-intro"><p className="section-kicker">08 — FAQ</p><h2>{c.faq.title}</h2><p>{c.faq.lede}</p></div>
            <div className="faq-list">
              {c.faq.items.map((item, index) => <details key={item.q} open={index === 0}><summary><span>{item.q}</span><i aria-hidden="true">+</i></summary><p>{item.a}</p></details>)}
            </div>
          </div>
        </section>

        <section className="final-cta shell" id="start" data-section="S11">
          <div className="final-cta-inner">
            <div className="final-wave" aria-hidden="true"><Waveform /><Waveform /><Waveform /></div>
            <p className="section-kicker">09 — {c.final.kicker}</p>
            <h2>{c.final.title}</h2>
            <p>{c.final.body}</p>
            <a className="button button-primary button-large" href={downloadHref}><span aria-hidden="true">↓</span>{c.final.download}</a>
            <small>{downloadAvailable ? c.final.ready : c.final.preview}</small>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-top"><Brand /><p>{c.footer.tagline}</p></div>
        <div className="shell footer-bottom">
          <span>© 2026 LocalDictation</span>
          <nav aria-label={c.footer.legalNav}><a href="/impressum" hrefLang="de">{c.footer.impressum}</a><a href="/datenschutz" hrefLang="de">{c.footer.datenschutz}</a><a href="/widerruf" hrefLang="de">{c.footer.widerruf}</a><a href="mailto:hallo@localdictation.app">{c.footer.kontakt}</a></nav>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  );
}
