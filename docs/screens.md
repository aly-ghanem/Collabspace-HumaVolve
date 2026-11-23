# Screen Specs

Each screen: PNG in `design-ref/`, content, interactions. 👁 = verified visually; 📝 = from Figma layer text only (confirm against the PNG).

## Figma node IDs (file key `Q2FK2TwYA6AUcSpJcdnupE`)

| Screen | Node |
|---|---|
| Dashboard (variables source) | 285:12895 |
| Sign in | 225:9362 |
| Sign up | 225:9824 |
| Navbar component | 108:2705 |
| All Projects | 114:1915 |
| Project / Overview | 181:1158 |
| Project / Tasks | 181:1418 |
| Project / Teams | 181:1982 |
| Project / Files | 181:2367 |
| Tasks Page | 107:11473 |
| Chats | 126:2481 |
| Meetings | 114:2597 |
| Meetings / join | 114:3107 |
| Reports | 104:2653 |
| Ask AI | 225:9992 |
| Ask AI / chat | 229:5948 |
| Files (global) | 139:1219 |
| Profile / overview | 214:8454 |
| Profile / settings | 214:8536 |
| Profile / tasks | 214:8573 |
| Profile / files | 214:8743 |
| New Project modal | 139:2255 |
| Create Task modal | 141:2397 |
| New Meeting modal | 139:2808 |
| Notifications dropdown | 209:6425 |
| Search dropdown | 225:10323 |
| Teams / Duration / My task / Language menus | 139:1513 / 139:1583 / 139:2654 / 139:2996 |
| Project report menu | 163:1089 |
| Button component set | 57:1405 |
| Icons | 63:2299 |
| Typography scale | 57:2268 |

## MCP capture status (T0.2)

- `get_variable_defs` on `285:12895` — done (24/11). Values below.
- `get_design_context` on all table nodes — **blocked** by Figma Starter MCP rate limit after the variables call. Re-run when quota resets; none of the screen measurement sections below have been filled from design context yet.

### Variables from `285:12895` (`get_variable_defs`)

| Name | Value |
|---|---|
| Primary color/primary color-500 | `#005AFB` |
| Primary color/primary color-50 | `#E6EFFF` |
| Primary Color-Blue/500 | `#3B82F6` (Figma inconsistency — do not use) |
| secodary/secodary-500 | `#27272B` |
| secodary/secodary-50 | `#E9E9EA` |
| Secondary | `#525256` |
| Text Color | `#000712` |
| Default Black | `#191919` |
| Black | `#252525` |
| Text Color/600-Body | `#718096` |
| sub color | `#4A4A4A` |
| Gray/03 | `#9F9F9F` |
| Gray/05 | `#E8E8E8` |
| Gray/06 | `#F3F3F3` |
| Gray/30 | `#F2F4F7` |
| Gray/500 | `#606C80` |
| BG label color | `#F3F4F6` |
| BG color | `#F6F8FA` |
| White / Others/White | `#FFFFFF` |
| Support Green Normal / Light | `#2BA52E` / `#EAF6EA` |
| Support Red Normal / Light | `#DB302A` / `#FBEAEA` |
| Support Yellow Normal / Light | `#E6BA0E` / `#FFFAE7` |
| Support Dark orange 500 / 50 | `#FA9E00` / `#FFF5E6` |
| Support Violet 2 500 / 50 | `#7D2D7E` / `#F2EAF2` |
| Support greeenish 500 / 50 | `#04B5AE` / `#E6F8F7` |
| Team C Text/H4 | Inter Semi Bold 31 / 600 / 1.5 |
| Team C Text/H6 | Inter Medium 20 / 500 / 1.5 |
| Semibold 16-24 | Inter Semi Bold 16 / 600 / 24 |
| Regular 14-20 | Inter Regular 14 / 400 / 20 |
| Team C Text/small Body r | Inter Regular 14 / 400 / 1.5 |
| 12px/Regular | Inter Regular 12 / 400 / 18 |
| Team C Text/Small Caption | Inter Regular 12 / 400 / 1.5 |
| Medium 12-16 | Inter Medium 12 / 500 / 16 |
| Extra Bold/10 | Inter Extra Bold 10 / 800 / 16 |

