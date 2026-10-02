# WCAG Violations Report for SEB - Skandinaviska Enskilda Banken NUF

**Timestamp:** 2026-10-02T17:20:28.526Z
**URL:** [https://sebgroup.com/](https://sebgroup.com/)
**Total Violations:** 1

## Violation Details

### ARIA dialog and alertdialog nodes should have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA dialog and alertdialog node has an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-dialog-name?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `pwng-mobile-menu`
  - **HTML:** `<pwng-mobile-menu role="dialog" _nghost-ng-c585049648="" class="ng-tns-c585049648-1 ng-tns-c3777577788-0 ng-star-inserted">`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

