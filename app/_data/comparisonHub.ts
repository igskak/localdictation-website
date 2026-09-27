import type { CitedCopy, ComparisonFaq, ComparisonSource } from "./comparisons";

// The hub answers "which dictation app for the Mac" in one table. Every competitor
// fact below was checked on the vendor's own page on the date here; the single
// comparisons carry the longer reasoning and their own dates. Witness is our
// product, so the table is alphabetical and says so.

export const hubUpdatedIso = "2026-09-27";
export const hubUpdatedLabel = "27. September 2026";

export const hubTitle = "Diktier-Apps für den Mac 2026: sieben Wege von Sprache zu Text im Vergleich";
export const hubMetaTitle = "Diktier-Apps für den Mac 2026 im Vergleich | Witness";
export const hubDescription =
  "Sieben Diktier-Apps für den Mac in einer Tabelle: lokal oder Cloud, Plattformen, Gratis-Einstieg und Preis. Offizielle Quellen, geprüft am 27.09.2026.";

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
  text: "Für Notizen und kurze Nachrichten reicht die eingebaute Diktierfunktion von macOS, sie kostet nichts. Wer Audiodateien und Meetings in Text umwandelt, ist bei MacWhisper richtig. Wispr Flow und Sprecho sind Cloud-Dienste für viele Geräte, Sprecho mit Speicherung in Deutschland. Superwhisper und VoiceInk transkribieren lokal, Superwhisper mit großer Modellauswahl, VoiceInk als günstiger Einmalkauf mit Quellcode auf GitHub. Witness, unser eigenes Produkt, arbeitet lokal und legt dir Zahlen, Namen und Verneinungen vor dem Einfügen zur Prüfung vor.",
  sources: ["apple-dictate", "macwhisper-product", "wispr-security", "sprecho-product", "super-security", "voiceink-product", "local-product"],
};

export type HubRow = {
  app: string;
  href: string;
  processing: string;
  platforms: string;
  free: string;
  price: string;
  fit: string;
  sources: string[];
  own?: boolean;
};

export const hubTableHeaders = ["App", "Verarbeitung der Inhalte", "Plattformen", "Kostenlos nutzbar", "Bezahlpreis", "Passt, wenn du"] as const;

export const hubRows: HubRow[] = [
  {
    app: "macOS-Diktierfunktion",
    href: "/vergleich/mac-diktierfunktion",
    processing: "Allgemeine Textdiktate auf dem Mac, wenn die Tastatureinstellungen es anzeigen; sonst auf Apple-Servern",
    platforms: "In macOS enthalten",
    free: "Ja",
    price: "Keiner",
    fit: "kurze Texte diktierst und nichts installieren willst",
    sources: ["apple-dictate"],
  },
  {
    app: "MacWhisper",
    href: "/vergleich/macwhisper-alternative",
    processing: "Lokale Modelle; optional Cloud-Anbieter wie OpenAI, Anthropic und Google",
    platforms: "macOS",
    free: "Dauerhaft kostenlose Version",
    price: "Pro €64 einmalig, lebenslange Updates",
    fit: "vor allem Aufnahmen, Meetings und Untertitel in Text umwandelst",
    sources: ["macwhisper-product"],
  },
  {
    app: "Sprecho",
    href: "/vergleich/sprecho-alternative",
    processing: "Cloud; Sprachdaten laut Anbieter ausschließlich in Deutschland gespeichert",
    platforms: "macOS, Windows, Linux, iOS, Android",
    free: "Free mit 2.000 Wörtern pro Woche; 14 Tage Test ohne Kreditkarte",
    price: "Pro €12,99/Monat oder €10,99/Monat bei jährlicher Zahlung (€131,88)",
    fit: "eine EU-Cloud auf vielen Geräten suchst",
    sources: ["sprecho-product", "sprecho-pricing"],
  },
  {
    app: "Superwhisper",
    href: "/vergleich/superwhisper-alternative",
    processing: "Vollständig lokal konfigurierbar; optional Cloud-Modelle",
    platforms: "Mac, Windows, iPhone, Android",
    free: "Unbegrenzt mit lokalen Whisper-Modellen, bis zu zwei Modi",
    price: "Pro $8.49/Monat, $84.99/Jahr oder $249.99 einmalig",
    fit: "Modelle selbst wählen und auf mehreren Plattformen diktieren willst",
    sources: ["super-security", "super-pro"],
  },
  {
    app: "VoiceInk",
    href: "/vergleich/voiceink-vs-witness",
    processing: "Transkription lokal; optionale Cloud-Verbesserung überträgt nur Text",
    platforms: "Apple Silicon, macOS 14.4+",
    free: "Kein Gratis-Tarif; 14 Tage Geld-zurück",
    price: "$25 / $39 / $49 einmalig für 1 / 2 / 3 Macs",
    fit: "offenen Quellcode und einen günstigen Einmalkauf willst",
    sources: ["voiceink-product"],
  },
  {
    app: "Wispr Flow",
    href: "/vergleich/wispr-flow-alternative",
    processing: "Cloud-Dienst; Verarbeitung und Speicherung in den USA",
    platforms: "Mac, Windows, iOS, Android",
    free: "Free mit 2.000 Wörtern pro Woche am Desktop",
    price: "Pro $15/Monat oder $12/Monat bei jährlicher Zahlung",
    fit: "dieselbe App auf allen Geräten nutzen willst",
    sources: ["wispr-security", "wispr-plans"],
  },
  {
    app: "Witness",
    href: "/",
    processing: "Inhalte immer lokal auf dem Mac",
    platforms: "Apple Silicon, macOS 14.4+",
    free: "13 Tage voller Funktionsumfang, ohne Kreditkarte",
    price: "€99 lebenslang oder €49/Jahr, zwei Macs",
    fit: "Zahlen, Namen und Verneinungen vor dem Einfügen prüfen willst",
    sources: ["local-product"],
    own: true,
  },
];

