# WCAG Violations Report for Kvadraturen skolesenter

**Timestamp:** 2025-10-28T13:04:40.165Z
**URL:** [https://kvadraturen.vgs.no/](https://kvadraturen.vgs.no/)
**Total Violations:** 5

## Violation Details

### ARIA dialog and alertdialog nodes should have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA dialog and alertdialog node has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-dialog-name?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `.bc-content-modal`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.il-heading--h3:nth-child(6)`

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
- **Count:** 30

#### Affected Elements:

- `.visually-hidden`
- `#Sone2501`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ucSearchField_txtSearch`
- `#Sone2502`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_plhZoneContainer5000`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_1390 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > .il-heading--h2`
- `cc-cookie-consent-conditional-content-component:nth-child(2) > .cc-alert.cc-alert--warning > .cc-alert-content > .cc-alert-message > .cc-div:nth-child(1)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_1390 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > p:nth-child(3)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_1390 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > p:nth-child(4)`
- `.text-box > p:nth-child(6)`
- `cc-cookie-consent-conditional-content-component:nth-child(7) > .cc-alert.cc-alert--warning > .cc-alert-content > .cc-alert-message > .cc-div:nth-child(1)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_1394 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > .il-heading--h2:nth-child(1)`
- `p:nth-child(2)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_1394 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > p:nth-child(3)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_1394 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > p:nth-child(4)`
- `cc-cookie-consent-conditional-content-component:nth-child(5) > .cc-alert.cc-alert--warning > .cc-alert-content > .cc-alert-message > .cc-div:nth-child(1)`
- `.il-heading--h3:nth-child(7)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_1394 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > p:nth-child(8)`
- `.text-box > p:nth-child(9)`
- `cc-cookie-consent-conditional-content-component:nth-child(10) > .cc-alert.cc-alert--warning > .cc-alert-content > .cc-alert-message > .cc-div:nth-child(1)`
- `.il-heading--h2:nth-child(11)`
- `.il-heading--h2:nth-child(12)`
- `p:nth-child(13)`
- `cc-cookie-consent-conditional-content-component:nth-child(14) > .cc-alert.cc-alert--warning > .cc-alert-content > .cc-alert-message > .cc-div:nth-child(1)`
- `p:nth-child(15)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl08_WebpartId_1395 > .webPartTittel`
- `.container > ul`
- `.webPartBunnLink`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_plhZoneContainer5500`
- `.back-to-top-button-wrapper`
