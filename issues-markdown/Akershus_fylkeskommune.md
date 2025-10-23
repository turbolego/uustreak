# WCAG Violations Report for Akershus fylkeskommune

**Timestamp:** 2025-10-23T00:23:11.108Z
**URL:** [https://afk.no/#](https://afk.no/#)
**Total Violations:** 2

## Violation Details

### ARIA dialog and alertdialog nodes should have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA dialog and alertdialog node has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `.bc-content-modal`

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
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl08_WebpartId_10099 > .webPartTittel`
- `.container > ul`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl08_WebpartId_10111`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_plhZoneContainer5500`
- `.back-to-top-button-wrapper`
