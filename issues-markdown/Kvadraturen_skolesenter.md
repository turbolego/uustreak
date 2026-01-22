# WCAG Violations Report for Kvadraturen skolesenter

**Timestamp:** 2026-01-22T00:45:08.180Z
**URL:** [https://kvadraturen.vgs.no/](https://kvadraturen.vgs.no/)
**Total Violations:** 5

## Violation Details

### ARIA dialog and alertdialog nodes should have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA dialog and alertdialog node has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `.bc-content-modal`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.il-heading--h2:nth-child(5)`

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
- **Count:** 33

#### Affected Elements:

- `.visually-hidden`
- `#Sone2501`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ucSearchField_txtSearch`
- `#Sone2502`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_plhZoneContainer5000`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_1390 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > .il-heading--h2:nth-child(1)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_1390 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > p:nth-child(2)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_1390 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > p:nth-child(3)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_1390 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > p:nth-child(4)`
- `.il-heading--h2:nth-child(6)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_1390 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > p:nth-child(7)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_1390 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > p:nth-child(8)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_1390 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > cc-cookie-consent-conditional-content-component > .cookie-consent-content > .cc-alert.cc-alert--warning > .cc-alert-content > .cc-alert-message > .cc-div:nth-child(1)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_1394 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > .il-heading--h2:nth-child(1)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_1394 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > p:nth-child(2)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_1394 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > p:nth-child(3)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_1394 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > p:nth-child(4)`
- `cc-cookie-consent-conditional-content-component:nth-child(5) > .cookie-consent-content > .cc-alert.cc-alert--warning > .cc-alert-content > .cc-alert-message > .cc-div:nth-child(1)`
- `.text-box > h3`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_1394 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > p:nth-child(7)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_1394 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > p:nth-child(8)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_1394 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > cc-cookie-consent-conditional-content-component:nth-child(9) > .cookie-consent-content > .cc-alert.cc-alert--warning > .cc-alert-content > .cc-alert-message > .cc-div:nth-child(1)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_1394 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > p:nth-child(10)`
- `p:nth-child(11)`
- `.il-heading--h2:nth-child(12)`
- `.il-heading--h2:nth-child(13)`
- `p:nth-child(14)`
- `cc-cookie-consent-conditional-content-component:nth-child(15) > .cookie-consent-content > .cc-alert.cc-alert--warning > .cc-alert-content > .cc-alert-message > .cc-div:nth-child(1)`
- `p:nth-child(16)`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl08_WebpartId_1395 > .webPartTittel`
- `.container > ul`
- `.webPartBunnLink`
- `.back-to-top-button-wrapper`
