# WCAG Violations Report for Molde kommune

**Timestamp:** 2026-10-03T04:15:14.671Z
**URL:** [https://www.molde.kommune.no/](https://www.molde.kommune.no/)
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
  - **HTML:** `<html lang="nb">`
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
  - **HTML:** `<html lang="nb">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 18

#### Affected Elements:

- **Target:** `.top-boxes`
  - **HTML:** `<div class="top-boxes">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_6243 > .webPartTittel`
  - **HTML:** `<h2 class="webPartTittel"> <span>Våre tjenester</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_6243 > .webPartInnhold > .vListe > .toplevel:nth-child(1)`
  - **HTML:** `<li class="toplevel">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_6243 > .webPartInnhold > .vListe > .toplevel:nth-child(2)`
  - **HTML:** `<li class="toplevel">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_6243 > .webPartInnhold > .vListe > .toplevel:nth-child(3)`
  - **HTML:** `<li class="toplevel">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_6243 > .webPartInnhold > .vListe > .toplevel:nth-child(4)`
  - **HTML:** `<li class="toplevel">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_6243 > .webPartInnhold > .vListe > .toplevel:nth-child(5)`
  - **HTML:** `<li class="toplevel">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_6243 > .webPartInnhold > .vListe > .toplevel:nth-child(6)`
  - **HTML:** `<li class="toplevel">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_6243 > .webPartInnhold > .vListe > .toplevel:nth-child(7)`
  - **HTML:** `<li class="toplevel">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_6243 > .webPartInnhold > .vListe > .toplevel:nth-child(8)`
  - **HTML:** `<li class="toplevel">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_6243 > .webPartInnhold > .vListe > .toplevel:nth-child(9)`
  - **HTML:** `<li class="toplevel">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_6455`
  - **HTML:** `<div class="webPart wp-view-all" id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_6455">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.middle-boxes--middle.middle-boxes:nth-child(10)`
  - **HTML:** `<div class="middle-boxes middle-boxes--middle">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.middle-boxes--calendar`
  - **HTML:** `<div class="middle-boxes middle-boxes--calendar">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.middle-boxes--middle.middle-boxes:nth-child(12)`
  - **HTML:** `<div class="middle-boxes middle-boxes--middle">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_6466 > .webPartTittel`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktuelt fra kommunen</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_6466_WebpartId_6466_hlLinkAlle" class="MargLink" href="/aktuelt/">Se alle saker</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

