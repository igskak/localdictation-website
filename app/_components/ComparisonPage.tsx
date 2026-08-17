import type { Metadata } from "next";
import Link from "next/link";
import {
  comparisonSlugs,
  comparisonUpdatedIso,
  comparisonUpdatedLabel,
  comparisons,
  type CitedCopy,
  type ComparisonPageData,
  type ComparisonSource,
} from "../_data/comparisons";
import { requestOrigin } from "../_lib/requestOrigin";
import styles from "./ComparisonPage.module.css";

const comparisonLabels = {
  "wispr-flow-alternative": "Wispr Flow",
  "superwhisper-alternative": "Superwhisper",
  "sprecho-alternative": "Sprecho",
  "voiceink-vs-localdictation": "VoiceInk",
  "diktiersoftware-mac-dsgvo": "Mac & DSGVO",
} as const;

export async function comparisonMetadata(data: ComparisonPageData): Promise<Metadata> {
  const origin = await requestOrigin();
  const canonical = new URL(data.path, origin).toString();
  const image = new URL("/og.png", origin).toString();

  return {
    metadataBase: origin,
    title: data.metaTitle,
    description: data.description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      locale: "de_DE",
      url: canonical,
      siteName: "LocalDictation",
      title: data.metaTitle,
      description: data.description,
      images: [{ url: image, width: 1200, height: 630, alt: "LocalDictation für den Mac" }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.description,
      images: [image],
    },
  };
}

