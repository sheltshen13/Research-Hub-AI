# RESEARCH HUB AI
## Complete Product, Learning, Technical, Governance and Development Blueprint

**Edition:** 2.0 (open-source implementation blueprint) | **Date:** 10 October 2026 | **Status:** Project design specification; software not yet implemented  
**Purpose:** A genuinely open-source, community-developed, adaptive research learning academy and workspace for beginners through professional researchers. The official app is free to use and designed for zero-cash development and operation.  
**Platform:** Responsive web application / installable PWA. **Development device:** Android phone using Termux, Acode and GitHub. **This document defines planned functions; it does not claim that the application is already built. The selected licence is Apache License 2.0 for original code, subject to confirming contributor rights and publishing the full licence. Existing material must not be relicensed without authority.**

> **Core promise:** Learn research by doing real research. Research Hub AI connects lessons, references, projects, analysis, writing and research integrity in one user-controlled workspace. Every essential activity remains useful without generative AI.

---


# 0. Design audit, corrections and accepted baseline

The design developed across versions 1.0-1.2 is feasible as a **progressive, browser-based learning and research workspace**, not as an instant replacement for every university research system. This edition unifies all accepted decisions, removes withdrawn noncommercial restrictions, and adds implementation-level specifications before coding.

**Decisions retained following technical review:**

1. **No misleading AI promise.** The default mentor is a curated lesson + transparent rules engine, *not* a generative chatbot. True free-form AI conversation is optional and may be unavailable on some phones. The interface must say which system answered.
2. **Protect research before adding features.** Manual encrypted-or-unencrypted ZIP backup, integrity-checked restore, recoverable draft revisions and a prominently visible "not backed up" state start in v0.1. No silent assurance of cloud sync or permanent browser storage.
3. **Separate sensitive data from public lookup.** Scholarly search sends queries to external providers and may reveal IP/query text; it never uploads local PDFs, interview transcripts or projects by default. No restricted or participant-identifiable research should be entrusted solely to browser storage.
4. **Verify evidence rather than merely format it.** DOI resolution, metadata provenance, publication-type checks and a clear "not verified" state belong in the library; a correctly formatted citation is not proof a paper exists or is peer reviewed.
5. **Make research calculations inspectable.** Outputs include source dataset fingerprint, data cleaning choices, assumptions, sample size, method, software version, effect estimates and uncertainty as applicable. Do not create unsupported test results.
6. **Prioritise a working beginner journey.** The first version teaches one complete subject, lets users create and restore a project and demonstrates all three mentor modes offline. Advanced labs, publishing and local AI follow independently tested milestones.
7. **Account for mobile constraints.** Keep initial downloads and memory small, import datasets with limits, test browsers without WebGPU and offer low-data mode and safe cancellation of long tasks.
8. **Treat offline operation honestly.** A first online install, downloads and successful caching are needed; external scholarly services, links and model downloads cannot work offline. App updates must not delete user data.
9. **Use portable, provider-independent foundations.** Static hosting and source code should move if free tiers change. Do not embed private API keys in public frontend code or incur usage charges.
10. **Make acceptance gates measurable.** Before launch, prove offline recovery, backup restore, research provenance, mathematical test fixtures, keyboard/screen-reader basics and correct Android back/scroll behaviour.

**v2.0 open-source correction:** The previously proposed noncommercial restriction is withdrawn. Publish original software under Apache License 2.0 (after ownership/dependency checks), original authored educational text under CC BY 4.0 where rights allow, and keep the **official** hosted version free by maintainer policy. Forks may legally sell services or altered copies under an open-source licence; they cannot obtain administrator privileges over the original repository by forking it. An official branding policy reduces confusion but does not guarantee global exclusive trademark protection.

**Boundaries:** No mandatory payments, paid APIs, advertising or paid tiers; no universal guarantee of unlimited global hosting, free cloud AI, cloud accounts or sensitive-data certification. The project remains free for users so long as it runs on available no-charge infrastructure; if a service would require payment, disable or replace that dependency rather than charge users.

---

# 1. Executive decisions

We have settled the following design decisions. This document takes their place as the single working blueprint unless explicitly revised.

| Topic | Final direction |
|---|---|
| Audience | First-time graduates, undergraduate, Master's, PhD, professional and independent researchers |
| Product philosophy | Integrated learn-and-do platform; no forced academic progression |
| Adaptive mentor | **Teach Me / Guide Me / Assist Me**; personalisation based on demonstrated learning |
| Free policy | No paid software, paid API dependency, mandatory subscription, mandatory donations, advertisements, or automatic paid upgrades |
| Operating model | Local-first/offline-first; public static website; optional online scholarly lookup |
| Storage | IndexedDB and downloaded backups, with clear storage-risk warnings |
| AI | Curated teaching + explainable decision rules are the baseline; optional local generative model only if device, browser and licence permit; never market rules as an AI model |
| Publishing and contribution | **Genuine open source**: original code under Apache License 2.0; project-owned original lessons under CC BY 4.0 when cleared; copyright and attribution notices; public pull requests, protected releases and third-party licence audit. Official hosted app remains free by policy, not by legal restriction on forks. |
| First release | Small, trustworthy, usable foundation rather than dozens of nonfunctional features |
| First device | Android phone; keyboard and wide-screen layouts must also work |

**Zero cash has boundaries.** The project assumes an existing phone and internet connection; power, connectivity and hardware still have real costs. Free hosting and academic APIs impose usage policies and may change. We must not promise unlimited global storage, unlimited hosted AI or guaranteed third-party access. The core functionality will not require a credit card or paid service.

# 2. Users and onboarding

User personas: (a) beginner graduate without research experience; (b) undergraduate completing a first project; (c) Master's student developing a thesis; (d) doctoral researcher managing advanced methodology; (e) professional conducting evidence-based studies; (f) educator or supervisor using example materials.

**First opening:** show a no-account and no-cloud-storage notice, select language (English initially), choose *Start Learning* or *Start a Project*, select a learning experience level (not a degree-based restriction), choose whether to begin a demo project, read a plain-language privacy message, and choose whether to create a first manual backup after meaningful work. Show a persistent backup freshness indicator. No account or email is required. No analytics or data collection by default.

Three persistent mentor modes are available anywhere:
- **Teach Me:** explanation, examples, mini-lesson, glossary, practice and formative checks.
- **Guide Me:** ordered workflow, milestones, checklists, explanations for methods and structured project review.
- **Assist Me:** direct utilities (organise data, format citations, visualise results, draft structural outlines) without claiming to have conducted work it did not perform.

A user can switch at any time. The application must remember the selection locally, preserve navigation and scroll position appropriately within each feature, and clearly distinguish the Practice Lab from real research work.

# 3. Navigation and information architecture

Six primary destinations: **Academy**, **My Research**, **Research Library**, **Mentor**, **Research Lab**, **Writing Studio**. Home shows Continue Learning, Continue Project, next recommended step, quick search, backup state and last modified time. Settings contains appearance, accessibility, storage/backup, AI capability check, language, privacy and data export.

A consistent project header includes project selector, stage indicator, autosave status, last changed timestamp, Help / Explain Why, and Export. Stage navigation must preserve drafts and return location. A public Help and Research Ethics section can be accessed without a project.

# 4. Research Learning Academy

**Five competency bands:** Foundation, Developing, Independent, Advanced and Professional. These are learning labels, *not degrees or accredited qualifications*. Learners may skip lessons or take a diagnostic quiz; competency-based recommendations must not lock advanced tools.

**Twelve subjects** (common core, with additional advanced and discipline-specific material over time):

| No. | Subject | Main practical output |
|---|---|---|
| 1 | Research fundamentals | Explain research types, purposes, quality and limitations |
| 2 | Topic and problem selection | Focused topic, context and feasibility notes |
| 3 | Research questions and objectives | Aligned questions, aims, objectives and optional hypotheses |
| 4 | Literature searching and reviewing | Search log, evidence table, critical literature synthesis |
| 5 | Research design and methodology | Justified design and methods plan |
| 6 | Ethics and responsible research | Consent, privacy and approval checklist |
| 7 | Sampling and data collection | Sampling plan and draft data collection instrument |
| 8 | Quantitative analysis | Tested descriptive and inferential analyses on suitable data |
| 9 | Qualitative analysis | Coding log, themes and reflexive notes |
| 10 | Academic writing and referencing | Evidence-linked structured academic writing |
| 11 | Quality, bias and reproducibility | Limitations, validation and reproducibility plan |
| 12 | Publication and communication | Presentation, dissemination and manuscript checklists |

