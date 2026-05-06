# WCAG Violations Report for Manpower AS

**Timestamp:** 2026-05-06T00:45:21.209Z
**URL:** [https://www.manpower.no/nb](https://www.manpower.no/nb)
**Total Violations:** 3

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `a[aria-label="LES MER OM MANPOWER ACADEMY"]`
- `.hubspot-render > div > .d-flex.justify-content-center`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 3

#### Affected Elements:

- `.white.featurette-section.standard:nth-child(3) > .container > .row > .col-lg-7 > .featurette-body > .name`
- `.white.featurette-section.standard:nth-child(5) > .container > .row > .col-lg-7 > .featurette-body > .name`
- `.grey > .container > .row > .col-lg-7 > .featurette-body > .name`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.main-nav-item[aria-label="main nav item"][role="navigation"]:nth-child(1)`
