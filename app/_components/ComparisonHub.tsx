import type { Metadata } from "next";
import Link from "next/link";
import { comparisonSlugs, comparisons, type CitedCopy } from "../_data/comparisons";
import {
  hubDescription,
  hubDirectAnswer,
  hubFaqs,
  hubMetaTitle,
  hubRows,
  hubSections,
  hubSources,
  hubTableHeaders,
  hubTitle,
  hubUpdatedIso,
  hubUpdatedLabel,
  hubVerdict,
} from "../_data/comparisonHub";
import { requestOrigin } from "../_lib/requestOrigin";
import styles from "./ComparisonPage.module.css";

// The hub used to be a list of cards; the search "Diktier-App Mac" wants the
// answer itself, so it is now a roundup with one table and the cards below it.
// It lives apart from ComparisonPage.tsx so the English template can change
// that file without touching this one.

export async function comparisonHubMetadata(): Promise<Metadata> {
  const origin = await requestOrigin();
  const canonical = new URL("/vergleich", origin).toString();
  const image = new URL("/og.png", origin).toString();

  return {
    metadataBase: origin,
    title: hubMetaTitle,
    description: hubDescription,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url: canonical,
      siteName: "Witness",
      title: hubMetaTitle,
      description: hubDescription,
      images: [{ url: image, width: 1200, height: 630, alt: "Witness für den Mac" }],
    },
    twitter: { card: "summary_large_image", title: hubMetaTitle, description: hubDescription, images: [image] },
  };
}

function Citations({ sources }: { sources?: string[] }) {
  if (!sources?.length) return null;

  return (
    <span className={styles.citations} aria-label="Quellen">
      {sources.map((sourceId) => {
        const index = hubSources.findIndex((source) => source.id === sourceId);
        if (index < 0) return null;
        const source = hubSources[index];
        return (
          <a href={`#quelle-${source.id}`} aria-label={`Quelle ${index + 1}: ${source.title}`} key={source.id}>
            [{index + 1}]
          </a>
        );
      })}
    </span>
  );
}

function Cited({ copy }: { copy: CitedCopy }) {
  return (
    <p>
      {copy.text}
      <Citations sources={copy.sources} />
    </p>
  );
}

