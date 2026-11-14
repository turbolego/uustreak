# WCAG Violations Report for Ålesund kommune

**Timestamp:** 2026-11-14T09:01:35.843Z
**URL:** [https://alesund.kommune.no/](https://alesund.kommune.no/)
**Total Violations:** 2

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `img[alt="Ålesund kommune"]`
  - **HTML:** `<img alt="Ålesund kommune" src="/handlers/bv.ashx/i8e58e09e-5c46-4f8b-af79-2b7be89302cd/f0744alesund-logo.svg">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.area-message-list-item__text`
  - **HTML:** `<div class="area-message-list-item__text">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

