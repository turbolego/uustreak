# WCAG Violations Report for Helfo

**Timestamp:** 2026-11-19T06:41:07.447Z
**URL:** [https://www.helfo.no/](https://www.helfo.no/)
**Total Violations:** 2

## Violation Details

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.b-button--search`
  - **HTML:** `<button class="b-button b-button--small b-button--search b-button--secondary-dark" aria-controls="searchTray">Søk</button>`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="searchTray"


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.cookie-panel-banner__title`
  - **HTML:** `<h2 class="cookie-panel-banner__title">Informasjonskapsler</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cookie-panel-banner__description`
  - **HTML:** `<p class="cookie-panel-banner__description">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.scrollToTopWrapper`
  - **HTML:** `<div class="l-container scrollToTopWrapper">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

