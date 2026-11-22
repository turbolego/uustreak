# WCAG Violations Report for Trondheim havn IKS

**Timestamp:** 2026-11-22T06:17:31.756Z
**URL:** [https://trondheimhavn.no/](https://trondheimhavn.no/)
**Total Violations:** 2

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.number-box:nth-child(1) > .front > h4`
  - **HTML:** `<h4>Anløpsoversikt</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#site-navigation`
  - **HTML:** `<nav id="site-navigation" class="main-navigation">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

