# WCAG Violations Report for Åmli kommune

**Timestamp:** 2026-11-23T06:04:44.564Z
**URL:** [https://www.amli.kommune.no/](https://www.amli.kommune.no/)
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

- **Target:** `img[alt="Åmli kommune"]`
  - **HTML:** `<img alt="Åmli kommune" src="/handlers/bv.ashx/i096ddb6b-152d-4033-a7a9-c29c03646f5d/76f8bamli_kommunelogo.svg">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

