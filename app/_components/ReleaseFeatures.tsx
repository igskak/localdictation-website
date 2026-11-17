import { modelSize, releaseCopy, speechModels } from "../_data/releaseCopy";
import type { Locale } from "../_lib/locale";

export function ReleaseFeatures({ locale }: { locale: Locale }) {
  const c = releaseCopy[locale];
  return (
    <div className="release-features" id="neu" aria-labelledby="release-heading">
      <div className="release-intro">
        <p className="section-kicker">{c.eyebrow}</p>
        <h3 id="release-heading">{c.title}</h3>
        <p>{c.intro}</p>
      </div>
      <div className="release-grid">
        <div className="release-models">
          <div className="release-models-head">
            <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /><i /></span>
            <h4>{c.modelsTitle}</h4>
          </div>
          <dl className="release-model-list">
            {speechModels.map((model, index) => (
              <div key={model.name}>
                <dt>{model.name}<span>{c.modelDetails[index]}</span></dt>
                <dd>{modelSize(model.bytes, locale)}</dd>
              </div>
            ))}
          </dl>
          <p className="release-model-note">{c.modelsNote}</p>
          <p className="release-download-note">{c.downloadNote}</p>
        </div>
        <div className="release-notetaker">
          <div className="release-demo-label">Notetaker <span>{c.demo}</span></div>
          <h4>{c.notetakerTitle}</h4>
          <p>{c.notetakerBody}</p>
          <p className="release-demo-note">{c.demoNote}</p>
          <p className="release-meeting-privacy">{c.meetingPrivacy}</p>
          <div className="release-interface">
            <h4>{c.interfaceTitle}</h4>
            <p>{c.interfaceBody}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
