# WCAG Violations Report for Haugesund kommune

**Timestamp:** 2026-10-02T17:13:20.596Z
**URL:** [https://www.haugesund.kommune.no/](https://www.haugesund.kommune.no/)
**Total Violations:** 3

## Violation Details

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb" style="--bc-primary-color-5...">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb" style="--bc-primary-color-5...">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 10

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_105_WebpartId_105_txtSearch`
  - **HTML:** `<input name="ctl00$ctl00$ctl00$innhold$MidtSone$ctl00$WebpartId_105$WebpartId_105$txtSearch" type="text" id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_105_WebpartId_105_txtSearch" class="js-liten-trigger-search" aria-label="Søkete…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_106`
  - **HTML:** `<div class="webPart wp-tag-menu wp-tag-menu--dark" id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_106">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.section:nth-child(10)`
  - **HTML:** `<div class="section">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.section:nth-child(11)`
  - **HTML:** `<div class="section">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_111 > .webPartTittel`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktuelt</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_111_WebpartId_111_rptItems_ctl01_ucDisplayControl_hlLinkAlle" class="MargLink" href="/aktuelt/">Se alle saker</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_112`
  - **HTML:** `<div class="webPart wp-calendar emnekart-webpart type-kalender" id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_112">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.back-to-top-button`
  - **HTML:** `<a class="back-to-top-button js-back-to-top-button" href="#top"> Til toppen </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container-floating-notifications`
  - **HTML:** `<div class="container-floating-notifications" style="background: url("/images/1px_Black_Opacity_75.png");">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

