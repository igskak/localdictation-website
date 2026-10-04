"use client";

import { useState, useSyncExternalStore } from "react";
import { landingCopy } from "../_data/landingCopy";
import { checkoutWithCode, discountedPrice, listPrices, offerForRef, offerHasEnded } from "../_data/partnerOffers";
import type { Locale } from "../_lib/locale";

const subscribeNever = () => () => {};
const readRef = () => new URLSearchParams(window.location.search).get("ref");

// The site writes prices as €4,08 in every language but English.
function euros(amount: number, locale: Locale) {
  const fixed = amount.toFixed(2).replace(/\.00$/, "");
  return `€${locale === "en" ? fixed : fixed.replace(".", ",")}`;
}

function fill(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}

/**
 * The discount a partner promised their audience, shown only to readers who
 * arrived through that partner's link.
 *
 * Read from the address in the browser rather than on the server, so the code
 * is not in the HTML a crawler or a coupon site fetches, and the page stays one
 * document for everybody else. Purchase still normally happens in the app
 * after the trial; the code is what has to survive the two weeks in between,
 * which is why it is the largest thing here.
 */
export function PartnerOffer({ locale }: { locale: Locale }) {
  const ref = useSyncExternalStore(subscribeNever, readRef, () => null);
  const offer = offerForRef(ref);
  const ended = useSyncExternalStore(subscribeNever, () => (offer ? offerHasEnded(offer, Date.now()) : false), () => false);
  const [copied, setCopied] = useState(false);
  if (!offer) return null;

  const c = landingCopy[locale].partnerOffer;
  const date = new Intl.DateTimeFormat(locale === "en" ? "en-GB" : locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Prague",
  }).format(new Date(offer.endsAt));
  const values = {
    code: offer.code,
    percent: String(offer.percentOff),
    date,
    lifetime: euros(discountedPrice("lifetime", offer.percentOff), locale),
    annual: euros(discountedPrice("annual", offer.percentOff), locale),
    annualFull: euros(listPrices.annual, locale),
  };

  if (ended) {
    return <aside className="partner-offer partner-offer-ended"><p>{fill(c.ended, values)}</p></aside>;
  }

  const copy = () => {
    navigator.clipboard?.writeText(offer.code).then(() => setCopied(true), () => {});
  };

  return (
    <aside className="partner-offer" aria-label={fill(c.title, values)}>
      <p className="partner-offer-title">{fill(c.title, values)}</p>
      <div className="partner-offer-code">
        <code>{offer.code}</code>
        <button type="button" onClick={copy} data-cta="partner-copy" aria-live="polite">{copied ? c.copied : c.copy}</button>
      </div>
      <p>{fill(c.body, values)}</p>
      <p className="partner-offer-buy">
        {c.buyLead}{" "}
        <a href={checkoutWithCode("lifetime", offer.code)} data-cta="partner-lifetime">{fill(c.lifetime, values)}</a>
        {" · "}
        <a href={checkoutWithCode("annual", offer.code)} data-cta="partner-annual">{fill(c.annual, values)}</a>
      </p>
    </aside>
  );
}
