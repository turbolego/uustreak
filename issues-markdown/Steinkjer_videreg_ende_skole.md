# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-10-15T05:44:13.741Z
**URL:** [https://web.trondelagfylke.no/steinkjer-videregaende-skole](https://web.trondelagfylke.no/steinkjer-videregaende-skole)
**Total Violations:** 5

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
  - **HTML:** `<button type="button" tabindex="0" onclick="CookieInformation.declineAllCategories()" aria-label="Avvis alle" id="declineButton" class="coi-banner__decline" role="alert" aria-atomic="true" style="display: flex;"> Avvis alle </button>`
  - **Failure summary:** Fix any of the following: ARIA role alert is not allowed for given element


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
- **Count:** 2

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `.top-menu`
  - **HTML:** `<nav class="top-menu top-menu--school u-hide-tablet-landscape-down">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `iframe[name="fe58a32e585821377"], #u_0_1_Gi`
  - **HTML:** `<a href="https://www.facebook.com/steinkjervgs?ref=embed_page" target="_blank" id="u_0_1_Gi"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="fe58a32e585821377"], .lfloat._3-8_`
  - **HTML:** `<a class="_3-8_ lfloat" href="https://www.facebook.com/289355574674?ref=embed_page" target="_blank">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 8

#### Affected Elements:

- **Target:** `.hero-image`
  - **HTML:** `<figure class="hero-image" data-object-fit=""> <img src="/globalassets/bilder/steinkjervideregaendeskole/fellesbilde-alle_steinkjer_2024_2.jpg?width=1280" alt="Fellesbilde elever og ansatte 2024 Steinkjer videregående skole Foto: Reed Foto…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `section`
  - **HTML:** `<section class="featured-section u-mg-bottom-base u-mg-bottom-xl@tablet-landscape-up">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.card-grid.card-grid--equal-height:nth-child(3)`
  - **HTML:** `<div class="card-grid card-grid--equal-height">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.card-grid.card-grid--equal-height:nth-child(4)`
  - **HTML:** `<div class="card-grid card-grid--equal-height">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
  - **HTML:** `<div class="card-grid__item">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
  - **HTML:** `<div class="card__tag"> Se oss på Facebook </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="fe58a32e585821377"], #u_0_0_Bl`
  - **HTML:** `<div id="u_0_0_Bl">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.card-grid__item:nth-child(3)`
  - **HTML:** `<div class="card-grid__item">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

