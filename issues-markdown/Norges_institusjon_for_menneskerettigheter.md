# WCAG Violations Report for Norges institusjon for menneskerettigheter

**Timestamp:** 2026-11-22T05:42:20.668Z
**URL:** [https://www.nhri.no/](https://www.nhri.no/)
**Total Violations:** 2

## Violation Details

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb-NO" class="light">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 6

#### Affected Elements:

- **Target:** `.frontpage-maincolumn`
  - **HTML:** `<div class="frontpage-maincolumn">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#front-page-tools`
  - **HTML:** `<section id="front-page-tools" class="sidebar-block tools-block">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#front-page-mandates`
  - **HTML:** `<section id="front-page-mandates" class="sidebar-block tools-block">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.frontpage-documents-list`
  - **HTML:** `<div class="frontpage-documents-list frontpage-fullbleed">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.frontpage-reports-block`
  - **HTML:** `<div class="frontpage-reports-block">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.frontpage-theme-links`
  - **HTML:** `<div class="frontpage-theme-links frontpage-fullbleed">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

