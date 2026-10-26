/**
 * The paid-entry pages for readers sent by ads, their post-purchase pages, and
 * the cancellation forms. German, English, Spanish, Italian, and French share
 * one typed content shape so the price disclosure cannot drift by market.
 *
 * The legal documents are still German and English. ES/IT/FR link to the
 * English set until reviewed translations land; the expansion plan gates paid
 * acquisition on replacing that fallback.
 *
 * The price sentence is the one that matters legally and commercially: what is
 * charged today, what is charged on the fifteenth day, and how to stop it. It is
 * written once per language in `price.line` and repeated verbatim wherever a
 * price appears, so no page can say "€4,99" without saying what follows.
 */
import type { PageLocale } from "../_lib/locale";

export type StartLocale = Extract<PageLocale, "de" | "en" | "es" | "it" | "fr">;
export const startLocales: StartLocale[] = ["de", "en", "es", "it", "fr"];

export type StartCopy = {
  meta: { title: string; description: string };
  header: { cta: string };
  hero: { eyebrow: string; title: string; titleMuted: string; lede: string; cta: string; fine: string[] };
  consent: { terms: string; withdrawal: string; soon: string };
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
  footer: { legalNav: string; terms: string; withdrawal: string; cancel: string; privacy: string; imprint: string; licences: string; contact: string };
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
      terms: "Vertrags- und Lizenzbedingungen",
      withdrawal: "Widerruf",
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
    footer: { legalNav: "Rechtliche Links", terms: "AGB", withdrawal: "Widerruf", cancel: "Verträge hier kündigen", privacy: "Datenschutz", imprint: "Impressum", licences: "Lizenzen", contact: "Kontakt" },
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
      terms: "Terms",
      withdrawal: "Right of withdrawal",
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
    footer: { legalNav: "Legal links", terms: "Terms", withdrawal: "Right of withdrawal", cancel: "Cancel contracts here", privacy: "Privacy", imprint: "Legal notice", licences: "Licences", contact: "Contact" },
  },
  es: {
    meta: {
      title: "Witness para Mac · Dicta en lugar de escribir",
      description: "Una app de dictado para Mac que señala dónde conviene revisar. El reconocimiento de voz se ejecuta en tu Mac. 14 días por 4,99 €, después 49 € al año.",
    },
    header: { cta: "Empezar por 4,99 €" },
    hero: {
      eyebrow: "Voz a texto para Mac · funciona sin conexión",
      title: "Dicta en lugar de escribir.",
      titleMuted: "Con una señal donde conviene revisar.",
      lede: "Pulsa ⌥ Espacio y habla, también si mezclas idiomas. El texto aparece directamente donde está el cursor. Si hay algo que deberías comprobar, Witness lo marca y te permite escuchar lo que dijiste. Todo se procesa en tu Mac.",
      cta: "Empezar por 4,99 €",
      fine: ["14 días desde la compra", "Apple Silicon", "macOS 14.4+", "Sin cuenta de usuario"],
    },
    consent: { terms: "Condiciones (en inglés)", withdrawal: "Derecho de desistimiento (en inglés)", soon: "La compra estará disponible próximamente." },
    steps: {
      kicker: "Cómo funciona",
      title: "Empieza a dictar en tres pasos",
      items: [
        { title: "Paga", body: "4,99 € por los primeros 14 días. El pago se realiza mediante Stripe y no necesitas una cuenta de usuario." },
        { title: "Descarga y abre Witness", body: "La descarga comienza después del pago. Witness descarga una vez el modelo de voz en tu Mac; después puedes dictar sin conexión." },
        { title: "Introduce tu email el tercer día", body: "Durante tres días Witness no te pide nada. Después solicita tu email. Introduce la dirección con la que pagaste para activar la licencia." },
      ],
    },
    gives: {
      kicker: "Qué obtienes",
      title: "Un dictado que no tienes que aceptar a ciegas",
      items: [
        { title: "Local en tu Mac", body: "El audio, la transcripción y el texto no salen de tu Mac. No hay una cuenta de usuario ni un servidor que vea tus dictados." },
        { title: "Una señal donde conviene mirar", body: "Witness marca los fragmentos que deberías comprobar y reproduce el audio original de ese momento." },
        { title: "Verificación calibrada en español", body: "Importes, fechas, nombres, términos del diccionario y palabras claramente dañadas se resaltan con reglas medidas para español." },
      ],
    },
    price: {
      kicker: "Precio", title: "14 días por 4,99 €, después un año", today: "4,99 €", todayNote: "hoy, por los primeros 14 días", then: "49 €", thenNote: "después al año, automáticamente, salvo cancelación antes de terminar el día 14",
      line: "4,99 € por los primeros 14 días desde la compra. Después, 49 € al año de forma automática, salvo que canceles antes de que termine el día 14. Si cancelas, no se te cobrará nada más.",
      bullets: ["Cancela hasta el día 14 con un clic en «Cancelar suscripción»", "Para dos de tus Mac", "Todas las actualizaciones durante el periodo", "Precios finales"],
      paymentNote: "El pago se procesa mediante Stripe. Verás los métodos de pago disponibles antes de confirmar.",
    },
    faq: {
      title: "Respuestas claras antes de comprar",
      items: [
        { q: "¿Cómo cancelo?", a: "Usa «Cancelar suscripción» al final de cualquier página, sin iniciar sesión. Introduce el email con el que pagaste y recibirás una confirmación inmediata. También puedes usar «Gestionar suscripción» en Witness." },
        { q: "¿Qué ocurre el día 15?", a: "Si no has cancelado, Stripe cobra 49 € por el primer año y Witness sigue funcionando. Si cancelaste, el acceso termina tras los 14 días y no se cobra nada más." },
        { q: "¿Witness funciona sin internet?", a: "Sí. El reconocimiento y el tratamiento del texto se ejecutan en tu Mac. Aproximadamente una vez al mes solo se renueva la licencia con tu email y un identificador del dispositivo." },
        { q: "¿Qué ocurre con mis dictados?", a: "Nada sale del dispositivo. El audio y el texto permanecen en tu Mac. La lista completa de datos técnicos transmitidos está en la política de privacidad enlazada en inglés." },
      ],
    },
    thanks: {
      meta: { title: "Gracias · Witness", description: "Hemos recibido tu compra. Instala Witness y activa tu licencia." },
      title: "Gracias, hemos recibido tu compra.",
      lede: "Descarga Witness y ábrelo. Durante los primeros tres días no te pedirá nada. El tercer día solicitará tu email: introduce la dirección con la que acabas de pagar y la licencia quedará activa.",
      download: "Descargar Witness para Mac", downloadAgain: "Iniciar de nuevo la descarga",
      steps: [
        { title: "Descarga y arrastra a Aplicaciones", body: "Abre el archivo y arrastra Witness a la carpeta Aplicaciones. Funciona en Mac con Apple Silicon y macOS 14.4 o posterior." },
        { title: "Permite el micrófono y Accesibilidad", body: "En el primer inicio, macOS solicita acceso al micrófono. Para insertar texto en el cursor, permite Witness en Ajustes del Sistema → Privacidad y seguridad → Accesibilidad." },
        { title: "Dicta", body: "Pulsa ⌥ Espacio y habla. El modelo de voz se descarga una sola vez durante el primer inicio." },
      ],
      keep: "Importante: el tercer día introduce el email con el que pagaste. Otra dirección no permitirá reconocer tu compra.",
      manage: "Gestionar suscripción", cancel: "Cancelar suscripción", help: "¿Necesitas ayuda?", helpLink: "Escríbenos",
    },
    cancel: {
      meta: { title: "Cancelar suscripción · Witness", description: "Cancela tu suscripción a Witness sin iniciar sesión." },
      kicker: "Cancelación", title: "Cancelar suscripción",
      lede: "Introduce el email con el que pagaste y cancela con un clic. La suscripción no se renovará y Witness seguirá disponible hasta el final del periodo pagado. Recibirás la confirmación aquí y por email.",
      emailLabel: "Correo electrónico", emailHint: "La dirección con la que pagaste.", button: "Cancelar ahora",
      doneTitle: "Hemos recibido tu cancelación.", doneBody: "Si existe una suscripción para esta dirección, ya está cancelada y no se renovará. La confirmación con fecha y hora está en camino. Witness seguirá disponible hasta el final del periodo pagado.",
      failedTitle: "No ha funcionado.", failedBody: "No hemos podido tramitar la cancelación. Inténtalo de nuevo o escribe a hallo@witnessmac.com; un email sencillo es suficiente.",
      manageLead: "También puedes gestionar la suscripción, cambiar la tarjeta o descargar facturas:", manageLink: "Gestionar suscripción", privacy: "El tratamiento de la dirección se explica en la", privacyLink: "política de privacidad (en inglés)",
    },
    footer: { legalNav: "Enlaces legales", terms: "Condiciones (EN)", withdrawal: "Desistimiento (EN)", cancel: "Cancelar suscripción", privacy: "Privacidad (EN)", imprint: "Aviso legal (EN)", licences: "Licencias (EN)", contact: "Contacto" },
  },
  it: {
    meta: { title: "Witness per Mac · Dettatura senza digitare", description: "Un’app di dettatura per Mac che indica dove conviene controllare. Il riconoscimento vocale avviene sul tuo Mac. 14 giorni a 4,99 €, poi 49 € all’anno." },
    header: { cta: "Inizia a 4,99 €" },
    hero: {
      eyebrow: "Da voce a testo su Mac · funziona offline", title: "Detta invece di digitare.", titleMuted: "Con un avviso dove conviene controllare.",
      lede: "Premi ⌥ Spazio e parla, anche mescolando le lingue. Il testo appare subito dove si trova il cursore. Se c’è un punto da verificare, Witness lo segnala e ti permette di riascoltare ciò che hai detto. Tutto viene elaborato sul tuo Mac.",
      cta: "Inizia a 4,99 €", fine: ["14 giorni dall’acquisto", "Apple Silicon", "macOS 14.4+", "Nessun account utente"],
    },
    consent: { terms: "Condizioni (in inglese)", withdrawal: "Diritto di recesso (in inglese)", soon: "L’acquisto sarà disponibile a breve." },
    steps: {
      kicker: "Come funziona", title: "Inizia a dettare in tre passaggi",
      items: [
        { title: "Paga", body: "4,99 € per i primi 14 giorni. Il pagamento avviene tramite Stripe e non serve un account utente." },
        { title: "Scarica e apri Witness", body: "Il download parte dopo il pagamento. Witness scarica una volta il modello vocale sul Mac; poi puoi dettare offline." },
        { title: "Inserisci l’email il terzo giorno", body: "Per tre giorni Witness non chiede nulla. Poi richiede l’indirizzo email: usa quello con cui hai pagato per attivare la licenza." },
      ],
    },
    gives: {
      kicker: "Cosa ottieni", title: "Dettatura che non devi accettare alla cieca",
      items: [
        { title: "Locale sul tuo Mac", body: "Audio, trascrizione e testo non lasciano il Mac. Non esistono un account utente o un server che vede le tue dettature." },
        { title: "Un avviso dove serve", body: "Witness evidenzia i frammenti da verificare e riproduce l’audio originale di quel punto." },
        { title: "Verifica calibrata in italiano", body: "Importi, date, nomi, termini del dizionario e parole chiaramente danneggiate vengono segnalati con regole misurate per l’italiano." },
      ],
    },
    price: {
      kicker: "Prezzo", title: "14 giorni a 4,99 €, poi un anno", today: "4,99 €", todayNote: "oggi, per i primi 14 giorni", then: "49 €", thenNote: "poi ogni anno, automaticamente, salvo annullamento entro il 14° giorno",
      line: "4,99 € per i primi 14 giorni dall’acquisto. Poi 49 € all’anno in automatico, a meno che tu non annulli entro il 14° giorno. Se annulli, non paghi altro.",
      bullets: ["Annulla entro il 14° giorno con un clic su «Annulla abbonamento»", "Per due dei tuoi Mac", "Tutti gli aggiornamenti nel periodo", "Prezzi finali"], paymentNote: "Il pagamento è gestito da Stripe. I metodi disponibili sono mostrati prima della conferma.",
    },
    faq: {
      title: "Risposte chiare prima dell’acquisto",
      items: [
        { q: "Come annullo?", a: "Usa «Annulla abbonamento» in fondo a ogni pagina, senza accedere. Inserisci l’email usata per il pagamento e riceverai subito una conferma. Puoi anche usare «Gestisci abbonamento» in Witness." },
        { q: "Cosa succede il 15° giorno?", a: "Se non hai annullato, Stripe addebita 49 € per il primo anno e Witness continua a funzionare. Se hai annullato, l’accesso termina dopo 14 giorni e non viene addebitato altro." },
        { q: "Witness funziona senza internet?", a: "Sì. Riconoscimento e trattamento del testo avvengono sul Mac. Circa una volta al mese viene rinnovata solo la licenza usando l’email e un identificatore del dispositivo." },
        { q: "Cosa succede alle mie dettature?", a: "Audio e testo restano sul Mac. L’elenco completo dei dati tecnici trasmessi è nell’informativa sulla privacy collegata in inglese." },
      ],
    },
    thanks: {
      meta: { title: "Grazie · Witness", description: "Abbiamo ricevuto il tuo acquisto. Installa Witness e attiva la licenza." }, title: "Grazie, abbiamo ricevuto il tuo acquisto.",
      lede: "Scarica Witness e aprilo. Per i primi tre giorni non chiede nulla. Il terzo giorno richiede l’email: inserisci l’indirizzo usato per il pagamento e la licenza sarà attiva.", download: "Scarica Witness per Mac", downloadAgain: "Avvia di nuovo il download",
      steps: [
        { title: "Scarica e trascina in Applicazioni", body: "Apri il file e trascina Witness nella cartella Applicazioni. Funziona su Mac Apple Silicon con macOS 14.4 o successivo." },
        { title: "Consenti microfono e Accessibilità", body: "Al primo avvio macOS chiede il microfono. Per inserire il testo al cursore, abilita Witness in Impostazioni di Sistema → Privacy e sicurezza → Accessibilità." },
        { title: "Detta", body: "Premi ⌥ Spazio e parla. Il modello vocale viene scaricato una sola volta al primo avvio." },
      ],
      keep: "Importante: il terzo giorno usa l’email con cui hai pagato. Con un altro indirizzo Witness non riconosce l’acquisto.", manage: "Gestisci abbonamento", cancel: "Annulla abbonamento", help: "Serve aiuto?", helpLink: "Scrivici",
    },
    cancel: {
      meta: { title: "Annulla abbonamento · Witness", description: "Annulla l’abbonamento a Witness senza accedere." }, kicker: "Annullamento", title: "Annulla abbonamento",
      lede: "Inserisci l’email con cui hai pagato e annulla con un clic. L’abbonamento non si rinnoverà e Witness resterà disponibile fino alla fine del periodo pagato. Riceverai la conferma qui e per email.", emailLabel: "Indirizzo email", emailHint: "L’indirizzo usato per il pagamento.", button: "Annulla ora",
      doneTitle: "Abbiamo ricevuto l’annullamento.", doneBody: "Se esiste un abbonamento per questo indirizzo, è stato annullato e non si rinnoverà. La conferma con data e ora è in arrivo. Witness resta disponibile fino alla fine del periodo pagato.", failedTitle: "Operazione non riuscita.", failedBody: "Non è stato possibile ricevere l’annullamento. Riprova o scrivi a hallo@witnessmac.com; basta una semplice email.", manageLead: "Puoi anche gestire l’abbonamento, cambiare carta o scaricare le fatture:", manageLink: "Gestisci abbonamento", privacy: "Il trattamento dell’indirizzo è descritto nell’", privacyLink: "informativa sulla privacy (in inglese)",
    },
    footer: { legalNav: "Link legali", terms: "Condizioni (EN)", withdrawal: "Recesso (EN)", cancel: "Annulla abbonamento", privacy: "Privacy (EN)", imprint: "Note legali (EN)", licences: "Licenze (EN)", contact: "Contatti" },
  },
  fr: {
    meta: { title: "Witness pour Mac · Dictez au lieu de taper", description: "Une app de dictée pour Mac qui indique les passages à vérifier. La reconnaissance vocale s’exécute sur votre Mac. 14 jours à 4,99 €, puis 49 € par an." },
    header: { cta: "Commencer pour 4,99 €" },
    hero: {
      eyebrow: "Voix en texte sur Mac · fonctionne hors ligne", title: "Dictez au lieu de taper.", titleMuted: "Avec un signal là où une vérification s’impose.",
      lede: "Appuyez sur ⌥ Espace et parlez, même en mélangeant les langues. Le texte apparaît immédiatement à l’emplacement du curseur. Si un passage mérite votre attention, Witness le signale et vous permet de réécouter vos mots. Tout est traité sur votre Mac.", cta: "Commencer pour 4,99 €", fine: ["14 jours à compter de l’achat", "Apple Silicon", "macOS 14.4+", "Aucun compte utilisateur"],
    },
    consent: { terms: "Conditions (en anglais)", withdrawal: "Droit de rétractation (en anglais)", soon: "L’achat sera bientôt disponible." },
    steps: {
      kicker: "Fonctionnement", title: "Commencez à dicter en trois étapes",
      items: [
        { title: "Payez", body: "4,99 € pour les 14 premiers jours. Le paiement est traité par Stripe et aucun compte utilisateur n’est nécessaire." },
        { title: "Téléchargez et ouvrez Witness", body: "Le téléchargement démarre après le paiement. Witness télécharge une fois le modèle vocal sur votre Mac ; vous pouvez ensuite dicter hors ligne." },
        { title: "Saisissez votre e-mail le troisième jour", body: "Pendant trois jours, Witness ne demande rien. Il demande ensuite votre e-mail : utilisez l’adresse du paiement pour activer la licence." },
      ],
    },
    gives: {
      kicker: "Ce que vous obtenez", title: "Une dictée que vous n’avez pas à accepter les yeux fermés",
      items: [
        { title: "En local sur votre Mac", body: "L’audio, la transcription et le texte ne quittent pas votre Mac. Aucun compte utilisateur et aucun serveur ne voient vos dictées." },
        { title: "Un signal quand il faut regarder", body: "Witness surligne les fragments à vérifier et lit l’audio original correspondant." },
        { title: "Vérification calibrée en français", body: "Montants, dates, noms, termes du dictionnaire et mots manifestement déformés sont signalés par des règles mesurées pour le français." },
      ],
    },
    price: {
      kicker: "Tarif", title: "14 jours à 4,99 €, puis un an", today: "4,99 €", todayNote: "aujourd’hui, pour les 14 premiers jours", then: "49 €", thenNote: "puis par an, automatiquement, sauf résiliation avant la fin du 14e jour",
      line: "4,99 € pour les 14 premiers jours à compter de l’achat. Puis 49 € par an automatiquement, sauf résiliation avant la fin du 14e jour. Dans ce cas, aucun autre montant n’est prélevé.",
      bullets: ["Résiliez avant la fin du 14e jour en un clic via « Résilier l’abonnement »", "Pour deux de vos Mac", "Toutes les mises à jour pendant la période", "Prix finaux"], paymentNote: "Le paiement est traité par Stripe. Les moyens disponibles sont affichés avant la confirmation.",
    },
    faq: {
      title: "Des réponses claires avant l’achat",
      items: [
        { q: "Comment résilier ?", a: "Utilisez « Résilier l’abonnement » au bas de chaque page, sans vous connecter. Saisissez l’e-mail du paiement et vous recevrez immédiatement une confirmation. Vous pouvez aussi utiliser « Gérer l’abonnement » dans Witness." },
        { q: "Que se passe-t-il le 15e jour ?", a: "Si vous n’avez pas résilié, Stripe prélève 49 € pour la première année et Witness continue de fonctionner. Si vous avez résilié, l’accès prend fin après 14 jours et rien d’autre n’est prélevé." },
        { q: "Witness fonctionne-t-il sans Internet ?", a: "Oui. La reconnaissance et le traitement du texte s’exécutent sur votre Mac. Environ une fois par mois, seule la licence est renouvelée avec votre e-mail et un identifiant d’appareil." },
        { q: "Que deviennent mes dictées ?", a: "L’audio et le texte restent sur votre Mac. La liste complète des données techniques transmises figure dans la politique de confidentialité liée en anglais." },
      ],
    },
    thanks: {
      meta: { title: "Merci · Witness", description: "Votre achat a bien été reçu. Installez Witness et activez votre licence." }, title: "Merci, votre achat a bien été reçu.",
      lede: "Téléchargez Witness et ouvrez-le. Pendant les trois premiers jours, il ne demande rien. Le troisième jour, saisissez l’adresse e-mail utilisée pour le paiement afin d’activer la licence.", download: "Télécharger Witness pour Mac", downloadAgain: "Relancer le téléchargement",
      steps: [
        { title: "Téléchargez et glissez dans Applications", body: "Ouvrez le fichier et glissez Witness dans le dossier Applications. Witness fonctionne sur les Mac Apple Silicon avec macOS 14.4 ou version ultérieure." },
        { title: "Autorisez le micro et l’Accessibilité", body: "Au premier lancement, macOS demande l’accès au micro. Pour insérer du texte au curseur, autorisez Witness dans Réglages Système → Confidentialité et sécurité → Accessibilité." },
        { title: "Dictez", body: "Appuyez sur ⌥ Espace et parlez. Le modèle vocal est téléchargé une seule fois au premier lancement." },
      ],
      keep: "Important : le troisième jour, utilisez l’adresse e-mail du paiement. Une autre adresse ne permettra pas à Witness de reconnaître l’achat.", manage: "Gérer l’abonnement", cancel: "Résilier l’abonnement", help: "Besoin d’aide ?", helpLink: "Écrivez-nous",
    },
    cancel: {
      meta: { title: "Résilier l’abonnement · Witness", description: "Résiliez votre abonnement Witness sans vous connecter." }, kicker: "Résiliation", title: "Résilier l’abonnement",
      lede: "Saisissez l’e-mail du paiement et résiliez en un clic. L’abonnement ne sera pas renouvelé et Witness restera disponible jusqu’à la fin de la période payée. Vous recevrez la confirmation ici et par e-mail.", emailLabel: "Adresse e-mail", emailHint: "L’adresse utilisée pour le paiement.", button: "Résilier maintenant",
      doneTitle: "Votre résiliation a bien été reçue.", doneBody: "Si un abonnement correspond à cette adresse, il est résilié et ne sera pas renouvelé. La confirmation datée est en cours d’envoi. Witness reste disponible jusqu’à la fin de la période payée.", failedTitle: "La demande n’a pas abouti.", failedBody: "La résiliation n’a pas pu être enregistrée. Réessayez ou écrivez à hallo@witnessmac.com ; un simple e-mail suffit.", manageLead: "Vous pouvez aussi gérer l’abonnement, changer de carte ou télécharger les factures :", manageLink: "Gérer l’abonnement", privacy: "Le traitement de l’adresse est décrit dans la", privacyLink: "politique de confidentialité (en anglais)",
    },
    footer: { legalNav: "Liens juridiques", terms: "Conditions (EN)", withdrawal: "Rétractation (EN)", cancel: "Résilier l’abonnement", privacy: "Confidentialité (EN)", imprint: "Mentions légales (EN)", licences: "Licences (EN)", contact: "Contact" },
  },
};

/** Paths of the cancellation form, per language. */
export const cancelPaths: Record<StartLocale, string> = { de: "/kuendigen", en: "/en/cancel-subscription", es: "/es/cancelar-suscripcion", it: "/it/annulla-abbonamento", fr: "/fr/resilier-abonnement" };

/** Where the cancellation form posts to, per language. */
export const cancelSubmitPaths: Record<StartLocale, string> = { de: "/kuendigen/senden", en: "/en/cancel-subscription/submit", es: "/es/cancelar-suscripcion/enviar", it: "/it/annulla-abbonamento/invia", fr: "/fr/resilier-abonnement/envoyer" };

export const startPaths: Record<StartLocale, string> = { de: "/start", en: "/en/start", es: "/es/start", it: "/it/start", fr: "/fr/start" };
export const thanksPaths: Record<StartLocale, string> = { de: "/start/danke", en: "/en/start/danke", es: "/es/start/gracias", it: "/it/start/grazie", fr: "/fr/start/merci" };
