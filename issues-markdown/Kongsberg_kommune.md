# WCAG Violations Report for Kongsberg kommune

**Timestamp:** 2026-10-10T08:35:05.065Z
**URL:** [https://www.kongsberg.kommune.no/](https://www.kongsberg.kommune.no/)
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

- **Target:** `.navbar`
  - **HTML:** `<nav class="navbar navbar-default navbar-fixed-top header__nav header header__shadow">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

