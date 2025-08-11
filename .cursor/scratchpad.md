## Background and Motivation

The user wants a full-stack web application to present a self-education syllabus. The frontend should be built with React and include custom styling/structure primitives, a top navigation menu, and a footer. The backend should be built with FastAPI and serve syllabus data plus resource links (including videos of weekly progress). Ultimately the site should enable visitors to browse the syllabus week-by-week, view associated materials, and follow the user’s learning journey.

## Key Challenges and Analysis

1. **Tech Stack Bootstrapping:** Need a clean monorepo or two-folder structure to host a React (Vite) app and a FastAPI server, with shared types via OpenAPI.
2. **Styling Primitives:** Establish a small design-system layer (e.g., a `ui` folder) with reusable React components (Button, Card, Container, Heading, etc.) and global theme (CSS-in-JS or CSS modules).
3. **Syllabus Data Pipeline:** Convert **CSV** exported from Google Sheets (or fetched via Sheets API) into structured JSON so the backend can serve it and the frontend can render it dynamically.
4. **Media Support:** Design a schema to attach arbitrary resource URLs or embedded videos per week.
5. **Routing & State Management:** Simple React Router setup for home page, syllabus overview, and individual week pages.
6. **Testing & CI:** Basic unit tests for backend endpoints and React components; ensure CORS and dev proxy work.

## High-level Task Breakdown

1. **Repository Bootstrap**
   1.1 Create base folder structure: `frontend/`, `backend/`, `.cursor/scratchpad.md` (done). Success: `ls` shows both dirs.
   1.2 Initialize `package.json` with Vite + React + TypeScript. Success: `npm run dev` shows hello world page.
   1.3 Initialize Python virtual env with FastAPI, Uvicorn, Pydantic. Success: `uvicorn main:app` returns 200 on `/health`.
2. **Design System Primitives**
   2.1 Create global CSS vars (colors, spacing).
   2.2 Build React primitives: `Layout`, `TopNav`, `Footer`, `Button`, `Card`, `Container`. Success: Storybook or demo page renders components.
3. **Backend Syllabus Service**
   3.1 **CSV Schema Definition:** Document required columns and sample row in README (see "CSV Format Guidelines" below).
   3.2 **CSV → JSON Loader:** Implement utility to read local `syllabus.csv` (or fetch Google Sheets CSV export URL) and transform into data model.
   3.3 Expose `/syllabus` endpoint returning full structured data.
   3.4 Add endpoint `/week/{num}` returning single week.
   3.5 (Stretch) Scheduled refresh from Google Sheets every X minutes using APScheduler.
   Success: `curl /syllabus` returns valid JSON.
4. **Frontend Syllabus Pages**
   4.1 Fetch `/syllabus` on load, populate context/store.
   4.2 Create `SyllabusOverview` page listing weeks as cards.
   4.3 Create `WeekDetail` page showing week resources and embedded video player if link present.
   Success: navigating to a week URL shows correct data.
5. **Media Upload Placeholder** (stretch)
   5.1 Provide optional admin page to add progress video links (heavy auth omitted). Success: form can POST to backend (mock).
6. **Testing & Quality**
   6.1 Jest/Vitest tests for React components.
   6.2 Pytest tests for FastAPI endpoints.
   6.3 ESLint + Prettier, MyPy for backend.
7. **Deployment (Optional)**
   7.1 Dockerfiles for both services, docker-compose dev stack.

## Project Status Board

- [x] 1.1 Repository structure
- [x] 1.2 Vite + React scaffold
- [x] 1.3 FastAPI scaffold
- [x] 2.1 Global styles
- [x] 2.2 UI primitives
- [x] 3.1 CSV schema defined
- [x] 3.2 CSV → JSON loader
- [x] 3.3 `/syllabus` endpoint
- [x] 3.4 `/week/{num}` endpoint
- [x] 4.1 Data fetching layer
- [x] 4.2 Syllabus overview page
- [x] 4.3 Week detail page
- [x] 2.3 Comic Sans & Rainbow theme applied
- [ ] 6.1 Frontend tests
- [ ] 6.2 Backend tests

