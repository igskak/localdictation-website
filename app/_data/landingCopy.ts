import type { Locale } from "../_lib/locale";

export type LandingCopy = {
  nav: { label: string; href: string }[];
  hero: { eyebrow: string; title: string; titleMuted: string; lede: string; audience: string; demo: string; download: string; fine: string[] };
  trust: string[];
  demo: {
    windowTitle: string; send: string; to: string; toValue: string; subject: string; subjectValue: string;
    greeting: string; before: string; middle: string; after: string; amount: string;
    rawLabel: string; rawBefore: string; rawMiddle: string;
    state: string; checks: string; riskLabel: string; play: string; stageNote: string; prototypeNote: string;
  };
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
  comparison: { kicker: string; title: string; tableLabel: string; caption: string; featureHead: string; rows: string[][]; note: string; sources: string };
  pricing: {
    kicker: string; title: string; lede: string;
    lifetime: { name: string; badge: string; vat: string; body: string; bullets: string[] };
    annual: { name: string; vat: string; body: string; bullets: string[] };
    download: string; footnote: string; compare: { cloud: string; product: string; asOf: string };
  };
  faq: { title: string; lede: string; items: { q: string; a: string }[] };
  final: { kicker: string; title: string; body: string; download: string; ready: string; preview: string };
  footer: { tagline: string; legalNav: string; impressum: string; datenschutz: string; widerruf: string; kontakt: string };
  ui: { skip: string; theme: string; mainNav: string; languageNav: string; promises: string };
};

