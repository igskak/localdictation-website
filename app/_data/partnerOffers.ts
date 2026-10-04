/**
 * Discounts agreed with partners, keyed by the `ref` their link carries
 * (`witnessmac.com/ru?ref=tamara`).
 *
 * The discount itself lives in Stripe: a coupon taken off once, and a promotion
 * code on it that expires at `endsAt`. This file only tells the landing and
 * `/buy` what Stripe will accept, so the two have to be changed together. A
 * reader whose code Stripe refuses was promised it by this page.
 */
export type PartnerOffer = { partner: string; code: string; percentOff: number; endsAt: string };

export const partnerOffers: Record<string, PartnerOffer> = {
  // Stripe: promotion code TAMARA30, expires_at 1798757999.
  tamara: { partner: "tamara", code: "TAMARA30", percentOff: 30, endsAt: "2026-12-31T23:59:59+01:00" },
};

export type Plan = "lifetime" | "annual";

export const listPrices: Record<Plan, number> = { lifetime: 99, annual: 49 };

// The two Payment Links the app used to open directly, from StoreFront.swift in
// the app repo. The app now opens /buy, which ends on one of these.
const checkoutLinks: Record<Plan, string> = {
  lifetime: "https://buy.stripe.com/4gMeVd20c3xs58g8oads401",
  annual: "https://buy.stripe.com/cNidR97kw6JEeIQ33Qds402",
};

/**
 * The cookie that carries a partner's discount from the reader's first visit
 * to the checkout the app opens two weeks later. It holds the partner's name
 * and nothing else, and it expires with the offer.
 */
export const offerCookie = "witness_offer";

export function offerForRef(ref: string | null | undefined): PartnerOffer | null {
  const key = ref?.trim().toLowerCase();
  if (!key || !Object.hasOwn(partnerOffers, key)) return null;
  return partnerOffers[key];
}

export function offerHasEnded(offer: PartnerOffer, now: number): boolean {
  return now > Date.parse(offer.endsAt);
}

/** The partner named by a `Cookie:` header or `document.cookie`, if any. */
export function partnerFromCookies(cookies: string | null | undefined): string | null {
  for (const part of (cookies ?? "").split(";")) {
    const [name, ...value] = part.trim().split("=");
    if (name === offerCookie) return value.join("=") || null;
  }
  return null;
}

/** The `document.cookie` assignment that remembers an offer until it ends. */
export function offerCookieAssignment(offer: PartnerOffer, now: number): string | null {
  const seconds = Math.floor((Date.parse(offer.endsAt) - now) / 1000);
  if (seconds <= 0) return null;
  return `${offerCookie}=${offer.partner}; Max-Age=${seconds}; Path=/; SameSite=Lax; Secure`;
}

/** Stripe takes the percentage off in cents and rounds, and so does this. */
export function discountedPrice(plan: Plan, percentOff: number): number {
  return Math.round(listPrices[plan] * (100 - percentOff)) / 100;
}

export function checkoutLink(plan: Plan): string {
  return checkoutLinks[plan];
}

/** The Payment Link with the code already typed into Stripe's checkout. */
export function checkoutWithCode(plan: Plan, code: string): string {
  const url = new URL(checkoutLinks[plan]);
  url.searchParams.set("prefilled_promo_code", code);
  return url.toString();
}

/** Where `/buy` sends a buyer: the plain link, or the link with a live code. */
export function checkoutFor(plan: Plan, cookies: string | null | undefined, now: number): string {
  const offer = offerForRef(partnerFromCookies(cookies));
  if (!offer || offerHasEnded(offer, now)) return checkoutLink(plan);
  return checkoutWithCode(plan, offer.code);
}

export function parsePlan(value: string | null | undefined): Plan | null {
  return value === "lifetime" || value === "annual" ? value : null;
}
