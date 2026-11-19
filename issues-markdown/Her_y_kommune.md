# WCAG Violations Report for Herøy kommune

**Timestamp:** 2026-11-19T06:43:49.276Z
**URL:** [https://www.heroy.kommune.no/](https://www.heroy.kommune.no/)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_410_WebpartId_410_rptArtikler_ctl01_hlLink > .datoPublisert`
  - **HTML:** `<span class="datoPublisert">16.11.2026</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.86 (foreground color: #777777, background color: #edeef2, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_410_WebpartId_410_rptArtikler_ctl03_hlLink > .datoPublisert`
  - **HTML:** `<span class="datoPublisert">16.11.2026</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.86 (foreground color: #777777, background color: #edeef2, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_ctl08_WebpartId_404 > .webPartTittel`
  - **HTML:** `<h2 class="webPartTittel"> <span></span> </h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `img[alt="Herøy kommune"]`
  - **HTML:** `<img alt="Herøy kommune" src="/handlers/bv.ashx/i53d72479-eb20-490c-91e5-c5419baca0b5/84be8kommunevaepen_primarversjon_cmyk.png">`
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
- **Count:** 7

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_ctl08_WebpartId_404_WebpartId_404_txtSearch`
  - **HTML:** `<input name="ctl00$ctl00$ctl00$innhold$ctl08$WebpartId_404$WebpartId_404$txtSearch" type="text" id="ctl00_ctl00_ctl00_innhold_ctl08_WebpartId_404_WebpartId_404_txtSearch" class="js-liten-trigger-search" aria-label="Søketekst" placeholder="…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_ctl08_WebpartId_405`
  - **HTML:** `<div class="webPart frontpage__shortcut-menu" id="ctl00_ctl00_ctl00_innhold_ctl08_WebpartId_405">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_407 > .webPartInnhold > .container.articles-in-category > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#Sone5001`
  - **HTML:** `<div id="Sone5001" class="zone Zone webPartZoneVertical">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_410 > .webPartTittel`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktuelt</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_410 > .webPartInnhold > .container.articles-in-category > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_410_WebpartId_410_hlLinkAlle" class="MargLink" href="/aktuelt/">Sjå fleire saker</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