const de: LandingCopy = {
  nav: [
    { label: "Produkt", href: "#funktion" },
    { label: "Verifikation", href: "#verifikation" },
    { label: "Datenschutz", href: "#datenschutz" },
    { label: "Preis", href: "#preis" },
  ],
  hero: {
    eyebrow: "Private Produktvorschau für macOS",
    title: "Diktieren statt tippen.",
    titleMuted: "Alles bleibt auf deinem Mac.",
    lede: "Drück den Hotkey, sprich — nach einer kurzen Prüfung landet der fertige Text dort, wo dein Cursor steht. Ohne Cloud-Verarbeitung, ohne Benutzerkonto, einmal zahlen statt monatlich.",
    audience: "Für alle, die auf Deutsch und Englisch arbeiten — und beides in einem Satz mischen.",
    demo: "Ansehen, wie es funktioniert",
    download: "Für Mac laden",
    fine: ["14 Tage voller Funktionsumfang", "E-Mail-Schlüssel nach 5 Diktaten oder 24 h", "Apple Silicon", "macOS 14.4+", "keine Kreditkarte"],
  },
  trust: ["Sprachverarbeitung lokal", "Kein Benutzerkonto", "Kein AVV für Diktatinhalte", "Einmal zahlen"],
  demo: {
    windowTitle: "Neue Nachricht", send: "Senden", to: "An:", toValue: "Team Produkt", subject: "Betreff:", subjectValue: "Nächste Schritte",
    greeting: "Hallo zusammen,", before: "das Review mit ", middle: " ist für Donnerstag bestätigt. Das Budget liegt bei ", after: " — bitte noch einmal prüfen.", amount: "14.000 €",
    rawLabel: "Roh-Transkript · vor der Einfügung", rawBefore: "Review mit ", rawMiddle: " · Budget ",
    state: "Diktat prüfen", checks: "Stellen", riskLabel: "Bitte prüfen", play: "Original anhören",
    stageNote: "UI-Prototyp · drücken, sprechen, einsetzen",
    prototypeNote: "Animierte UI-Vorschau · wird vor Veröffentlichung durch eine echte Produktaufnahme ersetzt",
  },
  process: {
    kicker: "Ablauf",
    title: "In vier Schritten vom Gedanken zum Text",
    lede: "Ein kurzer, sichtbarer Ablauf. Kein Editor, in den du erst wechseln musst.",
    steps: [
      { number: "01", title: "Hotkey drücken", body: "Push-to-talk oder feststellbar — so, wie du arbeitest." },
      { number: "02", title: "Sprechen, wie du sprichst", body: "Deutsch, Englisch oder beides gemischt. Fachbegriffe inklusive." },
      { number: "03", title: "Nur prüfen, wenn nötig", body: "Zahlen, Namen und Begriffe erscheinen vor dem Einfügen in einer kompakten Prüfzeile." },
      { number: "04", title: "Bestätigen und einfügen", body: "Ohne offene Prüfung landet der Text direkt am Cursor. Blockiert eine App die Einfügung, bleibt der Zwischenablage-Fallback." },
    ],
    link: "Und wenn etwas geraten wurde",
  },
  verification: {
    kicker: "Verifikation",
    title: "Du siehst, was du prüfen musst",
    lede: "Viele Diktier-Tools zeigen nicht ausdrücklich, wo du prüfen solltest. So kann aus 14.000 € unbemerkt 40.000 € werden.",
    body: "LocalDictation markiert Zahlen, Datumsangaben, Eigennamen, Verneinungen und Wörterbuchbegriffe vor der Einfügung. Spiele den Originalton ab, vergleiche das Roh-Transkript und bestätige erst dann.",
    points: ["Originalton", "Roh-Transkript", "Deine Bestätigung"],
  },
  privacy: {
    kicker: "Privatsphäre",
    title: "Offline heißt offline — und du kannst es nachprüfen",
    lede: "Zum Launch: WLAN aus, weiterdiktieren. Die Sprachverarbeitung bleibt verfügbar.",
    body: "Audio und Text werden auf deinem Mac verarbeitet. Audio bleibt nur während des aktuellen Diktats und einer möglichen Prüfung im Arbeitsspeicher und wird danach verworfen.",
    diagramAlt: "Schaubild: Sprache wird nur auf dem Mac verarbeitet",
    ready: "Offline bereit",
    flow: ["Sprache", "STT", "Text"],
    processedHere: "Verarbeitet auf diesem Mac",
    facts: [
      { title: "Kein Benutzerkonto", body: "E-Mail nur für den Lizenzschlüssel. Kein Profil, kein Passwort." },
      { title: "Kein AVV für Diktatinhalte", body: "Wir übertragen oder verarbeiten deine Sprachinhalte nicht in deinem Auftrag." },
      { title: "Netzwerkzugriffe offengelegt", body: "Nur Aktivierung, Lizenz, Checkout, Updates und klar benannte Nicht-Inhaltsereignisse." },
    ],
    disclosure: "Nie übertragen werden Audio, Transkripte, Wörterbuch, Zwischenablage, Inhalte anderer Apps oder markierte Risikofragmente. Netzwerkzugriffe sind auf Aktivierung, Lizenzprüfung, Checkout, Updates sowie ausdrücklich benannte, inhaltsfreie Funnel-Ereignisse mit minimalen technischen Metadaten begrenzt.",
    disclosureLink: "Aktuellen Entwurf und offene Angaben ansehen",
  },
  languages: {
    kicker: "Sprachen",
    title: "Deutsch und Englisch in einem Satz",
    body: "Sprachprofile statt Ratespiel. Du sagst dem Modell, welche Sprachen wirklich vorkommen.",
    pills: ["DE + EN", "RU + UK", "RU + EN", "UK + EN"],
    dictionaryTitle: "Eigenes Wörterbuch",
    tags: { german: "Deutsch", english: "English", all: "Alle Profile" },
    note: "Namen, Produktbegriffe und Abkürzungen werden so geschrieben, wie du sie brauchst.",
  },
  features: {
    kicker: "Werkzeuge",
    title: "Klein im Menü. Groß im Alltag.",
    lede: "Nur Funktionen, die den Weg von der Sprache zum Text kürzer oder sicherer machen.",
    items: [
      { symbol: "Aa", title: "Eigenes Wörterbuch", body: "Pro Sprache. Namen, Abkürzungen, Fachbegriffe." },
      { symbol: "↺", title: "Roh-Transkript", body: "Ein Klick zurück zum unbearbeiteten Text." },
      { symbol: "⌘", title: "Für deine Arbeits-Apps", body: "Direkte Einfügung — oder Zwischenablage-Fallback, wenn eine App sie blockiert." },
      { symbol: "◌", title: "Ohne Internet", body: "Im Zug, im Flugzeug, im Keller." },
      { symbol: "Ⅱ", title: "Zwei Macs", body: "Eine Lizenz für MacBook und iMac." },
      { symbol: "∞", title: "Einmal zahlen", body: "€99 lebenslang — oder €49 im Jahr." },
    ],
  },
  comparison: {
    kicker: "Vergleich",
    title: "Warum nicht kostenlos — und warum nicht die Cloud",
    tableLabel: "Vergleichstabelle, horizontal scrollbar",
    caption: "LocalDictation im Vergleich mit vier Diktier-Apps",
    featureHead: "Merkmal",
    rows: [
      ["Sprachverarbeitung", "lokal", "Cloud", "EU-Cloud", "lokal oder Cloud", "lokal"],
      ["Unsichere Stellen", "vor Einfügung markiert", "nicht öffentlich dokumentiert", "nicht öffentlich dokumentiert", "nicht öffentlich dokumentiert", "nicht öffentlich dokumentiert"],
      ["Sprachwahl DE + EN", "festes Mischprofil", "100+ Sprachen", "Auto-Erkennung", "Sprache je Modus", "modellabhängig"],
      ["Kostenloser Einstieg", "14 Tage Vollversion", "Basic mit Wochenlimit", "14 Tage Vollversion", "dauerhafter Free-Tarif", "14 Tage Erstattungsfrist"],
      ["Bezahlpreis", "€99 einmalig / €49 Jahr", "$15 Monat / $144 Jahr", "€10,99 Monat, jährlich", "$84.99 Jahr / $249.99 Lifetime", "$25 / $39 / $49 einmalig"],
      ["Fertiger Mac-Download", "zum Launch vorgesehen", "ja", "ja", "ja", "ja"],
    ],
    note: "Wenn du Whisper selbst einrichten möchtest, sind Open-Source-Tools eine gute Wahl. LocalDictation ist für alle, die stattdessen direkt arbeiten wollen — fertig eingerichtet, mit Sprachprofilen, Verifikation und erreichbarem Support.",
    sources: "Offizielle Quellen, geprüft am 18.08.2026:",
  },
  pricing: {
    kicker: "Preis",
    title: "Einmal zahlen. Für immer nutzen.",
    lede: "Weniger tippen. Nichts verlässt deinen Mac. Und keine monatliche Abbuchung, die du irgendwann zu kündigen vergisst.",
    lifetime: { name: "Lifetime", badge: "Empfohlen", vat: "inkl. MwSt.", body: "Einmal zahlen, dauerhaft nutzen.", bullets: ["2 Macs", "Alle Updates von Version 1", "30 Tage Geld zurück, ohne Begründung"] },
    annual: { name: "Jahreslizenz", vat: "inkl. MwSt. / Jahr", body: "Ein Jahr nutzen, danach kündbar.", bullets: ["2 Macs", "Alle Updates im Zeitraum", "30 Tage Geld zurück"] },
    download: "Für Mac laden",
    footnote: "Erst testen, dann entscheiden. Gekauft wird in der App nach dem Test. Verfügbare Zahlungsmethoden werden vor dem Checkout bestätigt.",
    compare: { cloud: "2 Jahre Cloud", product: "LocalDictation Lifetime", asOf: "Stand: August 2026" },
  },
  faq: {
    title: "Klartext, bevor du installierst",
    lede: "Keine Fußnoten, die das Produktversprechen zurücknehmen.",
    items: [
      { q: "Funktioniert die Spracherkennung wirklich offline?", a: "Im vorgesehenen Launch-Umfang: ja. Spracherkennung und Textaufbereitung laufen auf deinem Mac. Aktivierung, Lizenzprüfung, wenige ausdrücklich benannte Produkt- und Marketingereignisse, Checkout und Updates benötigen eine Verbindung; dabei werden weder Audio noch Text, Wörterbuch oder Inhalte anderer Apps übertragen." },
      { q: "Brauche ich als Kanzlei oder Praxis einen AVV?", a: "Für Diktatinhalte nicht: LocalDictation überträgt oder verarbeitet sie nicht für uns. Für Hosting, Lizenzierung, Zahlung und Support gelten eigene Datenschutzpflichten, die vor dem Launch vollständig offengelegt werden." },
      { q: "Was ist der Unterschied zur Diktierfunktion von macOS?", a: "Sprachprofile für gemischtes Deutsch-Englisch, ein eigenes Wörterbuch, konservative Textaufbereitung und die Markierung unsicherer Stellen." },
      { q: "Warum zahlen, wenn es kostenlose Open-Source-Tools gibt?", a: "Musst du nicht. Wenn du Modelle selbst einrichtest, sind sie eine gute Wahl. Zum öffentlichen Launch ist ein signiertes, notarisiertes Paket mit Sprachprofilen, Verifikation und Support vorgesehen." },
      { q: "Welche Sprachen werden unterstützt?", a: "Deutsch, Englisch, Russisch und Ukrainisch — einzeln oder in den vorgesehenen gemischten Profilen." },
      { q: "Läuft es auf Intel-Macs?", a: "Nein. LocalDictation unterstützt Apple Silicon ab macOS 14.4." },
      { q: "Was passiert nach den 14 Testtagen?", a: "Neue Diktate werden pausiert und die App zeigt die beiden Lizenzoptionen. Einstellungen und Lizenzaktivierung bleiben erreichbar." },
      { q: "Kann ich die Lizenz auf zwei Macs nutzen?", a: "Ja. Jede Lizenz lässt sich auf zwei persönlichen Macs aktivieren." },
      { q: "Lifetime oder Jahreslizenz — was ist sinnvoller?", a: "Wenn du regelmäßig diktierst, ist Lifetime günstiger: €99 einmal statt €49 jedes Jahr. Die Jahreslizenz ist der kleinere Einstieg." },
    ],
  },
  final: {
    kicker: "Loslegen",
    title: "Morgen früh schreibst du deine erste Mail, ohne sie zu tippen",
    body: "Lade LocalDictation, drück den Hotkey, sprich. Der 14-Tage-Test beginnt mit deiner ersten erfolgreichen Diktierung. Nach fünf Diktaten oder 24 Stunden brauchst du einen E-Mail-Schlüssel, um weiterzumachen — ohne Produktkonto und ohne Kreditkarte. Beim Entfernen bleibt kein Audio- oder Transkriptarchiv zurück.",
    download: "Für Mac laden",
    ready: "Apple Silicon · macOS 14.4+",
    preview: "Private Vorschau ohne Build · Apple Silicon · macOS 14.4+",
  },
  footer: {
    tagline: "Lokale Diktier-Software für Menschen, die Unsicherheit lieber sehen als übersehen.",
    legalNav: "Rechtliche Links", impressum: "Impressum", datenschutz: "Datenschutz", widerruf: "Widerruf", kontakt: "Kontakt",
  },
  ui: { skip: "Zum Inhalt", theme: "Farbschema wechseln", mainNav: "Hauptnavigation", languageNav: "Sprache wählen", promises: "Produktversprechen" },
};

