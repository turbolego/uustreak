# WCAG Violations Report for BKK AS

**Timestamp:** 2026-10-08T10:12:08.253Z
**URL:** [https://www.bkk.no/](https://www.bkk.no/)
**Total Violations:** 4

## Violation Details

### Form elements must have labels

- **Impact:** critical
- **Description:** Ensure every form element has a label
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/label?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 3

#### Affected Elements:

- **Target:** `#switch-cookie_cat_functional-slider`
  - **HTML:** `<input type="checkbox" class="coi-consent-banner__switch-checkbox" aria-labelledby="switch-Funksjonelle" name="cookie_cat_functional" id="switch-cookie_cat_functional-slider" onclick="CookieInformation.changeCategoryConsentDecision('cookie…`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…

- **Target:** `#switch-cookie_cat_statistic-slider`
  - **HTML:** `<input type="checkbox" class="coi-consent-banner__switch-checkbox" aria-labelledby="switch-Statistiske" name="cookie_cat_statistic" id="switch-cookie_cat_statistic-slider" onclick="CookieInformation.changeCategoryConsentDecision('cookie_ca…`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…

- **Target:** `#switch-cookie_cat_marketing-slider`
  - **HTML:** `<input type="checkbox" class="coi-consent-banner__switch-checkbox" aria-labelledby="switch-Markedsføring" name="cookie_cat_marketing" id="switch-cookie_cat_marketing-slider" onclick="CookieInformation.changeCategoryConsentDecision('cookie_…`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiConsentBanner`
  - **HTML:** `<div id="coiConsentBanner" role="banner" aria-describedby="coiBannerHeadline" aria-labelledby="cookie_summary" class="coi-consent-banner BannerBottom BannerLeft" lang="nb" dir="ltr" aria-hidden="false" style="display: block;">`
  - **Failure summary:** Fix any of the following: Document has more than one banner landmark


### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 6

#### Affected Elements:

- **Target:** `.rc_link-card.rc_link-card--nyhet.css-tf5rs8:nth-child(1) > .rc_link-card__content > .rc_link-card__image.rc_link-card__image--photo > img[aria-hidden="false"][height="800"][width="800"]`
  - **HTML:** `<img aria-hidden="false" alt="" loading="lazy" width="800" height="800" decoding="async" data-nimg="1" src="https://cdn.sanity.i..." style="color: transparent; ...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `.rc_link-card.rc_link-card--nyhet.css-tf5rs8:nth-child(4) > .rc_link-card__content > .rc_link-card__image.rc_link-card__image--photo > img[aria-hidden="false"][height="800"][width="800"]`
  - **HTML:** `<img aria-hidden="false" alt="" loading="lazy" width="800" height="800" decoding="async" data-nimg="1" src="https://cdn.sanity.i..." style="color: transparent; ...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `a[href$="na-kommer-studentene"] > .rc_link-card__content > .rc_link-card__image.rc_link-card__image--photo > img[aria-hidden="false"][height="800"][width="800"]`
  - **HTML:** `<img aria-hidden="false" alt="" loading="lazy" width="800" height="800" decoding="async" data-nimg="1" src="https://cdn.sanity.i..." style="color: transparent; ...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `.rc_link-card.rc_link-card--nyhet.css-tf5rs8:nth-child(6) > .rc_link-card__content > .rc_link-card__image.rc_link-card__image--photo > img[aria-hidden="false"][height="800"][width="800"]`
  - **HTML:** `<img aria-hidden="false" alt="" loading="lazy" width="800" height="800" decoding="async" data-nimg="1" src="https://cdn.sanity.i..." style="color: transparent; ...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `.rc_link-card.rc_link-card--nyhet.css-tf5rs8:nth-child(8) > .rc_link-card__content > .rc_link-card__image.rc_link-card__image--photo > img[aria-hidden="false"][height="800"][width="800"]`
  - **HTML:** `<img aria-hidden="false" alt="" loading="lazy" width="800" height="800" decoding="async" data-nimg="1" src="https://cdn.sanity.i..." style="color: transparent; ...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `.rc_link-card.rc_link-card--nyhet.css-tf5rs8:nth-child(10) > .rc_link-card__content > .rc_link-card__image.rc_link-card__image--photo > img[aria-hidden="false"][height="800"][width="800"]`
  - **HTML:** `<img aria-hidden="false" alt="" loading="lazy" width="800" height="800" decoding="async" data-nimg="1" src="https://cdn.sanity.i..." style="color: transparent; ...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#skip-to-content`
  - **HTML:** `<div id="skip-to-content" class="css-1372ars"><div><a href="#main" class="css-1d4ws8o">Hopp til innhold</a></div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

