# CollabSpace — Master Plan

> Source of truth for building CollabSpace. Read this file and `docs/screens.md` before starting any task. Design values come from the Figma MCP (captured once into `docs/screens.md`); PNGs in `design-ref/` are the fallback and the visual-QA reference.

## 0. Context

- React Development Competition entry. Solo. Deadline **27/11/2026**. Review session after submission.
- Judged on: React skill, code quality and organization, UI/UX, responsiveness.
- **No backend.** All data is seeded locally and persisted in localStorage.
- **Pixel-perfect** match to Figma at 1440px is the primary goal.
- Figma: https://www.figma.com/design/Q2FK2TwYA6AUcSpJcdnupE/Collabpspace--Team-C--Copy-?node-id=21-162

## 1. Product

CollabSpace is a team collaboration workspace that replaces Slack + Trello + Drive + Notion: projects, Kanban tasks, chats, meetings with transcripts, files, reports, and an AI assistant.

**Personas (from the Figma UX page)**
- Sara El-Sherif — Project Manager. Wants one place, ready-made reports, meetings that turn into tasks.
- Mahmoud Fathy — Front-end developer. Wants clear assigned tasks, threaded chat, filterable files, AI summaries.

## 2. Stack (do not add dependencies without asking)

| Area | Choice |
|---|---|
| Build | Vite + React 18 + TypeScript (strict) |
| Routing | React Router v6 (data router) |
| Styling | Tailwind CSS v4, tokens in `@theme` (see section 4) |
| State/data | Zustand + `persist`; seed in `src/data/seed.ts`; `src/lib/fakeApi.ts` adds 300–600ms delay |
| Primitives | Radix UI: Dialog, DropdownMenu, Tabs, Popover |
| Forms | React Hook Form + Zod |
| Charts | Recharts; gauge is custom SVG |
| Drag & drop | dnd-kit (core + sortable) |
| Motion | Framer Motion (modals, tab content, toasts only) |
| Dates | date-fns |
| Icons | Streamline Core SVGs exported from Figma into `src/assets/icons/` |
| Quality | ESLint, Prettier, Vitest + Testing Library |
| Deploy | Vercel |

## 3. Folder structure

```
src/
  app/            router.tsx, layouts/AuthLayout.tsx, layouts/AppLayout.tsx, providers.tsx
  components/ui/  Button, Input, PasswordInput, SearchInput, Select, Badge, Card, Modal,
                  Dropdown, Tabs, ProgressBar, AvatarStack, Gauge, Skeleton, EmptyState, Toast
  features/
    auth/ dashboard/ projects/ tasks/ meetings/ chats/ reports/ ai/ profile/ notifications/ search/
      components/  pages/  hooks/  schema.ts
  store/          useDataStore.ts, useSessionStore.ts
  data/           seed.ts
  lib/            fakeApi.ts, format.ts, dates.ts, cn.ts
  types/          domain.ts
  assets/icons/   *.svg
design-ref/       PNG exports of every frame
docs/             screens.md, decisions.md
```

Rules: features never import another feature's internals; shared pieces live in `components/ui`, `lib`, `types`.

## 4. Design tokens (from Figma variables)

**Font:** Inter. Scale base 16, ratio 1.25.

| Token | Value | Usage |
|---|---|---|
| primary-500 | `#005AFB` | Active nav pill, primary buttons, links, progress |
| primary-50 | `#E6EFFF` | Primary tints, In Progress column header |
| secondary-500 | `#27272B` | Dark text/buttons |
| secondary-50 | `#E9E9EA` | |
| secondary-text | `#525256` | |
| text | `#000712` | Headings |
| text-black | `#191919` / `#252525` | |
| text-body | `#718096` | Body / meta text |
| sub | `#4A4A4A` | |
| gray-03 | `#9F9F9F` | |
| gray-05 | `#E8E8E8` | Borders |
| gray-06 | `#F3F3F3` | |
| gray-30 | `#F2F4F7` | Track backgrounds |
| gray-500 | `#606C80` | |
| label-bg | `#F3F4F6` | Badges, search fields |
| page-bg | `#F6F8FA` | App background |
| green / green-50 | `#2BA52E` / `#EAF6EA` | Done, Low, Completed |
| red / red-50 | `#DB302A` / `#FBEAEA` | High, overdue, notification dot |
| yellow / yellow-50 | `#E6BA0E` / `#FFFAE7` | Medium |
| orange / orange-50 | `#FA9E00` / `#FFF5E6` | Pending |
| violet / violet-50 | `#7D2D7E` / `#F2EAF2` | In Review, project Alpha |
| teal / teal-50 | `#04B5AE` / `#E6F8F7` | Project SepetGo |

