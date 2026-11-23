# WCAG Violations Report for Farsund kirkelige fellesråd

**Timestamp:** 2026-11-23T06:13:54.877Z
**URL:** [https://farsund.kirken.no/](https://farsund.kirken.no/)
**Total Violations:** 3

## Violation Details

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb-NO" dir="ltr" class="wf-opensans-n8-active wf-opensans-n6-active wf-opensans-n3-active wf-opensans-n7-active wf-opensans-n4-active wf-opensans-i8-active wf-opensans-i3-active wf-opensans-i7-active wf-opensans-i6-active wf-op…`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `#top-search-trigger`
  - **HTML:** `<a id="top-search-trigger" href="#" class="toggle-item"> <i class="fa fa-search"></i> <i class="fa fa-close"></i> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#dnn_ctr380_DNNArticle_List_MyArticleList_panelArticle > .article-even > .image-container-even > a`
  - **HTML:** `<a href="/Portals/0/Dokumenter/Vedtekter for gravplassene i Farsund kommune.pdf"> <img class="article-image-even" style="width:100%;margin-bottom:30px;padding-top:0px;" src="/desktopmodules/dnnarticle/images/noimage.gif" alt=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.image-container-odd > a[href$="listamenighet.no/"]`
  - **HTML:** `<a href="https://www.listamenighet.no/"> <img class="article-image-odd" style="width:100%;margin-bottom:30px;padding-top:0px;" src="/Portals/0/lista.jpeg" alt=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.image-container-even > a[href$="kirketorget.no/"]`
  - **HTML:** `<a href="https://kirketorget.no/"> <img class="article-image-even" style="width:100%;margin-bottom:30px;padding-top:0px;" src="/Portals/0/Bilder/E41824E7C4DFF87A2991038CA8BF3F49.jpg" alt=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 40

#### Affected Elements:

- **Target:** `#cookieConsentContainer`
  - **HTML:** `<div id="cookieConsentContainer" class="cookieConsentContainer" style="display: flex;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#top-menu`
  - **HTML:** `<div id="top-menu"> <div class="menu-item"><a href="#section2">Menighetene</a></div> <div class="menu-item"><a href="#section4">Kalender</a></div> <div class="menu-item"><a href="/kontakt">Kontakt</a></div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#dnn_ctr380_DNNArticle_List_MyArticleList_panelArticle`
  - **HTML:** `<div id="dnn_ctr380_DNNArticle_List_MyArticleList_panelArticle">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.article-odd`
  - **HTML:** `<div class="article-odd">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#dnn_ctr380_ContentPane > .article-even`
  - **HTML:** `<div class="article-even">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.hele-kalender`
  - **HTML:** `<div class="hele-kalender"> <a href="/Kalender">Se hele kalenderen</a></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(2) > .calendar-data-front`
  - **HTML:** `<div class="calendar-data-front"> <div class="calendar-day-front">Søndag</div> <div class="calendar-date-front">29.11</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(1) > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.11.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=aaba4b80-3f03-4346-9ffe-f6efd1fd60c8&amp;OccurenceId=aaba4b80-3f03-4346-9ffe-f6efd1fd60c8">Gudstjeneste</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Frelserens kirke</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(2) > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.11.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=cfbc42ed-4e4b-449a-9ff7-d975cc2ce809&amp;OccurenceId=cfbc42ed-4e4b-449a-9ff7-d975cc2ce809">Gudstjeneste</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Vanse kirke</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(3) > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.17.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(3) > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=4b28f209-d1ad-46ab-b55d-c8021b05beb4&amp;OccurenceId=4b28f209-d1ad-46ab-b55d-c8021b05beb4">Syng julen inn gudstjene</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(3) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Herad kirke</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-data-front`
  - **HTML:** `<div class="calendar-data-front"> <div class="calendar-day-front">Søndag</div> <div class="calendar-date-front">06.12</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(1) > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.11.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=fa211888-844a-4f32-b665-36b8009c1b56&amp;OccurenceId=fa211888-844a-4f32-b665-36b8009c1b56">Gudstjeneste</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Frelserens kirke</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(2) > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.11.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=164e05d5-3809-49d2-b39a-8ba0623c2372&amp;OccurenceId=164e05d5-3809-49d2-b39a-8ba0623c2372">Gudstjeneste</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Vanse kirke</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(3) > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.17.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(3) > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=6ba92d1a-0572-45f0-863c-8cc40647e843&amp;OccurenceId=6ba92d1a-0572-45f0-863c-8cc40647e843">Gudstjeneste</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(3) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Spind kirke</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-data-front`
  - **HTML:** `<div class="calendar-data-front"> <div class="calendar-day-front">Søndag</div> <div class="calendar-date-front">13.12</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(1) > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.16.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=d2fc4ebb-d220-46ef-9f62-8ddddf8fa1a1&amp;OccurenceId=d2fc4ebb-d220-46ef-9f62-8ddddf8fa1a1">Syng julen inn gudstjene</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Frelserens kirke</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(2) > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.16.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=c90a1b56-534a-4e1a-b8ce-09a21b7baebf&amp;OccurenceId=c90a1b56-534a-4e1a-b8ce-09a21b7baebf">Syng Julen Inn gudstjeneste</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Vestbygda kapell</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(5) > .calendar-data-front`
  - **HTML:** `<div class="calendar-data-front"> <div class="calendar-day-front">Søndag</div> <div class="calendar-date-front">20.12</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front:nth-child(1) > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.11.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=641f5bc0-834b-4dfb-8575-3e41dbaceed1&amp;OccurenceId=641f5bc0-834b-4dfb-8575-3e41dbaceed1">Gudstjeneste</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Listaheimen,Vanse kirke</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front:nth-child(2) > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.11.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=ed8c3d62-85b8-4ac7-9c60-cded0e4cb58d&amp;OccurenceId=ed8c3d62-85b8-4ac7-9c60-cded0e4cb58d">Gudstjeneste</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Omsorgsenteret Farsund</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

