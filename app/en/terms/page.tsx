import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "../../_components/LegalShell";
import { legalPaths } from "../../_lib/legal";

export const metadata: Metadata = { title: "Terms and Licence · Witness", description: "Terms of sale and licence terms for buying and using Witness.", robots: { index: false, follow: false } };

const en = legalPaths.en;

export default function TermsPage() {
  return <LegalShell
    locale="en"
    page="terms"
    eyebrow="Legal"
    title="Terms and Licence"
    updated="5 September 2026"
    notice={<><b>This English text applies to purchases made in English.</b> The German text at <Link href={legalPaths.de.terms}>/agb</Link> applies to purchases made in German. They say the same thing; if you find a place where they do not, tell us — you are entitled to rely on the one you read. Neither replaces advice from a lawyer, and the version that applies to you is the one that was current when you bought.</>}
  >
    <h2>1. Who we are, and what these terms cover</h2>
    <p>These terms cover downloading, trying, buying and using the software <strong>Witness</strong> for macOS, and using this website.</p>
    <p>The provider and licensor is Ihor Skakovskyi, Ostrovského 26, 150 00 Praha 5, Czech Republic, IČO 17328691, registered in the Czech trade register (živnostenský rejstřík), e-mail <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a> — “we” below. The full provider details are in the <Link href={en.imprint}>legal notice</Link>.</p>
    <p>Your own terms do not become part of this contract unless we agree to them in writing.</p>
    <p>A <strong>consumer</strong> is someone entering this contract for purposes that are mostly outside their trade, business or profession. Where these terms mention consumers, those rules apply only to them.</p>

    <h2>2. What Witness is — and what it is not</h2>
    <p>Witness is a dictation application for Apple silicon Macs running macOS 14.4 or newer. Speech recognition and text processing run on your Mac. There is no product account and no password.</p>
    <p>Before your first dictation the app fetches a speech recognition model once, from a public source (Hugging Face, the repository <code>argmaxinc/whisperkit-coreml</code>). That needs an internet connection and free disk space. After it, recognition works with no connection at all.</p>
    <p>You can tick 100 languages. For German, English, Russian and Ukrainian, recognition, text processing and every marking are measured end to end. The other languages are recognised; markings that are calibrated per language stay off there rather than guessing.</p>
    <p><strong>Marking an uncertain passage is a hint, not a check.</strong> It can mark passages that are right and miss passages that are wrong. Witness replaces neither reading the text it produced nor any professional, legal or medical review. Responsibility for every text you insert, send or pass on stays with you.</p>
    <p>We do not owe any particular recognition accuracy. It depends on your microphone, the noise around you, the language, the pronunciation and the vocabulary, and it is not a warranted property.</p>

    <h2>3. The free trial</h2>
    <p>The trial is the full product and runs for <strong>14 days from your first successful dictation</strong>.</p>
    <ul>
      <li>After five dictations or 24 hours — whichever comes first — you need a free trial key. To issue it, the app sends your e-mail address and a device identifier to our activation service; the details are in the <Link href={en.privacy}>privacy policy</Link>.</li>
      <li>No payment details are collected for the trial.</li>
      <li>There is one trial per e-mail address and one per Mac. A second one is refused rather than quietly granted.</li>
      <li>No subscription comes out of the trial. It ends without you cancelling anything.</li>
      <li>When it ends, new dictations pause. Settings, your vocabulary and licence activation stay reachable, and text you already inserted is untouched.</li>
    </ul>

    <h2>4. How the contract is made, prices, and payment</h2>
    <p>Showing the licences on this website and in the app is an invitation to order, not a binding offer. The contract is made when you complete the payment and it is confirmed.</p>
    <p>Payment runs through <strong>Stripe</strong>. On this sale Stripe acts as merchant of record in its own name: it takes the payment, issues the invoice and remits the VAT, so Stripe&apos;s own terms apply to the payment as well. <strong>The licence contract for using Witness is with us</strong>, and these terms govern it. We never see a card number.</p>
    <p>The prices are <strong>€99 once</strong> for the lifetime licence and <strong>€49 per year</strong> for the annual licence, each including statutory VAT. The checkout shows which payment methods are available before you finish. You receive the invoice by e-mail.</p>

    <h2>5. Delivery and activation</h2>
    <p>Once the payment is confirmed we issue a signed licence key for the Mac you activate from and send it to the e-mail address you bought with. Delivery is immediate, normally within a few minutes.</p>
    <p>The key is verified on your Mac against a signature. That needs no live connection: if our activation service is down, nobody new can activate, but no installation that is already activated stops working.</p>
    <p>If no mail arrives, ask for the key again in the app — you get the same key, not a second one. If that does not help, write to <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a>.</p>

    <h2>6. What the licence allows</h2>
    <p>We grant you a simple, non-exclusive, non-transferable right to use Witness.</p>
    <ul>
      <li>One licence covers <strong>one natural person and up to two Macs they use</strong>. No more than two devices can be active at once.</li>
      <li>You can release a Mac in the app (“Remove from this Mac”). That frees a slot, for instance when you replace a machine.</li>
      <li>Professional and commercial use is included. Every further person using Witness needs a licence of their own.</li>
      <li>The licence key may not be passed on, sold, rented, sublicensed or published.</li>
      <li>The licence check and the device limit may not be circumvented. Copyright notices may not be removed.</li>
      <li>Reverse engineering is permitted only as far as mandatory law allows.</li>
    </ul>
    <p>If you breach these materially, we may end the licence after asking you to stop without success. Your statutory rights are unaffected.</p>

    <h2>7. What “lifetime” means</h2>
    <p>The word describes a version, not a period of time. It means neither our lifetime nor yours.</p>
    <p>A lifetime licence covers <strong>the major version current when you bought — version 1 today — and every update to it</strong>, meaning every version 1.x, with no time limit and no further payment.</p>
    <p>A future major version (2.0) is a new product and is not included. The version you bought keeps running for as long as it runs on your Mac and your macOS version. The app tells you what a new major version means for your licence before you decide anything.</p>

    <h2>8. The annual licence: term, renewal and ending it</h2>
    <p>The annual licence runs for 12 months from issue and then renews automatically for another 12 months at the price then current, unless you end it first.</p>
    <ul>
      <li><strong>You can end it at any time</strong> up to the last day of the current term, with no notice period and no reason. It then stays usable until the end of the period you paid for and does not renew.</li>
      <li>The simplest way is the payment-management link in your purchase confirmation. An e-mail to <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a> naming the address the licence runs under does it too. We stop the renewal and confirm that in writing.</li>
      <li>We announce a price change for the next renewal by e-mail at least six weeks in advance. If you do not agree, end the renewal before the current term is over.</li>
      <li>There is no pro-rata refund for a term already started; the statutory right of withdrawal is unaffected.</li>
    </ul>
    <p>When it ends, new dictations pause. The app, your settings and your vocabulary stay on your Mac.</p>

    <h2>9. Updates and system requirements</h2>
    <p>Witness does not update itself. New versions are available for download at witnessmac.com.</p>
    <p>For consumers, we provide, for as long as the licence runs, the updates needed to keep the product in conformity with the contract — for a lifetime licence, for the major version you bought. We tell you about such updates; if you do not install them, we are not liable for defects that follow from that alone.</p>
    <p>The system requirements that apply are the ones stated when you bought: Apple silicon and macOS 14.4 or newer. If Apple changes the operating system so that an adjustment becomes necessary, we make it within the paragraph above.</p>

    <h2>10. Defects</h2>
    <p>Your statutory rights in respect of defects apply. For consumers these follow the rules on digital products.</p>
    <p>Please report defects to <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a>, ideally with your macOS version, the app version and a description of how to trigger the fault. We give a guarantee in the legal sense only where we describe it as one, in writing.</p>

    <h2>11. Liability</h2>
    <p>We are liable without limit for intent and gross negligence, for injury to life, body or health, for fraudulently concealed defects, to the extent of any guarantee we have given, and under mandatory product liability law.</p>
    <p>For simple negligence we are liable only for breach of a material contractual obligation — one whose fulfilment makes proper performance of the contract possible in the first place and on whose observance you may regularly rely — and then limited to the foreseeable damage typical for this kind of contract.</p>
    <p>Liability is otherwise excluded.</p>
    <p>Backing up your own data is your responsibility. Witness keeps no archive of your dictations: audio and transcripts are not stored, and what you did not insert or save yourself cannot be recovered.</p>

    <h2>12. Right of withdrawal</h2>
    <p>Consumers have a statutory right of withdrawal. The full instruction, the conditions under which that right ends early for digital content delivered immediately, and the model withdrawal form are at <Link href={en.withdrawal}>Cancellation</Link>.</p>
    <p>There is no voluntary return promise beyond that. What you have is the statutory right, and it is set out there in full.</p>

    <h2>13. Data protection</h2>
    <p>What Witness processes, what it never transmits and how long our activation service keeps anything is in the <Link href={en.privacy}>privacy policy</Link>. You do not need a data processing agreement for dictation content: we do not process it for you, because it never leaves your Mac.</p>

    <h2>14. Third-party components</h2>
    <p>Witness contains open-source components and uses third-party speech recognition models. They are listed with their rights holders and licences at <Link href={en.licences}>Third-party licences</Link>. For each component, its own licence terms take precedence over these terms.</p>

    <h2>15. Changes to these terms</h2>
    <p>For a lifetime licence, the version current when you bought applies. For an annual licence we may change these terms with effect from the next renewal; we announce the change by e-mail at least six weeks in advance, and you can end the renewal before the current term is over.</p>

    <h2>16. Governing law, courts, and dispute resolution</h2>
    <p>Czech law applies, excluding the UN Convention on Contracts for the International Sale of Goods. If you are a consumer, the mandatory consumer protection rules of the country where you are habitually resident are unaffected — for a consumer in Germany, German consumer law.</p>
    <p>As a consumer you may sue us where you live; we may sue you only there.</p>
    <p>The body responsible for out-of-court resolution of consumer disputes in our case is the Czech Trade Inspection Authority (Česká obchodní inspekce), <a href="https://coi.gov.cz/informace-o-adr/" rel="noreferrer">coi.gov.cz/informace-o-adr</a>. For cross-border cases the European Consumer Centres Network can also help. You can always complain to us directly at <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a>; it is the faster route, and we answer.</p>
  </LegalShell>;
}
