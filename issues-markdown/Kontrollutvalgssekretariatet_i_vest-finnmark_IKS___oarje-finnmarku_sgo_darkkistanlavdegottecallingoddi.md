# WCAG Violations Report for Kontrollutvalgssekretariatet i vest-finnmark IKS – oarje-finnmarku sgo darkkistanlavdegottecallingoddi

**Timestamp:** 2026-11-23T06:24:51.560Z
**URL:** [https://kusek.no/](https://kusek.no/)
**Total Violations:** 2

## Violation Details

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.menu_breakpoint`
  - **HTML:** `<nav class="bricks-nav-menu-wrapper menu_breakpoint" aria-label="Navigasjonsmeny">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#brx-new-tab-link-description`
  - **HTML:** `<span id="brx-new-tab-link-description" class="screen-reader-text">Åpnes i en ny fane</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

