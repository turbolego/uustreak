# WCAG Violations Report for Fana Sparebank

**Timestamp:** 2026-10-02T17:11:18.320Z
**URL:** [https://www.fanasparebank.no/](https://www.fanasparebank.no/)
**Total Violations:** 5

## Violation Details

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.hero__image > div > img`
  - **HTML:** `<img src="/siteassets/illustrasjoner/illustrasjon-forside.svg" style="width: 100%; height: 100%; background-color: transparent; object-fit: contain;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.card__image.beige-theme > div > img`
  - **HTML:** `<img src="/siteassets/illustrasjoner/illustrasjon-spare.svg" style="width: 100%; height: 100%; background-color: transparent; object-fit: contain;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


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


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.skip-link`
  - **HTML:** `<a class="skip-link" href="#body-main-content">Hopp til hovedinnhold</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.PostHogSurvey-019d1ac3-348c-0000-c7e4-af9588574047, .question-header`
  - **HTML:** `<div class="question-header"><h3 class="survey-question">Hvor fornøyd er du med hjemmesiden vår?</h3></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.PostHogSurvey-019d1ac3-348c-0000-c7e4-af9588574047, .rating-text`
  - **HTML:** `<div class="rating-text"><div>Veldig misfornøyd</div><div>Strålende fornøyd</div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.PostHogSurvey-019d1ac3-348c-0000-c7e4-af9588574047, .bottom-section`
  - **HTML:** `<div class="bottom-section">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

