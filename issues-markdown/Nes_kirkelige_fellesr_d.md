# WCAG Violations Report for Nes kirkelige fellesråd

**Timestamp:** 2026-11-19T06:50:35.461Z
**URL:** [https://kirkenines.no/](https://kirkenines.no/)
**Total Violations:** 4

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
  - **HTML:** `<html lang="nb-NO" dir="ltr" class="wf-opensans-n4-active wf-opensans-n6-active wf-opensans-n7-active wf-opensans-n3-active wf-opensans-n8-active wf-opensans-i4-active wf-opensans-i3-active wf-opensans-i8-active wf-opensans-i6-active wf-op…`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1, RGAAv4, RGAA-10.6.1
- **Count:** 2

#### Affected Elements:

- **Target:** `a[target="_blank"]:nth-child(4)`
  - **HTML:** `<a href="https://www.kirken.no/nb-NO/om-kirken/kontakt-oss/personvern/" target="_blank"> : Personvern</a>`
  - **Failure summary:** Fix any of the following: The link has insufficient color contrast of 1.66:1 with the surrounding text. (Minimum contrast is 3:1, link text: #333333, surrounding text: #000000) The link has no styling (such as underline) to distinguish it …

- **Target:** `a[href$="Tilgjengelighet"]`
  - **HTML:** `<a href="/Tilgjengelighet" target="_blank"> : Tilgjengelighetserklæring </a>`
  - **Failure summary:** Fix any of the following: The link has insufficient color contrast of 1.66:1 with the surrounding text. (Minimum contrast is 3:1, link text: #333333, surrounding text: #000000) The link has no styling (such as underline) to distinguish it …


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 8

#### Affected Elements:

- **Target:** `#top-search-trigger`
  - **HTML:** `<a id="top-search-trigger" href="#" class="toggle-item"> <i class="fa fa-search"></i> <i class="fa fa-close"></i> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#dnn_ctr380_ModuleContent > .article-odd > .image-container-odd > a`
  - **HTML:** `<a href="https://kirkenines.no/Om-oss/Artikler/Artikkeldetaljer/ArticleId/5469/Lys-vaken-en-natt-i-kirken"> <img class="article-image-odd" style="width:100%;margin-bottom:30px;padding-top:0px;" src="/Portals/0/LysVåken–FotoHansJakobHeimvol…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.news-item.col-sm-3:nth-child(1) > a:nth-child(1)`
  - **HTML:** `<a href="https://kirkenines.no/Om-oss/Artikler/Artikkeldetaljer/ArticleId/11581/Nesposten-nytt-nummer-i-postkassa"> <img class="news-image" style="width:100%;margin-bottom:30px;padding-top:0px;min-height:200px;" src="/Portals/0/4d40bbec-7a…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.news-item.col-sm-3:nth-child(2) > a:nth-child(1)`
  - **HTML:** `<a href="https://kirkenines.no/Om-oss/Artikler/Artikkeldetaljer/ArticleId/11634/Skolegudstjenester-for-jul"> <img class="news-image" style="width:100%;margin-bottom:30px;padding-top:0px;min-height:200px;" src="/Portals/0/Krybbe – foto Bo M…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.news-item.col-sm-3:nth-child(3) > a:nth-child(1)`
  - **HTML:** `<a href="https://kirkenines.no/Om-oss/Artikler/Artikkeldetaljer/ArticleId/4457/Festefornyelse-pa-grav"> <img class="news-image" style="width:100%;margin-bottom:30px;padding-top:0px;min-height:200px;" src="/Portals/0/Udenes_høst 2026.jpg" a…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.news-item.col-sm-3:nth-child(4) > a:nth-child(1)`
  - **HTML:** `<a href="https://kirkenines.no/Om-oss/Artikler/Artikkeldetaljer/ArticleId/11626/Ingeborgrud-kirke-stenger-midlertidig"> <img class="news-image" style="width:100%;margin-bottom:30px;padding-top:0px;min-height:200px;" src="/Portals/0/Rullest…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#dnn_dnnTerms_hypTerms`
  - **HTML:** `<a id="dnn_dnnTerms_hypTerms" class="SkinObject" rel="nofollow" href="https://kirkenines.no/Terms">&nbsp;</a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#dnn_dnnPrivacy_hypPrivacy`
  - **HTML:** `<a id="dnn_dnnPrivacy_hypPrivacy" class="SkinObject" rel="nofollow" href="https://kirkenines.no/Privacy">&nbsp;</a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 35

#### Affected Elements:

- **Target:** `#cookieConsentContainer`
  - **HTML:** `<div id="cookieConsentContainer" class="cookieConsentContainer" style="display: flex;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.top-menu-bootstrap`
  - **HTML:** `<div class="top-menu-bootstrap">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#dnn_ctr380_DNNArticle_List_MyArticleList_panelArticle`
  - **HTML:** `<div id="dnn_ctr380_DNNArticle_List_MyArticleList_panelArticle">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#dnn_ctr380_ModuleContent > .article-odd`
  - **HTML:** `<div class="article-odd">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#dnn_ctr380_ContentPane > .article-even`
  - **HTML:** `<div class="article-even">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.c_content > .article-odd`
  - **HTML:** `<div class="article-odd">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.c_head.no_title_container > .article-even`
  - **HTML:** `<div class="article-even">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.DnnModule-380 > .article-odd`
  - **HTML:** `<div class="article-odd">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#section4`
  - **HTML:** `<section id="section4" class="wsc-section wsc-section4 empt-default wsc-empt-no-overlay wsc-empt-text-dark wsc-pane-not-empty wsc-has-panes-inside" style="background-color: #f7f7f7;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.hele-kalender`
  - **HTML:** `<div class="hele-kalender"> <a href="/Kalender">Se hele kalenderen</a></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(2) > .calendar-data-front`
  - **HTML:** `<div class="calendar-data-front"> <div class="calendar-day-front">Torsdag</div> <div class="calendar-date-front">19.11</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.19.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=1c7f3b7d-c6aa-4c3d-b542-879f0fe24834&amp;OccurenceId=3bdde5bb-267e-4ab9-8c90-f654940775d4">Korøvelse Årnes kirkekor i Årnes kirke</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Årnes kirke</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-data-front`
  - **HTML:** `<div class="calendar-data-front"> <div class="calendar-day-front">Lørdag</div> <div class="calendar-date-front">21.11</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(1) > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.13.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=e4fd93b4-969f-47d7-836d-bb237c8a665f&amp;OccurenceId=e4fd93b4-969f-47d7-836d-bb237c8a665f">Dåpsgudstjeneste</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Nes kirke</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(2) > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.14.30</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=9f53116a-0bb7-40ad-b235-a708caebeed0&amp;OccurenceId=9f53116a-0bb7-40ad-b235-a708caebeed0">Dåpsgudstjeneste for konfirmanter</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Nes kirke</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-data-front`
  - **HTML:** `<div class="calendar-data-front"> <div class="calendar-day-front">Søndag</div> <div class="calendar-date-front">22.11</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(1) > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.11.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=3f7b68db-452c-4b88-a9c2-b4b5957d4040&amp;OccurenceId=3f7b68db-452c-4b88-a9c2-b4b5957d4040">Gudstjeneste med utdeling av 2års-bok</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Ingeborgrud kirke</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(2) > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.11.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=cfb7d768-1b89-413f-8bc7-ae089b58edec&amp;OccurenceId=cfb7d768-1b89-413f-8bc7-ae089b58edec">Gudstjeneste </a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Klodsbodding kapell</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event-front:nth-child(3) > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.11.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event-front:nth-child(3) > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=0b533938-ecfc-41c9-9dae-14338bd9cd8a&amp;OccurenceId=0b533938-ecfc-41c9-9dae-14338bd9cd8a">Vrimlegudstjeneste </a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event-front:nth-child(3) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Udenes kirke</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(5) > .calendar-data-front`
  - **HTML:** `<div class="calendar-data-front"> <div class="calendar-day-front">Torsdag</div> <div class="calendar-date-front">26.11</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.19.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=1c7f3b7d-c6aa-4c3d-b542-879f0fe24834&amp;OccurenceId=3b97184b-a814-40a9-b25a-eb70d3421458">Korøvelse Årnes kirkekor i Årnes kirke</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Årnes kirke</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

