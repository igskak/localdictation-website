import type { Locale } from "../_lib/locale";

export type SpokenToken = { text: string; filler?: boolean; cap?: string; risk?: boolean };

export type LandingCopy = {
  nav: { label: string; href: string }[];
  hero: {
    eyebrow: string; title: string; titleMuted: string; lede: string;
    // The answer to "why not the Mac's own dictation", which most ad visitors
    // already have. builtInLink labels the sourced comparison; ru and uk have
    // no such page, so they carry no link.
    builtIn: string; builtInLink?: string;
    download: string; fine: string[];
  };
  demo: {
    windowTitle: string; send: string; to: string; toValue: string; subject: string; subjectValue: string;
    greeting: string; before: string; middle: string; after: string; amount: string;
    rawLabel: string; rawBefore: string; rawMiddle: string;
    state: string; checks: string; riskLabel: string; play: string; stageNote: string; prototypeNote: string;
    // Shown after a click on the hero animation, which readers take for the app.
    tryHint: string;
    // The hero animation (HeroDemo): a spoken sentence, cleaned, in a mail.
    // `filler` must be a word ConservativeCleanupService removes in that
    // language; `cap` is the word after cleanup capitalized it. One `risk`
    // token is the example spot the marker points at.
    heroSubject: string; listening: string;
    // The app's own strings for the marker's menu and the review panel
    // (MenuBarView, StatusPresentation, ReviewPresentation). The app speaks
    // German and English only, so ru and uk show the English UI.
    menuTitle: string; menuDetail: string; menuItem: string; reviewSummary: string; rawButton: string;
    spoken: SpokenToken[];
  };
  trust: string[];
  process: { kicker: string; title: string; lede: string; steps: { number: string; title: string; body: string }[]; link: string };
  verification: { kicker: string; title: string; lede: string; body: string; points: string[] };
  privacy: {
    kicker: string; title: string; lede: string; body: string; diagramAlt: string; ready: string;
    flow: string[]; processedHere: string; facts: { title: string; body: string }[]; disclosure: string; disclosureLink: string;
  };
  languages: {
    kicker: string; title: string; body: string; pills: string[]; dictionaryTitle: string;
    tags: { german: string; english: string; all: string }; note: string;
  };
  features: { kicker: string; title: string; lede: string; items: { symbol: string; title: string; body: string }[] };
  comparison: { kicker: string; title: string; tableLabel: string; caption: string; featureHead: string; rows: string[][]; note: string; sources: string; more: string; moreAll: string };
  pricing: {
    kicker: string; title: string; lede: string;
    lifetime: { name: string; badge: string; vat: string; body: string; bullets: string[] };
    annual: { name: string; vat: string; perMonth: string; body: string; bullets: string[] };
    download: string; footnote: string; compare: { cloud: string; product: string; asOf: string };
  };
  faq: { title: string; lede: string; items: { q: string; a: string }[] };
  final: { kicker: string; title: string; body: string; download: string; ready: string; preview: string };
  footer: { tagline: string; legalNav: string; agb: string; impressum: string; datenschutz: string; widerruf: string; lizenzen: string; kontakt: string };
  // Shown only to readers who came through a partner's link. {code}, {percent},
  // {date} and {annualFull} are filled in by PartnerOffer.
  partnerOffer: { title: string; body: string; remembered: string; buyLead: string; firstYear: string; ended: string };
  ui: { skip: string; theme: string; mainNav: string; languageNav: string; promises: string; productHunt: string };
};

