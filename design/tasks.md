# Bangarh Limited - Geometric Tech Typography & Depth Production Tasks

This file tracks the production steps for the interactive single-page web application with geometric tech fonts and high-contrast visual depth.

## Tech Stack & Styling
- **Typography Engine:** Headings in 'Syne' (800 extra-bold), Body/inner text in 'Bricolage Grotesque'.
- **Layout Expansion:** Immersive layouts mapping `max-w-[90vw]` and `max-w-7xl` containers.
- **Visual Depth:** Glowing border frames (`border border-white/[0.06] border-t-white/[0.12]`), drop shadows (`shadow-2xl`), and custom radial gradients.

---

## Production Steps

- [x] **Step 1: Link 'Syne' and 'Bricolage Grotesque' via Google Fonts and map them in the Tailwind config**
  - [x] Add Google Fonts links for 'Syne' and 'Bricolage Grotesque'.
  - [x] Update Tailwind configuration extensions with new font mappings.

- [x] **Step 2: Implement the wide-span floating frosted navigation bar**
  - [x] Update floating header to `max-w-[90vw]`.
  - [x] Distribute branding logo (Syne) and nav links (Bricolage Grotesque) cleanly across the wide layout.

- [x] **Step 3: Code the Hero section using the wide 'Syne' headings and high-contrast ambient layout rules exactly like image_6fa641.jpg**
  - [x] Update hero structure to `grid-cols-1 lg:grid-cols-12 gap-12 max-w-[90vw]`.
  - [x] Span text columns across 7 slots, headlines using extra-bold Syne.
  - [x] Span 3D tilt metrics across 5 slots with expanded card padding, top borders (`border-t-white/[0.12]`), and a highlighted active glow border on the bottom-right card.

- [x] **Step 4: Scale the Interactive AI Matcher and 3-Tab Product Grid into full wide-frame wrappers**
  - [x] Add Bricolage Grotesque font features to Matcher scorecard updates.
  - [x] Stretch tab switcher content cards and apply internal gradients `bg-gradient-to-b from-slate-900/40 to-slate-950/40`.

- [x] **Step 5: Adjust the Success Timeline and Lead Capture form into an expansive 2-column horizontal block**
  - [x] Place Client Intake Form and Accordion FAQs side-by-side inside `grid lg:grid-cols-2 gap-16 max-w-7xl`.
  - [x] Apply input fields formatting using Bricolage Grotesque.

- [x] **Step 6: Verify full breakpoint responsiveness from mobile up to ultra-wide desktop views**
  - [x] Verify wide viewport margins and ensure no horizontal overflow bugs on mobile.