export async function ComparisonHub() {
  const origin = await requestOrigin();
  const canonical = new URL("/vergleich", origin).toString();
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: hubTitle,
    description: hubDescription,
    inLanguage: "de-DE",
    url: canonical,
    dateModified: hubUpdatedIso,
    citation: hubSources.map((source) => new URL(source.url, origin).toString()),
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: comparisonSlugs.length,
      itemListElement: comparisonSlugs.map((slug, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: comparisons[slug].eyebrow,
        url: new URL(comparisons[slug].path, origin).toString(),
      })),
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: origin.toString() },
      { "@type": "ListItem", position: 2, name: "Vergleiche", item: canonical },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hubFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const schema = JSON.stringify([collectionSchema, breadcrumbSchema, faqSchema]).replace(/</g, "\\u003c");

  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#vergleich-inhalt">Zum Inhalt</a>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="Witness Startseite">
          <span className={styles.brandMark} aria-hidden="true"><i /><i /><i /><i /><i /></span>
          Witness
        </Link>
        <Link className={styles.headerLink} href="/">Zur Produktseite <span aria-hidden="true">↗</span></Link>
      </header>
      <main id="vergleich-inhalt">
        <article className={styles.article}>
          <nav className={styles.breadcrumbs} aria-label="Brotkrümelnavigation">
            <Link href="/">Startseite</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Vergleiche</span>
          </nav>

          <header className={`${styles.hero} ${styles.hubHero}`}>
            <p className={styles.eyebrow}>Diktier-Apps für den Mac</p>
            <h1>{hubTitle}</h1>
            <div className={styles.answer}>
              <span className={styles.answerLabel}>Direkte Antwort</span>
              <Cited copy={hubDirectAnswer} />
            </div>
            <div className={styles.freshness}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span>
                Fakten geprüft am <time dateTime={hubUpdatedIso}>{hubUpdatedLabel}</time>. Preise in
                Originalwährung; keine eigenen Genauigkeitsbenchmarks.
              </span>
            </div>
          </header>

          <aside className={styles.previewNote} aria-label="Offenlegung">
            <strong>Offenlegung:</strong> Witness ist unser eigenes Produkt. Die Tabelle beginnt mit der kostenlosen
            Diktierfunktion von macOS, danach folgen die Apps alphabetisch.
          </aside>

          <section className={styles.tableSection} aria-labelledby="vergleich-tabelle">
            <div className={styles.sectionIndex}>01 / Überblick</div>
            <h2 id="vergleich-tabelle">Sieben Diktier-Apps in einer Tabelle</h2>
            {/* The overflow region must be focusable so keyboard users can scroll the wide table. */}
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
            <div className={`${styles.tableWrap} ${styles.hubTable}`} role="region" tabIndex={0} aria-label="Horizontal scrollbar Vergleichstabelle">
              <table>
                <thead>
                  <tr>
                    {hubTableHeaders.map((header) => (
                      <th scope="col" key={header}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {hubRows.map((row) => (
                    <tr className={row.own ? styles.ownRow : undefined} key={row.app}>
                      <th scope="row">
                        <Link href={row.href}>{row.app}</Link>
                        <Citations sources={row.sources} />
                      </th>
                      <td>{row.processing}</td>
                      <td>{row.platforms}</td>
                      <td>{row.free}</td>
                      <td>{row.price}</td>
                      <td>{row.fit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className={styles.prose}>
            {hubSections.map((section, index) => (
              <section className={styles.contentSection} key={section.title}>
                <div className={styles.sectionIndex}>{String(index + 2).padStart(2, "0")} / Auswahl</div>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <Cited copy={paragraph} key={paragraph.text} />
                ))}
                {section.link ? (
                  <p>
                    <Link href={section.link.href}>{section.link.label} <span aria-hidden="true">→</span></Link>
                  </p>
                ) : null}
              </section>
            ))}
          </div>

          <section className={styles.verdict} aria-labelledby="fazit">
            <div>
              <span className={styles.answerLabel}>Entscheidungshilfe</span>
              <h2 id="fazit">Zwei Fragen statt einer Rangliste</h2>
              <Cited copy={hubVerdict} />
            </div>
            <Link className={styles.primaryButton} href="/danke?download=auto">
              Witness für Mac laden <span aria-hidden="true">↓</span>
            </Link>
          </section>

          <section className={styles.hubCards} aria-labelledby="einzelvergleiche">
            <div className={styles.sectionIndex}>Einzelvergleiche</div>
            <h2 id="einzelvergleiche">Jede App im Detail</h2>
            <div className={styles.cardGrid}>
              {comparisonSlugs.map((slug, index) => {
                const comparison = comparisons[slug];
                return (
                  <article className={styles.comparisonCard} key={slug}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{comparison.eyebrow}</h3>
                    <p>{comparison.description}</p>
                    <Link href={comparison.path}>Vergleich lesen <span aria-hidden="true">→</span></Link>
                  </article>
                );
              })}
            </div>
          </section>

          <section className={styles.faq} aria-labelledby="faq">
            <div className={styles.sectionIndex}>FAQ / Direkte Antworten</div>
            <h2 id="faq">Häufige Fragen</h2>
            <div className={styles.faqGrid}>
              {hubFaqs.map((faq) => (
                <div className={styles.faqItem} key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.sources} aria-labelledby="quellen">
            <div className={styles.sectionIndex}>Quellennachweis</div>
            <h2 id="quellen">Offizielle Quellen</h2>
            <p className={styles.sourcePolicy}>
              Ausschließlich offizielle Produkt-, Hilfe- und Preisseiten. Alle Quellen wurden am {hubUpdatedLabel} abgerufen.
              Wo eine Funktion nicht belegt ist, steht „nicht öffentlich dokumentiert“.
            </p>
            <ol>
              {hubSources.map((source) => (
                <li id={`quelle-${source.id}`} key={source.id}>
                  <span>{source.publisher}</span>
                  {source.url.startsWith("http") ? (
                    <a href={source.url} target="_blank" rel="noreferrer">
                      {source.title} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <Link href={source.url}>
                      {source.title} <span aria-hidden="true">↗</span>
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </section>
        </article>
      </main>
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Witness</span>
        <nav aria-label="Rechtliche Links">
          <Link href="/agb">AGB</Link>
          <Link href="/widerruf">Widerruf</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/impressum">Impressum</Link>
        </nav>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
    </div>
  );
}
