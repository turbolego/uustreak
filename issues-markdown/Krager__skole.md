# WCAG Violations Report for Kragerø skole

**Timestamp:** 2026-10-10T08:35:20.018Z
**URL:** [https://www.kragero.kommune.no/kragero-skole/](https://www.kragero.kommune.no/kragero-skole/)
**Total Violations:** 3

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `img[alt="Kragerø skole"]`
  - **HTML:** `<img alt="Kragerø skole" role="presentation" src="/handlers/bv.ashx/i7e4ccb9d-b40c-4855-bfd3-94860fa2e641/9d5f2export-2023-04-11-080631.svg">`
  - **Failure summary:** Fix any of the following: ARIA role presentation is not allowed for given element


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb" style="--innsyn-primary-theme-color: #003B5C; --innsyn-primary-contrast-color: #FFFFFF; --innsyn-primary-neutral-color: #E7ECEA; --innsyn-secondary-theme-color: #FBDBC2; --innsyn-secondary-contrast-color: #141423; --innsyn-…`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 8

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_1361 > h2`
  - **HTML:** `<h2 class="webPartTittel"> <span>Søk</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartInnhold > .content-search-box.content-search-box--default[data-datasource-id="2"] > .content-search-box-content > .content-search-box-input > .content-search-box-combobox > label`
  - **HTML:** `<label class="content-search-box-label" for="ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_1361_WebpartId_1361_ucContentSearchBoxControl-content-search-box-search-field"> <span> Søk etter </span> </label>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_1359`
  - **HTML:** `<div class="webPart frontpage-contact-menu accessible-title" id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_1359">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#Sone5001`
  - **HTML:** `<div id="Sone5001" class="zone Zone webPartZoneVertical">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#Sone6001`
  - **HTML:** `<div id="Sone6001" class="zone Zone webPartZoneVertical">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#bottom-boxes`
  - **HTML:** `<div id="bottom-boxes">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container-floating-notifications`
  - **HTML:** `<div class="container-floating-notifications" style="background: url("/images/1px_Black_Opacity_75.png");">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