const de: LandingCopy = {
  nav: [
    { label: "Produkt", href: "#funktion" },
    { label: "Verifikation", href: "#verifikation" },
    { label: "Datenschutz", href: "#datenschutz" },
    { label: "Preis", href: "#preis" },
  ],
  hero: {
    eyebrow: "Diktier-App für den Mac · Sprache zu Text, lokal",
    title: "Diktieren statt tippen.",
    titleMuted: "Mit Hinweis, wo ein zweiter Blick lohnt.",
    lede: "Drück ⌥ Space und sprich, gern Deutsch und Englisch gemischt. Der Text steht sofort am Cursor. Gibt es eine Stelle, auf die du achten solltest, zeigt Witness sie dir, und du hörst dir an, was du gesagt hast. Alles läuft auf deinem Mac.",
    builtIn: "Und die Diktierfunktion vom Mac? Sie unterstreicht nicht eindeutige Wörter blau, die Sprache wechselst du per Globus-Taste. Witness meldet sich, wenn sich ein Blick lohnt, und spielt dir den Originalton der Stelle vor.",
    builtInLink: "Vergleich mit Quellen",
    download: "Für Mac kostenlos testen",
    fine: ["13 Tage voller Funktionsumfang", "3 Tage ohne E-Mail, dann Schlüssel per Mail", "Apple Silicon", "macOS 14.4+", "keine Kreditkarte"],
  },
  trust: ["Sprachverarbeitung lokal", "Kein Benutzerkonto", "Kein AVV für Diktatinhalte", "Einmal zahlen"],
  demo: {
    windowTitle: "Neue Nachricht", send: "Senden", to: "An:", toValue: "Team Produkt", subject: "Betreff:", subjectValue: "Nächste Schritte",
    greeting: "Hallo zusammen,", before: "das Review mit ", middle: " ist für Donnerstag bestätigt. Das Budget liegt bei ", after: ". Bitte noch einmal prüfen.", amount: "14.000 €",
    rawLabel: "Roh-Transkript · nach dem Einfügen", rawBefore: "Review mit ", rawMiddle: " · Budget ",
    state: "Diktat prüfen", checks: "Stellen", riskLabel: "Bitte prüfen", play: "Original anhören",
    stageNote: "UI-Prototyp · ⌥ Space ist das änderbare Standardkürzel",
    tryHint: "Das ist eine Animation. Ausprobieren kannst du es in der App, 13 Tage kostenlos.",
    heroSubject: "Kurzes Update", listening: "Witness hört zu",
    menuTitle: "Prüfung empfohlen", menuDetail: "Einige Stellen im letzten Ergebnis solltest du prüfen. Der Text wurde bereits eingefügt.",
    menuItem: "1 markiertes Fragment prüfen", reviewSummary: "1 Fragment prüfen", rawButton: "Rohtranskript anzeigen",
    spoken: [
      { text: "Ähm", filler: true },
      { text: "kurzes", cap: "Kurzes" },
      { text: "Update" },
      { text: "aus" },
      { text: "dem" },
      { text: "Call." },
      { text: "Äh", filler: true },
      { text: "das", cap: "Das" },
      { text: "Meeting" },
      { text: "am" },
      { text: "Donnerstag", risk: true },
      { text: "hätte" },
      { text: "auch" },
      { text: "eine" },
      { text: "Mail" },
      { text: "sein" },
      { text: "können." },
    ],
    prototypeNote: "Animierte Darstellung der Oberfläche · keine Bildschirmaufnahme des Programms",
  },
  process: {
    kicker: "Ablauf",
    title: "In vier Schritten vom Gedanken zum Text",
    lede: "Ein kurzer, sichtbarer Ablauf. Kein Editor, in den du erst wechseln musst.",
    steps: [
      { number: "01", title: "Hotkey drücken", body: "Push-to-talk oder feststellbar, so wie du arbeitest." },
      { number: "02", title: "Sprechen, wie du sprichst", body: "Deutsch, Englisch oder beides gemischt. Fachbegriffe inklusive." },
      { number: "03", title: "Text steht am Cursor", body: "Direkt in der App, in der du schreibst. Blockiert eine App die Einfügung, übernimmt die Zwischenablage." },
      { number: "04", title: "Nachsehen, wenn Witness es meldet", body: "Gibt es eine Stelle, auf die du achten solltest, erscheint ein Hinweis in der Menüleiste. Ein Klick zeigt sie mit Originalton und Roh-Transkript." },
    ],
    link: "Und wenn etwas geraten wurde",
  },
  verification: {
    kicker: "Verifikation",
    title: "Du siehst, was du prüfen musst",
    lede: "Viele Diktier-Tools zeigen nicht ausdrücklich, wo du prüfen solltest. So kann aus 14.000 € unbemerkt 40.000 € werden.",
    body: "Witness markiert die Stellen, auf die du achten solltest, und ein Hinweis in der Menüleiste sagt dir, wann sich ein Blick lohnt. Dort hörst du den Originalton der Stelle und vergleichst mit dem Roh-Transkript.",
    points: ["Originalton", "Roh-Transkript", "Hinweis in der Menüleiste"],
  },
  privacy: {
    kicker: "Privatsphäre",
    title: "Offline heißt offline, und du kannst es nachprüfen",
    lede: "WLAN aus, weiterdiktieren. Die Sprachverarbeitung bleibt verfügbar.",
    body: "Audio und Text werden auf deinem Mac verarbeitet. Diktataudio bleibt während des aktuellen Diktats und der Prüfung im Arbeitsspeicher. Besprechungsnotizen werden lokal gespeichert, bis du sie löschst; Audio wird nicht gespeichert.",
    diagramAlt: "Schaubild: Sprache wird nur auf dem Mac verarbeitet",
    ready: "Offline bereit",
    flow: ["Sprache", "STT", "Text"],
    processedHere: "Verarbeitet auf diesem Mac",
    facts: [
      { title: "Kein Benutzerkonto", body: "E-Mail nur für den Lizenzschlüssel. Kein Profil, kein Passwort." },
      { title: "Kein AVV für Diktatinhalte", body: "Wir übertragen oder verarbeiten deine Sprachinhalte nicht in deinem Auftrag." },
      { title: "Netzwerkzugriffe offengelegt", body: "Modell-Downloads, Lizenzierung, Update-Anfragen und neun abschaltbare Ereignisse über Einrichtung und Test sind offengelegt." },
    ],
    disclosure: "Audio, Transkripte, Wörterbuch, Zwischenablage, Inhalte anderer Apps und markierte Risikofragmente werden nie übertragen. Modell-Downloads und Update-Anfragen erreichen die jeweiligen Datei-Hosts. Für einen Lizenzschlüssel sendet die App deine E-Mail-Adresse und eine Gerätekennung; beim Freigeben eines Macs sendet sie den Schlüssel zurück. Dazu kommen neun abschaltbare Ereignisse über Einrichtung und Test, jeweils mit App-Version, macOS-Version und einer zufälligen Installationskennung; drei tragen außerdem ein Wort aus einer festen Liste. Einstellungen → Privatsphäre schaltet diese Ereignisse ab. Empfänger und Speicherdauer stehen in der Datenschutzerklärung.",
    disclosureLink: "Die vollständige Datenschutzerklärung lesen",
  },
  languages: {
    kicker: "Sprachen",
    title: "Deutsch und Englisch in einem Satz",
    body: "Whisper unterstützt alle 100 Witness-Sprachen, Parakeet 25 europäische Sprachen. Du wählst deine Sprachen selbst. Deutsch, Englisch, Russisch und Ukrainisch bilden die end-to-end gemessene Gruppe; bei anderen Sprachen bleiben nicht kalibrierte Hinweise aus.",
    pills: ["Deutsch", "English", "Русский", "Українська", "+96 weitere"],
    dictionaryTitle: "Eigenes Wörterbuch",
    tags: { german: "Deutsch", english: "English", all: "Alle Sprachen" },
    note: "Namen, Produktbegriffe und Abkürzungen werden so geschrieben, wie du sie brauchst.",
  },
  features: {
    kicker: "Werkzeuge",
    title: "Klein im Menü. Groß im Alltag.",
    lede: "Nur Funktionen, die den Weg von der Sprache zum Text kürzer oder sicherer machen.",
    items: [
      { symbol: "Aa", title: "Eigenes Wörterbuch", body: "Pro Sprache. Namen, Abkürzungen, Fachbegriffe." },
      { symbol: "↺", title: "Roh-Transkript", body: "Ein Klick zurück zum unbearbeiteten Text." },
      { symbol: "⌘", title: "Für deine Arbeits-Apps", body: "Direkte Einfügung oder Zwischenablage-Fallback, wenn eine App sie blockiert." },
      { symbol: "◌", title: "Ohne Internet", body: "Im Zug, im Flugzeug, im Keller." },
      { symbol: "Ⅱ", title: "Zwei Macs", body: "Eine Lizenz für MacBook und iMac." },
      { symbol: "∞", title: "Einmal zahlen", body: "€99 lebenslang oder €49 im Jahr." },
    ],
  },
  comparison: {
    kicker: "Vergleich",
    title: "Warum nicht kostenlos, und warum nicht die Cloud",
    tableLabel: "Vergleichstabelle, horizontal scrollbar",
    caption: "Witness im Vergleich mit vier Diktier-Apps",
    featureHead: "Merkmal",
    rows: [
      ["Sprachverarbeitung", "lokal", "Cloud", "EU-Cloud", "lokal oder Cloud", "lokal"],
      ["Unsichere Stellen", "markiert, mit Originalton", "nicht öffentlich dokumentiert", "nicht öffentlich dokumentiert", "nicht öffentlich dokumentiert", "nicht öffentlich dokumentiert"],
      ["Sprachwahl", "angekreuzt, 4 gemessen", "100+ Sprachen", "Auto-Erkennung", "Sprache je Modus", "modellabhängig"],
      ["Kostenloser Einstieg", "13 Tage Vollversion", "Free, 2 000 Wörter/Woche", "14 Tage Vollversion", "dauerhafter Free-Tarif", "14 Tage Erstattungsfrist"],
      ["Bezahlpreis", "€99 einmalig / €49 Jahr", "$15 Monat / $144 Jahr", "€12,99 Monat / €10,99 bei Jahreszahlung", "$8.49 Monat / $84.99 Jahr / $249.99 Lifetime", "$25 / $39 / $49 einmalig"],
      ["Fertiger Mac-Download", "ja", "ja", "ja", "ja", "ja"],
    ],
    note: "Wenn du Whisper selbst einrichten möchtest, sind Open-Source-Tools eine gute Wahl. Witness ist für alle, die stattdessen direkt arbeiten wollen: fertig eingerichtet, mit eigener Sprachauswahl, Verifikation und erreichbarem Support.",
    sources: "Offizielle Quellen, geprüft am 01.10.2026:",
    more: "Ausführliche Vergleiche mit Quellen:",
    moreAll: "Alle Vergleiche",
  },
  pricing: {
    kicker: "Preis",
    title: "Einmal zahlen. Für immer nutzen.",
    lede: "Weniger tippen. Deine Sprachinhalte bleiben auf deinem Mac. Lifetime ist einmalig bezahlt; die Jahreslizenz wird jährlich abgerechnet.",
    lifetime: { name: "Lifetime", badge: "Empfohlen", vat: "Endpreis", body: "Einmal zahlen, dauerhaft nutzen.", bullets: ["2 Macs", "Alle Updates von Version 1"] },
    annual: { name: "Jahreslizenz", vat: "Endpreis / Jahr", perMonth: "€4,08 im Monat, jährlich abgerechnet", body: "Ein Jahr nutzen, danach kündbar.", bullets: ["2 Macs", "Alle Updates im Zeitraum"] },
    download: "Für Mac kostenlos testen",
    footnote: "13 Tage kostenlos, ohne Kreditkarte. Erst testen, dann entscheiden. Gekauft wird in der App nach dem Test. Verfügbare Zahlungsmethoden werden vor dem Checkout bestätigt.",
    compare: { cloud: "2 Jahre Cloud", product: "Witness Lifetime", asOf: "Stand: August 2026" },
  },
  faq: {
    title: "Klartext, bevor du installierst",
    lede: "Keine Fußnoten, die das Produktversprechen zurücknehmen.",
    items: [
      { q: "Funktioniert die Spracherkennung wirklich offline?", a: "Ja. Sobald das gewählte Sprachmodell geladen und lokal vorbereitet ist, laufen Erkennung und Textaufbereitung ohne Internet. Eine Verbindung brauchst du für Modell-Downloads, den Lizenzschlüssel und Update-Anfragen. Audio, Text, Wörterbuch und Inhalte anderer Apps werden dabei nicht übertragen." },
      { q: "Brauche ich als Kanzlei oder Praxis einen AVV?", a: "Für Diktatinhalte nicht: Witness überträgt oder verarbeitet sie nicht für uns. Für Hosting, Lizenzierung, Zahlung und Support gelten eigene Datenschutzpflichten; welche, mit Empfänger, Rechtsgrundlage und Speicherdauer, steht vollständig in der Datenschutzerklärung." },
      { q: "Was ist der Unterschied zur Diktierfunktion von macOS?", a: "Du wählst selbst, welche Sprachen vorkommen, statt sie erraten zu lassen, dazu ein eigenes Wörterbuch, konservative Textaufbereitung und die Markierung unsicherer Stellen." },
      { q: "Warum zahlen, wenn es kostenlose Open-Source-Tools gibt?", a: "Musst du nicht. Wenn du Modelle selbst einrichtest, sind sie eine gute Wahl. Du bekommst hier ein signiertes, von Apple notarisiertes Paket mit eigener Sprachauswahl, Verifikation und Support." },
      { q: "Welche Sprachen werden unterstützt?", a: "Whisper unterstützt alle 100 Witness-Sprachen, Parakeet 25 europäische Sprachen. Du wählst deine Sprachen selbst. Deutsch, Englisch, Russisch und Ukrainisch bilden die end-to-end gemessene Gruppe; bei anderen Sprachen bleiben nicht kalibrierte Hinweise aus." },
      { q: "Läuft es auf Intel-Macs?", a: "Nein. Witness unterstützt Apple Silicon ab macOS 14.4." },
      { q: "Was passiert nach den 13 Testtagen?", a: "Neue Diktate werden pausiert und die App zeigt die beiden Lizenzoptionen. Einstellungen und Lizenzaktivierung bleiben erreichbar." },
      { q: "Kann ich die Lizenz auf zwei Macs nutzen?", a: "Ja. Jede Lizenz lässt sich auf zwei persönlichen Macs aktivieren." },
      { q: "Lifetime oder Jahreslizenz: was ist sinnvoller?", a: "Wenn du regelmäßig diktierst, ist Lifetime günstiger: €99 einmal statt €49 jedes Jahr. Die Jahreslizenz ist der kleinere Einstieg." },
    ],
  },
  final: {
    kicker: "Loslegen",
    title: "Morgen früh schreibst du deine erste Mail, ohne sie zu tippen",
    body: "Lade Witness, drück den Hotkey, sprich. Die ersten drei Tage ab deiner ersten erfolgreichen Diktierung fragen nach nichts. Danach brauchst du einen E-Mail-Schlüssel, der zehn weitere Tage freischaltet, ohne Produktkonto und ohne Kreditkarte. Der Schlüssel kommt sofort in der App an; die Kopie per Mail ist nur für eine Neuinstallation. Audio wird nicht gespeichert. Besprechungsnotizen bleiben bis zur Löschung auf deinem Mac.",
    download: "Für Mac kostenlos testen",
    ready: "Apple Silicon · macOS 14.4+",
    preview: "Download derzeit nicht verfügbar · Apple Silicon · macOS 14.4+",
  },
  footer: {
    tagline: "Lokale Diktier-Software für Menschen, die Unsicherheit lieber sehen als übersehen.",
    legalNav: "Rechtliche Links", agb: "AGB", impressum: "Impressum", datenschutz: "Datenschutz", widerruf: "Widerruf", lizenzen: "Lizenzen", kontakt: "Kontakt",
  },
  partnerOffer: {
    title: "{percent} % Rabatt mit dem Code {code}",
    body: "Lade Witness zuerst herunter und teste es 13 Tage kostenlos. Wenn der Test endet und du kaufst, gib {code} auf der Bezahlseite ein. Gültig bis {date}.",
    remembered: "Dieser Browser merkt sich den Rabatt: Öffnest du die Bezahlseite auf diesem Mac aus der App, ist der Code schon eingetragen.",
    buyLead: "Schon getestet? Mit Rabatt kaufen:",
    firstYear: "im ersten Jahr, danach {annualFull}",
    ended: "Der Rabatt mit dem Code {code} ist am {date} abgelaufen.",
  },
  ui: { skip: "Zum Inhalt", theme: "Farbschema wechseln", mainNav: "Hauptnavigation", languageNav: "Sprache wählen", promises: "Produktversprechen", productHunt: "Witness für Mac auf Product Hunt ansehen" },
};

