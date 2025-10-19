# WCAG Violations Report for Bergensavisen AS

**Timestamp:** 2025-10-19T00:30:28.312Z
**URL:** [https://www.ba.no/#](https://www.ba.no/#)
**Total Violations:** 2

## Violation Details

### Ensure elements marked as presentational are consistently ignored

- **Impact:** minor
- **Description:** Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `img[height="80"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `amedia-username`
- `#toppbanner-1`
