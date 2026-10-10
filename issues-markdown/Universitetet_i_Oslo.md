# WCAG Violations Report for Universitetet i Oslo

**Timestamp:** 2026-10-10T08:32:13.321Z
**URL:** [https://www.uio.no/](https://www.uio.no/)
**Total Violations:** 2

## Violation Details

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.uio-info-message`
  - **HTML:** `<div class="grid-container uio-info-message alert &nbsp;" role="banner"> <div class="row"> <div class="col-1-1"> </div> </div> </div>`
  - **Failure summary:** Fix any of the following: Document has more than one banner landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.uio-info-message`
  - **HTML:** `<div class="grid-container uio-info-message alert &nbsp;" role="banner"> <div class="row"> <div class="col-1-1"> </div> </div> </div>`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

