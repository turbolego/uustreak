# WCAG Violations Report for LO - Landsorganisasjonen i Norge

**Timestamp:** 2025-12-22T00:42:14.366Z
**URL:** [https://www.lo.no/#](https://www.lo.no/#)
**Total Violations:** 3

## Violation Details

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 8

#### Affected Elements:

- `.articleTeaser--large > .articleTeaser__image > .image > .is-loaded`
- `.visitorcenter-teaser > .articleTeaser__image > .image > img`
- `.articleTeaser--medium.articleTeaser:nth-child(13) > .articleTeaser__image > .image > img`
- `.articleTeaser--medium.articleTeaser:nth-child(14) > .articleTeaser__image > .image > img`
- `.articleTeaser--medium.articleTeaser:nth-child(15) > .articleTeaser__image > .image > img`
- `.articleTeaser--medium.articleTeaser:nth-child(18) > .articleTeaser__image > .image > img`
- `.themeTeaser--featured.themeTeaser:nth-child(2) > .image > img`
- `.themeTeaser--featured.themeTeaser:nth-child(3) > .image > img`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `nav:nth-child(2)`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- `h1`
- `a[href$="#main"]`
- `a[href$="#menu"]`
