# WCAG Violations Report for Kolumbus AS

**Timestamp:** 2026-11-19T06:46:17.231Z
**URL:** [https://www.kolumbus.no/](https://www.kolumbus.no/)
**Total Violations:** 7

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.navbar-toggle`
  - **HTML:** `<button data-v-4a367514="" aria-expanded="false" class="navbar-toggle"><i data-v-4a367514="" aria-hidden="true" class="v-icon material-icons theme--light" style="font-size: 32px; color: rgb(255, 255, 255); caret-color: rgb(255, 255, 255);"…`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 7

#### Affected Elements:

- **Target:** `button[data-target="reisediv"] > .travelplanner-block__tabs-button-inner`
  - **HTML:** `<div class="travelplanner-block__tabs-button-inner"> <span class="material-icons">search</span> Finn reise </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.05 (foreground color: #00aa50, background color: #ffffff, font size: 13.5pt (18px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `.color-scheme-inactive > .travelplanner-block__tabs-button-inner`
  - **HTML:** `<div class="travelplanner-block__tabs-button-inner"> <span class="material-icons">search</span> Se avganger </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.36 (foreground color: #657785, background color: #f8f8f8, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.linkblock.displaymode-one-third-on-lg-md-full-on-sm-xs-screens.col-lg-4:nth-child(2) > .link-block > .block-content > .text-center > h2`
  - **HTML:** `<h2>Bysykkel</h2>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.67 (foreground color: #ffffff, background color: #3cb454, font size: 15.0pt (20.02px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.text-center[href$="rutetabeller/"] > h2`
  - **HTML:** `<h2>Rutetabeller</h2>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.67 (foreground color: #ffffff, background color: #3cb454, font size: 15.0pt (20.02px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.linkblock.displaymode-one-third-on-lg-md-full-on-sm-xs-screens.col-lg-4:nth-child(4) > .link-block > .block-content > .text-center > h2`
  - **HTML:** `<h2>Skoleskyss</h2>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.67 (foreground color: #ffffff, background color: #3cb454, font size: 15.0pt (20.02px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[title="Om personvern i Kolumbus"]`
  - **HTML:** `<a title="Om personvern i Kolumbus" href="/hjelp-og-kontakt/reisevilkar/personvern/">Personvern</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.5 (foreground color: #3cb454, background color: #f8f7f7, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[rel="noopener"] > strong`
  - **HTML:** `<strong>Tilgjengelighetserklæring (bokmål)</strong>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.5 (foreground color: #3cb454, background color: #f8f7f7, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.circle`
  - **HTML:** `<img class="circle circle-xlarge" src="/frontend/res/svg/phone-177-circle-white.svg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 1

#### Affected Elements:

- **Target:** `meta[name="viewport"]`
  - **HTML:** `<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">`
  - **Failure summary:** Fix any of the following: maximum-scale=1 on <meta> tag disables zooming on mobile devices


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="no" class=" svg flexbox">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.footer-content-area`
  - **HTML:** `<div class="footer-content-area">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 3

#### Affected Elements:

- **Target:** `input[name="reisefrom"]`
  - **HTML:** `<input class="form-control tp-autocomplete autocomplete-input__input rounded-all" type="text" name="reisefrom" tabindex="1" placeholder="Sted, bedrift, holdeplass" autocomplete="off">`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `.reise-tab__swap-button`
  - **HTML:** `<button type="button" class="reise-tab__swap-button btn btn-default btn-block no-border color-scheme-active" tabindex="3"> <span class="material-icons">swap_vert</span> </button>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `input[name="reiseto"]`
  - **HTML:** `<input class="form-control tp-autocomplete autocomplete-input__input rounded-all" type="text" name="reiseto" tabindex="2" placeholder="Sted, bedrift, holdeplass" autocomplete="off">`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

