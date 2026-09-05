import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "../_components/LegalShell";

export const metadata: Metadata = { title: "Widerruf · Witness", description: "Widerrufsbelehrung und Muster-Widerrufsformular für den Kauf einer Witness-Lizenz.", robots: { index: false, follow: false } };

export default function WiderrufPage() {
  return <LegalShell
    page="withdrawal"
    eyebrow="Rechtliches"
    title="Widerruf"
    updated="5. September 2026"
    notice={<><b>Diese Belehrung gilt für Verbraucher.</b> Sie betrifft den Kauf einer Lizenz, nicht den kostenlosen Test — für den Test schließt du keinen entgeltlichen Vertrag und hast nichts zu widerrufen.</>}
  >
    <h2>Widerrufsrecht</h2>
    <p>Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
    <p>Die Widerrufsfrist beträgt vierzehn Tage <strong>ab dem Tag des Vertragsabschlusses</strong>. Weil du einen digitalen Inhalt kaufst und keine Ware geliefert bekommst, beginnt die Frist mit dem Kauf und nicht mit dem Eintreffen des Lizenzschlüssels.</p>
    <p>Um dein Widerrufsrecht auszuüben, musst du uns</p>
    <p>Ihor Skakovskyi, Ostrovského 26, 150 00 Praha 5, Tschechische Republik<br />E-Mail: <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a><br />Telefon: +420 607 643 905</p>
    <p>mittels einer eindeutigen Erklärung (zum Beispiel ein mit der Post versandter Brief oder eine E-Mail) über deinen Entschluss, diesen Vertrag zu widerrufen, informieren. Du kannst dafür das unten abgedruckte Muster-Widerrufsformular verwenden, das aber nicht vorgeschrieben ist. Eine E-Mail mit dem Satz, dass du widerrufst, und der Adresse, unter der du gekauft hast, genügt.</p>
    <p>Zur Wahrung der Widerrufsfrist reicht es aus, dass du die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.</p>

    <h2>Folgen des Widerrufs</h2>
    <p>Wenn du diesen Vertrag widerrufst, haben wir dir alle Zahlungen, die wir von dir erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über deinen Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das du bei der ursprünglichen Transaktion eingesetzt hast, es sei denn, mit dir wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden dir wegen dieser Rückzahlung Entgelte berechnet.</p>
    <p>Die Rückzahlung wird über Stripe abgewickelt, weil Stripe die Zahlung entgegengenommen hat. Auf deinem Kontoauszug erscheint sie unter derselben Bezeichnung wie der Kauf.</p>
    <p>Mit dem Widerruf endet deine Lizenz. Wir vermerken den Lizenzschlüssel als beendet. Weil Witness den Schlüssel auf deinem Mac gegen eine Signatur prüft und dafür keine Verbindung braucht, kann ein bereits ausgelieferter Schlüssel technisch nicht aus der Ferne abgeschaltet werden: <strong>du bist deshalb verpflichtet, Witness nach dem Widerruf nicht weiter mit diesem Schlüssel zu nutzen</strong> und die Lizenz in der App über „Von diesem Mac entfernen“ freizugeben oder die App zu löschen.</p>

    <h2>Wann das Widerrufsrecht vorzeitig erlischt</h2>
    <p>Bei einem Vertrag über die Lieferung von digitalen Inhalten, die nicht auf einem körperlichen Datenträger geliefert werden, erlischt das Widerrufsrecht auch dann, wenn wir mit der Ausführung des Vertrags begonnen haben, nachdem du</p>
    <ol>
      <li>ausdrücklich zugestimmt hast, dass wir mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist beginnen, und</li>
      <li>deine Kenntnis davon bestätigt hast, dass du durch deine Zustimmung mit Beginn der Ausführung des Vertrags dein Widerrufsrecht verlierst,</li>
    </ol>
    <p>und wir dir diese Bestätigung zur Verfügung gestellt haben.</p>
    <p>Witness holt beide Erklärungen ein, bevor die App einen Bezahlvorgang öffnet — die Bezahlseite ist standardisiert und kann nicht danach fragen, also fragt die App, über den Preisen, und die Kaufknöpfe tun nichts, solange nicht angekreuzt ist. Deine Kaufbestätigung wiederholt die Erklärung. <strong>Liegen sie nicht vor, bleibt dein Widerrufsrecht die vollen vierzehn Tage bestehen</strong> — auch dann, wenn du den Schlüssel bereits erhalten und Witness benutzt hast.</p>

    <h2>Jahreslizenz</h2>
    <p>Das Widerrufsrecht bezieht sich auf den Abschluss des Vertrags. Eine automatische Verlängerung der Jahreslizenz ist kein neuer Vertragsabschluss und löst deshalb kein neues Widerrufsrecht aus. Beenden kannst du die Verlängerung jederzeit bis zum letzten Tag der laufenden Laufzeit; wie das geht, steht in Abschnitt 8 der <Link href="/agb">Vertrags- und Lizenzbedingungen</Link>.</p>

    <h2>Über das Gesetz hinaus</h2>
    <p>Wir versprechen nichts, was über das gesetzliche Widerrufsrecht hinausgeht. Ein zweites, freiwilliges Rücknahmeversprechen daneben würde nur die Frage aufwerfen, welches von beiden gilt. Was du hast, steht vollständig auf dieser Seite.</p>
    <p>Davon unberührt: Wenn Witness auf deinem Mac nicht funktioniert, ist das ein Mangel und keine Geschmacksfrage. Schreib an <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a> — dafür brauchst du keine Frist.</p>

    <div className="legal-form">
      <h3>Muster-Widerrufsformular</h3>
      <p><em>Wenn du den Vertrag widerrufen willst, fülle dieses Formular aus und sende es zurück.</em></p>
      <p>An<br />Ihor Skakovskyi, Ostrovského 26, 150 00 Praha 5, Tschechische Republik<br />E-Mail: hallo@witnessmac.com</p>
      <p>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*) / die Erbringung der folgenden Dienstleistung (*)</p>
      <p>__________________________________________________</p>
      <p>Bestellt am (*) / erhalten am (*): __________________</p>
      <p>Name des/der Verbraucher(s): ______________________</p>
      <p>Anschrift des/der Verbraucher(s): __________________</p>
      <p>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier): __________________</p>
      <p>Datum: __________________</p>
      <p>(*) Unzutreffendes streichen.</p>
    </div>
  </LegalShell>;
}
