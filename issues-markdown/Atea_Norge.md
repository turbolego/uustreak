# WCAG Violations Report for Atea Norge

**Timestamp:** 2026-10-22T03:36:48.213Z
**URL:** [https://www.atea.no/](https://www.atea.no/)
**Total Violations:** 7

## Violation Details

### Elements must only use permitted ARIA attributes

- **Impact:** serious
- **Description:** Ensure ARIA attributes are not prohibited for an element's role
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-prohibited-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#videoLoop, #movie_player`
  - **HTML:** `<div class="html5-video-player y..." tabindex="" id="movie_player" data-version="/s/player/55de7e60/p..." aria-label="YouTube-videospiller">`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on "div" elements with no valid role attribute.


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `.ot-cookie-policy-link`
  - **HTML:** `<a class="ot-cookie-policy-link" href="https://www.atea.com/data-privacy-policy/" target="_blank" aria-label="More information about your privacy, opens in a new tab" rel="noopener noreferrer">Read more about that here</a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-title-only?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-banner-is-top-level?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.page-body`
  - **HTML:** `<div class="page-body" role="main" aria-label="Atea - Norges største IT-selskap">`
  - **Failure summary:** Fix any of the following: Document has more than one main landmark


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.chat-button`
  - **HTML:** `<a class="chat-button" aria-label="Open chat" target="_blank" href="https://chat.atea.com/?countryInstance=no&languageCode=no&nickName=&chatId=&variables.Name=&variables.Email=&variables.Customer=%20()&variables.Lang=no&variables.OrgNumber…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

