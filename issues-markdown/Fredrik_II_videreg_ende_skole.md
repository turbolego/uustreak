# WCAG Violations Report for Fredrik II videregående skole

**Timestamp:** 2025-12-05T00:29:05.486Z
**URL:** [https://ofk.no/frederikii-vgs/#](https://ofk.no/frederikii-vgs/#)
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
- `div[data-id="4942"] > .container.articles-in-category > ul`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl08_WebpartId_2484 > .webPartTittel`
- `div[data-id="4941"] > .container.articles-in-category > ul`
- `.webPartBunnLink`
- `.back-to-top-button-wrapper`