export type HubSection = {
  title: string;
  paragraphs: CitedCopy[];
  link?: { href: string; label: string };
};

export const hubSections: HubSection[] = [
  {
    title: "Diktierst du in andere Apps oder wandelst du Aufnahmen um?",
    paragraphs: [
      {
        text: "Das trennt die Liste am schnellsten. MacWhisper ist in erster Linie eine Transkriptionsumgebung: Dateien, Mitschnitte von Zoom- oder Teams-Gesprächen, Untertitel und Export in viele Formate. Systemweites Diktat gibt es zusätzlich, in Pro mit automatischer Grammatikverbesserung und KI-Prompts.",
        sources: ["macwhisper-product"],
      },
      {
        text: "Witness kann keine Dateien transkribieren und keine Meetings mitschneiden. Es macht nur Diktat an die Cursorposition der App, in der du gerade schreibst. Wenn dein Alltag aus Aufnahmen besteht, nimm MacWhisper.",
        sources: ["local-product"],
      },
    ],
    link: { href: "/vergleich/macwhisper-alternative", label: "MacWhisper und Witness im Detail" },
  },
  {
    title: "Darf dein Diktat den Mac verlassen?",
    paragraphs: [
      {
        text: "Wispr Flow beschreibt sich als Cloud-Dienst, der Daten in den USA verarbeitet und speichert. Sprecho ist ebenfalls eine Cloud, speichert Sprachdaten laut eigener Seite aber ausschließlich in Deutschland. Für beide wird Audio zur Verarbeitung übertragen.",
        sources: ["wispr-security", "sprecho-product"],
      },
      {
        text: "Lokal transkribieren MacWhisper, Superwhisper und VoiceInk, jeweils mit optionalen Cloud-Stufen: Cloud-Anbieter bei MacWhisper, Cloud-Modelle bei Superwhisper, eine Textverbesserung bei VoiceInk. Welcher Weg gilt, entscheidet die Einstellung. Die Diktierfunktion von macOS zeigt in den Tastatureinstellungen an, ob sie auf dem Gerät arbeitet. Witness hat keine Cloud-Stufe für Inhalte; Netzwerk braucht es für das Modell, den Lizenzschlüssel und Updates.",
        sources: ["macwhisper-product", "super-security", "voiceink-product", "apple-dictate", "local-product"],
      },
    ],
    link: { href: "/vergleich/diktiersoftware-mac-dsgvo", label: "Diktiersoftware und DSGVO: Checkliste" },
  },
  {
    title: "Abo, Einmalkauf oder gratis?",
    paragraphs: [
      {
        text: "Gratis bleiben die Diktierfunktion von macOS und die kostenlose Version von MacWhisper. Superwhisper erlaubt unbegrenztes Diktat mit lokalen Whisper-Modellen ohne Bezahlung. Wispr Flow und Sprecho haben Free-Tarife mit je 2.000 Wörtern pro Woche.",
        sources: ["apple-dictate", "macwhisper-product", "super-pro", "wispr-plans", "sprecho-pricing"],
      },
      {
        text: "Als Einmalkauf gibt es MacWhisper Pro für €64, VoiceInk ab $25 für einen Mac und Superwhisper Pro für $249.99. Wispr Flow und Sprecho rechnen monatlich oder jährlich ab. Witness kostet nach 13 Testtagen €99 einmalig oder €49 im Jahr, jeweils für zwei Macs. Beim reinen Preis ist Witness nicht die günstigste Wahl.",
        sources: ["macwhisper-product", "voiceink-product", "super-pro", "wispr-plans", "sprecho-pricing", "local-product"],
      },
    ],
  },
  {
    title: "Was passiert mit unsicheren Stellen?",
    paragraphs: [
      {
        text: "Die Diktierfunktion von macOS schreibt direkt in den Text und unterstreicht nicht eindeutige Wörter blau; ein Klick zeigt Alternativen. Witness setzt vor dem Einfügen an: Zahlen, Datumsangaben, Eigennamen, Verneinungen und Wörterbuchbegriffe werden markiert, daneben stehen das Rohtranskript und der kurze Originalton. Eingefügt wird erst nach deiner Bestätigung.",
        sources: ["apple-dictate", "local-product"],
      },
      {
        text: "Eine vergleichbare Markierung riskanter Stellen vor dem Einfügen ist bei MacWhisper, Sprecho, Superwhisper, VoiceInk und Wispr Flow in den geprüften öffentlichen Unterlagen nicht öffentlich dokumentiert. Das sagt nichts über die Erkennungsgenauigkeit: Einen gemeinsamen, veröffentlichten Test aller Apps gibt es nicht, deshalb ordnen wir nach Datenweg, Geräten und Preis.",
        sources: ["macwhisper-product", "sprecho-product", "super-security", "voiceink-product", "wispr-security"],
      },
    ],
    link: { href: "/vergleich/mac-diktierfunktion", label: "Diktierfunktion am Mac einschalten und nutzen" },
  },
];

