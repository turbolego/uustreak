# Highscore Table – Layout Analysis & WCAG 2.2 Audit

## Layout Overview

The highscore table lives in `index.html` → `renderTable()` and renders into `#table-container` wrapped by `.table-wrapper`.

Current structure:
- `<caption>` with date
- `<thead>` → sortable `<th scope="col">` with `<button>` wrappers
- `<tbody>` rows built dynamically per project, columns: Rang, Navn, Se rapportdetaljer, Achievements, Trends, Totalt antall brudd, Streak, then dynamic violation types/tags

Key CSS:
- `styles.css` provides `.table-wrapper { overflow-x:auto; }`, `table { min-width:600px; }`
- Sort buttons have `min-height:44px`, focus outline 2px solid #0066cc

## Issues Identified

### Responsiveness
- **Fixed min-width** 600px forces horizontal scroll on mobile <768px
- No card fallback for small viewports; table just scrolls
- Long column labels (violation types/tags) create very wide tables
- Buttons and interactive elements can shrink below comfortable tap target on narrow screens

### WCAG 2.2 – Code-inspection findings
1. **1.3.1 Info and Relationships** – Table header cells use `scope="col"`, which programmatically associates each data cell with its column header. In the mobile card presentation, visible repeated labels provide additional context for each value.
2. **1.4.4 Resize Text** – Font sizing uses `clamp` which is good, but table cell padding remains fixed, causing overflow at 200% zoom.
3. **1.4.10 Reflow** – Table does not reflow to single column; horizontal scroll required below ~600px → fails AA at 320px width.
4. **2.4.7 Focus Visible** – Focus indicators are present. WCAG 2.2 SC 2.4.7 requires keyboard focus to be visible.
5. **2.4.13 Focus Appearance (AAA)** – Focus outline thickness, contrast, and area require separate evaluation against this AAA criterion. SC 2.4.11 is Focus Not Obscured (Minimum), not Focus Appearance.
6. **2.5.5 Target Size (Enhanced AAA)** – Achievements/Trends buttons are `min-height:36px` → below 44×44 px AAA target, meets 24×24 AA via 2.5.8.
7. **2.5.7 Dragging Movements** – N/A
8. **2.4.1 Bypass Blocks** – Skip link missing, requiring keyboard users to traverse repeated navigation.
9. **4.1.3 Status Messages** – Loading container appears visually only; no `role="status"`/`aria-live`.

### Manual observations
- Skip link missing → keyboard users must tab through entire navigation each page load.
- Dialogs are named by their headings; their detailed content is not assigned as a flattened dialog description.
- Sort buttons aria-label exists but does not announce current sort direction in the label text update timing.
- Table caption not programmatically associated via `aria-labelledby`.
- No `prefers-reduced-motion` handling for potential animations.
- `prefers-contrast` not addressed.

## Improvements Implemented in this PR

### Responsive redesign
- Media query `@media (max-width:768px)` converts table to card view:
  - `thead` is visually clipped rather than removed, preserving accessible column headers
  - Mobile sorting uses a visible column selector and direction button; hidden header buttons are removed from the mobile tab order
  - Each `tr` becomes a bordered card
  - Each `td` shows `data-label` via `td::before`
- `table-wrapper` overflow switches to `visible` on mobile

### WCAG 2.2 fixes
- Added skip link `.skip-link` with focus styles
- `td[data-label]` populated via JS for visible labels in the mobile card presentation
- Table gets `aria-label` and caption linked via `aria-labelledby`
- Focus indicator uses a 3px solid #005fcc outline with positive 2px offset and `:focus-visible`; conformance to AAA SC 2.4.13 requires a separate contrast and area evaluation
- Pointer targets: 44×44 minimum dimensions are declared globally and repeated under `@media (pointer: coarse)`
- Reduced motion media query added
- Dialogs use `aria-labelledby` to expose their headings as names
- Table caption receives unique id and `table` references it

### Accessibility enhancements
- Native `scope="col"` markup preserves table header associations
- Card labels show column names with each value in the mobile presentation
- Minimum tap target enforced

## Remaining / Non-blocking
- 4.1.3 Status messages: loading indicator could use `role="status"` – optional for now
- Color contrast of some secondary text `#666` on white ~5.7:1 passes AA but check large text contrast
- Validate with axe/pa11y after merge

## Evidence
- Before: horizontal scroll only, no labels on mobile
- After: card layout, native table-header associations, and visible focus indicators

Tested via local file load and CSS inspection. Full automated audit requires HTTP server; see wcag-skill validator workflow.
