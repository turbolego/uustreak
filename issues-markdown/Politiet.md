# WCAG Violations Report for Politiet

**Timestamp:** 2025-10-28T12:57:59.320Z
**URL:** [https://www.politiet.no/](https://www.politiet.no/)
**Total Violations:** 3

## Violation Details

### Zooming and scaling must not be disabled

- **Impact:** critical
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT
- **Count:** 1

#### Affected Elements:

- `meta[name="viewport"]`

### Ensure elements marked as presentational are consistently ignored

- **Impact:** minor
- **Description:** Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `pno-header,pno-logo,svg[viewBox="0 0 3652 1067.9"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 1

#### Affected Elements:

- `#skip-link`
