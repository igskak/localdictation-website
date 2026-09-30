import type { CitedCopy, ComparisonFaq, ComparisonSource } from "./comparisons";

// The hub answers "which dictation app for the Mac" in one table. Every competitor
// fact below was checked on the vendor's own page on the date here; the single
// comparisons carry the longer reasoning and their own dates. Witness is our
// product, so the table is alphabetical and says so. Since 30.09 the page argues
// for Witness (docs/seo/CONTENT_AGENT.md, "Подача"): the criteria are the ones
// its buyer cares about, and the verdict is our recommendation, not a ranking.

export const hubUpdatedIso = "2026-09-30";
export const hubUpdatedLabel = "30. September 2026";

export const hubTitle = "Diktier-Apps für den Mac 2026: sieben im Vergleich, und welche dir Fehler vor dem Einfügen zeigt";
export const hubMetaTitle = "Diktier-Apps für den Mac 2026 im Vergleich | Witness";
export const hubDescription =
  "Sieben Diktier-Apps für den Mac: lokal oder Cloud, Prüfung vor dem Einfügen, Abo oder Einmalkauf. Mit offiziellen Quellen, geprüft am 30.09.2026.";

export const hubSources: ComparisonSource[] = [
  {
    id: "local-product",
    title: "Witness Produktseite und Produktstatus",
    publisher: "Witness",
    url: "/",
  },
  {
    id: "apple-dictate",
    title: "Nachrichten und Dokumente auf dem Mac diktieren",
    publisher: "Apple",
    url: "https://support.apple.com/de-de/guide/mac-help/mh40584/mac",
  },
  {
    id: "macwhisper-product",
    title: "MacWhisper Produktseite, Funktionen und Preise",
    publisher: "MacWhisper",
    url: "https://www.macwhisper.com/",
  },
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
    id: "voiceink-product",
    title: "VoiceInk Produktseite und Preise",
    publisher: "VoiceInk",
    url: "https://tryvoiceink.com/",
  },
  {
    id: "wispr-plans",
    title: "Plans and pricing",
    publisher: "Wispr Flow",
    url: "https://wisprflow.ai/pricing",
  },
  {
    id: "wispr-security",
    title: "Security and Compliance FAQ",
    publisher: "Wispr Flow",
    url: "https://docs.wisprflow.ai/articles/3467817258-security-and-compliance-faq",
  },
];

export const hubDirectAnswer: CitedCopy = {
  text: "Wenn du am Mac Mails, Verträge oder Tickets diktierst, in denen eine falsche Summe oder ein verlorenes „nicht“ Folgen hat, empfehlen wir Witness: Es arbeitet lokal auf dem Mac, legt dir Zahlen, Datumsangaben, Namen und Verneinungen vor dem Einfügen mit dem Originalton vor und kostet einmal €99. Für kurze Notizen ohne Installation reicht die kostenlose Diktierfunktion von macOS. Wispr Flow und Sprecho sind Cloud-Dienste für viele Geräte, Superwhisper und VoiceInk transkribieren lokal, MacWhisper ist für Aufnahmen und Meetings gebaut. Eine Prüfung riskanter Stellen vor dem Einfügen ist bei diesen fünf Apps nicht öffentlich dokumentiert. Witness ist unser eigenes Produkt.",
  sources: ["local-product", "apple-dictate", "wispr-security", "sprecho-product", "super-security", "voiceink-product", "macwhisper-product"],
};

export type HubRow = {
  app: string;
  href: string;
  processing: string;
  check: string;
  platforms: string;
  free: string;
  price: string;
  sources: string[];
  own?: boolean;
};

export const hubTableHeaders = ["App", "Wo dein Diktat verarbeitet wird", "Prüfung vor dem Einfügen", "Plattformen", "Kostenlos nutzbar", "Bezahlpreis"] as const;

