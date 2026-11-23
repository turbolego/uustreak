# WCAG Violations Report for Selbu kommune

**Timestamp:** 2026-11-23T06:34:43.769Z
**URL:** [https://www.selbu.kommune.no/](https://www.selbu.kommune.no/)
**Total Violations:** 2

## Violation Details

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `a[data-id="2023"]`
  - **HTML:** `<a href="https://www.facebook.com/selbukommune/" data-id="2023" class="menyelement_1 external-link external"><span><span class="img"></span><span class="text">Følg oss på Facebook</span></span></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[data-id="2026"]`
  - **HTML:** `<a href="https://www.linkedin.com/company/selbu-kommune" data-id="2026" class="menyelement_2 external-link external"><span><span class="img"></span><span class="text">Følg oss på LinkedIn</span></span></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 15

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_265_WebpartId_265_txtSearch`
  - **HTML:** `<input name="ctl00$ctl00$ctl00$in..." type="text" id="ctl00_ctl00_ctl00_in..." class="js-liten-trigger-sea..." aria-label="Søketekst" placeholder="Hva kan vi hjelpe de..." style="width:610;" data-handled="true" autocomplete="off">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl02_WebpartId_266`
  - **HTML:** `<div class="webPart frontpage__service-menu-shortcuts accessible-title frontpage__service-menu--lower" id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl02_WebpartId_266">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="396"] > span > .text`
  - **HTML:** `<span class="text">Oppvekst og familie</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="400"] > span > .text`
  - **HTML:** `<span class="text">Helse, omsorg, bolig og sosiale tjenester</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="399"] > span > .text`
  - **HTML:** `<span class="text">Kultur, idrett og fritid</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.menyelement_4 > span > .text`
  - **HTML:** `<span class="text">Plan, bygg og eiendom</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.menyelement_5 > span > .text`
  - **HTML:** `<span class="text">Landbruk, miljø og næring</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.menyelement_6 > span > .text`
  - **HTML:** `<span class="text">Veg, vann, avløp og renovasjon</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_269 > h2`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktuelt i kommunen</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.articles-in-category > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_269_WebpartId_269_hlLinkAlle" class="MargLink" href="/aktuelt/">Se flere aktuelle saker</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bottom-boxes`
  - **HTML:** `<div class="bottom-boxes">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.footer-sole`
  - **HTML:** `<div class="footer-sole">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, #vfact_testaudio`
  - **HTML:** `<audio id="vfact_testaudio" controls=""> not supported</audio>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, h1`
  - **HTML:** `<h1>Her er framen</h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