`#3B82F6` appears in Figma but is an inconsistency — do not use it.

**Text styles**

| Name | Spec |
|---|---|
| h4 | 31 / 600 / 1.5 |
| h6 | 20 / 500 / 1.5 |
| body-semibold | 16 / 600 / 24 |
| body-sm | 14 / 400 / 20 |
| caption | 12 / 400 / 18 |
| label | 12 / 500 / 16 |
| micro | 10 / 800 / 16 |

**Radius, shadows, spacing:** not defined as Figma variables. Capture them with the Figma MCP (get_design_context) and record in `docs/screens.md` → "Global measurements" before building UI.

## 5. Data model (`src/types/domain.ts`)

- **User**: id, name, role, team, avatar, email, joinedAt
- **Team**: id, name (UI/UX, Frontend, Backend, Marketing, Graphic Designers), memberIds, leaderId
- **Project**: id, name, color (violet|teal), description, type, startDate, deadline, status (active|done), priority, teamIds, fileIds
- **Task**: id, projectId, title, description, status (todo|in-progress|in-review|done), priority (high|medium|low), progress, assigneeIds, reviewerId?, dueDate, commentCount
- **Meeting**: id, projectId?, subject, start, durationMin, attendeeIds, goal, transcript: {time, speakerId, text}[]
- **Conversation**: id, kind (channel|direct), name, projectId?, memberIds; **Message**: id, conversationId, authorId, text, sentAt
- **File**: id, projectId, name, ext, sizeKb, uploaderId, uploadedAt
- **Notification**: id, kind (meeting|overdue|team), title, body, at, read
- **Activity**: id, userId, text, at

Seed with the exact Figma content (Alpha, SepetGo, Mohanad Wahib, Sara Hassan, Ali Mohamed, Khalid Mousa, Mahmoud Salah, Ahmed Mohamed, Design Review, Sprint Planning Meeting, UX Feedback Session, UX_Research_Summary.pdf, Dashboard_Layout_React.jsx, Database_Schema_v2.sql, etc.). Seed enough tasks that dashboard KPIs compute to the Figma values (Pending 32, In Progress 40, Completed 22 of 94).

**Derived, never hard-coded:** KPI counts, completion rates, project progress, team member task ratios.

## 6. State placement

| State | Home |
|---|---|
| Domain data | `useDataStore` (persisted) via feature hooks that call `fakeApi` |
| Session (user, language) | `useSessionStore` (persisted) |
| Active tab, filters, search, week offset, selected chat | URL (path + search params) |
| Modal open, dropdowns, form values | Local component state / RHF |

## 7. Routes

| Path | Screen |
|---|---|
| `/sign-in`, `/sign-up` | Auth (public) |
| `/` | Dashboard |
| `/projects` | All Projects |
| `/projects/:projectId/:tab?` | Project detail (overview, tasks, teams, files) |
| `/tasks` | Tasks board |
| `/chats/:conversationId?` | Chats |
| `/meetings` | Meetings week view |
| `/meetings/:meetingId` | Join meeting / transcript |
| `/reports` | Reports |
| `/ai` | Ask AI |
| `/files` | Global files |
| `/profile/:tab?` | Profile (overview, tasks, files, settings) |
| `*` | 404 |

All non-auth routes are protected; signed-out users go to `/sign-in`.

## 8. Priorities

- **P0:** tokens, UI kit, TopNav, auth, Dashboard, Projects list + detail (Overview, Tasks), Tasks Kanban with drag-and-drop, New Project / Create Task / New Meeting modals, Meetings, Chats (list + thread), Reports, basic responsive, deploy, README.
- **P1:** Project Teams + Files tabs, meeting transcript, notifications + search dropdowns, Profile, Ask AI (mock streaming), global Files, skeletons/empty states everywhere.
- **P2:** Arabic/RTL, dark mode, ⌘K search.
- **Cut order if late:** Profile → Ask AI → global Files → RTL.

## 9. Schedule & task list

Work top to bottom. One task = one Cursor chat = one or more small commits.

### Day 0 — Tonight (24/11)
- [ ] T0.1 Connect the Figma MCP in Cursor; export fallback PNGs to `design-ref/`, icons (SVG) to `src/assets/icons/`, avatars (WebP) to `src/assets/avatars/`
- [ ] T0.2 One-time MCP design capture (docs/SETUP.md step 5) → all measurements written into `docs/screens.md`
- [x] T0.3 Scaffold Vite + TS strict, Tailwind v4, ESLint, Prettier, Vitest, path alias `@/`
- [x] T0.4 Tokens in `@theme` + Inter + base styles (page-bg)
- [ ] T0.5 Router skeleton with placeholder pages + AppLayout/AuthLayout
- [ ] T0.6 Deploy to Vercel

