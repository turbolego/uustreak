# WCAG Violations Report for Nordland fylkeskommune

**Timestamp:** 2026-11-19T06:56:35.484Z
**URL:** [https://www.nfk.no/](https://www.nfk.no/)
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

- **Target:** `img[alt="Nordland fylkeskommune"]`
  - **HTML:** `<img alt="Nordland fylkeskommune" src="/handlers/bv.ashx/i2d31b424-7494-46da-9c6d-5ff41f5eccee/logo_nfk_frilagt.png">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

