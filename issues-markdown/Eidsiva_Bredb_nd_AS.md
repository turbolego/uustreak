# WCAG Violations Report for Eidsiva Bredbånd AS

**Timestamp:** 2026-10-08T10:24:32.819Z
**URL:** [https://www.eidsiva.no/](https://www.eidsiva.no/)
**Total Violations:** 6

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


### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#pi2gGxdxNNk > main`
  - **HTML:** `<main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.


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


### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#main`
  - **HTML:** `<main id="main" class="grow w-full eid-container ">`
  - **Failure summary:** Fix any of the following: Document has more than one main landmark


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

- **Target:** `#main`
  - **HTML:** `<main id="main" class="grow w-full eid-container ">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `a[href$="#main"]`
  - **HTML:** `<a class="max-w-full min-w-0 btn btn--primary btn-md" href="#main" tabindex="1" type="button"><span>Gå til hovedinnhold</span></a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

