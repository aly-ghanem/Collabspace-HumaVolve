# Getting Started with Cursor

## 1. Put this kit in your repo
Copy `PLAN.md`, `docs/` and `.cursor/` into the repo root.

## 2. Connect the Figma MCP (primary design source)
- Make sure your Figma account has enough MCP calls (paid plan with a Dev or Full seat). The Starter plan runs out after a handful of calls.
- In Cursor: Settings → MCP → add the Figma MCP server (remote server, or the Figma desktop app's local Dev Mode server). Sign in with the account that owns the file copy.
- File key: `Q2FK2TwYA6AUcSpJcdnupE`
- URL: https://www.figma.com/design/Q2FK2TwYA6AUcSpJcdnupE/Collabpspace--Team-C--Copy-?node-id=21-162

## 3. Install skills into `.cursor/skills/`
From https://github.com/spencerpauly/awesome-cursor-skills — copy each skill folder:

using-ui-stack · vercel-react-best-practices · vercel-web-design-guidelines · verifying-in-browser · visual-qa-testing · responsive-testing · accessibility-auditing · form-testing · auto-type-checking · writing-commit-messages · reviewing-code · sentry-code-simplifier · suggesting-cursor-rules

## 4. Fallback exports (do these anyway, ~20 min)
- Every frame on the "UI Design" page → 2× PNG → `design-ref/`. Used for visual QA and when MCP calls run out.
- Icons and logo → SVG → `src/assets/icons/`. Avatars → WebP → `src/assets/avatars/`.

## 5. One-time design capture (saves MCP calls)
Run once, at the start, in a single Cursor chat:
> Using the Figma MCP, call get_variable_defs on node 285:12895 and get_design_context on each node in docs/screens.md "Figma node IDs". For each, write the exact measurements (padding, gaps, radius, shadows, font styles, widths) into that screen's section of docs/screens.md and fill "Global measurements". Do not write app code.

After this, screens are built from `docs/screens.md`. Call the MCP again only for a node whose notes are missing or unclear.

## 6. Per-task loop
1. New Cursor chat per task ID from PLAN.md section 9.
2. Point to the screen's section in docs/screens.md (and its node ID).
3. Review the diff yourself; rename or simplify anything you wouldn't write.
4. Run the check skills (verifying-in-browser, visual-qa-testing against the PNG).
5. Tick the box in PLAN.md; add a line to docs/decisions.md if you made a choice.
6. Commit with the task ID (`feat(dashboard): build KPI cards [T1.9]`) and **push**.
7. End of each phase: `git tag phase-<n>` and `git push --tags`.

Repo: https://github.com/aly-ghanem/Collabspace-HumaVolve

## 7. Prompt template
> Task T1.9 from PLAN.md. Build the Dashboard (Figma node 285:12895) using the measurements in docs/screens.md. If a value is missing, fetch it with the Figma MCP get_design_context for that node and record it in docs/screens.md first. Use components from src/components/ui and data from useDataStore; derive KPI numbers from tasks. Include skeleton loading. Then verify in the browser against design-ref/dashboard.png.