## Global measurements (fill from the first MCP capture run)

| Item | Value |
|---|---|
| Page horizontal padding | _(pending get_design_context)_ |
| Gap between cards | _(pending get_design_context)_ |
| Card radius | _(pending get_design_context)_ |
| Card padding | _(pending get_design_context)_ |
| Card shadow / border | _(pending get_design_context)_ |
| TopNav height | 72 (from Figma) |
| Nav pill radius / padding | _(pending get_design_context)_ |
| Button height | 38–40 |
| Input height / radius | _(pending get_design_context)_ |
| Modal width | 720 (from Figma) |

## TopNav 👁
Logo "Collabspace" · pill group: Dashboard, Projects, Tasks, Chats, Meetings, Reports (active = primary-500 fill, white text) · search field "Search" · bell with red dot → Notifications dropdown · name "Mohamed Salah" + role "UI/UX" + avatar → user menu.

## Sign In 📝
"Sign In" · "Welcome back, you've been missed!" · Sign With Google · OR · Email · Password · Remember Me · Forget Password? · "Don't have an account yet? Sign Up" · language selector (English).
Validation: email format, password required (min 8).

## Sign Up 📝
"Sign Up" · "Connect with every application!" · Sign With Google · OR · Full Name · Email · Password · Remember Me · "Already have an account? Sign In".

## Dashboard 👁 (`dashboard.png`)
Row 1 — 4 stat cards: Pending Tasks 32 (+9%, 32/94, orange bar) · In Progress 40 (+12%, 40/94, blue) · Completed 22 (+16%, 22/94, green) · Completion Rate 33% (+22%, gauge).
Row 2 — Project overview area chart (Jan–Jun, 0–25k; filters "All Projects", "This Year") · Active Projects (Alpha violet Task 100/140, SepetGo teal Task 52/120, View All) · Recent Files (3 items with download icon, View All).
Row 3 — Tasks (Create Wireframes High due today 82%, User Research Medium Dec 18 52%, Design System Updates Low Dec 20 42%) · Teams (dropdown UI/UX; Name/Tasks list with progress) · Upcoming meetings (Design Review Today 14:00–15:00 +3, Sprint Planning Meeting Dec 12 13:00–13:30 +4, UX Feedback Session Dec 18 14:00–15:00 +5) · Ask AI card (robot, "ask me anything about...", input + send).

## All Projects 👁 (`all-projects.png`)
"All Projects" + "Add Project +" · search · dropdowns "All Projects", "Newest" · table: Project Name (icon) | Start Date | Deadline | Status (active red / Done green) | Files ("22 Files") | Teams (avatars) | Priority (High red / Medium yellow).

## New Project modal 📝
New Project · Project Name · Priority (High) · Add Guests (@mention chips) · Start Date · End Date · Add Project Files (drag and drop or click to upload).

## Project detail — header 👁
Breadcrumb Projects › Alpha · title + "42% Completed" green badge · Due Date card (progress, Start Date Oct 12, Deadline Dec 25) · tabs Overview / Tasks / Teams / Files.

## Project — Overview 👁 (`project-overview.png`)
Description card · Project overview chart · Product Details (Project Type SaaS, Start Date Oct 12, Deadline Dec 25, Priority High, Total Tasks 140) · Project Progress gauge 78% (62/94 pending, 36/94 in progress, 42/94 completed) · Team Members (dropdown UI/UX; Mohanad wahib Leader, Sara Hassan, Ali Mohamed, Khalid Mousa).

## Project — Tasks 📝
Same Kanban as Tasks board, filtered to project.

