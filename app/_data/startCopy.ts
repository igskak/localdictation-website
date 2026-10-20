/**
 * The paid-entry pages: `/start` and `/en/start` for the readers the ads send,
 * `/start/danke` and `/en/start/danke` after the payment, and the cancellation
 * form at `/kuendigen` and `/en/cancel-subscription`.
 *
 * German and English only. The ads are German and English, the legal set is
 * German and English, and a third language here would be a third copy of a price
 * sentence that has to say the same thing everywhere.
 *
 * The price sentence is the one that matters legally and commercially: what is
 * charged today, what is charged on the fifteenth day, and how to stop it. It is
 * written once per language in `price.line` and repeated verbatim wherever a
 * price appears, so no page can say "€4,99" without saying what follows.
 */
import type { Locale } from "../_lib/locale";

export type StartLocale = Extract<Locale, "de" | "en">;

export type StartCopy = {
  meta: { title: string; description: string };
  header: { cta: string };
  hero: { eyebrow: string; title: string; titleMuted: string; lede: string; cta: string; fine: string[] };
  consent: { label: string; declaration: string; terms: string; withdrawal: string; needsScript: string; soon: string };
  steps: { kicker: string; title: string; items: { title: string; body: string }[] };
  gives: { kicker: string; title: string; items: { title: string; body: string }[] };
  price: { kicker: string; title: string; today: string; todayNote: string; then: string; thenNote: string; line: string; bullets: string[]; paymentNote: string };
  faq: { title: string; items: { q: string; a: string }[] };
  thanks: {
    meta: { title: string; description: string };
    title: string;
    lede: string;
    download: string;
    downloadAgain: string;
    steps: { title: string; body: string }[];
    keep: string;
    manage: string;
    cancel: string;
    help: string;
    helpLink: string;
  };
  cancel: {
    meta: { title: string; description: string };
    kicker: string;
    title: string;
    lede: string;
    emailLabel: string;
    emailHint: string;
    button: string;
    doneTitle: string;
    doneBody: string;
    failedTitle: string;
    failedBody: string;
    manageLead: string;
    manageLink: string;
    privacy: string;
    privacyLink: string;
  };
  footer: { cancel: string };
};

