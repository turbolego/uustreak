# WCAG Violations Report for Kristiansand Dyrepark AS

**Timestamp:** 2025-12-02T01:05:54.622Z
**URL:** [https://www.dyreparken.no/#](https://www.dyreparken.no/#)
**Total Violations:** 6

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 6

#### Affected Elements:

- `.c-module--grid.u-theme-dyreparken-primary.c-module:nth-child(15) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-nav > .owl-prev.disabled[role="presentation"]`
- `.c-module--grid.u-theme-dyreparken-primary.c-module:nth-child(15) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-nav > .owl-next[role="presentation"][type="button"]`
- `.u-theme-dyreparken-secondary.c-module--grid.c-module:nth-child(17) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-nav > .owl-prev.disabled[role="presentation"]`
- `.u-theme-dyreparken-secondary.c-module--grid.c-module:nth-child(17) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-nav > .owl-next[role="presentation"][type="button"]`
- `.c-grid--content-alignment-left.c-grid--overflow-scrolling.c-grid--image-size-large > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-nav > .owl-prev.disabled[role="presentation"]`
- `.c-grid--content-alignment-left.c-grid--overflow-scrolling.c-grid--image-size-large > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-nav > .owl-next[role="presentation"][type="button"]`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 6

#### Affected Elements:

- `.c-module--grid.u-theme-dyreparken-primary.c-module:nth-child(15) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-nav > .owl-prev.disabled[role="presentation"]`
- `.c-module--grid.u-theme-dyreparken-primary.c-module:nth-child(15) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-nav > .owl-next[role="presentation"][type="button"]`
- `.u-theme-dyreparken-secondary.c-module--grid.c-module:nth-child(17) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-nav > .owl-prev.disabled[role="presentation"]`
- `.u-theme-dyreparken-secondary.c-module--grid.c-module:nth-child(17) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-nav > .owl-next[role="presentation"][type="button"]`
- `.c-grid--content-alignment-left.c-grid--overflow-scrolling.c-grid--image-size-large > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-nav > .owl-prev.disabled[role="presentation"]`
- `.c-grid--content-alignment-left.c-grid--overflow-scrolling.c-grid--image-size-large > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-nav > .owl-next[role="presentation"][type="button"]`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.main-header__nav`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 44

#### Affected Elements:

- `#CybotCookiebotDialogBodyContentText > a[href$="cookies/"]`
- `.c-grid--columns-3.c-grid--columns-small-2.c-grid--content-alignment-center > .c-grid__items > .c-grid__item:nth-child(1) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid--columns-3.c-grid--columns-small-2.c-grid--content-alignment-center > .c-grid__items > .c-grid__item:nth-child(2) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid--columns-3.c-grid--columns-small-2.c-grid--content-alignment-center > .c-grid__items > .c-grid__item:nth-child(3) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.u-theme-dyreparken-primary-light.c-module--split.c-module--billboard:nth-child(11) > .c-module__container > .c-billboard--variant-light.c-billboard--left.c-billboard--split > .c-billboard__inner > .c-billboard__image[itemtype="http://schema.org/ImageObject"][target=""]`
- `.c-grid--columns-small-1 > .c-grid__items > .c-grid__item:nth-child(1) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid--columns-small-1 > .c-grid__items > .c-grid__item:nth-child(2) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid--columns-small-1 > .c-grid__items > .c-grid__item:nth-child(3) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid--columns-2 > .c-grid__items > .c-grid__item:nth-child(1) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid--columns-2 > .c-grid__items > .c-grid__item:nth-child(2) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid--columns-4 > .c-grid__items > .c-grid__item:nth-child(1) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid--columns-4 > .c-grid__items > .c-grid__item:nth-child(2) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid--columns-4 > .c-grid__items > .c-grid__item:nth-child(3) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid__item:nth-child(4) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid__item:nth-child(5) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid__item:nth-child(8) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-module--grid.u-theme-dyreparken-primary.c-module:nth-child(15) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-stage-outer > .owl-stage > .active.owl-item:nth-child(1) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-module--grid.u-theme-dyreparken-primary.c-module:nth-child(15) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-stage-outer > .owl-stage > .active.owl-item:nth-child(2) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-module--grid.u-theme-dyreparken-primary.c-module:nth-child(15) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-stage-outer > .owl-stage > .owl-item:nth-child(4) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-module--grid.u-theme-dyreparken-primary.c-module:nth-child(15) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-stage-outer > .owl-stage > .owl-item:nth-child(6) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-module--grid.u-theme-dyreparken-primary.c-module:nth-child(15) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-stage-outer > .owl-stage > .owl-item:nth-child(7) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-stage-outer > .owl-stage > .owl-item:nth-child(9) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-stage-outer > .owl-stage > .owl-item:nth-child(10) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.owl-item:nth-child(11) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.u-theme-dyreparken-primary-light.c-module--split.c-module--billboard:nth-child(16) > .c-module__container > .c-billboard--variant-light.c-billboard--left.c-billboard--split > .c-billboard__inner > .c-billboard__image[itemtype="http://schema.org/ImageObject"][itemscope="itemscope"]`
- `.u-theme-dyreparken-secondary.c-module--grid.c-module:nth-child(17) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-stage-outer > .owl-stage > .active.owl-item:nth-child(1) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.u-theme-dyreparken-secondary.c-module--grid.c-module:nth-child(17) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-stage-outer > .owl-stage > .active.owl-item:nth-child(2) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.u-theme-dyreparken-secondary.c-module--grid.c-module:nth-child(17) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-stage-outer > .owl-stage > .active.owl-item:nth-child(3) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.u-theme-dyreparken-secondary.c-module--grid.c-module:nth-child(17) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-stage-outer > .owl-stage > .owl-item:nth-child(5) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.u-theme-dyreparken-secondary.c-module--grid.c-module:nth-child(17) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-stage-outer > .owl-stage > .owl-item:nth-child(6) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.u-theme-dyreparken-secondary.c-module--grid.c-module:nth-child(17) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-stage-outer > .owl-stage > .owl-item:nth-child(7) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.u-theme-dyreparken-secondary.c-module--grid.c-module:nth-child(17) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-stage-outer > .owl-stage > .owl-item:nth-child(8) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid--content-alignment-left.c-grid--overflow-scrolling.c-grid--image-size-large > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-stage-outer > .owl-stage > .active.owl-item:nth-child(1) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid--content-alignment-left.c-grid--overflow-scrolling.c-grid--image-size-large > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-stage-outer > .owl-stage > .active.owl-item:nth-child(2) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid--content-alignment-left.c-grid--overflow-scrolling.c-grid--image-size-large > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-stage-outer > .owl-stage > .active.owl-item:nth-child(3) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid--content-alignment-left.c-grid--overflow-scrolling.c-grid--image-size-large > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-stage-outer > .owl-stage > .owl-item:nth-child(4) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid--content-alignment-left.c-grid--overflow-scrolling.c-grid--image-size-large > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-stage-outer > .owl-stage > .owl-item:nth-child(7) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid--content-alignment-left.c-grid--overflow-scrolling.c-grid--image-size-large > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-stage-outer > .owl-stage > .owl-item:nth-child(8) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid--content-alignment-left.c-grid--overflow-scrolling.c-grid--image-size-large > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-stage-outer > .owl-stage > .owl-item:nth-child(9) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid--content-alignment-left.c-grid--overflow-scrolling.c-grid--image-size-large > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-stage-outer > .owl-stage > .owl-item:nth-child(10) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.u-theme-dyreparken-secondary-light > .c-module__container > .c-billboard--variant-light.c-billboard--left.c-billboard--split > .c-billboard__inner > .c-billboard__image[itemtype="http://schema.org/ImageObject"][target=""]`
- `.c-billboard__image[href$="app/"][itemtype="http://schema.org/ImageObject"]`
- `.c-footer__app__links > a:nth-child(1)`
- `.c-footer__app__links > a:nth-child(2)`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 6

#### Affected Elements:

- `.c-module--grid.u-theme-dyreparken-primary.c-module:nth-child(15) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-nav > .owl-prev.disabled[role="presentation"]`
- `.c-module--grid.u-theme-dyreparken-primary.c-module:nth-child(15) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-nav > .owl-next[role="presentation"][type="button"]`
- `.u-theme-dyreparken-secondary.c-module--grid.c-module:nth-child(17) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-nav > .owl-prev.disabled[role="presentation"]`
- `.u-theme-dyreparken-secondary.c-module--grid.c-module:nth-child(17) > .c-module__container--full-width.c-module__container > .c-grid--image-size-bleeding.c-grid--content-alignment-left.c-grid--overflow-scrolling > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-nav > .owl-next[role="presentation"][type="button"]`
- `.c-grid--content-alignment-left.c-grid--overflow-scrolling.c-grid--image-size-large > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-nav > .owl-prev.disabled[role="presentation"]`
- `.c-grid--content-alignment-left.c-grid--overflow-scrolling.c-grid--image-size-large > .c-grid__items-wrap > .container > .js-overflow-scrolling.owl-carousel.owl-loaded > .owl-nav > .owl-next[role="presentation"][type="button"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- `iframe[title="reCAPTCHA"], .rc-anchor-normal-footer > .rc-anchor-pt > a:nth-child(1)`
- `iframe[title="reCAPTCHA"], .rc-anchor-normal-footer > .rc-anchor-pt > a:nth-child(3)`
- `iframe[title="reCAPTCHA"], .rc-anchor-invisible-text > span`
- `iframe[title="reCAPTCHA"], #rc-anchor-invisible-classic-warning`
