# WCAG Violations Report for Asker og Bærum Budstikke AS

**Timestamp:** 2025-10-27T00:27:41.226Z
**URL:** [https://www.budstikka.no/#](https://www.budstikka.no/#)
**Total Violations:** 3

## Violation Details

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `brick-carousel-v2[data-slides="10"] > .carousel[role="region"][aria-label="Innholdskarusell."]`

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
