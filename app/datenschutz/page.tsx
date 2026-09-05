import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "../_components/LegalShell";

export const metadata: Metadata = { title: "Datenschutz · Witness", description: "Datenschutzerklärung für die Website, die App Witness und den Aktivierungsdienst.", robots: { index: false, follow: false } };

export default function DatenschutzPage() {
  return <LegalShell
    page="privacy"
    eyebrow="Datenschutz"
    title="Klare Grenzen für deine Daten"
    updated="5. September 2026"
    notice={<><b>Diese Erklärung ist aus dem Code geschrieben, nicht aus einer Absicht.</b> Jede Zeile beschreibt, was die App und der Dienst heute tatsächlich tun. Sendet eine künftige Version etwas Neues, steht es hier, bevor diese Version veröffentlicht wird.</>}
  >
    <h2>1. Verantwortlicher</h2>
    <p>Ihor Skakovskyi, Ostrovského 26, 150 00 Praha 5, Tschechische Republik<br />IČO 17328691<br />E-Mail: <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a><br />Telefon: +420 607 643 905</p>
    <p>Ein Datenschutzbeauftragter ist nicht benannt; die gesetzlichen Voraussetzungen dafür liegen bei einem Einzelunternehmen dieser Größe und dieser Verarbeitung nicht vor. Für alle Anliegen zum Datenschutz ist die oben genannte Adresse zuständig.</p>

    <h2>2. Die kurze Fassung</h2>
    <p>Nichts, was du diktierst, verlässt deinen Mac. Nicht das Audio, nicht das Transkript, nicht der aufbereitete Text, nicht dein Wörterbuch, nicht die Namen der Programme, in die du diktierst, und nichts, was daraus abgeleitet wird. Es gibt kein Produktkonto, keine Anmeldung und keine Analyse-Software — weder in der App noch auf dieser Website.</p>
    <p>Drei Dinge können die App verlassen, und jedes davon erst, nachdem du etwas gedrückt hast. Sie stehen in Abschnitt 4.</p>

    <h2>3. Was auf deinem Mac bleibt</h2>
    <p>Die Spracherkennung läuft in der App, gegen ein Modell auf deiner Festplatte. Audio wird für die Dauer einer Äußerung im Arbeitsspeicher gehalten und verworfen, wenn die nächste beginnt oder du die Prüfung schließt. Es wird nicht auf die Festplatte geschrieben.</p>
    <p>Wörterbuch, Risikomarkierungen, Textaufbereitung und die Prüfansicht sind lokale Berechnungen über lokalen Text. In ihnen steckt kein Netzwerkcode.</p>
    <p>Beim Entfernen der App bleibt kein Audio- oder Transkriptarchiv zurück, weil keines angelegt wird.</p>

    <h2>4. Was die App überträgt — vollständig</h2>
    <div className="legal-table">
      <table>
        <thead><tr><th>Was</th><th>Wann</th><th>An wen</th><th>Wozu</th></tr></thead>
        <tbody>
          <tr><td>Eine Anfrage nach dem Spracherkennungsmodell</td><td>Du drückst „Spracherkennung vorbereiten …“</td><td>Hugging Face, der Host des Modells</td><td>Abruf einer statischen Datei. Nur in eine Richtung — es wird nichts hochgeladen</td></tr>
          <tr><td>Deine E-Mail-Adresse und eine Gerätekennung</td><td>Du drückst „Schlüssel anfordern“</td><td>Unser Aktivierungsdienst unter <code>api.witnessmac.com</code></td><td>Ausstellen eines Lizenzschlüssels für diesen Mac</td></tr>
          <tr><td>Ein Lizenzschlüssel, den du bereits hast</td><td>Du drückst „Von diesem Mac entfernen“</td><td>Derselbe Dienst</td><td>Freigeben eines der zwei Geräte, die deine Lizenz abdeckt</td></tr>
        </tbody>
      </table>
    </div>
    <p>Das ist die vollständige Liste. Es gibt keine vierte Zeile. Die Aktivierungsanfrage hat genau zwei Felder — <code>email</code> und <code>device</code> —, und ein automatischer Test schlägt fehl, sobald ein drittes hinzukäme. So bleibt diese Seite wahr.</p>
    <p>Die Gerätekennung ist ein auf 128 Bit gekürzter, gesalzener SHA-256-Wert der Hardware-Kennung deines Macs. Sie lässt sich nicht in eine Seriennummer zurückrechnen, gilt nur für diese App und passt zu nichts außerhalb davon. Sie existiert, damit eine Lizenz zwei Macs abdeckt statt beliebig viele.</p>
    <p>Die Verbindung ist HTTPS. Ein Endpunkt ohne Verschlüsselung führt dazu, dass die App sich als nicht konfiguriert meldet, statt eine Adresse im Klartext zu senden; eine Einstellung, die das lockert, gibt es in keinem Build.</p>
    <p>Die Erklärung, die du in der App abgibst, bevor ein Bezahlvorgang öffnet — dass der Schlüssel sofort geliefert wird und du dadurch dein Widerrufsrecht verlierst —, wird <strong>nicht</strong> übertragen. Sie wird in das lokale Systemprotokoll auf deinem Mac geschrieben und sonst nirgends.</p>

    <h2>5. Der Aktivierungsdienst</h2>
    <p><strong>Zweck</strong>: einen Lizenzschlüssel ausstellen, ihn dir per E-Mail zusenden, dich wiedererkennen, wenn du einen zweiten Mac aktivierst oder einen ersetzt, und die Zwei-Geräte-Grenze durchsetzen.</p>
    <p><strong>Rechtsgrundlage</strong>: Art. 6 Abs. 1 lit. b DSGVO — Erfüllung des Vertrags über den Test beziehungsweise die Lizenz. Für die Aufbewahrung der Bestellkennung des Zahlungsdienstleisters zusätzlich Art. 6 Abs. 1 lit. c DSGVO, weil steuerliche Aufbewahrungspflichten daran hängen. Für die Zählung nach IP-Adresse Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse ist der Schutz des Dienstes vor automatisiertem Missbrauch.</p>
    <p><strong>Auftragsverarbeiter</strong>: Der Dienst läuft auf Cloudflare Workers, die Lizenztabelle ist eine Cloudflare-D1-Datenbank in Cloudflares Region <em>EEUR (Osteuropa)</em>. Cloudflare führt den Code aus und speichert die Tabelle; es erhält die Daten zu keinem eigenen Zweck.</p>
    <p><strong>Was gespeichert wird</strong> — das ist die ganze Tabelle:</p>
    <div className="legal-table">
      <table>
        <thead><tr><th>Gespeichert</th><th>Wofür</th><th>Wie lange</th></tr></thead>
        <tbody>
          <tr><td>Deine E-Mail-Adresse, kleingeschrieben</td><td>Identifiziert die Lizenz</td><td>Für die Dauer der Lizenz</td></tr>
          <tr><td>Die Gerätekennung</td><td>Die Zwei-Mac-Grenze</td><td>Für die Dauer der Lizenz oder bis du den Mac freigibst</td></tr>
          <tr><td>Art, Ausstellungsdatum, Ablauf, Schlüssel-ID</td><td>Was ausgestellt wurde</td><td>Für die Dauer der Lizenz</td></tr>
          <tr><td>Die Bestellkennung des Zahlungsdienstleisters</td><td>Abgleich einer Zahlung, Rechnungen</td><td>So lange das Steuerrecht es verlangt</td></tr>
          <tr><td>Deine IP-Adresse, als Zähler</td><td>Begrenzung der Anfragen, gegen Missbrauch</td><td>24 Stunden, als Zahl und nicht als Protokoll</td></tr>
          <tr><td>Kennungen deines Kaufs beim Zahlungsdienstleister</td><td>Eine spätere Verlängerung oder Erstattung deiner Lizenz zuordnen und nicht der von jemand anderem</td><td>Für die Dauer der Lizenz</td></tr>
        </tbody>
      </table>
    </div>
    <p>Der Lizenzschlüssel selbst wird nicht gespeichert. Er wird aus den Feldern oben neu erzeugt, wenn du ihn erneut anforderst — deshalb bekommst du beim zweiten Mal denselben Schlüssel und keinen zweiten.</p>

    <h2>6. Zahlung</h2>
    <p>Der Bezahlvorgang läuft bei <strong>Stripe</strong>, das bei diesem Verkauf als Händler im eigenen Namen auftritt (Merchant of Record) und die Rechnung stellt. Für die Zahlungsabwicklung ist Stripe eigenständig verantwortlich; es gilt die Datenschutzerklärung von Stripe.</p>
    <p>Die App öffnet selbst keine Bezahlseite und sieht keine Kartendaten: Die Kaufknöpfe übergeben eine Adresse an deinen Browser. An unseren Aktivierungsdienst gibt Stripe die Adresse weiter, mit der du gekauft hast, sowie Kennungen der Bestellung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.</p>

    <h2>7. E-Mail</h2>
    <p>Lizenzschlüssel versenden wir über <strong>Resend</strong> als Auftragsverarbeiter; der technische Versand läuft über Amazon SES in der Region <em>eu-west-1 (Irland)</em>. Absenderadresse ist <code>keys@witnessmac.com</code>. Diese Mails sind Vertragskommunikation nach Art. 6 Abs. 1 lit. b DSGVO. Werbung an eine hier erhobene Adresse würde eine eigene, getrennt eingeholte Einwilligung voraussetzen; wir versenden keine.</p>
    <p>Eingehende Mail an <code>hallo@</code>, <code>keys@</code> und <code>dmarc@</code> nimmt Cloudflare Email Routing entgegen und leitet sie an ein privates Postfach des Anbieters bei Google (Gmail) weiter. Schreibst du uns, verarbeiten wir deine Nachricht und deine Adresse, um sie zu beantworten (Art. 6 Abs. 1 lit. b beziehungsweise lit. f DSGVO), und bewahren den Vorgang so lange auf, wie er für Rückfragen oder gesetzliche Pflichten nötig ist.</p>

    <h2>8. Diese Website</h2>
    <p>Die Website lädt <strong>keine Analyse-, Werbe- oder Tracking-Skripte</strong>, setzt <strong>keine Cookies</strong> und bindet keine Schriften, Karten, Videos oder sonstigen Inhalte von fremden Servern ein. Es gibt deshalb auch kein Einwilligungsbanner: Es gäbe nichts, worin eingewilligt werden könnte.</p>
    <p>Sie wird von <strong>Cloudflare</strong> ausgeliefert (Auftragsverarbeiter). Beim Abruf verarbeitet die Infrastruktur die technisch notwendigen Verbindungsdaten — IP-Adresse, Zeitpunkt, angeforderte Adresse, übertragene Datenmenge, Statuscode und User-Agent —, um die Seite auszuliefern und den Betrieb gegen Angriffe abzusichern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; das berechtigte Interesse ist der sichere und funktionsfähige Betrieb der Website. Diese Verbindungsdaten werden nicht zu Profilen zusammengeführt und nicht mit anderen Daten verknüpft.</p>

    <h2>9. Das Formular auf /danke</h2>
    <p>Das Formular ist freiwillig. Der Download und die Installationsanleitung funktionieren ohne es. Es überträgt genau drei Angaben: deine <strong>E-Mail-Adresse</strong>, die <strong>Sprachkennung der Seite</strong> und, wenn du sie auswählst, eine <strong>codierte Angabe dazu, wo du am meisten diktierst</strong>. Es sendet kein Audio, kein Transkript, kein Wörterbuch, keine Zwischenablage und keine Inhalte anderer Programme.</p>
    <p>Zweck ist der Versand deines Lizenzschlüssels und die Einrichtungshilfe dazu; Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO für die vorvertragliche Maßnahme, die du mit dem Absenden auslöst. Die freiwillige Angabe zum Einsatzbereich verarbeiten wir auf Grundlage deiner Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, die du jederzeit mit Wirkung für die Zukunft widerrufen kannst. Die Angaben werden gelöscht, sobald der Schlüsselversand abgeschlossen ist und keine Rückfrage mehr offen ist.</p>
    <p>Empfänger ist der in Abschnitt 5 beschriebene Aktivierungsdienst; weitere Empfänger gibt es nicht, und an Dritte zu Werbezwecken wird nichts weitergegeben. Ist keine Empfängeranbindung konfiguriert, sendet die Oberfläche nichts und sagt dir das auch — dann forderst du den Schlüssel in der App an.</p>

    <h2>10. Das Spracherkennungsmodell</h2>
    <p>Drückst du „Spracherkennung vorbereiten …“, lädt die App das Modell aus dem öffentlichen Repository <code>argmaxinc/whisperkit-coreml</code> bei Hugging Face. Dabei erfährt Hugging Face die technischen Verbindungsdaten dieses Abrufs, insbesondere deine IP-Adresse. Es wird nichts hochgeladen, und die Anfrage enthält keine Angabe darüber, wer du bist. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, weil ohne Modell keine Erkennung möglich ist. Für diesen Abruf gilt die Datenschutzerklärung von Hugging Face.</p>

    <h2>11. Keine Telemetrie</h2>
    <p>Die App baut zehn Ereignisse über den Lizenzverlauf — installiert, Test gestartet, Schlüssel angefordert und so weiter — mit App-Version, macOS-Hauptversion und einer bei der Installation erzeugten Zufallskennung. <strong>Keines davon wird übertragen.</strong> Sie werden in das lokale Systemprotokoll geschrieben und bleiben dort.</p>
    <p>Der Typ, aus dem sie gebaut werden, hat kein Freitextfeld, in das ein Transkript auch versehentlich geraten könnte. Ändert sich das je, geschieht es mit einer in der App eingeholten Einwilligung und mit einer neuen Zeile in der Tabelle in Abschnitt 4 — nicht stillschweigend.</p>
    <p>Absturzberichte sammeln wir nicht. macOS kann dir anbieten, Apple einen Bericht zu senden; das ist eine Sache zwischen dir und Apple, und diese App liest ihn weder noch fordert sie ihn an.</p>

    <h2>12. Keine automatisierte Entscheidungsfindung</h2>
    <p>Es findet keine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO statt.</p>

    <h2>13. Übermittlung in Drittländer</h2>
    <p>Cloudflare, Stripe, Resend, Amazon Web Services, Hugging Face und Google sind Unternehmen mit Sitz oder Mutterkonzern in den Vereinigten Staaten. Auch wo die Daten in der EU gespeichert werden — bei uns die Lizenztabelle in Cloudflares Region Osteuropa und der Mailversand über Irland —, ist ein Zugriff aus einem Drittland nicht ausgeschlossen. Solche Übermittlungen stützen wir auf die Standardvertragsklauseln der Europäischen Kommission und, soweit der jeweilige Anbieter danach zertifiziert ist, auf den Angemessenheitsbeschluss zum EU-US Data Privacy Framework.</p>

    <h2>14. Deine Rechte</h2>
    <ul>
      <li><strong>Auskunft</strong> über die zu dir gespeicherten Daten (Art. 15 DSGVO)</li>
      <li><strong>Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)</li>
      <li><strong>Löschung</strong> (Art. 17 DSGVO)</li>
      <li><strong>Einschränkung</strong> der Verarbeitung (Art. 18 DSGVO)</li>
      <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
      <li><strong>Widerspruch</strong> gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21 DSGVO)</li>
      <li><strong>Widerruf einer Einwilligung</strong> mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
    </ul>
    <p>Eine E-Mail an <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a> genügt. Es gibt kein Formular und kein Konto, in dem du dich dafür anmelden müsstest.</p>
    <p><strong>Löschung, und was sie bedeutet</strong>: Auf Verlangen wird dein Datensatz im Aktivierungsdienst gelöscht; erhalten bleibt nur eine anonymisierte Bestellzeile, wo eine Rechnung das verlangt. Die Folge ist wichtig, weil sie sich nicht rückgängig machen lässt: Für diese Adresse kann danach kein weiterer Schlüssel mehr ausgestellt werden, ein später ersetzter Mac also nicht mehr aktiviert werden. Schlüssel, die bereits auf deinen Macs sind, arbeiten weiter — sie werden auf dem Mac gegen eine Signatur geprüft, ohne Verbindung.</p>

    <h2>15. Beschwerderecht</h2>
    <p>Du kannst dich bei einer Datenschutzaufsichtsbehörde beschweren. Für uns zuständig ist das tschechische Amt für den Schutz personenbezogener Daten, Úřad pro ochranu osobních údajů, Pplk. Sochora 27, 170 00 Praha 7, <a href="https://uoou.gov.cz" rel="noreferrer">uoou.gov.cz</a>. Du kannst dich auch an die Aufsichtsbehörde deines Wohnsitzes oder deines Arbeitsplatzes wenden.</p>

    <h2>16. Bereitstellungspflicht</h2>
    <p>Du bist nicht verpflichtet, uns Daten bereitzustellen. Ohne E-Mail-Adresse kann jedoch kein Test- oder Lizenzschlüssel ausgestellt und zugestellt werden, weil die Lizenz an diese Adresse gebunden ist; ohne Gerätekennung ließe sich die Zwei-Mac-Grenze nicht durchsetzen.</p>

    <h2>17. Kinder</h2>
    <p>Das Produkt richtet sich nicht an Kinder und fragt nichts über das Alter ab.</p>

    <h2>18. Änderungen dieser Erklärung</h2>
    <p>Die Tabelle in Abschnitt 4 ist das Versprechen. Sendet eine künftige Version etwas, das nicht darin steht, wird diese Erklärung geändert, <em>bevor</em> jene Version veröffentlicht wird — und die Anfrage der App bleibt genau so weit, wie diese Erklärung reicht.</p>
    <p>Wie sich das auf den Vertrag auswirkt, steht in den <Link href="/agb">Vertrags- und Lizenzbedingungen</Link>.</p>
  </LegalShell>;
}
