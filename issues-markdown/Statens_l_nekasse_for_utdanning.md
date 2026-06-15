# WCAG Violations Report for Statens lånekasse for utdanning

**Timestamp:** 2026-06-15T05:18:05.812Z
**URL:** [https://lanekassen.no/#samtykke-banner](https://lanekassen.no/#samtykke-banner)
**Total Violations:** 2

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.c-aksjonsfelt:nth-child(1) > .c-aksjonsfelt-kolonne:nth-child(3) > .c-aksjonsfelt__h3`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `.MuiCardContent-root > div:nth-child(1)`
- `.MuiCardContent-root > div:nth-child(3)`
