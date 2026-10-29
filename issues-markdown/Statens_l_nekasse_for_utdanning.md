# WCAG Violations Report for Statens lånekasse for utdanning

**Timestamp:** 2026-10-29T06:17:13.613Z
**URL:** [https://lanekassen.no/#samtykke-banner](https://lanekassen.no/#samtykke-banner)
**Total Violations:** 3

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.c-aksjonsfelt:nth-child(1) > .c-aksjonsfelt-kolonne:nth-child(3) > .c-aksjonsfelt__h3`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 2

#### Affected Elements:

- `.c-flis.c-flis--klikkbar.c-flis--forside:nth-child(1)`
- `.c-flis.c-flis--klikkbar.c-flis--forside:nth-child(2)`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `.MuiCardContent-root > div:nth-child(1)`
- `.MuiCardContent-root > div:nth-child(3)`
