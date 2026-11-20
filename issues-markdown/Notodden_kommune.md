# WCAG Violations Report for Notodden kommune

**Timestamp:** 2026-11-20T06:23:52.719Z
**URL:** [https://notodden.kommune.no/](https://notodden.kommune.no/)
**Total Violations:** 1

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `a[href$="www.notodden.no"]`
  - **HTML:** `<a class="campaign__item" href="https://www.notodden.no" aria-label="Bo, jobbe, oppleve og studere (Åpner i nytt vindu)" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

