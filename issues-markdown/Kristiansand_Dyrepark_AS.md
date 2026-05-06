# WCAG Violations Report for Kristiansand Dyrepark AS

**Timestamp:** 2026-05-06T01:23:21.220Z
**URL:** [https://www.dyreparken.no/#](https://www.dyreparken.no/#)
**Total Violations:** 7

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 4

#### Affected Elements:

- `.c-campaigns__items > .owl-nav > .owl-prev.disabled[role="presentation"]`
- `.owl-next.disabled[role="presentation"]`
- `.js-overflow-scrolling > .owl-nav > .owl-prev.disabled[role="presentation"]`
- `.js-overflow-scrolling > .owl-nav > .owl-next[role="presentation"][type="button"]`

### Elements must only use permitted ARIA attributes

- **Impact:** serious
- **Description:** Ensure ARIA attributes are not prohibited for an element's role
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[width="640"], #movie_player`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 4

#### Affected Elements:

- `.c-campaigns__items > .owl-nav > .owl-prev.disabled[role="presentation"]`
- `.owl-next.disabled[role="presentation"]`
- `.js-overflow-scrolling > .owl-nav > .owl-prev.disabled[role="presentation"]`
- `.js-overflow-scrolling > .owl-nav > .owl-next[role="presentation"][type="button"]`

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
- **Count:** 33

#### Affected Elements:

- `#CybotCookiebotDialogBodyContentText > a[href$="cookies/"]`
- `.c-billboard--variant-light.c-billboard--right.c-billboard--split > .c-billboard__inner > .c-billboard__image[itemtype="http://schema.org/ImageObject"][itemscope="itemscope"]`
- `.u-theme-dyreparken-secondary.c-module--billboard.c-module:nth-child(9) > .c-module__container > .c-billboard--poster.c-billboard--right.c-billboard--variant-default > .c-billboard__inner > .c-billboard__image[itemtype="http://schema.org/ImageObject"][itemscope="itemscope"]`
- `.c-module--grid.u-theme-dyreparken-primary.c-module:nth-child(10) > .c-module__container > .c-grid--columns-4.c-grid--columns-small-2.c-grid--image-size-large > .c-grid__items > .c-grid__item:nth-child(1) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-module--grid.u-theme-dyreparken-primary.c-module:nth-child(10) > .c-module__container > .c-grid--columns-4.c-grid--columns-small-2.c-grid--image-size-large > .c-grid__items > .c-grid__item:nth-child(2) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-module--grid.u-theme-dyreparken-primary.c-module:nth-child(10) > .c-module__container > .c-grid--columns-4.c-grid--columns-small-2.c-grid--image-size-large > .c-grid__items > .c-grid__item:nth-child(3) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-module--grid.u-theme-dyreparken-primary.c-module:nth-child(12) > .c-module__container > .c-grid--columns-4.c-grid--columns-small-2.c-grid--image-size-large > .c-grid__items > .c-grid__item:nth-child(1) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-module--grid.u-theme-dyreparken-primary.c-module:nth-child(12) > .c-module__container > .c-grid--columns-4.c-grid--columns-small-2.c-grid--image-size-large > .c-grid__items > .c-grid__item:nth-child(2) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-module--grid.u-theme-dyreparken-primary.c-module:nth-child(12) > .c-module__container > .c-grid--columns-4.c-grid--columns-small-2.c-grid--image-size-large > .c-grid__items > .c-grid__item:nth-child(3) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-module--grid.u-theme-dyreparken-primary.c-module:nth-child(12) > .c-module__container > .c-grid--columns-4.c-grid--columns-small-2.c-grid--image-size-large > .c-grid__items > .c-grid__item:nth-child(4) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-module--grid.u-theme-dyreparken-primary.c-module:nth-child(12) > .c-module__container > .c-grid--columns-4.c-grid--columns-small-2.c-grid--image-size-large > .c-grid__items > .c-grid__item:nth-child(6) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-module--grid.u-theme-dyreparken-primary.c-module:nth-child(12) > .c-module__container > .c-grid--columns-4.c-grid--columns-small-2.c-grid--image-size-large > .c-grid__items > .c-grid__item:nth-child(7) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.u-theme-dyreparken-secondary.c-module--billboard.c-module:nth-child(14) > .c-module__container > .c-billboard--poster.c-billboard--right.c-billboard--variant-default > .c-billboard__inner > .c-billboard__image[itemtype="http://schema.org/ImageObject"][itemscope="itemscope"]`
- `.c-grid--image-size-bleeding > .c-grid__items > .c-grid__item:nth-child(4) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.u-bg-background > .c-module__container > .c-grid--columns-4.c-grid--columns-small-2.c-grid--image-size-large > .c-grid__items > .c-grid__item:nth-child(1) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.u-bg-background > .c-module__container > .c-grid--columns-4.c-grid--columns-small-2.c-grid--image-size-large > .c-grid__items > .c-grid__item:nth-child(2) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.u-bg-background > .c-module__container > .c-grid--columns-4.c-grid--columns-small-2.c-grid--image-size-large > .c-grid__items > .c-grid__item:nth-child(5) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.u-bg-background > .c-module__container > .c-grid--columns-4.c-grid--columns-small-2.c-grid--image-size-large > .c-grid__items > .c-grid__item:nth-child(6) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.u-bg-background > .c-module__container > .c-grid--columns-4.c-grid--columns-small-2.c-grid--image-size-large > .c-grid__items > .c-grid__item:nth-child(7) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid--columns-small-1 > .c-grid__items > .c-grid__item:nth-child(1) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid--columns-small-1 > .c-grid__items > .c-grid__item:nth-child(2) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-grid--columns-small-1 > .c-grid__items > .c-grid__item:nth-child(3) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.active.owl-item:nth-child(1) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.active.owl-item:nth-child(2) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.active.owl-item:nth-child(3) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.owl-item:nth-child(4) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.owl-item:nth-child(5) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.owl-item:nth-child(6) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.owl-item:nth-child(7) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.owl-item:nth-child(8) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
- `.c-billboard__image[href$="app/"][itemtype="http://schema.org/ImageObject"]`
- `.c-footer__app__links > a:nth-child(1)`
- `.c-footer__app__links > a:nth-child(2)`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 4

#### Affected Elements:

- `.c-campaigns__items > .owl-nav > .owl-prev.disabled[role="presentation"]`
- `.owl-next.disabled[role="presentation"]`
- `.js-overflow-scrolling > .owl-nav > .owl-prev.disabled[role="presentation"]`
- `.js-overflow-scrolling > .owl-nav > .owl-next[role="presentation"][type="button"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `iframe[title="reCAPTCHA"], .rc-anchor-invisible-text`
