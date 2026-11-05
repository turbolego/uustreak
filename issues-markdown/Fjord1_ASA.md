# WCAG Violations Report for Fjord1 ASA

**Timestamp:** 2026-11-05T09:18:02.657Z
**URL:** [https://www.fjord1.no/](https://www.fjord1.no/)
**Total Violations:** 2

## Violation Details

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.route-search-component`
  - **HTML:** `<div role="button" tabindex="0" class="route-search-component ">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants. Move them outside of the element, or remove them.


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 15

#### Affected Elements:

- **Target:** `.d-none`
  - **HTML:** `<div class="language-selector d-none d-md-block"> <a href="https://www.fjord1.no/eng"> In English </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.whitespace-bottom-medium > .container > .justify-content-xl-center.row > .col.col-xl-10 > .inner-container > .bm-title.bm-vt-title.bm-block`
  - **HTML:** `<div class="bm-block bm-title bm-vt-title "> <div class="inner-container "> <h2 class="title"> Kjøp billett til ekspressbåtane i dag! </h2> </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bm-rich_text`
  - **HTML:** `<div class="bm-block bm-rich_text bm-vt-rich_text "> <div class="inner-container "> <p>Fjord1 tek over ekspressbåtrutene mellom Bergen, Nordfjord og Sogn 1. desember 2026.</p> </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#lh-book-card, .css-pagp4d > .css-kv1gm8.MuiInputBase-root.MuiOutlinedInput-root > .MuiInputAdornment-positionStart.css-xzo7b7.MuiInputAdornment-root > .notranslate`
  - **HTML:** `<span class="notranslate">​</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#lh-book-card, .lh-origin-field > .css-kv1gm8.MuiInputBase-root.MuiOutlinedInput-root > .MuiInputAdornment-positionStart.css-xzo7b7.MuiInputAdornment-root > .notranslate`
  - **HTML:** `<span class="notranslate">​</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#lh-book-card, .lh-destination-field > .css-kv1gm8.MuiInputBase-root.MuiOutlinedInput-root > .MuiInputAdornment-positionStart.css-xzo7b7.MuiInputAdornment-root > .notranslate`
  - **HTML:** `<span class="notranslate">​</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#lh-book-card, #\:r3\:-label`
  - **HTML:** `<label class="MuiFormLabel-root Mu..." data-shrink="true" for=":r3:" id=":r3:-label">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#lh-book-card, .MuiInputBase-adornedEnd > .MuiInputAdornment-positionStart.css-xzo7b7.MuiInputAdornment-root > .notranslate`
  - **HTML:** `<span class="notranslate">​</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#lh-book-card, #\:r3\:`
  - **HTML:** `<input aria-invalid="false" autocomplete="off" id=":r3:" placeholder="DD.MM.YYYY" readonly="" type="text" inputmode="text" class="MuiInputBase-input M..." value="01.12.2026">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#lh-book-card, .css-ul6kpk > .MuiInputAdornment-positionStart.css-xzo7b7.MuiInputAdornment-root > .notranslate`
  - **HTML:** `<span class="notranslate">​</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bm-button`
  - **HTML:** `<div class="bm-block bm-button bm-vt-button ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bm-trafficmessages`
  - **HTML:** `<div class="bm-block bm-trafficmessages bm-vt-default traffic-messages--list">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bm-column.bm-vt-column.bg-color-secondary`
  - **HTML:** `<div class="bm-block bm-column bm-vt-column bg-color-secondary">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bm-html_snippet.bm-vt-html_snippet.bm-block:nth-child(5)`
  - **HTML:** `<div class="bm-block bm-html_snippet bm-vt-html_snippet ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.zone-footer`
  - **HTML:** `<section class="zone zone-footer">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

