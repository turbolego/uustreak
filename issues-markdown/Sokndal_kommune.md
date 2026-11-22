# WCAG Violations Report for Sokndal kommune

**Timestamp:** 2026-11-22T05:58:59.786Z
**URL:** [https://www.sokndal.kommune.no/](https://www.sokndal.kommune.no/)
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

- **Target:** `.default-logo--desktop > .logo[alt="Sokndal kommune"]`
  - **HTML:** `<img class="logo" src="/Design/sokndal_kommune/sokndal/v2019/assets/images/logo-sokndal.png" alt="Sokndal kommune">`
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
  - **HTML:** `<html lang="nb" style="--innsyn-primary-theme-color: #0F4568; --innsyn-primary-contrast-color: #FFFFFF; --innsyn-primary-neutral-color: #e2e3e5; --innsyn-secondary-theme-color: #9fbed3; --innsyn-secondary-contrast-color: #141423; --innsyn-…`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `a[href=""]`
  - **HTML:** `<a class="InnholdLinkTekst " href="" data-id="7044"><img class="image_resized" style="width:150px;" src="/handlers/bv.ashx/ib5f46204-506b-49fd-8c3a-1a2f4071d57b/w150/q755/k377d323cc92e/group-97.png" alt="" data-width="custom"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[data-id="10471"]`
  - **HTML:** `<a class="InnholdLinkTekst link-webpage " href="https://magmageopark.no/no/destinasjoner/sokndal/" data-id="10471">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[data-id="69"]`
  - **HTML:** `<a href="https://www.facebook.com/DetGodeLivISokndal/" data-id="69" class="external-link external"><span>Facebook</span></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[data-id="7721"]`
  - **HTML:** `<a href="https://www.instagram.com/sokndalkommune/" data-id="7721" class="external-link external"><span>Instagram</span></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.back-to-top-button`
  - **HTML:** `<a class="back-to-top-button js-back-to-top-button" href="#header"> <span>Til toppen</span> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 14

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_44_WebpartId_44_txtSearch`
  - **HTML:** `<input name="ctl00$ctl00$ctl00$in..." type="text" id="ctl00_ctl00_ctl00_in..." class="js-liten-trigger-sea..." aria-label="Søketekst" placeholder="Hva kan vi hjelpe de..." data-handled="true">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.top-boxes`
  - **HTML:** `<div class="top-boxes">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_74 > h2`
  - **HTML:** `<h2 class="webPartTittel"> <span>Hva skjer i Sokndal?</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event:nth-child(1) > .event-date`
  - **HTML:** `<div class="event-date"> <div class="event-date-day">23</div> <div class="event-date-month">nov</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event:nth-child(1) > .event-text > a`
  - **HTML:** `<a href="/Kalender/CalendarEvent.aspx?Id=2408&amp;lang=1&amp;MId1=7"><h3 class="event-title">Babybading </h3></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event:nth-child(2) > .event-date`
  - **HTML:** `<div class="event-date"> <div class="event-date-day">24</div> <div class="event-date-month">nov</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event:nth-child(2) > .event-text > a`
  - **HTML:** `<a href="/Kalender/CalendarEvent.aspx?Id=2249&amp;lang=1&amp;MId1=7"><h3 class="event-title">Formiddagstreff</h3></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event:nth-child(3) > .event-date`
  - **HTML:** `<div class="event-date"> <div class="event-date-day">24</div> <div class="event-date-month">nov</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event:nth-child(3) > .event-text > a`
  - **HTML:** `<a href="/Kalender/CalendarEvent.aspx?Id=2474&amp;lang=1&amp;MId1=7"><h3 class="event-title">Barnekafé </h3></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_82`
  - **HTML:** `<div class="webPart calendar-buttons" id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_82">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl08_WebpartId_103 > h2`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktuelt</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > .webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl08_WebpartId_103_WebpartId_103_hlLinkAlle" class="MargLink" href="/aktuelt/">Se aktuelle saker</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container-floating-notifications`
  - **HTML:** `<div class="container-floating-notifications" style="background: url("/images/1px_Black_Opacity_75.png");">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

