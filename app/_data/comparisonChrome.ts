import type { ComparisonLocale } from "./comparisons";

/**
 * Every word the comparison template prints around a page's own content.
 *
 * German is what the template said before it had a second language, verbatim:
 * the seven German pages must render as they did. English has no hub yet, so
 * its breadcrumb goes from the home page straight to the page, and `hub` is
 * null rather than a link to a page that does not exist.
 */
export type ComparisonChrome = {
  skip: string;
  brandLabel: string;
  home: { label: string; href: string };
  hub: { label: string; href: string } | null;
  headerLink: { label: string; href: string };
  breadcrumbLabel: string;
  directAnswer: string;
  download: { label: string; href: string };
  audience: string;
  checkedOn: string;
  checkedNote: string;
  noticeLabel: string;
  noticeLead: string;
  notice: string;
  overview: string;
  tableRegion: string;
  sectionKicker: string;
  verdictLabel: string;
  verdictTitle: string;
  faqKicker: string;
  faqTitle: string;
  sourcesKicker: string;
  sourcesTitle: string;
  sourcesPolicy: (date: string) => string;
  citations: string;
  citation: (index: number, title: string) => string;
  sourceAnchor: string;
  more: string;
  legalNav: string;
  legal: { label: string; href: string }[];
  articleLanguage: string;
  openGraphLocale: string;
};

export const comparisonChrome: Record<ComparisonLocale, ComparisonChrome> = {
  de: {
    skip: "Zum Inhalt",
    brandLabel: "Witness Startseite",
    home: { label: "Startseite", href: "/" },
    hub: { label: "Vergleiche", href: "/vergleich" },
    headerLink: { label: "Produktvergleich", href: "/#vergleich" },
    breadcrumbLabel: "Brotkrümelnavigation",
    directAnswer: "Direkte Antwort",
    download: { label: "Für Mac laden", href: "/danke?download=auto" },
    audience:
      "Für Mac-Nutzer, die täglich viel Text schreiben und dabei Deutsch und Englisch mischen. Läuft auf Apple Silicon.",
    checkedOn: "Fakten geprüft am",
    checkedNote: "Preise in Originalwährung; keine eigenen Genauigkeitsbenchmarks.",
    noticeLabel: "Hinweis zum Produktstatus",
    noticeLead: "Transparenzhinweis:",
    notice:
      "Angaben zu Witness beschreiben Version 0.1.0. Angaben zu den verglichenen Produkten stammen aus deren öffentlicher Dokumentation zum unten genannten Stand.",
    overview: "01 / Überblick",
    tableRegion: "Horizontal scrollbar Vergleichstabelle",
    sectionKicker: "Einordnung",
    verdictLabel: "Entscheidungshilfe",
    verdictTitle: "Ohne Siegerpose, mit klarer Grenze",
    faqKicker: "FAQ / Direkte Antworten",
    faqTitle: "Häufige Fragen",
    sourcesKicker: "Quellennachweis",
    sourcesTitle: "Offizielle Quellen",
    sourcesPolicy: (date) =>
      `Ausschließlich offizielle Produkt-, Hilfe-, Preis- und Rechtstexte. Alle Quellen wurden am ${date} abgerufen.`,
    citations: "Quellen",
    citation: (index, title) => `Quelle ${index}: ${title}`,
    sourceAnchor: "quelle",
    more: "Weitere Vergleiche",
    legalNav: "Rechtliche Links",
    legal: [
      { label: "AGB", href: "/agb" },
      { label: "Widerruf", href: "/widerruf" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "Impressum", href: "/impressum" },
    ],
    articleLanguage: "de-DE",
    openGraphLocale: "de_DE",
  },
  en: {
    skip: "Skip to content",
    brandLabel: "Witness home page",
    home: { label: "Home", href: "/en" },
    hub: null,
    headerLink: { label: "Compare apps", href: "/en#vergleich" },
    breadcrumbLabel: "Breadcrumb",
    directAnswer: "Short answer",
    download: { label: "Try free on your Mac", href: "/danke?lang=en&download=auto" },
    audience:
      "For Mac users who write a lot every day and mix English with another language. Runs on Apple silicon.",
    checkedOn: "Facts checked on",
    checkedNote: "Prices in their original currency; no accuracy benchmarks of our own.",
    noticeLabel: "About the products compared",
    noticeLead: "How this page is written:",
    notice:
      "Statements about Witness describe the version offered for download on this site. Statements about other products come from their public documentation as of the date shown on this page.",
    overview: "01 / Overview",
    tableRegion: "Comparison table, horizontally scrollable",
    sectionKicker: "Details",
    verdictLabel: "Which one fits",
    verdictTitle: "No winner's pose, a clear line instead",
    faqKicker: "FAQ / Short answers",
    faqTitle: "Frequently asked questions",
    sourcesKicker: "Sources",
    sourcesTitle: "Official sources",
    sourcesPolicy: (date) =>
      `Only official product, help, pricing and legal pages. Every source was retrieved on ${date}.`,
    citations: "Sources",
    citation: (index, title) => `Source ${index}: ${title}`,
    sourceAnchor: "source",
    more: "More comparisons",
    legalNav: "Legal links",
    legal: [
      { label: "Terms", href: "/en/terms" },
      { label: "Cancellation", href: "/en/cancellation" },
      { label: "Privacy", href: "/en/privacy" },
      { label: "Legal notice", href: "/en/legal-notice" },
    ],
    articleLanguage: "en",
    openGraphLocale: "en_GB",
  },
};
