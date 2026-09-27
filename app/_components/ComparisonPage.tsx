import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { comparisonChrome, type ComparisonChrome } from "../_data/comparisonChrome";
import {
  comparisonUpdatedIso,
  comparisonUpdatedLabel,
  comparisonsIn,
  type CitedCopy,
  type ComparisonPageData,
  type ComparisonSlug,
  type ComparisonSource,
  type EnglishComparisonSlug,
} from "../_data/comparisons";
import { requestOrigin } from "../_lib/requestOrigin";
import styles from "./ComparisonPage.module.css";

const comparisonLabels: Record<ComparisonSlug | EnglishComparisonSlug, string> = {
  "mac-diktierfunktion": "Mac-Diktierfunktion",
  "wispr-flow-alternative": "Wispr Flow",
  "superwhisper-alternative": "Superwhisper",
  "sprecho-alternative": "Sprecho",
  "voiceink-vs-witness": "VoiceInk",
  "macwhisper-alternative": "MacWhisper",
  "diktiersoftware-mac-dsgvo": "Mac & DSGVO",
};

function localeOf(data: ComparisonPageData) {
  return data.locale ?? "de";
}

/**
 * hreflang for a page that exists in both languages. German stays x-default,
 * as on the landing pages. A page with no translation gets no alternates: a
 * set naming only itself tells a crawler nothing.
 */
function languageAlternates(data: ComparisonPageData, origin: URL) {
  if (!data.translation) return undefined;
  // Compared through localeOf rather than `data.locale`, which narrows `data`
  // to nothing while no English page exists.
  const english = localeOf(data) === "en";
  const [germanPath, englishPath] = english ? [data.translation, data.path] : [data.path, data.translation];
  return {
    de: new URL(germanPath, origin).toString(),
    en: new URL(englishPath, origin).toString(),
    "x-default": new URL(germanPath, origin).toString(),
  };
}

export async function comparisonMetadata(data: ComparisonPageData): Promise<Metadata> {
  const origin = await requestOrigin();
  const canonical = new URL(data.path, origin).toString();
  const languages = languageAlternates(data, origin);

  return {
    metadataBase: origin,
    title: data.metaTitle,
    description: data.description,
    alternates: languages ? { canonical, languages } : { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      locale: comparisonChrome[localeOf(data)].openGraphLocale,
      url: canonical,
      siteName: "Witness",
      title: data.metaTitle,
      description: data.description,
      images: [],
    },
    twitter: {
      card: "summary",
      title: data.metaTitle,
      description: data.description,
      images: [],
    },
  };
}

function CitationLinks({ copy, sources, chrome }: { copy: CitedCopy; sources: ComparisonSource[]; chrome: ComparisonChrome }) {
  if (!copy.sources?.length) return null;

  return (
    <span className={styles.citations} aria-label={chrome.citations}>
      {copy.sources.map((sourceId) => {
        const index = sources.findIndex((source) => source.id === sourceId);
        if (index < 0) return null;
        const source = sources[index];
        return (
          <a
            href={`#${chrome.sourceAnchor}-${source.id}`}
            aria-label={chrome.citation(index + 1, source.title)}
            key={source.id}
          >
            [{index + 1}]
          </a>
        );
      })}
    </span>
  );
}

function CitedParagraph({ copy, sources, chrome }: { copy: CitedCopy; sources: ComparisonSource[]; chrome: ComparisonChrome }) {
  return (
    <p>
      {copy.text}
      <CitationLinks copy={copy} sources={sources} chrome={chrome} />
    </p>
  );
}

function absoluteSourceUrl(source: ComparisonSource, origin: URL) {
  return new URL(source.url, origin).toString();
}

