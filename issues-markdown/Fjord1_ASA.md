# WCAG Violations Report for Fjord1 ASA

**Timestamp:** 2026-11-06T05:29:54.149Z
**URL:** [https://www.fjord1.no/](https://www.fjord1.no/)
**Total Violations:** 2

## Violation Details

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `.route-search-component`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 15

#### Affected Elements:

- `.d-none`
- `.whitespace-bottom-medium > .container > .justify-content-xl-center.row > .col.col-xl-10 > .inner-container > .bm-title.bm-vt-title.bm-block`
- `.bm-rich_text`
- `#lh-book-card,.css-pagp4d > .css-kv1gm8.MuiInputBase-root.MuiOutlinedInput-root > .MuiInputAdornment-positionStart.css-xzo7b7.MuiInputAdornment-root > .notranslate`
- `#lh-book-card,.lh-origin-field > .css-kv1gm8.MuiInputBase-root.MuiOutlinedInput-root > .MuiInputAdornment-positionStart.css-xzo7b7.MuiInputAdornment-root > .notranslate`
- `#lh-book-card,.lh-destination-field > .css-kv1gm8.MuiInputBase-root.MuiOutlinedInput-root > .MuiInputAdornment-positionStart.css-xzo7b7.MuiInputAdornment-root > .notranslate`
- `#lh-book-card,#\:r3\:-label`
- `#lh-book-card,.MuiInputBase-adornedEnd > .MuiInputAdornment-positionStart.css-xzo7b7.MuiInputAdornment-root > .notranslate`
- `#lh-book-card,#\:r3\:`
- `#lh-book-card,.css-ul6kpk > .MuiInputAdornment-positionStart.css-xzo7b7.MuiInputAdornment-root > .notranslate`
- `.bm-button`
- `.bm-trafficmessages`
- `.bm-column.bm-vt-column.bg-color-secondary`
- `.bm-html_snippet.bm-vt-html_snippet.bm-block:nth-child(5)`
- `.zone-footer`
