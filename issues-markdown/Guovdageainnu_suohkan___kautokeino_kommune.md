# WCAG Violations Report for Guovdageainnu suohkan – kautokeino kommune

**Timestamp:** 2026-11-22T06:09:22.445Z
**URL:** [https://www.guovdageainnu.suohkan.no/](https://www.guovdageainnu.suohkan.no/)
**Total Violations:** 5

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.customLogo > img[alt="Guovdageainnu suohkan"]`
  - **HTML:** `<img alt="Guovdageainnu suohkan" src="/handlers/bv.ashx/i21275d88-6a73-4265-aada-3dc2b5780be3/guovdageainnu_suohkanlogo2.svg">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="se" style="height: 100%;">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark

- **Target:** `#vFact_audioFrame, html`
  - **HTML:** `<html lang="da">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_ctl03_WebpartId_42 > .webPartInnhold > .vListe > .js-contrast.icon-contrast.toplevel > a[data-id="13"][href="javascript:void(0);"]`
  - **HTML:** `<a href="javascript:void(0);" data-id="13" class=""><span>Endre kontrast</span></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#ctl00_ctl00_ctl00_innhold_ctl03_WebpartId_42 > .webPartInnhold > .vListe > .js-google-translate.icon-translate.toplevel > a[data-id="14"][href="#"]`
  - **HTML:** `<a href="#" data-id="14" class=""><span>Endre språk</span></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#ctl00_ctl00_ctl00_innhold_ctl03_WebpartId_42 > .webPartInnhold > .vListe > .js-enlarge-text.icon-textsize.toplevel > a[data-id="15"][href="javascript:void(0);"]`
  - **HTML:** `<a href="javascript:void(0);" data-id="15" class=""><span>Endre skriftstørrelse</span></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 11

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_ctl10_WebpartId_46_WebpartId_46_txtSearch`
  - **HTML:** `<input name="ctl00$ctl00$ctl00$innhold$ctl10$WebpartId_46$WebpartId_46$txtSearch" type="text" id="ctl00_ctl00_ctl00_innhold_ctl10_WebpartId_46_WebpartId_46_txtSearch" class="js-liten-trigger-search" aria-label="Ohcanteaksta" data-handled="…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_ctl10_WebpartId_45`
  - **HTML:** `<div class="webPart frontpage__service-menu" id="ctl00_ctl00_ctl00_innhold_ctl10_WebpartId_45">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.alert-box`
  - **HTML:** `<div class="alert-box">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_52 > h2`
  - **HTML:** `<h2 class="webPartTittel"> <span>Áigeguovdil</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_52_WebpartId_52_hlLinkAlle" class="MargLink" href="/aigeguovdil/">Geahča buot áigeguovdilvuođaid</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#Sone7001`
  - **HTML:** `<div id="Sone7001" class="zone Zone webPartZoneVertical">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container-floating-notifications`
  - **HTML:** `<div class="container-floating-notifications" style="background: url("/images/1px_Black_Opacity_75.png");">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, #vfact_testaudio`
  - **HTML:** `<audio id="vfact_testaudio" controls=""> not supported</audio>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, #vfact_bkaudio`
  - **HTML:** `<audio id="vfact_bkaudio" controls=""> not supported</audio>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, h1`
  - **HTML:** `<h1>Her er framen</h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### lang attribute must have a valid value

- **Impact:** serious
- **Description:** Ensure lang attributes have valid values
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/valid-lang?application=playwright
- **Tags:** cat.language, wcag2aa, wcag312, TTv5, TT11.b, EN-301-549, EN-9.3.1.2, ACT, RGAAv4, RGAA-8.8.1
- **Count:** 3

#### Affected Elements:

- **Target:** `em:nth-child(6) > span[lang="I-SAMI-NO"][dir="ltr"]`
  - **HTML:** `<span lang="I-SAMI-NO" dir="ltr">Riŋgenáigi:</span>`
  - **Failure summary:** Fix all of the following: Value of lang attribute not included in the list of valid languages

- **Target:** `p:nth-child(1) > span[lang="I-SAMI-NO"][dir="ltr"]`
  - **HTML:** `<span lang="I-SAMI-NO" dir="ltr">Mán-Gask-Bear. 09:00-11:00</span>`
  - **Failure summary:** Fix all of the following: Value of lang attribute not included in the list of valid languages

- **Target:** `.broken > span[lang="I-SAMI-NO"][dir="ltr"]`
  - **HTML:** `<span lang="I-SAMI-NO" dir="ltr">Persovdnasuodjalusjulggaštus</span>`
  - **Failure summary:** Fix all of the following: Value of lang attribute not included in the list of valid languages