export async function ComparisonPage({ data }: { data: ComparisonPageData }) {
  const origin = await requestOrigin();
  const locale = localeOf(data);
  const chrome = comparisonChrome[locale];
  const canonical = new URL(data.path, origin).toString();
  const updatedIso = data.updatedIso ?? comparisonUpdatedIso;
  const updatedLabel = data.updatedLabel ?? comparisonUpdatedLabel;
  const citations = data.sources.map((source) => absoluteSourceUrl(source, origin));
  const siblings = comparisonsIn(locale);
  const trail = [chrome.home, ...(chrome.hub ? [chrome.hub] : [])];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    inLanguage: chrome.articleLanguage,
    dateModified: updatedIso,
    mainEntityOfPage: canonical,
    author: { "@type": "Organization", name: "Witness", url: origin.toString() },
    publisher: { "@type": "Organization", name: "Witness", url: origin.toString() },
    citation: citations,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      ...trail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: new URL(crumb.href, origin).toString(),
      })),
      { "@type": "ListItem", position: trail.length + 1, name: data.eyebrow, item: canonical },
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
        {chrome.skip}
      </a>
      <header className={styles.header}>
        <Link className={styles.brand} href={chrome.home.href} aria-label={chrome.brandLabel}>
          <span className={styles.brandMark} aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
          Witness
        </Link>
        <Link className={styles.headerLink} href={chrome.headerLink.href}>
          {chrome.headerLink.label} <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <main id="vergleich-inhalt">
        <article className={styles.article}>
          <nav className={styles.breadcrumbs} aria-label={chrome.breadcrumbLabel}>
            {trail.map((crumb) => (
              <Fragment key={crumb.href}>
                <Link href={crumb.href}>{crumb.label}</Link>
                <span aria-hidden="true">/</span>
              </Fragment>
            ))}
            <span aria-current="page">{data.eyebrow}</span>
          </nav>

          <header className={styles.hero}>
            <p className={styles.eyebrow}>{data.eyebrow}</p>
            <h1>{data.title}</h1>
            <div className={styles.answer}>
              <span className={styles.answerLabel}>{chrome.directAnswer}</span>
              <CitedParagraph copy={data.directAnswer} sources={data.sources} chrome={chrome} />
            </div>
            {/* Paid search lands here, not on the home page: the first screen needs its own
                call to action and its own audience line, so a wrong-fit reader leaves before
                the click costs anything. The verdict keeps a second one for readers who
                scroll the whole comparison. */}
            <div className={styles.heroCta}>
              <Link className={styles.primaryButton} href={chrome.download.href}>
                {chrome.download.label} <span aria-hidden="true">↓</span>
              </Link>
              <p className={styles.heroAudience}>{chrome.audience}</p>
            </div>
            <div className={styles.freshness}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span>
                {chrome.checkedOn} <time dateTime={updatedIso}>{updatedLabel}</time>. {chrome.checkedNote}
              </span>
            </div>
          </header>

          <aside className={styles.previewNote} aria-label={chrome.noticeLabel}>
            <strong>{chrome.noticeLead}</strong> {chrome.notice}
          </aside>

          <section className={styles.tableSection} aria-labelledby="vergleich-tabelle">
            <div className={styles.sectionIndex}>{chrome.overview}</div>
            <h2 id="vergleich-tabelle">{data.table.caption}</h2>
            {/* The overflow region must be focusable so keyboard users can scroll the wide table. */}
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
            <div className={styles.tableWrap} role="region" tabIndex={0} aria-label={chrome.tableRegion}>
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
                <div className={styles.sectionIndex}>{String(index + 2).padStart(2, "0")} / {chrome.sectionKicker}</div>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <CitedParagraph copy={paragraph} sources={data.sources} chrome={chrome} key={paragraph.text} />
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet.text}>
                        {bullet.text}
                        <CitationLinks copy={bullet} sources={data.sources} chrome={chrome} />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <section className={styles.verdict} aria-labelledby="fazit">
            <div>
              <span className={styles.answerLabel}>{chrome.verdictLabel}</span>
              <h2 id="fazit">{chrome.verdictTitle}</h2>
              <CitedParagraph copy={data.verdict} sources={data.sources} chrome={chrome} />
            </div>
            <Link className={styles.primaryButton} href={chrome.download.href}>
              {chrome.download.label} <span aria-hidden="true">↓</span>
            </Link>
          </section>

          <section className={styles.faq} aria-labelledby="faq">
            <div className={styles.sectionIndex}>{chrome.faqKicker}</div>
            <h2 id="faq">{chrome.faqTitle}</h2>
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
            <div className={styles.sectionIndex}>{chrome.sourcesKicker}</div>
            <h2 id="quellen">{chrome.sourcesTitle}</h2>
            <p className={styles.sourcePolicy}>{chrome.sourcesPolicy(updatedLabel)}</p>
            <ol>
              {data.sources.map((source) => (
                <li id={`${chrome.sourceAnchor}-${source.id}`} key={source.id}>
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

          {/* An English page alone in its locale has nothing to list. */}
          {siblings.length > 1 ? (
            <nav className={styles.moreComparisons} aria-label={chrome.more}>
              <span>{chrome.more}</span>
              <div>
                {siblings.map((entry) => (
                  <Link
                    href={entry.path}
                    aria-current={entry.path === data.path ? "page" : undefined}
                    key={entry.path}
                  >
                    {comparisonLabels[entry.slug]}
                  </Link>
                ))}
              </div>
            </nav>
          ) : null}
        </article>
      </main>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Witness</span>
        <nav aria-label={chrome.legalNav}>
          {chrome.legal.map((link) => (
            <Link href={link.href} key={link.href}>{link.label}</Link>
          ))}
        </nav>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
    </div>
  );
}