## Current Status / Progress Tracking

Created `frontend/` and `backend/` directories. Verified via `ls`. Ready to scaffold Vite + React (task 1.2) and FastAPI (1.3).

Vite React app scaffolded in `frontend/` using `create-vite` with TypeScript template, Git initialized, dependencies installed.
FastAPI backend initialized with `backend/main.py` and `backend/requirements.txt` listing dependencies. Endpoints: `/health`, `/syllabus`, `/week/{num}`.

Added global CSS theme and primitive style classes (`src/styles/theme.css`, `primitives.css`). Implemented React UI primitives: `Container`, `TopNav`, `Footer`, `Layout`, `Card`, and `Button`, and updated `App.tsx` to use them.
Fixed ESLint unused import errors in `App.tsx`; lint now passes.

Backend: Added `backend/syllabus.csv` sample and updated loader to default to that path.
Frontend: Installed `react-router-dom`, set up routing in `App.tsx`, implemented pages `SyllabusOverview` and `WeekDetail` with fetch calls; added proxy config in `vite.config.ts`; updated `TopNav` to use React Router `Link`.

Updated global styles to use Comic Sans font and rainbow gradient background by editing `frontend/src/styles/theme.css`. Verified the site renders with the new playful theme.

Added logging statements and error handling to `_fetch_csv_lines` in backend to surface issues when fetching Google Sheets CSV; raises HTTPException with details.

Added python-dotenv to backend requirements and `load_dotenv` call in `main.py` so variables from `backend/.env` are loaded automatically. Restart server after creating/updating .env.

Changed log level to DEBUG and added detailed CSV content logging after fetch/load.

## Executor's Feedback or Assistance Requests

The Comic Sans and rainbow theme have been applied. Please review visually and let me know if any tweaks are desired or if additional components need style adjustments.

Adjusted styles per user request:

- Added `.menu` flex styles to allow top nav items to spread full width.
- Week cards already full container width.
- Headings now use Papyrus font via new variable in `theme.css`.
- Global text color switched to red. Card backgrounds set to yellow. Nav and footer backgrounds set to yellow. "View details" links now neon green. Added Labubu logo to top nav. Added empty `backend/__init__.py` so Uvicorn can import `backend.main` on Replit. Mounted `frontend/dist` static files in FastAPI so root URL serves React app. Prefixed API routes with `/api` to avoid collision with front-end routes; updated frontend fetch calls. Re-registered API router before static mount to fix 404 on `/api/syllabus`.
  Please review layout.

## CSV Format Guidelines

Create (or export from Google Sheets) a CSV file named `syllabus.csv` with the following columns:

| week | title                                                | readings     | homework                  | videos                  |
| ---- | ---------------------------------------------------- | ------------ | ------------------------- | ----------------------- |
| 1    | Math Bootcamp I: vector spaces, eigen-value problems | Arfken §§1-3 | P-set #1 (eigen-practice) | https://youtu.be/abc123 |

Column details:

- **week**: Integer week number (1-32).
- **title**: Concise topic summary for the week.
- **readings**: Plain-text list of readings/videos separated by `;` (semicolons).
- **homework**: Problem-set or lab title.
- **videos**: Optional comma-separated list of video URLs documenting your progress.

Google Sheets Tips:

1. Create a sheet with matching header row.
2. Share as “Anyone with the link can view”.
3. Obtain CSV export URL: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=csv`.
4. Provide this URL via an environment variable `SYLLABUS_CSV_URL` for the backend. If unset, backend falls back to local `syllabus.csv`.

## Lessons

_(empty – will capture reusable insights or fixes during development)_

Adjusted CSS: removed 100vw references (#root now max-width 100%), ensured cards/containers use 100% width; this prevents layout shift for scrollbars.

Added `box-sizing:border-box` to `.container` and `overflow-x:hidden` on body to eliminate slight right overflow.

- Updated `.replit` to add proper [deployment] section with build and run commands using $PORT, targeting image deployment.
