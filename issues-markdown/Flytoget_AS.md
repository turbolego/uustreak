# WCAG Violations Report for Flytoget AS

**Timestamp:** 2026-10-03T04:11:53.457Z
**URL:** [https://flytoget.no/](https://flytoget.no/)
**Total Violations:** 7

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
  - **HTML:** `<button tabindex="0" onclick="CookieInformation.declineAllCategories()" aria-label="Strengt nødvendige cookies" id="declineButton" class="coi-banner__decline" role="alert" aria-atomic="true" style="display: flex;">Strengt nødvendige cookie…`
  - **Failure summary:** Fix any of the following: ARIA role alert is not allowed for given element


### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.travel-input-from`
  - **HTML:** `<div class="travel-input travel-input-from" aria-label="Fra" role="listbox">`
  - **Failure summary:** Fix any of the following: Element has children which are not allowed: [role=combobox], [role=img]

- **Target:** `.travel-input-to`
  - **HTML:** `<div class="travel-input travel-input-to" aria-label="Til" role="listbox">`
  - **Failure summary:** Fix any of the following: Element has children which are not allowed: [role=combobox], [role=img]


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `button[aria-label="Godta alle"]`
  - **HTML:** `<button tabindex="0" onclick="CookieInformation.submitAllCategories();" aria-label="Godta alle" class="coi-banner__accept">Godta alle</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.33 (foreground color: #ffffff, background color: #fd4f00, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.btn-squared`
  - **HTML:** `<a href="/billetter/?from=7699220&amp;to=7600100" class="btn btn-squared">Kjøp billett</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.33 (foreground color: #ffffff, background color: #fd4f00, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1


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
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 9

#### Affected Elements:

- **Target:** `.skip-to-main`
  - **HTML:** `<a class="skip-to-main" href="#main-content">Gå til hovedinnholdet</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.travel-input-from`
  - **HTML:** `<div class="travel-input travel-input-from" aria-label="Fra" role="listbox">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.travel-input-to`
  - **HTML:** `<div class="travel-input travel-input-to" aria-label="Til" role="listbox">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.date-label-container`
  - **HTML:** `<div class="date-label-container">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="06:30"]`
  - **HTML:** `<div class="col-xs-4 departure" title="06:30" date-fulldate="2026-10-03_06-30">06:30</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.primary-row > .arrival.col-xs-4`
  - **HTML:** `<div class="col-xs-4 arrival">06:52<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12"><path d="M16.3 11.7L9 3.5l-7.3 8.2-1.4-1.4L9 .5l8.7 9.8z"></path></svg></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.secondary-row`
  - **HTML:** `<div class="row secondary-row"><div class="col-xs-4 departure"><div class="track">Spor 3</div></div><div class="col-xs-4 center-col"></div><div class="col-xs-4 arrival"><div class="track">Spor 2</div></div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.travel-results-button-container`
  - **HTML:** `<div class="travel-results-button-container">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.shop-btn-container`
  - **HTML:** `<div class="shop-btn-container" data-hj-ignore-attributes="true"><a href="/billetter/?from=7699220&amp;to=7600100" class="btn btn-squared">Kjøp billett</a></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### <svg> elements with an img or image role must have alternative text

- **Impact:** serious
- **Description:** Ensure <svg> elements with an img, image, graphics-document or graphics-symbol role have accessible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/svg-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `svg[viewBox="0 0 16 12"]`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12" focusable="false" role="img"><path d="M7 11.5L.5 4.9l1.4-1.4 5.1 5L14.3.3l1.4 1.4z"></path></svg>`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

