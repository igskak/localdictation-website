import { NextResponse } from "next/server";
import { customerPortal } from "../_data/partnerOffers";

export const dynamic = "force-dynamic";

/**
 * "Manage subscription" in the app: `witnessmac.com/manage`.
 *
 * Our own address, so Stripe's customer portal can be replaced without a build
 * going out; builds already installed keep working. It sends the reader to the
 * portal's login page, where they cancel, change the card or download invoices
 * after confirming the address they paid with. Until the portal is switched on
 * it sends them to the cancellation form, which does the one thing most of
 * them came for.
 */
export function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const response = NextResponse.redirect(customerPortal() ?? new URL("/kuendigen", requestUrl.origin), 307);
  response.headers.set("cache-control", "private, no-store");
  response.headers.set("referrer-policy", "no-referrer");
  response.headers.set("x-content-type-options", "nosniff");
  response.headers.set("x-robots-tag", "noindex, nofollow, noarchive");
  return response;
}

export const HEAD = GET;
