# WCAG Violations Report for XXL Sport & Villmark AS

**Timestamp:** 2026-06-27T01:40:42.991Z
**URL:** [https://www.xxl.no/#](https://www.xxl.no/#)
**Total Violations:** 4

## Violation Details

### Banner landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the banner landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.MuiPaper-root`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#js-sticky-header`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#js-sticky-header`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 6

#### Affected Elements:

- `li:nth-child(1) > .top-usp__top-message`
- `li:nth-child(1) > .top-usp__bottom-message`
- `.top-usp__mobile:nth-child(2) > .top-usp__top-message`
- `.top-usp__mobile:nth-child(2) > .top-usp__bottom-message`
- `.top-usp__mobile:nth-child(3) > .top-usp__top-message`
- `.top-usp__mobile:nth-child(3) > .top-usp__bottom-message`
