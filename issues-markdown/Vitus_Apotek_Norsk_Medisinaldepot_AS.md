# WCAG Violations Report for Vitus Apotek Norsk Medisinaldepot AS

**Timestamp:** 2026-10-29T07:25:53.113Z
**URL:** [https://www.vitusapotek.no/](https://www.vitusapotek.no/)
**Total Violations:** 7

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 3

#### Affected Elements:

- `h4`
- `.banner--full-width.banner:nth-child(2) > .banner__content-wrapper > .banner__text > .cms-content > h2`
- `.banner--full-width.banner:nth-child(3) > .banner__content-wrapper > .banner__text > .cms-content > h2`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `h4`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 6

#### Affected Elements:

- `a[href$="cart"]`
- `a[href$="prior"]`
- `.campaign-banner--left.campaign-banner.banner:nth-child(2) > .campaign-banner__content-wrapper.banner__content-wrapper`
- `.campaign-banner--centered.campaign-banner.banner:nth-child(1) > .campaign-banner__content-wrapper.banner__content-wrapper`
- `.campaign-banner--centered.campaign-banner.banner:nth-child(2) > .campaign-banner__content-wrapper.banner__content-wrapper`
- `.campaign-banner__content-wrapper.banner__content-wrapper[href$="intimpleie"]`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.cms-recomendations:nth-child(8) > section > div > .carousel[aria-roledescription="carousel"][role="region"]`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `.nav-desktop__list`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- `.header__skip-link`
- `.footer-banner > .banner__image-wrapper`
- `.footer-banner > .banner__content-wrapper`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 4

#### Affected Elements:

- `.cms-recomendations:nth-child(8) > section > div > .carousel[aria-roledescription="carousel"][role="region"] > .carousel__wrapper > .carousel__container > .carousel__slides`
- `.cms-recomendations:nth-child(10) > section > div > .carousel[aria-roledescription="carousel"][role="region"] > .carousel__wrapper > .carousel__container > .carousel__slides`
- `.cms-recomendations:nth-child(11) > section > div > .carousel[aria-roledescription="carousel"][role="region"] > .carousel__wrapper > .carousel__container > .carousel__slides`
- `.cms-recomendations:nth-child(14) > section > div > .carousel[aria-roledescription="carousel"][role="region"] > .carousel__wrapper > .carousel__container > .carousel__slides`
