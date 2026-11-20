# WCAG Violations Report for Time kommune tenesteområde samfunn

**Timestamp:** 2026-11-20T06:39:42.534Z
**URL:** [https://www.time.kommune.no/](https://www.time.kommune.no/)
**Total Violations:** 4

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
  - **HTML:** `<h3><span>ⓘ Aktuell informasjon</span></h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.logo`
  - **HTML:** `<img class="logo" src="/design/time_kommune/time/v2018/assets/images/time-logo.svg" alt="Hovedportal">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nn" style="--innsyn-primary-theme-color: #003B5C; --innsyn-primary-contrast-color: #FFFFFF; --innsyn-primary-neutral-color: #E7ECEA; --innsyn-secondary-theme-color: #FBDBC2; --innsyn-secondary-contrast-color: #141423; --innsyn-…`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 9

#### Affected Elements:

- **Target:** `.alert-box`
  - **HTML:** `<div class="alert-box">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_ctl09_WebpartId_91_WebpartId_91_txtSearch`
  - **HTML:** `<input name="ctl00$ctl00$ctl00$innhold$ctl09$WebpartId_91$WebpartId_91$txtSearch" type="text" id="ctl00_ctl00_ctl00_innhold_ctl09_WebpartId_91_WebpartId_91_txtSearch" class="js-liten-trigger-search" aria-label="Søketekst" placeholder="Kva …`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_43`
  - **HTML:** `<div class="webPart frontpage__service-menu" id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_43">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="5510"] > span > .text`
  - **HTML:** `<span class="text">Politikk </span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="5509"] > span > .text`
  - **HTML:** `<span class="text">Sjå alle tenester</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="14023"] > span > .text`
  - **HTML:** `<span class="text">Ledige stillingar</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#middleTop-boxes`
  - **HTML:** `<div id="middleTop-boxes">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_51_WebpartId_51_hlLinkAlle" class="MargLink" href="/aktuelt/">Sjå fleire aktuelle saker</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

