# WCAG Violations Report for Sikt - kunnskapssektorens tjenesteleverandør

**Timestamp:** 2026-11-20T06:27:26.831Z
**URL:** [https://www.sikt.no/](https://www.sikt.no/)
**Total Violations:** 2

## Violation Details

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.header__search`
  - **HTML:** `<button type="button" class="header__search" aria-controls="search">`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="search"


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.nav-section[aria-label=""]:nth-child(1)`
  - **HTML:** `<nav class="nav-section" aria-label="">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