**Each lesson has six steps:** Understand -> Observe -> Practise -> Apply to Project -> Assess -> Reflect. Short lessons use plain language, glossary terms, diagrams/examples (only when needed), accessible text and downloadable content. More advanced students receive deeper methodological discussion and competing interpretations rather than simplistic answers.

**Practice Lab:** synthetic datasets, openly licensed/example papers, worked tasks. Clearly mark all demonstration data; never silently transfer it to real findings. **Apply to My Research** opens a preview of suggested fields and saves only after confirmation, preserving an undoable version history.

**Assessment forms:** automatically marked factual questions, short reasoning exercises with transparent rubrics, evaluated practical outputs, reflective prompts and a research portfolio. Learners may retry with new examples, inspect rubric explanations, flag an incorrect answer and export their own attempts. Human or specialist review remains necessary for high-stakes judgments. Default illustrative practical rubric: conceptual understanding 25%, application 35%, evidence/reasoning 25%, reflection 15%; rubrics differ by task, and AI feedback is formative rather than official grading.

**Research Skills Passport:** records competencies with evidence (quiz attempts, task results and manually uploaded work), dates, the rubric used, and optional reassessment. Do not infer competency from attendance or clicks alone. Keep the achievement profile editable/exportable and avoid automated high-stakes suitability scores. Completion certificates are free and clearly marked as non-accredited. Show skill-level confidence rather than a misleading single 'intelligence' score.

# 5. Adaptive Research Mentor

The six adopted baseline requirements are immutable for first implementation:
1. Adapt teaching to experience and demonstrated understanding.
2. Provide **Teach Me / Guide Me / Assist Me** modes.
3. Offline-first lessons, projects, and essential utilities independent of AI.
4. Source-grounded outputs that distinguish evidence, inference and suggestion.
5. Private local storage and user-controlled backups by default.
6. Absolutely no mandatory payments, paid API dependencies or automatic paid upgrades.

**Honest capability labels:** call rule-based answers **Guided Research Mentor** or **Structured Guidance**; call actual on-device language-model responses **Local AI Mentor** only when the model is genuinely loaded. The application name may remain Research Hub AI, but no screen should imply AI has independently read or verified a paper it has not processed.

**Functions:** teach concepts; navigate research stages; explain the *why* behind decisions; improve question clarity; compare provided scholarly evidence; suggest defensible methods; tutor quantitative/qualitative reasoning; coach writing; warn about ethical risks; track progress; support communication and publication readiness.

**Intelligence architecture:**
- **Layer 1, curated knowledge:** original structured lessons, terminology, worked examples, sources, revision history.
- **Layer 2, rule-driven decisions:** research design questions, method-selection decision trees, criteria/rubrics, stage validation, progress recommendations. Transparent and testable.
- **Layer 3, deterministic research utilities:** cite processors, bibliographic import/export, calculations, charts, tables, reproducible analysis and searchable project records.
- **Layer 4, optional local AI:** a device-compatible, licensed model providing conversation, rephrasing and assisted analysis. Must never be the sole provider of an essential function.

**Capability check:** before enabling local AI, test browser/device compatibility, available memory and download willingness. Present approximate model size and download impact, offer Cancel, and fall back safely if memory or WebGPU is insufficient. Do not secretly route private documents to hosted inference. Models run locally only if model license permits our distribution and use. A model download is never bundled into the initial small PWA or started without consent; include an option to remove cached model files. Fine-grained offline 'AI is not ready' messaging avoids pretending intelligence exists.

**Mentor answer labels:** `From your source`, `Computed by analysis tool`, `App teaching material`, `Possible interpretation`, `Needs verification`. `From your source` must include a document/passage identifier; `Computed` must link to the calculation recipe. An unsupported model output is never labelled verified. Maintain evidence reference IDs, review dates and user edits. If a reference cannot be verified, do not invent details. Never claim a research gap is original based on a quick search. No invented participants, data, citations, ethics approval or supervisor feedback.

**Example response logic:** user asks 'What statistical test should I use?'. Mentor checks outcome variable type, groups, independence/paired design, distribution assumptions, sample structure, research question and missing information; presents suitable alternatives and demonstrates why one could be chosen. Actual results come from the verified analysis engine.

# 6. Eight connected research project stages

| Stage | Functions | Saved artifacts |
|---|---|---|
| 1. Topic and feasibility | Topic explorer, problem formulation, scope check | Topic statement, research problem, feasibility notes |
| 2. Literature review | Academic search, import metadata, PDF notes, evidence matrix, gap hypotheses | Sources, search log, matrix, review outline |
| 3. Proposal and methods | Research aims, questions, hypotheses, methodology selection, ethics workflow | Proposal, protocol, methods and ethics checklist |
| 4. Collection | Survey and interview templates, import CSV, consent reminders, data dictionary | Instruments, datasets, collection log |
| 5. Analysis | Clean data, summary statistics, charts, transparent methods, qualitative codes | Analysis recipe, results, figures, coding notes |
| 6. Interpretation | Results-to-question alignment, limitations, evidence check | Findings, discussion outline, limitations |
| 7. Writing | Section-based editor, in-text citations, citation list, tracked changes, exports | Drafts, references, exports |
| 8. Publication and archive | Submission and peer-review readiness, outputs checklist | Final project bundle, publication checklist |

**Research ethics gate:** research involving people, identifiable records, medical/clinical material or sensitive populations must show an institutional approval and safe-data-handling warning before real collection tools are used. An app checklist cannot grant approval or replace the institution's ethics process.

Stage progression is advisory; a researcher may revisit and revise any stage. A change to research questions should prompt a *review* of methods and findings, never silently rewrite them. Every revision should include a timestamp and operation summary.

# 7. Actual research tools, not shortcuts

**Research discovery:** Optional online OpenAlex and Crossref scholarly metadata queries; DOI lookup; filters by date/type/open-access; saved searches; clear 'metadata only' status when full text is unavailable; authors, year, title, venue, DOI, access link and source provenance. Third-party access is conditional, rate-limited and governed by each provider's terms. Never scrape paywalled content or promise access to paid journals. Search is discovery, not a complete systematic review; users must log databases searched, dates, strings, eligibility criteria and screening decisions for formal reviews.

**Research library:** local record collection; PDF upload/read when a file is available; highlights/notes (later), tags/collections, deduplication, search logs, comparison matrices and original-paper verification reminders. RIS/BibTeX/CSL-JSON import/export. Citation.js and CSL styles for APA/Harvard/Vancouver, with human validation encouraged. Mark every source as imported, identifier-resolved, metadata-checked or user-verified; these labels do **not** imply peer review. Show retractions/corrections only when a reliable source supplies that status, not by guessing. Zotero interoperability through standards first, rather than depending on authentication/API privileges.

**Collection toolkit:** questionnaire editor with standard input types, interview guide builder, observation logs, CSV import, sampling planning and data dictionary. Electronic consent, branching logic and participant-response security are future capabilities, not implied by a printable survey template. Public shareable survey links are *not* in the serverless MVP because multi-user responses need a secure collection backend; instead allow printable/exported questionnaires and local data entry.

**Quantitative lab:** CSV import preview; missing-value diagnostics; type detection with user confirmation; descriptive statistics, frequency tables, histogram/bar/box/scatter plots, t tests/chi-squared/correlation/regression only when implemented with tested packages and assumption checks; analysis recipe and versioned outputs. Pyodide becomes optional for more advanced Python scientific packages after performance validation. Never invent a p-value. If assumptions are not met or are unknown, show the limitation and teach alternatives; no automatic causal claim from observational data. All statistical outputs must include a saved reproducible recipe and test fixtures checked against a trusted package.

**Qualitative lab:** transcript/document importer; user-created codes, highlights, memos, codebook, theme drafts, comparisons, excerpt tracing and reflexivity prompts. Automated thematic conclusions are never treated as a substitute for interpretation. Local AI summarisation, if compatible, is explicitly optional. Preserve participant quotations with source references, handle anonymisation before demonstration or publication, and never treat frequency of codes alone as proof of importance.

