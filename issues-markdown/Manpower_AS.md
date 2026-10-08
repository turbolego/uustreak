# WCAG Violations Report for Manpower AS

**Timestamp:** 2026-10-08T10:18:44.372Z
**URL:** [https://www.manpower.no/nb](https://www.manpower.no/nb)
**Total Violations:** 5

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Embedded code from HubSpot
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-required-attr?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `a[aria-label="LES MER OM MANPOWER ACADEMY"]`
  - **HTML:** `<a class="primary-button " aria-label="LES MER OM MANPOWER ACADEMY" href="/nb/jobbsoker/manpower-academy">LES MER OM MANPOWER ACADEMY</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.06 (foreground color: #c25700, background color: #f3f3f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#hs-form-iframe-0, .hs-button`
  - **HTML:** `<input type="submit" class="hs-button primary large" value="Send ">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.56 (foreground color: #ffffff, background color: #ff7a59, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1


### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Source:** Embedded code from HubSpot
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 5

#### Affected Elements:

- **Target:** `#hs-form-iframe-0, ul`
  - **HTML:** `<ul role="checkbox" class="inputs-list multi-container">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants

- **Target:** `#hs-form-iframe-0, li:nth-child(1)`
  - **HTML:** `<li class="hs-form-checkbox" role="checkbox">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants

- **Target:** `#hs-form-iframe-0, li:nth-child(2)`
  - **HTML:** `<li class="hs-form-checkbox" role="checkbox">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants

- **Target:** `#hs-form-iframe-0, li:nth-child(3)`
  - **HTML:** `<li class="hs-form-checkbox" role="checkbox">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants

- **Target:** `#hs-form-iframe-0, li:nth-child(4)`
  - **HTML:** `<li class="hs-form-checkbox" role="checkbox"><label for="kategori3-e99cf25b-2692-45e9-881d-bbf8eb3abd57" class="hs-form-checkbox-display"><input id="kategori3-e99cf25b-2692-45e9-881d-bbf8eb3abd57" class="hs-input" type="checkbox" name="kat…`
  - **Failure summary:** Fix any of the following: Element has focusable descendants


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Embedded code from OneTrust
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#onetrust-banner-sdk`
  - **HTML:** `<div id="onetrust-banner-sdk" class="otCenterRounded default ot-wo-title vertical-align-content" tabindex="0" aria-label="Personvern" aria-describedby="onetrust-policy-text">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

