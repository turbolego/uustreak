# WCAG Violations Report for Vestnes kommune

**Timestamp:** 2026-11-22T06:26:18.435Z
**URL:** [https://www.vestnes.kommune.no/](https://www.vestnes.kommune.no/)
**Total Violations:** 2

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl06_WebpartId_430 > .webPartTittel > span`
  - **HTML:** `<span>Aktuelt frå kommunen</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.65 (foreground color: #ffffff, background color: #dfc876, font size: 30.0pt (40px), font weight: normal). Expected contrast ratio of 3:1


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 16

#### Affected Elements:

- **Target:** `.top-boxes`
  - **HTML:** `<div class="top-boxes">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_424 > .webPartTittel`
  - **HTML:** `<h2 class="webPartTittel"> <span>Våre tenester</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_424 > .webPartInnhold > .vListe > .toplevel:nth-child(1)`
  - **HTML:** `<li class="toplevel">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_424 > .webPartInnhold > .vListe > .toplevel:nth-child(2)`
  - **HTML:** `<li class="toplevel">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_424 > .webPartInnhold > .vListe > .toplevel:nth-child(3)`
  - **HTML:** `<li class="toplevel">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_424 > .webPartInnhold > .vListe > .toplevel:nth-child(4)`
  - **HTML:** `<li class="toplevel">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_424 > .webPartInnhold > .vListe > .toplevel:nth-child(5)`
  - **HTML:** `<li class="toplevel">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_424 > .webPartInnhold > .vListe > .toplevel:nth-child(6)`
  - **HTML:** `<li class="toplevel">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_424 > .webPartInnhold > .vListe > .toplevel:nth-child(7)`
  - **HTML:** `<li class="toplevel">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_424 > .webPartInnhold > .vListe > .toplevel:nth-child(8)`
  - **HTML:** `<li class="toplevel">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_424 > .webPartInnhold > .vListe > .toplevel:nth-child(9)`
  - **HTML:** `<li class="toplevel">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_425`
  - **HTML:** `<div class="webPart wp-view-all" id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_425">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.middle-boxes--middle`
  - **HTML:** `<div class="middle-boxes middle-boxes--middle">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl06_WebpartId_430 > .webPartTittel`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktuelt frå kommunen</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl06_WebpartId_430_WebpartId_430_hlLinkAlle" class="MargLink" href="/aktuelt/">Sjå alle saker</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