**Writing studio:** section templates for proposal, dissertation, literature review, report and journal manuscript; autosave, headings, tables, inserted figures, reference linking, outline checks, word count and DOCX/HTML/Markdown/PDF export where tested. Citation metadata remains editable with linked provenance; do not create a '100% plagiarism-free' or 'journal acceptance guaranteed' tool.

**Publish and archive:** ORCID link as a user-entered identifier; journal due diligence checklist; open-access and repository guidance; licensing and consent reminders; final portable ZIP with project JSON, bibliography and permitted outputs. Do not auto-submit or claim journal affiliation.

# 8. Integrated learning experience

Every functional research page contains a discreet **Learn / Explain Why / Example** menu. Lessons show an **Apply to My Research** action when relevant. A learning task produces a portfolio record and, when authorised, a research project artifact. User-produced research is kept separate from examples by an explicit `sample_or_real` attribute. The mentor uses project title, questions, methods and relevant saved sources under user control.

**Onboarding example:** beginner chooses 'Education' as an interest. Academy teaches how to narrow a topic. User drafts a research question. The system checks its scope, population and feasibility with a transparent rubric. On acceptance, the question is offered for storage in the project. The same question later appears in the methods checker and results alignment view. No step requires generative AI.

# 9. Data architecture and privacy

**Separation of responsibilities:** learning history, project content and imported files are stored separately, and the learner can delete each class of data independently. Demo exercises are never mixed with real research.

**Local database entities:** `Profile`, `Preferences`, `LearningModule`, `Lesson`, `LessonAttempt`, `SkillEvidence`, `ResearchProject`, `ResearchQuestion`, `Milestone`, `SourceRecord`, `LibraryAttachment`, `LiteratureNote`, `SearchLog`, `ResearchInstrument`, `Dataset`, `DataDictionaryField`, `AnalysisRun`, `AnalysisResult`, `QualCode`, `QualExcerpt`, `DraftDocument`, `DraftRevision`, `EvidenceLink`, `EthicsChecklist`, `BackupManifest`, `AuditEvent`.

All user-generated records have stable IDs, project IDs when relevant, created/updated timestamps, schema version, provenance/source links and deletion status where appropriate. Data layers do not share private project content with external APIs without consent.

**Storage choices:** IndexedDB for structured records and small files, Cache Storage for PWA assets, and user-selected local exports for recoverable backups. Consider the Origin Private File System (OPFS) for larger local files only after browser compatibility tests, with a graceful fallback. IndexedDB data is **not inherently encrypted**, and browsers may clear it under some circumstances. Request persistent storage where supported but do not depend on it. The app must show backup age and a strong warning if the only copy is in the browser; support full-versioned ZIP export/import; verify checksums and schemas during restore; test restores with real projects. A completed download is not proof a backup is safe until tested with an import. Backups are manual by default; background write access to user file storage must never be assumed. Optional passphrase-encrypted backup can use Web Crypto, using a reviewed authenticated-encryption design (for example AES-GCM with a unique salt/nonce and a hardened password KDF), with clear warnings that a forgotten passphrase cannot be recovered. Do not write bespoke cryptography. Any unencrypted backups must display an explicit confidentiality warning. Never log participant names or confidential documents to analytics/error services. Browser storage, unencrypted exports and temporary files do not meet all institutional data-handling requirements.

**Security boundaries:** no passwords, tokens or private files in public repositories; protect spreadsheet exports against formula injection; escape and sanitise user-created content; strict file parsing and size checks; content sanitisation before rendering user-supplied HTML; CSP; dependency review; no arbitrary untrusted code execution; deliberate permission and consent screens. The first release is **not** a certified repository for highly sensitive or regulated human-subject data. Users must follow institutional ethics and storage obligations, potentially requiring approved institutional systems.

**Data flow disclosure:** external search requests expose some request metadata (such as IP address and search terms) to the selected provider. External links, publisher downloads and local model hosts have their own privacy conditions. Show a short provider notice and do not transmit private project context in search queries without explicit approval.

**Offline support:** first visit requires downloads; subsequent cached lessons/projects can work offline. Online paper search, DOI lookups and newly requested models require a connection. Use explicit online/offline badges rather than silently failing.

# 10. Zero-cost stack (chosen)

| Layer | Implementation choice | Reason |
|---|---|---|
| Build tools | Termux + Node.js + Git | Available on Android without paying |
| Editor | Acode or equivalent | Phone-friendly editing |
| UI | React + TypeScript + Vite | Standard open-source toolchain |
| Styling | CSS variables + lightweight components; optional Tailwind | Fast responsive PWA |
| Routing | React Router | Maintain clear stage/section navigation |
| Local database | IndexedDB with Dexie | Structured offline storage and migrations |
| Offline | Service worker + Workbox or vite-plugin-pwa | Cache lessons and app shell |
| Bibliography | Citation.js / CSL | Formats and open bibliographic imports |
| PDFs | PDF.js for locally held papers | Browser PDF viewing |
| Charts | Chart.js / Plotly | Client-side graphs |
| Data analysis | TypeScript utilities first; Pyodide later | Verified browser-native and Python tools |
| Local AI | Transformers.js (opt-in later) | Device-side inference where model size, memory and browser support permit |
| Tests | Vitest + Testing Library; Playwright where device allows | Confidence in complex workflows |
| Source control | GitHub Free public repository | Transparent code and change tracking |
| Hosting | Cloudflare Pages Free for public static site | No required dynamic server for MVP |
| Alternate preview | GitHub Pages for documentation/demos only | Simple project pages, subject to provider terms |

**Strict free-hosting operating rule:** activate only no-charge static Pages features; do not connect a payment method or turn on chargeable Functions, databases, storage or AI endpoints. If limits are hit, show a clear temporary limitation and move providers only after a new review. Free-hosting policies can change, so never describe any provider as guaranteed free forever.

**Reason for Cloudflare Pages:** its documented free static Pages offering fits a static PWA better than building our own backend. The free plan has build/deployment limits, and we must track any change in terms. GitHub Pages has restrictions for commercial/SaaS-style hosting and is not a general substitute for our future backend.

**OpenAlex:** offers keyless small-scale access and free account keys with higher budgets; never hardcode a personal key into a public frontend. The MVP should use permissible public/keyless calls where browser CORS and quota behavior are confirmed. Avoid suggesting all third-party endpoints are directly callable from every browser: test CORS and throttling against production deployments, not only Termux localhost. Provide 'open at provider' fallback links and graceful failure; do not build a shared service around a key copied into browser code. Crossref public REST lookup works without registration but requires fair-rate use. API credits are a third-party quota, not a guarantee of indefinite access.

# 11. Software organisation

Suggested source tree:

```text
research-hub-ai/
  public/              # PWA icons, static sample content, manifest
  src/
    app/               # shell, routes, feature availability, errors
    components/        # common buttons, headers, status, dialogs
    features/
      academy/          # content, lessons, quizzes, skills passport
      mentor/           # rule engine, prompts, grounded local AI
      projects/         # stages, artifacts, milestones
      library/          # source import, bibliographic records, PDF notes
      research-lab/     # datasets, plots, qualitative codes
      writing/          # editor, citations, exports
      settings/         # backups, appearance, privacy, capability check
    db/                # Dexie schema and migrations
    services/          # provider adapters and offline detection
    content/           # licensed courses, rubrics, glossary
    tests/             # unit and integration tests
  docs/                # architecture, licenses, help, privacy
  package.json
  vite.config.ts
  README.md
  LICENSE                  # approved licence, before public code release
  .github/
    CODEOWNERS             # protected code/release owners
    CONTRIBUTING.md        # how to submit safe changes
    SECURITY.md            # private vulnerability reporting
    pull_request_template.md
    workflows/             # least-privilege CI checks
  GOVERNANCE.md            # protect free access and project mission
  TRADEMARKS.md            # official branding and unendorsed forks
  NOTICE                   # original authors / provenance notices
  THIRD_PARTY_LICENSES.md  # external dependency obligations
  CHANGELOG.md
```

**Project development route:** develop and test through Termux localhost in the phone browser; commit small changes to GitHub; let Pages build/deploy the public static web app; test the installed PWA. Treat the public GitHub repository as **source code only**, never as storage for user projects or API secrets. The Termux-GitHub automation bridge may be adapted after verifying its permissions and logging; it is not a prerequisite for the first working version.

# 12. User experience and accessibility standards

