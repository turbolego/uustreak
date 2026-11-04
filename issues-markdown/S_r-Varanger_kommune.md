# WCAG Violations Report for Sør-Varanger kommune

**Timestamp:** 2026-11-04T05:30:41.063Z
**URL:** [https://sor-varanger.kommune.no/](https://sor-varanger.kommune.no/)
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

- **Target:** `img[alt="Sør-Varanger kommune"]`
  - **HTML:** `<img alt="Sør-Varanger kommune" src="/handlers/bv.ashx/i42c0b4c0-5955-43a1-8861-4d6d4dbcb740/logo-svk-vector-1.svg">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.global-top-container`
  - **HTML:** `<div class="global-top-container">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

