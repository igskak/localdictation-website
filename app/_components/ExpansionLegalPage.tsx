import { LegalShell } from "./LegalShell";
import { legalExpansionCopy, type ExpansionLegalLocale } from "../_data/legalExpansionCopy";
import type { LegalPage } from "../_lib/legal";

export function ExpansionLegalPage({ locale, page }: { locale: ExpansionLegalLocale; page: LegalPage }) {
  const copy = legalExpansionCopy[locale][page];
  return (
    <LegalShell
      locale={locale}
      page={page}
      eyebrow={copy.eyebrow}
      title={copy.title}
      updated={copy.updated}
      notice={<span dangerouslySetInnerHTML={{ __html: copy.noticeHtml }} />}
    >
      <div className="legal-document-body" dangerouslySetInnerHTML={{ __html: copy.bodyHtml }} />
    </LegalShell>
  );
}
