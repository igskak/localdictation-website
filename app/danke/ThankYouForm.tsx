"use client";

import { FormEvent, useState, useSyncExternalStore } from "react";

const subscribeToHydration = () => () => {};

export function ThankYouForm({ locale, leadEndpoint }: { locale: "de" | "en"; leadEndpoint: string | null }) {
  const isDe = locale === "de";
  const roleOptions = isDe
    ? [["development", "Entwicklung"], ["legal", "Recht"], ["medicine", "Medizin / Praxis"], ["consulting", "Beratung"], ["marketing_sales", "Marketing / Vertrieb"], ["administration", "Verwaltung"], ["other", "Sonstiges"]]
    : [["development", "Software development"], ["legal", "Legal"], ["medicine", "Medicine / Practice"], ["consulting", "Consulting"], ["marketing_sales", "Marketing / Sales"], ["administration", "Administration"], ["other", "Other"]];
  const languageOptions = [["de_en", "DE + EN"], ["ru_uk", "RU + UK"], ["ru_en", "RU + EN"], ["uk_en", "UK + EN"], ["single", isDe ? "nur eine Sprache" : "one language only"]];
  const usecaseOptions = isDe
    ? [["email", "E-Mail"], ["tickets_docs", "Tickets & Doku"], ["ai_prompts", "KI-Prompts"], ["notes", "Notizen"], ["chats", "Chats"]]
    : [["email", "Email"], ["tickets_docs", "Tickets & documentation"], ["ai_prompts", "AI prompts"], ["notes", "Notes"], ["chats", "Chats"]];
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [formError, setFormError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "preview">("idle");
  const hydrated = useSyncExternalStore(subscribeToHydration, () => true, () => false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError(isDe ? "Bitte gib eine gültige E-Mail-Adresse ein." : "Enter a valid email address.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const role = String(formData.get("role") ?? "");
    const languages = String(formData.get("languages") ?? "");
    const usecase = String(formData.get("usecase") ?? "");
    const honeypot = String(formData.get("company_site") ?? "");

    if (!role || !languages) {
      setFormError(isDe ? "Bitte beantworte die beiden Pflichtfragen." : "Please answer both required questions.");
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
        body: JSON.stringify({ email: email.trim(), role, languages, ...(usecase ? { usecase } : {}) }),
      });
      const result = response.ok ? await response.json().catch(() => null) as { keyDelivery?: unknown } | null : null;
      if (!response.ok || result?.keyDelivery !== "queued") throw new Error(`Lead endpoint did not confirm key delivery (${response.status})`);
      setStatus("success");
    } catch {
      setStatus("idle");
      setFormError(isDe ? "Das hat noch nicht geklappt. Bitte versuche es erneut oder überspringe die Form." : "That did not work yet. Try again or skip the form for now.");
    }
  }

  if (status === "success" || status === "preview") {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span aria-hidden="true">✓</span>
        <div>
          <h2>{status === "success" ? (isDe ? "Schlüssel ist unterwegs" : "Your key is on its way") : (isDe ? "Die Oberfläche ist bereit" : "The flow is ready")}</h2>
          <p>{status === "success" ? (isDe ? "Prüfe deinen Posteingang. Wenn nach einigen Minuten nichts angekommen ist, antworte einfach über den Kontaktlink unten." : "Check your inbox. If nothing arrives after a few minutes, use the contact link below.") : (isDe ? "In dieser privaten Vorschau wird noch keine E-Mail versendet. Sobald Lizenz-Backend und Absender verbunden sind, bestätigt dieser Schritt den Versand." : "This private preview does not send email yet. Once the licence backend and sender are connected, this step confirms delivery.")}</p>
        </div>
      </div>
    );
  }

  return (
    <form className="lead-form" action={isDe ? "/danke" : "/danke?lang=en"} method="post" onSubmit={handleSubmit} noValidate aria-busy={status === "sending"}>
      <div className="form-field full-field">
        <label htmlFor="email">{isDe ? "E-Mail für deinen Lizenzschlüssel" : "Email for your licence key"}</label>
        <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? "email-error" : "email-help"} placeholder="du@unternehmen.de" />
        <small id="email-help">{isDe ? "Kein Produktkonto. Der Schlüssel kommt per E-Mail." : "No product account. Your key arrives by email."}</small>
        {error && <p className="field-error" id="email-error" role="alert">{error}</p>}
      </div>

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="company-site">Company website</label>
        <input id="company-site" name="company_site" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-field">
        <label htmlFor="role">{isDe ? "Womit arbeitest du?" : "What kind of work do you do?"}</label>
        <select id="role" name="role" required defaultValue="" aria-invalid={Boolean(formError)} aria-describedby={formError ? "form-error" : undefined}>
          <option value="" disabled>{isDe ? "Bitte auswählen" : "Choose one"}</option>
          {roleOptions.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="languages">{isDe ? "Welche Sprachen mischst du?" : "Which languages do you mix?"}</label>
        <select id="languages" name="languages" required defaultValue="" aria-invalid={Boolean(formError)} aria-describedby={formError ? "form-error" : undefined}>
          <option value="" disabled>{isDe ? "Bitte auswählen" : "Choose one"}</option>
          {languageOptions.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
        </select>
      </div>

      <div className="form-field full-field">
        <label htmlFor="usecase">{isDe ? "Wo diktierst du am meisten? (optional)" : "Where do you dictate most? (optional)"}</label>
        <select id="usecase" name="usecase" defaultValue="">
          <option value="">{isDe ? "Nicht angeben" : "Prefer not to say"}</option>
          {usecaseOptions.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
        </select>
      </div>

      <div className="form-actions full-field">
        <button className="button button-primary" type="submit" disabled={!hydrated || status === "sending"}>{status === "sending" ? (isDe ? "Wird gesendet …" : "Sending …") : (isDe ? "Schlüssel anfordern" : "Request licence key")}</button>
        <a href="#installation">{isDe ? "Überspringen" : "Skip for now"}</a>
      </div>
      <noscript><p className="form-privacy full-field">{isDe ? "Die freiwillige Formularvorschau benötigt JavaScript. Der Download und die Installationsanleitung funktionieren ohne Formular weiter." : "The optional form preview needs JavaScript. The download and installation guide continue to work without the form."}</p></noscript>
      {formError && <p className="field-error full-field" id="form-error" role="alert">{formError}</p>}
      <p className="form-privacy full-field">{isDe ? "Mit dem Absenden stimmst du der Verarbeitung dieser Angaben für Aktivierung und Onboarding zu." : "By submitting, you agree that these details may be used for activation and onboarding."} <a href="/datenschutz" hrefLang="de">{isDe ? "Datenschutz" : "Privacy (DE)"}</a></p>
    </form>
  );
}
