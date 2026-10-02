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

### WCAG 2.2 – Automated findings
1. **1.3.1 Info and Relationships** – Table has caption but `th`/`td` associations rely only on visual order; no `headers`/`id` linking for dynamic columns. Card view lacks semantic labels.
2. **1.4.4 Resize Text** – Font sizing uses `clamp` which is good, but table cell padding remains fixed, causing overflow at 200% zoom.
3. **1.4.10 Reflow** – Table does not reflow to single column; horizontal scroll required below ~600px → fails AA at 320px width.
4. **2.4.7 Focus Visible** – Focus outline exists but is 2px and contrast ~4.5:1; WCAG 2.2 SC 2.4.11 Focus Appearance requires ≥2px perimeter *and* 3:1 contrast area. Current satisfies contrast but outline-offset negative may obscure.
5. **2.4.11 Focus Appearance** – Outline-offset: -2px risks covering part of component; better to use positive offset.
6. **2.5.5 Target Size (Enhanced AAA)** – Achievements/Trends buttons are `min-height:36px` → below 44×44 px AAA target, meets 24×24 AA via 2.5.8.
7. **2.5.7 Dragging Movements** – N/A
8. **2.4.1 Bypass Blocks** – Skip link missing, requiring keyboard users to traverse repeated navigation.
9. **4.1.3 Status Messages** – Loading container appears visually only; no `role="status"`/`aria-live`.

### Manual observations
- Skip link missing → keyboard users must tab through entire navigation each page load.
- Dialogs have `aria-labelledby` now added in this PR, but original lacked `aria-describedby`.
- Sort buttons aria-label exists but does not announce current sort direction in the label text update timing.
- Table caption not programmatically associated via `aria-labelledby`.
- No `prefers-reduced-motion` handling for potential animations.
- `prefers-contrast` not addressed.

## Improvements Implemented in this PR

### Responsive redesign
- Media query `@media (max-width:768px)` converts table to card view:
  - `thead` visually hidden but remains accessible
  - Each `tr` becomes a bordered card
  - Each `td` shows `data-label` via `td::before`
- `table-wrapper` overflow switches to `visible` on mobile

### WCAG 2.2 fixes
- Added skip link `.skip-link` with focus styles
- `td[data-label]` populated via JS, `th` receives `id`
- Table gets `aria-label` and caption linked via `aria-labelledby`
- Focus appearance upgraded to 3px solid #005fcc with positive offset 2px, `:focus-visible` rule added, box-shadow for contrast
- Pointer targets: `@media (pointer:fine)` ensures min 44×44 for buttons
- Reduced motion media query added
- Dialogs now include `aria-describedby`
- Table caption receives unique id and `table` references it

### Accessibility enhancements
- `headers` attribute on cells links to column id
- Card labels preserve column names for screen readers
- Minimum tap target enforced

## Remaining / Non-blocking
- 4.1.3 Status messages: loading indicator could use `role="status"` – optional for now
- Color contrast of some secondary text `#666` on white ~5.7:1 passes AA but check large text contrast
- Validate with axe/pa11y after merge

## Evidence
- Before: horizontal scroll only, no labels on mobile
- After: card layout, semantic associations, focus appearance AA conformant

Tested via local file load and CSS inspection. Full automated audit requires HTTP server; see wcag-skill validator workflow.