export const startCopy: Record<StartLocale, StartCopy> = {
  de: {
    meta: {
      title: "Witness für den Mac · Diktieren statt tippen",
      description: "Diktier-App für den Mac mit Hinweis, wo ein zweiter Blick lohnt. Spracherkennung läuft auf deinem Mac. 14 Tage für €4,99, danach €49 pro Jahr.",
    },
    header: { cta: "Für €4,99 starten" },
    hero: {
      eyebrow: "Diktier-App für den Mac · Sprache zu Text, lokal",
      title: "Diktieren statt tippen.",
      titleMuted: "Mit Hinweis, wo ein zweiter Blick lohnt.",
      lede: "Drück ⌥ Space und sprich, gern Deutsch und Englisch gemischt. Der Text steht sofort am Cursor. Gibt es eine Stelle, auf die du achten solltest, zeigt Witness sie dir, und du hörst dir an, was du gesagt hast. Alles läuft auf deinem Mac.",
      cta: "Für €4,99 starten",
      fine: ["14 Tage ab Kauf", "Apple Silicon", "macOS 14.4+", "Kein Benutzerkonto"],
    },
    consent: {
      label: "Schick mir den Lizenzschlüssel, sobald ich bezahlt habe. Mir ist bewusst, dass ich mein Widerrufsrecht verliere, sobald die Lieferung beginnt.",
      declaration: "Ich verlange ausdrücklich die sofortige Ausführung des Vertrags und bestätige, dass ich dadurch mein Widerrufsrecht verliere.",
      terms: "Vertrags- und Lizenzbedingungen",
      withdrawal: "Widerruf",
      needsScript: "Zum Bestellen braucht diese Seite JavaScript. Schreib sonst an hallo@witnessmac.com.",
      soon: "Der Kauf ist in Kürze möglich.",
    },
    steps: {
      kicker: "So geht es",
      title: "In drei Schritten diktieren",
      items: [
        { title: "Bezahlen", body: "€4,99 für die ersten 14 Tage. Du zahlst bei Stripe, ein Benutzerkonto brauchst du nicht." },
        { title: "Witness laden und öffnen", body: "Der Download startet nach der Zahlung. Witness lädt einmalig das Sprachmodell auf deinen Mac, danach diktierst du ohne Verbindung." },
        { title: "Am dritten Tag die E-Mail eingeben", body: "Drei Tage fragt Witness nach nichts. Danach bittet es um deine E-Mail-Adresse. Gib die ein, mit der du bezahlt hast, und deine Lizenz ist aktiv." },
      ],
    },
    gives: {
      kicker: "Was du bekommst",
      title: "Ein Diktat, das du nicht blind einsetzen musst",
      items: [
        { title: "Lokal auf deinem Mac", body: "Audio, Transkript und Text verlassen deinen Mac nicht. Es gibt kein Benutzerkonto und keinen Server, der deine Diktate sieht." },
        { title: "Hinweis, wo ein Blick lohnt", body: "Der Text steht sofort am Cursor. Witness markiert Stellen, die du prüfen solltest, und spielt dir den Originalton dazu vor." },
        { title: "Deutsch, Englisch und mehr", body: "Du wählst die Sprachen, die du sprichst. Deutsch, Englisch, Russisch und Ukrainisch sind vollständig gemessen, die übrigen werden erkannt." },
      ],
    },
    price: {
      kicker: "Preis",
      title: "Erst 14 Tage für €4,99, dann ein Jahr",
      today: "€4,99",
      todayNote: "heute, für die ersten 14 Tage",
      then: "€49",
      thenNote: "danach pro Jahr, automatisch, wenn du nicht bis zum 14. Tag kündigst",
      line: "€4,99 für die ersten 14 Tage ab Kauf. Danach €49 pro Jahr, automatisch, wenn du nicht bis zum 14. Tag kündigst. Dann zahlst du nichts weiter.",
      bullets: ["Bis zum 14. Tag kündbar, mit einem Klick unter „Verträge hier kündigen“", "Für zwei deiner Macs", "Alle Updates im Zeitraum", "Endpreise"],
      paymentNote: "Bezahlt wird über Stripe. Verfügbare Zahlungsarten siehst du vor dem Abschluss.",
    },
    faq: {
      title: "Klartext vor dem Kauf",
      items: [
        { q: "Wie kündige ich?", a: "Unter „Verträge hier kündigen“ am Ende jeder Seite, ohne Anmeldung. Du gibst die E-Mail-Adresse ein, mit der du bezahlt hast, und bekommst sofort eine Bestätigung per E-Mail. Alternativ geht es über „Abonnement verwalten“ in den Einstellungen von Witness." },
        { q: "Was passiert am 15. Tag?", a: "Wenn du nicht gekündigt hast, zieht Stripe die €49 für das erste Jahr ein und Witness läuft weiter. Du musst dafür nichts tun. Hast du gekündigt, endet der Zugang nach den 14 Tagen und es wird nichts weiter abgebucht." },
        { q: "Läuft Witness ohne Internet?", a: "Ja. Erkennung und Textaufbereitung laufen auf deinem Mac. Nur der Lizenzschlüssel wird etwa einmal im Monat im Hintergrund erneuert. Dafür geht deine E-Mail-Adresse und eine Gerätekennung an unseren Aktivierungsdienst, sonst nichts." },
        { q: "Was passiert mit meinen Diktaten?", a: "Nichts. Audio und Text bleiben auf deinem Mac. Die vollständige Liste dessen, was Witness überhaupt überträgt, steht in der Datenschutzerklärung." },
      ],
    },
    thanks: {
      meta: { title: "Danke · Witness", description: "Dein Kauf ist angekommen. So installierst du Witness und aktivierst deine Lizenz." },
      title: "Danke, dein Kauf ist angekommen.",
      lede: "Lade Witness und öffne es. Die ersten drei Tage fragt Witness nach nichts. Am dritten Tag bittet es um deine E-Mail-Adresse. Gib dort die Adresse ein, mit der du gerade bezahlt hast, dann ist deine Lizenz aktiv.",
      download: "Witness für den Mac laden",
      downloadAgain: "Download noch einmal starten",
      steps: [
        { title: "Laden und in Programme ziehen", body: "Öffne die Datei und ziehe Witness in den Ordner Programme. Witness läuft auf Macs mit Apple Silicon ab macOS 14.4." },
        { title: "Mikrofon und Bedienungshilfen erlauben", body: "Beim ersten Start fragt macOS nach dem Mikrofon. Damit Witness Text am Cursor einsetzen kann, erlaubst du es unter Systemeinstellungen → Datenschutz & Sicherheit → Bedienungshilfen." },
        { title: "Diktieren", body: "Drück ⌥ Space und sprich. Das Sprachmodell lädt beim ersten Start einmalig auf deinen Mac, das dauert ein paar Minuten." },
      ],
      keep: "Wichtig: Gib am dritten Tag die E-Mail-Adresse ein, mit der du bezahlt hast. Mit einer anderen Adresse erkennt Witness deinen Kauf nicht.",
      manage: "Abonnement verwalten",
      cancel: "Verträge hier kündigen",
      help: "Hakt etwas?",
      helpLink: "Schreib uns",
    },
    cancel: {
      meta: { title: "Verträge hier kündigen · Witness", description: "Kündige dein Witness-Abonnement ohne Anmeldung." },
      kicker: "Kündigung",
      title: "Verträge hier kündigen",
      lede: "Gib die E-Mail-Adresse ein, mit der du bezahlt hast, und kündige mit einem Klick. Dein Abonnement verlängert sich dann nicht. Witness bleibt bis zum Ende des bezahlten Zeitraums nutzbar. Die Bestätigung bekommst du sofort hier und per E-Mail.",
      emailLabel: "E-Mail-Adresse",
      emailHint: "Die Adresse, mit der du bezahlt hast.",
      button: "Jetzt kündigen",
      doneTitle: "Deine Kündigung ist eingegangen.",
      doneBody: "Wenn unter dieser Adresse ein Abonnement läuft, ist es gekündigt und verlängert sich nicht. Die Bestätigung mit Datum und Uhrzeit ist an diese Adresse unterwegs. Witness bleibt bis zum Ende des bezahlten Zeitraums nutzbar.",
      failedTitle: "Das hat nicht geklappt.",
      failedBody: "Die Kündigung konnte gerade nicht entgegengenommen werden. Versuch es gleich noch einmal oder schreib an hallo@witnessmac.com. Eine formlose E-Mail genügt, wir beenden die Verlängerung dann von Hand.",
      manageLead: "Du kannst dein Abonnement auch selbst verwalten, die Karte ändern oder Rechnungen laden:",
      manageLink: "Abonnement verwalten",
      privacy: "Was mit der Adresse geschieht, steht in der",
      privacyLink: "Datenschutzerklärung",
    },
    footer: { cancel: "Verträge hier kündigen" },
  },
  en: {
    meta: {
      title: "Witness for Mac · Dictate instead of typing",
      description: "A dictation app for Mac that points to where a second look pays off. Speech recognition runs on your Mac. 14 days for €4.99, then €49 a year.",
    },
    header: { cta: "Start for €4.99" },
    hero: {
      eyebrow: "Voice to text app for Mac · runs offline",
      title: "Dictate instead of typing.",
      titleMuted: "With a nudge where a second look pays off.",
      lede: "Press ⌥ Space and speak, English and German mixed if you like. The text lands at your cursor right away. If there is a spot worth checking, Witness points to it, and you can hear what you actually said. Everything runs on your Mac.",
      cta: "Start for €4.99",
      fine: ["14 days from purchase", "Apple silicon", "macOS 14.4+", "No user account"],
    },
    consent: {
      label: "Send my license key as soon as I have paid. I understand that I give up my right of withdrawal once delivery begins.",
      declaration: "Ich verlange ausdrücklich die sofortige Ausführung des Vertrags und bestätige, dass ich dadurch mein Widerrufsrecht verliere.",
      terms: "Terms",
      withdrawal: "Right of withdrawal",
      needsScript: "This page needs JavaScript to order. Otherwise write to hallo@witnessmac.com.",
      soon: "Purchase will open shortly.",
    },
    steps: {
      kicker: "How it works",
      title: "Dictating in three steps",
      items: [
        { title: "Pay", body: "€4.99 for the first 14 days. You pay at Stripe, no user account needed." },
        { title: "Download and open Witness", body: "The download starts after payment. Witness fetches the speech model to your Mac once, and after that you dictate offline." },
        { title: "Enter your email on day three", body: "For three days Witness asks for nothing. Then it asks for your email address. Enter the one you paid with and your license is active." },
      ],
    },
    gives: {
      kicker: "What you get",
      title: "Dictation you do not have to insert blind",
      items: [
        { title: "Local on your Mac", body: "Audio, transcript and text never leave your Mac. There is no user account and no server that sees your dictation." },
        { title: "A nudge where a look pays off", body: "The text lands at your cursor at once. Witness marks spots you should check and plays you the original audio of that spot." },
        { title: "German, English and more", body: "You pick the languages you speak. German, English, Russian and Ukrainian are fully measured; the others are recognised." },
      ],
    },
    price: {
      kicker: "Pricing",
      title: "€4.99 for the first 14 days, then a year",
      today: "€4.99",
      todayNote: "today, for the first 14 days",
      then: "€49",
      thenNote: "a year after that, automatically, unless you cancel by day 14",
      line: "€4.99 for the first 14 days from purchase. Then €49 a year, automatically, unless you cancel by day 14. Then you pay nothing more.",
      bullets: ["Cancel until day 14 with one click under “Cancel contracts here”", "For two of your Macs", "All updates during your term", "Final prices"],
      paymentNote: "Payment is handled by Stripe. You see the available payment methods before you pay.",
    },
    faq: {
      title: "Straight answers before you buy",
      items: [
        { q: "How do I cancel?", a: "Under “Cancel contracts here” at the bottom of every page, without signing in. Enter the email address you paid with and you get a confirmation by email at once. You can also use “Manage subscription” in Witness settings." },
        { q: "What happens on day 15?", a: "If you have not cancelled, Stripe charges €49 for the first year and Witness keeps working. You do nothing. If you cancelled, access ends after the 14 days and nothing more is charged." },
        { q: "Does Witness work offline?", a: "Yes. Recognition and text cleanup run on your Mac. Only the license key is renewed in the background about once a month. For that, your email address and a device identifier go to our activation service, nothing else." },
        { q: "What happens to my dictation?", a: "Nothing. Audio and text stay on your Mac. The complete list of what Witness transmits at all is in the privacy policy." },
      ],
    },
    thanks: {
      meta: { title: "Thank you · Witness", description: "Your purchase arrived. How to install Witness and activate your license." },
      title: "Thank you, your purchase arrived.",
      lede: "Download Witness and open it. For the first three days Witness asks for nothing. On day three it asks for your email address. Enter the one you just paid with and your license is active.",
      download: "Download Witness for Mac",
      downloadAgain: "Start the download again",
      steps: [
        { title: "Download and drag to Applications", body: "Open the file and drag Witness into the Applications folder. Witness runs on Apple silicon Macs with macOS 14.4 or later." },
        { title: "Allow microphone and Accessibility", body: "On first launch macOS asks for the microphone. So that Witness can insert text at your cursor, allow it under System Settings → Privacy & Security → Accessibility." },
        { title: "Dictate", body: "Press ⌥ Space and speak. The speech model downloads once on first launch, which takes a few minutes." },
      ],
      keep: "Important: on day three, enter the email address you paid with. With a different address Witness does not recognise your purchase.",
      manage: "Manage subscription",
      cancel: "Cancel contracts here",
      help: "Stuck?",
      helpLink: "Write to us",
    },
    cancel: {
      meta: { title: "Cancel contracts here · Witness", description: "Cancel your Witness subscription without signing in." },
      kicker: "Cancellation",
      title: "Cancel contracts here",
      lede: "Enter the email address you paid with and cancel with one click. Your subscription then does not renew. Witness stays usable until the end of the period you paid for. You get the confirmation here at once and by email.",
      emailLabel: "Email address",
      emailHint: "The address you paid with.",
      button: "Cancel now",
      doneTitle: "Your cancellation was received.",
      doneBody: "If a subscription runs under this address, it is cancelled and does not renew. The confirmation with date and time is on its way to that address. Witness stays usable until the end of the period you paid for.",
      failedTitle: "That did not work.",
      failedBody: "The cancellation could not be taken just now. Try again in a moment or write to hallo@witnessmac.com. A plain email is enough, and we stop the renewal by hand.",
      manageLead: "You can also manage your subscription yourself, change the card or download invoices:",
      manageLink: "Manage subscription",
      privacy: "What happens to the address is in the",
      privacyLink: "privacy policy",
    },
    footer: { cancel: "Cancel contracts here" },
  },
};

/** Paths of the cancellation form, per language. */
export const cancelPaths: Record<StartLocale, string> = { de: "/kuendigen", en: "/en/cancel-subscription" };

/** Where the cancellation form posts to, per language. */
export const cancelSubmitPaths: Record<StartLocale, string> = { de: "/kuendigen/senden", en: "/en/cancel-subscription/submit" };

export const startPaths: Record<StartLocale, string> = { de: "/start", en: "/en/start" };
export const thanksPaths: Record<StartLocale, string> = { de: "/start/danke", en: "/en/start/danke" };
