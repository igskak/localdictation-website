"use client";

import { FormEvent, useState } from "react";

export function ThankYouForm({ locale }: { locale: "de" | "en" }) {
  const isDe = locale === "de";
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError(isDe ? "Bitte gib eine gültige E-Mail-Adresse ein." : "Enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span aria-hidden="true">✓</span>
        <div>
          <h2>{isDe ? "Die Oberfläche ist bereit" : "The flow is ready"}</h2>
          <p>{isDe ? "In dieser privaten Vorschau wird noch keine E-Mail versendet. Sobald Lizenz-Backend und Absender verbunden sind, steht hier „Schlüssel ist unterwegs“." : "This private preview does not send email yet. Once the licence backend and sender are connected, this state will confirm that your key is on its way."}</p>
        </div>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field full-field">
        <label htmlFor="email">{isDe ? "E-Mail für deinen Lizenzschlüssel" : "Email for your licence key"}</label>
        <input id="email" name="email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? "email-error" : "email-help"} placeholder="du@unternehmen.de" />
        <small id="email-help">{isDe ? "Kein Produktkonto. Der Schlüssel kommt per E-Mail." : "No product account. Your key arrives by email."}</small>
        {error && <p className="field-error" id="email-error" role="alert">{error}</p>}
      </div>

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="company-site">Company website</label>
        <input id="company-site" name="company_site" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-field">
        <label htmlFor="role">{isDe ? "Womit arbeitest du?" : "What kind of work do you do?"}</label>
        <select id="role" name="role" required defaultValue="">
          <option value="" disabled>{isDe ? "Bitte auswählen" : "Choose one"}</option>
          {(isDe ? ["Entwicklung", "Recht", "Medizin / Praxis", "Beratung", "Marketing / Vertrieb", "Verwaltung", "Sonstiges"] : ["Software development", "Legal", "Medicine / Practice", "Consulting", "Marketing / Sales", "Administration", "Other"]).map((value) => <option key={value}>{value}</option>)}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="languages">{isDe ? "Welche Sprachen mischst du?" : "Which languages do you mix?"}</label>
        <select id="languages" name="languages" required defaultValue="">
          <option value="" disabled>{isDe ? "Bitte auswählen" : "Choose one"}</option>
          {["DE + EN", "RU + UK", "RU + EN", "UK + EN", isDe ? "nur eine Sprache" : "one language only"].map((value) => <option key={value}>{value}</option>)}
        </select>
      </div>

      <div className="form-field full-field">
        <label htmlFor="usecase">{isDe ? "Wo diktierst du am meisten? (optional)" : "Where do you dictate most? (optional)"}</label>
        <select id="usecase" name="usecase" defaultValue="">
          <option value="">{isDe ? "Nicht angeben" : "Prefer not to say"}</option>
          {(isDe ? ["E-Mail", "Tickets & Doku", "KI-Prompts", "Notizen", "Chats"] : ["Email", "Tickets & documentation", "AI prompts", "Notes", "Chats"]).map((value) => <option key={value}>{value}</option>)}
        </select>
      </div>

      <div className="form-actions full-field">
        <button className="button button-primary" type="submit">{isDe ? "Schlüssel anfordern" : "Request licence key"}</button>
        <a href="#installation">{isDe ? "Überspringen" : "Skip for now"}</a>
      </div>
      <p className="form-privacy full-field">{isDe ? "Mit dem Absenden stimmst du der Verarbeitung dieser Angaben für Aktivierung und Onboarding zu." : "By submitting, you agree that these details may be used for activation and onboarding."} <a href="/datenschutz">{isDe ? "Datenschutz" : "Privacy"}</a></p>
    </form>
  );
}
