# WCAG Violations Report for Uloba - Independent Living Norge SA

**Timestamp:** 2026-10-08T10:46:39.090Z
**URL:** [https://www.uloba.no/](https://www.uloba.no/)
**Total Violations:** 6

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 4

#### Affected Elements:

- **Target:** `#splide01-slide01`
  - **HTML:** `<li class="splide__slide is-active is-visible" id="splide01-slide01" role="group" aria-roledescription="slide" aria-label="1 of 7" style="margin-right: var(--spacing-md);">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `#splide01-slide02`
  - **HTML:** `<li class="splide__slide is-visible is-next" id="splide01-slide02" role="group" aria-roledescription="slide" aria-label="2 of 7" style="margin-right: var(--spacing-md);">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `#splide01-slide03`
  - **HTML:** `<li class="splide__slide is-visible" id="splide01-slide03" role="group" aria-roledescription="slide" aria-label="3 of 7" style="margin-right: var(--spacing-md);">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `#splide01-slide04`
  - **HTML:** `<li class="splide__slide is-visible" id="splide01-slide04" role="group" aria-roledescription="slide" aria-label="4 of 7" style="margin-right: var(--spacing-md);">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element


### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#ppms_cm_close-popup`
  - **HTML:** `<button class="ppms_cm_close_popup" id="ppms_cm_close-popup" data-disable-select="true">`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#ppms_cm_footer__powered_by`
  - **HTML:** `<span class="ppms_cm_footer__powered_by" data-disable-select="true" id="ppms_cm_footer__powered_by">Powered by</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.72 (foreground color: #999999, background color: #fafafa, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#site-header-nav`
  - **HTML:** `<nav id="site-header-nav" class="site-header-nav" aria-label="Toppmeny"> <ul id="menu-header" class="site-header-nav-menu"><li id="menu-item-12933" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12933"><a href="h…`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb-NO">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `#ppms_cm_language_select_btn_id`
  - **HTML:** `<div class="ppms_cm_language_select_btn" id="ppms_cm_language_select_btn_id" data-type="customSelect" data-fixed-text="true" tabindex="0">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ppms-c18a2ffc-ffc4-47c6-9836-19bde81ab6ad`
  - **HTML:** `<span class="ppms_cm_header1" id="ppms-c18a2ffc-ffc4-47c6-9836-19bde81ab6ad">Personvern på denne siden</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ppms-2297b320-e8ae-40e3-b640-c8f7a25a6f73`
  - **HTML:** `<div class="ppms_cm_description_wrapper" id="ppms-2297b320-e8ae-40e3-b640-c8f7a25a6f73">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#popup-link`
  - **HTML:** `<a class="ppms_cm_link" id="popup-link" href="https://www.uloba.no/om-uloba/personvernerklaering/">Personvernerklæring</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ppms_cm_footer__powered_by`
  - **HTML:** `<span class="ppms_cm_footer__powered_by" data-disable-select="true" id="ppms_cm_footer__powered_by">Powered by</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

