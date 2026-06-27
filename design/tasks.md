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

- [x] **Step 8: Interactive modal expansion systems for platforms switcher cards**
  - [x] Code the structural hidden Modal components (`id="modal-ed"`, `id="modal-career"`, etc.) in the HTML tree.
  - [x] Write vanilla JavaScript event listeners to catch click actions on "Learn More" buttons.
  - [x] Implement GSAP timelines to smoothly open and close the detailed panels with a subtle spring ease.
  - [x] Populate the inside of the modals with complete, rich data (IELTS Prep modules, SOP toolkits, ATS resume frameworks).
  - [x] Test modal closing interactions (ESC key, clicking outside the card, Close button).
  - [x] Verify responsive scaling to ensure long detailed text scrolls cleanly inside the modal overlay on mobile screens.

- [x] **Step 9: Align first-look above-the-fold layout explicitly with image_708a61.jpg**
  - [x] Link 'Syne' and 'Bricolage Grotesque' fonts and extend custom gradients in Tailwind.
  - [x] Code the precise glassmorphic nav bar with the active glowing underline and inline SVG logo.
  - [x] Layout the asymmetric hero section matching the exact text wrap and spacing.
  - [x] Recreate the three floating 3D-perspective metrics cards with matching icons and neon-colored outer rings.
  - [x] Test overall responsivity across screen sizes to ensure the layout matches image_708a61.jpg.

- [x] **Step 10: Toggle navigation styles back and forth based on user specifications**
  - [x] Retain inline SVG interlocking logo mesh, text gradient headlines, and 3D metrics panels.

---

## Interactivity & Production Readiness Steps

- [x] **Step 1: Write navigation smooth scroll tracking and active link highlight script blocks**
  - [x] Add GSAP ScrollToPlugin for hardware-accelerated smooth scrolling.
  - [x] Intercept all local anchor link clicks to scroll to target offset with fixed navbar buffer.
  - [x] Ensure intersection observer correctly highlights active link.
- [x] **Step 2: Inject toggle mechanics for the Interactive AI Matcher and 3-Tab Ecosystem layouts**
  - [x] Enhance Matcher updating logic to use smooth GSAP slide-in/fade animations.
  - [x] Refactor 3-Tab grid switcher with GSAP cross-fade scale animations on tab shift.
- [x] **Step 3: Set up event bindings for the Expansion Modals and sliding FAQ Accordion nodes**
  - [x] Wire up open/close triggers for the detail modals (ESC, backdrop, close button).
  - [x] Update Accordion transitions to support max-height up to 384px (max-h-96) for large content.
- [x] **Step 4: Add form input criteria checks and custom toast notification logic blocks**
  - [x] Validate Name input (>= 2 chars) and Context details text (>= 10 chars).
  - [x] Build and inject a premium glassmorphic floating toast notification component.
  - [x] Intercept default page reload, show toast success, and reset form.
- [x] **Step 5: Execute comprehensive browser simulation tests to verify all tap and click states work flawlessly on both mobile and desktop**
  - [x] Ensure correct styling, layout responsiveness, and full interactivity coverage.

---

## Programs & Digital Toolkits Button Actions

- [x] **Step 1: Assign unique IDs or data attributes to the cards and action buttons in the HTML layout**
  - [x] Assign IDs to reserve seat, download bundle, and inquire buttons in #academy section.
- [x] **Step 2: Inject the JavaScript event listeners handling automated scrolling, input updates, and checkout delays**
  - [x] Link Reserve Seat to auto-select 'test-prep' option and smooth scroll.
  - [x] Link Inquire for Campus to auto-select 'b2b-institutional' option, apply neon highlight flash, and smooth scroll.
  - [x] Implement checkout delay and text loading spinner on Download Bundle.
- [x] **Step 3: Build a custom CSS toast overlay component to handle purchase completion message responses**
  - [x] Leverage the custom glassmorphic floating toast notification container.
- [x] **Step 4: Verify font matching across button labels, ensuring text scales nicely during dynamic text-swapping interactions**
  - [x] Ensure button font and style integrity are maintained during text-swap.
- [x] **Step 5: Run the integrated browser test runner to guarantee link anchors execute seamlessly across desktop and mobile screens**
  - [x] Verify click anchors, dropdown selections, checkout simulation, and toast notifications.

---

## Transaction Gatekeeping & UPI Checkout Modal

- [x] **Step 1: Bind click identifiers to the specific cards and premium items modeled in image_725c59.png**
  - [x] Map Reserve Seat button (IELTS Prep, ₹20,900) and Download Bundle button (SOP Blueprint, ₹4,100) to triggerUPICheckout.
- [x] **Step 2: Inject a responsive, blurred glass backdrop Checkout Modal container at the root of the body**
  - [x] Inject upi-payment-modal with glassmorphic styling, title/price displays, and close triggers.
- [x] **Step 3: Implement an open-source QR code rendering engine script (via a secure CDN) inside the page header to draw checkout parameters dynamically**
  - [x] Load qrcode.js dynamically from cdnjs and instantiate dynamic QR rendering on checkout triggers.
- [x] **Step 4: Write verification callback simulations to unlock the corresponding digital assets upon successful authorization**
  - [x] Code simulateVerification() to trigger showToast and download the premium blueprint file upon authorization.
- [x] **Step 5: Test mobile browser links to ensure cross-app intent mapping works perfectly**
  - [x] Implement the mobile-intent button linking direct to the UPI app scheme upi://pay on small devices.




