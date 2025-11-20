# WCAG Violations Report for Stavanger kommune

**Timestamp:** 2025-11-20T00:22:43.048Z
**URL:** [https://www.stavanger.kommune.no/#](https://www.stavanger.kommune.no/#)
**Total Violations:** 3

## Violation Details

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `.subarticlepage.teaser-with-image.col-md-4:nth-child(3) > .sub-teaser > .no-target-icon > .sub-teaser__image > img`

### Aside should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the complementary landmark or aside is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-complementary-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 4

#### Affected Elements:

- `.byline`
- `.linklistblock.col-md-4.block:nth-child(1) > .linklist`
- `.linklistblock.col-md-4.block:nth-child(2) > .linklist`
- `.linklistblock.col-md-4.block:nth-child(3) > .linklist`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `div[role="complementary"]`
