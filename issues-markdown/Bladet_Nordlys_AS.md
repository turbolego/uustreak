# WCAG Violations Report for Bladet Nordlys AS

**Timestamp:** 2025-10-24T00:32:11.981Z
**URL:** [https://www.nordlys.no/#](https://www.nordlys.no/#)
**Total Violations:** 4

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.video.premium[data-title-words="2"] > .brick-c-fRZqov.teaser_body[itemprop="url"] > .body > .brick-c-bVcFwu.title_container.has-image > .brick-c-fdykhI-RMqvH-cv.title.brick-c-fdykhI`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `brick-carousel-v2[data-slides="9"] > .carousel[role="region"][aria-label="Innholdskarusell."]`

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
