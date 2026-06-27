# Bangarh Limited - Luminous Mesh & Roadmap Restoration Tasks

This file tracks the production steps for the Academic Prep & Digital Toolkit section.

## Tech Stack & Styling
- **Typography Engine:** Block text headers in 'Syne' (800 extra-bold), details in 'Bricolage Grotesque'.
- **Structure:** 3-column wide responsive grid (`max-w-[90vw] mx-auto`) directly beneath the roadmap.
- **Visual Style:** Low-opacity glassmorphic overlays (`bg-slate-950/30 backdrop-blur-xl border border-white/[0.06] rounded-xl p-8`).

---

## Production Steps

- [x] **Step 1: Inject 'Syne' and 'Bricolage Grotesque' configurations, web layout wrappers, and custom glow animations**
  - [x] Add Google Fonts links for 'Syne' and 'Bricolage Grotesque'.
  - [x] Update Tailwind configuration extensions with new font mappings.

- [x] **Step 2: Build the wide-span floating glass navigation header with integrated hover states**
  - [x] Update floating header to `max-w-[90vw] bg-[#0A1128]/60 backdrop-blur-xl border border-white/[0.06] rounded-2xl mx-auto mt-4 px-8 py-4`.
  - [x] Put branding logo image (`assets/logo.png`) with blend filters and Bricolage Grotesque nav links.

- [x] **Step 3: Implement the Hero section using wide headers, asymmetric layout spans, and 3D-angled floating metric cards**
  - [x] Present headline in bold Syne and subheadline in Bricolage Grotesque.
  - [x] Build three asymmetric layered 3D-tilted glass panels (Student Placements, Corporate Partners, Global Reach) with corner auras.

- [x] **Step 4: Construct the interactive 3-tab platform switcher with layered mesh cards**
  - [x] Set up tab toggles `[Ed-Pathways] | [Career-Core] | [Placement-Max]`.
  - [x] Build 3 content cards using gradient `bg-gradient-to-br from-slate-950/80 via-[#0B132B]/50 to-[#020617]` with neon corner lights.

- [x] **Step 5: Lock in the vertical, success roadmap layout exactly as modeled in image_7003bb.png**
  - [x] Retain vertical alternating roadmap sequence with center progress bar fill animations.

- [x] **Step 6: Assemble the Lower Form and FAQ layout in a balanced horizontal row framework**
  - [x] Place Client Intake Form and Accordion FAQs side-by-side inside `grid lg:grid-cols-2 gap-16 max-w-7xl`.

- [x] **Step 7: Execute browser agent tests to verify zero text clip across mobile viewports**
  - [x] Verify wide viewport margins and ensure no horizontal overflow bugs on mobile.
