# WCAG Violations Report for Kvadraturen skolesenter

**Timestamp:** 2025-10-15T00:36:54.809Z
**URL:** [https://kvadraturen.vgs.no/](https://kvadraturen.vgs.no/)
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

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2
- **Count:** 1

#### Affected Elements:

- `iframe`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 1

#### Affected Elements:

- `a[href$="agderfk.no/"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 21

#### Affected Elements:

- `.visually-hidden`
- `#Sone2501`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ucSearchField_txtSearch`
- `#Sone2502`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_plhZoneContainer5000`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_plhZoneContainer5100`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_1394 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > .il-heading--h2:nth-child(1)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_1394 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > p:nth-child(2)`
- `cc-cookie-consent-conditional-content-component:nth-child(3) > .cc-alert.cc-alert--warning > .cc-alert-content > .cc-alert-message > .cc-div:nth-child(1)`
- `.text-box > .il-heading--h3`
- `.text-box > p:nth-child(5)`
- `.il-heading--h2:nth-child(6)`
- `.il-heading--h2:nth-child(7)`
- `p:nth-child(8)`
- `cc-cookie-consent-conditional-content-component:nth-child(9) > .cc-alert.cc-alert--warning > .cc-alert-content > .cc-alert-message > .cc-div:nth-child(1)`
- `.text-box > p:nth-child(10)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl08_WebpartId_1395 > .webPartTittel`
- `.container > ul`
- `.webPartBunnLink`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_plhZoneContainer5500`
- `.back-to-top-button-wrapper`
