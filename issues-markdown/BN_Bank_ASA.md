# WCAG Violations Report for BN Bank ASA

**Timestamp:** 2026-10-03T04:07:47.088Z
**URL:** [https://www.bnbank.no/](https://www.bnbank.no/)
**Total Violations:** 6

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.content-card--image-left > .content-card__content > .content-card__upper-content > .h3`
  - **HTML:** `<h2 class="text-left h3"></h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#heading-toggle-hvordan-bytter-jeg-til-bn-bank > h5`
  - **HTML:** `<h5>Hvordan bytter jeg til BN Bank?</h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.banner-with-everything__graphic`
  - **HTML:** `<img class="banner-with-everything__graphic" src="/Content/img/graphic-wine-red.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 7

#### Affected Elements:

- **Target:** `#heading-hvordan-bytter-jeg-til-bn-bank`
  - **HTML:** `<div class="heading" role="tab" id="heading-hvordan-bytter-jeg-til-bn-bank">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants

- **Target:** `#heading-er-virkelig-bankkortet-helt-gebyrfritt-i-bruk`
  - **HTML:** `<div class="heading" role="tab" id="heading-er-virkelig-bankkortet-helt-gebyrfritt-i-bruk">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants

- **Target:** `#heading-hvor-mye-kan-jeg-lane-til-bolig`
  - **HTML:** `<div class="heading" role="tab" id="heading-hvor-mye-kan-jeg-lane-til-bolig">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants

- **Target:** `#heading-hvor-mye-egenkapital-ma-jeg-ha-for-a-kjope-se`
  - **HTML:** `<div class="heading" role="tab" id="heading-hvor-mye-egenkapital-ma-jeg-ha-for-a-kjope-se">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants

- **Target:** `#heading-hvordan-laste-ned-mobilbank`
  - **HTML:** `<div class="heading" role="tab" id="heading-hvordan-laste-ned-mobilbank">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants

- **Target:** `#heading-hvordan-aktivere-mobilbanken`
  - **HTML:** `<div class="heading" role="tab" id="heading-hvordan-aktivere-mobilbanken">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants

- **Target:** `#heading-hvordan-fa-bankid-pa-mobil`
  - **HTML:** `<div class="heading" role="tab" id="heading-hvordan-fa-bankid-pa-mobil">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `#cookie-banner0 > .c-head`
  - **HTML:** `<div class="c-head"><div class="c-head-container"><h3 class="c-header bntext">BN Bank bruker informasjonskapsler (cookies)</h3></div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.c-body`
  - **HTML:** `<div class="c-body">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.navigation__logo`
  - **HTML:** `<div class="navigation__logo navigation__item-padding"> <a href="/"> <img alt="BNBank logo" src="/Content/img/BNBank-logo.svg"> </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.navigation__actions`
  - **HTML:** `<div class="navigation__actions navigation__item-padding navigation__theme--wine-red">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### [role="img"] and [role="image"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] and [role="image"] elements have alternative text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 6

#### Affected Elements:

- **Target:** `a[href$="lan/"] > .link-icon__content > .link-icon__left > .link-icon__icon[aria-label=""][role="img"]`
  - **HTML:** `<div class="link-icon__icon" role="img" aria-label="" style="background-image: url('/globalassets/ikoner/document-house.svg')"></div>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

- **Target:** `a[href$="sparing/"] > .link-icon__content > .link-icon__left > .link-icon__icon[aria-label=""][role="img"]`
  - **HTML:** `<div class="link-icon__icon" role="img" aria-label="" style="background-image: url('/globalassets/ikoner/coins-blue.svg')"></div>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

- **Target:** `a[aria-label="Kort"] > .link-icon__content > .link-icon__left > .link-icon__icon[aria-label=""][role="img"]`
  - **HTML:** `<div class="link-icon__icon" role="img" aria-label="" style="background-image: url('/globalassets/ikoner/kort-chip.svg')"></div>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

- **Target:** `a[aria-label="Bytte bank"] > .link-icon__content > .link-icon__left > .link-icon__icon[aria-label=""][role="img"]`
  - **HTML:** `<div class="link-icon__icon" role="img" aria-label="" style="background-image: url('/globalassets/ikoner/document.svg')"></div>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

- **Target:** `a[href$="kalkulatorer/"] > .link-icon__content > .link-icon__left > .link-icon__icon[aria-label=""][role="img"]`
  - **HTML:** `<div class="link-icon__icon" role="img" aria-label="" style="background-image: url('/globalassets/ikoner/calkulator-slider.svg')"></div>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

- **Target:** `a[aria-label="Kundefavoritt"] > .link-icon__content > .link-icon__left > .link-icon__icon[aria-label=""][role="img"]`
  - **HTML:** `<div class="link-icon__icon" role="img" aria-label="" style="background-image: url('/globalassets/ikoner/podium.svg')"></div>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

