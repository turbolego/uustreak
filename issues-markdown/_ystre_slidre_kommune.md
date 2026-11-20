# WCAG Violations Report for Øystre slidre kommune

**Timestamp:** 2026-11-20T06:26:38.626Z
**URL:** [https://www.oystre-slidre.kommune.no/](https://www.oystre-slidre.kommune.no/)
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

- **Target:** `img[alt="Øystre Slidre kommune"]`
  - **HTML:** `<img src="/design/IKT_Valdres/valdres/v2017/assets/images/oystre-slidre-logo.svg" alt="Øystre Slidre kommune" role="presentation">`
  - **Failure summary:** Fix any of the following: ARIA role presentation is not allowed for given element


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `iframe[data-load-src$="true"], tr:nth-child(4) > .g-color-primary`
  - **HTML:** `<td class="g-color-primary">Øystre Slidre Frivilligsentral</td>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.09 (foreground color: #4fa369, background color: #ffffff, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `iframe[data-load-src$="true"], .col-sm-6.col-md-4.col-lg-3:nth-child(2) > article > a > .g-pa-10 > table > tbody > tr:nth-child(5) > .g-color-primary`
  - **HTML:** `<td class="g-color-primary">Treffpunkt Heggenes</td>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.09 (foreground color: #4fa369, background color: #ffffff, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `iframe[data-load-src$="true"], .col-sm-6.col-md-4.col-lg-3:nth-child(3) > article > a > .g-pa-10 > table > tbody > tr:nth-child(5) > .g-color-primary`
  - **HTML:** `<td class="g-color-primary">Øystre Slidre Folkebibliotek</td>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.09 (foreground color: #4fa369, background color: #ffffff, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `iframe[data-load-src$="true"], .col-sm-6.col-md-4.col-lg-3:nth-child(4) > article > a > .g-pa-10 > table > tbody > tr:nth-child(5) > .g-color-primary`
  - **HTML:** `<td class="g-color-primary">Frisklivssentralen i Øystre Slidre</td>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.09 (foreground color: #4fa369, background color: #ffffff, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Embedded code from oystre-slidre.foreningsportal.no
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[data-load-src$="true"]`
  - **HTML:** `<iframe data-load-src="true" style="width: 100%; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; overflow: hidden; height: 321px;" scrolling="no" src="https://oystre-slidre.foreningsportal.no/kalen…`
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
  - **HTML:** `<html lang="nn" style="--bc-primary-color-5...">`
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
- **Count:** 19

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_41 > h2`
  - **HTML:** `<h2 class="webPartTittel"> <span>Søk</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_41_WebpartId_41_txtSearch`
  - **HTML:** `<input name="ctl00$ctl00$ctl00$in..." type="text" id="ctl00_ctl00_ctl00_in..." class="js-liten-trigger-sea..." aria-label="Søketekst" data-handled="true" autocomplete="off" placeholder="Kva leiter du etter?">`
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
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_44_WebpartId_44_hlLinkAlle" class="MargLink" href="/nyheter/">Sjå alle saker</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl05_WebpartId_45 > h2`
  - **HTML:** `<h2 class="webPartTittel"> <span>Politisk møtekalender</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event:nth-child(1) > .event-date`
  - **HTML:** `<div class="event-date"> <div class="event-date-month">nov</div> <div class="event-date-day">26</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event:nth-child(1) > .event-text > h3`
  - **HTML:** `<h3 class="event-title"><a href="/Kalender/CalendarEvent.aspx?Id=15748&amp;lang=11&amp;MId1=8">Formannskapet</a></h3>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event:nth-child(1) > .event-text > .event-location`
  - **HTML:** `<span class="event-location">Tingvang</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event:nth-child(2) > .event-date`
  - **HTML:** `<div class="event-date"> <div class="event-date-month">des</div> <div class="event-date-day">09</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event:nth-child(2) > .event-text > h3`
  - **HTML:** `<h3 class="event-title"><a href="/Kalender/CalendarEvent.aspx?Id=15747&amp;lang=11&amp;MId1=8">Eldreråd</a></h3>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event:nth-child(2) > .event-text > .event-location`
  - **HTML:** `<span class="event-location">Ukjent</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calWPFooter`
  - **HTML:** `<div class="calWPFooter"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl05_WebpartId_45_WebpartId_45_webPart_lnkSearch" href="/Kalender/CalendarEvents.aspx?lang=11&amp;kategori=1&amp;dir=ComingEvents&amp;MId1=8"><span>Vis alle</span></a> </…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl05_WebpartId_233 > h2`
  - **HTML:** `<h2 class="webPartTittel"> <span>Foreningsportalen</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.client-content-widget > .webPartBunnLink`
  - **HTML:** `<p class="webPartBunnLink"><a href="https://oystre-slidre.foreningsportal.no/kalender" data-templateid="1" style="display: inline-block;" class="external-link external">Trykk her for å sjå heile kalenderen</a></p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[data-load-src$="true"], .row`
  - **HTML:** `<div class="row justify-content-left text-left" style="cursor: pointer;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container-floating-notifications`
  - **HTML:** `<div class="container-floating-notifications" style="background: url("/images/1px_Black_Opacity_75.png");">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

