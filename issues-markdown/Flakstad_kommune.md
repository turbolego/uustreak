# WCAG Violations Report for Flakstad kommune

**Timestamp:** 2026-11-20T06:10:07.492Z
**URL:** [https://flakstad.kommune.no/](https://flakstad.kommune.no/)
**Total Violations:** 3

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `img[alt="Flakstad kommune"]`
  - **HTML:** `<img role="presentation" src="/design/lofoten/lofoten/v2016/assets/images/flakstad-logo.svg" alt="Flakstad kommune">`
  - **Failure summary:** Fix any of the following: ARIA role presentation is not allowed for given element


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb" style="height: 100%;">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 7

#### Affected Elements:

- **Target:** `#Sone3000`
  - **HTML:** `<div id="Sone3000" class="zone Zone webPartZoneVertical">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#topBoxes`
  - **HTML:** `<div id="topBoxes">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#middleBoxes`
  - **HTML:** `<div id="middleBoxes">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_7 > h2`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktuelt</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl07_WebpartId_7_WebpartId_7_hlLinkAlle" class="MargLink" href="/aktuelt/">Vis alle nyheter</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container-floating-notifications`
  - **HTML:** `<div class="container-floating-notifications" style="background: url("/images/1px_Black_Opacity_75.png");">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

