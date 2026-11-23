# Getting Started with Cursor

Repo: https://github.com/aly-ghanem/Collabspace-HumaVolve

## 1. Put this kit in your repo
Copy `PLAN.md`, `docs/` and `.cursor/` into the repo root. Commit: `chore: add project plan and cursor rules`.

## 2. Design sources (no Figma MCP — Starter plan limit)
- `docs/screens.md` — content, tokens, global measurements, Figma node IDs.
- `docs/figma-layout/<screen>.txt` — exact position and size of every layer in each of the 31 screens and overlays. Padding = child x/y inside its card; gaps = distance between siblings.
- `design-ref/<screen>.png` — what it looks like. Export these from Figma (step 4).
- Radius, shadows, borders: not in the layout data. Click a card, button, input, badge and nav pill in Figma and read the right-hand Design panel. Fill the ✍️ rows in `docs/screens.md` (about 10 minutes).

## 3. Install skills into `.cursor/skills/`
From https://github.com/spencerpauly/awesome-cursor-skills — copy each skill folder:

using-ui-stack · vercel-react-best-practices · vercel-web-design-guidelines · verifying-in-browser · visual-qa-testing · responsive-testing · accessibility-auditing · form-testing · auto-type-checking · writing-commit-messages · reviewing-code · sentry-code-simplifier · suggesting-cursor-rules

## 4. Exports from Figma (free, no API)
- Select each frame on the "UI Design" page → Export 2× PNG → `design-ref/`, named like the files in `docs/figma-layout/` (`dashboard.png`, `tasks.png`, …).
- Icons and logo → SVG → `src/assets/icons/`. Avatars → WebP → `src/assets/avatars/`.

## 5. Per-task loop
1. New Cursor chat per task ID from PLAN.md section 9.
2. Point to the screen's section in docs/screens.md, its docs/figma-layout file and its PNG.
3. Review the diff yourself; rename or simplify anything you wouldn't write.
4. Run the check skills (verifying-in-browser, visual-qa-testing against the PNG).
5. Tick the box in PLAN.md; add a line to docs/decisions.md if you made a choice.
6. Commit with the task ID (`feat(dashboard): build KPI cards [T1.9]`) and **push**.
7. End of each phase: `git tag phase-<n>` and `git push --tags`.

## 6. Prompt template
> Task T1.9 from PLAN.md. Build the Dashboard to match design-ref/dashboard.png. Take sizes and spacing from docs/figma-layout/dashboard.txt and tokens/measurements from docs/screens.md. Use components from src/components/ui and data from useDataStore; derive KPI numbers from tasks. Include skeleton loading. Then verify in the browser against the PNG. Commit and push.
