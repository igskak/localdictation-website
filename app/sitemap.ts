import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://localdictation.app";
  return ["", "/en", "/impressum", "/datenschutz", "/widerruf"].map((path) => ({ url: `${base}${path}`, changeFrequency: path === "" || path === "/en" ? "weekly" : "monthly", priority: path === "" ? 1 : path === "/en" ? 0.9 : 0.4 }));
}
