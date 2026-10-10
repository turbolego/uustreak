# WCAG Violations Report for Stiftelsen Nasjonalmuseet for Kunst

**Timestamp:** 2026-10-10T08:22:24.015Z
**URL:** [https://www.nasjonalmuseet.no/](https://www.nasjonalmuseet.no/)
**Total Violations:** 4

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 15

#### Affected Elements:

- **Target:** `#declineButton`
  - **HTML:** `<button tabindex="0" onclick="CookieInformation.declineAllCategories()" aria-label="Avvis" id="declineButton" class="coi-banner__decline" role="alert" aria-atomic="true" style="display: flex;">Avvis</button>`
  - **Failure summary:** Fix any of the following: ARIA role alert is not allowed for given element

- **Target:** `div[title="Utstillinger"] > .ulc-carousel__track > .ulc-carousel__slide[aria-label="1 av 7"][role="group"]`
  - **HTML:** `<li class="ulc-carousel__slide" role="group" aria-roledescription="slide" aria-label="1 av 7">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `div[title="Utstillinger"] > .ulc-carousel__track > .ulc-carousel__slide[aria-label="2 av 7"][role="group"]`
  - **HTML:** `<li class="ulc-carousel__slide" role="group" aria-roledescription="slide" aria-label="2 av 7">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `div[title="Utstillinger"] > .ulc-carousel__track > .ulc-carousel__slide[aria-label="3 av 7"][role="group"]`
  - **HTML:** `<li class="ulc-carousel__slide" role="group" aria-roledescription="slide" aria-label="3 av 7">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `div[title="Utstillinger"] > .ulc-carousel__track > .ulc-carousel__slide[aria-label="4 av 7"][role="group"]`
  - **HTML:** `<li class="ulc-carousel__slide" role="group" aria-roledescription="slide" aria-label="4 av 7">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `div[title="Utstillinger"] > .ulc-carousel__track > .ulc-carousel__slide[aria-label="5 av 7"][role="group"]`
  - **HTML:** `<li class="ulc-carousel__slide" role="group" aria-roledescription="slide" aria-label="5 av 7">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `div[title="Utstillinger"] > .ulc-carousel__track > .ulc-carousel__slide[aria-label="6 av 7"][role="group"]`
  - **HTML:** `<li class="ulc-carousel__slide" role="group" aria-roledescription="slide" aria-label="6 av 7">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `div[title="Utstillinger"] > .ulc-carousel__track > .ulc-carousel__slide[aria-label="7 av 7"][role="group"]`
  - **HTML:** `<li class="ulc-carousel__slide" role="group" aria-roledescription="slide" aria-label="7 av 7">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `div[title="Utvalgte arrangementer "] > .ulc-carousel__track > .ulc-carousel__slide[aria-label="1 av 7"][role="group"]`
  - **HTML:** `<li class="ulc-carousel__slide" role="group" aria-roledescription="slide" aria-label="1 av 7">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `div[title="Utvalgte arrangementer "] > .ulc-carousel__track > .ulc-carousel__slide[aria-label="2 av 7"][role="group"]`
  - **HTML:** `<li class="ulc-carousel__slide" role="group" aria-roledescription="slide" aria-label="2 av 7">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `div[title="Utvalgte arrangementer "] > .ulc-carousel__track > .ulc-carousel__slide[aria-label="3 av 7"][role="group"]`
  - **HTML:** `<li class="ulc-carousel__slide" role="group" aria-roledescription="slide" aria-label="3 av 7">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `div[title="Utvalgte arrangementer "] > .ulc-carousel__track > .ulc-carousel__slide[aria-label="4 av 7"][role="group"]`
  - **HTML:** `<li class="ulc-carousel__slide" role="group" aria-roledescription="slide" aria-label="4 av 7">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `div[title="Utvalgte arrangementer "] > .ulc-carousel__track > .ulc-carousel__slide[aria-label="5 av 7"][role="group"]`
  - **HTML:** `<li class="ulc-carousel__slide" role="group" aria-roledescription="slide" aria-label="5 av 7">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `div[title="Utvalgte arrangementer "] > .ulc-carousel__track > .ulc-carousel__slide[aria-label="6 av 7"][role="group"]`
  - **HTML:** `<li class="ulc-carousel__slide" role="group" aria-roledescription="slide" aria-label="6 av 7">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `div[title="Utvalgte arrangementer "] > .ulc-carousel__track > .ulc-carousel__slide[aria-label="7 av 7"][role="group"]`
  - **HTML:** `<li class="ulc-carousel__slide" role="group" aria-roledescription="slide" aria-label="7 av 7">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element


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


### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 2

#### Affected Elements:

- **Target:** `div[title="Utstillinger"] > .ulc-carousel__track`
  - **HTML:** `<ul class="ulc-carousel__track" style="transform: translate3d(0px, 0px, 0px); transition: none;">`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: [role=group]

- **Target:** `div[title="Utvalgte arrangementer "] > .ulc-carousel__track`
  - **HTML:** `<ul class="ulc-carousel__track" style="transform: translate3d(0px, 0px, 0px); transition: none;">`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: [role=group]

