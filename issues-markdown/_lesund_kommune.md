# WCAG Violations Report for Ålesund kommune

**Timestamp:** 2026-10-10T08:36:33.197Z
**URL:** [https://alesund.kommune.no/](https://alesund.kommune.no/)
**Total Violations:** 1

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `img[alt="Ålesund kommune"]`
  - **HTML:** `<img alt="Ålesund kommune" src="/handlers/bv.ashx/i8e58e09e-5c46-4f8b-af79-2b7be89302cd/f0744alesund-logo.svg">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

