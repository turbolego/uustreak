# WCAG Violations Report for Fjord1 ASA

**Timestamp:** 2026-10-08T10:29:07.815Z
**URL:** [https://www.fjord1.no/](https://www.fjord1.no/)
**Total Violations:** 2

## Violation Details

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.route-search-component`
  - **HTML:** `<div role="button" tabindex="0" class="route-search-component ">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.d-none`
  - **HTML:** `<div class="language-selector d-none d-md-block"> <a href="https://www.fjord1.no/eng"> In English </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.zone-main`
  - **HTML:** `<section class="zone zone-main header-zone-has-bg-image post-header-zone-is-without-bg-image ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.zone-footer`
  - **HTML:** `<section class="zone zone-footer">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

