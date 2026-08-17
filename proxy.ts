import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const english = request.nextUrl.pathname.startsWith("/en") || (request.nextUrl.pathname === "/danke" && request.nextUrl.searchParams.get("lang") === "en");
  requestHeaders.set("x-page-locale", english ? "en" : "de");
  const response = NextResponse.next({ request: { headers: requestHeaders } });
  if (request.nextUrl.pathname !== "/download") response.headers.set("referrer-policy", "strict-origin-when-cross-origin");
  response.headers.set("x-content-type-options", "nosniff");
  if (request.nextUrl.pathname !== "/download") response.headers.set("x-frame-options", "DENY");
  response.headers.set("permissions-policy", "camera=(), geolocation=(), microphone=()");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|og.png).*)"],
};
