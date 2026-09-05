import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "../../_components/LegalShell";
import { legalPaths } from "../../_lib/legal";

export const metadata: Metadata = { title: "Cancellation · Witness", description: "Right of withdrawal and model withdrawal form for buying a Witness licence.", robots: { index: false, follow: false } };

export default function CancellationPage() {
  return <LegalShell
    locale="en"
    page="withdrawal"
    eyebrow="Legal"
    title="Cancellation"
    updated="5 September 2026"
    notice={<><b>This instruction is for consumers.</b> It covers buying a licence, not the free trial — for the trial you enter no paid contract and have nothing to withdraw from. The German text at <Link href={legalPaths.de.withdrawal}>/widerruf</Link> says the same thing for purchases made in German.</>}
  >
    <h2>Right of withdrawal</h2>
    <p>You have the right to withdraw from this contract within fourteen days without giving any reason.</p>
    <p>The withdrawal period is fourteen days <strong>from the day the contract was concluded</strong>. Because you are buying digital content and no goods are shipped to you, the clock starts with the purchase and not with the arrival of the licence key.</p>
    <p>To exercise your right of withdrawal, you must inform us</p>
    <p>Ihor Skakovskyi, Ostrovského 26, 150 00 Praha 5, Czech Republic<br />E-mail: <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a><br />Telephone: +420 607 643 905</p>
    <p>by an unequivocal statement (for example a letter sent by post, or an e-mail) of your decision to withdraw from this contract. You may use the model withdrawal form printed below, but it is not obligatory. An e-mail saying that you withdraw, with the address you bought under, is enough.</p>
    <p>To meet the withdrawal deadline, it is sufficient for you to send your communication concerning your exercise of the right of withdrawal before the withdrawal period has expired.</p>

    <h2>Effects of withdrawal</h2>
    <p>If you withdraw from this contract, we shall reimburse to you all payments received from you without undue delay and in any event not later than fourteen days from the day on which we are informed about your decision to withdraw. We will carry out such reimbursement using the same means of payment as you used for the initial transaction, unless you have expressly agreed otherwise; in any event, you will not incur any fees as a result of such reimbursement.</p>
    <p>The refund is processed through Stripe, because Stripe took the payment. It appears on your statement under the same name as the purchase did.</p>
    <p>Your licence ends with the withdrawal, and we mark the licence key as ended. Because Witness verifies the key on your Mac against a signature and needs no connection to do it, a key already delivered cannot be switched off remotely: <strong>you are therefore obliged not to keep using Witness with that key after withdrawing</strong>, and to release the licence in the app through “Remove from this Mac” or to delete the app.</p>

    <h2>When the right of withdrawal ends early</h2>
    <p>For a contract to supply digital content which is not supplied on a tangible medium, the right of withdrawal also ends if we have begun performance after you have</p>
    <ol>
      <li>expressly consented to us beginning performance before the withdrawal period has expired, and</li>
      <li>acknowledged that you thereby lose your right of withdrawal once performance begins,</li>
    </ol>
    <p>and we have provided you with confirmation of that acknowledgement.</p>
    <p>Witness asks for both declarations before it opens a checkout — the payment page is standardized and cannot ask, so the app does, above the prices, and the Buy buttons do nothing until it is ticked. Your purchase confirmation repeats the declaration. <strong>If those declarations were not made, your right of withdrawal runs the full fourteen days</strong> — even if you have already received the key and used Witness.</p>

    <h2>The annual licence</h2>
    <p>The right of withdrawal attaches to the conclusion of the contract. An automatic renewal of the annual licence is not a new conclusion and therefore starts no new withdrawal period. You can end the renewal at any time up to the last day of the current term; section 8 of the <Link href={legalPaths.en.terms}>Terms and Licence</Link> says how.</p>

    <h2>Beyond the law</h2>
    <p>We promise nothing beyond the statutory right of withdrawal. A second, voluntary return promise running alongside it would only raise the question of which of the two applies. What you have is set out in full on this page.</p>
    <p>Separately from that: if Witness does not work on your Mac, that is a defect and not a matter of taste. Write to <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a> — you need no deadline for that.</p>

    <div className="legal-form">
      <h3>Model withdrawal form</h3>
      <p><em>If you want to withdraw from the contract, fill in this form and send it back.</em></p>
      <p>To<br />Ihor Skakovskyi, Ostrovského 26, 150 00 Praha 5, Czech Republic<br />E-mail: hallo@witnessmac.com</p>
      <p>I/We (*) hereby give notice that I/We (*) withdraw from my/our (*) contract of sale of the following goods (*) / for the provision of the following service (*)</p>
      <p>__________________________________________________</p>
      <p>Ordered on (*) / received on (*): __________________</p>
      <p>Name of consumer(s): ______________________________</p>
      <p>Address of consumer(s): ___________________________</p>
      <p>Signature of consumer(s) (only if this form is notified on paper): __________________</p>
      <p>Date: __________________</p>
      <p>(*) Delete as appropriate.</p>
    </div>
  </LegalShell>;
}
