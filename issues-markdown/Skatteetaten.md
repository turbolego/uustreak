# WCAG Violations Report for Skatteetaten

**Timestamp:** 2026-10-08T10:32:05.441Z
**URL:** [https://www.skatteetaten.no/person/](https://www.skatteetaten.no/person/)
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

- **Target:** `#cookie-banner`
  - **HTML:** `<aside id="cookie-banner" class="cookie-container" tabindex="-1">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

