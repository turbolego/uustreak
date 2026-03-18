# WCAG Violations Report for Stortinget

**Timestamp:** 2026-03-18T00:34:58.658Z
**URL:** [https://www.stortinget.no/#](https://www.stortinget.no/#)
**Total Violations:** 2

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 2

#### Affected Elements:

- `img[alt="Jens Stoltenberg"]`
- `img[alt="Lene Vågslid"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.site-layout__visually-hidden-h1`
