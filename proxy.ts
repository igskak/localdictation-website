import { NextRequest, NextResponse } from "next/server";
import { locales, parseLocale } from "./app/_lib/locale";

/**
 * The host this request arrived on with its `www.` prefix removed, or null when
 * it did not carry one.
 *
 * Reads the request URL and the Host header only, never `x-forwarded-host`.
 * `requestOrigin` may trust that header, because a wrong canonical on a preview
 * host costs nothing; a redirect built from a header the caller writes is an
 * open redirect, and this is a redirect.
 */
function apexHost(request: NextRequest) {
  const host = (request.nextUrl.host || request.headers.get("host")?.split(",", 1)[0]?.trim() || "").toLowerCase();
  const apex = host.startsWith("www.") ? host.slice(4) : "";
  return apex.includes(".") ? apex : null;
}

export function proxy(request: NextRequest) {
  // Both witnessmac.com and www.witnessmac.com are bound to this worker
  // (tools/deploy-config.mjs), and every absolute URL the site emits -- the
  // canonical, the hreflang set, og:url, sitemap.xml, robots.txt -- is built
  // from the host that asked. Two hosts answering with content therefore
  // published two self-canonicalising copies of the site, each pointing its
  // hreflang at itself: on 23.09.2026 Google had the German home and /en
  // indexed under www and /uk under the apex, which splits the signals of a
  // domain two weeks old. www keeps its route here, because a host that stops
  // resolving cannot redirect anyone, and answers with this instead.
  const apex = apexHost(request);
  if (apex) {
    const target = new URL(request.nextUrl);
    target.host = apex;
    const redirect = NextResponse.redirect(target, 301);
    redirect.headers.set("strict-transport-security", "max-age=31536000");
    return redirect;
  }

  const requestHeaders = new Headers(request.headers);
  const { pathname, searchParams } = request.nextUrl;
  // German lives at the root, every other locale under its own prefix; /danke and /download carry ?lang=.
  const prefixed = locales.find((locale) => locale !== "de" && (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)));
  const queried = pathname === "/danke" || pathname === "/download" ? parseLocale(searchParams.get("lang")) : "de";
  const isDownload = pathname === "/download";
  requestHeaders.set("x-page-locale", prefixed ?? queried);
  const response = NextResponse.next({ request: { headers: requestHeaders } });
  if (!isDownload) response.headers.set("referrer-policy", "strict-origin-when-cross-origin");
  response.headers.set("x-content-type-options", "nosniff");
  if (!isDownload) {
    response.headers.set("x-frame-options", "DENY");
    response.headers.set("content-security-policy", "base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'");
  }
  response.headers.set("strict-transport-security", "max-age=31536000");
  response.headers.set("permissions-policy", "camera=(), geolocation=(), microphone=()");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|og.png).*)"],
};
