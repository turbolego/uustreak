# WCAG Violations Report for Bodø videregående skole

**Timestamp:** 2026-01-26T00:36:44.464Z
**URL:** [https://www.bodo.vgs.no/#](https://www.bodo.vgs.no/#)
**Total Violations:** 3

## Violation Details

### ARIA dialog and alertdialog nodes should have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA dialog and alertdialog node has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `.bc-content-modal`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- `a[data-id="1942"]`
- `a[data-id="19684"]`
- `a[data-id="19688"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 9

#### Affected Elements:

- `#ctl00_ctl00_ctl00_innhold_ctl05_WebpartId_6643`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_1200 > h2`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_1200_WebpartId_1200_txtSearch`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_1201`
- `.section-frontpage-top`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl06_WebpartId_6713 > h2`
- `.container > ul`
- `.webPartBunnLink`
- `.section-frontpage-bottom`
