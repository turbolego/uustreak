# WCAG Violations Report for Stavanger kommune

**Timestamp:** 2026-01-10T00:26:52.253Z
**URL:** [https://www.stavanger.kommune.no/#](https://www.stavanger.kommune.no/#)
**Total Violations:** 2

## Violation Details

### Aside should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the complementary landmark or aside is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-complementary-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- `.linklistblock.col-md-4.block:nth-child(1) > aside`
- `.linklistblock.col-md-4.block:nth-child(2) > aside`
- `.linklistblock.col-md-4.block:nth-child(3) > aside`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `div[role="complementary"]`
