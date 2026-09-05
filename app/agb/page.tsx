import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "../_components/LegalShell";

export const metadata: Metadata = { title: "Vertrags- und Lizenzbedingungen · Witness", description: "Vertrags- und Lizenzbedingungen für den Kauf und die Nutzung von Witness.", robots: { index: false, follow: false } };

export default function AGBPage() {
  return <LegalShell
    eyebrow="Rechtliches"
    title="Vertrags- und Lizenzbedingungen"
    updated="5. September 2026"
    notice={<><b>Diese Bedingungen beschreiben das Produkt, das tatsächlich verkauft wird.</b> Sie sind vollständig formuliert und nicht als Entwurf gedacht, ersetzen aber keine anwaltliche Prüfung. Maßgeblich ist die Fassung, die beim Abschluss deines Kaufs galt.</>}
  >
    <h2>1. Anbieter und Geltungsbereich</h2>
    <p>Diese Bedingungen gelten für den Download, den kostenlosen Test, den Kauf und die Nutzung der Software <strong>Witness</strong> für macOS sowie für die Nutzung dieser Website.</p>
    <p>Anbieter und Lizenzgeber ist Ihor Skakovskyi, Ostrovského 26, 150 00 Praha 5, Tschechische Republik, IČO 17328691, eingetragen im tschechischen Gewerberegister (živnostenský rejstřík), E-Mail <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a> — im Folgenden „wir“. Die vollständigen Anbieterangaben stehen im <Link href="/impressum">Impressum</Link>.</p>
    <p>Abweichende oder entgegenstehende Bedingungen des Kunden werden nicht Vertragsbestandteil, es sei denn, wir stimmen ihnen ausdrücklich in Textform zu.</p>
    <p><strong>Verbraucher</strong> ist, wer den Vertrag zu Zwecken abschließt, die überwiegend weder der gewerblichen noch der selbständigen beruflichen Tätigkeit zugerechnet werden können. Wo diese Bedingungen Verbraucher besonders erwähnen, gelten die betreffenden Regeln nur für sie.</p>

    <h2>2. Was Witness ist — und was es nicht ist</h2>
    <p>Witness ist eine Diktier-Anwendung für Macs mit Apple Silicon ab macOS 14.4. Spracherkennung und Textaufbereitung laufen auf deinem Mac. Es gibt kein Produktkonto und kein Passwort.</p>
    <p>Vor dem ersten Diktat lädt die App einmalig ein Spracherkennungsmodell aus einer öffentlichen Quelle (Hugging Face, Repository <code>argmaxinc/whisperkit-coreml</code>). Dafür sind eine Internetverbindung und freier Speicherplatz nötig. Danach arbeitet die Erkennung ohne Verbindung.</p>
    <p>Ankreuzen kannst du 100 Sprachen. Für Deutsch, Englisch, Russisch und Ukrainisch sind Erkennung, Textaufbereitung und jede Markierung end-to-end gemessen. Die übrigen Sprachen werden erkannt; sprachabhängig kalibrierte Markierungen bleiben dort aus.</p>
    <p><strong>Die Markierung unsicherer Stellen ist ein Hinweis, keine Prüfung.</strong> Sie kann Stellen markieren, die richtig sind, und Stellen übersehen, die falsch sind. Witness ersetzt weder das Lesen des erzeugten Textes noch eine fachliche, rechtliche oder medizinische Kontrolle. Die Verantwortung für jeden Text, den du einsetzt, absendest oder weitergibst, bleibt bei dir.</p>
    <p>Wir schulden keine bestimmte Erkennungsgenauigkeit. Sie hängt von Mikrofon, Umgebungsgeräusch, Sprache, Aussprache und Fachvokabular ab und ist keine zugesicherte Eigenschaft.</p>

    <h2>3. Kostenloser Test</h2>
    <p>Der Test umfasst den vollen Funktionsumfang und läuft <strong>14 Tage ab deiner ersten erfolgreichen Diktierung</strong>.</p>
    <ul>
      <li>Nach fünf Diktierungen oder 24 Stunden — je nachdem, was zuerst eintritt — brauchst du einen kostenlosen Testschlüssel. Dafür übermittelt die App deine E-Mail-Adresse und eine Gerätekennung an unseren Aktivierungsdienst; Einzelheiten stehen in der <Link href="/datenschutz">Datenschutzerklärung</Link>.</li>
      <li>Zahlungsdaten werden für den Test nicht erhoben.</li>
      <li>Es gibt einen Test je E-Mail-Adresse und einen je Mac. Ein zweiter Test wird abgelehnt und nicht stillschweigend gewährt.</li>
      <li>Aus dem Test entsteht kein Abonnement. Er endet, ohne dass du etwas kündigen musst.</li>
      <li>Nach Ablauf pausieren neue Diktierungen. Einstellungen, Wörterbuch und die Lizenzaktivierung bleiben erreichbar; bereits eingesetzte Texte bleiben unberührt.</li>
    </ul>

    <h2>4. Vertragsschluss, Preise und Zahlung</h2>
    <p>Die Darstellung der Lizenzen auf dieser Website und im Fenster der App ist kein bindendes Angebot, sondern eine Aufforderung zur Bestellung. Der Vertrag kommt zustande, wenn du den Bezahlvorgang abschließt und die Zahlung bestätigt wird.</p>
    <p>Der Bezahlvorgang läuft über <strong>Stripe</strong>. Stripe tritt bei diesem Verkauf als Händler im eigenen Namen auf (Merchant of Record): Stripe wickelt die Zahlung ab, stellt die Rechnung und führt die Umsatzsteuer ab. Für den Zahlungsvorgang gelten daher zusätzlich die Bedingungen von Stripe. <strong>Der Lizenzvertrag über die Nutzung von Witness kommt mit uns zustande</strong>, und für ihn gelten diese Bedingungen. Wir sehen keine Kartendaten.</p>
    <p>Die Preise betragen <strong>€99 einmalig</strong> für die Lifetime-Lizenz und <strong>€49 pro Jahr</strong> für die Jahreslizenz, jeweils einschließlich der gesetzlichen Umsatzsteuer. Welche Zahlungsarten verfügbar sind, zeigt der Bezahlvorgang vor dem Abschluss an. Die Rechnung erhältst du per E-Mail.</p>

    <h2>5. Lieferung und Aktivierung</h2>
    <p>Nach bestätigter Zahlung stellen wir für den Mac, an dem du aktivierst, einen signierten Lizenzschlüssel aus und senden ihn an die beim Kauf angegebene E-Mail-Adresse. Die Lieferung erfolgt unmittelbar, in der Regel innerhalb weniger Minuten.</p>
    <p>Der Schlüssel wird auf deinem Mac gegen eine Signatur geprüft. Eine laufende Verbindung ist dafür nicht nötig: Fällt unser Aktivierungsdienst aus, kann niemand neu aktivieren, aber keine bereits aktivierte Installation hört auf zu arbeiten.</p>
    <p>Kommt keine E-Mail an, fordere den Schlüssel in der App erneut an — du bekommst denselben Schlüssel und keinen zweiten. Hilft das nicht, schreib an <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a>.</p>

    <h2>6. Was die Lizenz erlaubt</h2>
    <p>Wir räumen dir ein einfaches, nicht ausschließliches, nicht übertragbares Recht ein, Witness zu nutzen.</p>
    <ul>
      <li>Eine Lizenz gilt für <strong>eine natürliche Person und bis zu zwei von ihr genutzte Macs</strong>. Mehr als zwei Geräte können nicht gleichzeitig aktiv sein.</li>
      <li>Einen Mac kannst du in der App wieder freigeben („Von diesem Mac entfernen“). Damit wird ein Platz frei, etwa beim Gerätewechsel.</li>
      <li>Die berufliche und gewerbliche Nutzung ist eingeschlossen. Für jede weitere Person, die Witness nutzt, wird eine weitere Lizenz benötigt.</li>
      <li>Der Lizenzschlüssel darf nicht weitergegeben, verkauft, vermietet, unterlizenziert oder veröffentlicht werden.</li>
      <li>Die Lizenzprüfung und die Gerätebegrenzung dürfen nicht umgangen werden. Urheberrechtshinweise dürfen nicht entfernt werden.</li>
      <li>Zurückentwicklung ist nur in dem Umfang zulässig, den zwingendes Recht erlaubt.</li>
    </ul>
    <p>Verstößt du erheblich gegen diese Punkte, können wir die Lizenz nach erfolgloser Aufforderung beenden. Deine gesetzlichen Rechte bleiben unberührt.</p>

    <h2>7. Was „Lifetime“ bedeutet</h2>
    <p>Das Wort beschreibt eine Version, keine Zeitdauer. Es bedeutet weder die Lebensdauer des Anbieters noch die des Käufers.</p>
    <p>Eine Lifetime-Lizenz umfasst <strong>die beim Kauf aktuelle Hauptversion — derzeit Version 1 — und alle Updates dazu</strong>, also jede Version 1.x, zeitlich unbegrenzt und ohne weitere Zahlung.</p>
    <p>Eine künftige Hauptversion (2.0) ist ein neues Produkt und nicht eingeschlossen. Deine gekaufte Version läuft weiter, so lange sie auf deinem Mac und deiner macOS-Version läuft. Die App zeigt an, was eine neue Hauptversion für deine Lizenz bedeutet, bevor du irgendetwas entscheidest.</p>

    <h2>8. Jahreslizenz: Laufzeit, Verlängerung und Kündigung</h2>
    <p>Die Jahreslizenz läuft 12 Monate ab Ausstellung und verlängert sich danach automatisch um jeweils 12 Monate zum dann geltenden Preis, wenn du sie nicht vorher beendest.</p>
    <ul>
      <li><strong>Beenden kannst du jederzeit</strong> bis zum letzten Tag der laufenden Laufzeit, ohne Frist und ohne Grund. Die Lizenz bleibt dann bis zum Ende des bezahlten Zeitraums nutzbar und verlängert sich nicht.</li>
      <li>Am einfachsten geht das über den Link zur Zahlungsverwaltung in deiner Kaufbestätigung. Alternativ genügt eine E-Mail an <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a> mit der Adresse, unter der die Lizenz läuft. Wir beenden die Verlängerung und bestätigen das in Textform.</li>
      <li>Eine Preisänderung für die nächste Verlängerung kündigen wir mindestens sechs Wochen vorher per E-Mail an. Bist du nicht einverstanden, beende die Verlängerung bis zum Ende der laufenden Laufzeit.</li>
      <li>Eine anteilige Rückzahlung für eine bereits begonnene Laufzeit gibt es nicht; das gesetzliche Widerrufsrecht bleibt davon unberührt.</li>
    </ul>
    <p>Nach Ablauf pausieren neue Diktierungen. Die App, deine Einstellungen und dein Wörterbuch bleiben auf deinem Mac.</p>

    <h2>9. Updates und Systemvoraussetzungen</h2>
    <p>Witness aktualisiert sich nicht selbst. Neue Versionen stehen auf witnessmac.com zum Download bereit.</p>
    <p>Gegenüber Verbrauchern stellen wir während des Zeitraums, für den die Lizenz gilt, die Aktualisierungen bereit, die erforderlich sind, um die Vertragsmäßigkeit des Produkts zu erhalten — bei der Lifetime-Lizenz für die gekaufte Hauptversion. Wir informieren über solche Aktualisierungen; installierst du sie nicht, haften wir nicht für Mängel, die allein daraus folgen.</p>
    <p>Es gelten die Systemvoraussetzungen, die zum Zeitpunkt deines Kaufs genannt waren: Apple Silicon und macOS 14.4 oder neuer. Ändert Apple das Betriebssystem so, dass eine Anpassung nötig wird, nehmen wir sie im Rahmen des vorstehenden Absatzes vor.</p>

    <h2>10. Mängel</h2>
    <p>Es gelten die gesetzlichen Rechte bei Mängeln. Für Verbraucher richten sich diese nach den Vorschriften über digitale Produkte.</p>
    <p>Melde Mängel bitte an <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a>, möglichst mit macOS-Version, App-Version und einer Beschreibung, wie sich der Fehler auslösen lässt. Eine Garantie im Rechtssinne übernehmen wir nur, wenn wir sie ausdrücklich und in Textform als solche bezeichnen.</p>

    <h2>11. Haftung</h2>
    <p>Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit, bei der Verletzung von Leben, Körper oder Gesundheit, bei arglistig verschwiegenen Mängeln, im Umfang einer übernommenen Garantie und nach zwingendem Produkthaftungsrecht.</p>
    <p>Bei einfacher Fahrlässigkeit haften wir nur bei der Verletzung einer wesentlichen Vertragspflicht — einer Pflicht, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung du regelmäßig vertrauen darfst — und der Höhe nach begrenzt auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden.</p>
    <p>Im Übrigen ist die Haftung ausgeschlossen.</p>
    <p>Für die Sicherung deiner eigenen Daten bist du verantwortlich. Witness legt kein Archiv deiner Diktate an: Audio und Transkripte werden nicht gespeichert, und was du nicht eingesetzt oder selbst gesichert hast, lässt sich nicht wiederherstellen.</p>

    <h2>12. Widerrufsrecht</h2>
    <p>Verbrauchern steht ein gesetzliches Widerrufsrecht zu. Die vollständige Widerrufsbelehrung, die Bedingungen, unter denen dieses Recht bei sofort geliefertem digitalen Inhalt vorzeitig erlischt, und das Muster-Widerrufsformular stehen unter <Link href="/widerruf">Widerruf</Link>.</p>
    <p>Ein darüber hinausgehendes freiwilliges Rückgabeversprechen gibt es nicht. Was gilt, ist das gesetzliche Recht — und das steht dort vollständig.</p>

    <h2>13. Datenschutz</h2>
    <p>Was Witness verarbeitet, was es nie überträgt und wie lange unser Aktivierungsdienst etwas speichert, steht in der <Link href="/datenschutz">Datenschutzerklärung</Link>. Für Diktatinhalte brauchst du keinen Auftragsverarbeitungsvertrag: Wir verarbeiten sie nicht für dich, weil sie deinen Mac nicht verlassen.</p>

    <h2>14. Bestandteile von Dritten</h2>
    <p>Witness enthält quelloffene Komponenten und nutzt Spracherkennungsmodelle Dritter. Sie sind mit Rechteinhaber und Lizenz unter <Link href="/lizenzen">Lizenzen Dritter</Link> aufgeführt. Deren Lizenzbedingungen gehen für die jeweilige Komponente diesen Bedingungen vor.</p>

    <h2>15. Änderungen dieser Bedingungen</h2>
    <p>Für eine Lifetime-Lizenz gilt die Fassung, die beim Kauf galt. Für eine Jahreslizenz können wir diese Bedingungen mit Wirkung zur nächsten Verlängerung ändern; wir kündigen die Änderung mindestens sechs Wochen vorher per E-Mail an, und du kannst die Verlängerung bis zum Ende der laufenden Laufzeit beenden.</p>

    <h2>16. Anwendbares Recht, Gerichtsstand und Streitbeilegung</h2>
    <p>Es gilt tschechisches Recht unter Ausschluss des UN-Kaufrechts. Bist du Verbraucher, bleiben die zwingenden Verbraucherschutzvorschriften des Staates unberührt, in dem du deinen gewöhnlichen Aufenthalt hast — für Verbraucher in Deutschland also das deutsche Verbraucherrecht.</p>
    <p>Als Verbraucher kannst du uns an deinem Wohnsitz verklagen; wir können dich nur dort verklagen.</p>
    <p>Zuständige Stelle für die außergerichtliche Beilegung von Verbraucherstreitigkeiten ist für uns die Tschechische Handelsinspektion (Česká obchodní inspekce), <a href="https://coi.gov.cz/informace-o-adr/" rel="noreferrer">coi.gov.cz/informace-o-adr</a>. Bei grenzüberschreitenden Fällen hilft außerdem das Netz der Europäischen Verbraucherzentren. Eine Beschwerde kannst du jederzeit auch direkt an <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a> richten; das ist der schnellere Weg, und wir antworten.</p>
  </LegalShell>;
}