const en: LandingCopy = {
  nav: [
    { label: "Product", href: "#funktion" },
    { label: "Verification", href: "#verifikation" },
    { label: "Privacy", href: "#datenschutz" },
    { label: "Pricing", href: "#preis" },
  ],
  hero: {
    eyebrow: "Voice to text app for Mac · runs offline",
    title: "Dictate instead of typing.",
    titleMuted: "With a nudge where a second look pays off.",
    lede: "Press ⌥ Space and speak, English and German mixed if you like. The text lands at your cursor right away. If there is a spot worth checking, Witness points to it, and you can hear what you actually said. Everything runs on your Mac.",
    builtIn: "What about the Mac's built-in dictation? It underlines ambiguous words in blue, and you switch languages with the Globe key. Witness speaks up when a second look pays off and plays you the original audio of that spot.",
    builtInLink: "Comparison with sources",
    download: "Try free on your Mac",
    fine: ["13-day full trial", "3 days without an email, then a key by mail", "Apple silicon", "macOS 14.4+", "no credit card"],
  },
  trust: ["Speech processed locally", "No user account", "No DPA for dictation content", "Pay once"],
  demo: {
    windowTitle: "New Message", send: "Send", to: "To:", toValue: "Product Team", subject: "Subject:", subjectValue: "Next steps",
    greeting: "Hi everyone,", before: "the review with ", middle: " is confirmed for Thursday. The budget is ", after: ". Please double-check.", amount: "€14,000",
    rawLabel: "Raw transcript · after insertion", rawBefore: "Review with ", rawMiddle: " · budget ",
    state: "Review dictation", checks: "checks", riskLabel: "Check this", play: "Play original",
    stageNote: "UI prototype · ⌥ Space is the customisable default shortcut",
    tryHint: "This is an animation. You can try the real thing in the app, free for 13 days.",
    heroSubject: "Quick update", listening: "Witness is listening",
    menuTitle: "Worth a look", menuDetail: "Some fragments in the last result are worth checking. The text is already in place.",
    menuItem: "Check 1 flagged fragment", reviewSummary: "1 fragment worth checking", rawButton: "Show raw transcript",
    spoken: [
      { text: "Um", filler: true },
      { text: "quick", cap: "Quick" },
      { text: "update" },
      { text: "from" },
      { text: "the" },
      { text: "call." },
      { text: "Uh", filler: true },
      { text: "Thursday's", risk: true },
      { text: "meeting" },
      { text: "could" },
      { text: "have" },
      { text: "been" },
      { text: "an" },
      { text: "email." },
      { text: "Schönen" },
      { text: "Feierabend!" },
    ],
    prototypeNote: "Animated illustration of the interface · not a screen capture of the app",
  },
  process: {
    kicker: "Workflow",
    title: "From thought to text in four steps",
    lede: "A short, visible workflow. No separate editor to switch into.",
    steps: [
      { number: "01", title: "Press the hotkey", body: "Use push-to-talk or lock recording on, whichever suits your workflow." },
      { number: "02", title: "Speak naturally", body: "English, German, or both mixed together. Technical terms included." },
      { number: "03", title: "Text at your cursor", body: "Straight into the app you are writing in. If an app blocks insertion, the clipboard takes over." },
      { number: "04", title: "Look when Witness asks", body: "If there is a spot worth checking, a marker appears in the menu bar. One click shows it with the original audio and the raw transcript." },
    ],
    link: "And when the model had to guess",
  },
  verification: {
    kicker: "Verification",
    title: "See exactly what needs checking",
    lede: "Many dictation tools do not explicitly show where a review is warranted. That can let €14,000 quietly become €40,000.",
    body: "Witness marks the spots worth checking, and a marker in the menu bar tells you when a look pays off. There you can play the original audio of that spot and compare it with the raw transcript.",
    points: ["Original audio", "Raw transcript", "Menu bar marker"],
  },
  privacy: {
    kicker: "Privacy",
    title: "Offline means offline, and you can verify it",
    lede: "Turn Wi‑Fi off and keep dictating. Speech processing stays available.",
    body: "Audio and text are processed on your Mac. Dictation audio stays in memory during the current dictation and review. Meeting notes are stored locally until you delete them; audio is never saved.",
    diagramAlt: "Diagram: speech is processed only on the Mac",
    ready: "Ready offline",
    flow: ["Speech", "STT", "Text"],
    processedHere: "Processed on this Mac",
    facts: [
      { title: "No user account", body: "Email only for the licence key. No profile or password." },
      { title: "No DPA for dictation content", body: "We neither transmit nor process your speech content on your behalf." },
      { title: "Network access disclosed", body: "Model downloads, licensing, update requests and nine optional setup and trial events are disclosed." },
    ],
    disclosure: "Audio, transcripts, vocabulary, clipboard data, other app content and highlighted risk fragments are never transmitted. Model downloads and update requests reach their respective file hosts. For a licence key, the app sends your email address and a device identifier; releasing a Mac sends the key back. Nine optional setup and trial events carry an app version, macOS version and random installation identifier; three also carry one word from a fixed list. Settings → Privacy turns those events off. Recipients and retention are described in the privacy policy.",
    disclosureLink: "Read the full privacy policy",
  },
  languages: {
    kicker: "Languages",
    title: "English and German in one sentence",
    body: "Whisper supports all 100 Witness languages; Parakeet supports 25 European languages. You choose your languages. German, English, Russian and Ukrainian form the end-to-end measured group; uncalibrated language-specific signals stay off for other languages.",
    pills: ["English", "Deutsch", "Русский", "Українська", "+96 more"],
    dictionaryTitle: "Personal vocabulary",
    tags: { german: "German", english: "English", all: "All languages" },
    note: "Names, product terms, and abbreviations are written the way you need them.",
  },
  features: {
    kicker: "Tools",
    title: "Small in your menu bar. Big in your day.",
    lede: "Only the tools that make the path from speech to text shorter or safer.",
    items: [
      { symbol: "Aa", title: "Your vocabulary", body: "Names, abbreviations, and technical terms per language." },
      { symbol: "↺", title: "Restore raw transcript", body: "Return to the untouched recognition result in one click." },
      { symbol: "⌘", title: "For your work apps", body: "Direct insertion or a clipboard fallback when an app blocks it." },
      { symbol: "◌", title: "No internet required", body: "On a train, on a plane, or in the basement." },
      { symbol: "Ⅱ", title: "Two Macs", body: "One licence for your MacBook and iMac." },
      { symbol: "∞", title: "Pay once", body: "€99 lifetime or €49 for one year." },
    ],
  },
  comparison: {
    kicker: "Comparison",
    title: "Why not free, and why not the cloud",
    tableLabel: "Comparison table, horizontally scrollable",
    caption: "Witness compared with four dictation apps",
    featureHead: "Feature",
    rows: [
      ["Speech processing", "local", "cloud", "EU cloud", "local or cloud", "local"],
      ["Uncertain passages", "highlighted, with the original audio", "not publicly documented", "not publicly documented", "not publicly documented", "not publicly documented"],
      ["Language choice", "ticked by you, 4 measured", "100+ languages", "auto-detection", "language per mode", "model-dependent"],
      ["Free entry", "13-day full trial", "Free, 2,000 words a week", "14-day full trial", "ongoing free tier", "14-day refund window"],
      ["Paid price", "€99 once / €49 year", "$15 month / $144 year", "€12.99 month / €10.99 billed annually", "$8.49 month / $84.99 year / $249.99 lifetime", "$25 / $39 / $49 once"],
      ["Ready Mac download", "yes", "yes", "yes", "yes", "yes"],
    ],
    note: "If you enjoy configuring Whisper yourself, open-source tools are a good choice. Witness is for people who would rather get straight to work: configured, with verification and reachable support.",
    sources: "Official sources, checked 1 Oct 2026:",
    more: "Detailed, sourced comparisons:",
    moreAll: "All comparisons",
  },
  pricing: {
    kicker: "Pricing",
    title: "Pay once. Keep using it.",
    lede: "Less typing. Your speech content stays on your Mac. Lifetime is a one-time purchase; the annual licence is billed yearly.",
    lifetime: { name: "Lifetime", badge: "Recommended", vat: "final price", body: "Pay once and keep using it.", bullets: ["2 Macs", "All version 1 updates"] },
    annual: { name: "Annual licence", vat: "final price / year", perMonth: "€4.08 a month, billed yearly", body: "Use it for one year, then cancel.", bullets: ["2 Macs", "All updates during your term"] },
    download: "Try free on your Mac",
    footnote: "13 days free, no credit card. Try it first, then decide. Purchase happens in the app after your trial. Payment methods will be confirmed before checkout.",
    compare: { cloud: "2 years of cloud", product: "Witness Lifetime", asOf: "As of August 2026" },
  },
  faq: {
    title: "Straight answers before you install",
    lede: "No footnotes that quietly undo the product promise.",
    items: [
      { q: "Does speech recognition really work offline?", a: "Yes. Once your chosen speech model is downloaded and prepared locally, recognition and text processing work without the internet. A connection is needed for model downloads, the licence key and update requests. Audio, text, vocabulary and other app content are never included." },
      { q: "Does my company need a data processing agreement?", a: "Not for dictation content: Witness does not transmit or process it on our behalf. Hosting, licensing, payment, and support remain separate data-processing activities. The privacy policy names each recipient, legal basis, and retention period in full." },
      { q: "How is it different from macOS Dictation?", a: "You choose which languages occur instead of leaving it to detection, plus a personal vocabulary, conservative cleanup, and clear highlighting of uncertain passages." },
      { q: "Why pay when open-source tools are free?", a: "You do not have to. They are a good choice if you enjoy configuring models yourself. What you get here is a signed, Apple-notarised package with your own language selection, verification, and support." },
      { q: "Which languages are supported?", a: "Whisper supports all 100 Witness languages; Parakeet supports 25 European languages. You choose your languages. German, English, Russian and Ukrainian form the end-to-end measured group; uncalibrated language-specific signals stay off for other languages." },
      { q: "Does it run on Intel Macs?", a: "No. Witness supports Apple silicon with macOS 14.4 or newer." },
      { q: "What happens after the 13-day trial?", a: "New dictations pause and the app shows both licence options. Settings and licence activation stay available." },
      { q: "Can I use one licence on two Macs?", a: "Yes. One licence can be activated on two personal Macs." },
      { q: "Should I choose lifetime or annual?", a: "If you dictate regularly, lifetime costs less: €99 once instead of €49 every year. Annual is the lower-commitment option." },
    ],
  },
  final: {
    kicker: "Get started",
    title: "Tomorrow morning, write your first email without typing it",
    body: "Download Witness, press the hotkey, and speak. The first three days after your first successful dictation ask for nothing. After them an email key adds ten more days, with no product account or credit card. The key arrives in the app straight away; the copy in your mail is only for a reinstall. Audio is never saved. Meeting notes stay on your Mac until you delete them.",
    download: "Try free on your Mac",
    ready: "Apple silicon · macOS 14.4+",
    preview: "Download currently unavailable · Apple silicon · macOS 14.4+",
  },
  footer: {
    tagline: "Local dictation for people who would rather see uncertainty than miss it.",
    legalNav: "Legal links", agb: "Terms", impressum: "Legal notice", datenschutz: "Privacy", widerruf: "Cancellation", lizenzen: "Licences", kontakt: "Contact",
  },
  partnerOffer: {
    title: "{percent}% off with code {code}",
    body: "Download Witness first and try it free for 13 days. When the trial ends and you buy, enter {code} on the payment page. Valid until {date}.",
    remembered: "This browser remembers the discount: open the payment page from the app on this Mac and the code is already filled in.",
    buyLead: "Already tried it? Buy with the discount:",
    firstYear: "for the first year, then {annualFull}",
    ended: "The {code} discount ended on {date}.",
  },
  ui: { skip: "Skip to content", theme: "Switch colour scheme", mainNav: "Main navigation", languageNav: "Choose language", promises: "Product promises", productHunt: "See Witness for Mac on Product Hunt" },
};

