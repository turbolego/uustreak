# WCAG Violations Report for Atea Norge

**Timestamp:** 2026-10-10T08:08:14.178Z
**URL:** [https://www.atea.no/](https://www.atea.no/)
**Total Violations:** 6

## Violation Details

### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.mega-menu > .ng-pristine.ng-valid[method="get"] > .search-bar > .container > .search-query-container > .search-query[title="Søk på Atea"][name="q"]`
  - **HTML:** `<input type="text" title="Søk på Atea" name="q" class="search-query" placeholder="Søk etter artikler og tjenester.">`
  - **Failure summary:** Fix all of the following: Only title used to generate label for form element


### Banner landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the banner landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-banner-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.hero-section`
  - **HTML:** `<div class="hero-section" role="banner">`
  - **Failure summary:** Fix any of the following: The banner landmark is contained in another landmark.


### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.hero-start-content`
  - **HTML:** `<div class="container hero-start-content" role="main"> <div class="content-container"> <h1 role="heading" aria-level="1" class="default"> Vi bygger Norge med IT </h1> </div> </div>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.


### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.page-body`
  - **HTML:** `<div class="page-body" role="main" aria-label="Atea - Norges største IT-selskap">`
  - **Failure summary:** Fix any of the following: Document has more than one main landmark


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Embedded code from Sleeknote
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `sleeknote-jxkvh3-bottom, sleeknote-badge, .sleeknote-badge`
  - **HTML:** `<a href="//sleeknote.com/?utm_source=Badge&utm_medium=promote&utm_campaign=atea.no" target="_blank" rel="noopener" class="sleeknote-badge">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.chat-button`
  - **HTML:** `<a class="chat-button" aria-label="Open chat" target="_blank" href="https://chat.atea.com/?countryInstance=no&languageCode=no&nickName=&chatId=&variables.Name=&variables.Email=&variables.Customer=%20()&variables.Lang=no&variables.OrgNumber…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

