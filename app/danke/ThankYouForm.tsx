"use client";

import { FormEvent, useState, useSyncExternalStore } from "react";
import { thanksCopy } from "../_data/thanksCopy";
import type { Locale } from "../_lib/locale";

const subscribeToHydration = () => () => {};

export function ThankYouForm({ locale, leadEndpoint }: { locale: Locale; leadEndpoint: string | null }) {
  const c = thanksCopy[locale].form;
  const languageOptions: [string, string][] = [["de_en", "DE + EN"], ["ru_uk", "RU + UK"], ["ru_en", "RU + EN"], ["uk_en", "UK + EN"], ["single", c.singleLanguage]];
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [formError, setFormError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "preview">("idle");
  const hydrated = useSyncExternalStore(subscribeToHydration, () => true, () => false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError(c.emailError);
      return;
    }

    const formData = new FormData(event.currentTarget);
    const role = String(formData.get("role") ?? "");
    const languages = String(formData.get("languages") ?? "");
    const usecase = String(formData.get("usecase") ?? "");
    const honeypot = String(formData.get("company_site") ?? "");

    if (!role || !languages) {
      setFormError(c.requiredError);
      return;
    }

    setError("");
    setFormError("");

    if (honeypot) {
      setStatus("success");
      return;
    }

    if (!leadEndpoint) {
      setStatus("preview");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(leadEndpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        credentials: "omit",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ email: email.trim(), role, languages, locale, ...(usecase ? { usecase } : {}) }),
      });
      const result = response.ok ? await response.json().catch(() => null) as { keyDelivery?: unknown } | null : null;
      if (!response.ok || result?.keyDelivery !== "queued") throw new Error(`Lead endpoint did not confirm key delivery (${response.status})`);
      setStatus("success");
    } catch {
      setStatus("idle");
      setFormError(c.sendError);
    }
  }

  if (status === "success" || status === "preview") {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span aria-hidden="true">✓</span>
        <div>
          <h2>{status === "success" ? c.successTitle : c.previewTitle}</h2>
          <p>{status === "success" ? c.successBody : c.previewBody}</p>
        </div>
      </div>
    );
  }

  return (
    <form className="lead-form" action={locale === "de" ? "/danke" : `/danke?lang=${locale}`} method="post" onSubmit={handleSubmit} noValidate aria-busy={status === "sending"}>
      <div className="form-field full-field">
        <label htmlFor="email">{c.emailLabel}</label>
        <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? "email-error" : "email-help"} placeholder={c.emailPlaceholder} />
        <small id="email-help">{c.emailHelp}</small>
        {error && <p className="field-error" id="email-error" role="alert">{error}</p>}
      </div>

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="company-site">Company website</label>
        <input id="company-site" name="company_site" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-field">
        <label htmlFor="role">{c.roleLabel}</label>
        <select id="role" name="role" required defaultValue="" aria-invalid={Boolean(formError)} aria-describedby={formError ? "form-error" : undefined}>
          <option value="" disabled>{c.choose}</option>
          {c.roles.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="languages">{c.languagesLabel}</label>
        <select id="languages" name="languages" required defaultValue="" aria-invalid={Boolean(formError)} aria-describedby={formError ? "form-error" : undefined}>
          <option value="" disabled>{c.choose}</option>
          {languageOptions.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
        </select>
      </div>

      <div className="form-field full-field">
        <label htmlFor="usecase">{c.usecaseLabel}</label>
        <select id="usecase" name="usecase" defaultValue="">
          <option value="">{c.optOut}</option>
          {c.usecases.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
        </select>
      </div>

      <div className="form-actions full-field">
        <button className="button button-primary" type="submit" disabled={!hydrated || status === "sending"}>{status === "sending" ? c.sending : c.submit}</button>
        <a href="#installation">{c.skip}</a>
      </div>
      <noscript><p className="form-privacy full-field">{c.noscript}</p></noscript>
      {formError && <p className="field-error full-field" id="form-error" role="alert">{formError}</p>}
      <p className="form-privacy full-field">{c.consent} <a href="/datenschutz" hrefLang="de">{c.privacyLink}</a></p>
    </form>
  );
}