export const hubRows: HubRow[] = [
  {
    app: "macOS-Diktierfunktion",
    href: "/vergleich/mac-diktierfunktion",
    processing: "Allgemeine Textdiktate auf dem Mac, wenn die Tastatureinstellungen es anzeigen; sonst auf Siri-Servern",
    check: "Nicht eindeutige Wörter werden im Text blau unterstrichen",
    platforms: "In macOS enthalten",
    free: "Ja",
    price: "Keiner",
    sources: ["apple-dictate"],
  },
  {
    app: "MacWhisper",
    href: "/vergleich/macwhisper-alternative",
    processing: "Lokale Modelle; optional Cloud-Anbieter wie OpenAI, Anthropic und Google",
    check: "Nicht öffentlich dokumentiert",
    platforms: "macOS",
    free: "Dauerhaft kostenlose Version",
    price: "Pro €64 einmalig, lebenslange Updates",
    sources: ["macwhisper-product"],
  },
  {
    app: "Sprecho",
    href: "/vergleich/sprecho-alternative",
    processing: "Cloud; Sprachdaten laut Anbieter ausschließlich in Deutschland gespeichert",
    check: "Nicht öffentlich dokumentiert",
    platforms: "macOS, Windows, Linux, iOS, Android",
    free: "Free mit 2.000 Wörtern pro Woche; 14 Tage Pro ohne Kreditkarte",
    price: "Pro €12,99/Monat oder €10,99/Monat bei jährlicher Zahlung (€131,88)",
    sources: ["sprecho-product", "sprecho-pricing"],
  },
  {
    app: "Superwhisper",
    href: "/vergleich/superwhisper-alternative",
    processing: "Vollständig lokal konfigurierbar; optional Cloud-Modelle",
    check: "Nicht öffentlich dokumentiert",
    platforms: "Mac, Windows, iPhone, Android",
    free: "Unbegrenzt mit lokalen Whisper-Modellen, bis zu zwei Modi",
    price: "Pro $8.49/Monat, $84.99/Jahr oder $249.99 einmalig",
    sources: ["super-security", "super-pro"],
  },
  {
    app: "VoiceInk",
    href: "/vergleich/voiceink-vs-witness",
    processing: "Transkription lokal; optionale Cloud-Verbesserung überträgt nur Text",
    check: "Nicht öffentlich dokumentiert",
    platforms: "Apple Silicon, macOS 14.4+",
    free: "Kein Gratis-Tarif; 14 Tage Geld-zurück",
    price: "$25 / $39 / $49 einmalig für 1 / 2 / 3 Macs",
    sources: ["voiceink-product"],
  },
  {
    app: "Wispr Flow",
    href: "/vergleich/wispr-flow-alternative",
    processing: "Cloud-Dienst; Verarbeitung und Speicherung in den USA",
    check: "Nicht öffentlich dokumentiert",
    platforms: "Mac, Windows, iOS, Android",
    free: "Free mit 2.000 Wörtern pro Woche am Desktop",
    price: "Pro $15/Monat oder $12/Monat bei jährlicher Zahlung",
    sources: ["wispr-security", "wispr-plans"],
  },
  {
    app: "Witness",
    href: "/",
    processing: "Immer lokal auf dem Mac, ohne Cloud-Stufe für Inhalte",
    check: "Zahlen, Datumsangaben, Namen, Verneinungen und Wörterbuchbegriffe markiert, mit Roh-Transkript und Originalton; eingefügt wird nach deiner Bestätigung",
    platforms: "Apple Silicon, macOS 14.4+",
    free: "13 Tage voller Funktionsumfang, ohne Kreditkarte",
    price: "€99 einmalig oder €49/Jahr, zwei Macs",
    sources: ["local-product"],
    own: true,
  },
];

export type HubSection = {
  title: string;
  paragraphs: CitedCopy[];
  link?: { href: string; label: string };
  cta?: string;
};

export const hubCtaHref = "/danke?download=auto";

