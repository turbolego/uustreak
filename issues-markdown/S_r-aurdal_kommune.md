# WCAG Violations Report for Sør-aurdal kommune

**Timestamp:** 2026-11-20T06:28:37.410Z
**URL:** [https://www.sor-aurdal.kommune.no/](https://www.sor-aurdal.kommune.no/)
**Total Violations:** 5

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `img[alt="Sør-Aurdal kommune"]`
  - **HTML:** `<img alt="Sør-Aurdal kommune" role="presentation" src="/handlers/bv.ashx/i4b26ebb1-a6e5-49e8-942d-a930b24a5a9a/logo-nettside.png">`
  - **Failure summary:** Fix any of the following: ARIA role presentation is not allowed for given element


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 8

#### Affected Elements:

- **Target:** `iframe[data-load-src$="true"], .col-sm-6.col-md-4.col-lg-3:nth-child(1) > article > a > .g-pa-10 > table > tbody > tr:nth-child(4) > .g-color-primary`
  - **HTML:** `<td class="g-color-primary">Seniorsvømming</td>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.09 (foreground color: #4fa369, background color: #ffffff, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `iframe[data-load-src$="true"], .col-sm-6.col-md-4.col-lg-3:nth-child(2) > article > a > .g-pa-10 > table > tbody > tr:nth-child(4) > .g-color-primary`
  - **HTML:** `<td class="g-color-primary">Bangsmoen Husflidsutsalg.</td>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.09 (foreground color: #4fa369, background color: #ffffff, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `iframe[data-load-src$="true"], .col-sm-6.col-md-4.col-lg-3:nth-child(3) > article > a > .g-pa-10 > table > tbody > tr:nth-child(4) > .g-color-primary`
  - **HTML:** `<td class="g-color-primary">Sør-Aurdal Frivilligsentral</td>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.09 (foreground color: #4fa369, background color: #ffffff, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `iframe[data-load-src$="true"], .col-sm-6.col-md-4.col-lg-3:nth-child(4) > article > a > .g-pa-10 > table > tbody > tr:nth-child(4) > .g-color-primary`
  - **HTML:** `<td class="g-color-primary">Sør-Aurdal kommune</td>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.09 (foreground color: #4fa369, background color: #ffffff, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `iframe[data-load-src$="true"], .col-sm-6.col-md-4.col-lg-3:nth-child(5) > article > a > .g-pa-10 > table > tbody > tr:nth-child(4) > .g-color-primary`
  - **HTML:** `<td class="g-color-primary">Sør-Aurdal folkebibliotek</td>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.09 (foreground color: #4fa369, background color: #ffffff, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `iframe[data-load-src$="true"], .col-sm-6.col-md-4.col-lg-3:nth-child(6) > article > a > .g-pa-10 > table > tbody > tr:nth-child(4) > .g-color-primary`
  - **HTML:** `<td class="g-color-primary">Bangsmoen Husflidsutsalg.</td>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.09 (foreground color: #4fa369, background color: #ffffff, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `iframe[data-load-src$="true"], .col-sm-6.col-md-4.col-lg-3:nth-child(7) > article > a > .g-pa-10 > table > tbody > tr:nth-child(4) > .g-color-primary`
  - **HTML:** `<td class="g-color-primary">Bagn Idrettslag</td>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.09 (foreground color: #4fa369, background color: #ffffff, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `iframe[data-load-src$="true"], .col-sm-6.col-md-4.col-lg-3:nth-child(8) > article > a > .g-pa-10 > table > tbody > tr:nth-child(4) > .g-color-primary`
  - **HTML:** `<td class="g-color-primary">Bagn Idrettslag</td>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.09 (foreground color: #4fa369, background color: #ffffff, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Embedded code from sor-aurdal.foreningsportal.no
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[data-load-src$="true"]`
  - **HTML:** `<iframe data-load-src="true" style="width: 100%; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; overflow: hidden; height: 642px;" scrolling="no" src="https://sor-aurdal.foreningsportal.no/kalender…`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb" style="--innsyn-primary-theme-color: #003B5C; --innsyn-primary-contrast-color: #FFFFFF; --innsyn-primary-neutral-color: #E7ECEA; --innsyn-secondary-theme-color: #FBDBC2; --innsyn-secondary-contrast-color: #141423; --innsyn-…`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark

- **Target:** `iframe[data-load-src$="true"], html`
  - **HTML:** `<html lang="no" prefix="og: http://ogp.me/ns#">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 16

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_41 > h2`
  - **HTML:** `<h2 class="webPartTittel"> <span>Søk</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_41_WebpartId_41_txtSearch`
  - **HTML:** `<input name="ctl00$ctl00$ctl00$in..." type="text" id="ctl00_ctl00_ctl00_in..." class="js-liten-trigger-sea..." aria-label="Søketekst" data-handled="true" autocomplete="off" placeholder="Hva leter du etter?">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#Sone5001`
  - **HTML:** `<div id="Sone5001" class="zone Zone webPartZoneVertical">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#middle-boxes`
  - **HTML:** `<div id="middle-boxes">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_44 > h2`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktuelt</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > .webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_44_WebpartId_44_hlLinkAlle" class="MargLink" href="/nyheter/">Se alle saker</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl05_WebpartId_45 > h2`
  - **HTML:** `<h2 class="webPartTittel"> <span>Kommunale råd og møter</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event-date`
  - **HTML:** `<div class="event-date"> <div class="event-date-month">des</div> <div class="event-date-day">10</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `h3`
  - **HTML:** `<h3 class="event-title"><a href="/Kalender/CalendarEvent.aspx?Id=18040&amp;lang=1&amp;MId1=8">Kommunestyret</a></h3>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event-location`
  - **HTML:** `<span class="event-location">kommunestyresalen, Tingvoll</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calWPFooter`
  - **HTML:** `<div class="calWPFooter"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl05_WebpartId_45_WebpartId_45_webPart_lnkSearch" href="/Kalender/CalendarEvents.aspx?lang=1&amp;kategori=4&amp;dir=ComingEvents&amp;MId1=8"><span>Vis alle</span></a> </d…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl05_WebpartId_174 > h2`
  - **HTML:** `<h2 class="webPartTittel"> <span>Hva skjer i Sør-Aurdal?</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.client-content-widget > p`
  - **HTML:** `<p class="webPartBunnLink"><a href="https://sor-aurdal.foreningsportal.no/kalender" data-templateid="1" style="display: inline-block;" class="external-link external">Se hele kalenderen</a></p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[data-load-src$="true"], .row`
  - **HTML:** `<div class="row justify-content-left text-left" style="cursor: pointer;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container-floating-notifications`
  - **HTML:** `<div class="container-floating-notifications" style="background: url("/images/1px_Black_Opacity_75.png");">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

