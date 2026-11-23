# WCAG Violations Report for Hattfjelldal kommune

**Timestamp:** 2026-11-23T06:17:41.481Z
**URL:** [https://hattfjelldal.kommune.no/](https://hattfjelldal.kommune.no/)
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
  - **HTML:** `<html lang="nb">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 8

#### Affected Elements:

- **Target:** `.frontpage__banner`
  - **HTML:** `<div class="frontpage__banner" style="background-image: url('/handlers/bv.ashx/i51213fbe-a468-4666-9d3b-c4ec908dc295/host.png');">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.frontpage__welcome`
  - **HTML:** `<div class="frontpage__welcome">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_txtSearch`
  - **HTML:** `<input name="ctl00$ctl00$ctl00$innhold$MidtSone$ctl03$txtSearch" type="text" id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_txtSearch" class="js-liten-trigger-search" aria-label="Søketekst" data-handled="true" placeholder="Hva kan vi hjelpe …`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.top-boxes`
  - **HTML:** `<div class="top-boxes">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.lower-middle-boxes`
  - **HTML:** `<div class="lower-middle-boxes">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl10_WebpartId_53 > .webPartTittel`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktuelt fra kommunen</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl10_WebpartId_53_WebpartId_53_hlLinkAlle" class="MargLink" href="/aktuelt/">Gå til nyhetsarkiv</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

