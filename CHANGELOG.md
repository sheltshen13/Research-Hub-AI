# Changelog

## 0.1.5 — Questions, Evidence and Sources

- Expand Lesson 3 with seven beginner-friendly stages, a worked evidence-checking example, an eleven-term glossary, comparisons and seven scenario-based assessment questions.
- Introduce a four-step offline practice guide for refining a question, separating claim from evidence, checking a source and acknowledging limits.
- Emphasise that original research, systematic reviews, peer review and AI-generated citations require careful verification, not automatic trust.
- Preserve old Lesson 3 assessment attempts and existing practice entries; add new notes to local storage and verified ZIP backups using the existing schema.
- Bump the offline app cache and automatic regression suite. No new payment, API or account requirements.


## 0.1.4 — Understanding research methodologies

- Rebuilt Lesson 2 with detailed beginner explanations, comparative cases, glossary, ethical decision guidance and six scenario-based questions.
- Added four guided stages for qualitative, quantitative, mixed methods and selecting a suitable approach, using the proven Lesson 1 interface.
- Saved Lesson 2 written responses locally and supported backup/restore without changing the database or ZIP schema.
- Retained previous lesson attempts without falsely matching historical answers to newly written questions.
- Updated offline cache and automatic regression tests. All official features remain free without a required AI API or account.


## 0.1.3 — Four research concepts, step by step

- Added a beginner-friendly four-stage guided exercise on Observation, Question, Evidence and Limitation, with explanations, AI-learning examples and one knowledge check per concept.
- Added separate autosaved answers and a read-only recap of the learner's own writing; original practice notes remain untouched.
- Fixed current Quiz passed status so an earlier two-question attempt does not satisfy the revised five-question Lesson 1 assessment; the historical record remains saved.
- Made the new responses part of ZIP backup/restore, preserving compatibility with existing backups.
- Refreshed offline precache for the free static site and added regression tests.


## 0.1.2 — Learn for understanding

- Expanded Lesson 1 into six explained research stages, worked case, comparisons, examples and five applied quiz questions.
- Added autosaved practice and reflection writing fields, plus a self-reported confidence selector to each lesson.
- Changed misleading "Mastered" badges to "Quiz passed"; correct multiple-choice answers do not prove competence.
- Preserved previous two-question quiz attempts and labelled them as previous checks when viewing expanded Lesson 1.
- Included lesson notes in validated ZIP backup/restore; refreshed offline app cache.


## 0.1.1 — Web hosting and offline scope fix

- Use relative asset URLs so the same website works from Termux and GitHub Pages project subpaths.
- Update the PWA manifest, service worker registration, precache URLs and offline fallback to respect deployment scope.
- Add a free GitHub Pages deployment workflow that tests and publishes only public site assets.
- Modernise CI actions and extend regression tests for scoped deployments.


## 0.1.0 — First working foundation

- Responsive standalone research web application, no required accounts or subscriptions.
- Local IndexedDB storage for researcher profiles, projects, drafts, lesson results, and manually entered references.
- Research Fundamentals: six lessons with explanations, glossary entries, practice activities, two-question quizzes, feedback and a skills passport.
- Three explicit offline mentor modes: Teach Me, Guide Me and Assist Me. Rule-based, not a generative language model.
- Research project workflow with eight stage labels; project editing and honest autosave status.
- Research Library with unverified manual bibliography records.
- Research Lab with deterministic descriptive statistics.
- Plain-text project Writing Studio with TXT download.
- IndexedDB ZIP export/import with SHA-256 manifest verification and atomic restore.
- Offline-first PWA shell, mobile bottom navigation, installable app manifest, and no tracking/paid backend.

Not present: live academic search, verified DOI metadata, advanced analysis, encrypted browser database, shared accounts, cloud sync, generative AI, manuscript citation automation, verified thesis export, formal ethics approval.
