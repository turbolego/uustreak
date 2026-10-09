# WCAG Violations Report for Kristiansand Dyrepark AS

**Timestamp:** 2026-10-09T05:04:57.451Z
**URL:** [https://www.dyreparken.no/](https://www.dyreparken.no/)
**Total Violations:** 6

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.owl-prev`
  - **HTML:** `<button type="button" role="presentation" class="owl-prev disabled"></button>`
  - **Failure summary:** Fix any of the following: ARIA role presentation is not allowed for given element

- **Target:** `.owl-next`
  - **HTML:** `<button type="button" role="presentation" class="owl-next"></button>`
  - **Failure summary:** Fix any of the following: ARIA role presentation is not allowed for given element


### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.owl-prev`
  - **HTML:** `<button type="button" role="presentation" class="owl-prev disabled"></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `.owl-next`
  - **HTML:** `<button type="button" role="presentation" class="owl-next"></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.main-header__nav`
  - **HTML:** `<nav class="main-header__nav main-menu js-main-menu" itemscope="" itemtype="http://schema.org/SiteNavigationElement">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 25

#### Affected Elements:

- **Target:** `#CybotCookiebotDialogBodyContentText > a[href$="cookies/"]`
  - **HTML:** `<a href="/cookies/" style=""></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c-grid--columns-small-3 > .c-grid__items > .c-grid__item:nth-child(1) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
  - **HTML:** `<a href="https://www.dyreparken.no/skumledager/" title="" data-object-fit="cover" class="c-grid__item__image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c-grid--columns-small-3 > .c-grid__items > .c-grid__item:nth-child(2) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
  - **HTML:** `<a href="https://www.dyreparken.no/hostferie/" title="" data-object-fit="cover" class="c-grid__item__image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c-grid--columns-small-3 > .c-grid__items > .c-grid__item:nth-child(3) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
  - **HTML:** `<a href="https://www.dyreparken.no/opplevelser/dyrepresentasjoner/" title="" data-object-fit="cover" class="c-grid__item__image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c-module--grid.c-module.u-theme-dyreparken-primary:nth-child(12) > .c-module__container > .c-grid--columns-4.c-grid--image-size-large.c-grid--columns-small-2 > .c-grid__items > .c-grid__item:nth-child(1) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
  - **HTML:** `<a href="https://www.dyreparken.no/opplevelser/quest-vmf/" title="" data-object-fit="cover" class="c-grid__item__image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c-module--grid.c-module.u-theme-dyreparken-primary:nth-child(12) > .c-module__container > .c-grid--columns-4.c-grid--image-size-large.c-grid--columns-small-2 > .c-grid__items > .c-grid__item:nth-child(2) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
  - **HTML:** `<a href="https://www.dyreparken.no/opplevelser/dyrepasser-for-en-dag/" title="" data-object-fit="cover" class="c-grid__item__image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c-module--grid.c-module.u-theme-dyreparken-primary:nth-child(12) > .c-module__container > .c-grid--columns-4.c-grid--image-size-large.c-grid--columns-small-2 > .c-grid__items > .c-grid__item:nth-child(3) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
  - **HTML:** `<a href="https://www.dyreparken.no/opplevelser/morgensafari-med-frokost/" title="" data-object-fit="cover" class="c-grid__item__image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c-module--grid.c-module.u-theme-dyreparken-primary:nth-child(12) > .c-module__container > .c-grid--columns-4.c-grid--image-size-large.c-grid--columns-small-2 > .c-grid__items > .c-grid__item:nth-child(4) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
  - **HTML:** `<a href="https://www.dyreparken.no/opplevelser/dyrepasser-for-en-dag-skumle-dyr/" title="" data-object-fit="cover" class="c-grid__item__image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c-entry-content__post:nth-child(1) > .c-tease.c-tease--poster.c-tease--poi > .c-tease__image[data-object-fit="cover"]`
  - **HTML:** `<a href="https://www.dyreparken.no/opplevelser/dyrepresentasjoner/" data-object-fit="cover" class="c-tease__image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c-entry-content__post:nth-child(3) > .c-tease.c-tease--poster.c-tease--poi > .c-tease__image[data-object-fit="cover"]`
  - **HTML:** `<a href="https://www.dyreparken.no/opplevelser/bilbanen/" data-object-fit="cover" class="c-tease__image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c-grid--columns-2 > .c-grid__items > .c-grid__item:nth-child(1) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
  - **HTML:** `<a href="https://www.dyreparken.no/overnatting/pakker-og-kampanjer/" title="" data-object-fit="cover" class="c-grid__item__image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c-grid--columns-2 > .c-grid__items > .c-grid__item:nth-child(2) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
  - **HTML:** `<a href="https://www.dyreparken.no/opplevelser/kaptein-sabeltann-kveldsforestilling-2026/" title="" data-object-fit="cover" class="c-grid__item__image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c-grid--columns-2 > .c-grid__items > .c-grid__item:nth-child(3) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
  - **HTML:** `<a href="https://www.dyreparken.no/opplevelser/sirkus-jesper/" title="" data-object-fit="cover" class="c-grid__item__image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c-grid--columns-2 > .c-grid__items > .c-grid__item:nth-child(4) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
  - **HTML:** `<a href="https://www.dyreparken.no/inngangsbilletter/#tilleggsopplevelser" title="" data-object-fit="cover" class="c-grid__item__image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.u-bg-background.c-module--has-background.c-module--grid:nth-child(15) > .c-module__container > .c-grid--columns-4.c-grid--image-size-large.c-grid--columns-small-2 > .c-grid__items > .c-grid__item:nth-child(1) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
  - **HTML:** `<a href="https://www.dyreparken.no/opplevelser/dyrepresentasjon-amurtiger/" title="" data-object-fit="cover" class="c-grid__item__image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.u-bg-background.c-module--has-background.c-module--grid:nth-child(15) > .c-module__container > .c-grid--columns-4.c-grid--image-size-large.c-grid--columns-small-2 > .c-grid__items > .c-grid__item:nth-child(2) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
  - **HTML:** `<a href="https://www.dyreparken.no/opplevelser/dyrepresentasjon-gepard/" title="" data-object-fit="cover" class="c-grid__item__image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c-grid--columns-4.c-grid--image-size-large.c-grid--columns-small-2 > .c-grid__items > .c-grid__item:nth-child(5) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
  - **HTML:** `<a href="https://www.dyreparken.no/opplevelser/mot-en-dyrepasser-i-terrariet-og-laer-mer-om-dyrene-som-bor-her/" title="" data-object-fit="cover" class="c-grid__item__image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c-grid--columns-4.c-grid--image-size-large.c-grid--columns-small-2 > .c-grid__items > .c-grid__item:nth-child(6) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
  - **HTML:** `<a href="https://www.dyreparken.no/opplevelser/dyrepresentasjon-kamel/" title="" data-object-fit="cover" class="c-grid__item__image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c-grid__item:nth-child(7) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
  - **HTML:** `<a href="https://www.dyreparken.no/opplevelser/dyrepresentasjon-orangutang/" title="" data-object-fit="cover" class="c-grid__item__image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c-billboard--poster.c-billboard--right.c-billboard--variant-default > .c-billboard__inner > .c-billboard__image[itemtype="http://schema.org/ImageObject"][itemscope="itemscope"]`
  - **HTML:** `<a href="https://www.dyreparken.no/ekstradag/" target="_blank" itemscope="itemscope" itemtype="http://schema.org/ImageObject" data-object-fit="cover" class="c-billboard__image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c-grid--image-size-bleeding.c-grid--columns-3.c-grid--columns-small-2 > .c-grid__items > .c-grid__item:nth-child(4) > .c-grid__item-image-wrapper > .c-grid__item__image[title=""][data-object-fit="cover"]`
  - **HTML:** `<a href="https://www.dyreparken.no/overnatting/dyreparken-safaricamp/" title="" data-object-fit="cover" class="c-grid__item__image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c-billboard__image[href$="app/"][itemtype="http://schema.org/ImageObject"]`
  - **HTML:** `<a href="https://www.dyreparken.no/app/" target="" itemscope="itemscope" itemtype="http://schema.org/ImageObject" data-object-fit="cover" class="c-billboard__image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c-billboard--right.c-billboard--split.c-billboard--variant-default > .c-billboard__inner > .c-billboard__image[itemtype="http://schema.org/ImageObject"][itemscope="itemscope"]`
  - **HTML:** `<a href="https://www.storytel.com/no/c/famst30d15p" target="" itemscope="itemscope" itemtype="http://schema.org/ImageObject" data-object-fit="cover" class="c-billboard__image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c-footer__app__links > a:nth-child(1)`
  - **HTML:** `<a href="https://apps.apple.com/us/app/dyreparken-ny/id1465218432?ls=1">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c-footer__app__links > a:nth-child(2)`
  - **HTML:** `<a href="https://play.google.com/store/apps/details?id=com.yonoton.dyreparken">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 2

#### Affected Elements:

- **Target:** `.owl-prev`
  - **HTML:** `<button type="button" role="presentation" class="owl-prev disabled"></button>`
  - **Failure summary:** Fix all of the following: Element is not focusable.

- **Target:** `.owl-next`
  - **HTML:** `<button type="button" role="presentation" class="owl-next"></button>`
  - **Failure summary:** Fix all of the following: Element is not focusable.


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.c-header-message`
  - **HTML:** `<div class="c-header-message c-header-message--orange">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[title="reCAPTCHA"], .rc-anchor-invisible-text`
  - **HTML:** `<div class="rc-anchor-invisible-text"><span>beskyttet av <strong>reCAPTCHA</strong></span><div class="rc-anchor-pt"></div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

