# WCAG Violations Report for Time kommune tenesteområde samfunn

**Timestamp:** 2026-11-20T06:39:42.534Z
**URL:** [https://www.time.kommune.no/](https://www.time.kommune.no/)
**Total Violations:** 4

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.area-message-list-item__title > h3`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `.logo`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 9

#### Affected Elements:

- `.alert-box`
- `#ctl00_ctl00_ctl00_innhold_ctl09_WebpartId_91_WebpartId_91_txtSearch`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_43`
- `a[data-id="5510"] > span > .text`
- `a[data-id="5509"] > span > .text`
- `a[data-id="14023"] > span > .text`
- `#middleTop-boxes`
- `.container > ul`
- `.webPartBunnLink`
