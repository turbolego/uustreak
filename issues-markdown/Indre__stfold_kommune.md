# WCAG Violations Report for Indre østfold kommune

**Timestamp:** 2026-11-19T06:45:25.874Z
**URL:** [https://www.io.kommune.no/](https://www.io.kommune.no/)
**Total Violations:** 2

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `img[alt="Indre Østfold kommune"]`
  - **HTML:** `<img alt="Indre Østfold kommune" src="/handlers/bv.ashx/i584648c1-4db5-47ea-86ae-9d0a89a49037/indre-ostfold-logo.svg">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 8

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_ctl07_WebpartId_42_WebpartId_42_txtSearch`
  - **HTML:** `<input name="ctl00$ctl00$ctl00$innhold$ctl07$WebpartId_42$WebpartId_42$txtSearch" type="text" id="ctl00_ctl00_ctl00_innhold_ctl07_WebpartId_42_WebpartId_42_txtSearch" class="js-liten-trigger-search" aria-label="Søketekst" placeholder="Hei!…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.top-boxes-upper`
  - **HTML:** `<div class="top-boxes top-boxes-upper">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.top-boxes-middle`
  - **HTML:** `<div class="top-boxes top-boxes-middle">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.top-boxes-lower`
  - **HTML:** `<div class="top-boxes top-boxes-lower">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.middle-boxes`
  - **HTML:** `<div class="middle-boxes">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_51 > .webPartTittel`
  - **HTML:** `<h2 class="webPartTittel"> <span>Nyheter og kunngjøringer</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_51_WebpartId_51_hlLinkAlle" class="MargLink" href="/aktuelt/">Alle nyheter og kunngjøringer</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