const en: LandingCopy = {
  nav: [
    { label: "Product", href: "#funktion" },
    { label: "Verification", href: "#verifikation" },
    { label: "Privacy", href: "#datenschutz" },
    { label: "Pricing", href: "#preis" },
  ],
  hero: {
    eyebrow: "Private product preview for macOS",
    title: "Dictate instead of typing.",
    titleMuted: "Everything stays on your Mac.",
    lede: "Press the hotkey and speak. After a quick check, finished text appears exactly where your cursor is. No cloud processing, no user account, and a one-time purchase instead of another monthly bill.",
    audience: "For people who work in English and German — and switch between both in the same sentence.",
    demo: "See how it works",
    download: "Download for Mac",
    fine: ["14-day full trial", "email key after 5 dictations or 24 hours", "Apple silicon", "macOS 14.4+", "no credit card"],
  },
  trust: ["Speech processed locally", "No user account", "No DPA for dictation content", "Pay once"],
  demo: {
    windowTitle: "New Message", send: "Send", to: "To:", toValue: "Product Team", subject: "Subject:", subjectValue: "Next steps",
    greeting: "Hi everyone,", before: "the review with ", middle: " is confirmed for Thursday. The budget is ", after: " — please double-check.", amount: "€14,000",
    rawLabel: "Raw transcript · before insertion", rawBefore: "Review with ", rawMiddle: " · budget ",
    state: "Review dictation", checks: "checks", riskLabel: "Check this", play: "Play original",
    stageNote: "UI prototype · press, speak, insert",
    prototypeNote: "Animated UI preview · to be replaced with a real product capture before launch",
  },
  process: {
    kicker: "Workflow",
    title: "From thought to text in four steps",
    lede: "A short, visible workflow. No separate editor to switch into.",
    steps: [
      { number: "01", title: "Press the hotkey", body: "Use push-to-talk or lock recording on — whichever suits your workflow." },
      { number: "02", title: "Speak naturally", body: "English, German, or both mixed together. Technical terms included." },
      { number: "03", title: "Only review when needed", body: "Numbers, names, and terms appear in one compact review strip before insertion." },
      { number: "04", title: "Confirm and insert", body: "With no open checks, text lands directly at the cursor. If an app blocks insertion, a clipboard fallback remains." },
    ],
    link: "And when the model had to guess",
  },
  verification: {
    kicker: "Verification",
    title: "See exactly what needs checking",
    lede: "Many dictation tools do not explicitly show where a review is warranted. That can let €14,000 quietly become €40,000.",
    body: "LocalDictation highlights numbers, dates, names, negations, and vocabulary terms before insertion. Play the original audio, compare the raw transcript, and confirm only then.",
    points: ["Original audio", "Raw transcript", "Your confirmation"],
  },
  privacy: {
    kicker: "Privacy",
    title: "Offline means offline — and you can verify it",
    lede: "At launch: turn Wi‑Fi off and keep dictating. Speech processing stays available.",
    body: "Audio and text are processed on your Mac. Audio stays in memory only for the active dictation and any review, then it is discarded.",
    diagramAlt: "Diagram: speech is processed only on the Mac",
    ready: "Ready offline",
    flow: ["Speech", "STT", "Text"],
    processedHere: "Processed on this Mac",
    facts: [
      { title: "No user account", body: "Email only for the licence key. No profile or password." },
      { title: "No DPA for dictation content", body: "We neither transmit nor process your speech content on your behalf." },
      { title: "Network access disclosed", body: "Only activation, licensing, checkout, updates, and explicitly named non-content events." },
    ],
    disclosure: "Audio, transcripts, vocabulary, clipboard data, other app content, and highlighted risk fragments are never transmitted. Network access is limited to activation, licence checks, checkout, updates, and explicitly disclosed content-free funnel events with minimal technical metadata.",
    disclosureLink: "View the German draft and missing disclosures",
  },
  languages: {
    kicker: "Languages",
    title: "English and German in one sentence",
    body: "Language profiles instead of guesswork. Tell the model which languages to expect.",
    pills: ["EN + DE", "RU + UK", "RU + EN", "UK + EN"],
    dictionaryTitle: "Personal vocabulary",
    tags: { german: "German", english: "English", all: "All profiles" },
    note: "Names, product terms, and abbreviations are written the way you need them.",
  },
  features: {
    kicker: "Tools",
    title: "Small in your menu bar. Big in your day.",
    lede: "Only the tools that make the path from speech to text shorter or safer.",
    items: [
      { symbol: "Aa", title: "Your vocabulary", body: "Names, abbreviations, and technical terms per language." },
      { symbol: "↺", title: "Restore raw transcript", body: "Return to the untouched recognition result in one click." },
      { symbol: "⌘", title: "For your work apps", body: "Direct insertion — or a clipboard fallback when an app blocks it." },
      { symbol: "◌", title: "No internet required", body: "On a train, on a plane, or in the basement." },
      { symbol: "Ⅱ", title: "Two Macs", body: "One licence for your MacBook and iMac." },
      { symbol: "∞", title: "Pay once", body: "€99 lifetime — or €49 for one year." },
    ],
  },
  comparison: {
    kicker: "Comparison",
    title: "Why not free — and why not the cloud",
    tableLabel: "Comparison table, horizontally scrollable",
    caption: "LocalDictation compared with four dictation apps",
    featureHead: "Feature",
    rows: [
      ["Speech processing", "local", "cloud", "EU cloud", "local or cloud", "local"],
      ["Uncertain passages", "highlighted before insertion", "not publicly documented", "not publicly documented", "not publicly documented", "not publicly documented"],
      ["English + German choice", "fixed mixed profile", "100+ languages", "auto-detection", "language per mode", "model-dependent"],
      ["Free entry", "14-day full trial", "Basic with weekly limit", "14-day full trial", "ongoing free tier", "14-day refund window"],
      ["Paid price", "€99 once / €49 year", "$15 month / $144 year", "€10.99 month, billed annually", "$84.99 year / $249.99 lifetime", "$25 / $39 / $49 once"],
      ["Ready Mac download", "planned for launch", "yes", "yes", "yes", "yes"],
    ],
    note: "If you enjoy configuring Whisper yourself, open-source tools are a good choice. LocalDictation is for people who would rather get straight to work — configured, with verification and reachable support.",
    sources: "Official sources, checked 18 Aug 2026:",
  },
  pricing: {
    kicker: "Pricing",
    title: "Pay once. Keep using it.",
    lede: "Type less. Nothing leaves your Mac. And no monthly charge you eventually forget to cancel.",
    lifetime: { name: "Lifetime", badge: "Recommended", vat: "incl. VAT", body: "Pay once and keep using it.", bullets: ["2 Macs", "All version 1 updates", "30-day money-back guarantee, no reason required"] },
    annual: { name: "Annual licence", vat: "incl. VAT / year", body: "Use it for one year, then cancel.", bullets: ["2 Macs", "All updates during your term", "30-day money-back guarantee"] },
    download: "Download for Mac",
    footnote: "Try it first, then decide. Purchase happens in the app after your trial. Payment methods will be confirmed before checkout.",
    compare: { cloud: "2 years of cloud", product: "LocalDictation Lifetime", asOf: "As of August 2026" },
  },
  faq: {
    title: "Straight answers before you install",
    lede: "No footnotes that quietly undo the product promise.",
    items: [
      { q: "Does speech recognition really work offline?", a: "In the planned launch scope, yes. Speech recognition and text processing run on your Mac. Activation, licence checks, a small disclosed set of non-content events, checkout, and updates need a connection; audio, text, vocabulary, and other app content are never included." },
      { q: "Does my company need a data processing agreement?", a: "Not for dictation content: LocalDictation does not transmit or process it on our behalf. Hosting, licensing, payment, and support remain separate data-processing activities that will be fully disclosed before launch." },
      { q: "How is it different from macOS Dictation?", a: "Mixed English-German profiles, a personal vocabulary, conservative cleanup, and clear highlighting of uncertain passages." },
      { q: "Why pay when open-source tools are free?", a: "You do not have to. They are a good choice if you enjoy configuring models yourself. A signed, notarised package with language profiles, verification, and support is planned for public launch." },
      { q: "Which languages are supported?", a: "English, German, Russian, and Ukrainian, including the listed mixed-language profiles." },
      { q: "Does it run on Intel Macs?", a: "No. LocalDictation supports Apple silicon with macOS 14.4 or newer." },
      { q: "What happens after the 14-day trial?", a: "New dictations pause and the app shows both licence options. Settings and licence activation stay available." },
      { q: "Can I use one licence on two Macs?", a: "Yes. One licence can be activated on two personal Macs." },
      { q: "Should I choose lifetime or annual?", a: "If you dictate regularly, lifetime costs less: €99 once instead of €49 every year. Annual is the lower-commitment option." },
    ],
  },
  final: {
    kicker: "Get started",
    title: "Tomorrow morning, write your first email without typing it",
    body: "Download LocalDictation, press the hotkey, and speak. The 14-day trial starts with your first successful dictation. After five dictations or 24 hours, you need an email key to continue — with no product account or credit card. Removing the app leaves no audio or transcript archive behind.",
    download: "Download for Mac",
    ready: "Apple silicon · macOS 14.4+",
    preview: "Private preview without build · Apple silicon · macOS 14.4+",
  },
  footer: {
    tagline: "Local dictation for people who would rather see uncertainty than miss it.",
    legalNav: "Legal links", impressum: "Legal notice (DE)", datenschutz: "Privacy (DE)", widerruf: "Cancellation (DE)", kontakt: "Contact",
  },
  ui: { skip: "Skip to content", theme: "Switch colour scheme", mainNav: "Main navigation", languageNav: "Choose language", promises: "Product promises" },
};

