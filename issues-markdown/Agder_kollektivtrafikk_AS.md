# WCAG Violations Report for Agder kollektivtrafikk AS

**Timestamp:** 2026-11-19T06:30:04.741Z
**URL:** [https://www.akt.no/](https://www.akt.no/)
**Total Violations:** 4

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `img[alt="Agder kollektivtrafikk"]`
  - **HTML:** `<img alt="Agder kollektivtrafikk" src="/handlers/bv.ashx/i092103da-fc10-458e-9a21-12c5b60ff5ea/akt_logo_horisontal_web.svg">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `a[data-id="2374"]`
  - **HTML:** `<a href="https://www.facebook.com/agderkollektivtrafikk/" data-id="2374" class="external-link external"><span><span class="img"></span><span class="text">Facebook</span></span></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[data-id="2376"]`
  - **HTML:** `<a href="https://www.instagram.com/agderkollektivtrafikk/" data-id="2376" class="external-link external"><span><span class="img"></span><span class="text">Instagram</span></span></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[data-id="9080"]`
  - **HTML:** `<a href="https://no.linkedin.com/company/agder-kollektivtrafikk" data-id="9080" class="external-link external"><span><span class="img"></span><span class="text">Linkedin</span></span></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.navigation`
  - **HTML:** `<ul class="navigation">`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: div


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 25

#### Affected Elements:

- **Target:** `.visually-hidden`
  - **HTML:** `<h1 class="visually-hidden">Agder kollektivtrafikk</h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.travel-planner-form-group--from-to`
  - **HTML:** `<div class="travel-planner-form-group travel-planner-form-group--from-to">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.travel-planner-form-group--date-time-direction`
  - **HTML:** `<div class="travel-planner-form-group travel-planner-form-group--date-time-direction">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="15916"] > span > .text`
  - **HTML:** `<span class="text">Rutetabeller</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="15916"] > span > .description`
  - **HTML:** `<span class="description">Rutetabellene er inndelt geografisk og gir en fullstendig oversikt over kollektivtilbudet på Agder.</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="33"] > span > .text`
  - **HTML:** `<span class="text">AKT reiseplanlegger og mobil-app</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="33"] > span > .description`
  - **HTML:** `<span class="description">Med vår reiseplanlegger finner du enkelt reiseruter og rutetider i hele Agder</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="30"] > span > .text`
  - **HTML:** `<span class="text">Priser</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="30"] > span > .description`
  - **HTML:** `<span class="description">Hva koster våre enkeltbilletter, periodebilletter og Flexibillett?</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="22395"] > span > .text`
  - **HTML:** `<span class="text">TT-kort og tilrettelagt transport</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="22395"] > span > .description`
  - **HTML:** `<span class="description">Info om TT-kort og tilrettelagt transport på Agder</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="10833"] > span > .text`
  - **HTML:** `<span class="text">AKT Svipp</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="10833"] > span > .description`
  - **HTML:** `<span class="description">Bestill din reise i samkjøringstjenesten AKT Svipp</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="10830"] > span > .text`
  - **HTML:** `<span class="text">AKT Billett</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="10830"] > span > .description`
  - **HTML:** `<span class="description">Kjøp dine billetter i AKT Billett-appen</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="32"] > span > .text`
  - **HTML:** `<span class="text">Hittegods</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="32"] > span > .description`
  - **HTML:** `<span class="description">Mistet noe på bussen? Her finner du informasjon om hittegods</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="10834"] > span > .text`
  - **HTML:** `<span class="text">Skoleskyss</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="10834"] > span > .description`
  - **HTML:** `<span class="description">Informasjon og retningslinjer for skoleskyss i Agder</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="22394"] > span > .text`
  - **HTML:** `<span class="text">Innfartsparkering</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="22394"] > span > .description`
  - **HTML:** `<span class="description">På innfartsparkeringer kan du sette fra deg bilen og ta bussen videre</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_plhZoneContainer2200`
  - **HTML:** `<div id="ctl00_ctl00_ctl00_innhold_MidtSone_plhZoneContainer2200" class="zone-container wrapper-outer">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_45 > h2`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktuelt</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_45_WebpartId_45_rptItems_ctl01_ucDisplayControl_hlLinkAlle" class="MargLink" href="/aktuelt/">Se alle aktueltsaker</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

