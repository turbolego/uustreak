# WCAG Violations Report for Lørenskog kommune

**Timestamp:** 2026-10-08T10:18:29.291Z
**URL:** [https://www.lorenskog.kommune.no/](https://www.lorenskog.kommune.no/)
**Total Violations:** 3

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.search-box-toggle`
  - **HTML:** `<button type="button" class="search-box-toggle"> <span> Søk </span> </button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `.main-menu-toggle`
  - **HTML:** `<button type="button" class="main-menu-toggle" aria-expanded="false"> <span class="vis-meny"> Meny </span> </button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl06_WebpartId_1699_WebpartId_1699_rptItems_ctl01_ucDisplayControl_lnkSearch > span`
  - **HTML:** `<span>Vis alle</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.05 (foreground color: #ffffff, background color: #138e7a, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl08_WebpartId_1614_WebpartId_1614_rptItems_ctl01_ucDisplayControl_hlLinkAlle`
  - **HTML:** `<a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl08_WebpartId_1614_WebpartId_1614_rptItems_ctl01_ucDisplayControl_hlLinkAlle" class="MargLink" href="/aktuelt/">Se alle saker </a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.41 (foreground color: #ffffff, background color: #259b8c, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.bc-content-button--secondary.button-module__status--secondary_9343_6XEH4.bc-content-button--appearance-default:nth-child(1) > span`
  - **HTML:** `<span>Kun nødvendige</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.41 (foreground color: #259b8c, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.bc-content-button--secondary.button-module__status--secondary_9343_6XEH4.bc-content-button--appearance-default:nth-child(2) > span`
  - **HTML:** `<span>Godta alle</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.41 (foreground color: #259b8c, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 13

#### Affected Elements:

- **Target:** `#aspnetForm > h1`
  - **HTML:** `<h1 class="visually-hidden"> Lørenskog kommune </h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_1604 > .webPartTittel`
  - **HTML:** `<h2 class="webPartTittel"> <span>Hei, hva kan vi hjelpe deg med?</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_1604_WebpartId_1604_txtSearch`
  - **HTML:** `<input name="ctl00$ctl00$ctl00$in..." type="text" id="ctl00_ctl00_ctl00_in..." class="js-liten-trigger-sea..." aria-label="Søketekst" placeholder="F.eks barnehage elle..." data-handled="true">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_1605`
  - **HTML:** `<div class="webPart wp-search-box-links" id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_1605">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_1856`
  - **HTML:** `<div class="webPart wp-global-area-message" id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_1856">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.section:nth-child(12)`
  - **HTML:** `<div class="section">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.section:nth-child(13)`
  - **HTML:** `<div class="section">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.section:nth-child(15)`
  - **HTML:** `<div class="section">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl08_WebpartId_1614 > .webPartTittel`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktuelt</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl08_WebpartId_1614_WebpartId_1614_rptItems_ctl01_ucDisplayControl_hlLinkAlle" class="MargLink" href="/aktuelt/">Se alle saker </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, #vfact_testaudio`
  - **HTML:** `<audio id="vfact_testaudio" controls=""> not supported</audio>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, h1`
  - **HTML:** `<h1>Her er framen</h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

