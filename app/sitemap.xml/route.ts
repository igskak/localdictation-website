import { comparisonSlugs } from "../_data/comparisons";

const paths = [
  "/",
  "/en",
  "/vergleich",
  ...comparisonSlugs.map((slug) => `/vergleich/${slug}`),
] as const;

function xml(request: Request) {
  const origin = new URL(request.url).origin;
  const urls = paths.map((path) => {
    const priority = path === "/" ? "1.0" : path === "/en" ? "0.9" : path === "/vergleich" ? "0.8" : "0.7";
    return `  <url><loc>${origin}${path === "/" ? "" : path}</loc><changefreq>weekly</changefreq><priority>${priority}</priority></url>`;
  }).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export async function GET(request: Request) {
  return new Response(xml(request), {
    headers: {
      "cache-control": "public, max-age=3600",
      "content-type": "application/xml; charset=utf-8",
    },
  });
}

export async function HEAD(request: Request) {
  return new Response(null, {
    headers: {
      "cache-control": "public, max-age=3600",
      "content-type": "application/xml; charset=utf-8",
      "content-length": String(new TextEncoder().encode(xml(request)).byteLength),
    },
  });
}
