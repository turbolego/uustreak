# WCAG Violations Report for Dagbladet AS

**Timestamp:** 2026-11-13T05:25:42.846Z
**URL:** [https://www.dagbladet.no/](https://www.dagbladet.no/)
**Total Violations:** 4

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.row_header_text`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 "><span class="lab-row-header-title"></span></h5>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.row_header_text`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 "><span class="lab-row-header-title"></span></h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `._topnav_aogjo_45`
  - **HTML:** `<nav class="_topnav_aogjo_45">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `._skiplink_aogjo_13`
  - **HTML:** `<div class="_skiplink_aogjo_13"><a href="#main" aria-label="Hopp til hovedinnholdet">Hopp til hovedinnholdet</a></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#am-branding > p`
  - **HTML:** `<p> Dagbladet er en del av Aller Media. Aller Media er ansvarlig for dine data på denne nettsiden. &nbsp;<a href="https://personvern.aller.no/personvern">Les mer</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

