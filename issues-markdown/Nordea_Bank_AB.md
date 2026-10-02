# WCAG Violations Report for Nordea Bank AB

**Timestamp:** 2026-10-02T17:17:36.274Z
**URL:** [https://www.nordea.no/](https://www.nordea.no/)
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

- **Target:** `.no-language-selector`
  - **HTML:** `<div data-wa-region="header" role="navigation" data-hydration-key="aArea" class="no-language-selector">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

