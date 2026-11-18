# WCAG Violations Report for Kragerø kommune

**Timestamp:** 2026-11-18T12:56:42.351Z
**URL:** [https://www.kragero.kommune.no/](https://www.kragero.kommune.no/)
**Total Violations:** 3

## Violation Details

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 18

#### Affected Elements:

- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_44 > h2`
- `.webPartInnhold > .content-search-box.content-search-box--default[data-datasource-id="2"] > .content-search-box-content > .content-search-box-input > .content-search-box-combobox > label`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_42`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_43 > h2`
- `a[data-id="17"]`
- `a[data-id="19"]`
- `a[data-id="1095"]`
- `a[data-id="20"]`
- `a[data-id="2620"]`
- `a[data-id="21"]`
- `a[data-id="1006"]`
- `a[data-id="18"]`
- `.vis-alle`
- `#middle-boxes`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_48 > h2`
- `.container > ul`
- `.webPartBunnLink`
- `.container-floating-notifications`

### The skip-link target should exist and be focusable

- **Impact:** moderate
- **Description:** Ensure all skip links have a focusable target
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/skip-link?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-12.7.1
- **Count:** 1

#### Affected Elements:

- `a[href$="#contentSok"]`
