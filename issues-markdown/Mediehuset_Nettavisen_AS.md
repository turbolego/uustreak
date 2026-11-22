# WCAG Violations Report for Mediehuset Nettavisen AS

**Timestamp:** 2026-11-22T05:33:47.516Z
**URL:** [https://www.nettavisen.no/](https://www.nettavisen.no/)
**Total Violations:** 7

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #cbb`
  - **HTML:** `<div id="cbb" class="cbb" tabindex="0" role="button">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.miniheader > .logo-nav-wrap > .logo-nav-wrapper > h1`
  - **HTML:** `<h1 data-adp-clicklabel="brandheader-logo" class="na-logo-header"> <a href="/" tabindex="-1" aria-hidden="true">*Nettavisen.*</a> </h1>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Embedded code from Annonser and Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 21

#### Affected Elements:

- **Target:** `#adsm-iframe-skin-c7f1389ef1, .bgImg`
  - **HTML:** `<img class="bgImg" src="./assets/skin-bg-5.webp" style="filter: brightness(1.06) saturate(1.15) contrast(1.04);">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#adsm-iframe-skin-c7f1389ef1, .logo`
  - **HTML:** `<img class="logo" src="./assets/logo-white-2row.svg" style="transform: translate(0px, 0px); opacity: 1; visibility: inherit;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(1) > .cardMedia > .cardImg[draggable="false"]`
  - **HTML:** `<img class="cardImg" src="./assets/product-36-6326-fireplace.webp" draggable="false">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(2) > .cardMedia > .cardImg[src$="product-36-8071.webp"][draggable="false"]`
  - **HTML:** `<img class="cardImg" src="./assets/product-36-8071.webp" draggable="false">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(3) > .cardMedia > .cardImg[src$="product-36-6686.webp"][draggable="false"]`
  - **HTML:** `<img class="cardImg" src="./assets/product-36-6686.webp" draggable="false">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(4) > .cardMedia > .cardImg[src$="product-36-6685.webp"][draggable="false"]`
  - **HTML:** `<img class="cardImg" src="./assets/product-36-6685.webp" draggable="false">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(5) > .cardMedia > .cardImg[src$="product-36-8226.webp"][draggable="false"]`
  - **HTML:** `<img class="cardImg" src="./assets/product-36-8226.webp" draggable="false">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(6) > .cardMedia > .cardImg[src$="product-36-8069.webp"][draggable="false"]`
  - **HTML:** `<img class="cardImg" src="./assets/product-36-8069.webp" draggable="false">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(7) > .cardMedia > .cardImg[draggable="false"]`
  - **HTML:** `<img class="cardImg" src="./assets/product-36-6326-fireplace.webp" draggable="false">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(8) > .cardMedia > .cardImg[src$="product-36-8071.webp"][draggable="false"]`
  - **HTML:** `<img class="cardImg" src="./assets/product-36-8071.webp" draggable="false">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(9) > .cardMedia > .cardImg[src$="product-36-6686.webp"][draggable="false"]`
  - **HTML:** `<img class="cardImg" src="./assets/product-36-6686.webp" draggable="false">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(10) > .cardMedia > .cardImg[src$="product-36-6685.webp"][draggable="false"]`
  - **HTML:** `<img class="cardImg" src="./assets/product-36-6685.webp" draggable="false">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(11) > .cardMedia > .cardImg[src$="product-36-8226.webp"][draggable="false"]`
  - **HTML:** `<img class="cardImg" src="./assets/product-36-8226.webp" draggable="false">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(12) > .cardMedia > .cardImg[src$="product-36-8069.webp"][draggable="false"]`
  - **HTML:** `<img class="cardImg" src="./assets/product-36-8069.webp" draggable="false">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(13) > .cardMedia > .cardImg[draggable="false"]`
  - **HTML:** `<img class="cardImg" src="./assets/product-36-6326-fireplace.webp" draggable="false">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(14) > .cardMedia > .cardImg[src$="product-36-8071.webp"][draggable="false"]`
  - **HTML:** `<img class="cardImg" src="./assets/product-36-8071.webp" draggable="false">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(15) > .cardMedia > .cardImg[src$="product-36-6686.webp"][draggable="false"]`
  - **HTML:** `<img class="cardImg" src="./assets/product-36-6686.webp" draggable="false">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(16) > .cardMedia > .cardImg[src$="product-36-6685.webp"][draggable="false"]`
  - **HTML:** `<img class="cardImg" src="./assets/product-36-6685.webp" draggable="false">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(17) > .cardMedia > .cardImg[src$="product-36-8226.webp"][draggable="false"]`
  - **HTML:** `<img class="cardImg" src="./assets/product-36-8226.webp" draggable="false">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(18) > .cardMedia > .cardImg[src$="product-36-8069.webp"][draggable="false"]`
  - **HTML:** `<img class="cardImg" src="./assets/product-36-8069.webp" draggable="false">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, .adnm-view-pixel`
  - **HTML:** `<img class="adnm-view-pixel" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" style="width: 100vw; height: 100vh; min-width: 30px; min-height: 30px; display: block;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Banner landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the banner landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-banner-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.miniheader`
  - **HTML:** `<header class="miniheader">`
  - **Failure summary:** Fix any of the following: The banner landmark is contained in another landmark.


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#page-header`
  - **HTML:** `<header id="page-header" class="">`
  - **Failure summary:** Fix any of the following: Document has more than one banner landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `#page-header`
  - **HTML:** `<header id="page-header" class="">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `.miniheader > .logo-nav-wrap > .logo-nav-wrapper > .nav-wrap > nav`
  - **HTML:** `<nav data-adp-clicklabel="brandheader-toplinks" class="nav lp_nav">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `amedia-username`
  - **HTML:** `<amedia-username orderpage="//www.nettavisen.no/tilbud" subscription-platform="amedia" publication="www.nettavisen.no" subscription-text="Bli abonnent" subscription-link="true" links="" locale="nb-NO" theme="nettavisen">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#toppbanner-1`
  - **HTML:** `<bazaar-ad data-component-layou...="commercial" position="toppbanner" class="am-bazaar-ad lp_topp..." labeled="true" display-config="" aria-labelledby="toppbanner-1-label" ad-index="1" id="toppbanner-1" data-id="toppbanner-1" tag-id="www.n…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

