import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "../_components/LegalShell";

export const metadata: Metadata = { title: "Lizenzen Dritter · Witness", description: "Quelloffene Komponenten und Spracherkennungsmodelle, die Witness verwendet, mit Rechteinhaber und Lizenz.", robots: { index: false, follow: false } };

// MIT requires the copyright notice and the permission notice to travel with
// every distribution. Reproducing the permission text once and listing the
// holders above it is how one page discharges that for all of them.
export default function LizenzenPage() {
  return <LegalShell
    page="licences"
    eyebrow="Rechtliches"
    title="Lizenzen Dritter"
    updated="17. November 2026"
    notice={<><b>Witness steht auf fremder Arbeit.</b> Diese Seite nennt sie beim Namen. Die Lizenzbedingungen der jeweiligen Komponente gehen für diese Komponente unseren <Link href="/agb">Vertrags- und Lizenzbedingungen</Link> vor.</>}
  >
    <h2>In der App</h2>
    <div className="legal-table">
      <table>
        <thead><tr><th>Komponente</th><th>Rechteinhaber</th><th>Lizenz</th></tr></thead>
        <tbody>
          <tr><td>WhisperKit 1.1.0<br /><a href="https://github.com/argmaxinc/WhisperKit" rel="noreferrer">github.com/argmaxinc/WhisperKit</a></td><td>argmax, inc. (2024)</td><td>MIT</td></tr>
          <tr><td>Swift Argument Parser 1.8.2<br /><a href="https://github.com/apple/swift-argument-parser" rel="noreferrer">github.com/apple/swift-argument-parser</a></td><td>Apple Inc. und die Swift-Projekt-Autoren</td><td>Apache-2.0</td></tr>
          <tr><td>FluidAudio 0.17.7<br /><a href="https://github.com/FluidInference/FluidAudio" rel="noreferrer">github.com/FluidInference/FluidAudio</a></td><td>Fluid Inference and contributors</td><td>Apache-2.0</td></tr>
          <tr><td>Sparkle 2.10.0<br /><a href="https://github.com/sparkle-project/Sparkle" rel="noreferrer">github.com/sparkle-project/Sparkle</a></td><td>Andy Matuschak und Mitwirkende; weitere Hinweise liegen der App bei</td><td>MIT und beigefügte Hinweise</td></tr>
        </tbody>
      </table>
    </div>
    <p>Die vollständige Sparkle-Lizenz und die Hinweise für mitgelieferte Bestandteile liegen auch unter <code>Witness.app/Contents/Resources/Sparkle-LICENSE.txt</code>.</p>

    <h2>Die Spracherkennungsmodelle</h2>
    <p>Whisper- und Parakeet-Sprachmodelle werden bei der Einrichtung oder nach Auswahl in den Einstellungen von Hugging Face geladen. Das Nemotron-Sprechermodell für die Notetaker-Demo ist in der App enthalten. Vollständige Hinweise stehen in <code>SpeechModels-NOTICES.txt</code>, <code>FluidAudio-LICENSE.txt</code> und <code>Nemotron3-MODEL-LICENSE.txt</code> im Resources-Ordner der App.</p>
    <div className="legal-table">
      <table>
        <thead><tr><th>Modell</th><th>Rechteinhaber</th><th>Lizenz</th></tr></thead>
        <tbody>
          <tr><td>whisperkit-coreml — Core-ML-Fassungen<br /><a href="https://huggingface.co/argmaxinc/whisperkit-coreml" rel="noreferrer">huggingface.co/argmaxinc/whisperkit-coreml</a></td><td>argmax, inc.</td><td>MIT</td></tr>
          <tr><td>Whisper — die zugrunde liegenden Modelle<br /><a href="https://github.com/openai/whisper" rel="noreferrer">github.com/openai/whisper</a></td><td>OpenAI (2022)</td><td>MIT</td></tr>
          <tr><td>Parakeet TDT v3 and Parakeet Ultra — Core ML conversions by Fluid Inference, Ultra post-training by Moondream<br /><a href="https://huggingface.co/FluidInference/parakeet-ultra-coreml" rel="noreferrer">Parakeet Ultra</a> · <a href="https://huggingface.co/FluidInference/parakeet-tdt-0.6b-v3-coreml" rel="noreferrer">Parakeet v3</a></td><td>NVIDIA, Moondream and Fluid Inference</td><td><a href="https://creativecommons.org/licenses/by/4.0/" rel="noreferrer">CC BY 4.0</a>; unmodified published weights</td></tr>
          <tr><td>Nemotron 3 Diarization — Core ML conversion by Fluid Inference<br /><a href="https://huggingface.co/FluidInference/nemotron-3-diarization-coreml" rel="noreferrer">Model source</a></td><td>NVIDIA and Fluid Inference</td><td><a href="https://openmdw.ai/license/1-1/" rel="noreferrer">OpenMDW 1.1</a>; bundled licence and notices</td></tr>
        </tbody>
      </table>
    </div>

    <h2>Auf dieser Website</h2>
    <p>Die Website nutzt Next.js und React (MIT) sowie Tailwind CSS (MIT). Sie lädt zur Laufzeit nichts von fremden Servern nach — keine Schriften, keine Skripte, keine Bilder. Was der Browser holt, kommt von witnessmac.com.</p>

    <h2>Der MIT-Lizenztext</h2>
    <p>Für alle oben mit „MIT“ bezeichneten Bestandteile gilt, jeweils mit dem daneben genannten Urheberrechtsvermerk:</p>
    <div className="legal-form">
      <p><em>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the „Software“), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</em></p>
      <p><em>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</em></p>
      <p><em>THE SOFTWARE IS PROVIDED „AS IS“, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</em></p>
    </div>

    <h2>Die Apache-2.0-Lizenz</h2>
    <p>Der vollständige Text steht unter <a href="https://www.apache.org/licenses/LICENSE-2.0" rel="noreferrer">apache.org/licenses/LICENSE-2.0</a>. Die Komponente wird unverändert verwendet; Änderungen an ihr, die nach Abschnitt 4 der Lizenz kenntlich zu machen wären, gibt es nicht.</p>

    <h2>Meldungen</h2>
    <p>Fehlt hier eine Komponente oder ist ein Vermerk falsch, schreib an <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a>. Das wird korrigiert, nicht diskutiert.</p>
  </LegalShell>;
}
