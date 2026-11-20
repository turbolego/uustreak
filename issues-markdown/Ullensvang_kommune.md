# WCAG Violations Report for Ullensvang kommune

**Timestamp:** 2026-11-20T06:40:54.934Z
**URL:** [https://ullensvang.kommune.no/](https://ullensvang.kommune.no/)
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

- **Target:** `img[alt="Ullensvang kommune"]`
  - **HTML:** `<img alt="Ullensvang kommune" src="/handlers/bv.ashx/id954b83c-373f-4dab-b1cc-39d7c1cabd3a/ullensvang_formell_logo_rgb.png">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

