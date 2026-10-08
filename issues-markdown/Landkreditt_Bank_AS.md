# WCAG Violations Report for Landkreditt Bank AS

**Timestamp:** 2026-10-08T10:42:26.582Z
**URL:** [https://www.landkreditt.no/](https://www.landkreditt.no/)
**Total Violations:** 7

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 4

#### Affected Elements:

- **Target:** `#declineButton`
  - **HTML:** `<button tabindex="0" onclick="CookieInformation.declineAllCategories()" aria-label="Avvis alle" id="declineButton" class="coi-banner__decline" role="alert" aria-atomic="true" style="display: flex;">Avvis alle</button>`
  - **Failure summary:** Fix any of the following: ARIA role alert is not allowed for given element

- **Target:** `.swiper-slide-active`
  - **HTML:** `<li class="threeColumns swiper-slide no-pad columnItem clearfix swiper-slide-active" style="width: 1012.8px; margin-right: 16px;" role="group" aria-label="1 / 3">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `.swiper-slide-next`
  - **HTML:** `<li class="threeColumns swiper-slide no-pad columnItem clearfix swiper-slide-next" style="width: 1012.8px; margin-right: 16px;" role="group" aria-label="2 / 3">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `li[aria-label="3 / 3"]`
  - **HTML:** `<li class="threeColumns swiper-slide no-pad columnItem clearfix" style="width: 1012.8px; margin-right: 16px;" role="group" aria-label="3 / 3">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element


### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 6

#### Affected Elements:

- **Target:** `#calculator-f90346a8-f961-4000-81fb-2539f3942ff7 > .container-responsive.container-fluid > .row > .col-sm-6.col-md-5:nth-child(1) > .panel-calc > .row:nth-child(1) > .slider-input[data-input-size="large"] > .col-sm-12:nth-child(2) > .col-inner > .slider-control > .btn-minus.btn-haptic[data-bind="click: decrementValue"]`
  - **HTML:** `<button class="btn btn-haptic btn-minus" data-bind="click: decrementValue" tabindex="-1"><span class="icon icon-btn-minus"></span></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `#calculator-f90346a8-f961-4000-81fb-2539f3942ff7 > .container-responsive.container-fluid > .row > .col-sm-6.col-md-5:nth-child(1) > .panel-calc > .row:nth-child(1) > .slider-input[data-input-size="large"] > .col-sm-12:nth-child(2) > .col-inner > .slider-control > .btn-plus.btn-haptic[data-bind="click: incrementValue"]`
  - **HTML:** `<button class="btn btn-haptic btn-plus" data-bind="click: incrementValue" tabindex="-1"><span class="icon icon-btn-plus"></span></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `#calculator-f90346a8-f961-4000-81fb-2539f3942ff7 > .container-responsive.container-fluid > .row > .col-sm-6.col-md-5:nth-child(1) > .panel-calc > .row:nth-child(2) > .slider-input[data-input-size="small"] > .col-sm-12:nth-child(2) > .col-inner > .slider-control > .btn-minus.btn-haptic[data-bind="click: decrementValue"]`
  - **HTML:** `<button class="btn btn-haptic btn-minus" data-bind="click: decrementValue" tabindex="-1"><span class="icon icon-btn-minus"></span></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `#calculator-f90346a8-f961-4000-81fb-2539f3942ff7 > .container-responsive.container-fluid > .row > .col-sm-6.col-md-5:nth-child(1) > .panel-calc > .row:nth-child(2) > .slider-input[data-input-size="small"] > .col-sm-12:nth-child(2) > .col-inner > .slider-control > .btn-plus.btn-haptic[data-bind="click: incrementValue"]`
  - **HTML:** `<button class="btn btn-haptic btn-plus" data-bind="click: incrementValue" tabindex="-1"><span class="icon icon-btn-plus"></span></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `#calculator-f90346a8-f961-4000-81fb-2539f3942ff7 > .container-responsive.container-fluid > .row > .col-sm-6.col-md-5:nth-child(1) > .panel-calc > .panel-calc-slider-last.row > .slider-input[data-input-size="small"] > .col-sm-12:nth-child(2) > .col-inner > .slider-control > .btn-minus.btn-haptic[data-bind="click: decrementValue"]`
  - **HTML:** `<button class="btn btn-haptic btn-minus" data-bind="click: decrementValue" tabindex="-1"><span class="icon icon-btn-minus"></span></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `#calculator-f90346a8-f961-4000-81fb-2539f3942ff7 > .container-responsive.container-fluid > .row > .col-sm-6.col-md-5:nth-child(1) > .panel-calc > .panel-calc-slider-last.row > .slider-input[data-input-size="small"] > .col-sm-12:nth-child(2) > .col-inner > .slider-control > .btn-plus.btn-haptic[data-bind="click: incrementValue"]`
  - **HTML:** `<button class="btn btn-haptic btn-plus" data-bind="click: incrementValue" tabindex="-1"><span class="icon icon-btn-plus"></span></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `a[href$="boliglan/"] > h4`
  - **HTML:** `<h4>Flytt boliglånet</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 4

#### Affected Elements:

- **Target:** `img[alt="Hvor mye kan jeg låne?"]`
  - **HTML:** `<img alt="Hvor mye kan jeg låne?" src="/globalassets/bilder/ikoner/outline/svg/lanekalkulator-outline.svg">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Se flere nyheter"]`
  - **HTML:** `<img alt="Se flere nyheter" src="/globalassets/bilder/ikoner/outline/svg/landkreditt-nyheter.svg">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Facebook"]`
  - **HTML:** `<img src="/globalassets/bilder/ikoner/outline/svg---lys-bakgrunn-default/some-facebook.svg" alt="Facebook" width="40" height="40">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="LinkedIn"]`
  - **HTML:** `<img src="/globalassets/bilder/ikoner/outline/svg---lys-bakgrunn-default/some-linkedin.svg" alt="LinkedIn" width="40" height="40">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: Document has more than one banner landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `.page-header__nav`
  - **HTML:** `<nav class="page-header__nav">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#swiper-wrapper-9b7a2b8f3734b3f10`
  - **HTML:** `<ul class="swiper-wrapper" id="swiper-wrapper-9b7a2b8f3734b3f10" aria-live="polite" style="transform: translate3d(0px, 0px, 0px);">`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: [role=group]

