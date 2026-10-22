# WCAG Violations Report for Studentsamskipnaden i Agder

**Timestamp:** 2026-10-22T04:03:21.306Z
**URL:** [https://www.sia.no/](https://www.sia.no/)
**Total Violations:** 11

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.item-list__title`
  - **HTML:** `<h2 class="item-list__title"></h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.imageshop-image`
  - **HTML:** `<img class="imageshop-image undefined" src="https://v.imgi.no/gx4n7janmd" width="417" height="200" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 12

#### Affected Elements:

- **Target:** `.desktop-navbar__search-btn`
  - **HTML:** `<a aria-label="Go to /soek/" tabindex="4" href="/soek/" title="Søk" class="desktop-navbar__search-btn">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[title="Studentkalenderen"]`
  - **HTML:** `<a aria-label="Go to /arrangementer/" href="/arrangementer/" title="Studentkalenderen" class="buttons__btn h2">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[title="Finn ditt pensum"]`
  - **HTML:** `<a aria-label="Go to /bok/" href="/bok/" title="Finn ditt pensum" class="buttons__btn h2">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[title="Noen å snakke med?"]`
  - **HTML:** `<a aria-label="Go to /helse/" href="/helse/" title="Noen å snakke med?" class="buttons__btn h2">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.item-list__item__content > a[title="SiA Miljø"][aria-label="Go to /miljoe-og-baerekraft/"][href$="miljoe-og-baerekraft/"]`
  - **HTML:** `<a aria-label="Go to /miljoe-og-baerekraft/" href="/miljoe-og-baerekraft/" title="SiA Miljø" class="item-list__item__title"><span>SiA Miljø &amp; Bærekraft</span></a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.large-image-cta__card__btn`
  - **HTML:** `<a aria-label="Go to /min-studieby/" title="Sjekk hva din by har å tilby" href="/min-studieby/" class="large-image-cta__card__btn btn btn--link btn--dark ">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.cta-card-rounded-link-wrapper:nth-child(1)`
  - **HTML:** `<a aria-label="Go to /artikler/vinnere-kompisprisen-2026/" class="cta-card-rounded-link-wrapper" href="/artikler/vinnere-kompisprisen-2026/" title="Gå til /artikler/vinnere-kompisprisen-2026/">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.cta-card-rounded-link-wrapper:nth-child(2)`
  - **HTML:** `<a aria-label="Go to /artikler/bedre-psykisk-helse-og-mindre-ensomhet-blant-studentene/" class="cta-card-rounded-link-wrapper" href="/artikler/bedre-psykisk-helse-og-mindre-ensomhet-blant-studentene/" title="Gå til /artikler/bedre-psykisk-…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.cta-card-rounded-link-wrapper:nth-child(3)`
  - **HTML:** `<a aria-label="Go to /artikler/det-du-trenger-aa-vite-om-semesteravgiften/" class="cta-card-rounded-link-wrapper" href="/artikler/det-du-trenger-aa-vite-om-semesteravgiften/" title="Gå til /artikler/det-du-trenger-aa-vite-om-semesteravgift…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.btn--white`
  - **HTML:** `<a aria-label="Go to /artikler/" href="/artikler/" class=" btn btn--link btn--white ">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.opening-hours-box__cta__btn`
  - **HTML:** `<a aria-label="Go to /aapningstider-alle-avdelinger/" href="/aapningstider-alle-avdelinger/" class="opening-hours-box__cta__btn btn btn--link btn--dark ">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Go to /personvernerklaering/"]`
  - **HTML:** `<a aria-label="Go to /personvernerklaering/" href="/personvernerklaering/" title="Gå til Personvern" class="footer__link">Personvern</a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Contentinfo landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the contentinfo landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-contentinfo-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `footer`
  - **HTML:** `<footer class="footer">`
  - **Failure summary:** Fix any of the following: The null landmark is contained in another landmark.


### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `main`
  - **HTML:** `<main class="root-page_content">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.


### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `ion-content`
  - **HTML:** `<ion-content class="ion-scroll-wrapper ios content-fullscreen content-ltr hydrated" scroll-events="true" fullscreen="true" role="main" style="--offset-top: 0px; --offset-bottom: 0px;">`
  - **Failure summary:** Fix any of the following: Document has more than one main landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `ion-content`
  - **HTML:** `<ion-content class="ion-scroll-wrapper ios content-fullscreen content-ltr hydrated" scroll-events="true" fullscreen="true" role="main" style="--offset-top: 0px; --offset-bottom: 0px;">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.large-image-cta__card__text > .richtext > p:nth-child(2) > a`
  - **HTML:** `<a href="https://play.google.com/store/apps/details?id=no.sia.app"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### <object> elements must have alternative text

- **Impact:** serious
- **Description:** Ensure <object> elements have alternative text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/object-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, EN-301-549, EN-9.1.1.1, RGAAv4, RGAA-1.1.6
- **Count:** 9

#### Affected Elements:

- **Target:** `object[alt="Bolig Outlined"]`
  - **HTML:** `<object type="image/svg+xml" data="/media/0lbmqhch/bolig-outlined.svg" alt="Bolig Outlined"></object>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute Element's defaul…

- **Target:** `object[alt="Helse Outlined"]`
  - **HTML:** `<object type="image/svg+xml" data="/media/lwzjk2e4/helse-outlined.svg" alt="Helse Outlined"></object>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute Element's defaul…

- **Target:** `object[alt="Barnehage Outlined"]`
  - **HTML:** `<object type="image/svg+xml" data="/media/leyfiffv/barnehage-outlined.svg" alt="Barnehage Outlined"></object>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute Element's defaul…

- **Target:** `object[alt="Studentliv Outlined"]`
  - **HTML:** `<object type="image/svg+xml" data="/media/nbwcplth/studentliv-outlined.svg" alt="Studentliv Outlined"></object>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute Element's defaul…

- **Target:** `object[alt="Mat Og Drikke Outlined"]`
  - **HTML:** `<object type="image/svg+xml" data="/media/cx0hm0yg/mat-og-drikke-outlined.svg" alt="Mat Og Drikke Outlined"></object>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute Element's defaul…

- **Target:** `object[alt="Bok Outlined"]`
  - **HTML:** `<object type="image/svg+xml" data="/media/ml3mfdk0/bok-outlined.svg" alt="Bok Outlined"></object>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute Element's defaul…

- **Target:** `object[alt="Trening Outlined"]`
  - **HTML:** `<object type="image/svg+xml" data="/media/r2kats22/trening-outlined.svg" alt="Trening Outlined"></object>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute Element's defaul…

- **Target:** `a[aria-label="Go to /studentfordeler/"][href$="studentfordeler/"][title="Studentfordeler"] > .umb-img > object`
  - **HTML:** `<object type="image/svg+xml" data="/media/mydd3o0c/studentfordeler-icon-outline-dark.svg" alt="Studentfordeler Icon Outline Dark"></object>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute Element's defaul…

- **Target:** `object[alt="Miljo Outlined"]`
  - **HTML:** `<object type="image/svg+xml" data="/media/bwol3imy/miljo-outlined.svg" alt="Miljo Outlined"></object>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute Element's defaul…


### <svg> elements with an img or image role must have alternative text

- **Impact:** serious
- **Description:** Ensure <svg> elements with an img, image, graphics-document or graphics-symbol role have accessible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/svg-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.5
- **Count:** 10

#### Affected Elements:

- **Target:** `svg[width="29"]`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" class="injected-svg" data-src="/media/aopc5sct/icon-events-outline-light.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

- **Target:** `svg[viewBox="0 0 43.253 49.218"]`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="43.253" height="49.218" viewBox="0 0 43.253 49.218" class="injected-svg" data-src="/media/wwxjzr1s/bolig-outlined-light.svg" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

- **Target:** `svg[viewBox="0 0 59.37 55.312"]`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="59.37" height="55.312" viewBox="0 0 59.37 55.312" class="injected-svg" data-src="/media/zuddjgid/studentliv-outlined-light.svg" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

- **Target:** `svg[viewBox="0 0 49.718 48.068"]`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="49.718" height="48.068" viewBox="0 0 49.718 48.068" class="injected-svg" data-src="/media/uhypynzl/helse-outlined-light.svg" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

- **Target:** `svg[viewBox="0 0 66.26 37.374"]`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="66.26" height="37.374" viewBox="0 0 66.26 37.374" class="injected-svg" data-src="/media/w15os25h/trening-outlined-light.svg" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

- **Target:** `svg[viewBox="0 0 45.668 47.245"]`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45.668" height="47.245" viewBox="0 0 45.668 47.245" class="injected-svg" data-src="/media/xcvcmktx/bok-outlined-light.svg" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

- **Target:** `svg[viewBox="0 0 31.5 47.5"]`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="31.5" height="47.5" viewBox="0 0 31.5 47.5" class="injected-svg" data-src="/media/v5ubxxee/mat-og-drikke-outlined-light.svg" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

- **Target:** `svg[viewBox="0 0 49.203 49.203"]`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="49.203" height="49.203" viewBox="0 0 49.203 49.203" class="injected-svg" data-src="/media/32blsism/barnehage-outlined-light.svg" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

- **Target:** `svg[width="40.603"]`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" width="40.603" height="60.672" viewBox="0 0 40.603 60.672" class="injected-svg" data-src="/media/cssbaxk0/studentfordeler-outline-light.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

- **Target:** `svg[width="60.118"]`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" width="60.118" height="31.203" viewBox="0 0 60.118 31.203" class="injected-svg" data-src="/media/zzadmhzl/om-sia-icon-outline-light.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…


### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 5

#### Affected Elements:

- **Target:** `.desktop-navbar__logo`
  - **HTML:** `<a aria-label="Go to /" href="/" tabindex="1" class="desktop-navbar__logo"><img width="170px" height="50px" src="/media/tc3eoeka/sia-logo.svg" alt="main-logo"></a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#react-select-4-input`
  - **HTML:** `<input id="react-select-4-input" tabindex="2" inputmode="none" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-activedescendant="" aria-readonly="true" class="css-1hac4vs-dummyInput" value="">`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#react-select-5-input`
  - **HTML:** `<input id="react-select-5-input" tabindex="3" inputmode="none" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-activedescendant="" aria-readonly="true" class="css-1hac4vs-dummyInput" value="">`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `.desktop-navbar__search-btn`
  - **HTML:** `<a aria-label="Go to /soek/" tabindex="4" href="/soek/" title="Søk" class="desktop-navbar__search-btn">`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `.desktop-navbar__hamburger`
  - **HTML:** `<div class="desktop-navbar__hamburger" data-dont-close="true" tabindex="4"><div class="desktop-navbar__hamburger__icon"><span></span><span></span><span></span></div><span class="desktop-navbar__hamburger__label" style="pointer-events: none…`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

