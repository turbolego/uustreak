# WCAG Violations Report for Åseral kommune

**Timestamp:** 2026-11-22T06:34:24.323Z
**URL:** [https://www.aseral.kommune.no/](https://www.aseral.kommune.no/)
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

- **Target:** `img[alt="Åseral kommune"]`
  - **HTML:** `<img alt="Åseral kommune" src="/handlers/bv.ashx/i59c27e10-601a-466a-bf70-70711e211b22/logo-ei-positiv-kraft.JPG">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