Design for a 360 px Android viewport first; responsive tablet/desktop views follow. Large touch targets, readable line lengths, adjustable font size, light/dark themes, high contrast, keyboard support, screen reader semantics, text alternatives for media, visible focus, meaningful errors, loading indicators and reduced-motion support. Target WCAG 2.2 AA where reasonable and test with real screen readers and keyboards, not only automated scans. Include touch-friendly focus management and visible recovery steps. Use a consistent back-navigation contract: browser back returns to the previous meaningful screen; projects keep drafts; unrelated dashboard pages must not inherit each other's scroll position; module pages can restore their own prior scroll position intentionally. Test form persistence during rotation and app switching.

Use simple language initially but let the user choose 'explain in academic detail'. Future verified-language packs can expand internationally; avoid AI-only translation for research terminology without review.

# 13. Releases and priorities

**Release 0.1 - Verified foundation (first implementation; no generative AI promised)**
- Governance gate before repository publication: decide/properly publish the licence, creator attribution, contribution process and brand policy. Enable repository owner MFA and protected default branch before admitting outside contributors.
- Static PWA, mobile dashboard and routing; no signup needed.
- Local profile and research project create/edit/delete.
- First Academy subject: Research Fundamentals, 4-6 complete lessons with quizzes and examples.
- Basic mentor Teach/Guide/Assist interface running offline rules and curated explanations.
- Saved progress, clear autosave status, local backup export/import with manifest/checksums, strong first-backup warning, smoke tests.
- Gate: app works offline after first successful install/caching; a project and lesson history can be restored after browser data is cleared from a tested backup; no sample/real mix-up; back/rotation/scroll stable; no device-specific AI dependency.

**Release 0.2 - Learning to project**
- Research topic/question lessons, project question editor and skills passport.
- Apply-to-Project confirmation and version history; project stage navigator.
- Gate: new graduate completes topic/question journey and saves a useful project artifact without AI.

**Release 0.3 - Literature core**
- Basic search/link-outs, Crossref DOI metadata import, optional OpenAlex query, local library, RIS/BibTeX, APA citations, evidence matrix.
- Gate: library remains usable offline; citation record can be checked against its metadata source; throttled/failed APIs do not crash app.

**Release 0.4 - Research design and ethics**
- Proposal planner, design decision support, methods lesson, consent/privacy templates and reminders.
- Gate: method suggestions explain assumptions; ethics templates never masquerade as approval.

**Release 0.5 - Data laboratory**
- CSV import, data dictionary, descriptive stats and verified charts; qualitative manual coding/memos; dataset export.
- Gate: benchmark outputs match established known results; analysis parameters and dataset fingerprint recorded; synthetic datasets clearly labelled; warnings for invalid assumptions.

**Release 0.6 - Writing studio**
- Section editor, citations, word counts, revision history, DOCX and PDF export once verified.
- Gate: restored drafts retain links to references and visible changes.

**Release 0.7 - Optional local AI pilot (not required for public release)**
- Per-device compatibility check, opt-in model download, source-grounded assistance, no paid network API.
- Gate: failure gracefully falls back to offline rules and lessons; no private file leaves the device without permission.

**Release 1.0 - Public learning-and-research launch (conditional on gates)**
- Most foundational subject pathways complete; all eight project stages represented with usable functions or transparently limited workflows; tested backups and mobile UX; transparent privacy/licensing/help documentation; beta feedback addressed.
- Gate: no fake tools, no mandatory charge, clear feature support matrix, stable public free site within provider quotas.

**Deferred unless a zero-charge, safe and maintainable design is validated:** multi-device cloud sync, public survey collection, supervisor live collaboration, accounts, unlimited hosted AI, institutional-grade secure clinical data, built-in plagiarism-detection database, automatic journal submissions. The initial free public version does not promise these features. None is promised at no cost.

# 14. Quality gates and measurement

**Core pass conditions** (not optional):
- Official build is deployed only from a protected trusted branch; no unreviewed external pull request can trigger a privileged deployment or access secrets.
- New dependencies pass licence, security and privacy checks; required code-owner review and CI checks precede official merges where supported on the free plan.
- README, licence, notices, contributor guide, security reporting and brand policy clearly distinguish community contributions from official releases.
- Offline restart retains saved work after previously loading resources.
- Every save displays completion or an actionable error; no silent data loss.
- Backup export/import restores at least two projects, learning history, citations, one sample dataset and draft revisions with the correct schema; corrupt/older/newer-schema backups fail safely with no overwrite.
- Every academic citation has editable metadata and source/provenance status; not-founds are displayed honestly.
- Statistical tests are checked against known reference outputs and datasets, including missing-value and assumption-failure cases.
- No private user data is sent to external websites merely by opening a local project.
- Navigation, rotation, browser back and scroll restoration work consistently across modules.
- A novice can complete an end-to-end mini-project without enabling AI, identify the source of mentor feedback and request an explanation.
- Local AI unsupported devices remain fully capable of using essential core features.
- App works without entering payment information and without exposing secrets in its public repo.

**Operational performance budgets (initial targets, subject to on-device measurement):** first-use download should remain lightweight without AI weights; the core home screen should function on an ordinary Android handset without WebGPU; low-data mode disables large downloads; long PDF/CSV/model work is cancellable and does not freeze basic navigation. Publish measured size/performance numbers rather than invented promises.

**Learning measures:** can a beginner explain a concept after feedback, apply it to their own work, identify unsupported claims, and improve a research question? Prefer voluntary qualitative feedback to intrusive usage tracking.

# 15. Main risks and mitigations

| Risk | Response |
|---|---|
| Browser clears local storage or phone is lost | Prominent local export controls, verified restore, realistic warning that unsaved exports cannot be recovered; recommend independently retaining backups |
| AI too slow on Android | Optional local model only; deterministic mentor is fully usable |
| Hosted free tier changes | Static portable site, documented alternative deployment and exportable code |
| API quotas or CORS issues | Cache permitted metadata, throttle calls, use link-outs and graceful error states |
| Misleading academic conclusions | Evidence labels, human checks, clearly defined tool limits |
| Confidential participant data | Local-first default, explicit privacy guidance, institutional safeguards |
| Inaccurate lesson content | Versioned editorial review, source list, issue reporting and corrections log |
| API request leaks sensitive topic/context | Provider notices, user-edited search strings, no automatic uploading of local project text |
| Browser memory crashes on PDF/CSV/AI | Import limits, progressive parsing, worker threads where appropriate, cancel buttons and low-data mode |
| False "AI" expectation | Explicitly distinguish rule-based guidance from optional loaded local generative AI |
| Features become bloated | Release gates, progressive enhancement, no decorative nonfunctional tools |
| Contributor takeover or malicious code | Single accountable official owner initially, minimal permissions, protected branches, two-factor authentication, reviews, isolated build and dependency tests |
| Commercial fork or misleading branded copy | Commercial forks are **permitted** under Apache-2.0; distinguish the official release by verified repository/deployment links, authentic provenance, release signing where practical and truthful branding; report fraud when warranted |
| Dependency or content licence conflict | Maintain a software bill of materials and third-party notices; audit compatibility before incorporating code, articles, model weights, images or teaching content |
| Maintainer becomes unavailable | Document recovery, signed releases, independent source backups and a clear succession policy while keeping admin access limited |
| User expects degrees/certificates | Clearly state Academy certificates are non-accredited |
| Zero-dollar global hosting expectation | No server-dependent MVP, avoid hidden spending and stop before any charges |

# 16. Decisions reserved for future review (not launch blockers)

The project name remains **Research Hub AI** provisionally; check existing projects and branding before asserting rights. Initial language is English. The selected original-software licence is **Apache-2.0**; project-owned authored learning content is **CC BY 4.0** unless specifically marked otherwise, after confirming rights. Third-party content and models keep their own licences. No custom domain is required. Release starts with local profiles, not cloud accounts. Public launch follows security, data-recovery and novice-usability tests. Optional local AI depends on tested phone/browser capabilities.

# 17. Immediate next implementation task

**Implement Release 0.1 as the first coding task:** project repository; React + TypeScript + Vite app; responsive header and six working navigation destinations; IndexedDB persistence; local profile; research project creation; research fundamentals lessons; real offline mentor examples; quiz scoring; progress history; Export/Import backup; PWA manifest/service worker; tests for data preservation/navigation. Publish an initial free preview through static hosting only after on-device verification.

