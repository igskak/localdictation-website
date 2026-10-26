import type { Metadata } from "next";
import { CancelPage } from "../../_components/CancelPage";
import { startCopy } from "../../_data/startCopy";

export const metadata: Metadata = { ...startCopy.it.cancel.meta, robots: { index: false, follow: false } };

export default async function CancelIt({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams;
  return <CancelPage locale="it" status={status === "done" ? "done" : status === "failed" ? "failed" : "idle"} />;
}
