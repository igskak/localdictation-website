import { NextResponse } from "next/server";
import { checkoutFor, introCheckoutLink, parsePlan } from "../_data/partnerOffers";

export const dynamic = "force-dynamic";

/**
 * The app's Buy buttons: `/buy?plan=lifetime` and `/buy?plan=annual`.
 *
 * One hop through this site so a discount a reader arrived with two weeks
 * earlier reaches Stripe's checkout without them retyping it: the partner
 * cookie set on the landing is read here and turned into the Payment Link's
 * `prefilled_promo_code`. Without the cookie this is the plain Payment Link,
 * exactly what the app used to open itself.
 */
function redirect(target: URL | string) {
  const response = NextResponse.redirect(target, 307);
  response.headers.set("cache-control", "private, no-store");
  response.headers.set("referrer-policy", "no-referrer");
  response.headers.set("x-content-type-options", "nosniff");
  response.headers.set("x-robots-tag", "noindex, nofollow, noarchive");
  return response;
}

export function GET(request: Request) {
  const requestUrl = new URL(request.url);

  // The introductory offer from `/start`. No promotion code and no partner
  // cookie: it is its own Payment Link with its own price, and a code typed
  // into it would discount the first year of somebody else's deal.
  if (requestUrl.searchParams.get("plan") === "intro") {
    return redirect(introCheckoutLink() ?? new URL("/start", requestUrl.origin));
  }

  const plan = parsePlan(requestUrl.searchParams.get("plan"));
  if (!plan) return redirect(new URL("/#preis", requestUrl.origin));
  return redirect(checkoutFor(plan, request.headers.get("cookie"), Date.now()));
}

export const HEAD = GET;
