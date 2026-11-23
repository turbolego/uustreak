# WCAG Violations Report for Møre og romsdal fylkeskommune

**Timestamp:** 2026-11-23T06:28:29.499Z
**URL:** [https://mrfylke.no/](https://mrfylke.no/)
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

- **Target:** `img[alt="Møre og Romsdal fylkeskommune"]`
  - **HTML:** `<img alt="Møre og Romsdal fylkeskommune" src="/handlers/bv.ashx/i11a6a71f-0d68-4ca1-b3e0-efa107d2c23e/72bb2mrfylke.svg">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.above-header-container`
  - **HTML:** `<div class="above-header-container">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

