# WCAG Violations Report for Sula kommune

**Timestamp:** 2026-11-20T06:38:20.319Z
**URL:** [https://www.sula.kommune.no/](https://www.sula.kommune.no/)
**Total Violations:** 3

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

- `.logoimg`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 8

#### Affected Elements:

- `.subMenu`
- `.top-boxes`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_50 > .webPartTittel`
- `.container > ul`
- `.webPartBunnLink`
- `#Sone7001`
- `#vFact_audioFrame, #vfact_testaudio`
- `#vFact_audioFrame, h1`
