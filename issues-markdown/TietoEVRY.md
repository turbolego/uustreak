# WCAG Violations Report for TietoEVRY

**Timestamp:** 2026-10-29T06:20:36.924Z
**URL:** [https://www.tieto.com/no/](https://www.tieto.com/no/)
**Total Violations:** 3

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 9

#### Affected Elements:

- `.ml-4`
- `.static-col.content-start.outline-0:nth-child(1)`
- `.static-col.content-start.outline-0:nth-child(2)`
- `.static-col.content-start.outline-0:nth-child(3)`
- `.news-item.border-t.border-grey-300:nth-child(1) > .align-center.gap-8.border-r-4`
- `.news-item.border-t.border-grey-300:nth-child(2) > .align-center.gap-8.border-r-4`
- `.news-item.border-t.border-grey-300:nth-child(3) > .align-center.gap-8.border-r-4`
- `.news-item.border-t.border-grey-300:nth-child(4) > .align-center.gap-8.border-r-4`
- `.btn-blue-600.outline-white.before\:h-4`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.md\:gap-6.gap-4.h-full > .md\:gap-6.gap-4`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `#onetrust-banner-sdk`
