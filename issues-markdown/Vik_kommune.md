# WCAG Violations Report for Vik kommune

**Timestamp:** 2026-11-20T06:37:54.003Z
**URL:** [https://www.vik.kommune.no/](https://www.vik.kommune.no/)
**Total Violations:** 4

## Violation Details

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
- **Count:** 2

#### Affected Elements:

- `html`
- `#vFact_audioFrame, html`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `a[data-id="208"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 9

#### Affected Elements:

- `.frontpage-banner`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl02_WebpartId_47 > h2`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl02_WebpartId_47_WebpartId_47_txtSearch`
- `.frontpage-top`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl05_WebpartId_51 > h2`
- `.container > ul`
- `.webPartBunnLink`
- `#vFact_audioFrame, #vfact_testaudio`
- `#vFact_audioFrame, h1`
