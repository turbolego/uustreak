# WCAG Violations Report for Skranevatnet skole

**Timestamp:** 2026-10-09T05:10:35.222Z
**URL:** [https://www.bergen.kommune.no/omkommunen/avdelinger/skranevatnet-skole](https://www.bergen.kommune.no/omkommunen/avdelinger/skranevatnet-skole)
**Total Violations:** 1

## Violation Details

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.js_main_nav`
  - **HTML:** `<nav class="js_main_nav main_nav main_nav_collapsed">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `#innhold`
  - **HTML:** `<main id="innhold" class="smMa desktop_centered" tabindex="-1">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

