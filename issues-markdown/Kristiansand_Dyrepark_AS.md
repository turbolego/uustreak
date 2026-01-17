# WCAG Violations Report for Kristiansand Dyrepark AS

**Timestamp:** 2026-01-17T00:40:40.742Z
**URL:** [https://www.dyreparken.no/#](https://www.dyreparken.no/#)
**Total Violations:** 7

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 2

#### Affected Elements:

- `.owl-prev`
- `.owl-next`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- `.owl-prev`
- `.owl-next`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.c-grid--image-size-small > .c-grid__items > .c-grid__item:nth-child(1) > .c-grid__item__content > .c-grid__item__title.h4`

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
- **Count:** 31

#### Affected Elements:

- `#CybotCookiebotDialogBodyContentText > a[href$="cookies/"]`
- `.c-grid--image-size-small > .c-grid__items > .c-grid__item:nth-child(2) > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="contain"][title=""]`
- `.c-grid--image-size-small > .c-grid__items > .c-grid__item:nth-child(3) > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="contain"][title=""]`
- `.c-grid__items > .c-grid__item:nth-child(1) > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="cover"][title=""]`
- `.c-grid__item:nth-child(2) > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="cover"][title=""]`
- `.c-grid__item:nth-child(3) > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="cover"][title=""]`
- `.c-grid__item:nth-child(4) > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="cover"][title=""]`
- `.c-grid__item:nth-child(5) > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="cover"][title=""]`
- `.c-grid__item:nth-child(8) > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="cover"][title=""]`
- `.active.owl-item:nth-child(1) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="cover"][title=""]`
- `.active.owl-item:nth-child(2) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="cover"][title=""]`
- `.owl-item:nth-child(4) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="cover"][title=""]`
- `.owl-item:nth-child(6) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="cover"][title=""]`
- `.owl-item:nth-child(7) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="cover"][title=""]`
- `.owl-item:nth-child(9) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="cover"][title=""]`
- `.owl-item:nth-child(10) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="cover"][title=""]`
- `.owl-item:nth-child(11) > .c-grid__item > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="cover"][title=""]`
- `.u-theme-dyreparken-secondary-light.c-module--split.c-module--billboard:nth-child(11) > .c-module__container > .c-billboard--variant-light.c-billboard--split > .c-billboard__inner > .c-billboard__image[itemtype="http://schema.org/ImageObject"][itemscope="itemscope"]`
- `.c-billboard--poster > .c-billboard__inner > .c-billboard__image[itemtype="http://schema.org/ImageObject"][itemscope="itemscope"]`
- `.c-grid--image-size-medium > .c-grid__items > .c-grid__item:nth-child(1) > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="contain"][title=""]`
- `.c-grid--image-size-medium > .c-grid__items > .c-grid__item:nth-child(2) > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="contain"][title=""]`
- `.c-grid--image-size-medium > .c-grid__items > .c-grid__item:nth-child(3) > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="contain"][title=""]`
- `.c-grid__item:nth-child(4) > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="contain"][title=""]`
- `.c-grid__item:nth-child(5) > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="contain"][title=""]`
- `.c-grid__item:nth-child(6) > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="contain"][title=""]`
- `.c-grid__item:nth-child(7) > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="contain"][title=""]`
- `.c-grid__item:nth-child(8) > .c-grid__item-image-wrapper > .c-grid__item__image[data-object-fit="contain"][title=""]`
- `.u-theme-dyreparken-secondary-light.c-module--split.c-module--billboard:nth-child(15) > .c-module__container > .c-billboard--variant-light.c-billboard--split > .c-billboard__inner > .c-billboard__image[itemtype="http://schema.org/ImageObject"][itemscope="itemscope"]`
- `.c-billboard__image[href$="app/"][itemtype="http://schema.org/ImageObject"]`
- `.c-footer__app__links > a:nth-child(1)`
- `.c-footer__app__links > a:nth-child(2)`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 2

#### Affected Elements:

- `.owl-prev`
- `.owl-next`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- `iframe[title="reCAPTCHA"], .rc-anchor-normal-footer > .rc-anchor-pt > a:nth-child(1)`
- `iframe[title="reCAPTCHA"], .rc-anchor-normal-footer > .rc-anchor-pt > a:nth-child(3)`
- `iframe[title="reCAPTCHA"], .rc-anchor-invisible-text > span`
