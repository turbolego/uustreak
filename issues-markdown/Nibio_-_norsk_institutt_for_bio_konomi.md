# WCAG Violations Report for Nibio - norsk institutt for bioøkonomi

**Timestamp:** 2026-11-19T06:50:59.323Z
**URL:** [https://nibio.no/](https://nibio.no/)
**Total Violations:** 3

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `h5`
  - **HTML:** `<h5>Etterlyser et bredere perspektiv på klimatilpasninger i jordbruket</h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `article:nth-child(1) > a > .date-wrapper > h4`
  - **HTML:** `<h4>Fôr av eget korn</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#master-nav`
  - **HTML:** `<nav class="navbar navbar-default sticky-scroller master-nav" id="master-nav">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html class=" js flexbox flexboxl..." lang="no" style="">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading

