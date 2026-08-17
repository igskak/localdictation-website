import { getDownloadTarget } from "../_lib/download";

type Locale = "de" | "en";

const de = {
  nav: [
    ["Produkt", "#funktion"],
    ["Verifikation", "#verifikation"],
    ["Datenschutz", "#datenschutz"],
    ["Preis", "#preis"],
  ],
  hero: {
    eyebrow: "Private Diktier-App für macOS",
    title: "Diktieren statt tippen.",
    titleMuted: "Alles bleibt auf deinem Mac.",
    lede:
      "Drück den Hotkey, sprich — nach einer kurzen Prüfung landet der fertige Text dort, wo dein Cursor steht. Ohne Cloud-Verarbeitung, ohne Benutzerkonto, einmal zahlen statt monatlich.",
    audience:
      "Für alle, die auf Deutsch und Englisch arbeiten — und beides in einem Satz mischen.",
    demo: "Ansehen, wie es funktioniert",
    fine: ["14 Tage voller Funktionsumfang", "E-Mail-Schlüssel nach 5 Diktaten oder 24 h", "Apple Silicon", "macOS 14.4+", "keine Kreditkarte"],
  },
  trust: ["Sprachverarbeitung lokal", "Kein Benutzerkonto", "Kein AVV nötig", "Einmal zahlen"],
};

const en = {
  nav: [
    ["Product", "#funktion"],
    ["Verification", "#verifikation"],
    ["Privacy", "#datenschutz"],
    ["Pricing", "#preis"],
  ],
  hero: {
    eyebrow: "Private dictation for macOS",
    title: "Dictate instead of typing.",
    titleMuted: "Everything stays on your Mac.",
    lede:
      "Press the hotkey and speak. After a quick check, finished text appears exactly where your cursor is. No cloud processing, no user account, and a one-time purchase instead of another monthly bill.",
    audience:
      "For people who work in English and German — and switch between both in the same sentence.",
    demo: "See how it works",
    fine: ["14-day full trial", "email key after 5 dictations or 24 hours", "Apple silicon", "macOS 14.4+", "no credit card"],
  },
  trust: ["Speech processed locally", "No user account", "No DPA required", "Pay once"],
};

const waveHeights = [7, 13, 20, 10, 25, 16, 28, 12, 20, 8, 15, 6];

function Brand() {
  return (
    <span className="brand-lockup">
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
      </span>
      <span>LocalDictation</span>
    </span>
  );
}

function Waveform({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "waveform waveform-compact" : "waveform"} aria-hidden="true">
      {waveHeights.map((height, index) => (
        <i key={index} style={{ height: compact ? Math.max(5, height * 0.65) : height }} />
      ))}
    </span>
  );
}

function ProductDemo({ locale, expanded = false }: { locale: Locale; expanded?: boolean }) {
  const isDe = locale === "de";
  return (
    <figure className={expanded ? "product-stage verification-stage" : "product-stage"}>
      <div className="stage-grid" aria-hidden="true" />
      <div className="mac-window mail-window">
        <div className="window-bar">
          <div className="traffic-lights" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="window-title">{isDe ? "Neue Nachricht" : "New Message"}</span>
          <span className="window-action">{isDe ? "Senden" : "Send"}</span>
        </div>
        <div className="mail-meta">
          <div><span>{isDe ? "An:" : "To:"}</span>{isDe ? "Team Produkt" : "Product Team"}</div>
          <div><span>{isDe ? "Betreff:" : "Subject:"}</span>{isDe ? "Nächste Schritte" : "Next steps"}</div>
        </div>
        <div className="mail-body">
          <p>{isDe ? "Hallo zusammen," : "Hi everyone,"}</p>
          <p>
            {isDe ? "das Review mit " : "the review with "}
            <mark className="risk-name">Müller-Lüdenscheidt</mark>
            {isDe ? " ist für Donnerstag bestätigt. Das Budget liegt bei " : " is confirmed for Thursday. The budget is "}
            <mark>14.000&nbsp;€</mark>
            {isDe ? " — bitte noch einmal prüfen." : " — please double-check."}
          </p>
          <span className="text-caret" aria-hidden="true" />
        </div>
      </div>

      <div className="dictation-bar">
        <div className="recording-state">
          <span className="recording-dot" />
          <span>{isDe ? "Diktat prüfen" : "Review dictation"}</span>
        </div>
        <Waveform />
        <div className="risk-count"><b>2</b> {isDe ? "Stellen" : "checks"}</div>
        <span className="confirm-button" aria-hidden="true">↵</span>
      </div>

      <div className="risk-popover">
        <div className="risk-label"><span /> {isDe ? "Bitte prüfen" : "Check this"}</div>
        <strong>14.000 €</strong>
        <span className="listen-control"><span aria-hidden="true">▶</span> {isDe ? "Original anhören" : "Play original"}</span>
      </div>

      {!expanded && (
        <figcaption className="stage-note">
          <span className="shortcut">⌥ Space</span>
          {isDe ? "drücken, sprechen, einsetzen" : "press, speak, insert"}
        </figcaption>
      )}
      {expanded && (
        <figcaption className="prototype-note">
          {isDe
            ? "Animierte UI-Vorschau · wird vor Veröffentlichung durch eine echte Produktaufnahme ersetzt"
            : "Animated UI preview · to be replaced with a real product capture before launch"}
        </figcaption>
      )}
    </figure>
  );
}

