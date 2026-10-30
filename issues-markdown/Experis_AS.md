# WCAG Violations Report for Experis AS

**Timestamp:** 2026-10-30T05:31:30.084Z
**URL:** [https://www.experis.no/](https://www.experis.no/)
**Total Violations:** 2

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 2

#### Affected Elements:

- `.main-nav > .country-links > .lang-nav > .language-wrapper > .country[aria-label="(Manpower-Global) pop up opens"]`
- `.sub-footer-disclaimer-inner > .country-links > .lang-nav > .language-wrapper > .country[aria-label="(Manpower-Global) pop up opens"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `#onetrust-banner-sdk`
