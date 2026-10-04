/**
 * Discounts agreed with partners, keyed by the `ref` their link carries
 * (`witnessmac.com/ru?ref=tamara`).
 *
 * The discount itself lives in Stripe: a coupon taken off once, and a promotion
 * code on it that expires at `endsAt`. This file only tells the landing what
 * Stripe will accept, so the two have to be changed together. A reader whose
 * code Stripe refuses was promised it by this page.
 */
export type PartnerOffer = { code: string; percentOff: number; endsAt: string };

export const partnerOffers: Record<string, PartnerOffer> = {
  // Stripe: promotion code TAMARA30, expires_at 1798757999.
  tamara: { code: "TAMARA30", percentOff: 30, endsAt: "2026-12-31T23:59:59+01:00" },
};

export type Plan = "lifetime" | "annual";

export const listPrices: Record<Plan, number> = { lifetime: 99, annual: 49 };

// The two Payment Links the app opens, from StoreFront.swift in the app repo.
const checkoutLinks: Record<Plan, string> = {
  lifetime: "https://buy.stripe.com/4gMeVd20c3xs58g8oads401",
  annual: "https://buy.stripe.com/cNidR97kw6JEeIQ33Qds402",
};

export function offerForRef(ref: string | null | undefined): PartnerOffer | null {
  const key = ref?.trim().toLowerCase();
  if (!key || !Object.hasOwn(partnerOffers, key)) return null;
  return partnerOffers[key];
}

export function offerHasEnded(offer: PartnerOffer, now: number): boolean {
  return now > Date.parse(offer.endsAt);
}

/** Stripe takes the percentage off in cents and rounds, and so does this. */
export function discountedPrice(plan: Plan, percentOff: number): number {
  return Math.round(listPrices[plan] * (100 - percentOff)) / 100;
}

/** The Payment Link with the code already typed into Stripe's checkout. */
export function checkoutWithCode(plan: Plan, code: string): string {
  const url = new URL(checkoutLinks[plan]);
  url.searchParams.set("prefilled_promo_code", code);
  return url.toString();
}