const ru: LandingCopy = {
  nav: [
    { label: "Продукт", href: "#funktion" },
    { label: "Проверка", href: "#verifikation" },
    { label: "Приватность", href: "#datenschutz" },
    { label: "Цена", href: "#preis" },
  ],
  hero: {
    eyebrow: "Локальная диктовка для macOS",
    title: "Диктуй, а не печатай.",
    titleMuted: "И подсказка, где стоит перепроверить.",
    lede: "Нажми ⌥ Space и говори, можно вперемешку с английским. Текст сразу появляется у курсора. Если есть место, на которое стоит обратить внимание, Witness покажет его, и ты услышишь, что сказал на самом деле. Всё работает на твоём Mac.",
    builtIn: "А встроенная диктовка Mac? Она подчёркивает неоднозначные слова синим, а язык переключается клавишей Globe. Witness подаёт знак, когда стоит перепроверить, и даёт послушать оригинал этого места.",
    download: "Скачать для Mac",
    fine: ["13 дней полной версии", "3 дня без почты, потом ключ на почту", "Apple Silicon", "macOS 14.4+", "без карты"],
  },
  trust: ["Распознавание локально", "Без аккаунта", "Без AVV для содержимого диктовок", "Платишь один раз"],
  demo: {
    windowTitle: "Новое письмо", send: "Отправить", to: "Кому:", toValue: "Команда продукта", subject: "Тема:", subjectValue: "Следующие шаги",
    greeting: "Всем привет,", before: "ревью с ", middle: " подтверждено на четверг. Бюджет: ", after: ", перепроверьте, пожалуйста.", amount: "14 000 €",
    rawLabel: "Исходный транскрипт · после вставки", rawBefore: "Ревью с ", rawMiddle: " · бюджет ",
    state: "Проверь диктовку", checks: "места", riskLabel: "Проверь это", play: "Прослушать оригинал",
    stageNote: "UI-прототип · ⌥ Space — хоткей по умолчанию, его можно изменить",
    tryHint: "Это анимация. Попробовать по-настоящему можно в приложении, 13 дней бесплатно.",
    heroSubject: "Короткий апдейт", listening: "Witness слушает",
    menuTitle: "Worth a look", menuDetail: "Some fragments in the last result are worth checking. The text is already in place.",
    menuItem: "Check 1 flagged fragment", reviewSummary: "1 fragment worth checking", rawButton: "Show raw transcript",
    spoken: [
      { text: "Эм", filler: true },
      { text: "короткий", cap: "Короткий" },
      { text: "update" },
      { text: "после" },
      { text: "call." },
      { text: "Ээ", filler: true },
      { text: "этот", cap: "Этот" },
      { text: "meeting" },
      { text: "в" },
      { text: "четверг", risk: true },
      { text: "мог" },
      { text: "быть" },
      { text: "просто" },
      { text: "email." },
    ],
    prototypeNote: "Анимированная иллюстрация интерфейса · не запись экрана программы",
  },
  process: {
    kicker: "Как работает",
    title: "Четыре шага от мысли до текста",
    lede: "Короткий и видимый путь. Никакого отдельного редактора, в который надо сначала перейти.",
    steps: [
      { number: "01", title: "Нажми хоткей", body: "Удерживать или зафиксировать запись, как тебе удобнее." },
      { number: "02", title: "Говори как говоришь", body: "По-русски, по-английски или вперемешку. Термины тоже." },
      { number: "03", title: "Текст у курсора", body: "Сразу в приложение, где ты пишешь. Если приложение блокирует вставку, остаётся буфер обмена." },
      { number: "04", title: "Смотри, когда Witness просит", body: "Если есть место, на которое стоит обратить внимание, в строке меню появляется отметка. Один клик показывает его с оригиналом записи и исходным транскриптом." },
    ],
    link: "А если модель что-то додумала",
  },
  verification: {
    kicker: "Проверка",
    title: "Ты видишь, что нужно перепроверить",
    lede: "Большинство диктовщиков не показывают, где стоит перепроверить. Так 14 000 € незаметно превращаются в 40 000 €.",
    body: "Witness отмечает места, на которые стоит обратить внимание, а отметка в строке меню подсказывает, когда стоит перепроверить. Там можно прослушать оригинал этого места и сравнить с исходным транскриптом.",
    points: ["Оригинал записи", "Исходный транскрипт", "Отметка в строке меню"],
  },
  privacy: {
    kicker: "Приватность",
    title: "Офлайн значит офлайн, и это можно проверить",
    lede: "Выключи Wi-Fi и продолжай диктовать. Распознавание останется доступным.",
    body: "Аудио и текст обрабатываются на твоём Mac. Аудио диктовки остаётся в оперативной памяти на время диктовки и проверки. Заметки по встречам хранятся локально до удаления; аудио не сохраняется.",
    diagramAlt: "Схема: речь обрабатывается только на Mac",
    ready: "Готов к работе офлайн",
    flow: ["Речь", "STT", "Текст"],
    processedHere: "Обработано на этом Mac",
    facts: [
      { title: "Без аккаунта", body: "Почта нужна только для лицензионного ключа. Ни профиля, ни пароля." },
      { title: "Без AVV для содержимого диктовок", body: "Мы не передаём и не обрабатываем твою речь по твоему поручению." },
      { title: "Сетевые обращения раскрыты", body: "Скачивание моделей, лицензирование, проверки обновлений и девять отключаемых событий о настройке и триале раскрыты." },
    ],
    disclosure: "Аудио, транскрипты, словарь, буфер обмена, содержимое других приложений и отмеченные рискованные фрагменты никогда не передаются. При скачивании моделей и проверке обновлений приложение обращается к соответствующим хостам файлов. Для лицензионного ключа отправляются почта и идентификатор устройства; при освобождении Mac — ключ обратно. Девять отключаемых событий о настройке и триале содержат версию приложения, версию macOS и случайный идентификатор установки; три из них — ещё одно слово из фиксированного списка. События выключаются в Настройках → Приватность. Получатели и сроки хранения описаны в политике конфиденциальности.",
    disclosureLink: "Прочитать полную политику конфиденциальности (на английском)",
  },
  languages: {
    kicker: "Языки",
    title: "Русский и английский в одном предложении",
    body: "Whisper поддерживает все 100 языков Witness, Parakeet — 25 европейских. Языки выбираешь ты. Немецкий, английский, русский и украинский проверены от распознавания до подсказок; для остальных языков некалиброванные подсказки выключены.",
    pills: ["Русский", "English", "Deutsch", "Українська", "+96 ещё"],
    dictionaryTitle: "Свой словарь",
    tags: { german: "Немецкий", english: "Английский", all: "Все языки" },
    note: "Имена, названия продуктов и аббревиатуры пишутся так, как нужно тебе.",
  },
  features: {
    kicker: "Инструменты",
    title: "Маленькое в меню. Большое в рабочем дне.",
    lede: "Только то, что делает путь от речи к тексту короче или надёжнее.",
    items: [
      { symbol: "Aa", title: "Свой словарь", body: "Для каждого языка: имена, аббревиатуры, термины." },
      { symbol: "↺", title: "Исходный транскрипт", body: "Один клик, и ты видишь нетронутый результат распознавания." },
      { symbol: "⌘", title: "Для твоих рабочих приложений", body: "Прямая вставка или буфер обмена, если приложение её блокирует." },
      { symbol: "◌", title: "Без интернета", body: "В поезде, в самолёте, в подвале." },
      { symbol: "Ⅱ", title: "Два Mac", body: "Одна лицензия на MacBook и iMac." },
      { symbol: "∞", title: "Платишь один раз", body: "€99 навсегда или €49 в год." },
    ],
  },
  comparison: {
    kicker: "Сравнение",
    title: "Почему не бесплатное, и почему не облако",
    tableLabel: "Таблица сравнения, прокручивается по горизонтали",
    caption: "Witness в сравнении с четырьмя диктовщиками",
    featureHead: "Параметр",
    rows: [
      ["Обработка речи", "локально", "облако", "облако в ЕС", "локально или облако", "локально"],
      ["Неуверенные места", "подсвечены, с оригиналом записи", "публично не описано", "публично не описано", "публично не описано", "публично не описано"],
      ["Выбор языков", "отмечаешь сам, 4 проверены", "100+ языков", "автоопределение", "язык на каждый режим", "зависит от модели"],
      ["Бесплатный вход", "13 дней полной версии", "Free, 2 000 слов в неделю", "14 дней полной версии", "бессрочный бесплатный тариф", "14 дней на возврат"],
      ["Цена", "€99 разово / €49 в год", "$15 в месяц / $144 в год", "€12,99 в месяц / €10,99 при годовой", "$8.49 в месяц / $84.99 в год / $249.99 навсегда", "$25 / $39 / $49 разово"],
      ["Готовая сборка для Mac", "да", "да", "да", "да", "да"],
    ],
    note: "Если тебе нравится настраивать Whisper самому, open-source хороший выбор. Witness для тех, кто вместо этого хочет сразу работать: всё настроено, языки выбираешь сам, есть проверка и живая поддержка.",
    sources: "Официальные источники, проверено 01.10.2026:",
    more: "Подробные сравнения с источниками (на немецком):",
    moreAll: "Все сравнения",
  },
  pricing: {
    kicker: "Цена",
    title: "Заплати один раз. Пользуйся всегда.",
    lede: "Меньше печатать. Содержимое диктовок остаётся на твоём Mac. Бессрочная лицензия оплачивается один раз, годовая — раз в год.",
    lifetime: { name: "Навсегда", badge: "Рекомендуем", vat: "итоговая цена", body: "Платишь один раз, пользуешься бессрочно.", bullets: ["2 Mac", "Все обновления версии 1"] },
    annual: { name: "Лицензия на год", vat: "итоговая цена / год", perMonth: "€4,08 в месяц при оплате за год", body: "Год пользуешься, дальше можно не продлевать.", bullets: ["2 Mac", "Все обновления в течение срока"] },
    download: "Скачать для Mac",
    footnote: "Сначала попробуй, потом решай. Покупка происходит в приложении после теста. Способы оплаты подтвердим до оформления.",
    compare: { cloud: "2 года облака", product: "Witness навсегда", asOf: "На август 2026" },
  },
  faq: {
    title: "Начистоту, до того как ты установишь",
    lede: "Без сносок, которые забирают обещание обратно.",
    items: [
      { q: "Распознавание правда работает офлайн?", a: "Да. После загрузки и локальной подготовки выбранной модели распознавание и обработка текста работают без интернета. Соединение нужно для скачивания моделей, лицензионного ключа и проверки обновлений. Аудио, текст, словарь и содержимое других приложений при этом не передаются." },
      { q: "Нужен ли AVV адвокатской практике или врачебному кабинету?", a: "Для содержимого диктовок нет: Witness не передаёт и не обрабатывает его для нас. Для хостинга, лицензирования, оплаты и поддержки действуют отдельные обязанности по защите данных; получатели, правовые основания и сроки хранения полностью перечислены в политике конфиденциальности." },
      { q: "Чем это отличается от встроенной диктовки macOS?", a: "Ты сам отмечаешь, какие языки встретятся, а не оставляешь это автоопределению; плюс свой словарь, аккуратная обработка текста без переписывания смысла и подсветка неуверенных мест." },
      { q: "Зачем платить, если есть бесплатные open-source инструменты?", a: "Не обязательно. Если тебе нравится настраивать модели самому, они хороший выбор. Здесь ты получаешь подписанную и нотаризованную Apple сборку, где языки выбираешь сам, с проверкой и поддержкой." },
      { q: "Какие языки поддерживаются?", a: "Whisper поддерживает все 100 языков Witness, Parakeet — 25 европейских. Языки выбираешь ты. Немецкий, английский, русский и украинский проверены от распознавания до подсказок; для остальных языков некалиброванные подсказки выключены." },
      { q: "Работает ли на Intel-Mac?", a: "Нет. Witness работает на Apple Silicon начиная с macOS 14.4." },
      { q: "Что будет после 13 дней теста?", a: "Новые диктовки ставятся на паузу, и приложение показывает два варианта лицензии. Настройки и активация остаются доступны." },
      { q: "Можно использовать лицензию на двух Mac?", a: "Да. Каждую лицензию можно активировать на двух личных Mac." },
      { q: "Что выгоднее: навсегда или на год?", a: "Если диктуешь регулярно, дешевле бессрочная: €99 один раз вместо €49 каждый год. Годовая это вариант с меньшим шагом на входе." },
    ],
  },
  final: {
    kicker: "Начать",
    title: "Завтра утром ты напишешь первое письмо, не набирая его",
    body: "Скачай Witness, нажми хоткей, говори. Первые три дня после первой успешной диктовки не спрашивают ничего. Дальше ключ по почте добавляет ещё десять дней, без аккаунта в продукте и без карты. Ключ приходит сразу в приложение; копия на почте нужна только при переустановке. Аудио не сохраняется. Заметки по встречам остаются на Mac, пока ты их не удалишь.",
    download: "Скачать для Mac",
    ready: "Apple Silicon · macOS 14.4+",
    preview: "Загрузка сейчас недоступна · Apple Silicon · macOS 14.4+",
  },
  footer: {
    tagline: "Локальный диктовщик для тех, кто предпочитает видеть неуверенность, а не пропускать её.",
    legalNav: "Юридические страницы", agb: "Условия (EN)", impressum: "Импрессум (EN)", datenschutz: "Приватность (EN)", widerruf: "Право отказа (EN)", lizenzen: "Лицензии (EN)", kontakt: "Контакт",
  },
  partnerOffer: {
    title: "−{percent}% по коду {code}",
    body: "Сначала скачай Witness и попробуй 13 дней бесплатно. Когда триал закончится и ты решишь купить, введи {code} на странице оплаты. Код действует до {date} включительно.",
    remembered: "Этот браузер запомнил скидку: если откроешь оплату из приложения на этом Mac, код подставится сам.",
    buyLead: "Уже попробовал? Купить со скидкой:",
    firstYear: "за первый год, дальше {annualFull}",
    ended: "Скидка по коду {code} действовала до {date} и уже закончилась.",
  },
  ui: { skip: "К содержимому", theme: "Сменить тему", mainNav: "Основная навигация", languageNav: "Выбор языка", promises: "Обещания продукта", productHunt: "Witness for Mac на Product Hunt" },
};

