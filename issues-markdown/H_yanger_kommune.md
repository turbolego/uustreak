# WCAG Violations Report for Høyanger kommune

**Timestamp:** 2026-11-20T06:14:52.144Z
**URL:** [https://www.hoyanger.kommune.no/](https://www.hoyanger.kommune.no/)
**Total Violations:** 2

## Violation Details

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nn" style="--bc-primary-color-5...">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark

- **Target:** `#vFact_audioFrame, html`
  - **HTML:** `<html>`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 12

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_192`
  - **HTML:** `<div class="webPart wp-banner-text" id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_192">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_193_WebpartId_193_txtSearch`
  - **HTML:** `<input name="ctl00$ctl00$ctl00$innhold$MidtSone$ctl00$WebpartId_193$WebpartId_193$txtSearch" type="text" id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_193_WebpartId_193_txtSearch" class="js-liten-trigger-search" aria-label="Søkete…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_194`
  - **HTML:** `<div class="webPart wp-banner-buttons" id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_194">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.section:nth-child(10)`
  - **HTML:** `<div class="section">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.focus-section`
  - **HTML:** `<div class="focus-section">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_198 > h2`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktuelt</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_198_WebpartId_198_rptItems_ctl01_ucDisplayControl_hlLinkAlle" class="MargLink" href="/aktuelt/">Sjå alle aktueltsaker</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.back-to-top-button`
  - **HTML:** `<a class="back-to-top-button js-back-to-top-button" href="#top"> Til toppen </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, #vfact_testaudio`
  - **HTML:** `<audio id="vfact_testaudio" controls=""> not supported</audio>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, #vfact_bkaudio`
  - **HTML:** `<audio id="vfact_bkaudio" controls=""> not supported</audio>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, h1`
  - **HTML:** `<h1>Her er framen</h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

