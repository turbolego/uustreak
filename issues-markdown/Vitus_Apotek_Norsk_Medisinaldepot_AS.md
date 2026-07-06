# WCAG Violations Report for Vitus Apotek Norsk Medisinaldepot AS

**Timestamp:** 2026-07-06T03:43:20.009Z
**URL:** [https://www.vitusapotek.no/](https://www.vitusapotek.no/)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- `.cms-campaign-banners:nth-child(6) > .cms-campaign-banners__content.cms-banners > .campaign-banner--centered.campaign-banner.banner:nth-child(1) > .campaign-banner__content-wrapper.banner__content-wrapper > .campaign-banner__text.banner__text > .product-label > .product-label__text`
- `.cms-campaign-banners:nth-child(6) > .cms-campaign-banners__content.cms-banners > .campaign-banner--centered.campaign-banner.banner:nth-child(2) > .campaign-banner__content-wrapper.banner__content-wrapper > .campaign-banner__text.banner__text > .product-label > .product-label__text`
- `a[href$="nuxe-sun"] > .campaign-banner__text.banner__text > .product-label > .product-label__text`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.cms-recomendations:nth-child(10) > section > div > .carousel[aria-roledescription="carousel"][role="region"]`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `.nav-desktop__list`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- `.header__skip-link`
- `.footer-banner > .banner__image-wrapper`
- `.footer-banner > .banner__content-wrapper`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 2

#### Affected Elements:

- `.cms-recomendations:nth-child(10) > section > div > .carousel[aria-roledescription="carousel"][role="region"] > .carousel__wrapper > .carousel__container > .carousel__slides`
- `.cms-recomendations:nth-child(13) > section > div > .carousel[aria-roledescription="carousel"][role="region"] > .carousel__wrapper > .carousel__container > .carousel__slides`
