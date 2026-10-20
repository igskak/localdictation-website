import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "../_components/LegalShell";

export const metadata: Metadata = { title: "Vertrags- und Lizenzbedingungen · Witness", description: "Vertrags- und Lizenzbedingungen für den Kauf und die Nutzung von Witness.", robots: { index: false, follow: false } };

export default function AGBPage() {
  return <LegalShell
    page="terms"
    eyebrow="Rechtliches"
    title="Vertrags- und Lizenzbedingungen"
    updated="20. Oktober 2026"
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
    <p>Der Test umfasst den vollen Funktionsumfang. Die <strong>ersten drei Tage ab deiner ersten erfolgreichen Diktierung</strong> fragen nach nichts; ein kostenloser Testschlüssel schaltet danach <strong>zehn weitere Tage</strong> frei.</p>
    <ul>
      <li>Nach diesen drei Tagen brauchst du einen kostenlosen Testschlüssel. Dafür übermittelt die App deine E-Mail-Adresse und eine Gerätekennung an unseren Aktivierungsdienst; Einzelheiten stehen in der <Link href="/datenschutz">Datenschutzerklärung</Link>. Der Schlüssel kommt unmittelbar in der App an und schaltet sie frei; die Kopie per E-Mail ist ein Ersatzexemplar für eine Neuinstallation oder einen anderen Mac.</li>
      <li>Die zehn Tage laufen ab der Aktivierung. Wer später aktiviert, hat entsprechend länger.</li>
      <li>Zahlungsdaten werden für den Test nicht erhoben.</li>
      <li>Es gibt einen Test je E-Mail-Adresse und einen je Mac. Ein zweiter Test wird abgelehnt und nicht stillschweigend gewährt.</li>
      <li>Aus dem Test entsteht kein Abonnement. Er endet, ohne dass du etwas kündigen musst.</li>
      <li>Nach Ablauf pausieren neue Diktierungen. Einstellungen, Wörterbuch und die Lizenzaktivierung bleiben erreichbar; bereits eingesetzte Texte bleiben unberührt.</li>
    </ul>

    <h2>4. Vertragsschluss, Preise und Zahlung</h2>
    <p>Die Darstellung der Lizenzen auf dieser Website und im Fenster der App ist kein bindendes Angebot, sondern eine Aufforderung zur Bestellung. Der Vertrag kommt zustande, wenn du den Bezahlvorgang abschließt und die Zahlung bestätigt wird.</p>
    <p>Der Bezahlvorgang läuft über <strong>Stripe</strong> als Zahlungsdienstleister: Stripe nimmt die Zahlung entgegen und leitet sie an uns weiter. Für den Zahlungsvorgang gelten zusätzlich die Bedingungen von Stripe. <strong>Der Lizenzvertrag über die Nutzung von Witness kommt mit uns zustande</strong>; wir sind Verkäufer und Rechnungssteller, und für den Vertrag gelten diese Bedingungen. Wir sehen keine Kartendaten.</p>
    <p>Die Preise betragen <strong>€99 einmalig</strong> für die Lifetime-Lizenz und <strong>€49 pro Jahr</strong> für die Jahreslizenz, jeweils als Endpreis. Für die Jahreslizenz gibt es zusätzlich ein <strong>Einführungsangebot von €4,99 für die ersten 14 Tage</strong>; es steht in Abschnitt 8. Wir sind in Tschechien kein Umsatzsteuerzahler (nejsem plátce DPH): Umsatzsteuer wird auf die Preise nicht aufgeschlagen und auf der Rechnung nicht ausgewiesen. Welche Zahlungsarten verfügbar sind, zeigt der Bezahlvorgang vor dem Abschluss an. Die Rechnung erhältst du per E-Mail.</p>

    <h2>5. Lieferung und Aktivierung</h2>
    <p>Nach bestätigter Zahlung stellen wir für den Mac, an dem du aktivierst, einen signierten Lizenzschlüssel aus und senden ihn an die beim Kauf angegebene E-Mail-Adresse. Die Lieferung erfolgt unmittelbar, in der Regel innerhalb weniger Minuten.</p>
    <p>Der Schlüssel wird auf deinem Mac gegen eine Signatur geprüft. Eine laufende Verbindung ist dafür nicht nötig: Fällt unser Aktivierungsdienst aus, kann niemand neu aktivieren, aber keine bereits aktivierte Installation hört auf zu arbeiten. Eine Ausnahme ist die Jahreslizenz: Ihr Schlüssel gilt etwa 30 Tage und wird von der App in seiner letzten Woche im Hintergrund erneuert, solange das Abonnement läuft (Abschnitt 8).</p>
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

    <h2>8. Jahreslizenz und Einführungsangebot: Laufzeit, Verlängerung und Kündigung</h2>
    <p><strong>Einführungsangebot.</strong> Für €4,99 erhältst du die Jahreslizenz für die ersten 14 Tage ab Kauf. Kündigst du nicht bis zum Ende dieser 14 Tage, zieht Stripe am 15. Tag automatisch €49 für die ersten 12 Monate ein. Kündigst du bis dahin, zahlst du nur die €4,99 und es wird nichts weiter abgebucht. Preis und automatische Abbuchung nach den 14 Tagen stehen vor dem Kauf auf der Bestellseite und im Bezahlvorgang.</p>
    <p>Die Jahreslizenz läuft 12 Monate ab Ausstellung, beim Einführungsangebot ab dem Ende der ersten 14 Tage, und verlängert sich danach automatisch um jeweils 12 Monate zum dann geltenden Preis, wenn du sie nicht vorher beendest.</p>
    <ul>
      <li><strong>Beenden kannst du jederzeit</strong> bis zum letzten Tag der laufenden Laufzeit, ohne Frist und ohne Grund. Die Lizenz bleibt dann bis zum Ende des bezahlten Zeitraums nutzbar und verlängert sich nicht.</li>
      <li>Am einfachsten geht das über die Schaltfläche <Link href="/kuendigen">Verträge hier kündigen</Link>, die du auf jeder Seite dieser Website findest. Du kündigst ohne Anmeldung und bekommst die Bestätigung sofort und per E-Mail. Alternativ geht es über „Abonnement verwalten“ in den Einstellungen von Witness oder per E-Mail an <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a> mit der Adresse, unter der die Lizenz läuft. Wir beenden die Verlängerung und bestätigen das in Textform.</li>
      <li>Der Schlüssel auf deinem Mac gilt etwa 30 Tage. Die App erneuert ihn in seiner letzten Woche im Hintergrund, solange das Abonnement läuft. Nach einer Kündigung, einer Erstattung oder einer endgültig fehlgeschlagenen Zahlung wird kein neuer Schlüssel mehr ausgestellt; der letzte gilt bis zu seinem Ablauf, spätestens etwa 30 Tage nach seiner Ausstellung. Er kann bis zu einer Woche über das bezahlte Ende hinausreichen, damit eine Kartenzahlung, die Stripe noch wiederholt, dich nicht sperrt.</li>
      <li>Eine Preisänderung für die nächste Verlängerung kündigen wir mindestens sechs Wochen vorher per E-Mail an. Bist du nicht einverstanden, beende die Verlängerung bis zum Ende der laufenden Laufzeit.</li>
      <li>Eine anteilige Rückzahlung für eine bereits begonnene Laufzeit gibt es nicht; das gesetzliche Widerrufsrecht bleibt davon unberührt.</li>
    </ul>
    <p>Nach Ablauf pausieren neue Diktierungen. Die App, deine Einstellungen und dein Wörterbuch bleiben auf deinem Mac.</p>

    <h2>9. Updates und Systemvoraussetzungen</h2>
    <p>Witness fragt standardmäßig einmal am Tag bei GitHub an, ob eine neuere signierte Version vorliegt, und bietet sie dir an. In den Einstellungen kannst du das abschalten und mit „Auf Updates prüfen“ selbst suchen. Eine Version wird erst nach deiner Bestätigung geladen, geprüft, installiert und neu gestartet; im Hintergrund installiert die App nichts. Neue Versionen stehen auch auf witnessmac.com zum Download bereit.</p>
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
