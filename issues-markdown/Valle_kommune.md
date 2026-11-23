# WCAG Violations Report for Valle kommune

**Timestamp:** 2026-11-23T06:44:20.519Z
**URL:** [https://www.valle.kommune.no/](https://www.valle.kommune.no/)
**Total Violations:** 2

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `img[alt="Valle kommune"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- `#ctl00_ctl00_ctl00_innhold_ctl05_WebpartId_376 > .webPartTittel`
- `#vFact_audioFrame, #vfact_testaudio`
- `#vFact_audioFrame, #vfact_bkaudio`
- `#vFact_audioFrame, h1`