export const hubVerdict: CitedCopy = {
  text: "Fazit: Die beste Diktier-App für den Mac hängt an zwei Fragen, nicht an einer Rangliste. Soll Audio den Mac verlassen dürfen, und brauchst du dieselbe App auf Windows oder dem Handy? Cloud und viele Geräte: Wispr Flow oder Sprecho. Lokal und frei konfigurierbar: Superwhisper oder VoiceInk. Aufnahmen statt Diktat: MacWhisper. Lokal auf dem Mac, mit Prüfung von Zahlen und Namen vor dem Einfügen: Witness.",
  sources: ["wispr-security", "sprecho-product", "super-security", "voiceink-product", "macwhisper-product", "local-product"],
};

export const hubFaqs: ComparisonFaq[] = [
  {
    question: "Welche Diktier-App für den Mac ist kostenlos?",
    answer: "Die Diktierfunktion von macOS ist eingebaut und kostenlos. MacWhisper hat eine dauerhaft kostenlose Version, Superwhisper erlaubt unbegrenztes Diktat mit lokalen Whisper-Modellen. Wispr Flow und Sprecho bieten Free-Tarife mit 2.000 Wörtern pro Woche.",
  },
  {
    question: "Welche Diktier-Apps funktionieren ohne Internet?",
    answer: "Lokal transkribieren MacWhisper, Superwhisper in lokaler Konfiguration, VoiceInk und Witness. Die macOS-Diktierfunktion zeigt in den Tastatureinstellungen an, ob sie auf dem Gerät arbeitet. Wispr Flow und Sprecho sind Cloud-Dienste. Witness braucht einmal eine Verbindung für das Spracherkennungsmodell und einmal für den Lizenzschlüssel.",
  },
  {
    question: "Gibt es eine Diktier-App mit Servern in Deutschland?",
    answer: "Sprecho gibt an, Sprachdaten ausschließlich in Deutschland zu speichern. Das bleibt eine Cloud-Verarbeitung. Wer gar keine Inhalte übertragen will, braucht eine lokal arbeitende App.",
  },
  {
    question: "Welche Diktier-App ist am genauesten?",
    answer: "Dafür gibt es keinen gemeinsamen, veröffentlichten Test mit gleicher Hardware und gleichen Aufnahmen. Jede Rangliste nach Genauigkeit wäre geraten. Teste die zwei oder drei Kandidaten, die zu deinem Datenweg passen, mit deinen eigenen Texten.",
  },
];