export const hubSections: HubSection[] = [
  {
    title: "Ein Tippfehler fällt auf. Eine falsche Zahl nicht.",
    paragraphs: [
      {
        text: "Ein falsch erkanntes Füllwort merkst du beim Lesen. Ein falscher Betrag, eine falsche Frist oder ein verlorenes „nicht“ lesen sich dagegen flüssig: Aus 14.000 € werden 40.000 €, aus „nicht zustimmen“ wird „zustimmen“. Beim Korrekturlesen rutscht so etwas durch, weil nichts falsch aussieht.",
        sources: ["local-product"],
      },
      {
        text: "Witness setzt genau davor an. Zahlen, Datumsangaben, Eigennamen, Verneinungen und Begriffe aus deinem Wörterbuch erscheinen vor dem Einfügen in einer Prüfzeile, daneben das Roh-Transkript und der kurze Originalton. Ohne offene Prüfung landet der Text direkt am Cursor, mit Prüfung erst nach deiner Bestätigung.",
        sources: ["local-product"],
      },
      {
        text: "Die Diktierfunktion von macOS unterstreicht nicht eindeutige Wörter blau, nachdem sie im Text stehen; ein Klick zeigt Alternativen. Bei MacWhisper, Sprecho, Superwhisper, VoiceInk und Wispr Flow ist eine Markierung riskanter Stellen vor dem Einfügen nicht öffentlich dokumentiert. Für dich heißt das: Dort liest du jeden diktierten Betrag selbst gegen, bevor die Mail rausgeht. Über die Erkennungsgenauigkeit sagt das nichts, einen gemeinsamen, veröffentlichten Test aller Apps gibt es nicht.",
        sources: ["apple-dictate", "macwhisper-product", "sprecho-product", "super-security", "voiceink-product", "wispr-security"],
      },
    ],
    cta: "Probier es mit deinem nächsten Angebot aus: 13 Tage kostenlos, ohne Kreditkarte",
  },
  {
    title: "Darf dein Diktat den Mac verlassen?",
    paragraphs: [
      {
        text: "Wispr Flow ist nach eigener Beschreibung ein Cloud-Dienst, der Daten in den USA verarbeitet und speichert. Diktierst du dort eine Mail an einen Mandanten, wird ihr Inhalt auf Servern in den USA verarbeitet. Sprecho speichert Sprachdaten laut eigener Seite ausschließlich in Deutschland, bleibt aber eine Cloud: Das Audio wird zur Verarbeitung übertragen.",
        sources: ["wispr-security", "sprecho-product"],
      },
      {
        text: "MacWhisper, Superwhisper und VoiceInk transkribieren lokal und bieten jeweils optionale Cloud-Stufen an: Cloud-Anbieter bei MacWhisper, Cloud-Modelle bei Superwhisper, eine Textverbesserung bei VoiceInk. Wohin dein Text geht, hängt dort an der Einstellung, die gerade aktiv ist.",
        sources: ["macwhisper-product", "super-security", "voiceink-product"],
      },
      {
        text: "Witness hat für Inhalte keine Cloud-Stufe, die man versehentlich einschalten kann. Audio, Transkripte, Wörterbuch und Inhalte anderer Apps werden nie übertragen; Netzwerk braucht die App für das Spracherkennungsmodell, den Lizenzschlüssel und Updates. Für Diktatinhalte brauchst du deshalb keinen AVV, und im Zug diktierst du mit WLAN aus weiter.",
        sources: ["local-product"],
      },
    ],
    link: { href: "/vergleich/diktiersoftware-mac-dsgvo", label: "Diktiersoftware und DSGVO: Checkliste" },
    cta: "Witness 13 Tage lokal testen, ohne Konto und ohne Kreditkarte",
  },
  {
    title: "Deutsch und Englisch in einem Diktat",
    paragraphs: [
      {
        text: "Wer im Job zwischen Deutsch und Englisch wechselt, diktiert selten sauber in einer Sprache. In Witness kreuzt du an, welche Sprachen du sprichst, statt sie raten zu lassen. Sieht ein Wort nach einer anderen deiner Sprachen aus, landet es vor dem Einfügen in der Prüfzeile. Deutsch, Englisch, Russisch und Ukrainisch sind end-to-end gemessen, 96 weitere Sprachen werden erkannt.",
        sources: ["local-product"],
      },
      {
        text: "Namen von Kunden, Produkten und Abkürzungen schreibst du einmal ins eigene Wörterbuch, pro Sprache. Danach stehen sie so im Text, wie du sie brauchst, und sind beim Prüfen markiert.",
        sources: ["local-product"],
      },
    ],
  },
  {
    title: "Einmal zahlen statt jedes Jahr",
    paragraphs: [
      {
        text: "Wispr Flow Pro kostet $12 im Monat bei jährlicher Zahlung, also $144 im Jahr, Sprecho Pro €131,88 im Jahr. Witness kostet nach 13 Testtagen €99 einmalig für Version 1 und ihre Updates, auf zwei Macs. Die €99 liegen unter einem Jahr Sprecho Pro, und ab dem zweiten Jahr zahlst du nichts mehr.",
        sources: ["wispr-plans", "sprecho-pricing", "local-product"],
      },
      {
        text: "Günstigere Einmalkäufe gibt es: VoiceInk ab $25 für einen Mac, MacWhisper Pro für €64. Dauerhaft gratis sind die Diktierfunktion von macOS, die Basisversion von MacWhisper und Superwhisper mit lokalen Whisper-Modellen. Der Aufpreis bei Witness bezahlt die Prüfung vor dem Einfügen, die dort nicht öffentlich dokumentiert ist.",
        sources: ["voiceink-product", "macwhisper-product", "super-pro", "apple-dictate", "local-product"],
      },
    ],
  },
  {
    title: "Drei Arbeitstage, in denen Witness passt",
    paragraphs: [
      {
        text: "Die Anwältin diktiert eine Fristverlängerung bis zum 14. Oktober und einen Streitwert von 18.500 €. Beide Stellen stehen in der Prüfzeile, sie hört den Originalton an, bestätigt, und die Mail geht mit den richtigen Zahlen raus.",
        sources: ["local-product"],
      },
      {
        text: "Der Berater schreibt einem Kunden in Zürich auf Deutsch und setzt englische Begriffe aus dem Projekt dazwischen. Er hat beide Sprachen angekreuzt, und was nach der jeweils anderen klingt, sieht er vor dem Einfügen.",
        sources: ["local-product"],
      },
      {
        text: "Die Entwicklerin diktiert ein Ticket mit Klassennamen aus dem Code. Die Namen stehen in ihrem Wörterbuch und landen so im Ticket, wie sie im Repository heißen.",
        sources: ["local-product"],
      },
    ],
    cta: "Deinen eigenen Arbeitstag 13 Tage kostenlos ausprobieren",
  },
];

