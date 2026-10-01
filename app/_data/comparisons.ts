export const comparisonSlugs = [
  "mac-diktierfunktion",
  "wispr-flow-alternative",
  "superwhisper-alternative",
  "sprecho-alternative",
  "voiceink-vs-witness",
  "macwhisper-alternative",
  "diktiersoftware-mac-dsgvo",
  "ki-spracherkennung",
] as const;

export type ComparisonSlug = (typeof comparisonSlugs)[number];

/**
 * English pages, in the order the page footer lists them. Empty until the first
 * one is written: the template exists first so that page is data only
 * (docs/seo/BACKLOG.md, item 2). A page lives under `/en/compare/<slug>` or
 * `/en/guides/<slug>`, whichever its `path` names.
 */
export const englishComparisonSlugs = ["wispr-flow-alternatives", "mac-dictation", "dictation-missed-words"] as const;

export type EnglishComparisonSlug = (typeof englishComparisonSlugs)[number];

export type ComparisonLocale = "de" | "en";

export type ComparisonSource = {
  id: string;
  title: string;
  publisher: string;
  url: string;
};

export type CitedCopy = {
  text: string;
  sources?: string[];
};

export type ComparisonSection = {
  title: string;
  paragraphs: CitedCopy[];
  bullets?: CitedCopy[];
};

export type ComparisonFaq = {
  question: string;
  answer: string;
};

type PageFields = {
  eyebrow: string;
  title: string;
  metaTitle: string;
  description: string;
  /** Set only when this page was verified later than `comparisonUpdatedIso`. */
  updatedIso?: string;
  updatedLabel?: string;
  directAnswer: CitedCopy;
  table: {
    caption: string;
    headers: [string, string, string];
    rows: Array<[string, string, string]>;
  };
  sections: ComparisonSection[];
  verdict: CitedCopy;
  faqs: ComparisonFaq[];
  sources: ComparisonSource[];
};

/**
 * `locale` decides the page's chrome, its `lang`, its Open Graph locale and its
 * JSON-LD language. German is the default, so the pages written before English
 * existed need no field. An English page states its own check date: the shared
 * one is a German label.
 */
export type ComparisonPageData =
  | (PageFields & {
      locale?: "de";
      slug: ComparisonSlug;
      path: `/vergleich/${ComparisonSlug}`;
      /** The English version of this page, when there is one. */
      translation?: `/en/${"compare" | "guides"}/${EnglishComparisonSlug}`;
    })
  | (PageFields & {
      locale: "en";
      slug: EnglishComparisonSlug;
      path: `/en/${"compare" | "guides"}/${EnglishComparisonSlug}`;
      updatedIso: string;
      updatedLabel: string;
      /** The German version of this page, when there is one. */
      translation?: `/vergleich/${ComparisonSlug}`;
    });

export const comparisonUpdatedIso = "2026-10-01";
export const comparisonUpdatedLabel = "1. Oktober 2026";

const localSource: ComparisonSource = {
  id: "local-product",
  title: "Witness Produktseite und Produktstatus",
  publisher: "Witness",
  url: "/",
};

/** The same source for English pages. Exported because no English page exists yet to use it here. */
export const localSourceEn: ComparisonSource = {
  id: "local-product",
  title: "Witness product page",
  publisher: "Witness",
  url: "/en",
};

const wisprSources: ComparisonSource[] = [
  {
    id: "wispr-security",
    title: "Security and Compliance FAQ",
    publisher: "Wispr Flow",
    url: "https://docs.wisprflow.ai/articles/3467817258-security-and-compliance-faq",
  },
  {
    id: "wispr-languages",
    title: "Use Flow with multiple languages",
    publisher: "Wispr Flow",
    url: "https://docs.wisprflow.ai/articles/3191899797-use-flow-with-multiple-languages",
  },
  {
    id: "wispr-plans",
    title: "Plans and pricing",
    publisher: "Wispr Flow",
    url: "https://wisprflow.ai/pricing",
  },
  {
    id: "wispr-setup",
    title: "Setup guide",
    publisher: "Wispr Flow",
    url: "https://docs.wisprflow.ai/articles/3152211871-setup-guide",
  },
  {
    id: "wispr-privacy",
    title: "Dictation cloud storage and model training settings",
    publisher: "Wispr Flow",
    url: "https://docs.wisprflow.ai/articles/4709791908-understanding-privacy-mode-and-cloud-sync",
  },
  {
    id: "wispr-free",
    title: "Free tier weekly word cap and trial information",
    publisher: "Wispr Flow",
    url: "https://docs.wisprflow.ai/articles/4760791189-free-tier-weekly-word-cap-and-bonus-words-remove-desktop-trial-experiment",
  },
];

const superwhisperSources: ComparisonSource[] = [
  {
    id: "super-pro",
    title: "Superwhisper Pro",
    publisher: "Superwhisper",
    url: "https://superwhisper.com/docs/get-started/sw-pro",
  },
  {
    id: "super-security",
    title: "Sensitive Data and Security",
    publisher: "Superwhisper",
    url: "https://superwhisper.com/docs/security/sensitive-data",
  },
  {
    id: "super-models",
    title: "Voice and language models",
    publisher: "Superwhisper",
    url: "https://superwhisper.com/models",
  },
  {
    id: "super-languages",
    title: "Language detection",
    publisher: "Superwhisper",
    url: "https://superwhisper.com/docs/common-issues/language-detection",
  },
  {
    id: "super-download",
    title: "Download and system requirements",
    publisher: "Superwhisper",
    url: "https://superwhisper.com/download",
  },
];

const sprechoSources: ComparisonSource[] = [
  {
    id: "sprecho-product",
    title: "Sprecho Produktseite",
    publisher: "Sprecho",
    url: "https://sprecho.ai/",
  },
  {
    id: "sprecho-pricing",
    title: "Preise",
    publisher: "Sprecho",
    url: "https://sprecho.ai/pricing",
  },
  {
    id: "sprecho-dpa",
    title: "Auftragsverarbeitungsvertrag (PDF)",
    publisher: "Sprecho",
    url: "https://sprecho.ai/Auftragsverarbeitungsvertrag-Sprecho.pdf",
  },
];

const voiceInkSources: ComparisonSource[] = [
  {
    id: "voiceink-product",
    title: "VoiceInk Produktseite und Preise",
    publisher: "VoiceInk",
    url: "https://tryvoiceink.com/",
  },
  {
    id: "voiceink-github",
    title: "VoiceInk Quellcode und README",
    publisher: "VoiceInk / GitHub",
    url: "https://github.com/Beingpax/VoiceInk",
  },
  {
    id: "voiceink-models",
    title: "AI Models",
    publisher: "VoiceInk",
    url: "https://tryvoiceink.com/docs/ai-models",
  },
  {
    id: "voiceink-terms",
    title: "Terms of Service",
    publisher: "VoiceInk",
    url: "https://tryvoiceink.com/terms",
  },
];

const macwhisperSources: ComparisonSource[] = [
  {
    id: "macwhisper-product",
    title: "MacWhisper Produktseite, Funktionen und Preise",
    publisher: "MacWhisper",
    url: "https://www.macwhisper.com/",
  },
  {
    id: "macwhisper-licensing",
    title: "Lizenz auf mehreren Geräten aktivieren",
    publisher: "MacWhisper Support",
    url: "https://docs.macwhisper.com/article/39-licensing",
  },
  {
    id: "macwhisper-docs",
    title: "MacWhisper Support-Dokumentation",
    publisher: "MacWhisper",
    url: "https://docs.macwhisper.com/",
  },
];

const appleSources: ComparisonSource[] = [
  {
    id: "apple-dictation",
    title: "Diktieren von Nachrichten und Dokumenten auf dem Mac",
    publisher: "Apple Support",
    url: "https://support.apple.com/de-de/guide/mac-help/mh40584/26/mac/26",
  },
  {
    id: "apple-privacy",
    title: "Siri, Diktierfunktion & Datenschutz",
    publisher: "Apple",
    url: "https://www.apple.com/de/legal/privacy/data/de/ask-siri-dictation/",
  },
  {
    id: "gdpr",
    title: "Verordnung (EU) 2016/679, insbesondere Artikel 4 und 28",
    publisher: "EUR-Lex",
    url: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679",
  },
];

const spokenlySources: ComparisonSource[] = [
  {
    id: "spokenly-pricing",
    title: "Dictation App Pricing: Free & Pro Plans",
    publisher: "Spokenly",
    url: "https://spokenly.app/pricing",
  },
];

const fluidVoiceSources: ComparisonSource[] = [
  {
    id: "fluidvoice-product",
    title: "FluidVoice: free open source voice-to-text for macOS",
    publisher: "Altic",
    url: "https://altic.dev/fluid",
  },
];

const macParakeetSources: ComparisonSource[] = [
  {
    id: "macparakeet-product",
    title: "MacParakeet: local dictation and meeting recording for Mac",
    publisher: "MacParakeet",
    url: "https://macparakeet.com/",
  },
];

/** The English-language Apple Support page, for English pages. */
const appleDictationEn: ComparisonSource = {
  id: "apple-dictation-en",
  title: "Dictate messages and documents on Mac",
  publisher: "Apple Support",
  url: "https://support.apple.com/guide/mac-help/mh40584/mac",
};