### Day 1 — 25/11
- [ ] T1.1 Button (Primary/Outline/Secondary × Default/Hover/Focus/Inactive × icon left/right/both/none)
- [ ] T1.2 Inputs: Input, PasswordInput (eye toggle), SearchInput, Select (Radix)
- [ ] T1.3 Display: Card, Badge (priority/status), ProgressBar (color prop), AvatarStack (+N), Gauge (SVG), Skeleton, EmptyState
- [ ] T1.4 Overlay: Modal (Radix Dialog), Dropdown (Radix), Tabs (Radix), Toast
- [ ] T1.5 `/dev/ui` showcase page for all components
- [ ] T1.6 Types, seed data, `useDataStore`, `useSessionStore`, `fakeApi`
- [ ] T1.7 TopNav (logo, pill tabs with active state, search, bell with dot, user block)
- [ ] T1.8 Sign In + Sign Up with Zod validation, route guard, sign-out from user menu
- [ ] T1.9 Dashboard — pixel-perfect vs `design-ref/dashboard.png`

### Day 2 — 26/11
- [ ] T2.1 All Projects table: search, status filter, sort Newest/Oldest, row → detail
- [ ] T2.2 New Project modal
- [ ] T2.3 Project detail header (breadcrumb, % badge, due-date card) + tabs via URL
- [ ] T2.4 Overview tab
- [ ] T2.5 Tasks board (shared component used by `/tasks` and the project Tasks tab)
- [ ] T2.6 dnd-kit drag between columns + keyboard sensor + "Move to…" in card menu
- [ ] T2.7 Create Task modal (from header button and each column's "Add Task")
- [ ] T2.8 Teams tab + Files tab
- [ ] T2.9 Verify dashboard KPIs update when tasks move

### Day 3 — 27/11 (morning)
- [ ] T3.1 Meetings week grid (prev/next week, Today, meeting blocks, Join)
- [ ] T3.2 New Meeting modal
- [ ] T3.3 Join meeting / transcript (search, language select)
- [ ] T3.4 Chats list + thread view + send message
- [ ] T3.5 Reports (KPI cards, charts, report form, duration filter)
- [ ] T3.6 Notifications dropdown + Search dropdown (recent searches)

### Day 3 — 27/11 (afternoon)
- [ ] T4.1 Responsive pass (section 10)
- [ ] T4.2 Loading/empty/error states on every data view
- [ ] T4.3 Accessibility pass
- [ ] T4.4 P1 extras if time: Profile, Ask AI, global Files
- [ ] T4.5 README, screenshots, final deploy, submit

## 10. Responsive rules (no Figma reference — our design)

| Area | ≥1280 | 768–1279 | <768 |
|---|---|---|---|
| TopNav | Pill tabs | Hamburger drawer below 1024 | Hamburger drawer |
| Dashboard grid | 4 cols | 2 cols | 1 col |
| Projects table | Table | Hide Files + Teams cols | Cards |
| Kanban | 4 columns | Horizontal scroll + snap | Horizontal scroll + snap |
| Meetings | Week grid | Horizontal scroll | Horizontal scroll (day view if time) |
| Chats | List + thread | List + thread | List OR thread with back button |
| Modals | 720px centered | Same | Full-screen sheet |

Touch targets ≥ 44px. Long text truncates with `title`. Charts use `ResponsiveContainer`.

## 11. Interaction decisions (gaps in Figma)

- User avatar block → menu: Profile, Settings, Language, Sign out.
- "View All" on Dashboard cards → the matching page.
- Column ⋮ menu → Sort by due date, Sort by priority.
- Task card ⋮ / click → Move to…, Edit, Delete (with undo toast).
- Chat thread view isn't designed → build from existing tokens: header (name, members), message bubbles, input with send icon.
- Forgot Password → toast "Reset link sent" (no screen).
- Fix Figma typos in UI: Complated → Completed, Passwrod → Password, Resposivness → Responsiveness, DuE Date → Due Date, Creat → Create, mani → main, Summery → Summary, Preformance → Performance.

## 12. Definition of Done

- [ ] All P0 screens match their PNG at 1440px
- [ ] Every visible control works or is visibly disabled; 5 forms validate
- [ ] Drag-and-drop persists across refresh; KPIs are derived
- [ ] 375 / 768 / 1440 layouts work
- [ ] `tsc --noEmit`, lint, tests, build all clean; Vercel link live
- [ ] README: overview, stack + why, architecture, decisions, screenshots, run steps
- [ ] I can explain every file (see `docs/decisions.md`)
