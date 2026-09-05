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
    updated="5. September 2026"
    notice={<><b>Witness steht auf fremder Arbeit.</b> Diese Seite nennt sie beim Namen. Die Lizenzbedingungen der jeweiligen Komponente gehen für diese Komponente unseren <Link href="/agb">Vertrags- und Lizenzbedingungen</Link> vor.</>}
  >
    <h2>In der App</h2>
    <div className="legal-table">
      <table>
        <thead><tr><th>Komponente</th><th>Rechteinhaber</th><th>Lizenz</th></tr></thead>
        <tbody>
          <tr><td>WhisperKit 1.1.0<br /><a href="https://github.com/argmaxinc/WhisperKit" rel="noreferrer">github.com/argmaxinc/WhisperKit</a></td><td>argmax, inc. (2024)</td><td>MIT</td></tr>
          <tr><td>Swift Argument Parser 1.8.2<br /><a href="https://github.com/apple/swift-argument-parser" rel="noreferrer">github.com/apple/swift-argument-parser</a></td><td>Apple Inc. und die Swift-Projekt-Autoren</td><td>Apache-2.0</td></tr>
        </tbody>
      </table>
    </div>

    <h2>Die Spracherkennungsmodelle</h2>
    <p>Die Modelle sind nicht Teil des Downloads. Die App lädt sie beim ersten Einrichten aus dem öffentlichen Repository <code>argmaxinc/whisperkit-coreml</code> bei Hugging Face; das ist der einzige Netzwerkzugriff, der dafür nötig ist.</p>
    <div className="legal-table">
      <table>
        <thead><tr><th>Modell</th><th>Rechteinhaber</th><th>Lizenz</th></tr></thead>
        <tbody>
          <tr><td>whisperkit-coreml — Core-ML-Fassungen<br /><a href="https://huggingface.co/argmaxinc/whisperkit-coreml" rel="noreferrer">huggingface.co/argmaxinc/whisperkit-coreml</a></td><td>argmax, inc.</td><td>MIT</td></tr>
          <tr><td>Whisper — die zugrunde liegenden Modelle<br /><a href="https://github.com/openai/whisper" rel="noreferrer">github.com/openai/whisper</a></td><td>OpenAI (2022)</td><td>MIT</td></tr>
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