const uk: LandingCopy = {
  nav: [
    { label: "Продукт", href: "#funktion" },
    { label: "Перевірка", href: "#verifikation" },
    { label: "Приватність", href: "#datenschutz" },
    { label: "Ціна", href: "#preis" },
  ],
  hero: {
    eyebrow: "Локальне диктування для macOS",
    title: "Диктуй, а не друкуй.",
    titleMuted: "І підказка, де варто перевірити.",
    lede: "Натисни ⌥ Space і говори, можна впереміш з англійською. Текст одразу з'являється біля курсора. Якщо є місце, на яке варто звернути увагу, Witness покаже його, і ти почуєш, що сказав насправді. Усе працює на твоєму Mac.",
    builtIn: "А вбудоване диктування Mac? Воно підкреслює неоднозначні слова синім, а мову перемикаєш клавішею Globe. Witness подає знак, коли варто перевірити, і дає прослухати оригінал цього місця.",
    download: "Завантажити для Mac",
    fine: ["13 днів повної версії", "3 дні без пошти, потім ключ на пошту", "Apple Silicon", "macOS 14.4+", "без картки"],
  },
  trust: ["Розпізнавання локально", "Без облікового запису", "Без AVV для вмісту диктувань", "Платиш один раз"],
  demo: {
    windowTitle: "Новий лист", send: "Надіслати", to: "Кому:", toValue: "Команда продукту", subject: "Тема:", subjectValue: "Наступні кроки",
    greeting: "Всім привіт,", before: "рев'ю з ", middle: " підтверджено на четвер. Бюджет: ", after: ", перевірте, будь ласка.", amount: "14 000 €",
    rawLabel: "Вихідний транскрипт · після вставлення", rawBefore: "Рев'ю з ", rawMiddle: " · бюджет ",
    state: "Перевір диктування", checks: "місця", riskLabel: "Перевір це", play: "Прослухати оригінал",
    stageNote: "UI-прототип · ⌥ Space — типове сполучення, його можна змінити",
    tryHint: "Це анімація. Спробувати по-справжньому можна в застосунку, 13 днів безкоштовно.",
    heroSubject: "Короткий апдейт", listening: "Witness слухає",
    menuTitle: "Worth a look", menuDetail: "Some fragments in the last result are worth checking. The text is already in place.",
    menuItem: "Check 1 flagged fragment", reviewSummary: "1 fragment worth checking", rawButton: "Show raw transcript",
    spoken: [
      { text: "Ем", filler: true },
      { text: "короткий", cap: "Короткий" },
      { text: "update" },
      { text: "після" },
      { text: "call." },
      { text: "Ее", filler: true },
      { text: "цей", cap: "Цей" },
      { text: "meeting" },
      { text: "у" },
      { text: "четвер", risk: true },
      { text: "міг" },
      { text: "бути" },
      { text: "просто" },
      { text: "email." },
    ],
    prototypeNote: "Анімована ілюстрація інтерфейсу · не запис екрана програми",
  },
  process: {
    kicker: "Як працює",
    title: "Чотири кроки від думки до тексту",
    lede: "Короткий і видимий шлях. Жодного окремого редактора, у який спершу треба перейти.",
    steps: [
      { number: "01", title: "Натисни гарячу клавішу", body: "Утримувати або зафіксувати запис, як тобі зручніше." },
      { number: "02", title: "Говори як говориш", body: "Українською, англійською чи впереміш. Терміни теж." },
      { number: "03", title: "Текст біля курсора", body: "Одразу в застосунок, де ти пишеш. Якщо застосунок блокує вставлення, лишається буфер обміну." },
      { number: "04", title: "Дивись, коли Witness просить", body: "Якщо є місце, на яке варто звернути увагу, у рядку меню з'являється позначка. Один клік показує його з оригіналом запису й вихідним транскриптом." },
    ],
    link: "А якщо модель щось додумала",
  },
  verification: {
    kicker: "Перевірка",
    title: "Ти бачиш, що треба перевірити",
    lede: "Більшість диктувальників не показують, де варто перевірити. Так 14 000 € непомітно перетворюються на 40 000 €.",
    body: "Witness позначає місця, на які варто звернути увагу, а позначка в рядку меню підказує, коли варто перевірити. Там можна прослухати оригінал цього місця й порівняти з вихідним транскриптом.",
    points: ["Оригінал запису", "Вихідний транскрипт", "Позначка в рядку меню"],
  },
  privacy: {
    kicker: "Приватність",
    title: "Офлайн означає офлайн, і це можна перевірити",
    lede: "Вимкни Wi-Fi і диктуй далі. Розпізнавання лишиться доступним.",
    body: "Аудіо й текст обробляються на твоєму Mac. Аудіо диктування лишається в оперативній пам’яті на час диктування та перевірки. Нотатки зустрічей зберігаються локально до видалення; аудіо не зберігається.",
    diagramAlt: "Схема: мовлення обробляється лише на Mac",
    ready: "Готовий до роботи офлайн",
    flow: ["Мовлення", "STT", "Текст"],
    processedHere: "Оброблено на цьому Mac",
    facts: [
      { title: "Без облікового запису", body: "Пошта потрібна лише для ліцензійного ключа. Ні профілю, ні пароля." },
      { title: "Без AVV для вмісту диктувань", body: "Ми не передаємо і не обробляємо твоє мовлення за твоїм дорученням." },
      { title: "Мережеві звернення розкрито", body: "Завантаження моделей, ліцензування, перевірки оновлень і дев’ять подій про налаштування й тріал, які можна вимкнути, розкрито." },
    ],
    disclosure: "Аудіо, транскрипти, словник, буфер обміну, вміст інших застосунків і позначені ризиковані фрагменти ніколи не передаються. Під час завантаження моделей і перевірки оновлень застосунок звертається до відповідних хостів файлів. Для ліцензійного ключа надсилаються пошта й ідентифікатор пристрою; під час звільнення Mac — ключ назад. Дев’ять подій про налаштування й тріал можна вимкнути. Вони містять версію застосунку, версію macOS та випадковий ідентифікатор встановлення; три з них — ще одне слово з фіксованого списку. Події вимикаються в Налаштуваннях → Приватність. Одержувачі й строки зберігання описані в політиці конфіденційності.",
    disclosureLink: "Прочитати повну політику конфіденційності (англійською)",
  },
  languages: {
    kicker: "Мови",
    title: "Українська та англійська в одному реченні",
    body: "Whisper підтримує всі 100 мов Witness, Parakeet — 25 європейських. Мови вибираєш ти. Німецька, англійська, російська та українська перевірені від розпізнавання до підказок; для решти мов некалібровані підказки вимкнено.",
    pills: ["Українська", "English", "Deutsch", "Русский", "+96 ще"],
    dictionaryTitle: "Власний словник",
    tags: { german: "Німецька", english: "Англійська", all: "Усі мови" },
    note: "Імена, назви продуктів і абревіатури пишуться так, як потрібно тобі.",
  },
  features: {
    kicker: "Інструменти",
    title: "Мале в меню. Велике в робочому дні.",
    lede: "Лише те, що робить шлях від мовлення до тексту коротшим або надійнішим.",
    items: [
      { symbol: "Aa", title: "Власний словник", body: "Для кожної мови: імена, абревіатури, терміни." },
      { symbol: "↺", title: "Вихідний транскрипт", body: "Один клік, і ти бачиш недоторканий результат розпізнавання." },
      { symbol: "⌘", title: "Для твоїх робочих застосунків", body: "Пряме вставлення або буфер обміну, якщо застосунок його блокує." },
      { symbol: "◌", title: "Без інтернету", body: "У потязі, у літаку, у підвалі." },
      { symbol: "Ⅱ", title: "Два Mac", body: "Одна ліцензія на MacBook та iMac." },
      { symbol: "∞", title: "Платиш один раз", body: "€99 назавжди або €49 на рік." },
    ],
  },
  comparison: {
    kicker: "Порівняння",
    title: "Чому не безкоштовне, і чому не хмара",
    tableLabel: "Таблиця порівняння, прокручується горизонтально",
    caption: "Witness у порівнянні з чотирма диктувальниками",
    featureHead: "Параметр",
    rows: [
      ["Обробка мовлення", "локально", "хмара", "хмара в ЄС", "локально або хмара", "локально"],
      ["Непевні місця", "підсвічені, з оригіналом запису", "публічно не описано", "публічно не описано", "публічно не описано", "публічно не описано"],
      ["Вибір мов", "позначаєш сам, 4 виміряні", "100+ мов", "автовизначення", "мова на кожен режим", "залежить від моделі"],
      ["Безкоштовний вхід", "13 днів повної версії", "Free, 2 000 слів на тиждень", "14 днів повної версії", "безстроковий безкоштовний тариф", "14 днів на повернення"],
      ["Ціна", "€99 разово / €49 на рік", "$15 на місяць / $144 на рік", "€12,99 на місяць / €10,99 за річної", "$8.49 на місяць / $84.99 на рік / $249.99 назавжди", "$25 / $39 / $49 разово"],
      ["Готова збірка для Mac", "так", "так", "так", "так", "так"],
    ],
    note: "Якщо тобі подобається налаштовувати Whisper самому, open-source гарний вибір. Witness для тих, хто натомість хоче одразу працювати: усе налаштовано, мови вибираєш сам, є перевірка та жива підтримка.",
    sources: "Офіційні джерела, перевірено 01.10.2026:",
    more: "Докладні порівняння з джерелами (німецькою):",
    moreAll: "Усі порівняння",
  },
  pricing: {
    kicker: "Ціна",
    title: "Заплати один раз. Користуйся завжди.",
    lede: "Менше друкувати. Вміст диктувань лишається на твоєму Mac. Безстрокова ліцензія оплачується один раз, річна — раз на рік.",
    lifetime: { name: "Назавжди", badge: "Рекомендуємо", vat: "остаточна ціна", body: "Платиш один раз, користуєшся безстроково.", bullets: ["2 Mac", "Усі оновлення версії 1"] },
    annual: { name: "Ліцензія на рік", vat: "остаточна ціна / рік", perMonth: "€4,08 на місяць при оплаті за рік", body: "Рік користуєшся, далі можна не продовжувати.", bullets: ["2 Mac", "Усі оновлення протягом строку"] },
    download: "Завантажити для Mac",
    footnote: "Спершу спробуй, потім вирішуй. Купівля відбувається в застосунку після тесту. Способи оплати підтвердимо до оформлення.",
    compare: { cloud: "2 роки хмари", product: "Witness назавжди", asOf: "Станом на серпень 2026" },
  },
  faq: {
    title: "Відверто, перед тим як ти встановиш",
    lede: "Без виносок, які забирають обіцянку назад.",
    items: [
      { q: "Розпізнавання справді працює офлайн?", a: "Так. Після завантаження та локальної підготовки вибраної моделі розпізнавання й обробка тексту працюють без інтернету. З’єднання потрібне для завантаження моделей, ліцензійного ключа й перевірки оновлень. Аудіо, текст, словник і вміст інших застосунків при цьому не передаються." },
      { q: "Чи потрібен AVV адвокатській практиці або лікарському кабінету?", a: "Для вмісту диктувань ні: Witness не передає і не обробляє його для нас. Для хостингу, ліцензування, оплати та підтримки діють окремі обов'язки із захисту даних; отримувачі, правові підстави та строки зберігання повністю перелічені в політиці конфіденційності." },
      { q: "Чим це відрізняється від вбудованого диктування macOS?", a: "Ти сам позначаєш, які мови трапляться, а не лишаєш це автовизначенню; плюс власний словник, обережна обробка тексту без переписування змісту та підсвічування непевних місць." },
      { q: "Навіщо платити, якщо є безкоштовні open-source інструменти?", a: "Не обов'язково. Якщо тобі подобається налаштовувати моделі самому, вони гарний вибір. Тут ти отримуєш підписану й нотаризовану Apple збірку, де мови вибираєш сам, з перевіркою та підтримкою." },
      { q: "Які мови підтримуються?", a: "Whisper підтримує всі 100 мов Witness, Parakeet — 25 європейських. Мови вибираєш ти. Німецька, англійська, російська та українська перевірені від розпізнавання до підказок; для решти мов некалібровані підказки вимкнено." },
      { q: "Чи працює на Intel-Mac?", a: "Ні. Witness працює на Apple Silicon починаючи з macOS 14.4." },
      { q: "Що буде після 13 днів тесту?", a: "Нові диктування ставляться на паузу, і застосунок показує два варіанти ліцензії. Налаштування та активація лишаються доступними." },
      { q: "Чи можна використовувати ліцензію на двох Mac?", a: "Так. Кожну ліцензію можна активувати на двох особистих Mac." },
      { q: "Що вигідніше: назавжди чи на рік?", a: "Якщо диктуєш регулярно, дешевша безстрокова: €99 один раз замість €49 щороку. Річна це варіант із меншим кроком на вході." },
    ],
  },
  final: {
    kicker: "Почати",
    title: "Завтра вранці ти напишеш першого листа, не набираючи його",
    body: "Завантаж Witness, натисни гарячу клавішу, говори. Перші три дні після першого успішного диктування не питають нічого. Далі ключ поштою додає ще десять днів, без облікового запису в продукті й без картки. Ключ приходить одразу в застосунок; копія на пошті потрібна лише для перевстановлення. Аудіо не зберігається. Нотатки зустрічей лишаються на Mac, доки ти їх не видалиш.",
    download: "Завантажити для Mac",
    ready: "Apple Silicon · macOS 14.4+",
    preview: "Завантаження зараз недоступне · Apple Silicon · macOS 14.4+",
  },
  footer: {
    tagline: "Локальний диктувальник для тих, хто радше побачить непевність, ніж пропустить її.",
    legalNav: "Юридичні сторінки", agb: "Умови (EN)", impressum: "Імпресум (EN)", datenschutz: "Приватність (EN)", widerruf: "Право на відмову (EN)", lizenzen: "Ліцензії (EN)", kontakt: "Контакт",
  },
  partnerOffer: {
    title: "−{percent}% за кодом {code}",
    body: "Спершу завантаж Witness і спробуй 13 днів безкоштовно. Коли тріал закінчиться і ти вирішиш купити, введи {code} на сторінці оплати. Код діє до {date} включно.",
    remembered: "Цей браузер запам’ятав знижку: якщо відкриєш оплату із застосунку на цьому Mac, код підставиться сам.",
    buyLead: "Уже спробував? Купити зі знижкою:",
    firstYear: "за перший рік, далі {annualFull}",
    ended: "Знижка за кодом {code} діяла до {date} і вже закінчилася.",
  },
  ui: { skip: "До вмісту", theme: "Змінити тему", mainNav: "Основна навігація", languageNav: "Вибір мови", promises: "Обіцянки продукту", productHunt: "Witness for Mac на Product Hunt" },
};

export const landingCopy: Record<Locale, LandingCopy> = { de, en, ru, uk };
