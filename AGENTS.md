# AGENTS.md — Prep teaching workspace

This repo is a multi-course teaching workspace. Build courses with the `/teach`
skill: follow `/teach` for pedagogy, follow THIS file for repo conventions.
Where they conflict with `/teach`'s generic wording (it assumes a single
workspace with `./assets/`), this file wins.

## Layout
- Root `index.html` = the course catalog.
- Each course = one top-level dir (`go/`, `how-the-internet-works/`) holding
  `MISSION.md`, `NOTES.md`, `RESOURCES.md`, `learning-records/`, `lessons/`, `reference/`.
- Shared components live in root `assets/`: `course.css`, `quiz.js`, `gauntlet.js`, `search.js`.
  (`search.js` is catalog-only — loaded by root `index.html`, not by lessons.)

## Golden rule — reuse shared assets, never inline
Before authoring any lesson/reference: read `assets/` and one existing lesson in
the same course, and copy their markup. Do NOT add inline `<style>` or new
quiz/timer JS — link the shared files. New *reusable* pieces go in `assets/` and get linked.

## Paths
Lessons and references are two levels below root → link assets as `../../assets/...`.
(Only root `index.html` uses `assets/...`.)

## Every lesson/reference `<head>`
    <link rel="stylesheet" href="../../assets/course.css">

## Lesson file
- Name `lessons/NNNN-dash-case-name.html`; NNNN increments per course.
- Body uses course.css classes: `.eyebrow` (course/lesson label) → `<h1>` →
  `.lede` (one-line summary) → `.meta` (prereqs · time) → sections →
  `<ul class="links">` back-links (MISSION, RESOURCES, prev/next) →
  `.ask` (invite follow-up questions) → `<footer>`.
- Recommend one primary source (high-trust external link).
- Load `<script src="../../assets/quiz.js"></script>` right before `</body>`.

## Quiz (use quiz.js — do not write your own)
    <div class="q" data-answer="0">
      <p>Question</p>
      <button type="button">Option A</button>
      <button type="button">Option B</button>
      <button type="button">Option C</button>
      <div class="fb" aria-live="polite"></div>
    </div>
- `data-answer` = zero-based index of the correct button.
- Exactly one `<p id="score"></p>` per page (quiz.js writes the total).
- Make options equal length so formatting gives no clue.

## Gauntlet (timed finale — use gauntlet.js)
`.gauntlet` wrapper; each `.gcard` carries `data-time`, `data-cat`, `data-href`
and holds `.gcat` + prompt `<p>`. The widget also needs `.gtime > .gbar`,
`.gbtns`, `.gres`. Load `<script src="../../assets/gauntlet.js"></script>`.

## Reference docs
`reference/*.html`, same `<head>`, `.eyebrow` + `<h1>` + `.lede`. Compressed,
skim-friendly, print-friendly. Keep glossary terms consistent across all lessons.

## Register in the catalog
When adding a lesson or reference, also edit root `index.html` under the right
course `<details>`:
- Lesson row: `<div class="step"><div class="num">N</div><div><b><a href="COURSE/lessons/NNNN-....html">Title</a></b></div></div>`
- Reference: add a link to that course's References line.

## Preview
`python3 -m http.server 8000` (see README); open lessons through the server so
relative asset links resolve.