**Definition of done for first build:** a first-time learner on Android can launch the PWA, create a local project, complete one complete lesson, receive a deterministic mentor explanation, save and restore the project, close/reopen offline, and navigate reliably without paying or using a hosted AI API.

# 18. Governance and maintenance rules

- **Open-source community project:** use a public Apache-2.0 software repository containing no user projects, participant records or credentials. Accept improvements through reviewed pull requests and track bugs, learning-content changes, security advisories and third-party licence notices.
- **Content quality:** authorship, source citation, a review date and clear corrections are required for each lesson. Materials may be educational and useful without falsely claiming that a university has endorsed them.
- **Versioning:** semantic app versions and data-schema migrations; reversible edits where possible, explicit import/export compatibility testing and a changelog for every public release.
- **Safety and ethics:** no automatic participant recruitment, deceptive consent, unauthorised access to paywalled literature or guidance implying the app grants ethics approval.
- **Portability:** if a free provider changes policy, the app should be redeployable as static files and the user should retain a portable data export. Do not shift mandatory costs to learners.
- **Naming:** Research Hub AI is a provisional working name until branding/trademark availability is checked; no bought domain is required.

# 19. Open-source licensing, community governance and official-release security (v2.0)

## 19.1 Why this is a genuine open-source project

The software will be available for anyone to inspect, use, modify, redistribute, teach from and build upon under the **Apache License, Version 2.0**, assuming contributors and copyright holders can grant those rights. This includes **commercial uses and paid forks**. A genuine open-source licence does not permit a rule that bans some users or forbids charging. The project therefore has two separate promises: **(a)** the official Research Hub AI web app never demands payment for essential use; **(b)** independent people retain the freedoms granted by Apache-2.0. A fork cannot change the rules of the official website, but may run its own website.

## 19.2 Licensing model and assets

| Material | Proposed licence or rule | Important boundary |
|---|---|---|
| Original application source | **Apache-2.0** | Allows commercial use; preserves licence and required notices; patent provisions; not an anti-monetisation licence |
| Original Academy lessons, illustrations and examples | **CC BY 4.0**, where project holds rights | Allows reuse/adaptation including commercial use with attribution; not a substitute for a software licence |
| Third-party libraries | Their own compatible licences | Record licence, version, notices and obligations in dependency register |
| Third-party research papers, publisher PDFs | **Not relicensed by this project** | Respect copyright, licensing, access conditions, quotations and redistribution restrictions |
| Locally downloaded AI models and datasets | Each model/data source's actual licence | Verify suitability, redistribution rights, downloads and terms before shipping |
| User-created work | Remains under user and applicable third-party rights | App licence does not transfer ownership of researchers' projects |
| Official name, logo, release identity | Separate accurate branding and endorsement policy | Does not create automatic registered trademark rights or forbid lawful descriptive use |

An accurate `LICENSE` must include the complete Apache-2.0 text; `NOTICE` must retain required original and upstream attributions where applicable. Do not publish a misleading empty licence, assert copyright over user files or include unlicensed textbook chapters.

## 19.3 Who controls what

**Public contributors:** can read code, clone/fork, open issues and pull requests, improve translations and lessons, propose security fixes and create their own compliant derivatives. **Maintainers:** review submissions, decide the official roadmap, control official repository permissions and deploy the free public instance. **Researchers:** own and control their locally stored research files and choose what, if anything, is shared. **Independent fork operators:** control their own derivative service, may charge where licences permit, but cannot claim to be officially endorsed without permission.

Maintainer policy for the **official** instance prohibits mandatory fees, ads, paid research-tool unlocks, hidden telemetry and unsafe data collection. This is an operational commitment, not a contractual limitation on open-source recipients. If free hosting fails, communicate the limitation rather than secretly enabling billing.

## 19.4 Safeguards for the trusted repository

- Enable multifactor authentication for all owners; keep recovery methods outside the repository.
- Keep repository ownership/admin access restricted; external contributors submit pull requests rather than direct pushes.
- Protect `main`: require PR reviews, passing checks, and code-owner approval where supported on the free public-repository plan; prohibit force push/deletion and require review for `.github/`, lockfiles, migrations and deployment workflows.
- Install and actually enable `.github/CODEOWNERS`; the file alone is not enforcement.
- Run type checks, lint, unit/integration tests, dependency/licence audits and no-secret checks on untrusted pull requests with **read-only** tokens and without production credentials.
- Never expose deploy tokens, user files or secret values in PR-triggered jobs. Avoid `pull_request_target` workflows running untrusted fork code with secrets.
- Deploy only a tested commit on the protected release path; version releases and offer accessible release notes, checksum or signature when practicable.
- Supply `SECURITY.md` for private reporting and a reproducible rollback process.

## 19.5 Contribution and review policy

Contributors attest they have rights to submit their work under the project licences; no unnecessary copyright assignment. Contributors keep the rights they legally hold in original work. A pull request must describe behaviour, tests, privacy impact, screenshots for UI, source citations for academic content, and third-party assets. High-risk PRs (storage migration, backup restore, parser, service worker, security, licensing and AI provider) require designated maintainer review and regression testing. A reasoned rejection is not censorship of a fork: the contributor can still maintain their own derivative under the licence.

## 19.6 Preventing quality degradation in the official app

Reject changes that corrupt drafts, degrade accessibility, drop the offline baseline, introduce unconsented data sharing, bypass source verification, fabricate citations, distort statistical results, remove tests, disable backups or secretly monetise the official service. Evaluate changes by evidence, performance, maintainability and benefit—not contributor identity. Establish a contributor code of conduct and a transparent public issue/change log.

## 19.7 Branding, community forks and continuity

The official interface displays its exact URL, version, release source commit and link to the official public repository. Forks should disclose that they are unofficial and must not falsely imply endorsement. Verify name availability before claiming exclusive trademark rights. For resilience, keep source/lesson licences, reproducible build directions, release archives, offline maintainers' recovery notes and periodic independent backups; never archive end-user private files in the public repo.

## 19.8 Repository essentials before the first public release

