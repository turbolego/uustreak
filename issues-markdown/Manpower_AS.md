# WCAG Violations Report for Manpower AS

**Timestamp:** 2026-03-15T00:49:12.640Z
**URL:** [https://www.manpower.no/nb](https://www.manpower.no/nb)
**Total Violations:** 3

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `h6`

### <html> element must have a lang attribute

- **Impact:** serious
- **Description:** Ensure every HTML document has a lang attribute
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright
- **Tags:** cat.language, wcag2a, wcag311, TTv5, TT11.a, EN-301-549, EN-9.3.1.1, ACT, RGAAv4, RGAA-8.3.1
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.offline_outer`
