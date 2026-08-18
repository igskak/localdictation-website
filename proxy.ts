import { NextRequest, NextResponse } from "next/server";
import { locales, parseLocale } from "./app/_lib/locale";

export function proxy(request: NextRequest) {
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