`LICENSE`, `NOTICE`, `README.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `GOVERNANCE.md`, `SECURITY.md`, `PRIVACY.md`, `THIRD_PARTY_LICENSES.md`, `CONTENT_LICENSES.md`, `TRADEMARKS.md` (truthful terminology), `CHANGELOG.md`, `.github/CODEOWNERS`, PR/issue templates, test workflows and a public versioned roadmap.

**Boundary:** No licence, brand statement or GitHub setting can stop independent competing implementations, bad-quality copies or every act of infringement. GitHub permissions protect the official repo, not the freedom to fork. This section is project policy guidance, not legal advice.

---

# 20. Implementation references and verification notes

Provider policies were reviewed for this edition on 10 October 2026; services may change. Documentation proves present support, not perpetual free availability, model fitness or institutional suitability. These are implementation references, not automatic permissions to reproduce proprietary material:

1. Cloudflare Pages Free limits: https://developers.cloudflare.com/pages/platform/limits/
2. Cloudflare Pages Functions/Static pricing: https://developers.cloudflare.com/pages/functions/pricing/
3. GitHub Pages and usage limits: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
4. OpenAlex authentication and free API budget: https://help.openalex.org/api/authentication/
5. Crossref public REST access and rate limits: https://www.crossref.org/documentation/retrieve-metadata/rest-api/access-and-authentication/
6. Pyodide Python in-browser: https://pyodide.org/en/stable/
7. Transformers.js device-side inference: https://huggingface.co/docs/transformers.js/en/index
8. Citation.js citation formats: https://citation.js.org/
9. IndexedDB browser storage: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
10. Browser storage eviction: https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria
11. The Turing Way research practices and licensing: https://book.the-turing-way.org/ and https://github.com/the-turing-way/the-turing-way/blob/main/LICENSE.md
12. Hugging Face browser WebGPU notes: https://huggingface.co/docs/transformers.js/guides/webgpu
13. WCAG 2.2 recommendation: https://www.w3.org/TR/WCAG22/
14. Crossref public REST terms and usage etiquette: https://www.crossref.org/documentation/retrieve-metadata/rest-api/access-and-authentication/
15. Official Apache-2.0 text: https://www.apache.org/licenses/LICENSE-2.0
16. OSI Open Source Definition: https://opensource.org/osd
17. Official CC BY 4.0 education-content licence: https://creativecommons.org/licenses/by/4.0/
18. GitHub code owners: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners


---

# 21. Functional requirements catalogue and explicit priority

**Requirement IDs are stable.** Every code change and acceptance test should reference them. Priority `P0` means required before the first trusted release; `P1` is the next major stage; `P2` is later and is not promised in the first release. `Deferred` means do not implement until a no-charge, safe implementation is demonstrated.

| ID | Requirement | Priority | Testable acceptance criterion |
|---|---|---|---|
| FR-001 | Open without account | P0 | A new user can use lessons and create a local project without email or password |
| FR-002 | Research experience selection | P0 | Beginner to Professional can be changed in Settings without deleting progress |
| FR-003 | Lesson content engine | P0 | Lessons render offline after caching; glossary, example and objectives work |
| FR-004 | Three mentor modes | P0 | Teach, Guide and Assist produce clearly labelled rule/content-based help even without a model |
| FR-005 | Create/edit/archive projects | P0 | At least two projects survive app restart and tested backup restore |
| FR-006 | Honest save state | P0 | Pending, saved, error and backup status are distinct and accurately shown |
| FR-007 | Backup and restore | P0 | Portable backup verifies integrity and restores a clean browser with no silent overwrite |
| FR-008 | Real vs practice separation | P0 | Example assets cannot accidentally appear as genuine project evidence |
| FR-009 | Offline entry/restart | P0 | Previously downloaded core assets and saved projects remain usable in airplane mode |
| FR-010 | Accessibility and navigation | P0 | Basic screen reader/keyboard, Android back, rotation and independent scroll states work |
| FR-011 | Ethical warnings | P0 | User is warned before storing identifiable/high-risk human participant data |
| FR-012 | Research question builder | P1 | Saves draft question with rationale, version history and manual approval |
| FR-013 | Skills Passport | P1 | Skills are based on assessable evidence, not only lesson visits |
| FR-014 | Project stage navigator | P1 | Eight stages show status and explicit availability without fake 'working' controls |
| FR-015 | DOI validation/import | P1 | Metadata source, DOI resolution and date verified are stored or marked unverified |
| FR-016 | Scholarly search | P1 | Failure/429/offline/CORS is handled; link-out and local library continue functioning |
| FR-017 | Source and literature matrix | P1 | Save annotation, method, population, findings, limitations and supporting citations |
| FR-018 | Research method decision aid | P1 | It asks necessary questions, shows assumptions, alternatives and explanation |
| FR-019 | Research ethics planner | P1 | Generates a checklist, never falsely grants human ethics approval |
| FR-020 | CSV importer and dictionary | P1 | Validates size, types, missing values, malformed rows and formula-risk exports |
| FR-021 | Descriptive analysis | P1 | Verified numerical fixtures, assumptions and results provenance are displayed |
| FR-022 | Manual qualitative analysis | P1 | User can code excerpts, create memos/themes and trace every quotation |
| FR-023 | Writing and citation links | P1 | Editor maintains revisions and citation/source IDs; exports undergo compatibility checks |
| FR-024 | Local AI compatibility test | P2 | AI option is hidden/disabled when unsupported; fallback never fails |
| FR-025 | Optional grounded local document Q&A | P2 | Answers cite local excerpts and distinguish missing evidence from inference |
| FR-026 | Cross-device accounts and live collaboration | Deferred | Implement only with approved free sustainable security and privacy design |
| FR-027 | Hosted generative AI, large-scale survey backend | Deferred | No use of mandatory paid provider or undisclosed uploads |
| FR-028 | Public free official releases | P0 | No checkout, billing, ads or forced paid services in official workflow |
| FR-029 | Open-source contribution path | P0 | Apache-2.0 licence and governed public PRs exist before inviting contributors |
| FR-030 | Reliable export portability | P0 | Versioned schemas documented, imports can be validated and users can leave the platform |

**Nonfunctional goals:** clear failure messages, low-data mode, responsiveness on a low-end Android device, deterministic core lesson/assessment evaluation, no external analytics by default, and compatibility with reduced motion and assistive technology. Targets should be established via measurements on real devices, never fabricated upfront.

# 22. Screen-by-screen interaction specification

The six permanent navigation areas are **Academy, My Research, Library, Mentor, Lab and Writing**; the Home page is a launch surface. Mobile navigation uses a compact bottom bar or labelled menu only when screen width requires it. Settings and Help remain accessible without forcing a project. All dialogs must be dismissible, labelled and keyboard operable.

| Screen | Required visible controls | State/permission/validation |
|---|---|---|
| First Launch | Start Learning; Create Project; Demo; Privacy; Backup explanation | No hidden signup, analytics or default external AI upload |
| Home | Continue Lesson; Continue Project; Search Library; Mentor; Backup Status | Last viewed project and lesson restored intentionally, home always starts at top |
| Academy | Subjects; Level selector; Skill Passport; My Notes; Practice Lab | Lesson availability, completed/attempted/mastery distinguished |
| Lesson | Learn; Example; Quiz; Notes; Explain Why; Apply to Project | Answers saved; user can skip or revise; no auto-apply to a real project |
| Skills Passport | Skill list; Evidence; Self-review; Retry; Export | Evidence-based attainment; cannot imply accredited qualification |
| Project List | New; Open; Archive; Duplicate; Import; Export; Delete | Destructive action requires confirmation and backup warning |
| Project Overview | Title; Objectives; Stage navigator; Drafts; Tasks; Save status | Project identity displayed to prevent editing the wrong study |
| Topic/Question | Topic form; Background; Research problem; Questions; Objectives | Require readable format, permit drafts with missing fields, show quality prompts |
| Literature | Search; DOI; Import; PDF; Evidence matrix; Search log | Provider and copyright status exposed; unverified entries labelled |
| Methods/Ethics | Design selector; Sampling; Variables; Ethics checklist | Guide is educational; formal approval lies with institution/authority |
| Data Lab | Import; Data dictionary; Clean; Describe; Chart; Export | Confirm units/types, preserve original dataset and analysis recipe |
| Qualitative Lab | Sources; Codes; Excerpts; Memos; Themes; Export | Excerpts cite local sources; pseudonyms are not a guarantee of anonymity |
| Writing Studio | Outline; Editor; References; History; Preview; Export | Save status, unsaved changes and references clearly presented |
| Mentor | Teach/Guide/Assist; Scope; Sources; Explain Why; Capability badge | Identify whether response came from rules, verified tool or local model |
| Settings | Privacy; Backup; Storage; Appearance; Accessibility; Licences | No online account requirement; local delete and full export available |
| About / Trust | Version; Official link; Licence; Privacy; Limitations; Report issue | Official vs unofficial status accurate and visible |

**Navigation contract:** back returns to previous logical page; nested modals close first; dashboards should not inherit scroll position from child screens; re-entering a saved lesson may restore its own reading position; switching projects uses distinct scroll states and drafts. On orientation change, the form and scroll anchors are preserved when practical; no hidden data mutation. Search and import can be cancelled.

# 23. Learning-content authoring and quality protocol

Each lesson is a small, versioned learning object with these fields: `lesson_id`, `subject_id`, `level`, `objectives[]`, `prerequisite_skills[]` (informational only), `estimated_time_range`, `definitions[]`, `core_explanation`, `examples[]`, `worked_solution`, `practice_items[]`, `rubric_id`, `source_attributions[]`, `reviewer`, `reviewed_at`, `content_licence`, `version`. Examples for statistical concepts must carry correct units and assumptions. Examples of articles must use authentic metadata or be conspicuously fictional.

**Editorial workflow:** author drafts -> academic/content reviewer checks technical correctness -> learning reviewer checks beginner clarity -> accessibility review -> source/licence audit -> merge -> versioned release. Changes that materially alter a lesson require a migration policy so prior learner achievement is not silently rewritten; retained skill evidence records the assessment/rubric version.

**Twelve-subject outcome progression** (more detailed than course titles):

| Subject | Foundation task | Intermediate task | Advanced task |
|---|---|---|---|
| Fundamentals | Distinguish evidence from opinion | Appraise a claim's research basis | Evaluate epistemological and reporting assumptions |
| Topic selection | Narrow a broad interest | Assess scope, novelty and feasibility | Defend originality relative to a disciplined evidence map |
| Questions/objectives | Draft a focused question | Map questions to measures/data | Assess theoretical alignment and alternative formulations |
| Literature review | Read and annotate three papers | Write comparative synthesis with search log | Design a reproducible review protocol and critical appraisal plan |
| Methods | Identify common designs | Justify sampling, measures and limitations | Compare research paradigms and causal inference claims |
| Ethics | Explain consent/confidentiality | Draft an ethics and data-management plan | Evaluate complex power, community and cross-border risks |
| Data collection | Create a simple instrument | Pilot, revise and document an instrument | Address measurement bias, validity and data quality |
| Quantitative analysis | Interpret mean/median/chart | Choose and explain tests under assumptions | Validate models, uncertainty and robustness |
| Qualitative analysis | Code and memo a short excerpt | Develop and justify a codebook | Reflexively evaluate competing interpretations |
| Academic writing | Construct cited paragraphs | Write a critical section and revisions | Construct a coherent publication-level argument |
| Quality/reproducibility | Explain plagiarism and bias | Keep reusable analysis recipe | Critique auditability and reproduce a published result where permissible |
| Publication | Outline a report | Prepare a manuscript and choose venue criteria | Evaluate open-science practices and peer-review responses |

**No fake accreditation:** certificates/skill passports certify only app tasks completed; indicate issuer and assessment evidence, and never promise university credit, admission, formal certification or journal publication. Progress measures must not punish users who need additional attempts.

# 24. Adaptive engine: decisions, rubrics and transparency

**Before generative AI:** a deterministic engine uses an assessment result, topic/level selection, user-requested mode, and optional project context to recommend the next lesson or tool. This rule engine should be inspectable and unit-tested. It is *not* described to users as a thinking conversational model.

**Inputs:** `experience_band`, `lesson_id`, `attempts`, `rubric_scores`, `self_reported_confidence`, `user_mode`, `project_stage`, `known_missing_data`, `device_ai_capability`. **Outputs:** recommended lesson/tool, explanation of reasoning, alternative action, uncertainty note and evidence for recommendation. Profiles are stored locally only.

**Suggested pedagogical logic:**

```text
if objective_answer_wrong:
    show correct concept, explain error, offer simpler example
