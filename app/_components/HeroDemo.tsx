import type { CSSProperties } from "react";
import type { LandingCopy } from "../_data/landingCopy";

/**
 * The hero animation: somebody says a sentence, Witness writes it into a mail.
 *
 * It shows only what the app does. The raw words appear as spoken, the
 * conservative cleanup removes the interjections it knows ("ähm", "äh") and
 * capitalizes the word that becomes the start of a sentence, the clean text
 * lands at the cursor, and only after that does a marker say one spot is
 * worth a look. No rewording, no merged corrections: the app does neither
 * (`ConservativeCleanupService`, `TextEdit.Kind` has four kinds), so the
 * picture of it does not either. Which spot gets marked is an example, not
 * a rule; what Witness marks stays unexplained on purpose.
 *
 * Pure CSS on a 15 s loop; `TryableDemo` restarts it on click by remounting.
 */
export function HeroDemo({ d }: { d: LandingCopy["demo"] }) {
  const clean = d.spoken.filter((token) => !token.filler);
  const words = clean.map((token) => token.cap ?? token.text);
  const riskAt = clean.findIndex((token) => token.risk);
  const risk = riskAt < 0 ? undefined : clean[riskAt];
  return (
    <figure className="product-stage hero-demo">
      <div className="stage-grid" aria-hidden="true" />
      <div className="mac-window mail-window" aria-hidden="true">
        <div className="window-bar">
          <div className="traffic-lights" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="window-title">{d.windowTitle}</span>
          <span className="window-action">{d.send}</span>
        </div>
        <div className="mail-meta">
          <div><span>{d.to}</span>{d.toValue}</div>
          <div><span>{d.subject}</span>{d.heroSubject}</div>
        </div>
        <div className="mail-body">
          <p>{d.greeting}</p>
          <p className="hd-clean">
            {riskAt < 0 ? words.join(" ") : (
              <>
                {`${words.slice(0, riskAt).join(" ")} `}
                <span className="hd-risk">{words[riskAt]}</span>
                {` ${words.slice(riskAt + 1).join(" ")}`}
              </>
            )}
            <span className="text-caret" aria-hidden="true" />
          </p>
        </div>
      </div>

      <div className="hd-chip" aria-hidden="true"><b>▲</b>{d.chip}</div>

      <div className="hd-card" aria-hidden="true">
        <svg className="hd-face" viewBox="40 40 90 130" aria-hidden="true">
          <defs>
            <linearGradient id="hd-lip-upper" x1="78" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#ff6f52" stopOpacity="0" />
              <stop offset=".45" stopColor="#ff7a5e" stopOpacity=".75" />
              <stop offset="1" stopColor="#ff9a80" />
            </linearGradient>
            <linearGradient id="hd-lip-lower" x1="78" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#d9563d" stopOpacity="0" />
              <stop offset=".45" stopColor="#e65f45" stopOpacity=".8" />
              <stop offset="1" stopColor="#ff8366" />
            </linearGradient>
          </defs>
          <ellipse className="hd-gap" cx="90" cy="116.8" rx="9" ry="1.8" />
          <path d="M86 103 C88 103 92 104 96 106 C100 108 101 111 99 113 C95 115.5 88 116 79 116.2 C81 111 83 106.5 86 103 Z" fill="url(#hd-lip-upper)" />
          <path className="hd-line" d="M46 2 C54 24 72 50 92 68 C100 75 104 82 101 88 C98 93 91 94 85 93 C83 97 84 100 86 103 C88 103 92 104 96 106 C100 108 101 111 99 113 C97 114.6 94 115.6 90.5 116" />
          <g className="hd-jaw">
            <path d="M79 117.6 C88 117.6 95 118 98 121 C101 125 99 130 93 132 C89 133.5 85 133 83 132 C81 127.5 79.5 122 79 117.6 Z" fill="url(#hd-lip-lower)" />
            <path className="hd-line" d="M90.5 117.7 C94 118 96.6 119 98 121 C101 125 99 130 93 132 C89 133.5 85 133 83 132 C82 136 84 139 87 143 C92 151 90 163 76 168 C64 172 54 175 49 186 C47 191 46 196 46 200" />
          </g>
          <g className="hd-waves">
            <path d="M112 106 Q119 117 112 128" />
            <path d="M112 106 Q119 117 112 128" />
            <path d="M112 106 Q119 117 112 128" />
          </g>
        </svg>
        <div className="hd-speech">
          <div className="recording-state"><span className="recording-dot" />{d.listening}</div>
          <p className="hd-spoken">
            {d.spoken.map((token, index) => (
              <span
                className={token.filler ? "hd-word hd-filler" : "hd-word"}
                style={{ "--i": index } as CSSProperties}
                key={index}
              >
                {token.filler ? <span className="hd-filler-text">{token.text}</span> : token.cap ? (
                  <>
                    <span className="hd-cap"><span className="hd-low">{token.text[0]}</span><span className="hd-up">{token.cap[0]}</span></span>
                    {token.text.slice(1)}
                  </>
                ) : token.text}
              </span>
            ))}
          </p>
        </div>
      </div>

      {risk && (
        <div className="risk-popover hd-pop" aria-hidden="true">
          <div className="risk-label"><span /> {d.riskLabel}</div>
          <strong>{(risk.cap ?? risk.text).replace(/[.,:;!?]+$/, "")}</strong>
          <span className="listen-control"><span aria-hidden="true">▶</span> {d.play}</span>
        </div>
      )}

      <figcaption className="stage-note">
        <span className="shortcut">⌥ Space</span>
        {d.stageNote}
      </figcaption>
    </figure>
  );
}
