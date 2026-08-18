import type { Metadata } from "next";
import { ThankYouForm } from "./ThankYouForm";
import { getDownloadTarget } from "../_lib/download";
import { safeLeadEndpoint } from "../_lib/urlPolicy";
import { RouteFooter } from "../_components/RouteFooter";
import { thanksCopy } from "../_data/thanksCopy";
import { localeHome, parseLocale } from "../_lib/locale";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const params = await searchParams;
  const { meta } = thanksCopy[parseLocale(params.lang)];
  return {
    title: meta.title,
    description: meta.description,
    robots: { index: false, follow: false },
  };
}

export default async function DankePage({ searchParams }: { searchParams: Promise<{ lang?: string; download?: string }> }) {
  const params = await searchParams;
  const locale = parseLocale(params.lang);
  const c = thanksCopy[locale];
  const downloadAvailable = Boolean(getDownloadTarget());
  const leadEndpoint = safeLeadEndpoint(process.env.LEAD_ENDPOINT);
  const downloadStarted = downloadAvailable && params.download === "auto";
  const previewMode = !downloadAvailable;
  const downloadPath = locale === "de" ? "/download" : `/download?lang=${locale}`;

  return (
    <div className="thanks-page" lang={locale}>
      <header className="thanks-header shell">
        <a href={localeHome(locale)} className="thanks-brand">LocalDictation</a>
        <span>{previewMode ? c.badge.preview : c.badge.download}</span>
      </header>
      <main>
        <section className="thanks-hero shell">
        <div className="download-confirmation">
          <span className="download-check" aria-hidden="true">↓</span>
          <p>{downloadStarted ? c.state.started : previewMode ? c.state.preview : c.state.ready}</p>
        </div>
        <h1>{c.title}</h1>
        <p>{downloadStarted ? c.body.started : previewMode ? c.body.preview : c.body.direct}</p>
        {downloadStarted && <iframe className="download-frame" src={downloadPath} title={c.iframeTitle} aria-hidden="true" tabIndex={-1} />}
        {downloadAvailable && <a className="inline-download" href={downloadPath}>{downloadStarted ? c.inlineDownload.again : c.inlineDownload.now} ↓</a>}
        </section>
        <section className="thanks-grid shell">
        <ThankYouForm locale={locale} leadEndpoint={leadEndpoint} />
        <aside className="key-card">
          <span>{c.key.label}</span>
          <strong>•••• — •••• — ••••</strong>
          <p>{c.key.note}</p>
        </aside>
        </section>
        <section className="install-section shell" id="installation">
        <div className="install-intro"><span>01—03</span><h2>{c.install.title}</h2></div>
        <div className="install-grid">
          {c.install.steps.map((step, index) => (
            <article key={step.title}><b>{`0${index + 1}`}</b><h3>{step.title}</h3><p>{step.body}</p></article>
          ))}
        </div>
        <div className="permission-window" role="img" aria-label={c.install.permissionAlt}>
          <div className="permission-sidebar"><i /><i /><i /><i /></div>
          <div className="permission-content"><small>{c.install.settingsGroup}</small><h3>{c.install.accessibility}</h3><div><span className="mini-app-icon">L</span><b>LocalDictation</b><i className="toggle-on" /></div></div>
        </div>
        <p className="help-line">{c.install.help} <a href="mailto:hallo@localdictation.app">{c.install.helpLink} ↗</a></p>
        </section>
      </main>
      <RouteFooter locale={locale} />
    </div>
  );
}
