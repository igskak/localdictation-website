import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const englishPath = request.nextUrl.pathname === "/en" || request.nextUrl.pathname.startsWith("/en/");
  const english = englishPath || (request.nextUrl.pathname === "/danke" && request.nextUrl.searchParams.get("lang") === "en");
  const isDownload = request.nextUrl.pathname === "/download";
  requestHeaders.set("x-page-locale", english ? "en" : "de");
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