export const hubVerdict: CitedCopy = {
  text: "Fazit: Wenn du am Mac diktierst und dich darauf verlassen musst, dass Zahlen, Namen und Verneinungen stimmen, ist Witness unsere Empfehlung. Unter den sieben Apps ist sie die einzige, bei der eine Prüfung riskanter Stellen vor dem Einfügen öffentlich dokumentiert ist, der Inhalt verlässt den Mac nie, und du zahlst einmal statt jedes Jahr. Teste es 13 Tage mit deinen eigenen Mails und Tickets.",
  sources: ["local-product", "apple-dictate", "macwhisper-product", "sprecho-product", "super-security", "voiceink-product", "wispr-security"],
};

export const hubNotFor: CitedCopy = {
  text: "Nicht das Richtige ist Witness, wenn du auf Windows, Linux oder dem Handy diktierst, einen Intel-Mac hast oder vor allem Aufnahmen und Meetings in Text umwandelst: Witness macht nur Diktat an den Cursor auf Apple-Silicon-Macs.",
  sources: ["local-product"],
};

export const hubFaqs: ComparisonFaq[] = [
  {
    question: "Welche Diktier-App für den Mac prüft Zahlen und Namen vor dem Einfügen?",
    answer: "Witness markiert Zahlen, Datumsangaben, Eigennamen, Verneinungen und Wörterbuchbegriffe vor dem Einfügen und zeigt dazu Roh-Transkript und Originalton. Die Diktierfunktion von macOS unterstreicht nicht eindeutige Wörter blau, nachdem sie im Text stehen. Bei MacWhisper, Sprecho, Superwhisper, VoiceInk und Wispr Flow ist eine solche Prüfung nicht öffentlich dokumentiert.",
  },
  {
    question: "Welche Diktier-App für den Mac ist kostenlos?",
    answer: "Die Diktierfunktion von macOS ist eingebaut und kostenlos. MacWhisper hat eine dauerhaft kostenlose Version, Superwhisper erlaubt unbegrenztes Diktat mit lokalen Whisper-Modellen. Wispr Flow und Sprecho bieten Free-Tarife mit 2.000 Wörtern pro Woche. Witness kannst du 13 Tage mit vollem Funktionsumfang und ohne Kreditkarte testen.",
  },
  {
    question: "Welche Diktier-Apps funktionieren ohne Internet?",
    answer: "Lokal transkribieren MacWhisper, Superwhisper in lokaler Konfiguration, VoiceInk und Witness. Die macOS-Diktierfunktion zeigt in den Tastatureinstellungen an, ob sie auf dem Gerät arbeitet. Wispr Flow und Sprecho sind Cloud-Dienste. Witness braucht einmal eine Verbindung für das Spracherkennungsmodell und einmal für den Lizenzschlüssel, danach diktierst du auch offline.",
  },
  {
    question: "Gibt es eine Diktier-App mit Servern in Deutschland?",
    answer: "Sprecho gibt an, Sprachdaten ausschließlich in Deutschland zu speichern. Das bleibt eine Cloud-Verarbeitung. Wer gar keine Inhalte übertragen will, braucht eine lokal arbeitende App wie Witness, die für Diktatinhalte keinen Server nutzt.",
  },
  {
    question: "Welche Diktier-App ist am genauesten?",
    answer: "Dafür gibt es keinen gemeinsamen, veröffentlichten Test mit gleicher Hardware und gleichen Aufnahmen, jede Rangliste nach Genauigkeit wäre geraten. Jede Spracherkennung irrt manchmal. Entscheidend ist, ob du den Fehler siehst, bevor er im Text steht: Genau dafür ist Witness gebaut.",
  },
];
