# WCAG Violations Report for Manpower AS

**Timestamp:** 2026-11-11T05:14:09.025Z
**URL:** [https://www.manpower.no/nb](https://www.manpower.no/nb)
**Total Violations:** 6

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Embedded code from HubSpot
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 5

#### Affected Elements:

- **Target:** `#hs-form-iframe-0, ul`
  - **HTML:** `<ul role="checkbox" class="inputs-list multi-container">`
  - **Failure summary:** Fix any of the following: ARIA role checkbox is not allowed for given element

- **Target:** `#hs-form-iframe-0, li:nth-child(1)`
  - **HTML:** `<li class="hs-form-checkbox" role="checkbox">`
  - **Failure summary:** Fix any of the following: ARIA role checkbox is not allowed for given element

- **Target:** `#hs-form-iframe-0, li:nth-child(2)`
  - **HTML:** `<li class="hs-form-checkbox" role="checkbox">`
  - **Failure summary:** Fix any of the following: ARIA role checkbox is not allowed for given element

- **Target:** `#hs-form-iframe-0, li:nth-child(3)`
  - **HTML:** `<li class="hs-form-checkbox" role="checkbox">`
  - **Failure summary:** Fix any of the following: ARIA role checkbox is not allowed for given element

- **Target:** `#hs-form-iframe-0, li:nth-child(4)`
  - **HTML:** `<li class="hs-form-checkbox" role="checkbox"><label for="kategori3-e99cf25b-2692-45e9-881d-bbf8eb3abd57" class="hs-form-checkbox-display"><input id="kategori3-e99cf25b-2692-45e9-881d-bbf8eb3abd57" class="hs-input" type="checkbox" name="kat…`
  - **Failure summary:** Fix any of the following: ARIA role checkbox is not allowed for given element


### Required ARIA attributes must be provided

- **Impact:** critical
- **Description:** Ensure elements with ARIA roles have all required ARIA attributes
- **Source:** Embedded code from HubSpot
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-required-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 5

#### Affected Elements:

- **Target:** `#hs-form-iframe-0, ul`
  - **HTML:** `<ul role="checkbox" class="inputs-list multi-container">`
  - **Failure summary:** Fix any of the following: Required ARIA attribute not present: aria-checked

- **Target:** `#hs-form-iframe-0, li:nth-child(1)`
  - **HTML:** `<li class="hs-form-checkbox" role="checkbox">`
  - **Failure summary:** Fix any of the following: Required ARIA attribute not present: aria-checked

- **Target:** `#hs-form-iframe-0, li:nth-child(2)`
  - **HTML:** `<li class="hs-form-checkbox" role="checkbox">`
  - **Failure summary:** Fix any of the following: Required ARIA attribute not present: aria-checked

- **Target:** `#hs-form-iframe-0, li:nth-child(3)`
  - **HTML:** `<li class="hs-form-checkbox" role="checkbox">`
  - **Failure summary:** Fix any of the following: Required ARIA attribute not present: aria-checked

- **Target:** `#hs-form-iframe-0, li:nth-child(4)`
  - **HTML:** `<li class="hs-form-checkbox" role="checkbox"><label for="kategori3-e99cf25b-2692-45e9-881d-bbf8eb3abd57" class="hs-form-checkbox-display"><input id="kategori3-e99cf25b-2692-45e9-881d-bbf8eb3abd57" class="hs-input" type="checkbox" name="kat…`
  - **Failure summary:** Fix any of the following: Required ARIA attribute not present: aria-checked


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `a[aria-label="LES MER OM MANPOWER ACADEMY"]`
  - **HTML:** `<a class="primary-button " aria-label="LES MER OM MANPOWER ACADEMY" href="/nb/jobbsoker/manpower-academy">LES MER OM MANPOWER ACADEMY</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.06 (foreground color: #c25700, background color: #f3f3f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#hs-form-iframe-0, .hs-button`
  - **HTML:** `<input type="submit" class="hs-button primary large" value="Send ">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.56 (foreground color: #ffffff, background color: #ff7a59, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 12

#### Affected Elements:

- **Target:** `.col > .country-links > .lang-nav > .language-wrapper > .country[role="button"][aria-label="(Manpower-Global) pop up opens"]`
  - **HTML:** `<div role="button" tabindex="0" class="country" aria-label="(Manpower-Global) pop up opens"><div class="title">Norway</div>(Norsk)</div>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="User Login"]`
  - **HTML:** `<a href="#" tabindex="0" aria-label="User Login" aria-expanded="false"><span><div class="user-icon"></div><div class="login__text">Logg inn/Registrer deg</div></span></a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[href$="fagomrader"][aria-label="READ MORE"][target="_blank"]`
  - **HTML:** `<a class="" aria-label="READ MORE" tabindex="0" target="_blank" href="/nb/jobbsoker/fagomrader"><div class="cta-text " aria-label="READ MORE">LES MER</div></a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[href$="mypath"][aria-label="READ MORE"][target="_blank"]`
  - **HTML:** `<a class="" aria-label="READ MORE" tabindex="0" target="_blank" href="/nb/jobbsoker/mypath"><div class="cta-text " aria-label="READ MORE">LES MER</div></a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[href$="jobb-i-manpower"][aria-label="READ MORE"][target="_blank"]`
  - **HTML:** `<a class="" aria-label="READ MORE" tabindex="0" target="_blank" href="/nb/jobbsoker/jobb-i-manpower"><div class="cta-text " aria-label="READ MORE">LES MER</div></a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[href$="bemanning"][aria-label="READ MORE"][target="_blank"]`
  - **HTML:** `<a class="" aria-label="READ MORE" tabindex="0" target="_blank" href="/nb/bedrift/bemanning"><div class="cta-text " aria-label="READ MORE">LES MER</div></a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[href$="fast-rekruttering"][aria-label="READ MORE"][target="_blank"]`
  - **HTML:** `<a class="" aria-label="READ MORE" tabindex="0" target="_blank" href="/nb/bedrift/fast-rekruttering"><div class="cta-text " aria-label="READ MORE">LES MER</div></a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.cardInfoContainer.col-md-6.col-lg-3:nth-child(3) > .manpower_light.card > .card-wrapper > div:nth-child(2) > .align-bottom > .textLink > a[aria-label="READ MORE"][target="_blank"]`
  - **HTML:** `<a class="" aria-label="READ MORE" tabindex="0" target="_blank" href="/nb/bedrift/midlertidig-rekruttering"><div class="cta-text " aria-label="READ MORE">LES MER</div></a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[href$="academy"][aria-label="READ MORE"][target="_blank"]`
  - **HTML:** `<a class="" aria-label="READ MORE" tabindex="0" target="_blank" href="/nb/bedrift/academy"><div class="cta-text " aria-label="READ MORE">LES MER</div></a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `button[aria-label="Slide1"]`
  - **HTML:** `<button aria-label="Slide1" aria-current="true">1</button>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `button[aria-label="Slide2"]`
  - **HTML:** `<button aria-label="Slide2" aria-current="false">2</button>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.sub-footer-disclaimer-inner > .country-links > .lang-nav > .language-wrapper > .country[role="button"][aria-label="(Manpower-Global) pop up opens"]`
  - **HTML:** `<div role="button" tabindex="0" class="country" aria-label="(Manpower-Global) pop up opens"><div class="title">Norway</div>(Norsk)</div>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Source:** Embedded code from HubSpot
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 5