const wispr: ComparisonPageData = {
  slug: "wispr-flow-alternative",
  path: "/vergleich/wispr-flow-alternative",
  eyebrow: "Wispr-Flow-Alternative",
  title: "Witness oder Wispr Flow? Lokalität ist die eigentliche Entscheidung",
  metaTitle: "Wispr-Flow-Alternative für den Mac | Witness",
  description:
    "Wispr Flow und Witness im Vergleich: Verarbeitung, Sprachen, Prüfung, Konto und Preis, mit offiziellen Quellen. Stand Oktober 2026.",
  directAnswer: {
    text: "Die kurze Antwort: Witness ist die passende Wispr-Flow-Alternative, wenn Diktatinhalte den Mac nicht verlassen sollen. Wispr Flow beschreibt sich in der eigenen Dokumentation als Cloud-Dienst, der Kundendaten in den USA verarbeitet und speichert; der Satz, den du diktierst, geht zur Erkennung dorthin. Dazu verlangt die Einrichtung ein Konto, und Pro kostet $144 im Jahr. Witness rechnet auf dem eigenen Apple-Silicon-Mac, kommt ohne Produktkonto aus und kostet €99 einmal. Flow deckt dafür Windows, iPhone und Android mit ab.",
    sources: ["wispr-security", "wispr-languages", "local-product"],
  },
  table: {
    caption: "Die wichtigsten Unterschiede auf einen Blick",
    headers: ["Kriterium", "Witness", "Wispr Flow"],
    rows: [
      ["Inhaltsverarbeitung", "Lokal auf Apple Silicon", "Cloud-SaaS; Verarbeitung und Speicherung in den USA"],
      ["Plattformen", "macOS 14.4+, Apple Silicon", "macOS, Windows, iOS und Android"],
      ["Sprachwahl", "Angekreuzte Sprachen, eine je Diktat; vier end-to-end gemessen", "100+ Sprachen; Erkennung zu Sitzungsbeginn, eine je Segment"],
      ["Prüfung riskanter Stellen", "Vor Einfügung vorgesehen", "Nicht öffentlich dokumentiert"],
      ["Konto", "Kein Produktkonto vorgesehen", "Anmeldung erforderlich"],
      ["Preis", "€99 lebenslang oder €49/Jahr", "Free; Pro $15/Monat oder $12/Monat bei jährlicher Zahlung ($144/Jahr)"],
    ],
  },
  sections: [
    {
      title: "Was „lokal“ und „Cloud“ hier konkret bedeuten",
      paragraphs: [
        {
          text: "Wispr Flow beschreibt sein Produkt selbst als vollständig cloudbasierte, mandantenfähige SaaS-Lösung ohne On-Premise-Variante. Laut Security FAQ liegen Infrastruktur, Datenverarbeitung und Speicherung in den USA; für Übermittlungen aus EU und Vereinigtem Königreich nennt der Anbieter Standardvertragsklauseln und einen Auftragsverarbeitungsvertrag. Das ist eine dokumentierte Architekturentscheidung, kein pauschales Sicherheitsurteil.",
          sources: ["wispr-security"],
        },
        {
          text: "Witness verfolgt den Gegenentwurf: Audio, Transkript, Wörterbuch und Inhalte der Ziel-App werden auf dem Mac verarbeitet. Audio bleibt standardmäßig nur für das aktuelle Diktat und eine mögliche Prüfung im Arbeitsspeicher. Netzwerkzugriffe für Aktivierung, Lizenz, Zahlung und Updates sind davon getrennt.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "Auto-Erkennung oder selbst gewählte Sprachen",
      paragraphs: [
        {
          text: "Flow dokumentiert mehr als 100 unterstützte Sprachen und erkennt die Sprache am Anfang einer Diktatsitzung. Die offizielle Hilfeseite hält fest, dass ein Wechsel mitten im Satz dazu führen kann, dass das gesamte Segment in nur einer Sprache transkribiert wird. Wer viele Sprachen nutzt und Geräte wechselt, bekommt damit eine breite Abdeckung.",
          sources: ["wispr-languages"],
        },
        {
          text: "Auch Witness entscheidet sich pro Aufnahme für eine Sprache; gemischte Sätze kommen bei beiden Produkten gemischt heraus, und wir führen das deshalb nicht als Unterschied. Der Unterschied liegt darin, woher diese eine Sprache kommt und was danach passiert. Witness kennt dieselbe Größenordnung von 100 Sprachen, überlässt die Wahl aber dir: Du kreuzt an, welche du sprichst, und entschieden wird nur noch zwischen diesen. Wörter, die nach einer anderen deiner Sprachen aussehen, stehen vor dem Einfügen in der Prüfzeile. Für Deutsch, Englisch, Russisch und Ukrainisch ist der ganze Weg gemessen, von der Erkennung über die Textaufbereitung bis zu jeder Prüfmarkierung; bei den übrigen bleiben sprachabhängig kalibrierte Markierungen aus, statt zu raten. Begriffe und Eigennamen lassen sich im lokalen Wörterbuch hinterlegen.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "Prüfen statt geglättete Unsicherheit zu übersehen",
      paragraphs: [
        {
          text: "Der besondere Fokus von Witness ist nicht eine behauptete höhere Trefferquote. Vor dem Einfügen sollen riskante Fragmente wie Zahlen, Datumsangaben, Namen, Verneinungen und Wörterbuchbegriffe markiert werden. Du kannst den Originalton des Fragments erneut hören und das Rohtranskript sehen. Für eine entsprechende risikobasierte Prüfzeile fanden wir in der öffentlichen Wispr-Flow-Dokumentation keinen Nachweis: nicht öffentlich dokumentiert.",
          sources: ["local-product", "wispr-security", "wispr-languages"],
        },
      ],
    },
    {
      title: "Konto, Preis und die praktische Wahl",
      paragraphs: [
        {
          text: "Wispr Flow setzt laut Setup-Anleitung eine Anmeldung voraus. Die Preisseite nennt Free für $0 sowie Pro für $15 pro Nutzer und Monat bei monatlicher oder $12 pro Monat bei jährlicher Zahlung ($144 pro Jahr). Für die meisten neuen Desktop-Einzelkonten dokumentiert Wispr inzwischen den Free-Tarif statt einer allgemeinen zeitlich begrenzten Pro-Testphase. Zwei getrennte Einstellungen regeln, was mit den Inhalten passiert: „Improve the model for everyone“ steuert die Nutzung für das Modelltraining, „Dictation Cloud Storage“ die Speicherung auf den Servern. Beide schalten die Verarbeitung in der Cloud nicht ab, sondern nur, was danach mit dem Text passiert.",
          sources: ["wispr-setup", "wispr-plans", "wispr-free", "wispr-privacy"],
        },
        {
          text: "Witness hat kein Produktkonto. Ein Lizenzschlüssel kommt per E-Mail; €99 als Einmalkauf oder €49 pro Jahr für zwei Macs. Wähle Wispr Flow für geräteübergreifenden Komfort auf Mac, Windows, iPhone und Android. Wähle Witness, wenn du einen Apple-Silicon-Mac nutzt, Inhaltsuploads vermeiden und erkannte Risikostellen selbst freigeben willst.",
          sources: ["local-product"],
        },
      ],
    },
  ],
  verdict: {
    text: "Unsere Empfehlung: Wenn du auf einem Apple-Silicon-Mac arbeitest und deine Diktate Inhalte enthalten, die das Gerät nicht verlassen sollen, nimm Witness. Einmal €99 statt $144 jedes Jahr, kein Konto, und die auffälligen Stellen stehen vor dem Einfügen zur Freigabe. Wispr Flow bleibt die Wahl, wenn du dieselbe Oberfläche auf Windows, iPhone und Android brauchst. Einen Genauigkeitsvergleich behaupten wir nicht: Es gibt keinen veröffentlichten gemeinsamen Benchmark, der die beiden belastbar ordnet.",
    sources: ["wispr-security", "local-product"],
  },
  faqs: [
    {
      question: "Ist Wispr Flow eine Offline-Diktier-App?",
      answer: "Nein. Wispr Flow beschreibt sich offiziell als vollständig cloudbasierte SaaS-Lösung und nennt eine Internetverbindung als Voraussetzung.",
    },
    {
      question: "Wie gehen Witness und Wispr Flow mit Deutsch und Englisch in einem Satz um?",
      answer: "Beide unterstützen Deutsch und Englisch in einem Satz, und beide entscheiden sich pro Aufnahme für eine Sprache, und das ist kein Unterschied zwischen ihnen. Der Unterschied bei Witness: Du kreuzt vorher an, welche Sprachen überhaupt in Frage kommen, und ein Wort in einer Sprache, die du nicht angekreuzt hast, wird vor dem Einfügen markiert.",
    },
    {
      question: "Ist Witness bereits allgemein verfügbar?",
      answer: "Ja. Witness ist signiert, von Apple notarisiert und über /download erhältlich. Preis und Funktionen auf dieser Seite beschreiben die dort angebotene Version.",
    },
  ],
  sources: [localSource, ...wisprSources],
};

const superwhisper: ComparisonPageData = {
  slug: "superwhisper-alternative",
  path: "/vergleich/superwhisper-alternative",
  eyebrow: "Superwhisper-Alternative",
  title: "Witness oder Superwhisper? Zwei lokale Mac-Ansätze im Vergleich",
  metaTitle: "Superwhisper-Alternative für Mac | Witness",
  description:
    "Superwhisper und Witness im Quellenvergleich: lokale und Cloud-Modelle, Sprachen, Verifikation, Plattformen und Preise. Stand Oktober 2026.",
  directAnswer: {
    text: "Die kurze Antwort: Superwhisper kann lokal arbeiten, und der kostenlose Tarif erlaubt nach Anbieterangabe unbegrenztes Diktat mit lokalen Whisper-Modellen. Witness ist dann die passendere Wahl, wenn nicht die Modellauswahl deine Frage ist, sondern was mit einem unsicher erkannten Wort passiert: Zahlen, Daten, Eigennamen und Verneinungen werden vor dem Einfügen markiert, und das unveränderte Rohtranskript bleibt per Hotkey sichtbar. Superwhisper bietet dafür mehr Modelle, mehr Plattformen und Dateitranskription.",
    sources: ["super-models", "super-download", "local-product"],
  },
  table: {
    caption: "Witness und Superwhisper im direkten Vergleich",
    headers: ["Kriterium", "Witness", "Superwhisper"],
    rows: [
      ["Verarbeitung", "Inhaltsverarbeitung lokal", "Vollständig lokal konfigurierbar; optionale Cloud-Modelle"],
      ["Plattformen", "Apple Silicon, macOS 14.4+", "macOS 13.3+, Windows 10+, iOS 18+, Android"],
      ["Sprachen", "100 Sprachen zum Ankreuzen; DE, EN, RU, UK gemessen", "Lokale Whisper-Modelle für 100+ Sprachen"],
      ["Prüfung riskanter Stellen", "Vor Einfügung vorgesehen", "Nicht öffentlich dokumentiert"],
      ["Modellauswahl", "Bewusst kuratiert", "Lokale und Cloud-Sprach- sowie Textmodelle"],
      ["Preis", "€99 lebenslang oder €49/Jahr", "Free mit lokalen Modellen; Pro $8.49/Monat, $84.99/Jahr oder $249.99 lebenslang"],
    ],
  },
  sections: [
    {
      title: "Lokal ist bei Superwhisper eine Konfiguration",
      paragraphs: [
        {
          text: "Superwhisper dokumentiert eine vollständig lokale Konfiguration auf macOS: Ein lokales Sprachmodell plus lokales Textmodell kann Audio und Text auf dem Gerät halten. Ein reiner Transkriptionsmodus ist ebenfalls beschrieben. Gleichzeitig bietet das Produkt Cloud-Sprach- und Cloud-Textmodelle an. Deshalb sollte ein Vergleich nicht pauschal behaupten, Superwhisper sende Inhalte immer in die Cloud; entscheidend ist die gewählte Konfiguration.",
          sources: ["super-security", "super-models"],
        },
        {
          text: "Witness macht diese Grenze zur Produktvorgabe. Audio, Transkript, Wörterbuch und Ziel-App-Inhalte sollen lokal bleiben; das Audio wird nach Diktat und möglicher Prüfung aus dem Arbeitsspeicher verworfen. Aktivierung, Lizenzprüfung, Checkout und Updates können Netzwerkzugriffe nutzen, jedoch keine Inhaltsdaten.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "Modellvielfalt gegen einen engeren Arbeitsablauf",
      paragraphs: [
        {
          text: "Superwhisper stellt viele lokale und Cloud-Modelle bereit. Die Modellseite nennt lokale Whisper-Varianten mit Unterstützung für mehr als 100 Sprachen sowie Offline-Nutzung. Das ist attraktiv, wenn du Hardware, Qualität, Geschwindigkeit und Anbieter selbst austarieren möchtest. Eine allgemeine Aussage, welches Modell genauer ist, lässt sich ohne denselben veröffentlichten Testkorpus nicht seriös treffen.",
          sources: ["super-models"],
        },
        {
          text: "Witness reduziert die Modellauswahl zugunsten eines festen Ablaufs: Hotkey, sprechen, nur auffällige Fragmente prüfen, bestätigen, am Cursor einfügen. Bei den Sprachen bleibt die Wahl bei dir: Du kreuzt aus 100 an, welche vorkommen, statt sie bei jedem Segment frei erraten zu lassen. Deutsch, Englisch, Russisch und Ukrainisch sind dabei end-to-end gemessen.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "Der Unterschied liegt nach der Transkription",
      paragraphs: [
        {
          text: "Witness soll Zahlen, Datumsangaben, Eigennamen, Verneinungen und Wörterbuchbegriffe vor der Einfügung markieren. Zu jedem markierten Fragment sind Rohtranskript und kurzer Originalton vorgesehen. Das verspricht keine fehlerfreie Erkennung; es macht bestimmte Fehlerklassen sichtbar. Eine vergleichbare, risikobasierte Vorabprüfung ist in den von uns geprüften öffentlichen Superwhisper-Dokumenten nicht öffentlich dokumentiert.",
          sources: ["local-product", "super-security", "super-models"],
        },
        {
          text: "Superwhisper dokumentiert automatische Spracherkennung und mögliche Fehlzuordnungen. Vokabular-Hinweise können helfen; kompatible Modelle können während einer Sitzung Sprachen wechseln. Eine vorab angekreuzte Sprachauswahl, die den erwarteten Raum bewusst begrenzt, ist dort nicht öffentlich dokumentiert.",
          sources: ["super-languages"],
        },
      ],
    },
    {
      title: "Geräte und Kosten",
      paragraphs: [
        {
          text: "Superwhisper läuft laut Downloadseite auf macOS ab 13.3, Windows ab 10 und iOS ab 18. Die Pro-Dokumentation nennt $8.49 monatlich, $84.99 jährlich oder $249.99 lebenslang. Eine persönliche Lizenz gilt auf beliebig vielen Mac- und Windows-Rechnern sowie auf eigenen iPhones und iPads.",
          sources: ["super-download", "super-pro"],
        },
        {
          text: "Witness zielt ausschließlich auf Apple Silicon mit macOS 14.4 oder neuer. Vorgesehen sind zwei Macs pro Lizenz, €99 lebenslang oder €49 jährlich. Superwhisper bietet damit mehr Gerätefreiheit und Konfigurationsbreite. Witness setzt dagegen auf weniger Optionen, eine feste lokale Datenschutzgrenze und die explizite Prüfung vor dem Einfügen.",
          sources: ["local-product"],
        },
      ],
    },
  ],
  verdict: {
    text: "Fazit: Superwhisper ist kein bloßer Cloud-Gegner, sondern kann auf dem Mac vollständig lokal laufen. Seine Stärke ist Auswahl. Witness differenziert sich nicht durch erfundene Genauigkeitswerte, sondern durch den engeren zweisprachigen Workflow und die vorgesehene Verifikation riskanter Fragmente.",
    sources: ["super-security", "local-product"],
  },
  faqs: [
    {
      question: "Kann Superwhisper vollständig offline laufen?",
      answer: "Ja. Auf macOS dokumentiert Superwhisper eine vollständig lokale Konfiguration mit lokalem Sprach- und lokalem Textmodell.",
    },
    {
      question: "Warum dann Witness wählen?",
      answer: "Witness konzentriert sich auf eine selbst angekreuzte Sprachauswahl und eine Prüfung bestimmter riskanter Fragmente vor der Einfügung, statt möglichst viele Modelle anzubieten.",
    },
    {
      question: "Welche App ist genauer?",
      answer: "Dafür gibt es keinen gemeinsamen, offiziell veröffentlichten Vergleichstest. Eine belastbare allgemeine Rangfolge wäre daher spekulativ.",
    },
  ],
  sources: [localSource, ...superwhisperSources],
};

const sprecho: ComparisonPageData = {
  slug: "sprecho-alternative",
  path: "/vergleich/sprecho-alternative",
  eyebrow: "Sprecho-Alternative",
  title: "Witness oder Sprecho? Lokaler Mac-Workflow gegen EU-Cloud",
  metaTitle: "Sprecho-Alternative für den Mac | Witness",
  description:
    "Sprecho und Witness sachlich verglichen: EU-Cloud, lokale Verarbeitung, Plattformen, Sprachen, Prüfung, AVV und Preis. Stand Oktober 2026.",
  directAnswer: {
    text: "Die kurze Antwort: Wenn in deinen Diktaten Mandantennamen, Beträge oder Fristen vorkommen, ist Witness die bessere Sprecho-Alternative. Sprecho verarbeitet Sprache in der Cloud und speichert Sprachdaten nach eigener Angabe ausschließlich in Deutschland, ohne Übertragung in die USA. Das ist ein sauber dokumentierter Weg, aber es bleibt ein Weg nach draußen: Der Satz, den du gerade gesprochen hast, liegt für die Dauer der Verarbeitung auf einem fremden Server. Bei Witness verlässt er den Mac nicht, und auffällige Zahlen, Namen und Verneinungen stehen vor dem Einfügen zur Freigabe. Sprecho deckt dafür zusätzlich Windows, Linux, iOS und Android ab.",
    sources: ["sprecho-product", "sprecho-dpa", "local-product"],
  },
  table: {
    caption: "Die dokumentierten Unterschiede",
    headers: ["Kriterium", "Witness", "Sprecho"],
    rows: [
      ["Inhaltsverarbeitung", "Lokal auf dem Mac", "Cloud; Sprach- und Textverarbeitung auf Servern in Deutschland"],
      ["Plattformen", "Apple Silicon, macOS 14.4+", "Mac, Windows, Linux, iOS und Android"],
      ["Sprachen", "100 Sprachen zum Ankreuzen; DE, EN, RU, UK gemessen", "100+ Sprachen mit Auto-Erkennung"],
      ["Prüfung riskanter Stellen", "Vor Einfügung vorgesehen", "Nicht öffentlich dokumentiert"],
      ["Vertragliche Ebene", "Keine Inhaltsverarbeitung im Auftrag vorgesehen", "AVV wird angeboten"],
      ["Preis", "€99 lebenslang oder €49/Jahr", "Free mit 2 000 Wörtern/Woche; Pro €12,99/Monat oder €10,99/Monat bei Jahreszahlung (€131,88)"],
    ],
  },
  sections: [
    {
      title: "EU-Cloud ist nicht dasselbe wie lokale Verarbeitung",
      paragraphs: [
        {
          text: "Sprecho beschreibt sich als DSGVO-orientierte Cloud-Anwendung mit Hosting in Deutschland beziehungsweise der EU. Der offizielle Auftragsverarbeitungsvertrag erklärt den Ablauf genauer: Audio wird vom Endgerät an Server übertragen, dort transkribiert und formatiert; auch Speicherung und Synchronisation von Nutzerdaten gehören zum Leistungsumfang. Das Vertragsdokument nennt für Sprach- und Transkriptverarbeitung Serverstandorte in Deutschland.",
          sources: ["sprecho-product", "sprecho-dpa"],
        },
        {
          text: "Das kann für Organisationen ein sinnvoll dokumentierbarer Cloud-Weg sein. Es ist aber technisch etwas anderes als Witness: Dort sollen Audio, Transkript, Wörterbuch und Ziel-App-Inhalte den Mac nicht verlassen. Das Audio bleibt standardmäßig nur für Diktat und mögliche Prüfung im Arbeitsspeicher.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "AVV und Datenschutz richtig einordnen",
      paragraphs: [
        {
          text: "Sprecho stellt einen Auftragsverarbeitungsvertrag bereit. Das ist keine Schwäche, sondern die passende vertragliche Ebene, wenn ein Anbieter personenbezogene Inhalte im Auftrag verarbeitet. Ob und wie ein Unternehmen diesen Vertrag abschließen und seine Nutzung dokumentieren muss, hängt vom konkreten Einsatz ab. Diese Seite gibt keine Rechtsberatung und erklärt keine Lösung pauschal für rechtskonform.",
          sources: ["sprecho-dpa"],
        },
        {
          text: "Witness soll keine Diktatinhalte im Auftrag empfangen. Deshalb ist für diese Inhaltsverarbeitung kein AVV mit Witness vorgesehen. Lizenzierung, Zahlung und Updates bleiben getrennte Verarbeitungsvorgänge und müssen transparent beschrieben werden. Auch lokale Software entbindet ein Unternehmen nicht von eigenen Pflichten beim Umgang mit personenbezogenen Daten.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "Breite Plattformabdeckung oder fokussierter Mac-Ablauf",
      paragraphs: [
        {
          text: "Sprecho nennt Apps für Mac, Windows, Linux, iOS und Android. Persönliches Wörterbuch, Snippets, Stile sowie Notizen und Verlauf sind dokumentierte Funktionen. Die Produkt- und Preisseiten nennen mehr als 100 Sprachen mit automatischer Erkennung. Für Teams mit gemischten Geräten ist diese Breite ein klarer praktischer Vorteil.",
          sources: ["sprecho-product", "sprecho-pricing"],
        },
        {
          text: "Witness läuft nur auf Apple Silicon mit macOS 14.4 oder neuer. Die Sprachen kreuzt du selbst an, 100 stehen zur Wahl, und die angekreuzten grenzen den erwarteten Raum bewusst ein, statt ihn automatisch erkennen zu lassen. Deutsch, Englisch, Russisch und Ukrainisch sind end-to-end gemessen. Namen, Abkürzungen und Fachbegriffe landen in einem lokalen Wörterbuch; der fertige Text wird am Cursor eingesetzt.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "Was vor der Einfügung sichtbar wird",
      paragraphs: [
        {
          text: "Witness soll bestimmte Risikoklassen vor dem Einfügen markieren: Zahlen, Daten, Eigennamen, Verneinungen und Begriffe aus dem eigenen Wörterbuch. Der Nutzer kann das kurze Audiofragment erneut anhören und das unveränderte Rohtranskript ansehen. Das ist keine Behauptung perfekter Erkennung, sondern eine Kontrollstufe für mögliche Folgen eines Fehlers.",
          sources: ["local-product"],
        },
        {
          text: "Eine entsprechende automatische Unsicherheits- oder Risikomarkierung fanden wir auf den geprüften öffentlichen Sprecho-Seiten nicht: nicht öffentlich dokumentiert. Sprecho dokumentiert stattdessen AI-Formatierung, Grammatikkorrektur, automatische Zeichensetzung und Entfernung von Füllwörtern. Wer solche Cloud-gestützte Glättung auf mehreren Plattformen will, bekommt einen anderen Schwerpunkt.",
          sources: ["sprecho-product", "sprecho-pricing"],
        },
      ],
    },
    {
      title: "Preis und Entscheidung",
      paragraphs: [
        {
          text: "Sprecho nennt auf der offiziellen Preisseite einen dauerhaft kostenlosen Tarif mit 2 000 Wörtern pro Woche, Rücksetzung montags um 00:00 UTC, und Pro für €12,99 pro Monat oder €10,99 pro Monat bei Jahreszahlung, abgerechnet mit €131,88 inklusive Mehrwertsteuer. Dazu eine 14-tägige Testphase ohne Kreditkarte. Witness kostet €99 als Einmalkauf oder €49 jährlich für zwei Macs. Nach vier Jahren Pro hast du €527 gezahlt und die Verarbeitung liegt weiterhin auf fremden Servern; bei Witness bleibt es bei den €99, und der Mac rechnet selbst. 13 Tage lassen sich kostenlos testen, ohne Konto.",
          sources: ["sprecho-pricing", "local-product"],
        },
      ],
    },
  ],
  verdict: {
    text: "Unsere Empfehlung: Wenn du auf einem Apple-Silicon-Mac arbeitest und regelmäßig Namen, Beträge oder Fristen diktierst, nimm Witness. Du zahlst €99 einmal statt €131,88 jedes Jahr, die Inhalte bleiben auf dem Gerät, und du siehst vor dem Einfügen, wo die Erkennung unsicher war. Sprecho bleibt sinnvoll, wenn du dieselbe Oberfläche zusätzlich auf Windows, Linux, iOS und Android brauchst oder für die Inhaltsverarbeitung einen Auftragsverarbeitungsvertrag vorlegen musst.",
    sources: ["sprecho-dpa", "local-product"],
  },
  faqs: [
    {
      question: "Verarbeitet Sprecho Diktate ausschließlich auf dem Gerät?",
      answer: "Nein. Der offizielle AVV beschreibt die Übertragung des Audios an Server und die Verarbeitung von Sprache und Transkripten in Deutschland.",
    },
    {
      question: "Ist eine EU-Cloud automatisch DSGVO-konform?",
      answer: "Nein, nicht automatisch. Standort und AVV sind relevante Bausteine; die rechtliche Bewertung hängt zusätzlich vom konkreten Zweck, den Daten und der Organisation ab.",
    },
    {
      question: "Welche Sprecho-Alternative läuft ohne Inhaltsupload?",
      answer: "Witness ist dafür konzipiert, Audio und Text auf dem Apple-Silicon-Mac zu verarbeiten.",
    },
  ],
  sources: [localSource, ...sprechoSources],
};

const voiceInk: ComparisonPageData = {
  slug: "voiceink-vs-witness",
  path: "/vergleich/voiceink-vs-witness",
  eyebrow: "VoiceInk vs. Witness",
  title: "VoiceInk oder Witness? Zwei lokale Mac-Apps mit anderem Fokus",
  metaTitle: "VoiceInk vs. Witness | Vergleich 2026",
  description:
    "VoiceInk und Witness sachlich verglichen: Open Source, lokale Modelle, Cloud-Optionen, Sprachauswahl, Verifikation, Lizenzen und Preise.",
  directAnswer: {
    text: "Die kurze Antwort: VoiceInk und Witness verarbeiten beide lokal auf dem Mac, der Unterschied liegt danach. Witness markiert Zahlen, Daten, Eigennamen und Verneinungen vor dem Einfügen und zeigt das unveränderte Rohtranskript, damit ein falsch erkannter Betrag nicht unbemerkt in ein Dokument läuft. Wenn du täglich in fremde Dokumente diktierst, ist das der Unterschied, der zählt. VoiceInk ist dafür günstiger, ab $25 einmalig, und sein Quellcode ist öffentlich.",
    sources: ["voiceink-product", "voiceink-github", "voiceink-models", "local-product"],
  },
  table: {
    caption: "VoiceInk und Witness auf einen Blick",
    headers: ["Kriterium", "Witness", "VoiceInk"],
    rows: [
      ["Produktstatus", "Verfügbar", "Verfügbar; Quellcode öffentlich"],
      ["Verarbeitung", "Inhalte lokal", "Lokale Modelle standardmäßig; optionale Cloud-Textverbesserung"],
      ["Sprachen", "100 Sprachen zum Ankreuzen; DE, EN, RU, UK gemessen", "Abhängig vom gewählten Sprachmodell"],
      ["Prüfung riskanter Stellen", "Vor Einfügung vorgesehen", "Nicht öffentlich dokumentiert"],
      ["Lizenz", "Kommerzielle App", "GPLv3-Quellcode; kommerzielle vorkompilierte App"],
      ["Preis", "€99 lebenslang oder €49/Jahr, zwei Macs", "$25 / $39 / $49 einmalig für ein / zwei / drei Macs"],
    ],
  },
  sections: [
    {
      title: "Beide können lokal arbeiten, mit einer wichtigen Option",
      paragraphs: [
        {
          text: "VoiceInk beschreibt lokale KI-Transkription als Standard. Laut Produktseite bleibt Audio auf dem Gerät. Optional kann eine Cloud Enhancement das bereits transkribierte Textresultat verarbeiten; nach Anbieterangabe wird dabei Text, nicht Audio, übertragen. Die Modelldokumentation nennt außerdem lokale Whisper-, Parakeet-, Apple-Speech-, Ollama- und eigene CLI-Optionen sowie optionale Cloud-Anbieter.",
          sources: ["voiceink-product", "voiceink-models"],
        },
        {
          text: "Witness setzt eine engere Grenze: Audio, Transkript, Wörterbuch und Ziel-App-Inhalte sollen lokal bleiben und nicht zur Sprach- oder Textverbesserung an einen Cloud-Anbieter gehen. Audio bleibt standardmäßig nur im Arbeitsspeicher. Aktivierung, Lizenzprüfung, Checkout und Updates dürfen getrennte, offengelegte Nicht-Inhaltsdaten übertragen.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "Open Source und vorkompilierte App",
      paragraphs: [
        {
          text: "Der VoiceInk-Quellcode ist unter GPLv3 öffentlich. Technisch versierte Nutzer können ihn prüfen, anpassen und selbst bauen. Die offiziellen Bedingungen beschreiben zugleich eine kommerzielle Lizenz für die vorkompilierte Distribution. Die bezahlte App umfasst laut Repository unter anderem automatische Updates und vorrangigen Support. Open Source bedeutet hier also nicht, dass jede fertige Distribution kostenlos sein muss.",
          sources: ["voiceink-github", "voiceink-terms"],
        },
        {
          text: "Witness ist ein kommerzielles Produkt, kein Open-Source-Projekt. Der Quellcode ist daher kein Kaufargument. Der Gegenwert soll in einem kuratierten, signierten Mac-Ablauf, klaren lokalen Datenschutzgrenzen, einer selbst gewählten Sprachauswahl, Verifikation und direktem Support liegen. Wer Quellcode-Audit und Selbstbau priorisiert, sollte VoiceInk ernsthaft bevorzugen.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "Modellauswahl oder vorgegebener Sprachraum",
      paragraphs: [
        {
          text: "VoiceInk bietet eine breite Modelllandschaft. Welche Sprachen, Geschwindigkeiten und Hardwareanforderungen gelten, hängt deshalb vom ausgewählten Modell ab. Einen pauschalen Genauigkeitsvergleich übernehmen wir nicht: Es gibt keinen gemeinsamen offiziellen Benchmark mit identischer Hardware, Aufnahme und Nachbearbeitung, der VoiceInk und Witness belastbar ordnet.",
          sources: ["voiceink-models"],
        },
        {
          text: "Bei Witness hängt die Sprachwahl nicht am Modell: Nutzer kreuzen vor dem Diktat an, welche der 100 Sprachen vorkommen. Ziel ist ein vorhersehbarer Raum für mehrsprachige Sätze statt einer Erkennung, die jedes Segment neu entscheidet. Für Deutsch, Englisch, Russisch und Ukrainisch ist zusätzlich der ganze Weg bis zu den Prüfmarkierungen gemessen. Namen, Abkürzungen und Fachvokabular werden pro Sprache lokal ergänzt.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "Verifikation ist nicht dasselbe wie Verlauf",
      paragraphs: [
        {
          text: "Witness soll riskante Fragmente vor der Einfügung markieren. Bei Zahlen, Datumsangaben, Eigennamen, Verneinungen und Wörterbuchbegriffen kann der Nutzer Originalton und Rohtranskript prüfen und erst danach bestätigen. Die Funktion behauptet nicht, jeden Fehler zu finden; sie soll folgenreiche Stellen sichtbar machen, bevor Text eine Mail oder ein Formular erreicht.",
          sources: ["local-product"],
        },
        {
          text: "Eine automatische Confidence- oder Risikomarkierung auf Fragmentebene ist in der geprüften öffentlichen VoiceInk-Produkt-, Modell- und Repository-Dokumentation nicht öffentlich dokumentiert. Das ist keine Aussage, dass VoiceInk keine Korrekturmöglichkeiten besitzt. Es bedeutet nur, dass wir genau diese Witness-Funktion nicht als belegten Gleichstand eintragen können.",
          sources: ["voiceink-product", "voiceink-github", "voiceink-models"],
        },
      ],
    },
    {
      title: "System und Preis",
      paragraphs: [
        {
          text: "Beide Produkte setzen Apple Silicon und macOS 14.4 oder neuer voraus. VoiceInk nennt aktuell $25 für einen Mac, $39 für zwei und $49 für drei Macs, jeweils als Einmalkauf, plus eine 14-tägige Erstattungsfrist. Witness plant €99 lebenslang oder €49 jährlich für zwei Macs. VoiceInk ist damit beim reinen Lizenzpreis deutlich günstiger.",
          sources: ["voiceink-product", "local-product"],
        },
      ],
    },
  ],
  verdict: {
    text: "Fazit: VoiceInk ist eine starke, günstigere und bereits verfügbare lokale Option mit offenem Quellcode und großer Modellwahl. Witness sollte nur gewählt werden, wenn die selbst gewählte Sprachauswahl und die vorgesehene Vorabprüfung riskanter Fragmente den höheren Preis rechtfertigen.",
    sources: ["voiceink-product", "voiceink-github", "local-product"],
  },
  faqs: [
    {
      question: "Ist VoiceInk Open Source?",
      answer: "Ja. Der Quellcode steht unter GPLv3; daneben verkauft der Anbieter eine kommerzielle vorkompilierte App mit zusätzlichen Distributionsleistungen.",
    },
    {
      question: "Sendet VoiceInk Audio in die Cloud?",
      answer: "Nach offizieller Angabe bleibt Audio bei lokaler Transkription auf dem Gerät. Die optionale Cloud Enhancement überträgt den transkribierten Text, nicht das Audio.",
    },
    {
      question: "Ist Witness besser als VoiceInk?",
      answer: "Nicht allgemein. VoiceInk gewinnt bei Preis, Verfügbarkeit, Quelloffenheit und Modellwahl; Witness fokussiert die selbst angekreuzte Sprachauswahl und die Risikoprüfung vor dem Einfügen.",
    },
  ],
  sources: [localSource, ...voiceInkSources],
};

const macwhisper: ComparisonPageData = {
  slug: "macwhisper-alternative",
  path: "/vergleich/macwhisper-alternative",
  eyebrow: "MacWhisper-Alternative",
  title: "MacWhisper-Alternative? Es kommt darauf an, ob du Dateien transkribierst oder diktierst",
  metaTitle: "MacWhisper Alternative für den Mac | Vergleich 2026",
  description:
    "MacWhisper und Witness sachlich verglichen: Dateitranskription gegen Diktat, lokale Modelle, optionale Cloud-Anbieter, Grammatikverbesserung, Sprachen, Geräte und Preise.",
  updatedIso: "2026-10-01",
  updatedLabel: "1. Oktober 2026",
  directAnswer: {
    text: "Die kurze Antwort: MacWhisper und Witness lösen zwei verschiedene Aufgaben. MacWhisper ist in erster Linie eine Transkriptionsumgebung für Dateien, Meetings und Untertitel und bietet zusätzlich systemweites Diktat; es ist verfügbar, kostet €64 einmalig neben einer kostenlosen Version und erlaubt als persönliche Lizenz als Richtwert drei Geräte. Witness macht ausschließlich Diktat in andere Apps, und zwar mit einer Kontrollstufe davor: Zahlen, Namen, Daten und Verneinungen werden markiert, bevor der Text in dein Dokument geht. Wenn du den ganzen Tag in fremde Apps diktierst, ist das der Unterschied, der zählt. Für fertige Aufnahmen bleibt MacWhisper das breitere Werkzeug.",
    sources: ["macwhisper-product", "macwhisper-licensing", "local-product"],
  },
  table: {
    caption: "MacWhisper und Witness auf einen Blick",
    headers: ["Kriterium", "Witness", "MacWhisper"],
    rows: [
      ["Schwerpunkt", "Diktat in andere Apps", "Transkription von Dateien, Meetings und Untertiteln; zusätzlich systemweites Diktat"],
      ["Produktstatus", "Verfügbar", "Verfügbar"],
      ["Verarbeitung", "Inhalte lokal; keine Cloud-Option vorgesehen", "Lokale Modelle; optional Cloud-Anbieter wie OpenAI, Anthropic, xAI und Google Gemini"],
      ["Sprachen", "100 Sprachen zum Ankreuzen; DE, EN, RU, UK gemessen", "100 Sprachen laut Anbieter"],
      ["Nachbearbeitung", "Bereinigung umkehrbar; Rohtranskript per Hotkey", "Automatische Grammatikverbesserung; Diktat mit KI-Prompts"],
      ["Prüfung riskanter Stellen", "Vor Einfügung vorgesehen", "Nicht öffentlich dokumentiert"],
      ["Geräte", "Zwei Macs", "Persönliche Lizenz, Richtwert drei Geräte"],
      ["Preis", "€99 lebenslang oder €49/Jahr", "Kostenlose Version; Pro €64 einmalig, lebenslange Updates"],
    ],
  },
  sections: [
    {
      title: "Zwei Werkzeuge, ein gemeinsames Wort",
      paragraphs: [
        {
          text: "MacWhisper beschreibt als Kern das Transkribieren fertiger Aufnahmen: Dateien per Drag-and-drop, Interviews, Sprachmemos, Vorlesungen und Untertitel, dazu Mitschnitte von Zoom-, Teams-, Webex-, Skype- und Discord-Gesprächen, YouTube- und Podcast-Transkription, Stapelverarbeitung, Sprechererkennung, Entfernen von Füllwörtern, Zusammenfassungen und Export nach .srt, .vtt, .txt, .md, .pdf, .html und .docx. Systemweites Diktat steht daneben als weitere Funktion.",
          sources: ["macwhisper-product"],
        },
        {
          text: "Witness kann nichts davon und soll es auch nicht können. Es gibt keine Dateitranskription, keine Untertitel, keine Sprechererkennung und keinen Meeting-Mitschnitt. Das Produkt macht eine einzige Sache: Hotkey drücken, sprechen, Text erscheint an der Cursorposition in der App, in der du gerade bist. Diese Beschränkung ist der Grund, warum die Prüfung vor dem Einfügen überhaupt möglich ist: Es gibt genau einen Moment, in dem der Text entsteht, und an dem steht die Kontrolle.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "Automatische Grammatikverbesserung: hier biegen die beiden auseinander",
      paragraphs: [
        {
          text: "MacWhisper nennt für das Diktat unter anderem automatische Grammatikverbesserung und das Diktieren mit KI-Prompts. Für viele Texte ist genau das erwünscht: gesprochene Sätze werden geglättet, bevor sie im Dokument landen.",
          sources: ["macwhisper-product"],
        },
        {
          text: "Witness setzt an dieser Stelle bewusst anders an. Die Bereinigung bleibt konservativ und umkehrbar: Ein Hotkey zeigt das Rohtranskript, damit nachträglich sichtbar bleibt, was das Programm verändert hat. Zusätzlich sollen Zahlen, Datumsangaben, Eigennamen, Verneinungen und Wörterbuchbegriffe vor der Einfügung markiert werden, sodass Originalton und Rohtext daneben zur Kontrolle stehen. Der Gedanke dahinter: Je glatter ein Text formuliert ist, desto schwerer fällt auf, dass eine Summe oder ein Name unterwegs ein anderer geworden ist.",
          sources: ["local-product"],
        },
        {
          text: "Eine automatische Confidence- oder Risikomarkierung auf Fragmentebene ist in der geprüften öffentlichen MacWhisper-Produkt- und Support-Dokumentation nicht öffentlich dokumentiert. Das ist keine Aussage darüber, wie gut MacWhisper erkennt, und kein Genauigkeitsvergleich. Es bedeutet nur, dass wir diese eine Funktion nicht als belegten Gleichstand eintragen können.",
          sources: ["macwhisper-product", "macwhisper-docs"],
        },
      ],
    },
    {
      title: "Lokal ist bei beiden der Standard, der Unterschied liegt in den Optionen",
      paragraphs: [
        {
          text: "MacWhisper transkribiert nach eigener Angabe mit lokalen Modellen und wirbt damit, dass sensible Inhalte lokal verarbeitet werden, ohne den Mac zu verlassen. Daneben lassen sich Cloud-Anbieter wie OpenAI, Anthropic, xAI und Google Gemini einbinden. Ob im konkreten Betrieb Inhalte das Gerät verlassen, hängt damit an der Konfiguration und nicht am Produkt an sich.",
          sources: ["macwhisper-product"],
        },
        {
          text: "Witness sieht diesen Schalter gar nicht erst vor: Audio, Transkript, Wörterbuch und Inhalte der Ziel-App sollen lokal bleiben, Audio standardmäßig nur im Arbeitsspeicher. Getrennt davon dürfen Aktivierung, Lizenzprüfung, Checkout und Updates offengelegte Nicht-Inhaltsdaten übertragen. Das ist weniger flexibel, dafür gibt es weniger zu prüfen und weniger falsch einzustellen.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "Hundert Sprachen, und vier davon gemessen",
      paragraphs: [
        {
          text: "MacWhisper nennt Unterstützung für 100 Sprachen. Eine gemessene Aufbereitung oder Prüfung pro Sprache ist dabei nicht öffentlich dokumentiert.",
          sources: ["macwhisper-product"],
        },
        {
          text: "Witness kennt dieselben 100 Sprachen und lässt dich vor dem Diktat ankreuzen, welche davon vorkommen. Vier sind end-to-end gemessen: Deutsch, Englisch, Russisch und Ukrainisch bekommen Erkennung, Textaufbereitung und jede Prüfmarkierung; bei den übrigen bleiben sprachabhängig kalibrierte Markierungen aus, statt zu raten. Dazu kommt ein lokales Wörterbuch für Namen und Fachbegriffe, das jedes Mal dieselbe Schreibweise einsetzt. Einen Genauigkeitsvergleich behaupten wir dabei nicht: Es gibt keinen gemeinsamen offiziellen Benchmark mit identischer Hardware, Aufnahme und Nachbearbeitung, der beide Apps belastbar ordnet.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "Preis, Geräte und Hardware",
      paragraphs: [
        {
          text: "MacWhisper nennt eine dauerhaft kostenlose Version und MacWhisper Pro für €64 als Einmalkauf inklusive lebenslanger Updates. Die persönliche Lizenz ist laut Support für die eigenen Geräte gedacht, mit einem Richtwert von drei. Witness kostet €99 lebenslang oder €49 jährlich für zwei Macs, beim Einmalkauf also €35 mehr. Dafür bekommst du die eine Funktion, um die es auf dieser Seite geht: Zahlen, Daten, Eigennamen und Verneinungen werden vor dem Einfügen markiert, statt geglättet in den Text zu laufen. Ein einziger falsch eingefügter Betrag in einem Angebot kostet mehr als diese Differenz. 13 Tage lassen sich kostenlos testen, ohne Konto.",
          sources: ["macwhisper-product", "macwhisper-licensing", "local-product"],
        },
        {
          text: "Ein praktischer Hinweis aus der MacWhisper-Dokumentation, der beide Produkte betrifft: Für die Modelle Medium und Large sollte der Mac mehr als 8 GB RAM haben, und auf älteren Intel-Macs kann die Leistung schlecht ausfallen. Lokale Spracherkennung ist rechenintensiv, unabhängig davon, welche App sie ausführt. Witness setzt Apple Silicon voraus.",
          sources: ["macwhisper-docs", "local-product"],
        },
      ],
    },
  ],
  verdict: {
    text: "Unsere Empfehlung: MacWhisper bleibt das Werkzeug für fertige Aufnahmen, also Dateien, Meetings und Untertitel. Wenn dein Tag dagegen aus Diktat in fremde Apps besteht, du dabei Deutsch und Englisch mischst und willst, dass Zahlen und Namen vor dem Einfügen markiert statt geglättet werden, ist Witness die passende Wahl.",
    sources: ["macwhisper-product", "local-product"],
  },
  faqs: [
    {
      question: "Ist MacWhisper kostenlos?",
      answer: "Es gibt eine dauerhaft kostenlose Version. MacWhisper Pro kostet laut Produktseite €64 als Einmalkauf und schließt lebenslange Updates ein.",
    },
    {
      question: "Transkribiert MacWhisper lokal oder in der Cloud?",
      answer: "Nach Anbieterangabe wird mit lokalen Modellen auf dem Mac transkribiert. Zusätzlich lassen sich Cloud-Anbieter wie OpenAI, Anthropic, xAI und Google Gemini einbinden; dann gilt ein anderer Datenweg.",
    },
    {
      question: "Auf wie vielen Macs darf ich MacWhisper nutzen?",
      answer: "Die persönliche Lizenz ist laut Support für die eigenen Geräte gedacht, mit einem Richtwert von drei. Witness plant zwei Macs pro Lizenz.",
    },
    {
      question: "Ist Witness ein vollwertiger MacWhisper-Ersatz?",
      answer: "Nein. Witness transkribiert keine Dateien, erstellt keine Untertitel, erkennt keine Sprecher und zeichnet keine Meetings auf. Es ersetzt MacWhisper nur für den Teil, der Diktat in andere Apps heißt.",
    },
  ],
  sources: [localSource, ...macwhisperSources],
};

const dsgvo: ComparisonPageData = {
  slug: "diktiersoftware-mac-dsgvo",
  path: "/vergleich/diktiersoftware-mac-dsgvo",
  eyebrow: "Diktiersoftware für Mac & DSGVO",
  title: "Welche Diktier-App für den Mac passt zu sensiblen Inhalten?",
  metaTitle: "Diktiersoftware für Mac & DSGVO | Vergleich 2026",
  description:
    "Mac-Diktiersoftware nach nachvollziehbaren Datenschutzkriterien vergleichen: lokal, EU-Cloud, US-Cloud, AVV, Konten und Inhaltsprüfung. Stand Oktober 2026.",
  directAnswer: {
    text: "Die kurze Antwort: Wenn deine Diktate personenbezogene Daten enthalten, ist die entscheidende Frage nicht, wer den stärksten DSGVO-Claim macht, sondern wie viele Inhalte das Gerät überhaupt verlassen. Witness überträgt Diktatinhalte nicht: Audio, Transkript, Wörterbuch und Inhalte der Ziel-App bleiben auf dem Mac, und es gibt keinen Cloud-Schalter, der das versehentlich ändert. VoiceInk und Superwhisper können ebenfalls lokal arbeiten, bieten aber optionale Cloud-Modelle an, sodass der tatsächliche Datenweg dort an der Konfiguration hängt. Sprecho verarbeitet Audio und Transkripte in einer deutschen beziehungsweise EU-Cloud und bietet dafür einen AVV. Wispr Flow beschreibt sich in der eigenen Dokumentation als Cloud-Dienst, der Kundendaten in den USA verarbeitet und speichert. Diese Seite ist keine Rechtsberatung: Ob ein konkreter Einsatz DSGVO-konform ist, hängt zusätzlich von Zweck, Daten und Organisation ab.",
    sources: ["local-product", "voiceink-product", "super-security", "sprecho-dpa", "wispr-security", "gdpr"],
  },
  table: {
    caption: "Architektur statt pauschaler Datenschutzsiegel",
    headers: ["Lösung", "Dokumentierter Verarbeitungsweg", "Wichtige Einordnung"],
    rows: [
      ["Witness", "Diktatinhalte lokal", "Verfügbar; Risikoprüfung vor Einfügung"],
      ["VoiceInk", "Lokale Transkription; optionale Cloud-Textverbesserung", "GPLv3-Quellcode und kommerzielle App"],
      ["Superwhisper", "Vollständig lokal konfigurierbar; optionale Cloud-Modelle", "Konfiguration entscheidet"],
      ["Sprecho", "Cloud-Verarbeitung auf Servern in Deutschland", "AVV verfügbar"],
      ["Wispr Flow", "Cloud-SaaS; Verarbeitung und Speicherung in den USA", "SCC und DPA laut Anbieter"],
      ["Apple Diktierfunktion", "Je nach Geräteeinstellung lokal oder serverseitig", "Mac zeigt den Verarbeitungsmodus in den Einstellungen"],
    ],
  },
  sections: [
    {
      title: "Erste Frage: Verlässt Audio oder Text das Gerät?",
      paragraphs: [
        {
          text: "Lokale Verarbeitung reduziert einen wichtigen Datenfluss, ist aber kein vollständiges Datenschutzkonzept. Witness soll Audio und Text ausschließlich auf Apple Silicon verarbeiten. VoiceInk transkribiert nach eigener Angabe standardmäßig lokal, kann aber optional transkribierten Text zur Cloud-Verbesserung senden. Superwhisper kann mit lokalen Sprach- und Textmodellen vollständig lokal laufen; bei Cloud-Modellen gelten andere Wege.",
          sources: ["local-product", "voiceink-product", "super-security"],
        },
        {
          text: "Sprecho überträgt Audio laut AVV an Server und verarbeitet Sprache und Transkripte in Deutschland. Wispr Flow beschreibt eine Cloud-SaaS mit Verarbeitung und Speicherung in den USA. Beide Wege benötigen eine andere Prüfung als eine App ohne Inhaltsupload.",
          sources: ["sprecho-dpa", "wispr-security"],
        },
      ],
    },
    {
      title: "Zweite Frage: Wer verarbeitet wessen personenbezogene Daten?",
      paragraphs: [
        {
          text: "Die DSGVO definiert einen Auftragsverarbeiter als Stelle, die personenbezogene Daten im Auftrag eines Verantwortlichen verarbeitet. Artikel 28 verlangt für diese Konstellation einen Vertrag oder ein anderes bindendes Rechtsinstrument. Ob diese Rollen im konkreten Einsatz vorliegen, hängt von Daten, Zweck und Beziehung der Beteiligten ab; eine Produktseite kann diese Prüfung nicht ersetzen.",
          sources: ["gdpr"],
        },
        {
          text: "Sprecho bietet einen AVV an. Wispr Flow nennt DPA und Standardvertragsklauseln für internationale Übermittlungen. Bei lokaler Verarbeitung empfängt der App-Anbieter die Diktate nicht als Auftragsverarbeiter; Lizenz-, Zahlungs- und Supportdaten bleiben eigenständige Vorgänge. „Kein AVV für Diktatinhalte“ bedeutet nicht „keine Datenschutzpflichten“.",
          sources: ["sprecho-dpa", "wispr-security", "local-product"],
        },
      ],
    },
    {
      title: "Dritte Frage: Was passiert bei optionalen Funktionen?",
      paragraphs: [
        {
          text: "Prüfe nicht nur das Standardversprechen, sondern jede aktivierbare Stufe. Superwhisper trennt Sprachmodell und Textmodell; beide können lokal oder cloudbasiert sein. VoiceInk beschreibt eine optionale Cloud Enhancement für transkribierten Text. Wispr Flow trennt Privacy Mode, der Trainingsnutzung steuert, von Cloud Sync, der serverseitige Speicherung steuert. Diese Schalter ändern den Datenfluss und gehören in eine interne Freigabe.",
          sources: ["super-security", "voiceink-product", "wispr-privacy"],
        },
        {
          text: "Auch Apples Diktierfunktion ist nicht pauschal lokal. Laut Apple zeigen die Tastatureinstellungen, ob Diktate auf dem Gerät oder auf Apple-Servern verarbeitet werden. Der angezeigte Modus ist entscheidend.",
          sources: ["apple-dictation", "apple-privacy"],
        },
      ],
    },
    {
      title: "Vierte Frage: Wie werden Fehler vor dem Absenden sichtbar?",
      paragraphs: [
        {
          text: "Datenschutz schützt nicht vor einer falsch erkannten Summe oder verlorenen Verneinung. Witness soll Zahlen, Daten, Namen, Verneinungen und Wörterbuchbegriffe vor der Einfügung markieren; Originalton und Rohtranskript sollen zur Kontrolle danebenliegen. Vergleichbare automatische Risikomarkierungen sind bei Wispr Flow, Superwhisper, Sprecho und VoiceInk in den von uns geprüften öffentlichen Unterlagen nicht öffentlich dokumentiert.",
          sources: ["local-product", "wispr-security", "super-security", "sprecho-product", "voiceink-product"],
        },
        {
          text: "Das ist kein Qualitätsbenchmark. Für medizinische, juristische, finanzielle oder andere folgenreiche Texte sollte unabhängig von der App ein menschlicher Prüfschritt festgelegt werden.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "Praktische Checkliste für die Auswahl",
      paragraphs: [],
      bullets: [
        { text: "Datenfluss testen: Offline-Modus, Firewall und aktivierte Cloud-Funktionen dokumentieren." },
        { text: "Zweck und Datenarten festhalten; bei Cloud-Verarbeitung AVV, Empfänger, Standort und Löschregeln prüfen.", sources: ["gdpr"] },
        { text: "Konten-, Lizenz-, Diagnose- und Update-Daten getrennt von Diktatinhalten bewerten." },
        { text: "Für folgenreiche Texte einen sichtbaren Prüfprozess definieren; keine Marketingquote ersetzt einen eigenen Test." },
      ],
    },
  ],
  verdict: {
    text: "Unsere Empfehlung: Wenn in deinen Diktaten personenbezogene Daten vorkommen und du auf einem Apple-Silicon-Mac arbeitest, nimm Witness. Diktatinhalte werden nicht übertragen, es gibt keinen Cloud-Schalter, der sich falsch stellen lässt, und die zweite Hälfte des Problems ist mitgedacht: Zahlen, Namen, Daten und Verneinungen stehen vor dem Einfügen zur Freigabe, denn einen Erkennungsfehler in einer Akte bemerkt sonst niemand. Ein AVV für Inhaltsverarbeitung ist nicht vorgesehen, weil keine Inhalte im Auftrag verarbeitet werden; für Lizenz, Zahlung und Updates nennt die Datenschutzerklärung Empfänger, Rechtsgrundlage und Aufbewahrung. Das ersetzt keine rechtliche Prüfung: Auch lokale Software entbindet eine Organisation nicht von eigenen Pflichten. 13 Tage lassen sich kostenlos testen, ohne Konto.",
    sources: ["gdpr", "local-product"],
  },
  faqs: [
    {
      question: "Ist lokale Diktiersoftware automatisch DSGVO-konform?",
      answer: "Nein. Lokale Verarbeitung reduziert Datenübertragungen, ersetzt aber weder Zweckprüfung, Zugriffsschutz, Aufbewahrungsregeln noch die Bewertung anderer Produktdaten.",
    },
    {
      question: "Brauche ich für Cloud-Diktat immer einen AVV?",
      answer: "Wenn ein Anbieter personenbezogene Daten in deinem Auftrag verarbeitet, verlangt Artikel 28 grundsätzlich eine bindende Vereinbarung. Die Rollen müssen für den konkreten Einsatz geprüft werden.",
    },
    {
      question: "Ist Apple Diktierfunktion immer lokal?",
      answer: "Nein. Apple weist darauf hin, dass der Mac in den Tastatureinstellungen anzeigt, ob die Verarbeitung auf dem Gerät oder auf Apple-Servern erfolgt.",
    },
  ],
  sources: [
    localSource,
    ...appleSources,
    wisprSources[0],
    wisprSources[4],
    superwhisperSources[1],
    sprechoSources[0],
    sprechoSources[2],
    voiceInkSources[0],
  ],
};

const macDictationSources: ComparisonSource[] = [
  {
    id: "apple-dictate",
    title: "Nachrichten und Dokumente auf dem Mac diktieren",
    publisher: "Apple",
    url: "https://support.apple.com/de-de/guide/mac-help/mh40584/mac",
  },
  {
    id: "apple-commands",
    title: "Befehle für das Diktieren von Text auf dem Mac",
    publisher: "Apple",
    url: "https://support.apple.com/de-de/guide/mac-help/mh40695/mac",
  },
  {
    id: "apple-trouble",
    title: "Diktierfunktion auf dem Mac funktioniert nicht wie erwartet",
    publisher: "Apple",
    url: "https://support.apple.com/de-de/guide/mac-help/mchlc480652b/mac",
  },
  {
    id: "apple-privacy",
    title: "Siri, Diktierfunktion & Datenschutz",
    publisher: "Apple",
    url: "https://www.apple.com/legal/privacy/data/de/ask-siri-dictation/",
  },
];

// The built-in feature is local too, so this page cannot sell locality. What it
// can say, sourced, is where Apple's own help draws its lines, and that Witness
// checks before inserting while macOS underlines ambiguous words afterwards.
const macDictation: ComparisonPageData = {
  slug: "mac-diktierfunktion",
  path: "/vergleich/mac-diktierfunktion",
  translation: "/en/guides/mac-dictation",
  eyebrow: "Mac-Diktierfunktion oder App",
  title: "Diktierfunktion am Mac: einschalten, richtig nutzen und wissen, wann eine App mehr bringt",
  metaTitle: "Diktierfunktion am Mac: einschalten, Befehle, Grenzen",
  description:
    "So schaltest du die Diktierfunktion am Mac ein, diktierst Satzzeichen und behebst Probleme. Dazu: wann eine App wie Witness mehr bringt. Stand macOS 27.",
  updatedIso: "2026-10-01",
  updatedLabel: "1. Oktober 2026",
  directAnswer: {
    text: "Die Diktierfunktion schaltest du unter Menü „Apple“ > „Systemeinstellungen“ > „Tastatur“ ein. Danach setzt du den Cursor in eine beliebige App und drückst die Mikrofontaste, deinen Kurzbefehl für die Diktierfunktion oder wählst „Bearbeiten“ > „Diktat starten“. Für Notizen und kurze Nachrichten reicht das eingebaute Werkzeug oft aus. Eine App wie Witness lohnt sich, wenn in deinen Texten Zahlen, Namen oder Verneinungen stimmen müssen und du diese Stellen vor dem Einfügen prüfen willst.",
    sources: ["apple-dictate", "local-product"],
  },
  table: {
    caption: "macOS-Diktierfunktion und Witness im Überblick",
    headers: ["Kriterium", "Witness", "macOS-Diktierfunktion"],
    rows: [
      ["Preis", "Nach 13 Testtagen €99 lebenslang oder €49/Jahr", "In macOS enthalten"],
      ["Verarbeitung", "Inhalte immer lokal auf dem Mac", "Allgemeine Textdiktate lokal, wenn die Tastatureinstellungen es anzeigen; sonst auf Apple-Servern"],
      ["Starten", "Eigener Hotkey", "Mikrofontaste, Kurzbefehl oder „Bearbeiten“ > „Diktat starten“"],
      ["Sprachen", "Aus 100 ankreuzen; DE, EN, RU, UK end-to-end gemessen", "Mehrere Sprachen einstellbar; Wechsel per Klick auf das Sprachkürzel oder mit der Globus-Taste"],
      ["Unsichere Stellen", "Vor dem Einfügen markiert: Zahlen, Daten, Namen, Verneinungen, Wörterbuchbegriffe", "Nicht eindeutiger Text wird blau unterstrichen, Alternativen per Klick"],
      ["Originalton einer Stelle anhören", "Bei markierten Stellen mit Zeitmarken, aus dem Arbeitsspeicher", "Nicht öffentlich dokumentiert"],
      ["Voraussetzung", "Apple Silicon, macOS 14.4 oder neuer", "Nicht in allen Sprachen oder Regionen verfügbar, Umfang variiert"],
    ],
  },
  sections: [
    {
      title: "So schaltest du die Diktierfunktion ein",
      paragraphs: [
        {
          text: "Die Diktierfunktion ist Teil von macOS und muss nur einmal eingeschaltet werden. Apple beschreibt den Weg in der Mac-Hilfe für macOS 27 und ältere Versionen:",
          sources: ["apple-dictate"],
        },
      ],
      bullets: [
        { text: "Menü „Apple“ > „Systemeinstellungen“ öffnen und in der Seitenleiste auf „Tastatur“ klicken.", sources: ["apple-dictate"] },
        { text: "Unter „Diktierfunktion“ den Schalter einschalten. Im Einblendmenü „Kurzbefehl“ legst du fest, mit welcher Taste das Diktat startet.", sources: ["apple-dictate"] },
        { text: "Weitere Sprachen fügst du in denselben Einstellungen hinzu. Beim Diktieren wechselst du per Klick auf das Sprachkürzel neben dem Zeiger oder mit der Globus-Taste.", sources: ["apple-dictate"] },
        { text: "Zum Diktieren den Cursor an die gewünschte Stelle setzen, dann Mikrofontaste, Kurzbefehl oder „Bearbeiten“ > „Diktat starten“. Beenden mit Esc, der Mikrofontaste oder dem Kurzbefehl.", sources: ["apple-dictate"] },
      ],
    },
    {
      title: "Satzzeichen, Absätze und Emoji per Sprache",
      paragraphs: [
        {
          text: "In unterstützten Sprachen setzt die Diktierfunktion Kommas, Punkte und Fragezeichen automatisch; die automatische Interpunktion lässt sich in den Einstellungen abschalten. Satzzeichen kannst du auch beim Namen nennen, etwa „Ausrufezeichen“. „Neue Zeile“ entspricht einem Zeilenumbruch, „neuer Absatz“ zwei Zeilenumbrüchen. Emoji diktierst du über ihren Namen, zum Beispiel „Herz-Emoji“.",
          sources: ["apple-dictate", "apple-commands"],
        },
        {
          text: "Die vollständige Befehlsliste führt Apple auf einer eigenen Hilfeseite, darunter Formatierungen wie „Ziffer“ oder „Tabulatortaste“ und Sonderzeichen wie das At-Zeichen.",
          sources: ["apple-commands"],
        },
      ],
    },
    {
      title: "Wenn die Diktierfunktion nicht funktioniert",
      paragraphs: [
        {
          text: "Ein häufiger Grund für ein scheinbar abgebrochenes Diktat ist eine Pause: Laut Apple stoppt die Diktierfunktion automatisch, wenn 30 Sekunden lang keine Sprache erkannt wird. Die Textlänge selbst ist nicht begrenzt. Für andere Fälle nennt Apples Fehlerhilfe diese Punkte:",
          sources: ["apple-dictate", "apple-trouble"],
        },
      ],
      bullets: [
        { text: "Sprache und Region der Diktierfunktion passen zu dem, was du sprichst.", sources: ["apple-trouble"] },
        { text: "Der Kurzbefehl ist gesetzt und kollidiert nicht mit einem anderen.", sources: ["apple-trouble"] },
        { text: "Die Mikrofonquelle in den Tastatureinstellungen ist das Mikrofon, das du benutzt; ohne eingebautes Mikrofon braucht der Mac ein externes.", sources: ["apple-dictate", "apple-trouble"] },
        { text: "Für einige Funktionen ist eine Netzwerkverbindung nötig.", sources: ["apple-trouble"] },
        { text: "Deutlich und in normaler Lautstärke sprechen, Hintergrundgeräusche vermeiden, in lauter Umgebung ein Headset nutzen und das Mikrofon nicht verdecken.", sources: ["apple-trouble"] },
      ],
    },
    {
      title: "Wo die eingebaute Diktierfunktion lokal bleibt",
      paragraphs: [
        {
          text: "Ob deine Diktate auf dem Mac bleiben, zeigt macOS in den Tastatureinstellungen unter „Diktierfunktion“ an. Das gilt laut Apple für allgemeine Textdiktate wie Nachrichten und Notizen, nicht für Diktate in Suchfeldern. Andernfalls wird alles Diktierte an Apple-Server gesendet und dort verarbeitet. Audiodaten speichert Apple nur, wenn du „Siri & Diktierfunktion verbessern“ zustimmst.",
          sources: ["apple-dictate", "apple-privacy"],
        },
        {
          text: "Witness verarbeitet Audio, Transkript und Wörterbuch immer auf dem Mac. Das Audio liegt nur im Arbeitsspeicher und wird nach Diktat und Prüfung verworfen. Netzwerkzugriffe gibt es für Aktivierung, Lizenz und Updates, nicht für Inhalte.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "Wann eine Diktier-App mehr bringt",
      paragraphs: [
        {
          text: "Die Diktierfunktion schreibt direkt in den Text und unterstreicht nicht eindeutige Wörter blau; ein Klick zeigt Alternativen. Das hilft bei ähnlich klingenden Wörtern, etwa „läuten“ statt „Leuten“. Ein Nachhören des Originaltons einzelner Stellen ist in Apples Mac-Hilfe nicht öffentlich dokumentiert.",
          sources: ["apple-dictate"],
        },
        {
          text: "Witness setzt früher an. Bevor der Text im Dokument landet, markiert es Zahlen, Datumsangaben, Eigennamen, Verneinungen und Begriffe aus deinem Wörterbuch. Daneben stehen das Rohtranskript und, bei Stellen mit Zeitmarken, der kurze Originalton zum Nachhören. Erst nach deiner Bestätigung wird am Cursor eingefügt. Das ist langsamer als direktes Diktieren und lohnt sich bei E-Mails, Tickets und Dokumenten, in denen ein falsches Datum oder ein verlorenes „nicht“ teuer wird.",
          sources: ["local-product"],
        },
        {
          text: "Einen gemeinsamen, veröffentlichten Genauigkeitstest beider Werkzeuge gibt es nicht. Deshalb behaupten wir keine bessere Erkennung, sondern beschreiben den anderen Ablauf.",
          sources: ["local-product"],
        },
      ],
    },
  ],
  verdict: {
    text: "Unsere Empfehlung: Schalte die eingebaute Diktierfunktion ein, lerne die Satzzeichen-Befehle und behalte sie für Notizen und kurze Nachrichten. Dafür ist sie kostenlos und gut genug. Sobald diktierter Text in Dokumente geht, auf die sich andere verlassen, also Angebote, Mandantenpost, Akten, Tickets, ist Witness die passende Wahl: Zahlen, Datumsangaben, Eigennamen und Verneinungen werden vor dem Einfügen markiert, den Originalton einer markierten Stelle kannst du nachhören, und die Inhalte bleiben auf dem Mac. 13 Tage lassen sich kostenlos testen, ohne Konto.",
    sources: ["apple-dictate", "local-product"],
  },
  faqs: [
    {
      question: "Wie schalte ich die Diktierfunktion am Mac ein?",
      answer: "Menü „Apple“ > „Systemeinstellungen“ > „Tastatur“, dann unter „Diktierfunktion“ den Schalter einschalten. Im Einblendmenü „Kurzbefehl“ wählst du die Taste zum Starten.",
    },
    {
      question: "Mit welcher Taste starte ich das Diktat?",
      answer: "Mit der Mikrofontaste, falls dein Mac eine in der Funktionstastenreihe hat, mit dem in den Tastatureinstellungen gewählten Kurzbefehl oder über „Bearbeiten“ > „Diktat starten“.",
    },
    {
      question: "Warum hört die Diktierfunktion von selbst auf?",
      answer: "macOS beendet das Diktat automatisch, wenn 30 Sekunden lang keine Sprache erkannt wird. Die Länge des diktierten Textes ist laut Apple nicht begrenzt.",
    },
    {
      question: "Funktioniert die Diktierfunktion ohne Internet?",
      answer: "Für allgemeine Textdiktate kann macOS auf dem Gerät arbeiten. Ob das bei dir so ist, steht in den Tastatureinstellungen unter „Diktierfunktion“. Einige Funktionen brauchen laut Apple eine Netzwerkverbindung.",
    },
    {
      question: "Ist Witness genauer als die Diktierfunktion?",
      answer: "Dafür gibt es keinen gemeinsamen, veröffentlichten Test. Witness unterscheidet sich im Ablauf: Es markiert riskante Stellen vor dem Einfügen, statt direkt in den Text zu schreiben.",
    },
  ],
  sources: [localSource, ...macDictationSources],
};

/** English-language Apple Support pages, for the English dictation guide. */
const appleGuideEn: ComparisonSource[] = [
  {
    id: "apple-dictate-en",
    title: "Dictate messages and documents on Mac",
    publisher: "Apple Support",
    url: "https://support.apple.com/guide/mac-help/mh40584/mac",
  },
  {
    id: "apple-commands-en",
    title: "Dictation commands on Mac",
    publisher: "Apple Support",
    url: "https://support.apple.com/guide/mac-help/mh40695/mac",
  },
  {
    id: "apple-trouble-en",
    title: "If Dictation on Mac does not work as expected",
    publisher: "Apple Support",
    url: "https://support.apple.com/guide/mac-help/mchlc480652b/mac",
  },
];

/** Primary sources on why recognition invents or drops words, for the English guide. */
const recognitionLimitsEn: ComparisonSource[] = [
  {
    id: "whisper-card",
    title: "Whisper model card, Limitations and biases",
    publisher: "OpenAI",
    url: "https://github.com/openai/whisper/blob/main/model-card.md",
  },
  {
    id: "careless-whisper",
    title: "Careless Whisper: Speech-to-Text Hallucination Harms (ACM FAccT 2024)",
    publisher: "Koenecke, Choi, Mei, Schellmann, Sloane",
    url: "https://arxiv.org/abs/2402.08021",
  },
];

/** Primärquellen zu den Grenzen der Erkennung, für die KI-Seite. */
const kiSources: ComparisonSource[] = [
  {
    id: "whisper-card-de",
    title: "Whisper model card, Limitations and biases",
    publisher: "OpenAI",
    url: "https://github.com/openai/whisper/blob/main/model-card.md",
  },
  {
    id: "careless-whisper-de",
    title: "Careless Whisper: Speech-to-Text Hallucination Harms (ACM FAccT 2024)",
    publisher: "Koenecke, Choi, Mei, Schellmann, Sloane",
    url: "https://arxiv.org/abs/2402.08021",
  },
];

const kiSpracherkennung: ComparisonPageData = {
  slug: "ki-spracherkennung",
  path: "/vergleich/ki-spracherkennung",
  updatedIso: "2026-10-01",
  updatedLabel: "1. Oktober 2026",
  eyebrow: "Diktieren mit KI",
  title: "Diktieren mit KI: was dahintersteckt und woran du die Unterschiede erkennst",
  metaTitle: "Diktieren mit KI: Was wirklich dahintersteckt",
  description:
    "KI-Spracherkennung erklärt: wie sie arbeitet, warum sie Wörter erfindet und was Cloud von lokal unterscheidet. Mit Quellen, Stand Oktober 2026.",
  directAnswer: {
    text: "Die kurze Antwort: „KI-Spracherkennung“ meint heute bei fast allen Anbietern dieselbe Art von Modell. Es transkribiert nicht nur, es sagt Sprache voraus, und genau daraus entsteht die eigentliche Schwäche: Wenn die Aufnahme unklar ist, lässt das Modell keine Lücke, sondern schreibt die wahrscheinlichsten Wörter hin. OpenAI schreibt das in der Whisper-Modellkarte selbst, und eine begutachtete Studie fand in rund 1 % der untersuchten Transkripte ganze Sätze, die im Audio überhaupt nicht vorkamen. Unterscheiden musst du Anbieter deshalb nicht nach dem Wort KI, sondern nach zwei Fragen: Wo läuft die Erkennung, und was zeigt dir das Programm, wenn es unsicher war.",
    sources: ["whisper-card-de", "careless-whisper-de"],
  },
  table: {
    caption: "Die zwei Fragen, an denen sich KI-Diktierprogramme unterscheiden",
    headers: ["Kriterium", "Witness", "Typische KI-Diktier-Cloud"],
    rows: [
      ["Wo die Erkennung läuft", "Lokal auf Apple Silicon", "Auf Servern des Anbieters, bei Wispr Flow in den USA"],
      ["Konto", "Kein Produktkonto vorgesehen", "Anmeldung erforderlich, etwa bei Wispr Flow"],
      ["Was die KI mit dem Text macht", "Konservative Bereinigung, per Hotkey umkehrbar", "Glättung, Grammatikkorrektur, Umformulierung"],
      ["Unsichere Stellen", "Zahlen, Daten, Namen, Verneinungen und Wörterbuchbegriffe vor dem Einfügen markiert", "Nicht öffentlich dokumentiert"],
      ["Originalton nachhören", "Bei markierten Stellen, aus dem Arbeitsspeicher", "Nicht öffentlich dokumentiert"],
      ["Kosten", "€99 einmalig oder €49/Jahr, zwei Macs", "Abo, bei Wispr Flow Pro $144 im Jahr"],
    ],
  },
  sections: [
    {
      title: "Was „KI“ bei Spracherkennung wirklich bedeutet",
      paragraphs: [
        {
          text: "Ein heutiges Spracherkennungsmodell ordnet nicht Laut für Laut Buchstaben zu. Es schätzt, welche Wortfolge zu dem Gehörten am besten passt, und bezieht dabei mit ein, was sprachlich wahrscheinlich ist. Deshalb klingt das Ergebnis flüssig, auch wenn die Aufnahme es nicht war. Dasselbe Prinzip steckt in den meisten Produkten, die mit KI werben, egal ob sie lokal oder in der Cloud rechnen.",
          sources: ["whisper-card-de"],
        },
        {
          text: "Die Kehrseite steht in der Modellkarte von OpenAI: Die Vorhersagen können Text enthalten, der im Audio gar nicht gesprochen wurde, und die Architektur neigt zusätzlich dazu, Textstellen zu wiederholen. Das ist keine Macke eines einzelnen Anbieters, sondern eine Eigenschaft dieser Modellklasse.",
          sources: ["whisper-card-de"],
        },
      ],
    },
    {
      title: "Wie oft die KI etwas erfindet",
      paragraphs: [
        {
          text: "Die belastbarste öffentliche Zahl stammt aus „Careless Whisper“, vorgestellt 2024 auf der ACM-Konferenz für Fairness, Accountability and Transparency. In rund 1 % der untersuchten Transkripte standen ganze erfundene Formulierungen oder Sätze, die im zugrunde liegenden Audio in keiner Form vorkamen. 38 % dieser Halluzinationen enthielten ausdrücklich schädliche Inhalte, etwa erfundene Zusammenhänge oder vorgetäuschte Autorität.",
          sources: ["careless-whisper-de"],
        },
        {
          text: "Ein Prozent klingt wenig, bis man zählt, wie viele Diktate ein Arbeitstag enthält. Und es verteilt sich ungleich: Die Studie fand mehr Halluzinationen bei Sprechenden mit längeren Sprechpausen, einem häufigen Symptom bei Aphasie. Die Modellkarte nennt aus demselben Grund ungleiche Qualität über Sprachen, Akzente und Dialekte hinweg.",
          sources: ["careless-whisper-de", "whisper-card-de"],
        },
      ],
    },
    {
      title: "Lokal rechnen ändert den Weg, nicht das Modell",
      paragraphs: [
        {
          text: "Das gehört hierher, obwohl wir lokale Verarbeitung verkaufen: Wenn die Erkennung auf deinem Mac läuft, verlässt das Audio das Gerät nicht. Am Verhalten des Modells bei undeutlicher Aufnahme ändert das nichts. Ein lokales Modell verschluckt ein „nicht“ genauso wie ein Modell in der Cloud. Lokal heißt vertraulich, nicht fehlerfrei.",
          sources: ["whisper-card-de", "local-product"],
        },
        {
          text: "Trotzdem ist der Unterschied real, nur an anderer Stelle: Wispr Flow beschreibt sich in der eigenen Dokumentation als Cloud-Dienst, der Kundendaten in den USA verarbeitet und speichert, und verlangt bei der Einrichtung ein Konto. Was du diktierst, geht dort also zur Erkennung hinaus. Bei Witness bleibt es auf dem Mac, und für Aktivierung, Lizenz und Updates gehen nur offengelegte Nicht-Inhaltsdaten hinaus.",
          sources: ["wispr-security", "wispr-setup", "local-product"],
        },
      ],
    },
    {
      title: "KI-Glättung macht Fehler schwerer sichtbar",
      paragraphs: [
        {
          text: "Fast alle KI-Diktierprogramme bieten heute einen zweiten Durchgang an: Grammatik korrigieren, Füllwörter entfernen, Satzzeichen setzen, den Text in sauberes Deutsch bringen. Für viele Texte willst du genau das. Nur entfernt dieser Durchgang auch die Spuren. Zögern, ein halb wiederholtes Wort, ein schiefer Satzbau sind die Dinge, bei denen man stutzt und noch einmal liest.",
          sources: ["local-product"],
        },
        {
          text: "Je glatter der Text, desto weniger fällt auf, dass der Betrag unterwegs ein anderer geworden ist. Witness bereinigt deshalb konservativ und umkehrbar: Ein Hotkey zeigt das unveränderte Rohtranskript, damit nachvollziehbar bleibt, was das Programm geändert hat.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "Woran du ein brauchbares KI-Diktat erkennst",
      paragraphs: [
        {
          text: "Vier Punkte, und sie sind konkret. Werden die Stellen markiert, an denen ein Fehler die Bedeutung ändert, also Zahlen, Datumsangaben, Eigennamen, Verneinungen und eigene Fachbegriffe? Kommst du an das unveränderte Rohtranskript? Kannst du den Originalton einer markierten Stelle nachhören, statt den Text nur noch einmal zu lesen? Und bestimmst du selbst, welche Sprachen überhaupt in Frage kommen? Bei den geprüften öffentlichen Seiten der großen KI-Diktier-Clouds ist eine automatische Risiko- oder Confidence-Markierung auf Fragmentebene nicht öffentlich dokumentiert. Das ist keine Aussage darüber, wie gut sie erkennen, und kein Genauigkeitsvergleich: Es heißt nur, dass wir diese eine Funktion nicht als belegten Gleichstand eintragen können.",
          sources: ["local-product", "wispr-security"],
        },
        {
          text: "Witness ist um diese vier gebaut: markierte Risikostellen vor dem Einfügen, Rohtranskript per Hotkey, Nachhören des kurzen Fragments aus dem Arbeitsspeicher, und du kreuzt aus 100 Sprachen an, welche vorkommen. Deutsch, Englisch, Russisch und Ukrainisch sind end-to-end gemessen; bei den übrigen bleiben sprachabhängig kalibrierte Markierungen aus, statt zu raten. Eine bessere Erkennung behaupten wir dabei nicht: Es gibt keinen gemeinsamen veröffentlichten Benchmark, der die Programme belastbar ordnet. 13 Tage lassen sich kostenlos testen, ohne Konto.",
          sources: ["local-product"],
        },
      ],
    },
  ],
  verdict: {
    text: "Unsere Empfehlung: Lass dich nicht vom Wort KI leiten, es steckt überall dasselbe Prinzip dahinter. Entscheide nach den zwei Fragen, die wirklich auseinandergehen. Wenn deine Diktate Inhalte enthalten, die den Mac nicht verlassen sollen, und darin regelmäßig Zahlen, Namen oder Fristen vorkommen, ist Witness die passende Wahl: einmal €99 statt eines Abos, kein Konto, und die unsicheren Stellen stehen vor dem Einfügen zur Freigabe. Eine Cloud-Lösung wie Wispr Flow bleibt sinnvoll, wenn du dieselbe Oberfläche auf Windows, iPhone und Android brauchst.",
    sources: ["wispr-security", "local-product"],
  },
  faqs: [
    {
      question: "Was ist KI-Spracherkennung?",
      answer: "Ein Modell, das aus einer Aufnahme die wahrscheinlichste Wortfolge vorhersagt, statt Laute einzeln zuzuordnen. Deshalb klingt das Ergebnis flüssig, und deshalb kann es Text enthalten, der so nicht gesprochen wurde.",
    },
    {
      question: "Erfindet KI-Diktat wirklich Wörter?",
      answer: "Ja, und die Hersteller dokumentieren es. Die Whisper-Modellkarte von OpenAI nennt Vorhersagen, die im Audio nicht gesprochen wurden. Eine Studie auf der ACM FAccT 2024 fand in rund 1 % der Transkripte vollständig erfundene Formulierungen.",
    },
    {
      question: "Ist lokale KI-Spracherkennung genauer als die Cloud?",
      answer: "Das lässt sich öffentlich nicht belegen. Lokal entscheidet darüber, wo das Audio verarbeitet wird, nicht darüber, wie das Modell bei undeutlicher Aufnahme reagiert. Einen gemeinsamen Benchmark, der die Programme nach Genauigkeit ordnet, gibt es nicht.",
    },
    {
      question: "Diktieren mit KI ohne Cloud, geht das auf dem Mac?",
      answer: "Ja. Die Erkennung läuft auf Apple Silicon schnell genug für laufendes Diktat. Witness verarbeitet Audio, Transkript und Wörterbuch lokal; das Audio bleibt standardmäßig nur im Arbeitsspeicher.",
    },
    {
      question: "Worauf sollte ich bei einem KI-Diktierprogramm achten?",
      answer: "Wo die Erkennung läuft, ob ein Konto nötig ist, ob riskante Stellen vor dem Einfügen markiert werden, ob du an das unveränderte Rohtranskript kommst und ob du die Sprachauswahl selbst bestimmst.",
    },
  ],
  sources: [localSource, ...kiSources, wisprSources[0], wisprSources[3]],
};

const wisprFlowAlternatives: ComparisonPageData = {
  locale: "en",
  slug: "wispr-flow-alternatives",
  path: "/en/compare/wispr-flow-alternatives",
  updatedIso: "2026-10-01",
  updatedLabel: "1 October 2026",
  eyebrow: "Wispr Flow alternatives",
  title: "Best Wispr Flow alternatives for Mac, and how to pick one",
  metaTitle: "Wispr Flow Alternatives for Mac | Witness",
  description:
    "Eight Wispr Flow alternatives for Mac, compared on where speech is processed, price, and what you see before the text lands. Checked 1 October 2026.",
  directAnswer: {
    text: "The short answer: if you are looking for a Wispr Flow alternative because your dictation should stay on your Mac, there are eight real options and most of them cost nothing. Wispr Flow describes itself in its own documentation as a cloud service that processes and stores customer data in the United States, it requires an account to set up, and Pro costs $144 a year. Every alternative on this page runs recognition on the Mac instead. Where they differ is what happens after recognition. If local processing is all you need, this page says which ones are free. If you also need to catch the words recognition got wrong before they reach a document, that narrows to one.",
    sources: ["wispr-security", "wispr-setup", "wispr-plans", "local-product"],
  },
  table: {
    caption: "Eight Mac alternatives, by where speech is processed and what they cost",
    headers: ["Alternative", "Where speech is processed", "Price"],
    rows: [
      ["Witness", "On the Mac, with no cloud option", "€99 once or €49 a year, two Macs, 13-day trial"],
      ["Spokenly", "Local models offline; cloud only on Pro", "$0 forever for local models; Pro $99.99 a year"],
      ["MacParakeet", "Local on Apple Silicon", "Free, GPL-3.0, no account"],
      ["FluidVoice", "Local on the Mac", "Free, GPLv3, no paid tier"],
      ["Superwhisper", "Local models; cloud models optional", "Free tier; Pro $8.49/mo, $84.99/yr or $249.99 once"],
      ["MacWhisper", "Local models; optional cloud providers", "Free version; Pro €64 once"],
      ["VoiceInk", "Local; optional cloud clean-up of text only", "$25, $39 or $49 once for one, two or three Macs"],
      ["Apple dictation", "On device or on Apple servers, depending on language", "Included in macOS"],
      ["Wispr Flow, for reference", "Cloud, processed and stored in the United States", "Free with 1,500 words a week; Pro $144 a year"],
    ],
  },
  sections: [
    {
      title: "What people are actually leaving",
      paragraphs: [
        {
          text: "Three documented facts about Wispr Flow start most of these searches. Its security FAQ states that Flow is a cloud service, not an on-premise deployment, and that it processes and stores customer data in the United States. The setup guide requires signing in before you can dictate at all. And the free tier caps dictation at 1,500 words a week, resetting Sunday at midnight Pacific.",
          sources: ["wispr-security", "wispr-setup", "wispr-free"],
        },
        {
          text: "For a lot of work none of that matters. It starts to matter when the sentence you just spoke is a client name, a settlement figure or a diagnosis, because then the question is no longer how fast the text appears but which server saw it first. Flow does give you two settings over what happens next, one for model training and one for cloud storage of your dictations, but neither of them moves recognition off the cloud. The audio goes out either way.",
          sources: ["wispr-security", "wispr-privacy"],
        },
      ],
    },
    {
      title: "Where the free local options get you",
      paragraphs: [
        {
          text: "Four of them cost nothing and keep audio on the machine. Spokenly runs Whisper and Parakeet models offline for $0 forever with no word cap. MacParakeet is free under GPL-3.0, supports 98 languages, needs no account, no sign-up and no email, and requires macOS 14.2 or newer on Apple Silicon. FluidVoice is free forever under GPLv3 with no paid tier and states that your voice never leaves your Mac. Superwhisper has a free tier that allows unlimited dictation with any local Whisper model, and says that nothing you dictate leaves your device on that plan.",
          sources: ["spokenly-pricing", "macparakeet-product", "fluidvoice-product", "super-pro"],
        },
        {
          text: "macOS has dictation built in, and it is better than its reputation. You turn it on in System Settings under Keyboard, you can dictate text of any length without a timeout, and whether your voice is processed on the device or sent to Siri servers depends on the language, which the Keyboard settings will tell you. If you have not tried it since you bought the Mac, try it before you install anything.",
          sources: ["apple-dictation-en"],
        },
        {
          text: "So if the cloud, the account or the weekly word cap was your whole reason for leaving Flow, that part is solved several times over, and some of it for free. All of these keep the audio on the machine. What none of them settle is the question in the next section, and it is the one that decides whether you can use dictation on work other people act on.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "What almost none of them do",
      paragraphs: [
        {
          text: "Local processing answers where the audio went. It does not answer the other question: when recognition got a word wrong, how would you know? Dictation fails quietly. A figure comes out as a different figure, a name as a similar name, and a negation simply disappears, which flips the meaning of the sentence while leaving it perfectly readable. Smoothing the text afterwards with an AI pass makes this worse, because a polished sentence gives you nothing to notice.",
          sources: ["local-product"],
        },
        {
          text: "An automatic risk or confidence marking at fragment level is not publicly documented for Spokenly, MacParakeet, FluidVoice, Superwhisper, MacWhisper or VoiceInk on the pages we checked. Apple is the exception worth naming: macOS underlines ambiguous text in blue and lets you click the word to pick an alternative, which is a real check and we are not going to pretend otherwise.",
          sources: ["spokenly-pricing", "macparakeet-product", "fluidvoice-product", "super-pro", "macwhisper-product", "voiceink-product", "apple-dictation-en"],
        },
        {
          text: "Witness is built around that one step. Numbers, dates, proper names, negations and your own dictionary terms are marked before the text is inserted, you can play back the short audio fragment behind a marked spot, and a hotkey shows the untouched raw transcript so you can see what the cleanup changed. This is not a claim that Witness recognises speech more accurately: there is no shared published benchmark that would let anyone rank these apps on accuracy. It is a claim about what you are shown when recognition is unsure.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "Two languages in one working day",
      paragraphs: [
        {
          text: "Flow supports 100+ languages and auto-detects, but its own documentation is precise about the limit: Flow detects one language per dictation, not per word. For Urdu, Hebrew and Ukrainian it tells you to select only one at a time, because otherwise Flow cannot tell which you are speaking and may transcribe the wrong one.",
          sources: ["wispr-languages"],
        },
        {
          text: "Witness decides one language per recording too, so that part is not a difference and we do not list it as one. The difference is where that language comes from: you tick the languages you actually speak, out of 100, and the choice is made only among those. A word that looks like one of your other languages is flagged before insertion. German, English, Russian and Ukrainian are measured end to end, from recognition through cleanup to every risk marking; for the rest, markings that need per-language calibration stay off rather than guessing. Worth 13 days of your time if you write in two languages: the trial is the full version and needs no account.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "What the difference costs",
      paragraphs: [
        {
          text: "Wispr Flow Pro is $15 a month, or $12 a month billed annually, which is $144 every year. Witness is €99 once for two Macs, or €49 a year if you would rather not pay it all at once. The free local options cost nothing, VoiceInk starts at $25 once and MacWhisper Pro is €64 once, so Witness is not the cheapest thing on this page and it is not trying to be.",
          sources: ["wispr-plans", "voiceink-product", "macwhisper-product", "local-product"],
        },
        {
          text: "What the difference buys is the check before insertion. One wrong amount in a quote, one dropped not in an email to a client, and the gap between free and €99 stops being the interesting number. For notes and messages that gap is real and the free apps are enough. For documents other people act on, the €99 is the cheaper mistake, and the 13-day trial is the full version with no account.",
          sources: ["local-product"],
        },
      ],
    },
  ],
  verdict: {
    text: "What we recommend: every app on this page runs recognition on the Mac, so whichever one you pick, the cloud question is answered. The question worth another minute is what happens when recognition gets a word wrong, because that is the failure you do not see. If you dictate into documents where a figure, a date, a name or a negation has to be right, Witness is the alternative built for exactly that: the risky spots are marked before the text lands, you can replay the audio behind a marked one, and a hotkey shows the raw transcript. Apple Silicon with macOS 14.4 or newer, €99 once for two Macs, and the 13-day trial is the full version with no account. Wispr Flow stays the better fit if you need the same interface on Windows, iPhone and Android.",
    sources: ["spokenly-pricing", "macparakeet-product", "fluidvoice-product", "local-product"],
  },
  faqs: [
    {
      question: "Is there a free Wispr Flow alternative for Mac?",
      answer: "Several. Spokenly runs local models for $0 forever, MacParakeet and FluidVoice are free and open source, Superwhisper has a free tier with unlimited local dictation, MacWhisper has a permanently free version, and macOS includes dictation.",
    },
    {
      question: "Does Wispr Flow work offline?",
      answer: "No. Its security documentation describes Flow as a cloud service that processes dictated audio in the cloud and stores customer data in the United States.",
    },
    {
      question: "Why pay for Witness when MacParakeet and Spokenly are free?",
      answer: "Only for one reason: Witness marks numbers, dates, names and negations before the text is inserted and lets you replay the audio behind a marked spot. Fragment-level risk marking is not publicly documented for the free apps. If you do not need that step, the free apps keep your audio local just as well.",
    },
    {
      question: "Which alternative handles German and English in the same day?",
      answer: "All of them recognise both languages, and all of them decide one language per recording. Witness lets you tick which languages can occur before you dictate, and flags a word that looks like another of your languages before it is inserted.",
    },
    {
      question: "Do any of these apps match Wispr Flow on accuracy?",
      answer: "There is no shared published benchmark with identical hardware, recordings and post-processing, so nobody can answer that honestly, including us. This page compares where speech is processed, what each app costs and what it shows you, because those are documented.",
    },
  ],
  sources: [
    localSourceEn,
    ...wisprSources,
    ...spokenlySources,
    ...macParakeetSources,
    ...fluidVoiceSources,
    superwhisperSources[0],
    macwhisperSources[0],
    voiceInkSources[0],
    appleDictationEn,
  ],
};

const macDictationGuide: ComparisonPageData = {
  locale: "en",
  slug: "mac-dictation",
  path: "/en/guides/mac-dictation",
  translation: "/vergleich/mac-diktierfunktion",
  updatedIso: "2026-10-01",
  updatedLabel: "1 October 2026",
  eyebrow: "Mac dictation guide",
  title: "How to use dictation on Mac, and when an app is better",
  metaTitle: "How to Use Dictation on Mac | Witness",
  description:
    "Turn on Mac dictation, dictate punctuation, fix it when it stops working, and see what the built-in tool does not show you. Checked 1 October 2026.",
  directAnswer: {
    text: "To turn on dictation, open the Apple menu, then System Settings, click Keyboard in the sidebar, switch on Dictation and click Enable. Then put the cursor where you want the text, and start with the microphone key, your Dictation keyboard shortcut, or Edit then Start Dictation. You can dictate text of any length without a timeout, and it stops on its own after 30 seconds of silence. For notes and short messages this is usually all you need. An app is worth it once numbers, names and negations in your text have to be right, because the built-in tool gives you no way to see which words it was unsure about.",
    sources: ["apple-dictate-en", "local-product"],
  },
  table: {
    caption: "What you need, and what each one gives you",
    headers: ["What you need", "macOS dictation", "Witness"],
    rows: [
      ["Cost", "Included in macOS", "€99 once or €49 a year, two Macs, 13-day trial"],
      ["Where speech is processed", "On device or on Apple servers, depending on the language", "On the Mac, with no cloud option"],
      ["Starting it", "Microphone key, shortcut, or Edit then Start Dictation", "One hotkey you choose"],
      ["Punctuation", "Spoken commands, from period to euro sign", "Added during cleanup, reversible"],
      ["Uncertain words", "Ambiguous text underlined in blue, alternatives on click", "Numbers, dates, names, negations and dictionary terms marked before insertion"],
      ["Hearing a spot again", "Not publicly documented", "Replay of the short audio fragment behind a marked spot"],
      ["Seeing what cleanup changed", "Not applicable, no cleanup", "Hotkey shows the untouched raw transcript"],
      ["Languages", "Several can be set, switch with the Globe key", "Tick from 100; English, German, Russian and Ukrainian measured end to end"],
      ["Requirements", "Not available in every language or region", "Apple Silicon, macOS 14.4 or newer"],
    ],
  },
  sections: [
    {
      title: "Turning it on, once",
      paragraphs: [
        {
          text: "Dictation is part of macOS and only has to be switched on one time. Open the Apple menu, then System Settings, and click Keyboard in the sidebar. Switch on Dictation and confirm with Enable. In the same place you pick the shortcut that starts dictation, and you add any other languages you speak.",
          sources: ["apple-dictate-en"],
        },
        {
          text: "After that, put the cursor where the text should go and start dictating with the microphone key, your shortcut, or Edit then Start Dictation. Apple states that you can dictate text of any length without a timeout. Dictation stops by itself after 30 seconds of silence, or you can stop it with Escape.",
          sources: ["apple-dictate-en"],
        },
      ],
    },
    {
      title: "Dictating punctuation and line breaks",
      paragraphs: [
        {
          text: "Punctuation is spoken, not typed. Apple documents commands for punctuation, typography, formatting, capitalisation, maths, currency, emoticons and intellectual property symbols, so period, comma, new line, new paragraph, caps on, caps off, dollar sign and euro sign all work as spoken commands.",
          sources: ["apple-commands-en"],
        },
        {
          text: "This is the part most people never learn, and it is why dictation feels clumsy at first. Say new paragraph instead of reaching for the keyboard, and the whole thing stops breaking your rhythm.",
          sources: ["apple-commands-en"],
        },
      ],
    },
    {
      title: "When dictation stops working",
      paragraphs: [
        {
          text: "Apple lists nine causes, and they cover almost every report. Dictation is not switched on in Keyboard settings. The language or region is wrong. You are using the wrong keyboard shortcut. An external microphone is not connected or not selected in Sound or Keyboard settings. The input volume is too low. The microphone is blocked by clothing or your body. You are too far away, too quiet or too loud. There is background noise or echo, where Apple suggests a headset microphone. Or there is no internet connection, which Network settings will tell you.",
          sources: ["apple-trouble-en"],
        },
        {
          text: "That last one is worth reading twice. Internet appears in Apple own troubleshooting list because some dictation features need it, which means the built-in tool is not reliably offline. Whether your voice stays on the device depends on the language, and Keyboard settings is where it says so.",
          sources: ["apple-trouble-en", "apple-dictate-en"],
        },
      ],
    },
    {
      title: "Where the built-in tool runs out",
      paragraphs: [
        {
          text: "macOS does flag uncertainty, and it deserves credit for it: ambiguous text is underlined in blue, and clicking the word offers alternatives. Apple own example is getting flour when you meant flower. If you have never noticed this, it is worth looking for next time you dictate.",
          sources: ["apple-dictate-en"],
        },
        {
          text: "What it does not do is tell you which kinds of mistakes matter. A blue underline appears where the recogniser saw two plausible words. It does not appear because a figure, a date, a client name or the word not is the thing that would change the meaning of the sentence. Those are exactly the words that fail silently: the sentence stays readable, so nothing prompts you to check it.",
          sources: ["apple-dictate-en", "local-product"],
        },
        {
          text: "Witness marks those categories specifically before the text is inserted: numbers, dates, proper names, negations and the terms in your own dictionary. You can replay the short audio fragment behind a marked spot and press a hotkey to see the untouched raw transcript, so you can tell what the cleanup changed. This is not a claim that Witness recognises speech more accurately than macOS, and there is no shared published benchmark that would support such a claim. It is a claim about what you are shown when recognition is unsure.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "So which one should you use",
      paragraphs: [
        {
          text: "For notes, messages, search boxes and a quick first draft, the built-in dictation is free, already installed and good enough. Learn the punctuation commands and you will get a long way without installing anything.",
          sources: ["apple-commands-en"],
        },
        {
          text: "The calculation changes when dictated text goes into documents other people act on: quotes, client emails, case notes, tickets with names out of a codebase. There one wrong amount or one dropped not costs more than the app. Witness runs entirely on an Apple Silicon Mac with macOS 14.4 or newer, costs €99 once for two Macs, and the 13-day trial is the full version with no account.",
          sources: ["local-product"],
        },
      ],
    },
  ],
  verdict: {
    text: "What we recommend: switch on the built-in dictation first, learn the punctuation commands, and keep it for notes and messages. If you dictate into documents where a figure, a date, a name or a negation has to be right, Witness is the better tool for that work, because it marks those spots before the text lands instead of leaving you to find them afterwards. If you need dictation on Windows, an iPhone or Android, neither of these is your answer.",
    sources: ["apple-dictate-en", "local-product"],
  },
  faqs: [
    {
      question: "How do I turn on dictation on a Mac?",
      answer: "Apple menu, then System Settings, then Keyboard in the sidebar. Switch on Dictation and click Enable. The same panel sets the keyboard shortcut and adds further languages.",
    },
    {
      question: "Why is dictation on my Mac not working?",
      answer: "Apple lists nine causes: dictation switched off, wrong language or region, wrong shortcut, a microphone that is not connected or not selected, input volume too low, a blocked microphone, speaking too quietly or too loudly, background noise or echo, and no internet connection.",
    },
    {
      question: "Does Mac dictation work offline?",
      answer: "Partly. Whether your voice is processed on the device or sent to Siri servers depends on the language, and Keyboard settings shows which applies. Apple own troubleshooting page lists a missing internet connection as a cause of dictation problems, so some features need a connection.",
    },
    {
      question: "Is there a time limit on Mac dictation?",
      answer: "No. Apple states that you can dictate text of any length without a timeout. Dictation stops on its own after 30 seconds of silence.",
    },
    {
      question: "Does Mac dictation show when it is unsure of a word?",
      answer: "Yes, up to a point. Ambiguous text is underlined in blue and clicking the word offers alternatives. It does not single out the categories where an error changes the meaning, such as figures, dates, names and negations.",
    },
  ],
  sources: [localSourceEn, ...appleGuideEn],
};

const missedWords: ComparisonPageData = {
  locale: "en",
  slug: "dictation-missed-words",
  path: "/en/guides/dictation-missed-words",
  updatedIso: "2026-10-01",
  updatedLabel: "1 October 2026",
  eyebrow: "Dictation that drops words",
  title: "Why dictation silently drops words, and how to catch it",
  metaTitle: "Why Dictation Drops Words | Witness",
  description:
    "Dictation does not fail loudly: it drops a negation or changes a figure and leaves the sentence readable. What the research shows, and how to catch it.",
  directAnswer: {
    text: "The short answer: dictation does not fail loudly. Speech recognition predicts language as much as it transcribes it, so when the audio is unclear it does not leave a gap, it writes the most probable words instead. OpenAI states this plainly in the Whisper model card: the predictions may include texts that are not actually spoken in the audio input. A peer-reviewed study of Whisper transcriptions found that roughly 1% contained entire hallucinated phrases or sentences which did not exist in any form in the underlying audio. The failure you need to catch is not the garbled sentence, because you already notice that one. It is the clean sentence where a figure, a date, a name or the word not came out different and the text still reads perfectly.",
    sources: ["whisper-card", "careless-whisper"],
  },
  table: {
    caption: "How dictation fails, and why the quiet failures are the expensive ones",
    headers: ["What goes wrong", "What you see on screen", "What it can cost"],
    rows: [
      ["A negation disappears", "A fluent sentence with the opposite meaning", "An approval where you dictated a refusal"],
      ["A figure comes out different", "A plausible number in the right place", "The wrong amount in a quote or an invoice"],
      ["A date shifts", "A valid date, just not the one you said", "A deadline nobody notices until it passes"],
      ["A name is normalised to a common one", "A name that looks right", "The wrong person in a record"],
      ["The model writes a phrase you never said", "Text with no basis in the audio at all", "A statement attributed to someone who never made it"],
      ["Text repeats in a loop", "An obviously broken paragraph", "Little, because this is the one you do catch"],
    ],
  },
  sections: [
    {
      title: "Recognition guesses, and a guess reads like a fact",
      paragraphs: [
        {
          text: "A speech model does not hand back silence when it cannot make out a word. It is trained to produce the most likely sequence of words, so an unclear passage comes out as fluent text rather than as a gap or a question mark. OpenAI documents this in the Whisper model card under limitations: the predictions may include texts that are not actually spoken in the audio input, which the card calls hallucination, and the sequence-to-sequence architecture also makes the model prone to generating repetitive texts.",
          sources: ["whisper-card"],
        },
        {
          text: "That is why the dangerous error is the tidy one. A mangled sentence announces itself. A sentence that reads perfectly but says 14,000 instead of 40,000, or drops a single not, gives you nothing to notice. You reread your own dictation, it matches what you meant to say, and you send it.",
          sources: ["whisper-card"],
        },
      ],
    },
    {
      title: "How often this happens, and to whom",
      paragraphs: [
        {
          text: "The best public measurement comes from Careless Whisper, presented at the ACM conference on Fairness, Accountability and Transparency in 2024. Across the transcriptions the authors studied, roughly 1% contained entire hallucinated phrases or sentences which did not exist in any form in the underlying audio, and 38% of those hallucinations included explicit harms such as perpetuating violence, making up inaccurate associations or implying false authority.",
          sources: ["careless-whisper"],
        },
        {
          text: "One percent sounds survivable until you count what a working day contains. It also is not spread evenly. The same study found hallucinations occurred disproportionately for speakers with longer stretches of non-vocal time, a common symptom of aphasia, which means the people least able to proofread the output are the ones getting the most invented text. OpenAI's own card reports uneven performance across languages, accents and dialects for the same underlying reason.",
          sources: ["careless-whisper", "whisper-card"],
        },
      ],
    },
    {
      title: "Running it locally does not make it immune",
      paragraphs: [
        {
          text: "This is worth saying clearly, because local dictation is often sold as the safe option and we sell local dictation. Keeping recognition on your own machine changes where the audio goes. It does not change how the model behaves when the audio is unclear. An offline model drops a negation exactly the same way a cloud model does, and a private mistake is still a mistake.",
          sources: ["whisper-card"],
        },
        {
          text: "So the honest question is not which app recognises speech most accurately. There is no shared published benchmark with identical hardware, recordings and post-processing that would let anyone rank dictation apps on accuracy, and we do not claim to win such a comparison. The question is what the app shows you when it was unsure.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "Automatic cleanup removes the evidence",
      paragraphs: [
        {
          text: "Most dictation tools now add a polishing pass: grammar fixed, filler words removed, punctuation inserted, the whole thing smoothed into prose. For most writing that is exactly what you want. It also deletes the tells. Hesitation, a half-repeated word, an odd clause, these are the things that make you stop and reread, and a cleanup pass is designed to remove precisely them.",
          sources: ["local-product"],
        },
        {
          text: "That is the trade nobody mentions: the smoother the output, the less chance you have of spotting that the amount changed on the way in. If a tool rewrites your sentence, you want to be able to see the untouched version next to it.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "What you can do today, with no new software",
      paragraphs: [
        {
          text: "macOS already helps more than people realise. Ambiguous text is underlined in blue, and clicking the underlined word offers alternatives, so those marks are worth looking for rather than scrolling past. Beyond that, three habits catch most of it: read every number and date out of the screen rather than from memory, search the text for not, no and never before sending anything consequential, and dictate names and figures in short separate passes instead of inside long sentences.",
          sources: ["apple-dictate-en"],
        },
        {
          text: "None of that scales to a full working day, which is the real problem. Proofreading your own dictation word by word costs more time than the dictation saved, so in practice people stop doing it after the first week and the errors go out unseen.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "What catching it reliably requires",
      paragraphs: [
        {
          text: "Four things, and they are specific. Mark the categories where an error changes meaning rather than flagging general uncertainty: figures, dates, proper names, negations and your own terminology. Keep the unmodified raw transcript available, so you can see what the cleanup changed. Let the person hear the short piece of audio behind a marked spot, because reading the text again cannot tell you what you actually said. And narrow the set of languages the model may choose from, so a word is not rendered into a language you were not speaking.",
          sources: ["local-product"],
        },
        {
          text: "Witness is built around those four. The risky categories are marked before the text is inserted, a hotkey shows the raw transcript, a marked fragment can be played back from memory, and you tick which of 100 languages you actually speak instead of letting the model guess per segment. German, English, Russian and Ukrainian are measured end to end, from recognition through cleanup to every risk marking; for the other languages, markings that need per-language calibration stay off rather than guessing. Everything runs on an Apple Silicon Mac and the audio is not written to disk. The trial is 13 days of the full version with no account.",
          sources: ["local-product"],
        },
      ],
    },
  ],
  verdict: {
    text: "What we recommend: treat the clean sentence as the one to check, not the garbled one. Turn on the built-in dictation, learn to look for the blue underlines, and read figures and dates off the screen before anything consequential leaves your hands. If you dictate all day into documents other people act on, that discipline will not hold, and then the thing worth paying for is an app that marks the risky spots for you and can still show you the raw transcript and the original audio. That is what Witness does, and it is the only reason to choose it over the free local alternatives.",
    sources: ["apple-dictate-en", "local-product"],
  },
  faqs: [
    {
      question: "Why does dictation leave out words like not?",
      answer: "Because the model predicts the most probable sequence of words rather than reporting that it was unsure. A short unstressed word carries little acoustic signal, so it is the first thing to go, and the sentence left behind is still grammatical. That is what makes it hard to notice.",
    },
    {
      question: "What is a speech-to-text hallucination?",
      answer: "Text in the transcript that was never spoken. OpenAI's Whisper model card states that predictions may include texts that are not actually spoken in the audio input. A 2024 study at ACM FAccT found roughly 1% of the transcriptions it examined contained entire hallucinated phrases or sentences absent from the audio.",
    },
    {
      question: "How often does Whisper hallucinate?",
      answer: "In the Careless Whisper study, roughly 1% of transcriptions contained entirely hallucinated phrases, and 38% of those hallucinations included explicit harms. Rates were higher for speakers with longer non-vocal stretches, a common symptom of aphasia.",
    },
    {
      question: "Does offline or local dictation avoid the problem?",
      answer: "No. Local processing changes where your audio goes, not how the model behaves when the audio is unclear. An offline model drops a negation the same way a cloud model does.",
    },
    {
      question: "How can I tell whether dictation changed a number?",
      answer: "Read it off the screen rather than from memory, and keep a way back to the original. A tool that shows the unmodified raw transcript and can replay the audio behind a particular spot answers the question directly; without one, the only method is proofreading every figure.",
    },
    {
      question: "Is any dictation app more accurate than the others?",
      answer: "Nobody can answer that from public evidence. There is no shared published benchmark with identical hardware, recordings and post-processing covering these apps, so any accuracy ranking, including one in our favour, would be unfounded.",
    },
  ],
  sources: [localSourceEn, ...recognitionLimitsEn, appleGuideEn[0]],
};

export const comparisons: Record<ComparisonSlug, ComparisonPageData> = {
  "mac-diktierfunktion": macDictation,
  "wispr-flow-alternative": wispr,
  "superwhisper-alternative": superwhisper,
  "sprecho-alternative": sprecho,
  "voiceink-vs-witness": voiceInk,
  "macwhisper-alternative": macwhisper,
  "diktiersoftware-mac-dsgvo": dsgvo,
  "ki-spracherkennung": kiSpracherkennung,
};

export const englishComparisons: Record<EnglishComparisonSlug, ComparisonPageData> = {
  "wispr-flow-alternatives": wisprFlowAlternatives,
  "mac-dictation": macDictationGuide,
  "dictation-missed-words": missedWords,
};

/** Every page in one locale, in footer order. */
export function comparisonsIn(locale: ComparisonLocale): ComparisonPageData[] {
  return locale === "de"
    ? comparisonSlugs.map((slug) => comparisons[slug])
    : englishComparisonSlugs.map((slug) => englishComparisons[slug]);
}

/** Every indexable comparison path, German first. The sitemap and the tests read this. */
export function comparisonPaths(): string[] {
  return [...comparisonsIn("de"), ...comparisonsIn("en")].map((entry) => entry.path);
}

/** The English page at this path, for the dynamic `/en/compare` and `/en/guides` routes. */
export function englishComparisonAt(path: string): ComparisonPageData | undefined {
  return comparisonsIn("en").find((entry) => entry.path === path);
}
