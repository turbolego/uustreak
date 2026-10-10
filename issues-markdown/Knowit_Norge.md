# WCAG Violations Report for Knowit Norge

**Timestamp:** 2026-10-10T08:34:37.441Z
**URL:** [https://www.knowit.no/](https://www.knowit.no/)
**Total Violations:** 5

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 9

#### Affected Elements:

- **Target:** `#declineButton`
  - **HTML:** `<button tabindex="0" onclick="CookieInformation.declineAllCategories()" aria-label="Avvis alle" id="declineButton" class="coi-banner__decline" role="alert" aria-atomic="true" style="display: flex;">Avvis alle</button>`
  - **Failure summary:** Fix any of the following: ARIA role alert is not allowed for given element

- **Target:** `.css-1cyhlyk`
  - **HTML:** `<button type="button" class="chakra-button css-1cyhlyk" role="group">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `#mainmenu-openbtn`
  - **HTML:** `<button type="button" class="chakra-button css-qyag7q" role="group" data-critical-header="menu-toggle" id="mainmenu-openbtn" aria-expanded="false" aria-controls="disclosure-:R4pf6:">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `.css-8atqhb > .css-2jgdd6`
  - **HTML:** `<article role="group" class="chakra-linkbox css-2jgdd6">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `.css-1gwne1u > .css-2jgdd6:nth-child(1)`
  - **HTML:** `<article role="group" class="chakra-linkbox css-2jgdd6">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `.css-2jgdd6:nth-child(2)`
  - **HTML:** `<article role="group" class="chakra-linkbox css-2jgdd6">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `.css-1qfc5p0 > .css-2jgdd6`
  - **HTML:** `<article role="group" class="chakra-linkbox css-2jgdd6">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `.FocusBlock:nth-child(3) > .css-whh5e5 > .css-1bbe9dr > .css-18w09va > .css-1ubhc2b[overflow="visible"] > .slider-container > .slider-frame[aria-label="carousel-slider"][role="region"] > .slider-list > .slide-current.slide-visible.slide > .css-1herucy > .css-1l6sxpd > .css-1ugq6eo`
  - **HTML:** `<article role="group" class="chakra-linkbox css-1ugq6eo">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `.FocusBlock:nth-child(4) > .css-whh5e5 > .css-1bbe9dr > .css-18w09va > .css-1ubhc2b[overflow="visible"] > .slider-container > .slider-frame[aria-label="carousel-slider"][role="region"] > .slider-list > .slide-current.slide-visible.slide > .css-1herucy > .css-1l6sxpd > .css-1ugq6eo`
  - **HTML:** `<article role="group" class="chakra-linkbox css-1ugq6eo">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element


### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.css-1cyhlyk`
  - **HTML:** `<button type="button" class="chakra-button css-1cyhlyk" role="group">`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `#mainmenu-openbtn`
  - **HTML:** `<button type="button" class="chakra-button css-qyag7q" role="group" data-critical-header="menu-toggle" id="mainmenu-openbtn" aria-expanded="false" aria-controls="disclosure-:R4pf6:">`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


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
- **Count:** 3

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `.FocusBlock:nth-child(3) > .css-whh5e5 > .css-1bbe9dr > .css-18w09va > .css-1ubhc2b[overflow="visible"] > .slider-container > .slider-frame[aria-label="carousel-slider"][role="region"]`
  - **HTML:** `<div class="slider-frame" style="overflow:hidden;width:100%;position:relative;outline:none;touch-action:pan-y;height:auto;transition:height 300ms ease-in-out;will-change:height;user-select:none" aria-label="carousel-slider" role="region" t…`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `#chakra-toast-manager-top`
  - **HTML:** `<div role="region" aria-live="polite" id="chakra-toast-manager..." style="position: fixed; z-i...">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.css-1vf93pm`
  - **HTML:** `<a class="chakra-link css-1vf93pm" href="#main-content">Gå til hovedinnhold</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

