# WCAG Violations Report for Universitetet i Stavanger

**Timestamp:** 2026-10-08T10:48:28.822Z
**URL:** [https://www.uis.no/nb](https://www.uis.no/nb)
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

- **Target:** `#block-languageswitcher`
  - **HTML:** `<div id="block-languageswitcher" role="navigation" class="block language-switcher-language-url">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

