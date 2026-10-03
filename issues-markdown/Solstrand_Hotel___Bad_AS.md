# WCAG Violations Report for Solstrand Hotel & Bad AS

**Timestamp:** 2026-10-03T04:20:29.510Z
**URL:** [https://solstrand.com/](https://solstrand.com/)
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
  - **HTML:** `<button tabindex="0" onclick="CookieInformation.declineAllCategories()" aria-label="Avvis alle" id="declineButton" class="coi-banner__decline" role="alert" aria-atomic="true" style="display: flex;">Avvis alle</button>`
  - **Failure summary:** Fix any of the following: ARIA role alert is not allowed for given element


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `div:nth-child(1) > h4`
  - **HTML:** `<h4><strong>Generelle spørsmål</strong></h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


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


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `.site-logo`
  - **HTML:** `<a href="/" class="site-logo">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#open`
  - **HTML:** `<a href="#" id="open" class="main-button w-inline-block"> <div class="line-top"></div> <div class="line-mid"></div> <div class="line-bottom"></div> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#media_image-3 > a`
  - **HTML:** `<a href="https://www.facebook.com/solstrandhotelogbad/"><img width="11" height="20" src="https://solstrand.com/content/uploads/2021/01/solstrand-facebook.svg" class="image wp-image-1587 attachment-medium size-medium" alt="" style="max-widt…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#media_image-4 > a`
  - **HTML:** `<a href="https://www.instagram.com/solstrandhotel/"><img width="21" height="20" src="https://solstrand.com/content/uploads/2021/01/solstrand-instagram.svg" class="image wp-image-1588 attachment-medium size-medium" alt="" style="max-width: …`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#media_image-5 > a`
  - **HTML:** `<a href="https://www.tripadvisor.com/Hotel_Review-g1188571-d248501-Reviews-Solstrand_Hotel_Bad-Osoyro_Os_Municipality_Hordaland_Western_Norway.html?m=19905">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.menu-button`
  - **HTML:** `<div class="menu-button" aria-label="menu" role="button" tabindex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 8

#### Affected Elements:

- **Target:** `a[href$="#main-menu-container"]`
  - **HTML:** `<a class="skip-link screen-reader-text" href="#main-menu-container">Hopp til navigasjon</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="#main-content"]`
  - **HTML:** `<a class="skip-link screen-reader-text" href="#main-content">Hopp til innhold</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `h1`
  - **HTML:** `<h1 class="kt-adv-heading_6f25f3-99 fadeInUp wp-block-kadence-advancedheading o-anim-ready" data-kb-block="kb-adv-heading_6f25f3-99">Gylne Øyeblikk</h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.delay-200ms`
  - **HTML:** `<h2 class="has-text-align-center fadeInUp delay-200ms has-sansserif-l-font-size wp-block-heading o-anim-ready">Siden 1896</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.has-text-align-center.has-lead-paragraph-font-size.wp-block-paragraph`
  - **HTML:** `<p class="has-text-align-center has-lead-paragraph-font-size wp-block-paragraph">20 minutter fra Bergen Lufthavn – 30 minutter fra Bergen sentrum</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.has-serif-s-font-size`
  - **HTML:** `<h2 class="has-text-align-center has-serif-s-font-size wp-block-heading">Meld deg på vårt nyhetsbrev</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.has-gray-70-color`
  - **HTML:** `<p class="has-text-align-center has-gray-70-color has-text-color has-sansserif-m-font-size wp-block-paragraph">Hold deg oppdatert på våre tilbud og siste nytt fra Solstrand.</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.mc-field-group`
  - **HTML:** `<div class="mc-field-group"> <input type="email" value="" placeholder="Din e-post" name="EMAIL" class="required email" id="mce-EMAIL"> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

