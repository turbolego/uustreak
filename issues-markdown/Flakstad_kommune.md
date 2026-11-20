# WCAG Violations Report for Flakstad kommune

**Timestamp:** 2026-11-20T06:10:07.492Z
**URL:** [https://flakstad.kommune.no/](https://flakstad.kommune.no/)
**Total Violations:** 3

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `img[alt="Flakstad kommune"]`

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
- **Count:** 7

#### Affected Elements:

- `#Sone3000`
- `#topBoxes`
- `#middleBoxes`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_7 > h2`
- `.container > ul`
- `.webPartBunnLink`
- `.container-floating-notifications`
