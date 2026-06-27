# Bangarh Limited - Editorial-Tech Typography & Depth Production Tasks

This file tracks the production steps for the interactive single-page web application with editorial-tech fonts and visual depth.

## Tech Stack & Styling
- **Typography Engine:** Headings in 'Cinzel', Body/inner text in 'Bricolage Grotesque'.
- **Layout Expansion:** Immersive layouts mapping `max-w-[90vw]` and `max-w-7xl` containers.
- **Visual Depth:** Top-border translucent glass highlights, custom radial gradients, and cyan shadow backings.

---

## Production Steps

- [x] **Step 1: Link 'Cinzel' and 'Bricolage Grotesque' via Google Fonts and update Tailwind configs**
  - [x] Add Google Fonts links for 'Cinzel' and 'Bricolage Grotesque'.
  - [x] Update Tailwind configuration extensions with new font mappings.

- [x] **Step 2: Build the floating navigation layer using wide-span alignment**
  - [x] Update floating header to `max-w-[90vw]`.
  - [x] Distribute branding logo (Cinzel) and nav links (Bricolage Grotesque) cleanly across the wide layout.

- [x] **Step 3: Re-engineer the Hero section using bold Cinzel headers and a stylized ambient stat dashboard**
  - [x] Update hero structure to `grid-cols-1 lg:grid-cols-12 gap-12 max-w-[90vw]`.
  - [x] Span text columns across 7 slots, headings across 'Cinzel' variables.
  - [x] Span 3D tilt metrics across 5 slots with expanded card padding, shadow backings (`shadow-lg shadow-cyan-500/5`), and top borders.

- [x] **Step 4: Revamp the AI Profile Matcher and 3-Tab Product Grid with high-depth contrast cards**
  - [x] Add Bricolage Grotesque font features to Matcher scorecard updates.
  - [x] Stretch tab switcher content cards and apply internal gradients `bg-gradient-to-b from-slate-900/50 to-slate-950/50`.

- [x] **Step 5: Format the Success Timeline and Form Module into an integrated 2-column wide layout**
  - [x] Place Client Intake Form and Accordion FAQs side-by-side inside `grid lg:grid-cols-2 gap-12 max-w-7xl`.
  - [x] Apply input fields formatting using Bricolage Grotesque.

- [x] **Step 6: Validate absolute cross-device responsive rendering using the local testing browser**
  - [x] Verify wide viewport margins and ensure no horizontal overflow bugs on mobile.
