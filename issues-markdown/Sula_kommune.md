# WCAG Violations Report for Sula kommune

**Timestamp:** 2026-11-20T06:38:20.319Z
**URL:** [https://www.sula.kommune.no/](https://www.sula.kommune.no/)
**Total Violations:** 3

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.area-message-list-item__title > h3`
  - **HTML:** `<h3><span>Sentralbord og innbyggartorg er ope mandag og onsdag frå kl. 09:00 - 13:00</span></h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.logoimg`
  - **HTML:** `<img class="logoimg" src="/design/sula_kommune/sula/v2018/assets/images/sula-logo.svg" alt="Sula kommune">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 8

#### Affected Elements:

- **Target:** `.subMenu`
  - **HTML:** `<div class="subMenu">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.top-boxes`
  - **HTML:** `<div class="top-boxes">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_50 > .webPartTittel`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktuelt frå Sula</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_50_WebpartId_50_hlLinkAlle" class="MargLink" href="/aktuelt/">Gå til nyhetsarkiv</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#Sone7001`
  - **HTML:** `<div id="Sone7001" class="zone Zone webPartZoneVertical">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, #vfact_testaudio`
  - **HTML:** `<audio id="vfact_testaudio" controls=""> not supported</audio>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, h1`
  - **HTML:** `<h1>Her er framen</h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