const ru: LandingCopy = {
  nav: [
    { label: "Продукт", href: "#funktion" },
    { label: "Проверка", href: "#verifikation" },
    { label: "Приватность", href: "#datenschutz" },
    { label: "Цена", href: "#preis" },
  ],
  hero: {
    eyebrow: "Закрытая превью-версия для macOS",
    title: "Диктуй, а не печатай.",
    titleMuted: "Всё остаётся на твоём Mac.",
    lede: "Нажми хоткей и говори — после короткой проверки готовый текст появится там, где стоит курсор. Без обработки в облаке, без аккаунта, платишь один раз вместо ежемесячной подписки.",
    audience: "Для тех, кто работает на русском и английском — и мешает их в одном предложении.",
    demo: "Посмотреть, как это работает",
    download: "Скачать для Mac",
    fine: ["14 дней полной версии", "ключ на почту после 5 диктовок или 24 часов", "Apple Silicon", "macOS 14.4+", "без карты"],
  },
  trust: ["Распознавание локально", "Без аккаунта", "Без AVV для содержимого диктовок", "Платишь один раз"],
  demo: {
    windowTitle: "Новое письмо", send: "Отправить", to: "Кому:", toValue: "Команда продукта", subject: "Тема:", subjectValue: "Следующие шаги",
    greeting: "Всем привет,", before: "ревью с ", middle: " подтверждено на четверг. Бюджет — ", after: ", перепроверьте, пожалуйста.", amount: "14 000 €",
    rawLabel: "Исходный транскрипт · до вставки", rawBefore: "Ревью с ", rawMiddle: " · бюджет ",
    state: "Проверь диктовку", checks: "места", riskLabel: "Проверь это", play: "Прослушать оригинал",
    stageNote: "Прототип интерфейса · нажми, скажи, вставь",
    prototypeNote: "Анимированное превью интерфейса · перед запуском заменим записью реального продукта",
  },
  process: {
    kicker: "Как работает",
    title: "Четыре шага от мысли до текста",
    lede: "Короткий и видимый путь. Никакого отдельного редактора, в который надо сначала перейти.",
    steps: [
      { number: "01", title: "Нажми хоткей", body: "Удерживать или зафиксировать запись — как тебе удобнее." },
      { number: "02", title: "Говори как говоришь", body: "По-русски, по-английски или вперемешку. Термины тоже." },
      { number: "03", title: "Проверяй только когда нужно", body: "Числа, имена и термины появляются перед вставкой в одной компактной строке проверки." },
      { number: "04", title: "Подтверди и вставь", body: "Если проверять нечего, текст сразу идёт под курсор. Если приложение блокирует вставку, остаётся буфер обмена." },
    ],
    link: "А если модель что-то додумала",
  },
  verification: {
    kicker: "Проверка",
    title: "Ты видишь, что нужно перепроверить",
    lede: "Большинство диктовщиков не показывают, где стоит перепроверить. Так 14 000 € незаметно превращаются в 40 000 €.",
    body: "LocalDictation подсвечивает числа, даты, имена, отрицания и слова из твоего словаря до вставки. Прослушай оригинал, сравни с исходным транскриптом — и только потом подтверди.",
    points: ["Оригинал записи", "Исходный транскрипт", "Твоё подтверждение"],
  },
  privacy: {
    kicker: "Приватность",
    title: "Офлайн значит офлайн — и это можно проверить",
    lede: "К запуску: выключи Wi-Fi и продолжай диктовать. Распознавание останется доступным.",
    body: "Аудио и текст обрабатываются на твоём Mac. Аудио живёт в оперативной памяти только во время текущей диктовки и её проверки, потом стирается.",
    diagramAlt: "Схема: речь обрабатывается только на Mac",
    ready: "Готов к работе офлайн",
    flow: ["Речь", "STT", "Текст"],
    processedHere: "Обработано на этом Mac",
    facts: [
      { title: "Без аккаунта", body: "Почта нужна только для лицензионного ключа. Ни профиля, ни пароля." },
      { title: "Без AVV для содержимого диктовок", body: "Мы не передаём и не обрабатываем твою речь по твоему поручению." },
      { title: "Сетевые обращения раскрыты", body: "Только активация, лицензия, оплата, обновления и явно названные события без содержимого." },
    ],
    disclosure: "Никогда не передаются: аудио, транскрипты, словарь, буфер обмена, содержимое других приложений и подсвеченные рискованные фрагменты. Сетевые обращения ограничены активацией, проверкой лицензии, оплатой, обновлениями и явно названными событиями воронки без содержимого, с минимумом технических метаданных.",
    disclosureLink: "Посмотреть текущий черновик и открытые пункты (на немецком)",
  },
  languages: {
    kicker: "Языки",
    title: "Русский и английский в одном предложении",
    body: "Языковые профили вместо угадайки. Ты сам говоришь модели, какие языки реально встретятся.",
    pills: ["RU + EN", "RU + UK", "UK + EN", "DE + EN"],
    dictionaryTitle: "Свой словарь",
    tags: { german: "Немецкий", english: "Английский", all: "Все профили" },
    note: "Имена, названия продуктов и аббревиатуры пишутся так, как нужно тебе.",
  },
  features: {
    kicker: "Инструменты",
    title: "Маленькое в меню. Большое в рабочем дне.",
    lede: "Только то, что делает путь от речи к тексту короче или надёжнее.",
    items: [
      { symbol: "Aa", title: "Свой словарь", body: "Для каждого языка: имена, аббревиатуры, термины." },
      { symbol: "↺", title: "Исходный транскрипт", body: "Один клик — и ты видишь нетронутый результат распознавания." },
      { symbol: "⌘", title: "Для твоих рабочих приложений", body: "Прямая вставка — или буфер обмена, если приложение её блокирует." },
      { symbol: "◌", title: "Без интернета", body: "В поезде, в самолёте, в подвале." },
      { symbol: "Ⅱ", title: "Два Mac", body: "Одна лицензия на MacBook и iMac." },
      { symbol: "∞", title: "Платишь один раз", body: "€99 навсегда — или €49 в год." },
    ],
  },
  comparison: {
    kicker: "Сравнение",
    title: "Почему не бесплатное — и почему не облако",
    tableLabel: "Таблица сравнения, прокручивается по горизонтали",
    caption: "LocalDictation в сравнении с четырьмя диктовщиками",
    featureHead: "Параметр",
    rows: [
      ["Обработка речи", "локально", "облако", "облако в ЕС", "локально или облако", "локально"],
      ["Неуверенные места", "подсвечены до вставки", "публично не описано", "публично не описано", "публично не описано", "публично не описано"],
      ["Выбор языков", "фиксированный смешанный профиль", "100+ языков", "автоопределение", "язык на каждый режим", "зависит от модели"],
      ["Бесплатный вход", "14 дней полной версии", "Basic с недельным лимитом", "14 дней полной версии", "бессрочный бесплатный тариф", "14 дней на возврат"],
      ["Цена", "€99 разово / €49 в год", "$15 в месяц / $144 в год", "€10,99 в месяц при годовой оплате", "$84.99 в год / $249.99 навсегда", "$25 / $39 / $49 разово"],
      ["Готовая сборка для Mac", "запланирована к запуску", "да", "да", "да", "да"],
    ],
    note: "Если тебе нравится настраивать Whisper самому, open-source — хороший выбор. LocalDictation для тех, кто вместо этого хочет сразу работать: всё настроено, есть языковые профили, проверка и живая поддержка.",
    sources: "Официальные источники, проверено 18.08.2026:",
  },
  pricing: {
    kicker: "Цена",
    title: "Заплати один раз. Пользуйся всегда.",
    lede: "Меньше печатаешь. Ничего не уходит с твоего Mac. И никакого ежемесячного списания, которое однажды забудешь отменить.",
    lifetime: { name: "Навсегда", badge: "Рекомендуем", vat: "включая НДС", body: "Платишь один раз, пользуешься бессрочно.", bullets: ["2 Mac", "Все обновления версии 1", "Возврат денег 30 дней, без объяснения причин"] },
    annual: { name: "Лицензия на год", vat: "включая НДС / год", body: "Год пользуешься, дальше можно не продлевать.", bullets: ["2 Mac", "Все обновления в течение срока", "Возврат денег 30 дней"] },
    download: "Скачать для Mac",
    footnote: "Сначала попробуй, потом решай. Покупка происходит в приложении после теста. Способы оплаты подтвердим до оформления.",
    compare: { cloud: "2 года облака", product: "LocalDictation навсегда", asOf: "На август 2026" },
  },
  faq: {
    title: "Начистоту — до того, как ты установишь",
    lede: "Без сносок, которые забирают обещание обратно.",
    items: [
      { q: "Распознавание правда работает офлайн?", a: "В запланированном объёме запуска — да. Распознавание речи и обработка текста идут на твоём Mac. Соединение нужно для активации, проверки лицензии, нескольких явно названных продуктовых и маркетинговых событий, оплаты и обновлений; при этом не передаются ни аудио, ни текст, ни словарь, ни содержимое других приложений." },
      { q: "Нужен ли AVV адвокатской практике или врачебному кабинету?", a: "Для содержимого диктовок — нет: LocalDictation не передаёт и не обрабатывает его для нас. Для хостинга, лицензирования, оплаты и поддержки действуют отдельные обязанности по защите данных, и мы раскроем их полностью до запуска." },
      { q: "Чем это отличается от встроенной диктовки macOS?", a: "Языковые профили для смешанной речи, свой словарь, аккуратная обработка текста без переписывания смысла и подсветка неуверенных мест." },
      { q: "Зачем платить, если есть бесплатные open-source инструменты?", a: "Не обязательно. Если тебе нравится настраивать модели самому, они хороший выбор. К публичному запуску мы готовим подписанную и нотаризованную сборку с языковыми профилями, проверкой и поддержкой." },
      { q: "Какие языки поддерживаются?", a: "Немецкий, английский, русский и украинский — по отдельности или в предусмотренных смешанных профилях." },
      { q: "Работает ли на Intel-Mac?", a: "Нет. LocalDictation работает на Apple Silicon начиная с macOS 14.4." },
      { q: "Что будет после 14 дней теста?", a: "Новые диктовки ставятся на паузу, и приложение показывает два варианта лицензии. Настройки и активация остаются доступны." },
      { q: "Можно использовать лицензию на двух Mac?", a: "Да. Каждую лицензию можно активировать на двух личных Mac." },
      { q: "Что выгоднее — навсегда или на год?", a: "Если диктуешь регулярно, дешевле бессрочная: €99 один раз вместо €49 каждый год. Годовая — вариант с меньшим шагом на входе." },
    ],
  },
  final: {
    kicker: "Начать",
    title: "Завтра утром ты напишешь первое письмо, не набирая его",
    body: "Скачай LocalDictation, нажми хоткей, говори. 14 дней теста начинаются с первой успешной диктовки. После пяти диктовок или 24 часов понадобится ключ с почты, чтобы продолжить — без аккаунта в продукте и без карты. После удаления не остаётся ни архива аудио, ни транскриптов.",
    download: "Скачать для Mac",
    ready: "Apple Silicon · macOS 14.4+",
    preview: "Закрытая превью-версия без сборки · Apple Silicon · macOS 14.4+",
  },
  footer: {
    tagline: "Локальный диктовщик для тех, кто предпочитает видеть неуверенность, а не пропускать её.",
    legalNav: "Юридические страницы", impressum: "Импрессум (DE)", datenschutz: "Приватность (DE)", widerruf: "Право отказа (DE)", kontakt: "Контакт",
  },
  ui: { skip: "К содержимому", theme: "Сменить тему", mainNav: "Основная навигация", languageNav: "Выбор языка", promises: "Обещания продукта" },
};

