# WCAG Violations Report for Vy Buss AS

**Timestamp:** 2026-11-04T05:40:33.824Z
**URL:** [https://www.vybuss.no/#!/](https://www.vybuss.no/#!/)
**Total Violations:** 6

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.expand-block__container:nth-child(1) > .expand-block__header[data-toggle="expand"]`
  - **HTML:** `<div class="expand-block__header" aria-expanded="false" data-toggle="expand" data-target="#00f6d2140d594831b345122b17f997be">Billettkjøp <span class="icon-plus"></span></div>`
  - **Failure summary:** Fix all of the following: ARIA attribute is not allowed: aria-expanded="false"

- **Target:** `.expand-block__container:nth-child(2) > .expand-block__header[data-toggle="expand"]`
  - **HTML:** `<div class="expand-block__header" aria-expanded="false" data-toggle="expand" data-target="#9bc987a8d4534735a059f9679ac998b1">Reiseinformasjon <span class="icon-plus"></span></div>`
  - **Failure summary:** Fix all of the following: ARIA attribute is not allowed: aria-expanded="false"

- **Target:** `.expand-block__container:nth-child(3) > .expand-block__header[data-toggle="expand"]`
  - **HTML:** `<div class="expand-block__header" aria-expanded="false" data-toggle="expand" data-target="#6da62d610ec34089a95440743a5c2c03">Endring og avbestilling <span class="icon-plus"></span></div>`
  - **Failure summary:** Fix all of the following: ARIA attribute is not allowed: aria-expanded="false"

- **Target:** `.expand-block__container:nth-child(4) > .expand-block__header[data-toggle="expand"]`
  - **HTML:** `<div class="expand-block__header" aria-expanded="false" data-toggle="expand" data-target="#f027a7f3bb2446f3a28f5e9324afe8a9">Kundeservice <span class="icon-plus"></span></div>`
  - **Failure summary:** Fix all of the following: ARIA attribute is not allowed: aria-expanded="false"


### Form elements must have labels

- **Impact:** critical
- **Description:** Ensure every form element has a label
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#Origin > .angucomplete-holder > .form__input[ng-model="searchStr"][ng-disabled="disableInput"]`
  - **HTML:** `<input ng-model="searchStr" ng-disabled="disableInput" aria-label="" type="text" placeholder="" ng-focus="onFocusHandler()" class="form__input ng-empty" ng-blur="hideResults($event)" autocapitalize="off" autocorrect="off" autocomplete="off…`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…

- **Target:** `#Destination > .angucomplete-holder > .form__input[ng-model="searchStr"][ng-disabled="disableInput"]`
  - **HTML:** `<input ng-model="searchStr" ng-disabled="disableInput" aria-label="" type="text" placeholder="" ng-focus="onFocusHandler()" class="form__input ng-empty" ng-blur="hideResults($event)" autocapitalize="off" autocorrect="off" autocomplete="off…`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html class="is-web" lang="no" data-build="1.0.9792.17156" data-machine="server-2397085" data-pageid="21" xml:lang="no" xmlns="http://www.w3.org/1999/xhtml">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 1

#### Affected Elements:

- **Target:** `meta[name="viewport"]`
  - **HTML:** `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">`
  - **Failure summary:** Fix any of the following: user-scalable on <meta> tag disables zooming on mobile devices


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html class="is-web" lang="no" data-build="1.0.9792.17156" data-machine="server-2397085" data-pageid="21" xml:lang="no" xmlns="http://www.w3.org/1999/xhtml">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 17

#### Affected Elements:

- **Target:** `label[for="Origin"]`
  - **HTML:** `<label for="Origin" class="ng-binding">Fra</label>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#Origin > .angucomplete-holder > .form__input[ng-model="searchStr"][ng-disabled="disableInput"]`
  - **HTML:** `<input ng-model="searchStr" ng-disabled="disableInput" aria-label="" type="text" placeholder="" ng-focus="onFocusHandler()" class="form__input ng-empty" ng-blur="hideResults($event)" autocapitalize="off" autocorrect="off" autocomplete="off…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `label[for="Destination"]`
  - **HTML:** `<label for="Destination" class="ng-binding">Til</label>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#Destination > .angucomplete-holder > .form__input[ng-model="searchStr"][ng-disabled="disableInput"]`
  - **HTML:** `<input ng-model="searchStr" ng-disabled="disableInput" aria-label="" type="text" placeholder="" ng-focus="onFocusHandler()" class="form__input ng-empty" ng-blur="hideResults($event)" autocapitalize="off" autocorrect="off" autocomplete="off…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#DatesDesktop`
  - **HTML:** `<div class="searchjourney__dates ng-scope" ng-if="!isMobile" id="DatesDesktop">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.searchjourney__travelers > .searchjourney__item > .searchjourney__group`
  - **HTML:** `<div class="searchjourney__group">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.slick-current`
  - **HTML:** `<div class="slide__item slide__item--headline slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" style="width: 352px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-slick-index="1"]`
  - **HTML:** `<div class="slide__item slide__item--headline slick-slide slick-active" data-slick-index="1" aria-hidden="false" tabindex="0" style="width: 352px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-slick-index="2"]`
  - **HTML:** `<div class="slide__item slide__item--headline slick-slide slick-active" data-slick-index="2" aria-hidden="false" tabindex="0" style="width: 352px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.block__wrapper:nth-child(3) > .block__header`
  - **HTML:** `<div class="block__header"> <h2>Nyttig informasjon</h2> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.expand-block__container:nth-child(1) > .expand-block__header[data-toggle="expand"]`
  - **HTML:** `<div class="expand-block__header" aria-expanded="false" data-toggle="expand" data-target="#00f6d2140d594831b345122b17f997be">Billettkjøp <span class="icon-plus"></span></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.expand-block__container:nth-child(2) > .expand-block__header[data-toggle="expand"]`
  - **HTML:** `<div class="expand-block__header" aria-expanded="false" data-toggle="expand" data-target="#9bc987a8d4534735a059f9679ac998b1">Reiseinformasjon <span class="icon-plus"></span></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.expand-block__container:nth-child(3) > .expand-block__header[data-toggle="expand"]`
  - **HTML:** `<div class="expand-block__header" aria-expanded="false" data-toggle="expand" data-target="#6da62d610ec34089a95440743a5c2c03">Endring og avbestilling <span class="icon-plus"></span></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.expand-block__container:nth-child(4) > .expand-block__header[data-toggle="expand"]`
  - **HTML:** `<div class="expand-block__header" aria-expanded="false" data-toggle="expand" data-target="#f027a7f3bb2446f3a28f5e9324afe8a9">Kundeservice <span class="icon-plus"></span></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.js-group-block.block__wrapper:nth-child(4)`
  - **HTML:** `<div class="block__wrapper js-group-block">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.js-group-block.block__wrapper:nth-child(5)`
  - **HTML:** `<div class="block__wrapper js-group-block">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#kindly-chat-api > div, .sc-9dlu7b-2`
  - **HTML:** `<div class="sc-9dlu7b-2 gwaibZ"><div class="sc-9dlu7b-0 itlTMI"><div><div class="sc-9dlu7b-1 dEFzpK">Hvor er bussen?</div></div></div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

