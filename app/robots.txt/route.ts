function content(request: Request) {
  const origin = new URL(request.url).origin;
  return `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`;
}

export async function GET(request: Request) {
  return new Response(content(request), {
    headers: {
      "cache-control": "public, max-age=3600",
      "content-type": "text/plain; charset=utf-8",
    },
  });
}

export async function HEAD(request: Request) {
  return new Response(null, {
    headers: {
      "cache-control": "public, max-age=3600",
      "content-type": "text/plain; charset=utf-8",
      "content-length": String(new TextEncoder().encode(content(request)).byteLength),
    },
  });
}
