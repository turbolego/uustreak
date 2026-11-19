# WCAG Violations Report for Askøy kommune

**Timestamp:** 2026-11-19T05:27:10.062Z
**URL:** [https://www.askoy.kommune.no/](https://www.askoy.kommune.no/)
**Total Violations:** 2

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 2

#### Affected Elements:

- `.uk-first-column:nth-child(1) > .uk-flex-column.uk-flex.el-item > .uk-card-small.uk-card-default.uk-flex-1`
- `a[href$="detskjer.askoy.no/"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.uk-hidden-visually`
