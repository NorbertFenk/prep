# Prep

Self-paced interview-prep courses: short, interactive HTML lessons with
instant-feedback quizzes. Open `index.html` (the catalog) and pick a course.

## Preview

    python3 -m http.server 8000

Open lessons through the server (`http://localhost:8000`) so relative asset
links resolve.

## Layout

- `index.html` — course catalog
- `assets/` — shared components (`course.css`, `quiz.js`, `gauntlet.js`)
- one dir per course (`go/`, `how-the-internet-works/`) with `MISSION.md`,
  `RESOURCES.md`, `NOTES.md`, `learning-records/`, `lessons/`, `reference/`

## Adding a course

Run the `/teach` skill (e.g. `/teach Rust`) from the repo root. Agent-facing
conventions — shared assets, file naming, catalog registration — live in
[AGENTS.md](AGENTS.md) and are picked up automatically.
