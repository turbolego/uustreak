# WCAG Violations Report for Vitus Apotek Norsk Medisinaldepot AS

**Timestamp:** 2026-10-04T11:59:01.409Z
**URL:** [https://www.vitusapotek.no/](https://www.vitusapotek.no/)
**Total Violations:** 5

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `h4`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.cms-recomendations:nth-child(6) > section > div > .carousel[aria-roledescription="carousel"][role="region"]`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `.nav-desktop__list`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- `.header__skip-link`
- `.announcement-bar`
- `.footer-banner > .banner__image-wrapper`
- `.footer-banner > .banner__content-wrapper`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 5

#### Affected Elements:

- `.cms-recomendations:nth-child(6) > section > div > .carousel[aria-roledescription="carousel"][role="region"] > .carousel__wrapper > .carousel__container > .carousel__slides`
- `.cms-recomendations:nth-child(8) > section > div > .carousel[aria-roledescription="carousel"][role="region"] > .carousel__wrapper > .carousel__container > .carousel__slides`
- `.cms-recomendations:nth-child(9) > section > div > .carousel[aria-roledescription="carousel"][role="region"] > .carousel__wrapper > .carousel__container > .carousel__slides`
- `.cms-recomendations:nth-child(10) > section > div > .carousel[aria-roledescription="carousel"][role="region"] > .carousel__wrapper > .carousel__container > .carousel__slides`
- `.cms-recomendations:nth-child(11) > section > div > .carousel[aria-roledescription="carousel"][role="region"] > .carousel__wrapper > .carousel__container > .carousel__slides`
