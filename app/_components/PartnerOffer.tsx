"use client";

import { Fragment, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { landingCopy } from "../_data/landingCopy";
import {
  checkoutWithCode,
  discountedPrice,
  listPrices,
  offerCookieAssignment,
  offerForRef,
  offerHasEnded,
  partnerFromCookies,
  type PartnerOffer as Offer,
  type Plan,
} from "../_data/partnerOffers";
import type { Locale } from "../_lib/locale";

const subscribeNever = () => () => {};
const readRef = () => new URLSearchParams(window.location.search).get("ref");
const readCookiePartner = () => partnerFromCookies(document.cookie);
const readIsMac = () => navigator.userAgent.includes("Macintosh");

/**
 * The partner offer this reader is entitled to, from the link they came in by
 * or from the cookie an earlier visit through that link left.
 *
 * Read in the browser rather than on the server, so the code is not in the
 * HTML a crawler or a coupon site fetches, and the page stays one document for
 * everybody else. Server rendering and the first client render both see no
 * offer, so hydration never disagrees.
 */
function usePartnerOffer(): { offer: Offer | null; fromLink: boolean } {
  const ref = useSyncExternalStore(subscribeNever, readRef, () => null);
  const remembered = useSyncExternalStore(subscribeNever, readCookiePartner, () => null);
  const linked = offerForRef(ref);
  const offer = linked ?? offerForRef(remembered);
  const ended = useSyncExternalStore(subscribeNever, () => (offer ? offerHasEnded(offer, Date.now()) : false), () => false);

  // The link is what carries the discount to the checkout the app opens after
  // the trial: /buy reads this cookie and prefills the code. It holds the
  // partner's name only and expires with the offer; /datenschutz section 8.
  useEffect(() => {
    if (!linked) return;
    const assignment = offerCookieAssignment(linked, Date.now());
    if (assignment) document.cookie = assignment;
  }, [linked]);

  return { offer: offer && !ended ? offer : null, fromLink: Boolean(linked) && !ended };
}

// The site writes prices as €4,08 in every language but English.
function amount(value: number, locale: Locale) {
  const fixed = value.toFixed(2).replace(/\.00$/, "");
  return locale === "en" ? fixed : fixed.replace(".", ",");
}

function fill(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}

/** `fill`, with the code itself set apart so it is the thing a reader keeps. */
function withCode(template: string, values: Record<string, string>, code: string): ReactNode {
  return fill(template, values).split(code).map((part, index) => (
    <Fragment key={index}>{index > 0 && <strong className="partner-code">{code}</strong>}{part}</Fragment>
  ));
}

function formatDate(iso: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Prague",
  }).format(new Date(iso));
}

function Was({ plan, percentOff, locale }: { plan: Plan; percentOff: number; locale: Locale }) {
  return <><s>€{amount(listPrices[plan], locale)}</s> <b>€{amount(discountedPrice(plan, percentOff), locale)}</b></>;
}

/** The block under the hero's download button. */
export function PartnerOffer({ locale }: { locale: Locale }) {
  const { offer } = usePartnerOffer();
  const ref = useSyncExternalStore(subscribeNever, readRef, () => null);
  const isMac = useSyncExternalStore(subscribeNever, readIsMac, () => false);
  const linkedButEnded = !offer && offerForRef(ref);

  const copy = landingCopy[locale];
  const c = copy.partnerOffer;

  // Somebody opening the partner's post after the end date is told so,
  // rather than shown a code Stripe will refuse.
  if (linkedButEnded) {
    const values = { code: linkedButEnded.code, date: formatDate(linkedButEnded.endsAt, locale) };
    return <aside className="partner-offer partner-offer-ended"><p>{fill(c.ended, values)}</p></aside>;
  }
  if (!offer) return null;

  const values = {
    code: offer.code,
    percent: String(offer.percentOff),
    date: formatDate(offer.endsAt, locale),
    annualFull: `€${amount(listPrices.annual, locale)}`,
  };

  return (
    <aside className="partner-offer" aria-label={fill(c.title, values)}>
      <p className="partner-offer-title">{withCode(c.title, values, offer.code)}</p>
      <p>{withCode(c.body, values, offer.code)}</p>
      {isMac && <p className="partner-offer-remembered">{c.remembered}</p>}
      <div className="partner-offer-buy">
        <span>{c.buyLead}</span>
        <a href={checkoutWithCode("lifetime", offer.code)} data-cta="partner-lifetime">
          {copy.pricing.lifetime.name}: <Was plan="lifetime" percentOff={offer.percentOff} locale={locale} />
        </a>
        <a href={checkoutWithCode("annual", offer.code)} data-cta="partner-annual">
          {copy.pricing.annual.name}: <Was plan="annual" percentOff={offer.percentOff} locale={locale} /> {fill(c.firstYear, values)}
        </a>
      </div>
    </aside>
  );
}

/**
 * A price card's figure: the list price, or, for a reader with a partner
 * discount, the list price struck through beside the one they will pay. The
 * monthly figure goes with the list price, so it goes when the price does.
 */
export function PartnerPrice({ plan, locale, vat, perMonth }: { plan: Plan; locale: Locale; vat: string; perMonth?: string }) {
  const { offer } = usePartnerOffer();
  if (!offer) {
    return (
      <>
        <div className="price"><sup>€</sup>{listPrices[plan]} <small>{vat}</small></div>
        {perMonth && <p className="price-per-month">{perMonth}</p>}
      </>
    );
  }

  const c = landingCopy[locale].partnerOffer;
  return (
    <>
      <div className="price price-discounted">
        <s className="price-was">€{listPrices[plan]}</s>
        <sup>€</sup>{amount(discountedPrice(plan, offer.percentOff), locale)} <small>{vat}</small>
      </div>
      <p className="price-code">
        {withCode(c.title, { code: offer.code, percent: String(offer.percentOff) }, offer.code)}
        {plan === "annual" && <>, {fill(c.firstYear, { annualFull: `€${amount(listPrices.annual, locale)}` })}</>}
      </p>
    </>
  );
}
