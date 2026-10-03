# WCAG Violations Report for Farnes skule

**Timestamp:** 2026-10-03T04:11:22.397Z
**URL:** [https://www.ardal.kommune.no/tenester/barnehage-og-skule/skule/farnes-skule/](https://www.ardal.kommune.no/tenester/barnehage-og-skule/skule/farnes-skule/)
**Total Violations:** 3

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `img[alt="Årdal kommune"]`
  - **HTML:** `<img alt="Årdal kommune" src="/handlers/bv.ashx/ibf1c868f-6070-4d5a-9345-0b0f903d0b72/logo-ardal-01.svg">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nn" style="--bc-primary-color-5...">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark

- **Target:** `#vFact_audioFrame, html`
  - **HTML:** `<html lang="da">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 7

#### Affected Elements:

- **Target:** `.breadcrumbs-content > span`
  - **HTML:** `<span> <span class="breadcrumbs__label "> Du er her: </span> </span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#breadcrumb-ctl00_ctl00_ctl00_ctl00_innhold_MidtSone_ucBreadcrumbs`
  - **HTML:** `<ul id="breadcrumb-ctl00_ctl00_ctl00_ctl00_innhold_MidtSone_ucBreadcrumbs" class="breadcrumbs__list js-breadcrumb">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.page-title`
  - **HTML:** `<div class="page-title js-page-title"> <div class="page-title-content"> <h1 class="js-page-title-text"> Farnes skule </h1> </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.sub-navigation`
  - **HTML:** `<div class="sub-navigation">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.fantDuLabel`
  - **HTML:** `<span role="heading" aria-level="2" class="fantDuLabel il-feedback-form-heading">Fann du det du leita etter?</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, #vfact_testaudio`
  - **HTML:** `<audio id="vfact_testaudio" controls=""> not supported</audio>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, h1`
  - **HTML:** `<h1>Her er framen</h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

