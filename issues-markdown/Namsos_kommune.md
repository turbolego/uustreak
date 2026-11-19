# WCAG Violations Report for Namsos kommune

**Timestamp:** 2026-11-19T06:50:39.831Z
**URL:** [https://namsos.kommune.no/](https://namsos.kommune.no/)
**Total Violations:** 3

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `img[alt="Namsos kommune"]`
  - **HTML:** `<img alt="Namsos kommune" src="/handlers/bv.ashx/ie173daef-47b9-4018-94eb-9a9a28575381/group-533.svg">`
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
  - **HTML:** `<html lang="nb" style="height: 100%;">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark

- **Target:** `#vFact_audioFrame, html`
  - **HTML:** `<html>`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 23

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_51_WebpartId_51_txtSearch`
  - **HTML:** `<input name="ctl00$ctl00$ctl00$in..." type="text" id="ctl00_ctl00_ctl00_in..." class="js-liten-trigger-sea..." aria-label="Søketekst" placeholder="Hva kan vi hjelpe de..." data-handled="true" autocomplete="off">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_52`
  - **HTML:** `<div class="webPart frontpage__service-menu-shortcuts accessible-title frontpage__service-menu--lower" id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_52">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="35"] > span > .text`
  - **HTML:** `<span class="text">Barnehage, skole, student</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="36"] > span > .text`
  - **HTML:** `<span class="text">Helse, omsorg og folkehelse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="12397"] > span > .text`
  - **HTML:** `<span class="text">Sosiale tjenester og bolig</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="37"] > span > .text`
  - **HTML:** `<span class="text">Plan, bygg, brann og eiendom</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="38"] > span > .text`
  - **HTML:** `<span class="text">Kultur, idrett og fritid</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="39"] > span > .text`
  - **HTML:** `<span class="text">Renovasjon og miljø</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="40"] > span > .text`
  - **HTML:** `<span class="text">Vei, parkering og havn</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="41"] > span > .text`
  - **HTML:** `<span class="text">Næring og landbruk</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-id="43"] > span > .text`
  - **HTML:** `<span class="text">Økonomi</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_1562`
  - **HTML:** `<div class="webPart egendef" id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_1562">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.middle-boxes--upper`
  - **HTML:** `<div class="middle-boxes middle-boxes--upper">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_56 > .webPartTittel`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktuelt fra kommunen</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `li:nth-child(1) > .kortMnd`
  - **HTML:** `<div class="kortMnd"> <span class="datoKortDag">18</span><span class="datoKortMnd">nov</span> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_56_WebpartId_56_rptArtikler_ctl01_hlLink`
  - **HTML:** `<a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_56_WebpartId_56_rptArtikler_ctl01_hlLink" class="MargLink" href="/aktuelt/novemberstatus-for-nytt-helsehus-i-namsos-sentrum.39350.aspx">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `li:nth-child(2) > .kortMnd`
  - **HTML:** `<div class="kortMnd"> <span class="datoKortDag">17</span><span class="datoKortMnd">nov</span> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_56_WebpartId_56_rptArtikler_ctl02_hlLink`
  - **HTML:** `<a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_56_WebpartId_56_rptArtikler_ctl02_hlLink" class="MargLink" href="/aktuelt/gratis-kurs-for-skogeiere.39336.aspx"> <span class="tittel">Gratis kurs for skogeiere</span> </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `li:nth-child(3) > .kortMnd`
  - **HTML:** `<div class="kortMnd"> <span class="datoKortDag">04</span><span class="datoKortMnd">nov</span> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_56_WebpartId_56_rptArtikler_ctl03_hlLink`
  - **HTML:** `<a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_56_WebpartId_56_rptArtikler_ctl03_hlLink" class="MargLink" href="/aktuelt/novembernytt-for-lag-og-foreninger.39300.aspx"> <span class="tittel">Novembernytt for lag og foreninger</sp…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_56_WebpartId_56_hlLinkAlle" class="MargLink" href="/aktuelt/">Se flere aktuelle saker</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, #vfact_testaudio`
  - **HTML:** `<audio id="vfact_testaudio" controls=""> not supported</audio>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, h1`
  - **HTML:** `<h1>Her er framen</h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

