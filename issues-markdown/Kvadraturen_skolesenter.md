# WCAG Violations Report for Kvadraturen skolesenter

**Timestamp:** 2026-10-09T05:05:16.029Z
**URL:** [https://kvadraturen.vgs.no/](https://kvadraturen.vgs.no/)
**Total Violations:** 3

## Violation Details

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Embedded code from Ekstern iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe`
  - **HTML:** `<iframe allowfullscreen="" frameborder="0" height="300" src="https://www.google.c..." style="border:0;" width="300">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `a[href$="agderfk.no/"]`
  - **HTML:** `<a href="https://agderfk.no/" data-id="16221" class="external-link external"><span>Agder fylkeskommune</span></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 14

#### Affected Elements:

- **Target:** `.visually-hidden`
  - **HTML:** `<h1 class="visually-hidden"> Kvadraturen videregående skole </h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#Sone2501`
  - **HTML:** `<div id="Sone2501" class="zone Zone webPartZoneVertical">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ucSearchField_txtSearch`
  - **HTML:** `<input name="ctl00$ctl00$ctl00$innhold$MidtSone$ucSearchField$txtSearch" type="text" id="ctl00_ctl00_ctl00_innhold_MidtSone_ucSearchField_txtSearch" class="js-liten-trigger-search" aria-label="Søketekst" placeholder="Hva leter du etter?" d…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#Sone2502`
  - **HTML:** `<div id="Sone2502" class="zone Zone webPartZoneVertical">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_plhZoneContainer5000`
  - **HTML:** `<div id="ctl00_ctl00_ctl00_innhold_MidtSone_plhZoneContainer5000" class="zone-container wrapper-outer zone-container--white zone-container--service-menu">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_1390 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > .il-heading--h2`
  - **HTML:** `<h2 class="il-heading il-heading--h2">Her er - og blir du noe!</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_1390 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > p:nth-child(2)`
  - **HTML:** `<p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.text-box > .il-heading--h3`
  - **HTML:** `<h3 class="il-heading il-heading--h3">Kvadraturen vgs kickstarter skoleåret med vår egen Oppstartsfestival&nbsp;</h3>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl06_WebpartId_1391 > .webPartInnhold > .emnekart-text-box-list > .emnekart-text-box > .text-box > p:nth-child(2)`
  - **HTML:** `<p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_plhZoneContainer5300`
  - **HTML:** `<div id="ctl00_ctl00_ctl00_innhold_MidtSone_plhZoneContainer5300" class="zone-container zone-container--focus-field-3 wrapper-outer zone-container--focus-field">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl08_WebpartId_1395 > .webPartTittel`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktuelt</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl08_WebpartId_1395_WebpartId_1395_rptItems_ctl01_ucDisplayControl_hlLinkAlle" class="MargLink" href="/aktuelt/">Se alle aktuelle saker</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.back-to-top-button-wrapper`
  - **HTML:** `<div class="back-to-top-button-wrapper"> <a class="back-to-top-button js-back-to-top-button" href="#header"> <span>Til toppen</span> </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

