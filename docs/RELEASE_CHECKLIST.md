# Release acceptance checklist — Research Hub AI 0.1.0

## Verified in the development container

- [x] Pure statistics engine unit tests (count, mean, median, SD, invalid input).
- [x] Six educational lessons and two questions per quiz validate.
- [x] Deterministic mentor topic routing tests.
- [x] ZIP writer/reader, archive CRC32, SHA-256 manifest, duplicate-ID checks and roundtrip tests.
- [x] JavaScript syntax checks (Node 22).
- [x] Browser DOM interaction smoke checks with simulated IndexedDB: onboarding, project creation, autosave, quiz, mentor response, statistics calculation, backup download, restore, Android-size navigation and back-scroll preservation.
- [x] Generated backup tested with `unzip -t`.

## Must be tested on an actual Android phone before public hosting

- [ ] Termux `npm start` and Chrome initial launch on the actual device.
- [ ] Browser close/reopen retains project edits in native IndexedDB.
- [ ] Airplane-mode restart after successful service-worker installation and caching.
- [ ] Backup can be downloaded into Android Downloads and restored after clearing actual browser site data.
- [ ] Browser rotation and system Back gesture retain route-specific scroll position and unsaved-field protection.
- [ ] Screen reader (TalkBack), 200% text scaling, keyboard focus navigation and long project titles.
- [ ] Install-to-home-screen prompt and icon in Android Chrome.
- [ ] Storage failure and quota exhaustion behavior on actual devices.
- [ ] Review the repo settings and license before publishing community contributions.

**Important:** Browser DOM testing used a storage test double because the execution environment blocked direct localhost browser navigation. It is not a substitute for testing native IndexedDB, real Android gestures or production offline installation.
