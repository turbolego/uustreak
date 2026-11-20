# WCAG Violations Report for Statskog SF

**Timestamp:** 2026-11-20T06:29:47.246Z
**URL:** [https://www.statskog.no/](https://www.statskog.no/)
**Total Violations:** 1

## Violation Details

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.top`
  - **HTML:** `<div class="top" role="menubar" aria-label="Hovedmeny">`
  - **Failure summary:** Fix any of the following: Element has children which are not allowed: button[aria-controls]

