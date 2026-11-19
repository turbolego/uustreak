# WCAG Violations Report for Namsos kommune

**Timestamp:** 2026-11-19T06:50:39.831Z
**URL:** [https://namsos.kommune.no/](https://namsos.kommune.no/)
**Total Violations:** 3

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `img[alt="Namsos kommune"]`

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
- **Count:** 23

#### Affected Elements:

- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_51_WebpartId_51_txtSearch`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_52`
- `a[data-id="35"] > span > .text`
- `a[data-id="36"] > span > .text`
- `a[data-id="12397"] > span > .text`
- `a[data-id="37"] > span > .text`
- `a[data-id="38"] > span > .text`
- `a[data-id="39"] > span > .text`
- `a[data-id="40"] > span > .text`
- `a[data-id="41"] > span > .text`
- `a[data-id="43"] > span > .text`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_1562`
- `.middle-boxes--upper`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_56 > .webPartTittel`
- `li:nth-child(1) > .kortMnd`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_56_WebpartId_56_rptArtikler_ctl01_hlLink`
- `li:nth-child(2) > .kortMnd`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_56_WebpartId_56_rptArtikler_ctl02_hlLink`
- `li:nth-child(3) > .kortMnd`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_56_WebpartId_56_rptArtikler_ctl03_hlLink`
- `.webPartBunnLink`
- `#vFact_audioFrame, #vfact_testaudio`
- `#vFact_audioFrame, h1`
