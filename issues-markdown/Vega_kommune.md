# WCAG Violations Report for Vega kommune

**Timestamp:** 2026-11-20T06:37:43.228Z
**URL:** [https://www.vega.kommune.no/](https://www.vega.kommune.no/)
**Total Violations:** 2

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `h4`
  - **HTML:** `<h4 class="artikkelTittel">`
  - **Failure summary:** Fix any of the following: Heading order invalid


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 7

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_48_WebpartId_48_txtSearch`
  - **HTML:** `<input name="ctl00$ctl00$ctl00$in..." type="text" id="ctl00_ctl00_ctl00_in..." class="js-liten-trigger-sea..." aria-label="Søketekst" data-handled="true" placeholder="Hva kan vi hjelpe de...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#Sone5001`
  - **HTML:** `<div id="Sone5001" class="zone Zone webPartZoneVertical">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#Sone6000`
  - **HTML:** `<div id="Sone6000" class="zone Zone webPartZoneVertical">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_49 > h2`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktuelt</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_49_WebpartId_49_hlLinkAlle" class="MargLink" href="/aktuelt/">Se alle aktualiteter</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#Sone7001`
  - **HTML:** `<div id="Sone7001" class="zone Zone webPartZoneVertical">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

