# WCAG Violations Report for NITO - Norges ingeniør- og teknologiorganisasjon

**Timestamp:** 2026-10-10T08:04:43.211Z
**URL:** [https://www.nito.no/](https://www.nito.no/)
**Total Violations:** 1

## Violation Details

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.default-header__menu`
  - **HTML:** `<nav class="default-header__menu" data-vanilla-component="main-menu">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

