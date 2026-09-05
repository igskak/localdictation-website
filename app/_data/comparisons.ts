export const comparisonSlugs = [
  "wispr-flow-alternative",
  "superwhisper-alternative",
  "sprecho-alternative",
  "voiceink-vs-witness",
  "macwhisper-alternative",
  "diktiersoftware-mac-dsgvo",
] as const;

export type ComparisonSlug = (typeof comparisonSlugs)[number];

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

export type ComparisonPageData = {
  slug: ComparisonSlug;
  path: `/vergleich/${ComparisonSlug}`;
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

export const comparisonUpdatedIso = "2026-08-18";
export const comparisonUpdatedLabel = "18. August 2026";

const localSource: ComparisonSource = {
  id: "local-product",
  title: "Witness Produktseite und Produktstatus",
  publisher: "Witness",
  url: "/",
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
    title: "Understanding Privacy Mode and Cloud Sync",
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

const wispr: ComparisonPageData = {
  slug: "wispr-flow-alternative",
  path: "/vergleich/wispr-flow-alternative",
  eyebrow: "Wispr-Flow-Alternative",
  title: "Witness oder Wispr Flow? Lokalität ist die eigentliche Entscheidung",
  metaTitle: "Wispr-Flow-Alternative für den Mac | Witness",
  description:
    "Wispr Flow und Witness im sachlichen Vergleich: Verarbeitung, Sprachen, Prüfung, Konto und Preis — mit offiziellen Quellen, Stand August 2026.",
  directAnswer: {
    text: "Die kurze Antwort: Witness ist die passendere Wispr-Flow-Alternative, wenn Diktatinhalte den Mac nicht verlassen sollen und du Zahlen, Namen oder Verneinungen vor dem Einfügen prüfen möchtest. Wispr Flow passt besser, wenn du dieselbe cloudbasierte Diktieroberfläche auf Mac, Windows, iPhone und Android sowie automatische Erkennung aus mehr als 100 Sprachen suchst.",
    sources: ["wispr-security", "wispr-languages", "local-product"],
  },
  table: {
    caption: "Die wichtigsten Unterschiede auf einen Blick",
    headers: ["Kriterium", "Witness", "Wispr Flow"],
    rows: [
      ["Inhaltsverarbeitung", "Lokal auf Apple Silicon", "Cloud-SaaS; Verarbeitung und Speicherung in den USA"],
      ["Plattformen", "macOS 14.4+, Apple Silicon", "macOS, Windows, iOS und Android"],
      ["Sprachwahl", "Feste Mischprofile, etwa DE + EN", "100+ Sprachen; Erkennung zu Sitzungsbeginn"],
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
      title: "Mehr Sprachen oder kontrollierte Sprachprofile",
      paragraphs: [
        {
          text: "Flow dokumentiert mehr als 100 unterstützte Sprachen und erkennt die Sprache am Anfang einer Diktatsitzung. Die offizielle Hilfeseite weist zugleich darauf hin, dass ein Wechsel mitten im Satz dazu führen kann, dass das gesamte Segment in nur einer Sprache transkribiert wird. Wer viele Sprachen nutzt und Geräte wechselt, bekommt damit eine breite Abdeckung.",
          sources: ["wispr-languages"],
        },
        {
          text: "Witness begrenzt sich bewusst auf Deutsch, Englisch, Russisch und Ukrainisch. Statt freier Auto-Erkennung wählst du ein erwartbares Mischprofil wie DE + EN. Das ist enger, soll aber typische zweisprachige Arbeitssätze berechenbarer machen. Begriffe und Eigennamen lassen sich im lokalen Wörterbuch hinterlegen.",
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
          text: "Wispr Flow setzt laut Setup-Anleitung eine Anmeldung voraus. Die Preisseite nennt Free für $0 sowie Pro für $15 pro Nutzer und Monat bei monatlicher oder $12 pro Monat bei jährlicher Zahlung ($144 pro Jahr). Für die meisten neuen Desktop-Einzelkonten dokumentiert Wispr inzwischen den Free-Tarif statt einer allgemeinen zeitlich begrenzten Pro-Testphase. Privacy Mode und Cloud Sync sind getrennte Einstellungen: Die eine steuert die Nutzung für Training, die andere die serverseitige Speicherung.",
          sources: ["wispr-setup", "wispr-plans", "wispr-free", "wispr-privacy"],
        },
        {
          text: "Witness hat kein Produktkonto. Ein Lizenzschlüssel kommt per E-Mail; €99 als Einmalkauf oder €49 pro Jahr für zwei Macs. Wähle Wispr Flow für geräteübergreifenden Komfort und große Sprachbreite. Wähle Witness, wenn du einen Apple-Silicon-Mac nutzt, Inhaltsuploads vermeiden und erkannte Risikostellen selbst freigeben willst.",
          sources: ["local-product"],
        },
      ],
    },
  ],
  verdict: {
    text: "Fazit: Beide Produkte lösen schnelles Diktieren, aber mit gegensätzlichen Architekturen. Wispr Flow ist die breitere Cloud-Lösung. Witness ist die fokussierte Mac-Alternative für lokale Verarbeitung und explizite Kontrolle vor der Einfügung. Es gibt keinen veröffentlichten, vergleichbaren Benchmark, der eine allgemeine Genauigkeitsrangfolge rechtfertigt.",
    sources: ["wispr-security", "local-product"],
  },
  faqs: [
    {
      question: "Ist Wispr Flow eine Offline-Diktier-App?",
      answer: "Nein. Wispr Flow beschreibt sich offiziell als vollständig cloudbasierte SaaS-Lösung und nennt eine Internetverbindung als Voraussetzung.",
    },
    {
      question: "Unterstützt Wispr Flow Deutsch und Englisch in einem Satz?",
      answer: "Wispr Flow unterstützt beide Sprachen, dokumentiert aber, dass ein Wechsel mitten im Satz das gesamte Segment in nur einer Sprache ergeben kann.",
    },
    {
      question: "Ist Witness bereits allgemein verfügbar?",
      answer: "Ja. Version 0.1.0 ist signiert, von Apple notarisiert und über /download erhältlich. Preis und Funktionen auf dieser Seite beschreiben diese Version.",
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
    "Superwhisper und Witness im Quellenvergleich: lokale und Cloud-Modelle, Sprachen, Verifikation, Plattformen und Preise. Stand August 2026.",
  directAnswer: {
    text: "Die kurze Antwort: Superwhisper ist die passendere Wahl, wenn du viele lokale und optionale Cloud-Modelle, mehr als 100 Sprachen und mehrere Plattformen möchtest. Witness ist die fokussiertere Alternative für Apple-Silicon-Macs, wenn feste zweisprachige Profile und eine Prüfung riskanter Zahlen, Namen oder Verneinungen vor dem Einfügen wichtiger sind als Modellvielfalt.",
    sources: ["super-models", "super-download", "local-product"],
  },
  table: {
    caption: "Witness und Superwhisper im direkten Vergleich",
    headers: ["Kriterium", "Witness", "Superwhisper"],
    rows: [
      ["Verarbeitung", "Inhaltsverarbeitung lokal", "Vollständig lokal konfigurierbar; optionale Cloud-Modelle"],
      ["Plattformen", "Apple Silicon, macOS 14.4+", "macOS 13.3+, Windows 10+, iOS 18+"],
      ["Sprachen", "DE, EN, RU, UK; feste Mischprofile", "Lokale Whisper-Modelle für 100+ Sprachen"],
      ["Prüfung riskanter Stellen", "Vor Einfügung vorgesehen", "Nicht öffentlich dokumentiert"],
      ["Modellauswahl", "Bewusst kuratiert", "Lokale und Cloud-Sprach- sowie Textmodelle"],
      ["Preis", "€99 lebenslang oder €49/Jahr", "$8.49/Monat, $84.99/Jahr oder $249.99 lebenslang"],
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
          text: "Witness reduziert Auswahl zugunsten eines festen Ablaufs: Hotkey, sprechen, nur auffällige Fragmente prüfen, bestätigen, am Cursor einfügen. Unterstützt werden Deutsch, Englisch, Russisch und Ukrainisch. Für häufige Mischungen werden Profile wie DE + EN oder RU + UK gewählt, statt die Sprache bei jedem Segment frei zu erraten.",
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
          text: "Superwhisper dokumentiert automatische Spracherkennung und mögliche Fehlzuordnungen. Vokabular-Hinweise können helfen; kompatible Modelle können während einer Sitzung Sprachen wechseln. Feste Sprachpaar-Profile wie DE + EN, die den erwarteten Raum bewusst begrenzen, sind dort nicht öffentlich dokumentiert.",
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
      answer: "Witness konzentriert sich auf feste Sprachpaar-Profile und eine Prüfung bestimmter riskanter Fragmente vor der Einfügung, statt möglichst viele Modelle anzubieten.",
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
    "Sprecho und Witness sachlich verglichen: EU-Cloud, lokale Verarbeitung, Plattformen, Sprachen, Prüfung, AVV und Preis. Stand August 2026.",
  directAnswer: {
    text: "Die kurze Antwort: Witness ist die passendere Sprecho-Alternative, wenn Diktatinhalte vollständig auf einem Apple-Silicon-Mac verarbeitet werden sollen und du riskante Fragmente vor dem Einfügen kontrollieren möchtest. Sprecho passt besser, wenn du eine fertige Diktierlösung für Mac, Windows, Linux, iOS und Android, mehr als 100 Sprachen sowie Cloud-Synchronisation brauchst.",
    sources: ["sprecho-product", "sprecho-dpa", "local-product"],
  },
  table: {
    caption: "Die dokumentierten Unterschiede",
    headers: ["Kriterium", "Witness", "Sprecho"],
    rows: [
      ["Inhaltsverarbeitung", "Lokal auf dem Mac", "Cloud; Sprach- und Textverarbeitung auf Servern in Deutschland"],
      ["Plattformen", "Apple Silicon, macOS 14.4+", "Mac, Windows, Linux, iOS und Android"],
      ["Sprachen", "DE, EN, RU, UK; feste Mischprofile", "100+ Sprachen mit Auto-Erkennung"],
      ["Prüfung riskanter Stellen", "Vor Einfügung vorgesehen", "Nicht öffentlich dokumentiert"],
      ["Vertragliche Ebene", "Keine Inhaltsverarbeitung im Auftrag vorgesehen", "AVV wird angeboten"],
      ["Preis", "€99 lebenslang oder €49/Jahr", "Pro €10,99/Monat, jährlich €131,88 abgerechnet"],
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
          text: "Witness läuft nur auf Apple Silicon mit macOS 14.4 oder neuer. Unterstützt werden Deutsch, Englisch, Russisch und Ukrainisch. Feste Profile wie DE + EN oder UK + EN grenzen das erwartete Sprachpaar bewusst ein. Namen, Abkürzungen und Fachbegriffe landen in einem lokalen Wörterbuch; der fertige Text wird am Cursor eingesetzt.",
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
          text: "Sprecho Pro kostet laut offizieller Preisseite €10,99 pro Monat und wird mit €131,88 jährlich abgerechnet. Genannt wird eine 14-tägige Testphase ohne Kreditkarte. Witness plant €99 als Einmalkauf oder €49 jährlich für zwei Macs. Preise allein sind aber kein fairer Vergleich: Sprecho finanziert einen Cloud-Dienst über mehrere Plattformen; Witness setzt lokale Rechenleistung voraus.",
          sources: ["sprecho-pricing", "local-product"],
        },
      ],
    },
  ],
  verdict: {
    text: "Fazit: Sprecho ist die breitere EU-Cloud-Lösung mit dokumentiertem AVV und vielen Plattformen. Witness ist die engere Mac-Alternative ohne Übertragung von Diktatinhalten und mit vorgesehener Risikoprüfung. Welche Architektur passt, entscheidet der konkrete Workflow — nicht ein pauschales Datenschutzsiegel.",
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
    "VoiceInk und Witness sachlich verglichen: Open Source, lokale Modelle, Cloud-Optionen, Sprachprofile, Verifikation, Lizenzen und Preise.",
  directAnswer: {
    text: "Die kurze Antwort: VoiceInk ist die passendere Wahl, wenn du eine verfügbare Open-Source-App, freie Modellwahl und einen günstigen Einmalkauf suchst. Witness richtet sich an Menschen, die auf Deutsch und Englisch arbeiten und vor dem Einfügen bestimmte riskante Zahlen, Namen, Daten oder Verneinungen prüfen wollen. Beide Ansätze können Diktatinhalte lokal verarbeiten.",
    sources: ["voiceink-product", "voiceink-github", "voiceink-models", "local-product"],
  },
  table: {
    caption: "VoiceInk und Witness auf einen Blick",
    headers: ["Kriterium", "Witness", "VoiceInk"],
    rows: [
      ["Produktstatus", "Verfügbar, Version 0.1.0", "Verfügbar; Quellcode öffentlich"],
      ["Verarbeitung", "Inhalte lokal", "Lokale Modelle standardmäßig; optionale Cloud-Textverbesserung"],
      ["Sprachen", "DE, EN, RU, UK; feste Mischprofile", "Abhängig vom gewählten Sprachmodell"],
      ["Prüfung riskanter Stellen", "Vor Einfügung vorgesehen", "Nicht öffentlich dokumentiert"],
      ["Lizenz", "Kommerzielle App", "GPLv3-Quellcode; kommerzielle vorkompilierte App"],
      ["Preis", "€99 lebenslang oder €49/Jahr, zwei Macs", "$25 / $39 / $49 einmalig für ein / zwei / drei Macs"],
    ],
  },
  sections: [
    {
      title: "Beide können lokal arbeiten — mit einer wichtigen Option",
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
          text: "Witness ist ein kommerzielles Produkt, kein Open-Source-Projekt. Der Quellcode ist daher kein Kaufargument. Der Gegenwert soll in einem kuratierten, signierten Mac-Ablauf, klaren lokalen Datenschutzgrenzen, festen Sprachprofilen, Verifikation und direktem Support liegen. Wer Quellcode-Audit und Selbstbau priorisiert, sollte VoiceInk ernsthaft bevorzugen.",
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
          text: "Witness beschränkt sich auf Deutsch, Englisch, Russisch und Ukrainisch. Nutzer wählen feste Paare wie DE + EN oder RU + UK, bevor sie diktieren. Ziel ist nicht maximale Sprachzahl, sondern ein vorhersehbarer Raum für typische mehrsprachige Sätze. Namen, Abkürzungen und Fachvokabular werden pro Sprache lokal ergänzt.",
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
    text: "Fazit: VoiceInk ist eine starke, günstigere und bereits verfügbare lokale Option mit offenem Quellcode und großer Modellwahl. Witness sollte nur gewählt werden, wenn feste Mischprofile und die vorgesehene Vorabprüfung riskanter Fragmente den höheren Preis rechtfertigen.",
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
      answer: "Nicht allgemein. VoiceInk gewinnt bei Preis, Verfügbarkeit, Quelloffenheit und Modellwahl; Witness fokussiert feste Sprachpaare und Risikoprüfung vor dem Einfügen.",
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
  updatedIso: "2026-08-25",
  updatedLabel: "25. August 2026",
  directAnswer: {
    text: "Die kurze Antwort: MacWhisper und Witness lösen zwei verschiedene Aufgaben. MacWhisper ist in erster Linie eine Transkriptionsumgebung für Dateien, Meetings und Untertitel und bietet zusätzlich systemweites Diktat; es ist verfügbar, kostet €64 einmalig neben einer kostenlosen Version und erlaubt als persönliche Lizenz als Richtwert drei Geräte. Witness macht ausschließlich Diktat in andere Apps und richtet sich an Menschen, die auf Deutsch und Englisch arbeiten und riskante Zahlen, Namen, Daten oder Verneinungen vor dem Einfügen prüfen wollen. Wer Audiodateien transkribiert, bleibt bei MacWhisper besser aufgehoben.",
    sources: ["macwhisper-product", "macwhisper-licensing", "local-product"],
  },
  table: {
    caption: "MacWhisper und Witness auf einen Blick",
    headers: ["Kriterium", "Witness", "MacWhisper"],
    rows: [
      ["Schwerpunkt", "Diktat in andere Apps", "Transkription von Dateien, Meetings und Untertiteln; zusätzlich systemweites Diktat"],
      ["Produktstatus", "Verfügbar, Version 0.1.0", "Verfügbar"],
      ["Verarbeitung", "Inhalte lokal; keine Cloud-Option vorgesehen", "Lokale Modelle; optional Cloud-Anbieter wie OpenAI, Anthropic, xAI und Google Gemini"],
      ["Sprachen", "DE, EN, RU, UK; feste Mischprofile", "100 Sprachen laut Anbieter"],
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
          text: "Witness kann nichts davon und soll es auch nicht können. Es gibt keine Dateitranskription, keine Untertitel, keine Sprechererkennung und keinen Meeting-Mitschnitt. Das Produkt macht eine einzige Sache: Hotkey drücken, sprechen, Text erscheint an der Cursorposition in der App, in der du gerade bist. Wenn dein Alltag aus Aufnahmen besteht, die hinterher zu Text werden sollen, ist dieser Vergleich bereits entschieden — dann ist MacWhisper das richtige Werkzeug.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "Automatische Grammatikverbesserung — hier biegen die beiden auseinander",
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
          text: "Eine automatische Confidence- oder Risikomarkierung auf Fragmentebene ist in der geprüften öffentlichen MacWhisper-Produkt- und Support-Dokumentation nicht öffentlich dokumentiert. Das ist keine Aussage darüber, wie gut MacWhisper erkennt, und kein Genauigkeitsvergleich — es bedeutet nur, dass wir diese eine Funktion nicht als belegten Gleichstand eintragen können.",
          sources: ["macwhisper-product", "macwhisper-docs"],
        },
      ],
    },
    {
      title: "Lokal ist bei beiden der Standard — der Unterschied liegt in den Optionen",
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
      title: "Hundert Sprachen gegen vier",
      paragraphs: [
        {
          text: "MacWhisper nennt Unterstützung für 100 Sprachen. Das ist der größere Sprachraum, und für alles außerhalb von Deutsch, Englisch, Russisch und Ukrainisch ist die Frage damit beantwortet.",
          sources: ["macwhisper-product"],
        },
        {
          text: "Witness beschränkt sich auf vier Sprachen und feste Paare wie DE + EN oder RU + UK, die vor dem Diktat gewählt werden. Ziel ist nicht die größere Zahl, sondern ein vorhersehbarer Raum für Sätze, in denen zwei Sprachen vorkommen, plus ein lokales Wörterbuch für Namen und Fachbegriffe, das jedes Mal dieselbe Schreibweise einsetzt. Einen Genauigkeitsvergleich behaupten wir dabei nicht: Es gibt keinen gemeinsamen offiziellen Benchmark mit identischer Hardware, Aufnahme und Nachbearbeitung, der beide Apps belastbar ordnet.",
          sources: ["local-product"],
        },
      ],
    },
    {
      title: "Preis, Geräte und Hardware",
      paragraphs: [
        {
          text: "MacWhisper nennt eine dauerhaft kostenlose Version und MacWhisper Pro für €64 als Einmalkauf inklusive lebenslanger Updates. Die persönliche Lizenz ist laut Support für die eigenen Geräte gedacht, mit einem Richtwert von drei. Witness plant €99 lebenslang oder €49 jährlich für zwei Macs. MacWhisper ist damit günstiger, deckt mehr Geräte ab und lässt sich vorher kostenlos ausprobieren — beim reinen Preis-Leistungs-Vergleich gewinnt es deutlich.",
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
    text: "Fazit: MacWhisper ist die breitere, günstigere und bereits verfügbare App — für Dateitranskription, Meetings und Untertitel gibt es hier keinen Grund zu wechseln. Witness ist nur dann die passendere Wahl, wenn du den ganzen Tag in andere Apps diktierst, dabei Deutsch und Englisch mischst und willst, dass Zahlen und Namen vor dem Einfügen markiert statt geglättet werden.",
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
    "Mac-Diktiersoftware nach nachvollziehbaren Datenschutzkriterien vergleichen: lokal, EU-Cloud, US-Cloud, AVV, Konten und Inhaltsprüfung. Stand August 2026.",
  directAnswer: {
    text: "Die kurze Antwort: Für möglichst wenig Inhaltsübertragung sind vollständig lokal konfigurierte Lösungen wie Witness, VoiceInk oder Superwhisper naheliegend. Sprecho verarbeitet Audio und Transkripte in einer deutschen beziehungsweise EU-Cloud und bietet dafür einen AVV. Wispr Flow ist laut eigener Dokumentation eine US-gehostete Cloud-SaaS. Welche Option im konkreten Betrieb DSGVO-konform ist, bleibt eine rechtliche und organisatorische Einzelfallprüfung.",
    sources: ["local-product", "voiceink-product", "super-security", "sprecho-dpa", "wispr-security", "gdpr"],
  },
  table: {
    caption: "Architektur statt pauschaler Datenschutzsiegel",
    headers: ["Lösung", "Dokumentierter Verarbeitungsweg", "Wichtige Einordnung"],
    rows: [
      ["Witness", "Diktatinhalte lokal", "Verfügbar, Version 0.1.0; Risikoprüfung vor Einfügung"],
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
    text: "Fazit: Die beste Mac-Diktiersoftware für sensible Inhalte ist nicht automatisch die App mit dem stärksten DSGVO-Claim. Entscheidend sind der reale Datenfluss, optionale Cloud-Schalter, Verträge, organisatorische Regeln und der Umgang mit Erkennungsfehlern. Witness minimiert den Inhaltsdatenfluss und ist als signierte, von Apple notarisierte App verfügbar.",
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

export const comparisons: Record<ComparisonSlug, ComparisonPageData> = {
  "wispr-flow-alternative": wispr,
  "superwhisper-alternative": superwhisper,
  "sprecho-alternative": sprecho,
  "voiceink-vs-witness": voiceInk,
  "macwhisper-alternative": macwhisper,
  "diktiersoftware-mac-dsgvo": dsgvo,
};
