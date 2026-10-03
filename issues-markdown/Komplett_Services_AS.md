# WCAG Violations Report for Komplett Services AS

**Timestamp:** 2026-10-03T04:14:57.942Z
**URL:** [https://www.komplett.no/](https://www.komplett.no/)
**Total Violations:** 4

## Violation Details

### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 3

#### Affected Elements:

- **Target:** `#cookie_cat_functional`
  - **HTML:** `<input class="coi__checkbox" tabindex="0" data-index="0" name="cookie_cat_functional" id="cookie_cat_functional" type="checkbox" title="Funksjonelle" onclick="CookieInformation.changeCategoryConsentDecision('cookie_cat_functional')">`
  - **Failure summary:** Fix all of the following: Only title used to generate label for form element

- **Target:** `#cookie_cat_statistic`
  - **HTML:** `<input class="coi__checkbox" tabindex="0" data-index="0" name="cookie_cat_statistic" id="cookie_cat_statistic" type="checkbox" title="Statistiske" onclick="CookieInformation.changeCategoryConsentDecision('cookie_cat_statistic')">`
  - **Failure summary:** Fix all of the following: Only title used to generate label for form element

- **Target:** `#cookie_cat_marketing`
  - **HTML:** `<input class="coi__checkbox" tabindex="0" data-index="0" name="cookie_cat_marketing" id="cookie_cat_marketing" type="checkbox" title="Markedsføring" onclick="CookieInformation.changeCategoryConsentDecision('cookie_cat_marketing')">`
  - **Failure summary:** Fix all of the following: Only title used to generate label for form element


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" style="display: flex;" aria-hidden="false">`
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
  - **HTML:** `<div id="coiOverlay" role="banner" style="display: flex;" aria-hidden="false">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `.header__menu`
  - **HTML:** `<nav class="hide-xs hide-sm header__menu">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.chat__menu-title`
  - **HTML:** `<div class="chat__menu-title">Vi hjelper deg!</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

