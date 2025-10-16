# WCAG Violations Report for Kragerø skole

**Timestamp:** 2025-10-16T00:36:41.581Z
**URL:** [https://www.kragero.kommune.no/kragero-skole/](https://www.kragero.kommune.no/kragero-skole/)
**Total Violations:** 3

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `img[alt="Kragerø skole"]`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 8

#### Affected Elements:

- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_1361 > h2`
- `.webPartInnhold > .content-search-box.content-search-box--default[data-datasource-id="2"] > .content-search-box-content > .content-search-box-input > .content-search-box-combobox > label`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_1359`
- `#Sone5001`
- `.container > ul`
- `#Sone6001`
- `#bottom-boxes`
- `.container-floating-notifications`
