# WCAG Violations Report for Lørenskog kommune

**Timestamp:** 2025-10-30T12:05:05.243Z
**URL:** [https://www.lorenskog.kommune.no/#](https://www.lorenskog.kommune.no/#)
**Total Violations:** 4

## Violation Details

### ARIA dialog and alertdialog nodes should have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA dialog and alertdialog node has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-dialog-name?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `.bc-content-modal`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT
- **Count:** 2

#### Affected Elements:

- `.search-box-toggle`
- `.main-menu-toggle`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 2

#### Affected Elements:

- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl06_WebpartId_1699_WebpartId_1699_rptItems_ctl01_ucDisplayControl_lnkSearch > span`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl08_WebpartId_1614_WebpartId_1614_rptItems_ctl01_ucDisplayControl_hlLinkAlle`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 13

#### Affected Elements:

- `#aspnetForm > h1`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_1604 > .webPartTittel`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_1604_WebpartId_1604_txtSearch`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_1605`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_1856`
- `.section:nth-child(12)`
- `.section:nth-child(13)`
- `.section:nth-child(15)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl08_WebpartId_1614 > .webPartTittel`
- `.container > ul`
- `.webPartBunnLink`
- `#vFact_audioFrame, #vfact_testaudio`
- `#vFact_audioFrame, h1`
