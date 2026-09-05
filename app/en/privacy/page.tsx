import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "../../_components/LegalShell";
import { legalPaths } from "../../_lib/legal";

export const metadata: Metadata = { title: "Privacy · Witness", description: "Privacy policy for the website, the Witness app, and the activation service.", robots: { index: false, follow: false } };

export default function PrivacyPage() {
  return <LegalShell
    locale="en"
    page="privacy"
    eyebrow="Privacy"
    title="Clear limits on your data"
    updated="5 September 2026"
    notice={<><b>This policy is written from the code, not from an intention.</b> Every line describes what the app and the service actually do today. If a future version ever sends something new, this says so before that version is published. The German text is at <Link href={legalPaths.de.privacy}>/datenschutz</Link>.</>}
  >
    <h2>1. Controller</h2>
    <p>Ihor Skakovskyi, Ostrovského 26, 150 00 Praha 5, Czech Republic<br />IČO 17328691<br />E-mail: <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a><br />Telephone: +420 607 643 905</p>
    <p>No data protection officer has been appointed; the legal conditions for one are not met by a sole trader of this size doing this processing. The address above handles everything to do with data protection.</p>

    <h2>2. The short version</h2>
    <p>Nothing you dictate leaves your Mac. Not the audio, not the transcript, not the processed text, not your vocabulary, not the names of the applications you dictate into, and nothing derived from any of them. There is no product account, no sign-in and no analytics software — neither in the app nor on this website.</p>
    <p>Three things can leave the app, and each of them only after you press something. They are in section 4.</p>

    <h2>3. What stays on your Mac</h2>
    <p>Speech recognition runs in the app, against a model on your disk. Audio is held in memory for the length of one utterance and discarded when the next begins or when you close the review. It is never written to disk.</p>
    <p>Your vocabulary, the risk markings, the text processing and the review view are local computation over local text. There is no network code in them.</p>
    <p>Removing the app leaves no archive of audio or transcripts behind, because none is ever created.</p>

    <h2>4. What the app transmits — in full</h2>
    <div className="legal-table">
      <table>
        <thead><tr><th>What</th><th>When</th><th>To whom</th><th>Why</th></tr></thead>
        <tbody>
          <tr><td>A request for the speech model</td><td>You press “Prepare speech model…”</td><td>Hugging Face, the model&apos;s host</td><td>Fetching a static file. One way — nothing is uploaded</td></tr>
          <tr><td>Your e-mail address and a device identifier</td><td>You press “Send me a key”</td><td>Our activation service at <code>api.witnessmac.com</code></td><td>Issuing a licence key for this Mac</td></tr>
          <tr><td>A licence key you already hold</td><td>You press “Remove from this Mac”</td><td>The same service</td><td>Freeing one of the two Macs your licence covers</td></tr>
        </tbody>
      </table>
    </div>
    <p>That is the complete list. There is no fourth row. The activation request has exactly two fields — <code>email</code> and <code>device</code> — and an automated test fails the moment a third is added. That is how this page stays true.</p>
    <p>The device identifier is a salted SHA-256 of your Mac&apos;s hardware identifier, truncated to 128 bits. It cannot be turned back into a serial number, it applies only to this app, and it matches nothing outside it. It exists so that a licence covers two Macs rather than any number of them.</p>
    <p>The connection is HTTPS. An endpoint without encryption makes the app report itself as unconfigured rather than send an address in the clear, and no build has a setting that relaxes that.</p>
    <p>The declaration you make in the app before a checkout opens — that the key be delivered immediately, and that this gives up the right of withdrawal — is <strong>not</strong> transmitted. It is recorded in the local system log on your Mac and nowhere else.</p>

    <h2>5. The activation service</h2>
    <p><strong>Purpose</strong>: to issue a licence key, mail it to you, recognise you when you activate a second Mac or replace one, and enforce the two-device limit.</p>
    <p><strong>Legal basis</strong>: Art. 6(1)(b) GDPR — performance of the contract for the trial or the licence. For keeping the payment provider&apos;s order identifier, additionally Art. 6(1)(c) GDPR, because tax retention duties attach to it. For the counter keyed to an IP address, Art. 6(1)(f) GDPR; our legitimate interest is protecting the service against automated abuse.</p>
    <p><strong>Processor</strong>: the service runs on Cloudflare Workers, and the licence table is a Cloudflare D1 database in Cloudflare&apos;s <em>EEUR (Eastern Europe)</em> region. Cloudflare runs the code and stores the table; it receives the data for no purpose of its own.</p>
    <p><strong>What is stored</strong> — this is the whole table:</p>
    <div className="legal-table">
      <table>
        <thead><tr><th>Stored</th><th>What for</th><th>How long</th></tr></thead>
        <tbody>
          <tr><td>Your e-mail address, lowercased</td><td>Identifies the licence</td><td>For the life of the licence</td></tr>
          <tr><td>The device identifier</td><td>The two-Mac limit</td><td>For the life of the licence, or until you release the Mac</td></tr>
          <tr><td>Kind, issue date, expiry, key id</td><td>What was issued</td><td>For the life of the licence</td></tr>
          <tr><td>The payment provider&apos;s order id</td><td>Reconciling a payment, and invoices</td><td>As long as tax law requires</td></tr>
          <tr><td>Your IP address, as a counter</td><td>Rate limiting, against abuse</td><td>24 hours, as a count and not as a log</td></tr>
          <tr><td>Provider identifiers for your purchase</td><td>Matching a later renewal or refund to your licence rather than to somebody else&apos;s</td><td>For the life of the licence</td></tr>
        </tbody>
      </table>
    </div>
    <p>The licence key itself is not stored. It is reproduced from the fields above when you ask for it again — which is also why asking twice gives you the same key rather than a second one.</p>

    <h2>6. Payment</h2>
    <p>The checkout runs at <strong>Stripe</strong>, which acts as merchant of record in its own name on this sale and issues the invoice. Stripe is an independent controller for the payment processing; Stripe&apos;s own privacy policy applies.</p>
    <p>The app opens no payment page of its own and sees no card details: the buy buttons hand a URL to your browser. To our activation service, Stripe passes the address you bought with and identifiers for the order. The legal basis is Art. 6(1)(b) GDPR.</p>

    <h2>7. E-mail</h2>
    <p>Licence keys are sent through <strong>Resend</strong> as a processor; the technical delivery runs over Amazon SES in the <em>eu-west-1 (Ireland)</em> region. The sender address is <code>keys@witnessmac.com</code>. These mails are contractual communication under Art. 6(1)(b) GDPR. Marketing to an address collected here would need its own, separately obtained consent; we send none.</p>
    <p>Incoming mail to <code>hallo@</code>, <code>keys@</code> and <code>dmarc@</code> is received by Cloudflare Email Routing and forwarded to a private mailbox of the provider at Google (Gmail). If you write to us, we process your message and your address in order to answer it (Art. 6(1)(b) or (f) GDPR) and keep the exchange as long as it is needed for follow-up questions or legal duties.</p>

    <h2>8. This website</h2>
    <p>The website loads <strong>no analytics, advertising or tracking scripts</strong>, sets <strong>no cookies</strong>, and embeds no fonts, maps, videos or other content from third-party servers. There is therefore no consent banner either: there would be nothing to consent to.</p>
    <p>It is served by <strong>Cloudflare</strong> (processor). When you load a page, the infrastructure processes the technically necessary connection data — IP address, time, requested address, amount of data transferred, status code and user agent — in order to deliver the page and keep the service safe from attack. The legal basis is Art. 6(1)(f) GDPR; the legitimate interest is the secure and functioning operation of the website. This connection data is not combined into profiles and not linked with other data.</p>

    <h2>9. The form on /danke</h2>
    <p>The form is optional. The download and the installation guide work without it. It transmits exactly three things: your <strong>e-mail address</strong>, the <strong>language of the page</strong>, and, if you pick one, a <strong>coded answer about where you dictate most</strong>. It sends no audio, no transcript, no vocabulary, no clipboard and no content from other applications.</p>
    <p>The purpose is sending your licence key and the setup help that goes with it; the legal basis is Art. 6(1)(b) GDPR for the pre-contractual step you trigger by submitting. The optional answer about your area of use is processed on the basis of your consent under Art. 6(1)(a) GDPR, which you can withdraw at any time with effect for the future. The entries are deleted once the key has been sent and no question is left open.</p>
    <p>The recipient is the activation service described in section 5; there are no other recipients, and nothing is passed to third parties for advertising. If no recipient is configured, the form sends nothing and says so — then you ask for the key in the app.</p>

    <h2>10. The speech model</h2>
    <p>When you press “Prepare speech model…”, the app fetches the model from the public repository <code>argmaxinc/whisperkit-coreml</code> at Hugging Face. Hugging Face thereby learns the technical connection data of that request, in particular your IP address. Nothing is uploaded, and the request contains nothing about who you are. The legal basis is Art. 6(1)(b) GDPR, because there is no recognition without a model. Hugging Face&apos;s own privacy policy applies to that fetch.</p>

    <h2>11. No telemetry</h2>
    <p>The app builds ten events about the licensing journey — installed, trial started, key requested and so on — carrying the app version, the major macOS version and a random identifier created at install. <strong>None of them is transmitted.</strong> They are written to the local system log and stay there.</p>
    <p>The type they are built from has no free-text field anywhere, so there is nothing a transcript could end up in even by accident. If that ever changes, it changes with consent asked for in the app and with a new row in the table in section 4 — not quietly.</p>
    <p>We collect no crash reports. macOS may offer to send Apple a report; that is between you and Apple, and this app neither reads it nor asks for it.</p>

    <h2>12. No automated decision-making</h2>
    <p>There is no automated decision-making, including profiling, within the meaning of Art. 22 GDPR.</p>

    <h2>13. Transfers to third countries</h2>
    <p>Cloudflare, Stripe, Resend, Amazon Web Services, Hugging Face and Google are companies established in, or with a parent company in, the United States. Even where the data is stored in the EU — for us, the licence table in Cloudflare&apos;s Eastern Europe region and mail delivery through Ireland — access from a third country cannot be ruled out. We base such transfers on the European Commission&apos;s standard contractual clauses and, where the provider concerned is certified under it, on the adequacy decision for the EU-US Data Privacy Framework.</p>

    <h2>14. Your rights</h2>
    <ul>
      <li><strong>Access</strong> to the data stored about you (Art. 15 GDPR)</li>
      <li><strong>Rectification</strong> of inaccurate data (Art. 16 GDPR)</li>
      <li><strong>Erasure</strong> (Art. 17 GDPR)</li>
      <li><strong>Restriction</strong> of processing (Art. 18 GDPR)</li>
      <li><strong>Data portability</strong> (Art. 20 GDPR)</li>
      <li><strong>Objection</strong> to processing based on legitimate interests (Art. 21 GDPR)</li>
      <li><strong>Withdrawal of consent</strong> with effect for the future (Art. 7(3) GDPR)</li>
    </ul>
    <p>An e-mail to <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a> is enough. There is no form and no account you would have to sign into for it.</p>
    <p><strong>Erasure, and what it means</strong>: on request, your record in the activation service is deleted; only an anonymised order row is kept where an invoice requires it. The consequence matters, because it cannot be undone: no further key can be issued for that address, so a Mac you later replace cannot be activated. Keys already on your Macs keep working — they are verified on the Mac, against a signature, with no connection.</p>

    <h2>15. Right to complain</h2>
    <p>You can complain to a data protection supervisory authority. The one responsible for us is the Czech Office for Personal Data Protection, Úřad pro ochranu osobních údajů, Pplk. Sochora 27, 170 00 Praha 7, <a href="https://uoou.gov.cz" rel="noreferrer">uoou.gov.cz</a>. You can also go to the authority where you live or work.</p>

    <h2>16. Whether you have to provide anything</h2>
    <p>You are not obliged to give us data. Without an e-mail address, however, no trial or licence key can be issued and delivered, because the licence is bound to that address; without a device identifier, the two-Mac limit could not be enforced.</p>

    <h2>17. Children</h2>
    <p>The product is not directed at children and asks nothing about age.</p>

    <h2>18. Changes to this policy</h2>
    <p>The table in section 4 is the promise. If a future version sends something that is not in it, this policy is changed <em>before</em> that version is published — and the app&apos;s request stays exactly as wide as this policy reaches.</p>
    <p>What that means for the contract is in the <Link href={legalPaths.en.terms}>Terms and Licence</Link>.</p>
  </LegalShell>;
}
