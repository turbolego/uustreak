# WCAG Violations Report for Statens lånekasse for utdanning

**Timestamp:** 2026-10-03T04:19:37.845Z
**URL:** [https://lanekassen.no/#samtykke-banner](https://lanekassen.no/#samtykke-banner)
**Total Violations:** 2

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.c-aksjonsfelt:nth-child(1) > .c-aksjonsfelt-kolonne:nth-child(3) > .c-aksjonsfelt__h3`
  - **HTML:** `<h3 class="c-aksjonsfelt__h3"></h3>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.MuiCardContent-root > div:nth-child(1)`
  - **HTML:** `<div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.MuiCardContent-root > div:nth-child(3)`
  - **HTML:** `<div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

