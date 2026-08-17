import "server-only";

export function getDownloadTarget(): URL | null {
  const configured = process.env.DOWNLOAD_URL?.trim();
  if (!configured) return null;

  try {
    const target = new URL(configured);
    if (target.protocol !== "https:" || target.username || target.password || target.hash) return null;
    return target;
  } catch {
    return null;
  }
}
