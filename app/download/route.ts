import { NextResponse } from "next/server";
import { getDownloadTarget } from "../_lib/download";
import { parseLocale } from "../_lib/locale";

export const dynamic = "force-dynamic";

function redirectHeaders(response: NextResponse) {
  response.headers.set("cache-control", "private, no-store");
  response.headers.set("referrer-policy", "no-referrer");
  response.headers.set("x-content-type-options", "nosniff");
  response.headers.set("x-robots-tag", "noindex, nofollow, noarchive");
  return response;
}

export function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const locale = parseLocale(requestUrl.searchParams.get("lang"));
  const target = getDownloadTarget();

  if (!target) {
    const fallback = new URL("/danke", requestUrl.origin);
    if (locale !== "de") fallback.searchParams.set("lang", locale);
    fallback.searchParams.set("download", "unavailable");
    return redirectHeaders(NextResponse.redirect(fallback, 307));
  }

  return redirectHeaders(NextResponse.redirect(target, 307));
}

export const HEAD = GET;
