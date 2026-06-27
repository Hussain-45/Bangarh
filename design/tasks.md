# Bangarh Limited - Success Roadmap Restoration Production Tasks

This file tracks the production steps for the Success Roadmap vertical card layout restoration.

## Tech Stack & Styling
- **Typography Engine:** Section headings in 'Syne', details in 'Bricolage Grotesque'.
- **Structure:** Vertical stacked card layout (`max-w-5xl mx-auto space-y-6`) with a downward connecting line track.

---

## Production Steps

- [x] **Step 1: Re-structure the `#timeline` container into a full-width vertical stacked configuration**
  - [x] Update `#timeline` layout with vertical stacked cards.
  - [x] Set up cards containing details on all 4 placement phases.

- [x] **Step 2: Implement the absolute-positioned vertical downward connecting path line behind the step indicators**
  - [x] Position the absolute vertical line behind step circles.
  - [x] Style step indicators as circular rings with neon glow shadows.

- [x] **Step 3: Format step headings and text descriptions using the Syne and Bricolage Grotesque typographic hierarchy**
  - [x] Apply Syne font styles to headings.
  - [x] Style step subheadings and descriptions using Bricolage Grotesque.

- [x] **Step 4: Validate that hover states on individual roadmap rows preserve card dimension and line alignments**
  - [x] Audit hover transition scaling and border glow rules.

- [x] **Step 5: Test the layout inside the local browser suite to guarantee flawless responsiveness across mobile and desktop**
  - [x] Verify vertical line alignments and ensure clean margins.
