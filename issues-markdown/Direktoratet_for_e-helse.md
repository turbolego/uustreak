# WCAG Violations Report for Direktoratet for e-helse

**Timestamp:** 2026-10-08T10:23:19.301Z
**URL:** [https://www.helsedirektoratet.no/](https://www.helsedirektoratet.no/)
**Total Violations:** 3

## Violation Details

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.b-button--search`
  - **HTML:** `<button class="b-button b-button--small b-button--search b-button--secondary-dark-filled" aria-controls="searchTray">Søk</button>`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="searchTray"


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.container > .row[role="navigation"]`
  - **HTML:** `<div class="row" role="navigation">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.cookie-panel-banner__title`
  - **HTML:** `<h2 class="cookie-panel-banner__title">Informasjonskapsler (cookies)</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cookie-panel-banner__description`
  - **HTML:** `<p class="cookie-panel-banner__description">Vi bruker informasjonskapsler for å gjøre nettsiden bedre og for å samle statistikk. Vi lagrer aldri opplysninger som kan identifisere deg som person.</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.scrollToTopWrapper`
  - **HTML:** `<div class="l-container scrollToTopWrapper">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

