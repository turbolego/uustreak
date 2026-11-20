# WCAG Violations Report for Midtre namdal avfallsselskap IKS

**Timestamp:** 2026-11-20T06:20:35.798Z
**URL:** [https://mna.no/](https://mna.no/)
**Total Violations:** 4

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `h6`
  - **HTML:** `<h6>Visste du at 670 resirkulerte&nbsp;aluminiumsbokser kan bli til en sykkel? Eller at 100 kildesorterte syltetøyglass blir til 7 meter isolasjon&nbsp;og 33 nye syltetøyglass?</h6>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="no" prefix="dcterms: http://purl.org/dc/terms/#; og: http://ogp.me/ns/website#">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.other-language`
  - **HTML:** `<nav class="tile-common standard-menu d-print-none nav-inline single-mode other-language">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 12

#### Affected Elements:

- **Target:** `.logo.navbar-brand.col-12 > .tile-content > a[href$="mna.no/"] > .sr-only`
  - **HTML:** `<span class="sr-only">Til forsiden</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.slick-initialized`
  - **HTML:** `<div data-slick="{"autoplay":true,"au..." class="articles slick-initi...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#placeholder-content-4`
  - **HTML:** `<div id="placeholder-content-4" class="striped">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#placeholder-content-5`
  - **HTML:** `<div id="placeholder-content-5" class="striped">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.logo.navbar-brand.col-sm-6 > .tile-content > a[href$="mna.no/"] > .sr-only`
  - **HTML:** `<span class="sr-only">Til forsiden</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.stripped-design`
  - **HTML:** `<div class="main-content-only tile-common article-banner col-sm-12 col-md-6 col-lg-4 stripped-design ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.secondary-design`
  - **HTML:** `<div class="main-content-only tile-common article-banner col-sm-12 col-md-6 col-lg-4 secondary-design ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `h4`
  - **HTML:** `<h4>Følg oss på:</h4>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.facebook_link > .sr-only`
  - **HTML:** `<span class="sr-only">Gå til Facebook</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.youtube_link > .sr-only`
  - **HTML:** `<span class="sr-only">Gå til Youtube</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.instagram_link > .sr-only`
  - **HTML:** `<span class="sr-only">Gå til Instagram</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#coretrek-footer`
  - **HTML:** `<div id="coretrek-footer">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