#### Affected Elements:

- **Target:** `#hs-form-iframe-0, ul`
  - **HTML:** `<ul role="checkbox" class="inputs-list multi-container">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants. Move them outside of the element, or remove them.

- **Target:** `#hs-form-iframe-0, li:nth-child(1)`
  - **HTML:** `<li class="hs-form-checkbox" role="checkbox">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants. Move them outside of the element, or remove them.

- **Target:** `#hs-form-iframe-0, li:nth-child(2)`
  - **HTML:** `<li class="hs-form-checkbox" role="checkbox">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants. Move them outside of the element, or remove them.

- **Target:** `#hs-form-iframe-0, li:nth-child(3)`
  - **HTML:** `<li class="hs-form-checkbox" role="checkbox">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants. Move them outside of the element, or remove them.

- **Target:** `#hs-form-iframe-0, li:nth-child(4)`
  - **HTML:** `<li class="hs-form-checkbox" role="checkbox"><label for="kategori3-e99cf25b-2692-45e9-881d-bbf8eb3abd57" class="hs-form-checkbox-display"><input id="kategori3-e99cf25b-2692-45e9-881d-bbf8eb3abd57" class="hs-input" type="checkbox" name="kat…`
  - **Failure summary:** Fix any of the following: Element has focusable descendants. Move them outside of the element, or remove them.


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Embedded code from OneTrust
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#onetrust-banner-sdk`
  - **HTML:** `<div id="onetrust-banner-sdk" class="otCenterRounded default ot-wo-title vertical-align-content" tabindex="0" aria-label="Personvern" aria-describedby="onetrust-policy-text">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

