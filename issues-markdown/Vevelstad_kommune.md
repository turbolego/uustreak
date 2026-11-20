# WCAG Violations Report for Vevelstad kommune

**Timestamp:** 2026-11-20T06:39:17.899Z
**URL:** [https://www.vevelstad.kommune.no/](https://www.vevelstad.kommune.no/)
**Total Violations:** 4

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `h4`
  - **HTML:** `<h4 class="artikkelTittel">`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.logo`
  - **HTML:** `<img class="logo" src="/design/Sor_Helgeland_Regionrad/bronnoy/v2017/assets/images/vevelstad-logo.svg" alt="Vevelstad kommune">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `a[data-id="2364"]`
  - **HTML:** `<a href="https://www.vevelstad.kommune.no/tjenester/kultur-idrett-og-fritid/lomsdal-visten-nasjonalpark-njaarken-vaarjelimmiedajve/" data-id="2364" class="">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[data-id="2366"]`
  - **HTML:** `<a href="http://www.trollfjellgeopark.no/index.php/no/geoparken" target="_blank" data-id="2366" class="external-link external"><span><span class="img"></span><span class="text">Trollfjell Geopark</span></span></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.event:nth-child(1) > .event-image-container > a`
  - **HTML:** `<a href="/Kalender/CalendarEvent.aspx?Id=385&amp;lang=1&amp;MId1=35"><div class="event-image" style="background-image: url(&quot;handlers/bv.ashx/ifdd350af-f986-4026-a94f-ed4c68f00b07/w640/keb9ac88be97f/2026-10-28-kulturminnefondet-apent-m…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.event:nth-child(2) > .event-image-container > a`
  - **HTML:** `<a href="/Kalender/CalendarEvent.aspx?Id=384&amp;lang=1&amp;MId1=35"><div class="event-image" style="background-image: url(&quot;handlers/bv.ashx/i98bbfbf4-fef5-4ad5-923f-cb92ba9ded86/w640/kdb084637e1a5/dsc_0644.jpg&quot;);"></div></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 7

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_48_WebpartId_48_txtSearch`
  - **HTML:** `<input name="ctl00$ctl00$ctl00$in..." type="text" id="ctl00_ctl00_ctl00_in..." class="js-liten-trigger-sea..." aria-label="Søketekst" data-handled="true" placeholder="Hva kan vi hjelpe de...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#Sone5001`
  - **HTML:** `<div id="Sone5001" class="zone Zone webPartZoneVertical">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#Sone6000`
  - **HTML:** `<div id="Sone6000" class="zone Zone webPartZoneVertical">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_49 > h2`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktuelt</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_49_WebpartId_49_hlLinkAlle" class="MargLink" href="/aktuelt/">Se alle aktualiteter</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#Sone7001`
  - **HTML:** `<div id="Sone7001" class="zone Zone webPartZoneVertical">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

