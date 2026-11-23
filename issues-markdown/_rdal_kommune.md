# WCAG Violations Report for Årdal kommune

**Timestamp:** 2026-11-23T06:05:04.075Z
**URL:** [https://www.ardal.kommune.no/](https://www.ardal.kommune.no/)
**Total Violations:** 3

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `img[alt="Årdal kommune"]`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `html`
- `#vFact_audioFrame, html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 11

#### Affected Elements:

- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_48 > .webPartTittel`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_48_WebpartId_48_txtSearch`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_49`
- `.frontpage-menu`
- `.frontpage-middle`
- `.frontpage-focus`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl05_WebpartId_59 > .webPartTittel`
- `.container > ul`
- `.webPartBunnLink`
- `#vFact_audioFrame, #vfact_testaudio`
- `#vFact_audioFrame, h1`