## Project — Teams 📝
Groups UI/UX, Frontend, Backend, Marketing. Rows: name, role (Leader, UI Designer, UX Designer, UX Researcher, Product Designer, Visual Designer, React Dev, API Engineer, …), task ratio (12/20).

## Project — Files 📝
Recent Files cards (Design mockups · By Ahmed Hassan · 6.4 MB • 1h ago) · All Files list.

## Tasks board 👁 (`tasks.png`)
Search · "Project 1" dropdown · "My Task" dropdown (My Tasks, UI/UX Tasks, Front End Tasks, Back End Tasks, All Tasks) · "Create Task +".
Columns with tinted headers + ⋮: To-do (white), In Progress (primary-50), In Review (violet-50), Completed Tasks (green-50). Dashed "Add Task +" at top of each.
Card: title, priority badge, description, optional Progress bar + %, optional reviewer row (avatar, name, "Reviewer"), avatars, comment count, due date.

## Create Task modal 📝
Create Task · Task Name · Start Date · End Date · Add Guests · Add Task Files.

## Chats 👁 (`chats.png`)
Left panel: "Chats" + search icon · inbox · Project Chats · divider · Recent: channel items (Pet website Project / Public Channel / preview / 5:22 pm) and direct items (avatar, name, preview, time). Right: "Select Chat" empty state.
Thread view: not designed — see PLAN.md section 11.

## Meetings 📝
"Meetings" · "December 2025" · "This Week" · time column 9:00–14:00 · days Mon–Thurs with "Today 18" · meeting blocks (Design Review 1:00–1:30 PM +5 Join, Alignment Meeting, API Design Meeting, Frontend Retrospective +7).

## New Meeting modal 📝
New Meeting · Meeting Subject · Select Date · Select Time · Select Duration · Add Guests · "The Goal of this meeting is ..." · Add Note.

## Join meeting / transcript 📝
Meeting title · "Meeting Transcripts" · language (English) · search · lines: timestamp · speaker · text (Mohanad Wahib 00:01, Ahmed Hassan 00:40, Omar Khaled 01:23, Mahmoud Ashraf 04:48, Nadir Mustafa 06:15).

## Reports 📝
KPI cards: Task Completion Rate 70% (+3%), Projects Completion Rate 88% (+6%), Teams Activity Rate 67% (−4%) · Projects Progress chart (All Projects) · "Submit a detailed report" (Select Report Type: Project Progress, Meetings Summary, Worker Performance, Tasks, KPIs; Start Date; End Date) · Worker Activity Rate (Monthly) · Task Completion Time vs Deadline (0–100, Jan–Jun).

## Ask AI 📝
"Hi There 👋" · "Start chatting with Collabspace" · input "ask me anything about...". Chat state: messages + "Message to ChatBot..." input.

## Profile 📝
Header: name, email, "Joined Apr 2022", Completed Tasks 140, Hours Worked 345 · tabs Overview / Tasks / Files (+ Settings).
Overview: About paragraph + Recent Activities (Completed task…, Updated…, Joined meeting…, Commented on… with relative times).
Tasks: To do (4) and Done (6) lists. Files: file cards. Settings: "Personal Info — You can change your personal information settings here".

## Overlays 📝
- Notifications: Meeting Reminder 13:00 "Review Meeting starts in 30 minutes." · Task Overdue 14:30 "Create Wireframes is overdue by 1 day." · Team Update Yesterday "Ali Mohamed joined Project 2."
- Search: Recent Searches (UI/UX Tasks, Project 1 meetings, Ali Hassan).
- Teams filter: UI/UX, Front End, Back End, Graphic Designers.
- Duration filter: Today, This Week, This Month, Last Three Month, This Year.
- Language: English, Arabic, France.

## Not to build
Wireframes 1–27, DummyUI, Case Study, Competitive Analysis, Persona templates (UX page artifacts).
