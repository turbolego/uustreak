# WCAG Violations Report for Narvik kommune

**Timestamp:** 2026-11-22T05:36:37.055Z
**URL:** [https://www.narvik.kommune.no/](https://www.narvik.kommune.no/)
**Total Violations:** 1

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `img[alt="Narvik kommune"]`
  - **HTML:** `<img alt="Narvik kommune" src="/handlers/bv.ashx/if1a2a44c-48bc-4c8f-92a1-3725423ab847/80a86narvik_logo.svg">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

