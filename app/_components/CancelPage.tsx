import Link from "next/link";
import { cancelSubmitPaths, startCopy, type StartLocale } from "../_data/startCopy";
import { legalLocale, legalPaths } from "../_lib/legal";
import { RouteFooter } from "./RouteFooter";

/**
 * The locale-specific cancellation page, including the German §312k path.
 *
 * A form that works without JavaScript and without an account. It posts to this
 * site, which forwards the address to the activation service; the answer comes
 * back as a page, and the same words follow by email. The law wants a button
 * reachable from every page of the shop, a confirmation page before sending,
 * and an immediate confirmation of receipt in text form. The footer carries the
 * link, the form is the confirmation step, and the result page is the receipt.
 */
export function CancelPage({ locale, status }: { locale: StartLocale; status: "idle" | "done" | "failed" }) {
  const c = startCopy[locale].cancel;
  const legal = legalPaths[legalLocale(locale)];
  const home = locale === "de" ? "/start" : `/${locale}/start`;

  return (
    <div className="legal-page" lang={locale}>
      <header className="legal-header shell"><Link href={home}>Witness</Link></header>
      <main>
        <article className="legal-article shell">
          <p className="section-kicker">{c.kicker}</p>
          <h1>{c.title}</h1>

          {status === "done" && (
            <div className="legal-notice" role="status">
              <b>{c.doneTitle}</b> {c.doneBody}
            </div>
          )}
          {status === "failed" && (
            <div className="legal-notice" role="alert">
              <b>{c.failedTitle}</b> {c.failedBody}
            </div>
          )}

          {status !== "done" && (
            <>
              <p>{c.lede}</p>
              <form className="start-cancel-form" method="post" action={cancelSubmitPaths[locale]}>
                <label htmlFor="cancel-email">{c.emailLabel}</label>
                <input id="cancel-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
                <small>{c.emailHint}</small>
                <button className="button button-primary button-large" type="submit">{c.button}</button>
              </form>
            </>
          )}

          <p>{c.manageLead} <a href="/manage">{c.manageLink}</a></p>
          <p>{c.privacy} <Link href={legal.privacy}>{c.privacyLink}</Link>.</p>
        </article>
      </main>
      <RouteFooter locale={locale} />
    </div>
  );
}
