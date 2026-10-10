# Research Hub AI — Web-ready prototype (v0.1.3)

**Free. Offline-first. Private by default. No paid APIs or mandatory accounts.**

This is a working prototype of the Research Hub AI master blueprint. It is deliberately built with **HTML, CSS, and native JavaScript with zero npm dependencies** so its first release can be developed, tested and used directly on an Android phone. React/TypeScript may be introduced in a future migration after the first workflows are proven. The core app has no server backend and does not send project data anywhere.

## What works

- Local learning profile with five experience levels.
- Academy: six Research Fundamentals lessons with quizzes, guided writing, and a quiz-based Skills Passport; lesson 1 is expanded into a detailed beginner walkthrough, worked case, self-reflection and five-question application check. A quiz pass does not certify mastery.
- Three mentoring modes (Teach Me, Guide Me, Assist Me) with offline rules and transparent limits; **not an AI language model**.
- Create, edit, archive, restore, delete and navigate research projects through eight conceptual stages.
- Local autosave of drafts and project fields; save status.
- Manually enter and manage unverified sources.
- Basic Research Lab: count, mean, median, min/max and sample standard deviation using practice numbers.
- Project writing drafts and TXT export.
- Locally saved lesson practice and reflection notes, included in backups. Previous quiz attempts are preserved even when the lesson changes.
- New in v0.1.3: Lesson 1 has a one-concept-at-a-time guided exercise with four locally saved answers (Observation, Question, Evidence, Limitation), examples, deterministic checks and a recap. Original long-form practice remains unchanged. Historical 2-question results remain visible but no longer count as passing the new 5-question check.
- Portable `.zip` backup with `manifest.json` (SHA-256) and `data.json`, and validated, atomic restore (backup format v1).
- Offline cached app after successful first online load; installable web app on supporting browsers.

## Public website (GitHub Pages)

After a maintainer enables **Settings → Pages → Build and deployment → Source: GitHub Actions**, every successful push to `main` tests the web app and deploys only the public static assets.

**Planned site:** https://sheltshen13.github.io/Research-Hub-AI/

Site publication is separate from repository upload: check **Actions → Publish free website** before claiming the website is live. No paid hosting or backend is required for the static application.

**Important:** Work saved on `127.0.0.1` and work saved on the GitHub Pages website are in different browser storage origins. They will **not** synchronise automatically. Export a ZIP backup on the old site and restore it on the new site if you wish to migrate your projects. Browser storage can be deleted or evicted; keep copies of exported backups in a safe place. Never store identifiable participant data on this prototype.

## Install and run on Android (Termux)

1. Install/launch a maintained Termux distribution.
2. Unzip the `Research_Hub_AI_v0.1.0_Source.zip` archive into a folder accessible to Termux. Grant shared storage access once using `termux-setup-storage` if needed, and approve the Android prompt.
3. In Termux, run:

```bash
pkg update
pkg install nodejs unzip
termux-setup-storage
mkdir -p ~/research-hub-ai
unzip -o ~/storage/downloads/Research_Hub_AI_v0.1.0_Source.zip -d ~/research-hub-ai
cd ~/research-hub-ai
npm start
```

4. Open **http://127.0.0.1:5173** in Chrome on the same phone. Keep Termux running while using the localhost version. The web app can continue working offline after the required assets have been cached; a first online load is still needed when hosted publicly.
5. On supported browsers, use **Add to Home screen / Install app** to install the PWA. This does not publish it publicly.
6. To stop the local server, press `Ctrl+C` in Termux.

No `npm install` is needed. If your archive has been renamed by Android, use the actual downloaded filename in the `unzip` command. Some Android storage folders have restrictions; the example copies source files into Termux home to avoid those restrictions.

### Running tests

```bash
cd ~/research-hub-ai
npm test
```

### Source code and free static hosting

All app files can be deployed unchanged to a static hosting provider that serves the project at the domain root under HTTPS (for example a verified free static-site plan). No Functions or databases are required. A GitHub public repository may contain this **source only**, never private research exports. Configure branch protections and maintainer reviews before accepting community contributions. Check your hosting provider's current free limits and terms.

## Privacy and backup warnings

- All project data is stored in the browser's IndexedDB for the specific origin (for example `http://127.0.0.1:5173`). Hosting the site at a different URL uses a **different browser storage area**. Export from the first URL and restore into the second.
- IndexedDB is not inherently encrypted. Clearing site storage, browser changes, or losing the phone may remove data. Use Settings → Download ZIP backup regularly and retain backups separately. A successful downloaded file should be verified and test-restored.
- ZIP backups are **unencrypted**. Do not store confidential research participant data in this prototype.
- The app cannot issue institutional ethics approval or guarantee academic findings. Mentor output is curated, rule-based guidance and may be incomplete.
- This release has no analytics, paid services, remote AI inference or hidden data uploads.

## Technical design

- Offline cache: `sw.js`, cache-first for the exact core app files.
- Local data: IndexedDB database `research-hub-ai-local`, schema version 1, single `records` object store for simplicity and atomic full restore.
- Backup: ZIP with `manifest.json` and `data.json`, SHA-256 manifest and per-entry ZIP CRC32. Restore refuses unknown schemas or mismatched checksums, and checks everything before replacing data in one IndexedDB transaction. The 15 MB import cap intentionally protects limited-memory devices.
- App shell: dependency-free ES modules, accessible native forms, PWA manifest, independent navigation and automatic saves.
- No central authentication, server, data collection, or commercial third-party dependency.

## Known limitations and next release

Version 0.2 will expand the Academy beyond fundamentals and improve the connected beginner journey, including an explicit research question builder, source-to-project linking and richer skills evidence. Later versions will address academic database adapters, DOI verification, statistics/qualitative analysis, document export and optional local AI where compatible. These are **not falsely presented as complete in this release**.

## Licence and community

Original application source code: Apache License 2.0. The official service remains free. Apache-2.0 does allow legally compliant commercial forks; it does not give contributors access to the official repository. Educational content has been newly authored for this prototype; see `CONTENT_LICENSE.md`.
