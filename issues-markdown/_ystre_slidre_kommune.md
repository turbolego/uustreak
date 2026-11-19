# WCAG Violations Report for Øystre slidre kommune

**Timestamp:** 2026-11-19T05:56:23.972Z
**URL:** [https://www.oystre-slidre.kommune.no/](https://www.oystre-slidre.kommune.no/)
**Total Violations:** 5

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `img[alt="Øystre Slidre kommune"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- `iframe[data-load-src$="true"], .col-sm-6.col-md-4.col-lg-3:nth-child(1) > article > a > .g-pa-10 > table > tbody > tr:nth-child(5) > .g-color-primary`
- `iframe[data-load-src$="true"], .col-sm-6.col-md-4.col-lg-3:nth-child(2) > article > a > .g-pa-10 > table > tbody > tr:nth-child(5) > .g-color-primary`
- `iframe[data-load-src$="true"], tr:nth-child(4) > .g-color-primary`
- `iframe[data-load-src$="true"], .col-sm-6.col-md-4.col-lg-3:nth-child(4) > article > a > .g-pa-10 > table > tbody > tr:nth-child(5) > .g-color-primary`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[data-load-src$="true"]`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `html`
- `iframe[data-load-src$="true"], html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 19

#### Affected Elements:

- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_41 > h2`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_41_WebpartId_41_txtSearch`
- `#Sone5001`
- `#middle-boxes`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_44 > h2`
- `.container > ul`
- `.container > .webPartBunnLink`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl05_WebpartId_45 > h2`
- `.event:nth-child(1) > .event-date`
- `.event:nth-child(1) > .event-text > h3`
- `.event:nth-child(1) > .event-text > .event-location`
- `.event:nth-child(2) > .event-date`
- `.event:nth-child(2) > .event-text > h3`
- `.event:nth-child(2) > .event-text > .event-location`
- `.calWPFooter`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl05_WebpartId_233 > h2`
- `.client-content-widget > .webPartBunnLink`
- `iframe[data-load-src$="true"], .row`
- `.container-floating-notifications`
