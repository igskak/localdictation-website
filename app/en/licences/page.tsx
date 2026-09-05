import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "../../_components/LegalShell";
import { legalPaths } from "../../_lib/legal";

export const metadata: Metadata = { title: "Third-party licences · Witness", description: "Open-source components and speech recognition models used by Witness, with rights holders and licences.", robots: { index: false, follow: false } };

// MIT requires the copyright notice and the permission notice to travel with
// every distribution. Reproducing the permission text once and listing the
// holders above it is how one page discharges that for all of them.
export default function LicencesPage() {
  return <LegalShell
    locale="en"
    page="licences"
    eyebrow="Legal"
    title="Third-party licences"
    updated="5 September 2026"
    notice={<><b>Witness stands on other people&apos;s work.</b> This page names it. For each component, its own licence terms take precedence over our <Link href={legalPaths.en.terms}>Terms and Licence</Link>.</>}
  >
    <h2>In the app</h2>
    <div className="legal-table">
      <table>
        <thead><tr><th>Component</th><th>Rights holder</th><th>Licence</th></tr></thead>
        <tbody>
          <tr><td>WhisperKit 1.1.0<br /><a href="https://github.com/argmaxinc/WhisperKit" rel="noreferrer">github.com/argmaxinc/WhisperKit</a></td><td>argmax, inc. (2024)</td><td>MIT</td></tr>
          <tr><td>Swift Argument Parser 1.8.2<br /><a href="https://github.com/apple/swift-argument-parser" rel="noreferrer">github.com/apple/swift-argument-parser</a></td><td>Apple Inc. and the Swift project authors</td><td>Apache-2.0</td></tr>
        </tbody>
      </table>
    </div>

    <h2>The speech recognition models</h2>
    <p>The models are not part of the download. The app fetches them during first setup from the public repository <code>argmaxinc/whisperkit-coreml</code> at Hugging Face; that is the only network access needed for it.</p>
    <div className="legal-table">
      <table>
        <thead><tr><th>Model</th><th>Rights holder</th><th>Licence</th></tr></thead>
        <tbody>
          <tr><td>whisperkit-coreml — the Core ML builds<br /><a href="https://huggingface.co/argmaxinc/whisperkit-coreml" rel="noreferrer">huggingface.co/argmaxinc/whisperkit-coreml</a></td><td>argmax, inc.</td><td>MIT</td></tr>
          <tr><td>Whisper — the underlying models<br /><a href="https://github.com/openai/whisper" rel="noreferrer">github.com/openai/whisper</a></td><td>OpenAI (2022)</td><td>MIT</td></tr>
        </tbody>
      </table>
    </div>

    <h2>On this website</h2>
    <p>The website uses Next.js and React (MIT) and Tailwind CSS (MIT). It loads nothing from third-party servers at runtime — no fonts, no scripts, no images. What the browser fetches comes from witnessmac.com.</p>

    <h2>The MIT licence text</h2>
    <p>For every component marked “MIT” above, with the copyright notice named beside it:</p>
    <div className="legal-form">
      <p><em>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</em></p>
      <p><em>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</em></p>
      <p><em>THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</em></p>
    </div>

    <h2>The Apache-2.0 licence</h2>
    <p>The full text is at <a href="https://www.apache.org/licenses/LICENSE-2.0" rel="noreferrer">apache.org/licenses/LICENSE-2.0</a>. The component is used unmodified; there are no changes to it that section 4 of the licence would require us to mark.</p>

    <h2>Reports</h2>
    <p>If a component is missing here or a notice is wrong, write to <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a>. It gets corrected, not discussed.</p>
  </LegalShell>;
}
