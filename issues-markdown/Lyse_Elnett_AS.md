# WCAG Violations Report for Lyse Elnett AS

**Timestamp:** 2026-10-09T05:05:56.768Z
**URL:** [https://www.l-nett.no/](https://www.l-nett.no/)
**Total Violations:** 6

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#declineButton`
  - **HTML:** `<button tabindex="0" onclick="CookieInformation.declineAllCategories()" aria-label="Avslå" id="declineButton" class="coi-banner__decline" role="alert" aria-atomic="true" style="display: flex;">Avslå</button>`
  - **Failure summary:** Fix any of the following: ARIA role alert is not allowed for given element


### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#placeholder-bottom > .container > .row > .searchinput.container-md.tile-common > .tile-content > form[action="https://www.l-nett.no/sok/"][method="get"] > .searchfield > .search[type="submit"]`
  - **HTML:** `<button type="submit" class="search"><i class="icon zmdi zmdi-search zmdi-hc-2x"></i></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.inner-content.odd > h3`
  - **HTML:** `<h3><a href="https://elsikkerhetsportalen.no/lnett/elektrisk-utstyr/ladetips/" target="_blank">Gode råd om lading</a></h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `article[data-articleid="1343"] > a[target="_self"] > .card-body > h3[property="headline"]`
  - **HTML:** `<h3 property="headline">Strømforsyningen 2035 - Hva er det plass til</h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#searchBar_element_4d622862_2`
  - **HTML:** `<input placeholder="Søk" title="Hva leter du etter?" id="searchBar_element_4d622862_2" class="searchBar col-md-8" tabindex="-1" type="text" name="q" value="">`
  - **Failure summary:** Fix all of the following: Only title used to generate label for form element


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.nav-inline`
  - **HTML:** `<nav class="tile-common standard-menu d-print-none d-none d-lg-block nav-inline flex-grow-1 quick-mode">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 18

#### Affected Elements:

- **Target:** `#content-link`
  - **HTML:** `<div id="content-link" class="sr-only sr-only-focusable"><a href="#main-content">Til innhold</a></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.col-5`
  - **HTML:** `<div class="tile-common logo navbar-brand col-5 col-md-3 col-lg-2 pr-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.search-icon`
  - **HTML:** `<div class="collapse-icon search-icon">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.megamenu-icon`
  - **HTML:** `<div class="collapse-icon megamenu-icon d-none d-lg-block">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#placeholder-content-1`
  - **HTML:** `<div id="placeholder-content-1" class="p-0">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#placeholder-content-3`
  - **HTML:** `<div id="placeholder-content-3" class="p-0">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#placeholder-content-4`
  - **HTML:** `<div id="placeholder-content-4" class="p-0">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#placeholder-content-5`
  - **HTML:** `<div id="placeholder-content-5">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tile-content > h3`
  - **HTML:** `<h3><span>Meld deg på vårt nyhetsbrev</span></h3>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctwebform-elementgroup-group-274`
  - **HTML:** `<div class="row ctwebform-elementgroup first row1 odd elementamount1" id="ctwebform-elementgroup-group-274">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctwebform-elementgroup-group-275`
  - **HTML:** `<div class="row ctwebform-elementgroup row2 even elementamount1" id="ctwebform-elementgroup-group-275">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#VLUNNOIMSDV`
  - **HTML:** `<span id="VLUNNOIMSDV">Skriv svaret med tall: Hva er 5 pluss 3?</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.ctwebform-element-type-captcha > div > div`
  - **HTML:** `<div class="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.ctwebform-element-type-htmlcontent`
  - **HTML:** `<div class="form-group ctwebform-element first odd ctwebform-element-order1 ctwebform-element-optional ctwebform-element-labeled ctwebform-element-type-htmlcontent col-sm-6" data-ctwebformelementname="privacy">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.pt-0`
  - **HTML:** `<div class="tile-common logo navbar-brand col-12 col-md-6 col-lg-3 pt-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#placeholder-bottom > .container > .row > .searchinput.container-md.tile-common > .tile-content > h1`
  - **HTML:** `<h1><span>Noe du ikke fant?</span></h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#searchBar_element_4d622862_2`
  - **HTML:** `<input placeholder="Søk" title="Hva leter du etter?" id="searchBar_element_4d622862_2" class="searchBar col-md-8" tabindex="-1" type="text" name="q" value="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.privacy-link > a[target="_self"]`
  - **HTML:** `<a href="https://www.l-nett.no/personvern/" target="_self">Personvern</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

