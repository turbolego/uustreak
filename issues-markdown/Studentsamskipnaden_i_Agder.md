# WCAG Violations Report for Studentsamskipnaden i Agder

**Timestamp:** 2026-11-05T09:18:12.315Z
**URL:** [https://www.sia.no/](https://www.sia.no/)
**Total Violations:** 7

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 2

#### Affected Elements:

- **Target:** `.desktop-navbar__search-btn`
  - **HTML:** `<a aria-label="Go to /soek/" tabindex="4" href="/soek/" title="Søk" class="desktop-navbar__search-btn">`
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

- **Target:** `#react-select-2-input`
  - **HTML:** `<input id="react-select-2-input" tabindex="2" inputmode="none" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-activedescendant="" aria-readonly="true" class="css-1hac4vs-dummyInput" value="">`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#react-select-3-input`
  - **HTML:** `<input id="react-select-3-input" tabindex="3" inputmode="none" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-activedescendant="" aria-readonly="true" class="css-1hac4vs-dummyInput" value="">`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `.desktop-navbar__search-btn`
  - **HTML:** `<a aria-label="Go to /soek/" tabindex="4" href="/soek/" title="Søk" class="desktop-navbar__search-btn">`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `.desktop-navbar__hamburger`
  - **HTML:** `<div class="desktop-navbar__hamburger" data-dont-close="true" tabindex="4"><div class="desktop-navbar__hamburger__icon"><span></span><span></span><span></span></div><span class="desktop-navbar__hamburger__label" style="pointer-events: none…`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