export async function comparisonHubMetadata(): Promise<Metadata> {
  const origin = await requestOrigin();
  const canonical = new URL("/vergleich", origin).toString();
  const image = new URL("/og.png", origin).toString();
  const title = "Diktier-Apps für den Mac im Vergleich | LocalDictation";
  const description =
    "Quellenbasierte Vergleiche von LocalDictation, Wispr Flow, Superwhisper, Sprecho und VoiceInk — mit Datenfluss, Sprachen, Preisen und Produktstatus.";

  return {
    metadataBase: origin,
    title,
    description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url: canonical,
      siteName: "LocalDictation",
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: "LocalDictation für den Mac" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

function CitationLinks({ copy, sources }: { copy: CitedCopy; sources: ComparisonSource[] }) {
  if (!copy.sources?.length) return null;

  return (
    <span className={styles.citations} aria-label="Quellen">
      {copy.sources.map((sourceId) => {
        const index = sources.findIndex((source) => source.id === sourceId);
        if (index < 0) return null;
        const source = sources[index];
        return (
          <a
            href={`#quelle-${source.id}`}
            aria-label={`Quelle ${index + 1}: ${source.title}`}
            key={source.id}
          >
            [{index + 1}]
          </a>
        );
      })}
    </span>
  );
}

function CitedParagraph({ copy, sources }: { copy: CitedCopy; sources: ComparisonSource[] }) {
  return (
    <p>
      {copy.text}
      <CitationLinks copy={copy} sources={sources} />
    </p>
  );
}

function absoluteSourceUrl(source: ComparisonSource, origin: URL) {
  return new URL(source.url, origin).toString();
}

export async function ComparisonPage({ data }: { data: ComparisonPageData }) {
  const origin = await requestOrigin();
  const canonical = new URL(data.path, origin).toString();
  const citations = data.sources.map((source) => absoluteSourceUrl(source, origin));
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    inLanguage: "de-DE",
    dateModified: comparisonUpdatedIso,
    mainEntityOfPage: canonical,
    author: { "@type": "Organization", name: "LocalDictation", url: origin.toString() },
    publisher: { "@type": "Organization", name: "LocalDictation", url: origin.toString() },
    citation: citations,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: origin.toString() },
      { "@type": "ListItem", position: 2, name: "Vergleiche", item: new URL("/vergleich", origin).toString() },
      { "@type": "ListItem", position: 3, name: data.eyebrow, item: canonical },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const schema = JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]).replace(/</g, "\\u003c");

  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#vergleich-inhalt">
        Zum Inhalt
      </a>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="LocalDictation Startseite">
          <span className={styles.brandMark} aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
          LocalDictation
        </Link>
        <Link className={styles.headerLink} href="/#vergleich">
          Produktvergleich <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <main id="vergleich-inhalt">
        <article className={styles.article}>
          <nav className={styles.breadcrumbs} aria-label="Brotkrümelnavigation">
            <Link href="/">Startseite</Link>
            <span aria-hidden="true">/</span>
            <Link href="/vergleich">Vergleiche</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{data.eyebrow}</span>
          </nav>

          <header className={styles.hero}>
            <p className={styles.eyebrow}>{data.eyebrow}</p>
            <h1>{data.title}</h1>
            <div className={styles.answer}>
              <span className={styles.answerLabel}>Direkte Antwort</span>
              <CitedParagraph copy={data.directAnswer} sources={data.sources} />
            </div>
            <div className={styles.freshness}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span>
                Fakten geprüft am <time dateTime={comparisonUpdatedIso}>{comparisonUpdatedLabel}</time>. Preise in
                Originalwährung; keine eigenen Genauigkeitsbenchmarks.
              </span>
            </div>
          </header>

          <aside className={styles.previewNote} aria-label="Hinweis zum Produktstatus">
            <strong>Transparenzhinweis:</strong> LocalDictation befindet sich in privater Vorschau. Funktionen und Preise
            beschreiben den vorgesehenen Launch-Umfang; die verglichenen Konkurrenzprodukte sind bereits verfügbar.
          </aside>

          <section className={styles.tableSection} aria-labelledby="vergleich-tabelle">
            <div className={styles.sectionIndex}>01 / Überblick</div>
            <h2 id="vergleich-tabelle">{data.table.caption}</h2>
            {/* The overflow region must be focusable so keyboard users can scroll the wide table. */}
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
            <div className={styles.tableWrap} role="region" tabIndex={0} aria-label="Horizontal scrollbar Vergleichstabelle">
              <table>
                <thead>
                  <tr>
                    {data.table.headers.map((header) => (
                      <th scope="col" key={header}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.table.rows.map((row) => (
                    <tr key={row[0]}>
                      <th scope="row">{row[0]}</th>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className={styles.prose}>
            {data.sections.map((section, index) => (
              <section className={styles.contentSection} key={section.title}>
                <div className={styles.sectionIndex}>{String(index + 2).padStart(2, "0")} / Einordnung</div>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <CitedParagraph copy={paragraph} sources={data.sources} key={paragraph.text} />
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet.text}>
                        {bullet.text}
                        <CitationLinks copy={bullet} sources={data.sources} />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <section className={styles.verdict} aria-labelledby="fazit">
            <div>
              <span className={styles.answerLabel}>Entscheidungshilfe</span>
              <h2 id="fazit">Ohne Siegerpose, mit klarer Grenze</h2>
              <CitedParagraph copy={data.verdict} sources={data.sources} />
            </div>
            <Link className={styles.primaryButton} href="/danke?download=auto">
              Für Mac laden <span aria-hidden="true">↓</span>
            </Link>
          </section>

          <section className={styles.faq} aria-labelledby="faq">
            <div className={styles.sectionIndex}>FAQ / Direkte Antworten</div>
            <h2 id="faq">Häufige Fragen</h2>
            <div className={styles.faqGrid}>
              {data.faqs.map((faq) => (
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
              Ausschließlich offizielle Produkt-, Hilfe-, Preis- und Rechtstexte. Alle Quellen wurden am {comparisonUpdatedLabel} abgerufen.
            </p>
            <ol>
              {data.sources.map((source) => (
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

          <nav className={styles.moreComparisons} aria-label="Weitere Vergleiche">
            <span>Weitere Vergleiche</span>
            <div>
              {comparisonSlugs.map((slug) => (
                <Link
                  href={comparisons[slug].path}
                  aria-current={slug === data.slug ? "page" : undefined}
                  key={slug}
                >
                  {comparisonLabels[slug]}
                </Link>
              ))}
            </div>
          </nav>
        </article>
      </main>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} LocalDictation</span>
        <nav aria-label="Rechtliche Links">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/widerruf">Widerruf</Link>
        </nav>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
    </div>
  );
}

export async function ComparisonHub() {
  const origin = await requestOrigin();
  const canonical = new URL("/vergleich", origin).toString();
  const title = "Diktier-Apps für den Mac: fünf nachvollziehbare Vergleiche";
  const description =
    "Offizielle Quellen statt Genauigkeitsversprechen: Vergleiche Datenfluss, Plattformen, Sprachen, Kontrolle und Kosten von LocalDictation und etablierten Diktier-Apps.";
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    inLanguage: "de-DE",
    url: canonical,
    dateModified: comparisonUpdatedIso,
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
  }).replace(/</g, "\\u003c");

  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#vergleich-inhalt">Zum Inhalt</a>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="LocalDictation Startseite">
          <span className={styles.brandMark} aria-hidden="true"><i /><i /><i /><i /><i /></span>
          LocalDictation
        </Link>
        <Link className={styles.headerLink} href="/">Zur Produktseite <span aria-hidden="true">↗</span></Link>
      </header>
      <main id="vergleich-inhalt">
        <div className={styles.article}>
          <nav className={styles.breadcrumbs} aria-label="Brotkrümelnavigation">
            <Link href="/">Startseite</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Vergleiche</span>
          </nav>
          <header className={`${styles.hero} ${styles.hubHero}`}>
            <p className={styles.eyebrow}>Quellenbasierte Vergleiche</p>
            <h1>{title}</h1>
            <p className={styles.hubLede}>{description}</p>
            <div className={styles.freshness}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span>Fakten geprüft am <time dateTime={comparisonUpdatedIso}>{comparisonUpdatedLabel}</time>.</span>
            </div>
          </header>
          <section className={styles.cardGrid} aria-label="Alle Vergleiche">
            {comparisonSlugs.map((slug, index) => {
              const comparison = comparisons[slug];
              return (
                <article className={styles.comparisonCard} key={slug}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h2>{comparison.eyebrow}</h2>
                  <p>{comparison.description}</p>
                  <Link href={comparison.path}>Vergleich lesen <span aria-hidden="true">→</span></Link>
                </article>
              );
            })}
          </section>
          <aside className={styles.previewNote} aria-label="Redaktioneller Standard">
            <strong>Unser Standard:</strong> Preise bleiben in Originalwährung. Aussagen stammen aus offiziellen Quellen,
            tragen ein Abrufdatum und unterscheiden zwischen lokal, optionaler Cloud und zwingender Cloud. Wo eine
            Funktion nicht belegt ist, steht „nicht öffentlich dokumentiert“.
          </aside>
        </div>
      </main>
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} LocalDictation</span>
        <nav aria-label="Rechtliche Links">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/widerruf">Widerruf</Link>
        </nav>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
    </div>
  );
}
