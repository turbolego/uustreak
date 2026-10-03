# WCAG Violations Report for Sør-Varanger kommune

**Timestamp:** 2026-10-03T04:20:57.051Z
**URL:** [https://sor-varanger.kommune.no/](https://sor-varanger.kommune.no/)
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

- **Target:** `img[alt="Sør-Varanger kommune"]`
  - **HTML:** `<img alt="Sør-Varanger kommune" src="/handlers/bv.ashx/i42c0b4c0-5955-43a1-8861-4d6d4dbcb740/logo-svk-vector-1.svg">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

