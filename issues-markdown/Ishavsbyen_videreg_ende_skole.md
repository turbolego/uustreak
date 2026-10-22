# WCAG Violations Report for Ishavsbyen videregående skole

**Timestamp:** 2026-10-22T03:48:31.170Z
**URL:** [https://ishavsbyen.vgs.no/](https://ishavsbyen.vgs.no/)
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

- **Target:** `a[href$="mot.no/"]`
  - **HTML:** `<a class="InnholdLinkTekst link-webpage external-link external" href="https://www.mot.no/">MOT</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.38 (foreground color: #00a064, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 10

#### Affected Elements:

- **Target:** `.visually-hidden`
  - **HTML:** `<h1 class="visually-hidden"> Ishavsbyen videregående skole </h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#Sone2501`
  - **HTML:** `<div id="Sone2501" class="zone Zone webPartZoneVertical">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ucSearchField_txtSearch`
  - **HTML:** `<input name="ctl00$ctl00$ctl00$innhold$MidtSone$ucSearchField$txtSearch" type="text" id="ctl00_ctl00_ctl00_innhold_MidtSone_ucSearchField_txtSearch" class="js-liten-trigger-search" aria-label="Søketekst" placeholder="Hva leter du etter? Sø…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#Sone2502`
  - **HTML:** `<div id="Sone2502" class="zone Zone webPartZoneVertical">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_plhZoneContainer5000`
  - **HTML:** `<div id="ctl00_ctl00_ctl00_innhold_MidtSone_plhZoneContainer5000" class="zone-container wrapper-outer zone-container--white zone-container--service-menu">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl08_WebpartId_1548 > .webPartTittel`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktuelt</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl08_WebpartId_1548_WebpartId_1548_rptItems_ctl01_ucDisplayControl_hlLinkAlle" class="MargLink" href="/aktuelt/">Se alle aktuelle saker</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_plhZoneContainer5500`
  - **HTML:** `<div id="ctl00_ctl00_ctl00_innhold_MidtSone_plhZoneContainer5500" class="zone-container wrapper-outer zone-container--white">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.back-to-top-button-wrapper`
  - **HTML:** `<div class="back-to-top-button-wrapper"> <a class="back-to-top-button js-back-to-top-button" href="#header"> <span>Til toppen</span> </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

