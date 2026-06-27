# Bangarh Limited - Ultra-Wide Typography Overhaul Production Tasks

This file tracks the production steps for the interactive single-page web application with geometric fonts and ultra-wide layouts.

## Tech Stack & Styling
- **Typography Engine:** Headings in 'Syne', Body text in 'Space Grotesk'.
- **Layout Expansion:** Immersive layouts mapping `max-w-[90vw]` and `max-w-7xl` containers.
- **Backend API Layer:** Node.js / TypeScript, Express, Cors.

---

## Production Steps

- [x] **Step 1: Link 'Syne' and 'Space Grotesk' fonts via Google Fonts and extend Tailwind configurations**
  - [x] Add Google Fonts links for 'Syne' and 'Space Grotesk'.
  - [x] Update Tailwind configuration extensions with new font mappings.

- [x] **Step 2: Expand the floating navigation header to sit wide across the screen top**
  - [x] Update floating header to `max-w-[90vw]`.
  - [x] Distribute branding logo and nav links cleanly across the wide layout.

- [x] **Step 3: Redesign the Hero Zone using an asymmetric 12-column layout to fill out the horizontal viewport**
  - [x] Update hero structure to `grid-cols-1 lg:grid-cols-12 gap-8 max-w-[90vw]`.
  - [x] Span text columns across 7 slots, headings across 'Syne' variables.
  - [x] Span 3D tilt metrics across 5 slots with expanded card padding and typography sizes.

- [x] **Step 4: Expand the AI Matcher tool and 3-Tab Product Grid to sit wide across the layout canvas**
  - [x] Expand matcher card wrappers to `max-w-7xl`.
  - [x] Stretch tab switcher content cards and add substantial internal padding.

- [x] **Step 5: Format the Success Timeline and Intake Form to balance screen margins beautifully**
  - [x] Format Success Timeline rows to stretch horizontally.
  - [x] Place Client Intake Form and Accordion FAQs side-by-side inside `grid lg:grid-cols-2 gap-12 max-w-7xl`.

- [x] **Step 6: Test cross-device layout rendering on ultra-wide desktop monitors down to mobile screens**
  - [x] Verify wide viewport margins and ensure no horizontal overflow bugs on mobile.
