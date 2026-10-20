import type { Metadata } from "next";
import { CancelPage } from "../_components/CancelPage";
import { startCopy } from "../_data/startCopy";

export const metadata: Metadata = {
  title: startCopy.de.cancel.meta.title,
  description: startCopy.de.cancel.meta.description,
  robots: { index: false, follow: false },
};

export default async function CancelDe({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams;
  return <CancelPage locale="de" status={status === "done" ? "done" : status === "failed" ? "failed" : "idle"} />;
}
