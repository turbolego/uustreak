# WCAG Violations Report for Verdensarvsenter for bergkunst- alta museum IKS

**Timestamp:** 2026-11-19T07:06:54.277Z
**URL:** [https://www.altamuseum.no/](https://www.altamuseum.no/)
**Total Violations:** 1

## Violation Details

### ARIA dialog and alertdialog nodes should have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA dialog and alertdialog node has an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-dialog-name?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.cookiebar`
  - **HTML:** `<div class="cookiebar" role="dialog" data-module="modules/Cookiebar" data-module-data="{"cookieName":"consent_cookie","cookieDuration":180}" data-module-inited="true">`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