export function LandingPage({ locale }: { locale: Locale }) {
  const isDe = locale === "de";
  const c = isDe ? de : en;
  const downloadAvailable = Boolean(getDownloadTarget());
  const downloadHref = isDe ? "/danke?download=auto" : "/danke?lang=en&download=auto";
  const languageHref = isDe ? "/en" : "/";

  const steps = isDe
    ? [
        ["01", "Hotkey drücken", "Push-to-talk oder feststellbar — so, wie du arbeitest."],
        ["02", "Sprechen, wie du sprichst", "Deutsch, Englisch oder beides gemischt. Fachbegriffe inklusive."],
        ["03", "Nur prüfen, wenn nötig", "Zahlen, Namen und Begriffe erscheinen vor dem Einfügen in einer kompakten Prüfzeile."],
        ["04", "Bestätigen und einfügen", "Ohne offene Prüfung landet der Text direkt am Cursor. Blockiert eine App die Einfügung, bleibt der Zwischenablage-Fallback."],
      ]
    : [
        ["01", "Press the hotkey", "Use push-to-talk or lock recording on — whichever suits your workflow."],
        ["02", "Speak naturally", "English, German, or both mixed together. Technical terms included."],
        ["03", "Only review when needed", "Numbers, names, and terms appear in one compact review strip before insertion."],
        ["04", "Confirm and insert", "With no open checks, text lands directly at the cursor. If an app blocks insertion, a clipboard fallback remains."],
      ];

  const features = isDe
    ? [
        ["Aa", "Eigenes Wörterbuch", "Pro Sprache. Namen, Abkürzungen, Fachbegriffe."],
        ["↺", "Roh-Transkript", "Ein Klick zurück zum unbearbeiteten Text."],
        ["⌘", "Funktioniert überall", "Mail, Slack, Jira, Notion, Terminal, KI-Chats."],
        ["◌", "Ohne Internet", "Im Zug, im Flugzeug, im Keller."],
        ["Ⅱ", "Zwei Macs", "Eine Lizenz für MacBook und iMac."],
        ["∞", "Einmal zahlen", "€99 lebenslang — oder €49 im Jahr."],
      ]
    : [
        ["Aa", "Your vocabulary", "Names, abbreviations, and technical terms per language."],
        ["↺", "Restore raw transcript", "Return to the untouched recognition result in one click."],
        ["⌘", "Works everywhere", "Mail, Slack, Jira, Notion, Terminal, and AI chats."],
        ["◌", "No internet required", "On a train, on a plane, or in the basement."],
        ["Ⅱ", "Two Macs", "One licence for your MacBook and iMac."],
        ["∞", "Pay once", "€99 lifetime — or €49 for one year."],
      ];

  const faqs = isDe
    ? [
        ["Funktioniert die Spracherkennung wirklich offline?", "Ja. Spracherkennung und Textaufbereitung laufen auf deinem Mac. Aktivierung, Lizenzprüfung, wenige ausdrücklich benannte Produkt- und Marketingereignisse, Checkout und Updates benötigen eine Verbindung; dabei werden weder Audio noch Text, Wörterbuch oder Inhalte anderer Apps übertragen."],
        ["Brauche ich als Kanzlei oder Praxis einen AVV?", "Nein. Ein Auftragsverarbeitungsvertrag regelt die Verarbeitung durch einen Dienstleister. LocalDictation verarbeitet deine Sprachinhalte nicht für uns — diese Daten bleiben auf deinem Gerät."],
        ["Was ist der Unterschied zur Diktierfunktion von macOS?", "Sprachprofile für gemischtes Deutsch-Englisch, ein eigenes Wörterbuch, konservative Textaufbereitung und die Markierung unsicherer Stellen."],
        ["Warum zahlen, wenn es kostenlose Open-Source-Tools gibt?", "Musst du nicht. Wenn du Modelle selbst einrichtest, sind sie eine gute Wahl. Zum öffentlichen Launch ist ein signiertes, notarisiertes Paket mit Sprachprofilen, Verifikation und Support vorgesehen."],
        ["Welche Sprachen werden unterstützt?", "Deutsch, Englisch, Russisch und Ukrainisch — einzeln oder in den vorgesehenen gemischten Profilen."],
        ["Läuft es auf Intel-Macs?", "Nein. LocalDictation unterstützt Apple Silicon ab macOS 14.4."],
        ["Was passiert nach den 14 Testtagen?", "Neue Diktate werden pausiert und die App zeigt die beiden Lizenzoptionen. Einstellungen und Lizenzaktivierung bleiben erreichbar."],
        ["Kann ich die Lizenz auf zwei Macs nutzen?", "Ja. Jede Lizenz lässt sich auf zwei persönlichen Macs aktivieren."],
        ["Lifetime oder Jahreslizenz — was ist sinnvoller?", "Wenn du regelmäßig diktierst, ist Lifetime günstiger: €99 einmal statt €49 jedes Jahr. Die Jahreslizenz ist der kleinere Einstieg."],
      ]
    : [
        ["Does speech recognition really work offline?", "Yes. Speech recognition and text processing run on your Mac. Activation, licence checks, a small disclosed set of non-content events, checkout, and updates need a connection; audio, text, vocabulary, and other app content are never included."],
        ["Does my company need a data processing agreement?", "No. LocalDictation does not process your speech content on our behalf — it stays on your device."],
        ["How is it different from macOS Dictation?", "Mixed English-German profiles, a personal vocabulary, conservative cleanup, and clear highlighting of uncertain passages."],
        ["Why pay when open-source tools are free?", "You do not have to. They are a good choice if you enjoy configuring models yourself. A signed, notarised package with language profiles, verification, and support is planned for public launch."],
        ["Which languages are supported?", "English, German, Russian, and Ukrainian, including the listed mixed-language profiles."],
        ["Does it run on Intel Macs?", "No. LocalDictation supports Apple silicon with macOS 14.4 or newer."],
        ["What happens after the 14-day trial?", "New dictations pause and the app shows both licence options. Settings and licence activation stay available."],
        ["Can I use one licence on two Macs?", "Yes. One licence can be activated on two personal Macs."],
        ["Should I choose lifetime or annual?", "If you dictate regularly, lifetime costs less: €99 once instead of €49 every year. Annual is the lower-commitment option."],
      ];

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LocalDictation",
    applicationCategory: "BusinessApplication",
    operatingSystem: "macOS 14.4 or newer on Apple silicon",
    offers: [
      { "@type": "Offer", price: "99", priceCurrency: "EUR", category: "lifetime" },
      { "@type": "Offer", price: "49", priceCurrency: "EUR", category: "annual" },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([name, answer]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <div className="site-root" lang={locale}>
      <input className="theme-checkbox" type="checkbox" id={`theme-${locale}`} aria-label={isDe ? "Helles Farbschema" : "Light colour scheme"} />
      <a className="skip-link" href="#main">{isDe ? "Zum Inhalt" : "Skip to content"}</a>

      <header className="site-header-wrap">
        <div className="site-header shell">
          <a className="brand" href={isDe ? "/" : "/en"} aria-label="LocalDictation">
            <Brand />
          </a>
          <nav className="site-nav" aria-label={isDe ? "Hauptnavigation" : "Main navigation"}>
            {c.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <div className="header-actions">
            <label className="theme-switch" htmlFor={`theme-${locale}`} title={isDe ? "Farbschema wechseln" : "Switch colour scheme"}>
              <span aria-hidden="true">◐</span>
              <span className="sr-only">{isDe ? "Farbschema wechseln" : "Switch colour scheme"}</span>
            </label>
            <a className="language-switch" href={languageHref} hrefLang={isDe ? "en" : "de"}>{isDe ? "EN" : "DE"}</a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero shell" id="top">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" />{c.hero.eyebrow}</div>
            <h1>{c.hero.title} <span>{c.hero.titleMuted}</span></h1>
            <p className="hero-lede">{c.hero.lede}</p>
            <p className="audience-line">{c.hero.audience}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={downloadHref}>
                <span className="download-symbol" aria-hidden="true">↓</span>{isDe ? "Für Mac laden" : "Download for Mac"}
              </a>
              <a className="button button-quiet" href="#verifikation">{c.hero.demo} <span aria-hidden="true">↓</span></a>
            </div>
            <p className="fine-print">
              {c.hero.fine.map((item, index) => <span key={item}>{index > 0 && <i />} {item}</span>)}
            </p>
          </div>
          <ProductDemo locale={locale} />
        </section>

        <aside className="trust-strip" aria-label={isDe ? "Produktversprechen" : "Product promises"}>
          <div className="shell trust-grid">
            {c.trust.map((item, index) => <span key={item}><b>{index === 0 ? "●" : "✓"}</b>{item}</span>)}
          </div>
        </aside>

        <section className="section process-section shell" id="funktion">
          <div className="section-intro">
            <p className="section-kicker">01 — {isDe ? "Ablauf" : "Workflow"}</p>
            <h2>{isDe ? "In vier Schritten vom Gedanken zum Text" : "From thought to text in four steps"}</h2>
            <p>{isDe ? "Ein kurzer, sichtbarer Ablauf. Kein Editor, in den du erst wechseln musst." : "A short, visible workflow. No separate editor to switch into."}</p>
          </div>
          <div className="steps-grid">
            {steps.map(([number, title, body]) => (
              <article className="step" key={number}>
                <span className="step-number">{number}</span>
                <div className="step-icon" aria-hidden="true">{number === "01" ? "⌥" : number === "02" ? <Waveform compact /> : number === "03" ? "!" : "↵"}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <a className="text-link" href="#verifikation">{isDe ? "Und wenn etwas geraten wurde" : "And when the model had to guess"} <span aria-hidden="true">↘</span></a>
        </section>

        <section className="section verification-section" id="verifikation">
          <div className="shell verification-layout">
            <div className="verification-copy">
              <p className="section-kicker">02 — {isDe ? "Verifikation" : "Verification"}</p>
              <h2>{isDe ? "Du siehst, was du prüfen musst" : "See exactly what needs checking"}</h2>
              <p className="section-lede">
                {isDe
                  ? "Andere Diktier-Tools polieren Unsicherheit weg. Aus 14.000 € wird 40.000 € — und du merkst es erst in der gesendeten Mail."
                  : "Other dictation tools polish uncertainty away. €14,000 becomes €40,000 — and you only notice after sending the email."}
              </p>
              <p>
                {isDe
                  ? "LocalDictation markiert Zahlen, Datumsangaben, Eigennamen, Verneinungen und Wörterbuchbegriffe vor der Einfügung. Spiele den Originalton ab, vergleiche das Roh-Transkript und bestätige erst dann."
                  : "LocalDictation highlights numbers, dates, names, negations, and vocabulary terms before insertion. Play the original audio, compare the raw transcript, and confirm only then."}
              </p>
              <div className="verification-points">
                <span><b>01</b>{isDe ? "Originalton" : "Original audio"}</span>
                <span><b>02</b>{isDe ? "Roh-Transkript" : "Raw transcript"}</span>
                <span><b>03</b>{isDe ? "Deine Bestätigung" : "Your confirmation"}</span>
              </div>
            </div>
            <ProductDemo locale={locale} expanded />
          </div>
        </section>

        <section className="section privacy-section shell" id="datenschutz">
          <div className="privacy-panel">
            <div className="privacy-copy">
              <p className="section-kicker">03 — {isDe ? "Privatsphäre" : "Privacy"}</p>
              <h2>{isDe ? "Offline heißt offline — und du kannst es nachprüfen" : "Offline means offline — and you can verify it"}</h2>
              <p className="section-lede">{isDe ? "Schalte dein WLAN aus und diktiere weiter. Es funktioniert." : "Turn Wi‑Fi off and keep dictating. It still works."}</p>
              <p>{isDe ? "Audio und Text werden auf deinem Mac verarbeitet. Audio bleibt nur während des aktuellen Diktats und einer möglichen Prüfung im Arbeitsspeicher und wird danach verworfen." : "Audio and text are processed on your Mac. Audio stays in memory only for the active dictation and any review, then it is discarded."}</p>
            </div>
            <div className="offline-proof" role="img" aria-label={isDe ? "Schaubild: Sprache wird nur auf dem Mac verarbeitet" : "Diagram: speech is processed only on the Mac"}>
              <div className="offline-status"><span />{isDe ? "Offline bereit" : "Ready offline"}</div>
              <div className="device-frame">
                <div className="device-notch" />
                <div className="local-flow">
                  <div><span>1</span>{isDe ? "Sprache" : "Speech"}</div><i>→</i>
                  <div><span>2</span>STT</div><i>→</i>
                  <div><span>3</span>{isDe ? "Text" : "Text"}</div>
                </div>
                <p>{isDe ? "Verarbeitet auf diesem Mac" : "Processed on this Mac"}</p>
              </div>
              <div className="network-blocked"><span aria-hidden="true">⌁</span><s>Cloud upload</s></div>
            </div>
          </div>
          <div className="privacy-facts">
            <article><span>01</span><h3>{isDe ? "Kein Benutzerkonto" : "No user account"}</h3><p>{isDe ? "E-Mail nur für den Lizenzschlüssel. Kein Profil, kein Passwort." : "Email only for the licence key. No profile or password."}</p></article>
            <article><span>02</span><h3>{isDe ? "Kein AVV nötig" : "No DPA required"}</h3><p>{isDe ? "Wir verarbeiten deine Sprachinhalte nicht in deinem Auftrag." : "We do not process your speech content on your behalf."}</p></article>
            <article><span>03</span><h3>{isDe ? "Netzwerkzugriffe offengelegt" : "Network access disclosed"}</h3><p>{isDe ? "Nur Aktivierung, Lizenz, Checkout, Updates und klar benannte Nicht-Inhaltsereignisse." : "Only activation, licensing, checkout, updates, and explicitly named non-content events."}</p></article>
          </div>
          <p className="privacy-disclosure">
            {isDe
              ? "Nie übertragen werden Audio, Transkripte, Wörterbuch, Zwischenablage, Inhalte anderer Apps oder markierte Risikofragmente. Netzwerkzugriffe sind auf Aktivierung, Lizenzprüfung, Checkout, Updates sowie ausdrücklich benannte, inhaltsfreie Funnel-Ereignisse mit minimalen technischen Metadaten begrenzt."
              : "Audio, transcripts, vocabulary, clipboard data, other app content, and highlighted risk fragments are never transmitted. Network access is limited to activation, licence checks, checkout, updates, and explicitly disclosed content-free funnel events with minimal technical metadata."}{" "}
            <a href="/datenschutz">{isDe ? "Felder, Zweck, Empfänger und Speicherdauer ansehen" : "See fields, purpose, recipients, and retention"} ↗</a>
          </p>
        </section>

        <section className="section language-section">
          <div className="shell language-layout">
            <div className="section-intro">
              <p className="section-kicker">04 — {isDe ? "Sprachen" : "Languages"}</p>
              <h2>{isDe ? "Deutsch und Englisch in einem Satz" : "English and German in one sentence"}</h2>
              <p>{isDe ? "Sprachprofile statt Ratespiel. Du sagst dem Modell, welche Sprachen wirklich vorkommen." : "Language profiles instead of guesswork. Tell the model which languages to expect."}</p>
              <div className="language-pills">
                {(isDe ? ["DE + EN", "RU + UK", "RU + EN", "UK + EN"] : ["EN + DE", "RU + UK", "RU + EN", "UK + EN"]).map((item, index) => <span className={index === 0 ? "active" : ""} key={item}>{item}{index === 0 && <b>✓</b>}</span>)}
              </div>
            </div>
            <div className="dictionary-window">
              <div className="dictionary-header"><span>{isDe ? "Eigenes Wörterbuch" : "Personal vocabulary"}</span><b>+</b></div>
              {["Müller-Lüdenscheidt", "Auftragsverarbeitungsvertrag", "Kubernetes", "DB Navigator", "Zeiterfassung"].map((word, index) => (
                <div className="dictionary-row" key={word}><span>{word}</span><small>{index < 2 ? "Deutsch" : index === 2 ? "English" : "Alle Profile"}</small></div>
              ))}
              <p>{isDe ? "Namen, Produktbegriffe und Abkürzungen werden so geschrieben, wie du sie brauchst." : "Names, product terms, and abbreviations are written the way you need them."}</p>
            </div>
          </div>
        </section>

        <section className="section features-section shell">
          <div className="section-intro section-intro-row">
            <div><p className="section-kicker">05 — {isDe ? "Werkzeuge" : "Tools"}</p><h2>{isDe ? "Klein im Menü. Groß im Alltag." : "Small in your menu bar. Big in your day."}</h2></div>
            <p>{isDe ? "Nur Funktionen, die den Weg von der Sprache zum Text kürzer oder sicherer machen." : "Only the tools that make the path from speech to text shorter or safer."}</p>
          </div>
          <div className="features-grid">
            {features.map(([symbol, title, body]) => <article key={title}><span className="feature-symbol">{symbol}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </section>

        <section className="section comparison-section" id="vergleich">
          <div className="shell">
            <div className="section-intro">
              <p className="section-kicker">06 — {isDe ? "Vergleich" : "Comparison"}</p>
              <h2>{isDe ? "Warum nicht kostenlos — und warum nicht die Cloud" : "Why not free — and why not the cloud"}</h2>
            </div>
            {/* The overflow region must be focusable so keyboard users can scroll the wide table. */}
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
            <div className="comparison-wrap" role="region" tabIndex={0} aria-label={isDe ? "Vergleichstabelle, horizontal scrollbar" : "Comparison table, horizontally scrollable"}>
              <table>
                <thead><tr><th>{isDe ? "Merkmal" : "Feature"}</th><th className="featured-col">LocalDictation</th><th>Wispr Flow</th><th>sprecho.ai</th><th>Superwhisper</th><th>VoiceInk</th></tr></thead>
                <tbody>
                  {(isDe ? [
                    ["Sprachverarbeitung", "lokal", "Cloud", "EU-Cloud", "lokal oder Cloud", "lokal"],
                    ["Unsichere Stellen", "vor Einfügung markiert", "nicht öffentlich dokumentiert", "nicht öffentlich dokumentiert", "nicht öffentlich dokumentiert", "nicht öffentlich dokumentiert"],
                    ["Sprachwahl DE + EN", "festes Mischprofil", "100+ Sprachen", "Auto-Erkennung", "Sprache je Modus", "modellabhängig"],
                    ["Kostenloser Einstieg", "14 Tage Vollversion", "Basic mit Wochenlimit", "14 Tage Vollversion", "dauerhafter Free-Tarif", "kostenloser Test"],
                    ["Bezahlpreis", "€99 einmalig / €49 Jahr", "€15 Monat / €144 Jahr", "€10,99 Monat, jährlich", "$84.99 Jahr / $249.99 Lifetime", "$29–69 einmalig"],
                    ["Fertiger Mac-Download", "zum Launch vorgesehen", "ja", "ja", "ja", "ja"],
                  ] : [
                    ["Speech processing", "local", "cloud", "EU cloud", "local or cloud", "local"],
                    ["Uncertain passages", "highlighted before insertion", "not publicly documented", "not publicly documented", "not publicly documented", "not publicly documented"],
                    ["English + German choice", "fixed mixed profile", "100+ languages", "auto-detection", "language per mode", "model-dependent"],
                    ["Free entry", "14-day full trial", "Basic with weekly limit", "14-day full trial", "ongoing free tier", "free trial"],
                    ["Paid price", "€99 once / €49 year", "€15 month / €144 year", "€10.99 month, billed annually", "$84.99 year / $249.99 lifetime", "$29–69 once"],
                    ["Ready Mac download", "planned for launch", "yes", "yes", "yes", "yes"],
                  ]).map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={cell}>{cell}</th> : <td className={index === 1 ? "featured-col" : ""} key={`${row[0]}-${index}`}>{index === 1 && <b>✓</b>}{cell}</td>)}</tr>)}
                </tbody>
              </table>
            </div>
            <div className="comparison-note">
              <p>{isDe ? "Wenn du Whisper selbst einrichten möchtest, sind Open-Source-Tools eine gute Wahl. LocalDictation ist für alle, die stattdessen direkt arbeiten wollen — fertig eingerichtet, mit Sprachprofilen, Verifikation und erreichbarem Support." : "If you enjoy configuring Whisper yourself, open-source tools are a good choice. LocalDictation is for people who would rather get straight to work — configured, verified, and supported."}</p>
              <span>
                {isDe ? "Offizielle Quellen, geprüft am 18.08.2026:" : "Official sources, checked 18 Aug 2026:"}{" "}
                <a href="https://docs.wisprflow.ai/articles/9559327591-flow-plans-and-what-s-included">Wispr Flow</a>{" · "}
                <a href="https://sprecho.ai/pricing">Sprecho</a>{" · "}
                <a href="https://superwhisper.com/docs/get-started/sw-pro">Superwhisper</a>{" · "}
                <a href="https://tryvoiceink.com/pricing">VoiceInk</a>
              </span>
            </div>
          </div>
        </section>

        <section className="section pricing-section shell" id="preis">
          <div className="section-intro pricing-intro">
            <p className="section-kicker">07 — {isDe ? "Preis" : "Pricing"}</p>
            <h2>{isDe ? "Einmal zahlen. Für immer nutzen." : "Pay once. Keep using it."}</h2>
            <p>{isDe ? "Schneller als Tippen. Nichts verlässt deinen Mac. Und keine monatliche Abbuchung, die du irgendwann zu kündigen vergisst." : "Faster than typing. Nothing leaves your Mac. And no monthly charge you eventually forget to cancel."}</p>
          </div>
          <div className="pricing-grid">
            <article className="price-card price-primary">
              <div className="price-top"><span>{isDe ? "Lifetime" : "Lifetime"}</span><b>{isDe ? "Empfohlen" : "Recommended"}</b></div>
              <div className="price"><sup>€</sup>99 <small>{isDe ? "inkl. MwSt." : "incl. VAT"}</small></div>
              <p>{isDe ? "Einmal zahlen, dauerhaft nutzen." : "Pay once and keep using it."}</p>
              <ul><li>{isDe ? "2 Macs" : "2 Macs"}</li><li>{isDe ? "Alle Updates von Version 1" : "All version 1 updates"}</li><li>{isDe ? "30 Tage Geld zurück" : "30-day money-back guarantee"}</li></ul>
            </article>
            <article className="price-card">
              <div className="price-top"><span>{isDe ? "Jahreslizenz" : "Annual licence"}</span></div>
              <div className="price"><sup>€</sup>49 <small>{isDe ? "inkl. MwSt. / Jahr" : "incl. VAT / year"}</small></div>
              <p>{isDe ? "Ein Jahr nutzen, danach kündbar." : "Use it for one year, then cancel."}</p>
              <ul><li>2 Macs</li><li>{isDe ? "Alle Updates im Zeitraum" : "All updates during your term"}</li><li>{isDe ? "30 Tage Geld zurück" : "30-day money-back guarantee"}</li></ul>
            </article>
          </div>
          <a className="button button-primary pricing-download" href={downloadHref}>{isDe ? "Für Mac laden" : "Download for Mac"}</a>
          <p className="pricing-footnote">{isDe ? "Erst testen, dann entscheiden. Gekauft wird in der App nach dem Test. Verfügbare Zahlungsmethoden werden vor dem Checkout bestätigt." : "Try it first, then decide. Purchase happens in the app after your trial. Payment methods will be confirmed before checkout."}</p>
          <p className="cost-compare"><span>2 Jahre Cloud</span><s>$360</s><i>→</i><span>LocalDictation Lifetime</span><b>€99</b></p>
        </section>

        <section className="section faq-section" id="faq">
          <div className="shell faq-layout">
            <div className="section-intro faq-intro"><p className="section-kicker">08 — FAQ</p><h2>{isDe ? "Klartext, bevor du installierst" : "Straight answers before you install"}</h2><p>{isDe ? "Keine Fußnoten, die das Produktversprechen zurücknehmen." : "No footnotes that quietly undo the product promise."}</p></div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{question}</span><i aria-hidden="true">+</i></summary><p>{answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className="final-cta shell">
          <div className="final-cta-inner">
            <div className="final-wave" aria-hidden="true"><Waveform /><Waveform /><Waveform /></div>
            <p className="section-kicker">09 — {isDe ? "Loslegen" : "Get started"}</p>
            <h2>{isDe ? "Morgen früh schreibst du deine erste Mail, ohne sie zu tippen" : "Tomorrow morning, write your first email without typing it"}</h2>
            <p>{isDe ? "Lade LocalDictation, drück den Hotkey, sprich. Nach fünf Diktaten oder 24 Stunden schaltest du den 14-Tage-Test mit einem E-Mail-Schlüssel frei — ohne Produktkonto und ohne Kreditkarte. Beim Entfernen bleibt kein Audio- oder Transkriptarchiv zurück." : "Download LocalDictation, press the hotkey, and speak. After five dictations or 24 hours, unlock the 14-day trial with an email key — no product account or credit card. Removing the app leaves no audio or transcript archive behind."}</p>
            <a className="button button-primary button-large" href={downloadHref}><span aria-hidden="true">↓</span>{isDe ? "Für Mac laden" : "Download for Mac"}</a>
            <small>{downloadAvailable ? (isDe ? "Apple Silicon · macOS 14.4+" : "Apple silicon · macOS 14.4+") : (isDe ? "Private Vorschau ohne Build · Apple Silicon · macOS 14.4+" : "Private preview without build · Apple silicon · macOS 14.4+")}</small>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-top"><Brand /><p>{isDe ? "Lokale Diktier-Software für Menschen, die Unsicherheit lieber sehen als übersehen." : "Local dictation for people who would rather see uncertainty than miss it."}</p></div>
        <div className="shell footer-bottom">
          <span>© 2026 LocalDictation</span>
          <nav aria-label={isDe ? "Rechtliche Links" : "Legal links"}><a href="/impressum">Impressum</a><a href="/datenschutz">Datenschutz</a><a href="/widerruf">Widerruf</a><a href="mailto:hallo@localdictation.app">Kontakt</a></nav>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  );
}