const uk: LandingCopy = {
  nav: [
    { label: "Продукт", href: "#funktion" },
    { label: "Перевірка", href: "#verifikation" },
    { label: "Приватність", href: "#datenschutz" },
    { label: "Ціна", href: "#preis" },
  ],
  hero: {
    eyebrow: "Закрита прев'ю-версія для macOS",
    title: "Диктуй, а не друкуй.",
    titleMuted: "Усе лишається на твоєму Mac.",
    lede: "Натисни гарячу клавішу й говори — після короткої перевірки готовий текст з'явиться там, де стоїть курсор. Без обробки в хмарі, без облікового запису, платиш один раз замість щомісячної підписки.",
    audience: "Для тих, хто працює українською та англійською — і змішує їх в одному реченні.",
    demo: "Подивитися, як це працює",
    download: "Завантажити для Mac",
    fine: ["14 днів повної версії", "ключ на пошту після 5 диктувань або 24 годин", "Apple Silicon", "macOS 14.4+", "без картки"],
  },
  trust: ["Розпізнавання локально", "Без облікового запису", "Без AVV для вмісту диктувань", "Платиш один раз"],
  demo: {
    windowTitle: "Новий лист", send: "Надіслати", to: "Кому:", toValue: "Команда продукту", subject: "Тема:", subjectValue: "Наступні кроки",
    greeting: "Всім привіт,", before: "рев'ю з ", middle: " підтверджено на четвер. Бюджет — ", after: ", перевірте, будь ласка.", amount: "14 000 €",
    rawLabel: "Вихідний транскрипт · до вставлення", rawBefore: "Рев'ю з ", rawMiddle: " · бюджет ",
    state: "Перевір диктування", checks: "місця", riskLabel: "Перевір це", play: "Прослухати оригінал",
    stageNote: "Прототип інтерфейсу · натисни, скажи, встав",
    prototypeNote: "Анімоване прев'ю інтерфейсу · перед запуском замінимо записом реального продукту",
  },
  process: {
    kicker: "Як працює",
    title: "Чотири кроки від думки до тексту",
    lede: "Короткий і видимий шлях. Жодного окремого редактора, у який спершу треба перейти.",
    steps: [
      { number: "01", title: "Натисни гарячу клавішу", body: "Утримувати або зафіксувати запис — як тобі зручніше." },
      { number: "02", title: "Говори як говориш", body: "Українською, англійською чи впереміш. Терміни теж." },
      { number: "03", title: "Перевіряй лише коли треба", body: "Числа, імена й терміни з'являються перед вставленням в одному компактному рядку перевірки." },
      { number: "04", title: "Підтверди і встав", body: "Якщо перевіряти нічого, текст одразу йде під курсор. Якщо застосунок блокує вставлення, лишається буфер обміну." },
    ],
    link: "А якщо модель щось додумала",
  },
  verification: {
    kicker: "Перевірка",
    title: "Ти бачиш, що треба перевірити",
    lede: "Більшість диктувальників не показують, де варто перевірити. Так 14 000 € непомітно перетворюються на 40 000 €.",
    body: "LocalDictation підсвічує числа, дати, імена, заперечення та слова з твого словника до вставлення. Прослухай оригінал, порівняй із вихідним транскриптом — і лише тоді підтвердь.",
    points: ["Оригінал запису", "Вихідний транскрипт", "Твоє підтвердження"],
  },
  privacy: {
    kicker: "Приватність",
    title: "Офлайн означає офлайн — і це можна перевірити",
    lede: "До запуску: вимкни Wi-Fi і диктуй далі. Розпізнавання лишиться доступним.",
    body: "Аудіо й текст обробляються на твоєму Mac. Аудіо живе в оперативній пам'яті лише під час поточного диктування та його перевірки, потім стирається.",
    diagramAlt: "Схема: мовлення обробляється лише на Mac",
    ready: "Готовий до роботи офлайн",
    flow: ["Мовлення", "STT", "Текст"],
    processedHere: "Оброблено на цьому Mac",
    facts: [
      { title: "Без облікового запису", body: "Пошта потрібна лише для ліцензійного ключа. Ні профілю, ні пароля." },
      { title: "Без AVV для вмісту диктувань", body: "Ми не передаємо і не обробляємо твоє мовлення за твоїм дорученням." },
      { title: "Мережеві звернення розкрито", body: "Лише активація, ліцензія, оплата, оновлення та явно названі події без вмісту." },
    ],
    disclosure: "Ніколи не передаються: аудіо, транскрипти, словник, буфер обміну, вміст інших застосунків і підсвічені ризиковані фрагменти. Мережеві звернення обмежені активацією, перевіркою ліцензії, оплатою, оновленнями та явно названими подіями воронки без вмісту, з мінімумом технічних метаданих.",
    disclosureLink: "Переглянути поточний чернетковий текст і відкриті пункти (німецькою)",
  },
  languages: {
    kicker: "Мови",
    title: "Українська та англійська в одному реченні",
    body: "Мовні профілі замість вгадування. Ти сам кажеш моделі, які мови справді трапляться.",
    pills: ["UK + EN", "RU + UK", "RU + EN", "DE + EN"],
    dictionaryTitle: "Власний словник",
    tags: { german: "Німецька", english: "Англійська", all: "Усі профілі" },
    note: "Імена, назви продуктів і абревіатури пишуться так, як потрібно тобі.",
  },
  features: {
    kicker: "Інструменти",
    title: "Мале в меню. Велике в робочому дні.",
    lede: "Лише те, що робить шлях від мовлення до тексту коротшим або надійнішим.",
    items: [
      { symbol: "Aa", title: "Власний словник", body: "Для кожної мови: імена, абревіатури, терміни." },
      { symbol: "↺", title: "Вихідний транскрипт", body: "Один клік — і ти бачиш недоторканий результат розпізнавання." },
      { symbol: "⌘", title: "Для твоїх робочих застосунків", body: "Пряме вставлення — або буфер обміну, якщо застосунок його блокує." },
      { symbol: "◌", title: "Без інтернету", body: "У потязі, у літаку, у підвалі." },
      { symbol: "Ⅱ", title: "Два Mac", body: "Одна ліцензія на MacBook та iMac." },
      { symbol: "∞", title: "Платиш один раз", body: "€99 назавжди — або €49 на рік." },
    ],
  },
  comparison: {
    kicker: "Порівняння",
    title: "Чому не безкоштовне — і чому не хмара",
    tableLabel: "Таблиця порівняння, прокручується горизонтально",
    caption: "LocalDictation у порівнянні з чотирма диктувальниками",
    featureHead: "Параметр",
    rows: [
      ["Обробка мовлення", "локально", "хмара", "хмара в ЄС", "локально або хмара", "локально"],
      ["Непевні місця", "підсвічені до вставлення", "публічно не описано", "публічно не описано", "публічно не описано", "публічно не описано"],
      ["Вибір мов", "фіксований змішаний профіль", "100+ мов", "автовизначення", "мова на кожен режим", "залежить від моделі"],
      ["Безкоштовний вхід", "14 днів повної версії", "Basic із тижневим лімітом", "14 днів повної версії", "безстроковий безкоштовний тариф", "14 днів на повернення"],
      ["Ціна", "€99 разово / €49 на рік", "$15 на місяць / $144 на рік", "€10,99 на місяць за річної оплати", "$84.99 на рік / $249.99 назавжди", "$25 / $39 / $49 разово"],
      ["Готова збірка для Mac", "запланована до запуску", "так", "так", "так", "так"],
    ],
    note: "Якщо тобі подобається налаштовувати Whisper самому, open-source — гарний вибір. LocalDictation для тих, хто натомість хоче одразу працювати: усе налаштовано, є мовні профілі, перевірка та жива підтримка.",
    sources: "Офіційні джерела, перевірено 18.08.2026:",
  },
  pricing: {
    kicker: "Ціна",
    title: "Заплати один раз. Користуйся завжди.",
    lede: "Менше друкуєш. Нічого не йде з твого Mac. І жодного щомісячного списання, яке колись забудеш скасувати.",
    lifetime: { name: "Назавжди", badge: "Рекомендуємо", vat: "включно з ПДВ", body: "Платиш один раз, користуєшся безстроково.", bullets: ["2 Mac", "Усі оновлення версії 1", "Повернення грошей 30 днів, без пояснення причин"] },
    annual: { name: "Ліцензія на рік", vat: "включно з ПДВ / рік", body: "Рік користуєшся, далі можна не продовжувати.", bullets: ["2 Mac", "Усі оновлення протягом строку", "Повернення грошей 30 днів"] },
    download: "Завантажити для Mac",
    footnote: "Спершу спробуй, потім вирішуй. Купівля відбувається в застосунку після тесту. Способи оплати підтвердимо до оформлення.",
    compare: { cloud: "2 роки хмари", product: "LocalDictation назавжди", asOf: "Станом на серпень 2026" },
  },
  faq: {
    title: "Відверто — перед тим, як ти встановиш",
    lede: "Без виносок, які забирають обіцянку назад.",
    items: [
      { q: "Розпізнавання справді працює офлайн?", a: "У запланованому обсязі запуску — так. Розпізнавання мовлення та обробка тексту йдуть на твоєму Mac. З'єднання потрібне для активації, перевірки ліцензії, кількох явно названих продуктових і маркетингових подій, оплати та оновлень; при цьому не передаються ні аудіо, ні текст, ні словник, ні вміст інших застосунків." },
      { q: "Чи потрібен AVV адвокатській практиці або лікарському кабінету?", a: "Для вмісту диктувань — ні: LocalDictation не передає і не обробляє його для нас. Для хостингу, ліцензування, оплати та підтримки діють окремі обов'язки із захисту даних, і ми розкриємо їх повністю до запуску." },
      { q: "Чим це відрізняється від вбудованого диктування macOS?", a: "Мовні профілі для змішаного мовлення, власний словник, обережна обробка тексту без переписування змісту та підсвічування непевних місць." },
      { q: "Навіщо платити, якщо є безкоштовні open-source інструменти?", a: "Не обов'язково. Якщо тобі подобається налаштовувати моделі самому, вони гарний вибір. До публічного запуску ми готуємо підписану й нотаризовану збірку з мовними профілями, перевіркою та підтримкою." },
      { q: "Які мови підтримуються?", a: "Німецька, англійська, російська та українська — окремо або в передбачених змішаних профілях." },
      { q: "Чи працює на Intel-Mac?", a: "Ні. LocalDictation працює на Apple Silicon починаючи з macOS 14.4." },
      { q: "Що буде після 14 днів тесту?", a: "Нові диктування ставляться на паузу, і застосунок показує два варіанти ліцензії. Налаштування та активація лишаються доступними." },
      { q: "Чи можна використовувати ліцензію на двох Mac?", a: "Так. Кожну ліцензію можна активувати на двох особистих Mac." },
      { q: "Що вигідніше — назавжди чи на рік?", a: "Якщо диктуєш регулярно, дешевша безстрокова: €99 один раз замість €49 щороку. Річна — варіант із меншим кроком на вході." },
    ],
  },
  final: {
    kicker: "Почати",
    title: "Завтра вранці ти напишеш першого листа, не набираючи його",
    body: "Завантаж LocalDictation, натисни гарячу клавішу, говори. 14 днів тесту починаються з першого успішного диктування. Після п'яти диктувань або 24 годин знадобиться ключ із пошти, щоб продовжити — без облікового запису в продукті й без картки. Після видалення не лишається ні архіву аудіо, ні транскриптів.",
    download: "Завантажити для Mac",
    ready: "Apple Silicon · macOS 14.4+",
    preview: "Закрита прев'ю-версія без збірки · Apple Silicon · macOS 14.4+",
  },
  footer: {
    tagline: "Локальний диктувальник для тих, хто радше побачить непевність, ніж пропустить її.",
    legalNav: "Юридичні сторінки", impressum: "Імпресум (DE)", datenschutz: "Приватність (DE)", widerruf: "Право на відмову (DE)", kontakt: "Контакт",
  },
  ui: { skip: "До вмісту", theme: "Змінити тему", mainNav: "Основна навігація", languageNav: "Вибір мови", promises: "Обіцянки продукту" },
};

export const landingCopy: Record<Locale, LandingCopy> = { de, en, ru, uk };
