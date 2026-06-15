# WCAG Violations Report for Kvadraturen skolesenter

**Timestamp:** 2026-06-15T05:39:30.163Z
**URL:** [https://kvadraturen.vgs.no/](https://kvadraturen.vgs.no/)
**Total Violations:** 3

## Violation Details

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `iframe`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `a[href$="agderfk.no/"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 10

#### Affected Elements:

- `.visually-hidden`
- `#Sone2501`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ucSearchField_txtSearch`
- `#Sone2502`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_plhZoneContainer5000`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_plhZoneContainer5100`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl08_WebpartId_1395 > .webPartTittel`
- `.container > ul`
- `.webPartBunnLink`
- `.back-to-top-button-wrapper`
