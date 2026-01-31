# WCAG Violations Report for Norled AS

**Timestamp:** 2026-01-31T00:34:38.857Z
**URL:** [https://www.norled.no/#](https://www.norled.no/#)
**Total Violations:** 3

## Violation Details

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#brxe-ludgej`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 6

#### Affected Elements:

- `#brxe-rlgvhk`
- `a[href$="sok/"]`
- `.bricks-link-wrapper[target="_blank"]:nth-child(1)`
- `.bricks-link-wrapper[target="_blank"]:nth-child(2)`
- `.bricks-link-wrapper[target="_blank"]:nth-child(3)`
- `.bricks-link-wrapper[target="_blank"]:nth-child(4)`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `a[href$="#brx-content"]`
- `a[href$="#brx-footer"]`
