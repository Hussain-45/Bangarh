# Bangarh Limited - Full-Stack Website Production Tasks

This file tracks the production steps for the interactive single-page web application with backend API and SQL schemas.

## Tech Stack & Styling
- **Frontend Visual Aesthetic:** Cinematic Dark Tech & Neo-Brutalist Glassmorphism.
- **Backend API Layer:** Node.js / TypeScript, Express, Cors.
- **Data Persistence:** Relational database schema in `schema.sql`.

---

## Production Steps

- [x] **Step 1: Write the single-page animated front-end layout structure in `public/index.html`**
  - [x] Relocate and update page layouts under `public/index.html`.
  - [x] Remove root-level static `index.html`.

- [x] **Step 2: Establish the Express server workspace inside the `server/` directory using TypeScript**
  - [x] Write `server/package.json` with Express and TypeScript libraries.
  - [x] Write `server/tsconfig.json` compiler requirements.
  - [x] Write Express routing server in `server/src/app.ts`.

- [x] **Step 3: Write the relational `schema.sql` layout rules**
  - [x] Create `server/database/schema.sql` with structured `users` and `intake_submissions` schemas.

- [x] **Step 4: Hook the front-end Fetch API parameters directly to the Node.js routes to enable live data handling**
  - [x] Configure `public/index.html` Pre-Assessment click event handlers to call `POST /api/v1/assessment/match`.
  - [x] Configure `public/index.html` Intake Form submit handlers to call `POST /api/v1/intake`.

- [x] **Step 5: Test overall layout responsiveness and API payload reliability across mobile and desktop mock screens**
  - [x] Run Node.js development server.
  - [x] Audit responsive grids and test form validation triggers.
