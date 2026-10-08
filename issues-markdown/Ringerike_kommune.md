# WCAG Violations Report for Ringerike kommune

**Timestamp:** 2026-10-08T10:29:29.563Z
**URL:** [https://www.ringerike.kommune.no/](https://www.ringerike.kommune.no/)
**Total Violations:** 5

## Violation Details

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Embedded code from Ekstern iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#portalframe1`
  - **HTML:** `<iframe src="//prokomresources.pr..." width="100%" scrolling="no" id="portalframe1" frameborder="0" style="overflow: hidden; mi...">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### <html> element must have a lang attribute

- **Impact:** serious
- **Description:** Ensure every HTML document has a lang attribute
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/html-has-lang?application=playwright
- **Tags:** cat.language, wcag2a, wcag311, TTv5, TT11.a, EN-301-549, EN-9.3.1.1, ACT, RGAAv4, RGAA-8.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html class="no-js" style="height: 100%;">`
  - **Failure summary:** Fix any of the following: The <html> element does not have a lang attribute


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 11

#### Affected Elements:

- **Target:** `div[data-blockid="46"] > .ssp__panel__news-item:nth-child(1) > .ssp__panel__news-item-anchor > .ssp__panel__news-image-text > .row > .col-sm-5.pr-15.pr-sm-0 > .ssp__panel__news-image[data-responsiveimage="true"][width="204"]`
  - **HTML:** `<img class="ssp__panel__news-image" data-original="/link/4a174b53cf53418fa43cc3447ba8a3cf.aspx" data-responsiveimage="true" width="204" height="" src="https://res.cloudinary.com/ssp/image/fetch/w_204,q_100,c_fill/https://www.ringerike.komm…`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `div[data-blockid="46"] > .ssp__panel__news-item:nth-child(2) > .ssp__panel__news-item-anchor > .ssp__panel__news-image-text > .row > .col-sm-5.pr-15.pr-sm-0 > .ssp__panel__news-image[data-responsiveimage="true"][width="204"]`
  - **HTML:** `<img class="ssp__panel__news-image" data-original="/link/424424ee12934e7caee070db221baea5.aspx" data-responsiveimage="true" width="204" height="" src="https://res.cloudinary.com/ssp/image/fetch/w_204,q_100,c_fill/https://www.ringerike.komm…`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `div[data-blockid="46"] > .ssp__panel__news-item:nth-child(3) > .ssp__panel__news-item-anchor > .ssp__panel__news-image-text > .row > .col-sm-5.pr-15.pr-sm-0 > .ssp__panel__news-image[data-responsiveimage="true"][width="204"]`
  - **HTML:** `<img class="ssp__panel__news-image" data-original="/link/5b3109868b574c18a5fd35ec7f3c274d.aspx" data-responsiveimage="true" width="204" height="" src="https://res.cloudinary.com/ssp/image/fetch/w_204,q_100,c_fill/https://www.ringerike.komm…`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `div[data-blockid="46"] > .ssp__panel__news-item:nth-child(4) > .ssp__panel__news-item-anchor > .ssp__panel__news-image-text > .row > .col-sm-5.pr-15.pr-sm-0 > .ssp__panel__news-image[data-responsiveimage="true"][width="204"]`
  - **HTML:** `<img class="ssp__panel__news-image" data-original="/link/4b8e8a6952984922b8dd075a863432ff.aspx" data-responsiveimage="true" width="204" height="" src="https://res.cloudinary.com/ssp/image/fetch/w_204,q_100,c_fill/https://www.ringerike.komm…`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `div[data-blockid="46"] > .ssp__panel__news-item:nth-child(5) > .ssp__panel__news-item-anchor > .ssp__panel__news-image-text > .row > .col-sm-5.pr-15.pr-sm-0 > .ssp__panel__news-image[data-responsiveimage="true"][width="204"]`
  - **HTML:** `<img class="ssp__panel__news-image" data-original="/link/f529da15488947f38241d9485ce27a8f.aspx" data-responsiveimage="true" width="204" height="" src="https://res.cloudinary.com/ssp/image/fetch/w_204,q_100,c_fill/https://www.ringerike.komm…`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `div[data-blockid="12423"] > .ssp__panel__news-item:nth-child(1) > .ssp__panel__news-item-anchor > .ssp__panel__news-image-text > .row > .col-sm-5.pr-15.pr-sm-0 > .ssp__panel__news-image[data-responsiveimage="true"][width="204"]`
  - **HTML:** `<img class="ssp__panel__news-image" data-original="/link/a84841e336c44973955689234f8313a6.aspx" data-responsiveimage="true" width="204" height="" src="https://res.cloudinary.com/ssp/image/fetch/w_204,q_100,c_fill/https://www.ringerike.komm…`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `div[data-blockid="12423"] > .ssp__panel__news-item:nth-child(2) > .ssp__panel__news-item-anchor > .ssp__panel__news-image-text > .row > .col-sm-5.pr-15.pr-sm-0 > .ssp__panel__news-image[data-responsiveimage="true"][width="204"]`
  - **HTML:** `<img class="ssp__panel__news-image" data-original="/link/6d57924461ec4e6692383de4f5cf2219.aspx" data-responsiveimage="true" width="204" height="" src="https://res.cloudinary.com/ssp/image/fetch/w_204,q_100,c_fill/https://www.ringerike.komm…`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `div[data-blockid="12423"] > .ssp__panel__news-item:nth-child(3) > .ssp__panel__news-item-anchor > .ssp__panel__news-image-text > .row > .col-sm-5.pr-15.pr-sm-0 > .ssp__panel__news-image[data-responsiveimage="true"][width="204"]`
  - **HTML:** `<img class="ssp__panel__news-image" data-original="/link/310e51e1e10e4799b9c322d620037fc4.aspx" data-responsiveimage="true" width="204" height="" src="https://res.cloudinary.com/ssp/image/fetch/w_204,q_100,c_fill/https://www.ringerike.komm…`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `div[data-blockid="12423"] > .ssp__panel__news-item:nth-child(4) > .ssp__panel__news-item-anchor > .ssp__panel__news-image-text > .row > .col-sm-5.pr-15.pr-sm-0 > .ssp__panel__news-image[data-responsiveimage="true"][width="204"]`
  - **HTML:** `<img class="ssp__panel__news-image" data-original="/link/36ed958a5daf4a94a8e79584a4141b2d.aspx" data-responsiveimage="true" width="204" height="" src="https://res.cloudinary.com/ssp/image/fetch/w_204,q_100,c_fill/https://www.ringerike.komm…`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `div[data-blockid="12423"] > .ssp__panel__news-item:nth-child(5) > .ssp__panel__news-item-anchor > .ssp__panel__news-image-text > .row > .col-sm-5.pr-15.pr-sm-0 > .ssp__panel__news-image[data-responsiveimage="true"][width="204"]`
  - **HTML:** `<img class="ssp__panel__news-image" data-original="/link/e228d69f18ea46ba96873522c76d4db0.aspx" data-responsiveimage="true" width="204" height="" src="https://res.cloudinary.com/ssp/image/fetch/w_204,q_100,c_fill/https://www.ringerike.komm…`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.ssp__footer-wave`
  - **HTML:** `<img class="ssp__footer-wave" src="/external/ssp/files/Ringerike-footerlines-green.svg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#search__input--id`
  - **HTML:** `<input type="text" id="search__input--id" class="search__input" title="Skriv spørsmålet ditt her" value="" placeholder="Hva lurer du på?">`
  - **Failure summary:** Fix all of the following: Only title used to generate label for form element


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 10

#### Affected Elements:

- **Target:** `div:nth-child(8) > div:nth-child(1)`
  - **HTML:** `<div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div:nth-child(8) > div:nth-child(2)`
  - **HTML:** `<div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.ssp__panel--grey.ssp__panel.mb-30 > .ssp__panel__title`
  - **HTML:** `<h2 class="ssp__panel__title"> Hva skjer? </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.ssp__timespan`
  - **HTML:** `<div class="ssp__timespan">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#portalframe1, #container`
  - **HTML:** `<div id="container">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.mt-20`
  - **HTML:** `<div class="row mt-20"> <div class="col-md-12 text-left-sm"> <a class="btn btn-primary ssp__panel__button" href="/kalender/">Se hele aktivitetskalenderen</a> </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.ssp__fluid-panel > div > div > div > .container > .row > .col-md-6.mb-30.col-xs-12:nth-child(2)`
  - **HTML:** `<div class="col-xs-12 col-md-6 mb-30">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.test-wrapper`
  - **HTML:** `<div class="test-wrapper"> <img class="ssp__footer-wave" src="/external/ssp/files/Ringerike-footerlines-green.svg"> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, #vfact_testaudio`
  - **HTML:** `<audio id="vfact_testaudio" controls=""> not supported</audio>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, h1`
  - **HTML:** `<h1>Her er framen</h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

