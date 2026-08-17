import "server-only";
import { safeHttpsUrl } from "./urlPolicy";

export function getDownloadTarget(): URL | null {
  return safeHttpsUrl(process.env.DOWNLOAD_URL);
}
