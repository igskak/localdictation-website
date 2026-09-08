import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "../../_components/LegalShell";
import { analyticsEnabled, getAnalyticsConfig } from "../../_lib/analytics";
import { legalPaths } from "../../_lib/legal";

export const metadata: Metadata = { title: "Privacy · Witness", description: "Privacy policy for the website, the Witness app, and the activation service.", robots: { index: false, follow: false } };

export default function PrivacyPage() {
  // Mirrors the German page: section 8 describes the tags that are configured.
  const measuring = analyticsEnabled(getAnalyticsConfig());
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
    <p>Nothing you dictate leaves your Mac. Not the audio, not the transcript, not the processed text, not your vocabulary, not the names of the applications you dictate into, and nothing derived from any of them. There is no product account, no sign-in and no analytics software <strong>in the app</strong>.</p>
    <p><strong>This website is a different matter, and the two are placed side by side deliberately.</strong> This product&apos;s promise is about the app on your Mac, not about this page: it is a sales page, we pay for people to find it, and a sales page may measure who visits it. What this page actually does today is in section 8.</p>
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
          <tr><td>A request for the speech model</td><td>At first launch, automatically, and any later launch where the model is missing</td><td>Hugging Face, the model&apos;s host</td><td>Fetching a static file. One way — nothing is uploaded</td></tr>
          <tr><td>Your e-mail address and a device identifier</td><td>You press “Send me a key”</td><td>Our activation service at <code>api.witnessmac.com</code></td><td>Issuing a licence key for this Mac</td></tr>
          <tr><td>A licence key you already hold</td><td>You press “Remove from this Mac”</td><td>The same service</td><td>Freeing one of the two Macs your licence covers</td></tr>
          <tr><td>Three events about the trial, each with an app version, a macOS major and minor version, and a random number made at install</td><td>A trial starts, the app asks for an e-mail address, or it puts the prices on screen — unless you switch this off</td><td>The same service</td><td>Counting how many people reach the wall and how many get past it</td></tr>
        </tbody>
      </table>
    </div>
    <p>That is the complete list. There is no fifth row. The activation request has exactly two fields — <code>email</code> and <code>device</code> — and an automated test fails the moment a third is added. That is how this page stays true.</p>
    <p>The device identifier is a salted SHA-256 of your Mac&apos;s hardware identifier, truncated to 128 bits. It cannot be turned back into a serial number, it applies only to this app, and it matches nothing outside it. It exists so that a licence covers two Macs rather than any number of them.</p>
    <p>The connection is HTTPS. An endpoint without encryption makes the app report itself as unconfigured rather than send an address in the clear, and no build has a setting that relaxes that.</p>
    <p>The declaration you make in the app before a checkout opens — that the key be delivered immediately, and that this gives up the right of withdrawal — is <strong>not</strong> transmitted. It is recorded in the local system log on your Mac and nowhere else.</p>

    <h2>4a. The three product events, field by field</h2>
    <p>Witness builds ten events about the licensing funnel. <strong>Three of them are sent</strong> — <code>trial_started</code>, <code>activation_requested</code> and <code>paywall_shown</code>. The other seven are written to the local system log on your Mac and go nowhere.</p>
    <p>Each message is exactly this, and nothing else:</p>
    <pre><code>{'{"app_version":"0.4.0","event":"trial_started","install_id":"<a random UUID>","system_version":"15.0"}'}</code></pre>
    <p><code>paywall_shown</code> adds one more field, <code>qualifier</code>, whose value is one of four fixed words describing why the prices were shown. There is no sixth field, and an automated test fails if one is added without this page naming it.</p>
    <ul>
      <li><strong><code>install_id</code></strong> is a random value created once, when you install the app. It is derived from nothing — not from this Mac, not from you, not from your licence — so it cannot be joined to the device identifier above, to your e-mail address, or to anything outside this product.</li>
      <li><strong><code>app_version</code></strong> and <strong><code>system_version</code></strong> are what they say. The macOS version is major and minor only, because a rare build number is an identifier.</li>
      <li><strong><code>event</code></strong> and <strong><code>qualifier</code></strong> are drawn from fixed lists in the app, and the service refuses anything outside them. Nothing you dictate is in this and nothing could be: there are five fields and none of them can hold a word you said.</li>
    </ul>
    <p><strong>Turning it off</strong>: Settings → Privacy, one switch, which is on when you install the app. The first-run screen says so before the first of these events can happen. Off means none of the three is sent, and nothing else about the app changes.</p>
    <p><strong>Legal basis</strong>: Art. 6(1)(f) GDPR. Our legitimate interest is knowing where people stop using a product we are asking them to pay for; the interest is weighed against an identifier that is deliberately unlinkable to you and a message that cannot carry content. You can object at any time with the switch above, with no consequence for the trial, the licence, or dictation.</p>
    <p><strong>Retention</strong>: 90 days, then the rows are deleted. No IP address is stored for these events.</p>

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
    {measuring ? <>
    <p>This page uses <strong>Google Analytics 4</strong> and the <strong>Google Ads conversion tag</strong> to measure which ad and which search term led to a visit and to a requested licence. The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland.</p>
    <p><strong>Without your consent</strong> nothing is stored on your device and nothing is read from it. Measurement still happens, but without recognition: the tag sends a shortened IP address, the page viewed, device and browser, and the ad click identifier from the address bar. The legal basis is Art. 6(1)(f) GDPR; our legitimate interest is knowing what we are paying for advertising for. You may object under Art. 21 GDPR.</p>
    <p><strong>With your consent</strong> Google Analytics and Google Ads may additionally set and read cookies and connect your visits to one another. The legal basis is § 25(1) TDDDG for the storage on your device and Art. 6(1)(a) GDPR for the processing. Your decision sits in your browser&apos;s local storage under <code>witness.consent</code>; you can change it at any time through <em>Cookie settings</em> in the footer of every page, with effect for the future.</p>
    <p><strong>When you request a key</strong>, the page passes your e-mail address as an <em>enhanced conversion</em>: the Google script hashes it inside your browser and only that hash is sent, so that an ad can be matched to the request without transmitting the address itself.</p>
    <p><strong>What is not processed</strong>: anything from the app. No audio, no transcript, no vocabulary, none of the applications you dictate into. The app carries none of these tags, and the events in section 4a go to our own service and not to Google.</p>
    <p><strong>Retention</strong>: the cookies expire after at most 24 months; in Google Analytics user and event data is deleted after 14 months.</p>
    <p><strong>Third country</strong>: Google also processes data in the United States. This rests on the European Commission&apos;s standard contractual clauses and on the adequacy decision for the EU-US Data Privacy Framework, under which Google LLC is certified. Access by US authorities cannot be ruled out.</p>
    </> : <p>This website currently loads <strong>no analytics, advertising or tracking scripts</strong> and sets <strong>no cookies</strong>. There is therefore no consent banner either: there would be nothing to consent to.</p>}
    <p>It embeds no fonts, maps or videos from third-party servers.</p>
    <p>It is served by <strong>Cloudflare</strong> (processor). When you load a page, the infrastructure processes the technically necessary connection data — IP address, time, requested address, amount of data transferred, status code and user agent — in order to deliver the page and keep the service safe from attack. The legal basis is Art. 6(1)(f) GDPR; the legitimate interest is the secure and functioning operation of the website. This connection data is not combined into profiles and not linked with other data.</p>

    <h2>9. The form on /danke</h2>
    <p>The form is optional. The download and the installation guide work without it. It transmits exactly three things: your <strong>e-mail address</strong>, the <strong>language of the page</strong>, and, if you pick one, a <strong>coded answer about where you dictate most</strong>. It sends no audio, no transcript, no vocabulary, no clipboard and no content from other applications.</p>
    <p>The purpose is sending your licence key and the setup help that goes with it; the legal basis is Art. 6(1)(b) GDPR for the pre-contractual step you trigger by submitting. The optional answer about your area of use is processed on the basis of your consent under Art. 6(1)(a) GDPR, which you can withdraw at any time with effect for the future. The entries are deleted once the key has been sent and no question is left open.</p>
    <p>The recipient is the activation service described in section 5; there are no other recipients, and nothing is passed to third parties for advertising. If no recipient is configured, the form sends nothing and says so — then you ask for the key in the app.</p>

    <h2>10. The speech model</h2>
    <p>When you press “Prepare speech model…”, the app fetches the model from the public repository <code>argmaxinc/whisperkit-coreml</code> at Hugging Face. Hugging Face thereby learns the technical connection data of that request, in particular your IP address. Nothing is uploaded, and the request contains nothing about who you are. The legal basis is Art. 6(1)(b) GDPR, because there is no recognition without a model. Hugging Face&apos;s own privacy policy applies to that fetch.</p>

    <h2>11. The seven events that are not transmitted</h2>
    <p>The app builds ten events about the licensing journey — installed, trial started, key requested and so on. <strong>Three of them are sent</strong>, and section 4a says exactly which and exactly what is in them. <strong>The other seven are not transmitted</strong>: they are written to the local system log on your Mac and stay there.</p>
    <p>The type they are built from has no free-text field anywhere, so there is nothing a transcript could end up in even by accident. Any further change happens with a new row in the table in section 4 and a switch you can reach — not quietly.</p>
    <p>We collect no crash reports. macOS may offer to send Apple a report; that is between you and Apple, and this app neither reads it nor asks for it.</p>

    <h2>12. No automated decision-making</h2>
    <p>There is no automated decision-making, including profiling, within the meaning of Art. 22 GDPR.</p>

    <h2>13. Transfers to third countries</h2>
    <p>Cloudflare, Stripe, Resend, Amazon Web Services, Hugging Face and Google (Gmail, and where consent is given Analytics and Ads) are companies established in, or with a parent company in, the United States. Even where the data is stored in the EU — for us, the licence table in Cloudflare&apos;s Eastern Europe region and mail delivery through Ireland — access from a third country cannot be ruled out. We base such transfers on the European Commission&apos;s standard contractual clauses and, where the provider concerned is certified under it, on the adequacy decision for the EU-US Data Privacy Framework.</p>

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
