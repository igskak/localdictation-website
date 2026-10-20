import type { Metadata } from "next";
import { CancelPage } from "../../_components/CancelPage";
import { startCopy } from "../../_data/startCopy";

export const metadata: Metadata = {
  title: startCopy.en.cancel.meta.title,
  description: startCopy.en.cancel.meta.description,
  robots: { index: false, follow: false },
};

export default async function CancelEn({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams;
  return <CancelPage locale="en" status={status === "done" ? "done" : status === "failed" ? "failed" : "idle"} />;
}
