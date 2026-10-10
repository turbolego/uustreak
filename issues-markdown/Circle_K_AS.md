# WCAG Violations Report for Circle K AS

**Timestamp:** 2026-10-10T08:14:03.663Z
**URL:** [https://www.circlek.no/](https://www.circlek.no/)
**Total Violations:** 7

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 5

#### Affected Elements:

- **Target:** `#uk-slider-3`
  - **HTML:** `<li class="uk-width-4-4 uk-slide-active uk-active" role="tabpanel" aria-label="1 of 3" tabindex="-1" aria-hidden="false" id="uk-slider-3">`
  - **Failure summary:** Fix any of the following: ARIA role tabpanel is not allowed for given element

- **Target:** `#uk-slider-6`
  - **HTML:** `<li role="tabpanel" aria-label="1 of 7" tabindex="-1" class="uk-slide-active uk-active" aria-hidden="false" id="uk-slider-6">`
  - **Failure summary:** Fix any of the following: ARIA role tabpanel is not allowed for given element

- **Target:** `#uk-slider-7`
  - **HTML:** `<li role="tabpanel" aria-label="2 of 7" tabindex="-1" class="uk-active" aria-hidden="false" id="uk-slider-7">`
  - **Failure summary:** Fix any of the following: ARIA role tabpanel is not allowed for given element

- **Target:** `#uk-slider-8`
  - **HTML:** `<li role="tabpanel" aria-label="3 of 7" tabindex="-1" class="uk-active" aria-hidden="false" id="uk-slider-8">`
  - **Failure summary:** Fix any of the following: ARIA role tabpanel is not allowed for given element

- **Target:** `#uk-slider-9`
  - **HTML:** `<li role="tabpanel" aria-label="4 of 7" tabindex="-1" class="uk-active" aria-hidden="false" id="uk-slider-9">`
  - **Failure summary:** Fix any of the following: ARIA role tabpanel is not allowed for given element


### ARIA dialog and alertdialog nodes should have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA dialog and alertdialog node has an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-dialog-name?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#main-menu`
  - **HTML:** `<div id="main-menu" class="ck-slide-menu" role="dialog">`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection`
  - **HTML:** `<a id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection" class="cb-button cb-default cb-align-center cb-text-bold">Tillat utvalgt</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.75 (foreground color: #909090, background color: #eeeeee, font size: 11.3pt (15px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`
  - **HTML:** `<a id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll" class="cb-button cb-primary cb-align-center cb-text-bold">Tillat alle cookies</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.06 (foreground color: #f7f5f2, background color: #4cc36c, font size: 11.3pt (15px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `.cb-details`
  - **HTML:** `<a href="#cb-details" cb-toggle="" class="cb-details cb-align-center">DETALJER <span class="cb-icon"><svg width="14" height="10" viewBox="0 0 14 10" data-svg="chevron-down"><polyline fill="none" stroke="#313131" stroke-width="2" points="2 …`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.25 (foreground color: #4cc36c, background color: #ffffff, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.uk-visible-toggle`
  - **HTML:** `<div class="uk-position-relative..." tabindex="-1" aria-label="Carousel slider" uk-slider=" autoplay: 0..." role="region" aria-roledescription="carousel" data-once="ck-uikit-carousel-ac...">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 2

#### Affected Elements:

- **Target:** `#uk-slider-1`
  - **HTML:** `<ul class="uk-slider-items uk-grid uk-grid-collapse" uk-height-match="target: .slide-text" aria-live="polite" role="presentation" id="uk-slider-1" style="transform: translate3d(0px, 0px, 0px);">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `#uk-slider-2`
  - **HTML:** `<ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m" uk-height-match="h2" aria-live="polite" role="presentation" id="uk-slider-2" style="transform: translate3d(0px, 0px, 0px);">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `#cookie-bot`
  - **HTML:** `<div id="cookie-bot" class="cb-modal cb-modal-open" lang="nb" dir="ltr" ng-non-bindable="" name="cookie-bot" style="display: block; font-size: 0.9375rem;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.focusable`
  - **HTML:** `<a href="#main-content" class="visually-hidden focusable"> Hopp til hovedinnhold </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bottom-region`
  - **HTML:** `<div class="d-region uk-container uk-container-large bottom-region">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### [role="img"] and [role="image"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] and [role="image"] elements have alternative text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 4

#### Affected Elements:

- **Target:** `span[uk-icon="icon: facebook;"]`
  - **HTML:** `<span uk-icon="icon: facebook;" role="img" aria-hidden="false" class="uk-icon"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3…`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

- **Target:** `span[uk-icon="icon: instagram;"]`
  - **HTML:** `<span uk-icon="icon: instagram;" role="img" aria-hidden="false" class="uk-icon">`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

- **Target:** `span[uk-icon="icon: linkedin;"]`
  - **HTML:** `<span uk-icon="icon: linkedin;" role="img" aria-hidden="false" class="uk-icon">`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

- **Target:** `span[uk-icon="icon: youtube;"]`
  - **HTML:** `<span uk-icon="icon: youtube;" role="img" aria-hidden="false" class="uk-icon">`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

