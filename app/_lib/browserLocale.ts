/**
 * The home page an Accept-Language header asks for: the reader's highest-ranked
 * language among `homes`, the locales that have one, `fallback` when the header
 * names only languages without a home page, and null when there is no header.
 *
 * The proxy falls back to English for a French or Polish browser because the German
 * root is German for the ads and the legal pages, neither of which reaches
 * this function, and a reader who knows neither language reads English sooner.
 * Kept free of imports so the tests can load it without the bundler.
 */
export function preferredHomeLocale<L extends string>(header: string | null | undefined, homes: readonly L[], fallback: L): L | null {
  if (!header?.trim()) return null;
  const ranked = header
    .split(",")
    .map((part, index) => {
      const [tag = "", ...params] = part.trim().split(";");
      const q = params.map((param) => param.trim()).find((param) => param.startsWith("q="));
      const weight = q ? Number(q.slice(2)) : 1;
      return { language: tag.trim().toLowerCase().split("-", 1)[0], weight: Number.isFinite(weight) ? weight : 0, index };
    })
    .filter(({ language, weight }) => language && language !== "*" && weight > 0)
    .sort((a, b) => b.weight - a.weight || a.index - b.index);
  if (ranked.length === 0) return null;
  return (ranked.map(({ language }) => language).find((language) => homes.includes(language as L)) as L | undefined) ?? fallback;
}

/**
 * Crawlers and link previews, which must see the German root as it is:
 * Googlebot indexes the root as the German page of the hreflang set, and
 * AdsBot judges it as the landing page of German ads. No user agent counts too.
 */
export function isAutomatedClient(userAgent: string | null | undefined): boolean {
  if (!userAgent) return true;
  return /bot|crawl|spider|slurp|archiver|mediapartners|googleother|inspectiontool|lighthouse|headlesschrome|facebookexternalhit|embedly|preview|whatsapp/i.test(userAgent);
}
