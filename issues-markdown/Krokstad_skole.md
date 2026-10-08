# WCAG Violations Report for Krokstad skole

**Timestamp:** 2026-10-08T10:41:12.953Z
**URL:** [https://www.drammen.kommune.no/tjenester/skole/skolene-i-drammen/krokstad-skole/](https://www.drammen.kommune.no/tjenester/skole/skolene-i-drammen/krokstad-skole/)
**Total Violations:** 5

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


### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.mainMenuTrigger`
  - **HTML:** `<div class="mainMenuTrigger _jsMainMenuTrigger" tabindex="0" role="button">`
  - **Failure summary:** Fix any of the following: Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.skipLink`
  - **HTML:** `<p class="skipLink"> <a href="#mainContentContainer">Hopp til innhold</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

