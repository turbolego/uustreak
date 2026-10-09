# WCAG Violations Report for Frende Skadeforsikring AS

**Timestamp:** 2026-10-09T05:00:14.707Z
**URL:** [https://www.frende.no/](https://www.frende.no/)
**Total Violations:** 3

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `form`
  - **HTML:** `<form role="dialog" aria-modal="true" aria-describedby="userNotice-title" class="userNotice-banner">`
  - **Failure summary:** Fix any of the following: ARIA role dialog is not allowed for given element


### ARIA dialog and alertdialog nodes should have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA dialog and alertdialog node has an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-dialog-name?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `form`
  - **HTML:** `<form role="dialog" aria-modal="true" aria-describedby="userNotice-title" class="userNotice-banner">`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.skip`
  - **HTML:** `<div class="skip" aria-label="Gå til hovedinnhold"> <a class="skip-link" href="#main" id="skip-link">Gå til hovedinnhold</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

