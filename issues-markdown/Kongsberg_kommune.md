# WCAG Violations Report for Kongsberg kommune

**Timestamp:** 2026-10-25T17:06:28.155Z
**URL:** [https://www.kongsberg.kommune.no/](https://www.kongsberg.kommune.no/)
**Total Violations:** 2

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 3

#### Affected Elements:

- `.campaign__item[target="_blank"]:nth-child(1)`
- `.campaign__item[target="_blank"]:nth-child(2)`
- `.campaign__item[target="_blank"]:nth-child(3)`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.navbar`