elif practical_rubric_contains_weak_criterion:
    offer targeted practice and feedback on that criterion
elif lesson_mastered_and_user_wants_to_advance:
    suggest next lesson or apply-to-project action
elif user_prefers_expert_mode:
    show tools without gating by lesson completion
always:
    expose "Why this recommendation?" and "Choose another path"
```

**AI model optionality:** locally executed model must have an explicit capability check, size/download warning, opt-in, tested model licence, cancellable loading, prompt-injection-resistant data boundaries and clear 'AI suggestion, verify against sources' banner. Grounded answers display source IDs and quotations short enough to respect copyright; if evidence is missing, say so. A local model still might hallucinate; never label it 'factually guaranteed'. Never upload local research to a hosted AI service in v0.1-v1.0. If a later hosted option is ever proposed, it requires a separate user-opt-in and zero-cost/privacy review, not an automatic feature toggle.

**High-risk research situations:** ethics, medical/clinical, safety-critical engineering, human participant research, institutional approvals and legal issues demand a prominently displayed domain-expert/supervisor reminder; the app must not assert approval. Never automate fictional consent, synthetic participant responses presented as real, or manipulated research results.

# 25. Technical component boundaries and data contracts

## 25.1 Recommended module contracts

- `academy` reads versioned lesson packages and writes attempts/skill evidence; it does not rewrite project findings.
- `projects` owns topic, questions, milestones and artefacts and accepts reviewed imports from lessons.
- `library` owns `SourceRecord` and PDF annotations; metadata freshness and provider origin remain visible.
- `analysis` reads immutable dataset versions, writes reproducible `AnalysisRun` records and output.
- `writing` links draft documents to source IDs; citations are generated from current metadata and remain auditable.
- `mentor` reads specifically authorised local context and produces labelled suggestions, not silent modifications.
- `backup` exports/imports all owned modules through explicit registered versioned adapters.

## 25.2 Sample canonical local record envelopes

```json
{
  "id": "uuid-created-on-device",
  "recordType": "ResearchQuestion",
  "schemaVersion": 1,
  "projectId": "uuid-project",
  "createdAt": "ISO-8601-time",
  "updatedAt": "ISO-8601-time",
  "provenance": {"kind":"user-authored","sourceIds":[]},
  "sampleOrReal": "real",
  "payload": {"text":"What factors influence ...?","status":"draft"}
}
```

**Rule:** `sourceIds` are actual resolved records; DOI and URL are identifiers, not proof of peer review or permission to reproduce a paper. `sampleOrReal` propagates to derived charts and text, with manual confirmation before moving an exercise into a real project.

## 25.3 Scholarly metadata adapter

A provider adapter takes `searchTerm`, `page`, `filters` and abort signal; it returns normalised `SourceRecord[]` with `sourceProvider`, `retrievedAt`, `doi`, `title`, `authors`, `journal`, `year`, `abstractRightsFlag`, `openAccessLink` if supplied, and `verificationStatus`. Every adapter must handle rate limits (429), errors, empty search, pagination boundaries and unsupported CORS. Query an external provider only after the user initiates online lookup. Do not expose shared/private API credentials client-side.

## 25.4 Versioned backup manifest

```json
{
  "format": "research-hub-backup",
  "formatVersion": 1,
  "appVersion": "0.1.0",
  "createdAt": "ISO-8601-time",
  "includes": ["profile", "projects", "academy", "library", "drafts"],
  "checksums": [{"path":"projects.json","sha256":"hex-value"}],
  "encryption": "none-or-declared-supported-scheme"
}
```

A backup should contain portable JSON/Markdown and permitted user attachments, with a future migration path. Never pretend checksums provide confidentiality: they detect accidental or deliberate changes only under an appropriate trust model. Ask confirmation before overwriting any local database and create a pre-restore export opportunity. For large attachments, display archive size and browser capacity before proceeding. Support a **dry-run validation** displaying which records would change.

# 26. Security and privacy threat model

| Threat | Impact | Required mitigation / verification |
|---|---|---|
| Browser data deletion/eviction | Permanent research loss if no backup | Freshness warnings, manual full export, tested clean restore; request persistent storage if available |
| Stolen phone with open browser | Unauthorised reading of local project | Strong warning on device security, optional encrypted export; no false claim of at-rest browser encryption |
| Malicious PDF/CSV/HTML | XSS, formula injection, denial of service | Trusted parser, strict bounds, escaping, sanitisation, safe CSV exports; parser fuzz/regression tests |
| Compromised dependency or build pipeline | Supply-chain compromise | Lockfiles, provenance review, minimal permissions, security alerts, reproducible releases |
| Unreviewed contributor PR | Code change compromising privacy/results | Protected official branch, required owner review, tests and least-privilege PR jobs |
| Misleading AI answer or fake reference | Academic harm | Label inference, source IDs, verify DOI, explicit uncertainty, human review |
| Data mixing between sample and real work | False research findings | Strong sample/real tagging, confirmation barriers, audit logs |
| New PWA version breaks schema | Data loss/inaccessibility | Versioned migrations, backup-before-migrate, test rollback and old backup compatibility |
| Third-party API leak of topic/query | Privacy breach | Explain providers and query metadata; never append private drafts automatically |
| Accidental public repository upload | Data exposure | `.gitignore`, secret/file scanning, contributor education, no user-data sync |
| Corrupt archive during restore | Broken local state | Dry-run, checksums, version checks, transactional import and rollback |
| Accessibility regression | Excludes researchers with disabilities | WCAG-oriented review, automated tests and manual keyboard/screen-reader assessment |

**Sensitive-data policy:** early versions are educational and exploratory. They are not the approved storage location for identifiable health records, confidential interviews or regulated participant information. Advise users to follow university/institution policies and use approved repositories for sensitive data. Users should remove direct identifiers from practice datasets and not upload identifiable research into public issue trackers.

# 27. Proposed free developer workflow on Android

1. Install/use a maintained Termux distribution, Git and Node.js without paying; Acode is optional. Existing phone/browser can be the first test device.
2. Create public repository with the verified original source licence, contributor docs and a clean `.gitignore`; no project participant data in commits.
3. Scaffold React + TypeScript + Vite + PWA; run development build via localhost. Confirm touch input and back/scroll on Android.
4. Implement one entire vertical slice: local profile -> lesson -> exercise -> saved project artefact -> export -> restore.
5. Add unit and integration tests; CI should run on no-charge allowances. If hosted CI quota is unavailable, run essential tests in Termux and publish truthful test status rather than assuming success.
6. Publish compiled **static** frontend to the selected free hosting provider; no paid backend or commercial APIs. Observe provider limitations and document how to host with an alternative provider.
7. Tag releases and keep a changelog. User work is never pushed to public GitHub by the app. A Termux-GitHub automation bridge, if added, must use narrowly scoped credentials, visible logs and confirmation for privileged pushes/releases.

**CLI outline for reference only; commands are not already executed:**

```bash
pkg update && pkg install nodejs git
npm create vite@latest research-hub-ai -- --template react-ts
cd research-hub-ai
npm install
npm run dev -- --host 127.0.0.1
```

On Android, accessibility testing also needs TalkBack and rotation/background-resume testing. Desktop/laptop contributors can run the same repository later. Avoid requiring the project maintainer to own a PC.

# 28. Delivery roadmap with exit gates and honest scope

| Release | Functional vertical slice | Mandatory demonstration | Not included yet |
|---|---|---|---|
| 0.1 | Local-first Home, Projects, Academy subject 1, rule-based Mentor, Backup | Offline repeat-open and full restore of two projects | Scholarly APIs, writing export, generative AI |
| 0.2 | Question builder, stage tracker, Skills Passport, Apply-to-Project | Beginner produces and revises a research question | Claim of original research gap |
| 0.3 | Local library, DOI import, search adapter, comparison matrix | Verified and unverified sources visibly distinguished; failure fallback | Subscription journal access |
| 0.4 | Proposal and method guide, ethics planner | Project objectives map coherently to suggested design | Automatic ethics approval |
| 0.5 | CSV import, descriptive statistics, charting, manual qualitative coding | Verified statistics fixtures and traceable coding | All SPSS/R/NVivo features |
| 0.6 | Draft editor, citation links, working exports | Round-trip reimport and PDF/DOCX render checks | Guaranteed journal formatting |
| 0.7 | Experimental opt-in local AI | Tested fallback on unsupported phones and grounded answer provenance | Mandatory generative chatbot |
| 1.0 | Public integrated research journey and content expansion | Volunteer beginner completes mini-project without external coaching | Hosted collaboration and cloud accounts |

**No calendar promises.** Release only on evidence, not estimated dates. Maintain P0/P1 issues and clearly publish when a module is beta or unavailable. Do not disguise a clickable prototype as a fully implemented research feature.

**First sprint backlog, in order:** (1) repo/licensing/security skeleton; (2) responsive app shell; (3) data schema and migrations; (4) project CRUD; (5) one complete Academy learning unit; (6) deterministic mentor responses and explanation labels; (7) autosave state; (8) ZIP backup and restore with tests; (9) service worker caching and offline tests; (10) accessibility/back/scroll regression; (11) build and deploy verified public preview. Each issue must have acceptance tests and a device demo checklist.

# 29. Release gate scorecard and definition of done

Use pass/fail **evidence**, not an invented percentage. A major release fails if any blocking P0 check is incomplete.

| Gate | Owner/reviewer role | Evidence to retain |
|---|---|---|
| Licence and copyright | Maintainer + contributing developer | Exact Apache-2.0 text, NOTICE, contribution attestations, third-party register |
| Data recovery | Developer + tester | Clean-browser restore video/log, corrupt archive failure test, migration test |
| Privacy and AI disclosure | Maintainer + reviewer | Data-flow test; no unconsented network calls; mentor source/type labels |
| Research integrity | Academic content reviewer | Checked lessons, traceable sources, provenance and honest uncertainty |
| Analysis validity | Technical reviewer | Fixtures independently computed with established reference software |
| Mobile accessibility | Test volunteer | Keyboard, TalkBack, contrast, focus, touch, rotation and back/scroll report |
| Zero-cost compliance | Maintainer | No payment setup, hosted function dependence, required paid API or forced upsell |
| Official release security | Maintainer | Protected branch, successful CI, approved PR, deploy from trusted commit |
| User journey | New graduate / novice | Can complete one module and build a small portfolio artefact without AI |

**Definition of done for each feature:** accessible design; tests covering error states; privacy and licence review; offline behaviour specified; import/export and migration considerations; technical documentation; correct save-state handling; visible unfinished states; no external-cost dependence; approval through protected pull request.

# 30. Worked beginner end-to-end journey

A new graduate opens the site, chooses **Beginner**, and launches a demo. They learn to distinguish a broad topic from a researchable question. The practice example uses a **synthetic scenario** about student attendance (clearly marked demonstration). They choose a new real project, enter their own topic and draft questions, and ask **Teach Me** for a concept; **Guide Me** for structured steps; and **Assist Me** to create a method selection checklist. The rule engine explains *why*, based on transparently displayed criteria. The user saves a question and exports a backup. Later, they reconnect, search metadata through an identified provider, import actual bibliographic records and annotate a limited set of papers. They build a literature matrix and study a proposal lesson; the app warns that a research gap cannot be guaranteed by three articles alone. They create a study plan and ethics checklist, then use a synthetic CSV to learn descriptive statistics without fabricating fieldwork. Their writing drafts cite real source IDs. The Skills Passport displays **specific demonstrated competencies**, not a fictitious degree or qualification.

At every step the app explicitly distinguishes: (a) learning example, (b) user-written material, (c) externally retrieved metadata, (d) verified computation and (e) optional AI-generated suggestion. A researcher can use only the parts they need, skip lessons, leave with portable files, and continue without generative AI.

# 31. Decisions locked versus conditional

**Locked now:** genuine open-source community development; Apache-2.0 original software where authorised; CC BY 4.0 project-owned educational text where authorised; **official app free**; first platform responsive static web/PWA; first development on Android phone; offline-first local profile/projects; manual backup/restore and honesty about browser loss; twelve Academy subjects; five learning bands; Teach/Guide/Assist adaptive mentor; source provenance; reproducible computation; no fabricated references; public reviewed contribution workflow; no advertising or payment requirement in the official service.

**Conditional on tests and external terms:** free-host uptime/quotas, scholarly API browser interoperability, Python runtimes on specific phones, optional local model performance, export fidelity, web storage persistence, support for various PDF forms, and repository protection options available in the actual free account configuration.

**Not promised:** perpetual free third-party infrastructure, unlimited AI, comprehensive replacement of professional statistics tools, publisher paywall bypass, cloud multi-user accounts, online human-subject consent hosting, thesis accreditation, a plagiarism detection service equivalent to proprietary databases, guaranteed journal acceptance or total immunity from malicious forks.

# 32. Implementation handoff checklist

Before beginning coding, the maintainer/developer should have these documents ready in the same GitHub repository: versioned blueprint, readable one-page README, project scope/constraints, user stories, design tokens, data schema, licence texts, contributor/security/privacy policies, branch rules, test fixtures, lesson-authoring template, backup format, review checklist and feature availability matrix. Establish exact owners and reviewers only when real people volunteer; do not invent contributors.

For the first implementation session, the minimum deliverable should be a **real, running, locally testable PWA skeleton** with working navigation and one end-to-end data-saving demonstration. A later session can add content and automation after backup/restore succeeds. This blueprint is the specification against which each delivered release must be checked.

---

# 33. Authoritative public sources for implementation decisions

The following public documents should be checked again during development because terms and versions can change. Their presence does not imply that Research Hub AI already has access to any provider account or that its software is implemented.

1. Apache License 2.0, full text: https://www.apache.org/licenses/LICENSE-2.0
2. Open Source Initiative, Open Source Definition: https://opensource.org/osd
3. Creative Commons Attribution 4.0: https://creativecommons.org/licenses/by/4.0/
4. GitHub CODEOWNERS: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners
5. GitHub protected branches: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches
6. Cloudflare Pages limits: https://developers.cloudflare.com/pages/platform/limits/
7. OpenAlex API authentication and limits: https://help.openalex.org/api/authentication/
8. Crossref API access/rate limits: https://www.crossref.org/documentation/retrieve-metadata/rest-api/access-and-authentication/
9. MDN browser storage and eviction: https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria
10. Pyodide browser Python: https://pyodide.org/en/stable/
11. Transformers.js: https://huggingface.co/docs/transformers.js/en/index
12. WCAG 2.2: https://www.w3.org/TR/WCAG22/
13. The Turing Way (reproducible research learning): https://book.the-turing-way.org/

**End of Research Hub AI Master Blueprint 2.0.**
