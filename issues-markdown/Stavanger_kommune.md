# WCAG Violations Report for Stavanger kommune

**Timestamp:** 2026-10-08T10:35:28.901Z
**URL:** [https://www.stavanger.kommune.no/](https://www.stavanger.kommune.no/)
**Total Violations:** 2

## Violation Details

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `div[role="complementary"]`
  - **HTML:** `<div class="row" role="complementary">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#content`
  - **HTML:** `<html lang="nb" id="content">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading

