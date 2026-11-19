# WCAG Violations Report for Siljan kommune

**Timestamp:** 2026-11-19T06:57:58.813Z
**URL:** [https://siljan.kommune.no/](https://siljan.kommune.no/)
**Total Violations:** 6

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.front-search > .container > .row > .col-md-offset-3.col-md-6 > .input-group > .input-group-btn > button`
  - **HTML:** `<button class="btn btn-search" id="search-now" type="button"><span class="bi_interface-search"></span></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Documents must have <title> element to aid in navigation

- **Impact:** serious
- **Description:** Ensure each HTML document contains a non-empty <title> element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/document-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag242, TTv5, TT12.a, EN-301-549, EN-9.2.4.2, ACT, RGAAv4, RGAA-8.5.1
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html class="no-js" lang="no">`
  - **Failure summary:** Fix any of the following: Document does not have a non-empty <title> element


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html class="no-js" lang="no">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html class="no-js" lang="no">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 14

#### Affected Elements:

- **Target:** `.front-header-container > .container`
  - **HTML:** `<div class="container">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tab1`
  - **HTML:** `<a href="#snarvei-til-tjenester" title="Snarvei til tjenester" class="tab1 active open"> <h2>Snarvei til tjenester</h2> </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tab3`
  - **HTML:** `<a href="#skole-og-barnehage" title="Skole og barnehage" class="tab3"> <h2>Skole og barnehage</h2> </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tab2`
  - **HTML:** `<a href="#helse-og-omsorg" title="Helse og omsorg" class="tab2"> <h2>Helse og omsorg</h2> </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tab4`
  - **HTML:** `<a href="#kultur-og-fritid" title="Kultur og fritid" class="tab4"> <h2>Kultur og fritid</h2> </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tab5`
  - **HTML:** `<a href="#teknisk-og-eiendom" title="Teknisk og eiendom" class="tab5"> <h2>Teknisk og eiendom</h2> </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tab6`
  - **HTML:** `<a href="#politikk-og-innsyn" title="Politikk og innsyn" class="tab6"> <h2>Politikk og innsyn</h2> </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#front-menu-sub > .first.row`
  - **HTML:** `<ul class="row list-unstyled first">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#front-menu-sub > .show-all-container`
  - **HTML:** `<div class="show-all-container"> <a href="#vis-alt" class="show-all"><span>Vis alle</span></a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.front-search > .container > .row > .col-md-offset-3.col-md-6 > .input-group > input`
  - **HTML:** `<input type="text" class="form-control" id="appendedInputButtons" placeholder="Skriv inn søkeord...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `body > div:nth-child(4)`
  - **HTML:** `<div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.aktuelt`
  - **HTML:** `<div class="aktuelt">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.leaflet-bottom.leaflet-right`
  - **HTML:** `<div class="leaflet-bottom leaflet-right"><div class="leaflet-control-attribution leaflet-control"><a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> | <a href="http://www.kartverket.no/">Kartverket</a></d…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.map-functions`
  - **HTML:** `<div class="map-functions">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### Select element must have an accessible name

- **Impact:** critical
- **Description:** Ensure select element has an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/select-name?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `select`
  - **HTML:** `<select>`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…

