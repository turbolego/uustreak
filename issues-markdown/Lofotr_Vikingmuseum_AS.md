# WCAG Violations Report for Lofotr Vikingmuseum AS

**Timestamp:** 2026-05-01T20:00:36.302Z
**URL:** [https://www.museumnord.no/vare-museer/lofotr-vikingmuseum/](https://www.museumnord.no/vare-museer/lofotr-vikingmuseum/)
**Total Violations:** 9

## Violation Details

### ARIA attributes must conform to valid names

- **Impact:** critical
- **Description:** Ensure attributes that begin with aria- are valid ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 3

#### Affected Elements:

- `.col-12.col-md-4.my-3:nth-child(1) > .card.has-light-blue-background-color.h-100 > .card-footer.wp-block-buttons.aligncenter > .has-blue-primary-background-color.wp-block-button__link`
- `a[title="Fiske og sjøfangst i vikingtid"]`
- `.col-12.col-md-4.my-3:nth-child(3) > .card.has-light-blue-background-color.h-100 > .card-footer.wp-block-buttons.aligncenter > .has-blue-primary-background-color.wp-block-button__link`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#header-menu-toggle`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.cmplz-blocked-content-notice`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 3

#### Affected Elements:

- `#block-museumnord-featured-exhibits-carouselblock_cde5b938de91b15fd38a3366b8ccf0ab > .wp-block-group__inner-container.alignwide > .wp-block-pooka-experiences-exhibitions-carousel__header > h2`
- `#block-museumnord-featured-exhibits-carouselblock_62f609d447ddd5e5c540c7d5fa7960df > .wp-block-group__inner-container.alignwide > .wp-block-pooka-experiences-exhibitions-carousel__header > h2`
- `#block-museumnord-featured-exhibits-carouselblock_9ebc9abdac7cfde67a3ae25e52eebdb8 > .wp-block-group__inner-container.alignwide > .wp-block-pooka-experiences-exhibitions-carousel__header > h2`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 6

#### Affected Elements:

- `#primary > h3`
- `.wp-block-pooka-venue-details__address > h5`
- `#block-museumnord-featured-exhibits-carouselblock_cde5b938de91b15fd38a3366b8ccf0ab > .wp-block-pooka-experiences-exhibitions-carousel__full-width-wrapper.alignwide > .wp-block-pooka-experiences-exhibitions-carousel__carousel-container[role="region"][aria-label="Exhibits carousel"] > .wp-block-pooka-experiences-exhibitions-carousel__carousel > .wp-block-pooka-experiences-exhibitions-carousel__carousel-slide[data-index="0"] > .wp-block-pooka-experiences-exhibitions-carousel__slide-content > .card-exhibition.has-light-grey-background-color > .card-exhibition__content > h5`
- `#block-museumnord-featured-exhibits-carouselblock_62f609d447ddd5e5c540c7d5fa7960df > .wp-block-pooka-experiences-exhibitions-carousel__full-width-wrapper.alignwide > .wp-block-pooka-experiences-exhibitions-carousel__carousel-container[role="region"][aria-label="Exhibits carousel"] > .wp-block-pooka-experiences-exhibitions-carousel__carousel > .wp-block-pooka-experiences-exhibitions-carousel__carousel-slide[data-index="0"] > .wp-block-pooka-experiences-exhibitions-carousel__slide-content > .card-exhibition.has-light-grey-background-color > .card-exhibition__content > h5`
- `#block-museumnord-featured-exhibits-carouselblock_9ebc9abdac7cfde67a3ae25e52eebdb8 > .wp-block-pooka-experiences-exhibitions-carousel__full-width-wrapper.alignwide > .wp-block-pooka-experiences-exhibitions-carousel__carousel-container[role="region"][aria-label="Exhibits carousel"] > .wp-block-pooka-experiences-exhibitions-carousel__carousel > .wp-block-pooka-experiences-exhibitions-carousel__carousel-slide[data-index="0"] > .wp-block-pooka-experiences-exhibitions-carousel__slide-content > .card-exhibition.has-light-grey-background-color > .card-exhibition__content > h5`
- `.my-5:nth-child(1) > h5`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#block-museumnord-featured-exhibits-carouselblock_cde5b938de91b15fd38a3366b8ccf0ab > .wp-block-pooka-experiences-exhibitions-carousel__full-width-wrapper.alignwide > .wp-block-pooka-experiences-exhibitions-carousel__carousel-container[role="region"][aria-label="Exhibits carousel"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `#post-92370 > .mn-archive-menu__item > .mn-archive-menu__image_scaffold > .w-100.h-100`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.skip-link`

### [role="img"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] elements have alternative text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `div[aria-label=""]`
