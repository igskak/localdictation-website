import { handleCancellation } from "../../../_lib/cancelRoute";

export const dynamic = "force-dynamic";

export function POST(request: Request) {
  return handleCancellation(request, "en");
}
