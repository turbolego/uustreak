# WCAG Violations Report for Våle sokn

**Timestamp:** 2026-11-19T07:06:21.170Z
**URL:** [https://re.kirken.no/](https://re.kirken.no/)
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
  - **HTML:** `<html lang="nb-NO" dir="ltr" class="wf-opensans-n8-active wf-opensans-n6-active wf-opensans-n4-active wf-opensans-n3-active wf-opensans-n7-active wf-opensans-i6-active wf-opensans-i3-active wf-opensans-i7-active wf-opensans-i4-active wf-op…`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 9

#### Affected Elements:

- **Target:** `#top-search-trigger`
  - **HTML:** `<a id="top-search-trigger" href="#" class="toggle-item"> <i class="fa fa-search"></i> <i class="fa fa-close"></i> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#dnn_ctr421_DNNArticle_List_MyArticleList_panelArticle > .article-even > .image-container-even > a`
  - **HTML:** `<a href="https://re.kirken.no/Menighetene/Artikler/Vis/ArticleId/4196/Samarbeid-mellom-menighetsradene"> <img class="article-image-even" style="width:100%;margin-bottom:30px;padding-top:0px;" src="/Portals/0/Menighetsråd.Foto Torstein Kise…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#dnn_ctr421_ModuleContent > .article-odd > .image-container-odd > a`
  - **HTML:** `<a href="/Portals/0/Dokument/Konfirmantbrosjyre Re 2026-2027.pdf"> <img class="article-image-odd" style="width:100%;margin-bottom:30px;padding-top:0px;" src="/Portals/0/Bilder/Konfirmasjon/Konfirmantleir, foto Bo Mathisen.jpg" alt=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#dnn_ctr421_ContentPane > .article-even > .image-container-even > a`
  - **HTML:** `<a href="https://re.kirken.no/Menighetene/Artikler/Vis/ArticleId/4180/Smabarnssang"> <img class="article-image-even" style="width:100%;margin-bottom:30px;padding-top:0px;" src="/Portals/0/Bilder/Barn/Babysang flere.jpg" alt=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.c_content > .article-odd > .image-container-odd > a`
  - **HTML:** `<a href="https://re.kirken.no/Menighetene/Artikler/Vis/ArticleId/4165/Babysang-pa-Revetal-Bibliotek"> <img class="article-image-odd" style="width:100%;margin-bottom:30px;padding-top:0px;" src="/Portals/0/3 babysang 2.jpg" alt=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.news-item.col-sm-3:nth-child(1) > a:nth-child(1)`
  - **HTML:** `<a href="https://kirken.no/nb-NO/fellesrad/tonsberg-kirkelige-fellesrad/samarbeid-pa-tvers-av-menighetene/ukraina/"> <img class="news-image" style="width:100%;margin-bottom:30px;padding-top:0px;min-height:200px;" src="/Portals/0/Ukraina.jp…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.news-item.col-sm-3:nth-child(2) > a:nth-child(1)`
  - **HTML:** `<a href="https://re.kirken.no/Menighetene/Artikler/Vis/ArticleId/3151/Arsmeldinger-fra-menighetene-i-Re"> <img class="news-image" style="width:100%;margin-bottom:30px;padding-top:0px;min-height:200px;" src="/Portals/0/Bilder/Kirkene/Ramnes…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.news-item.col-sm-3:nth-child(3) > a:nth-child(1)`
  - **HTML:** `<a href="https://re.kirken.no/Menighetene/Artikler/Vis/ArticleId/119/Vil-ha-en-229-pen-folkekirke"> <img class="news-image" style="width:100%;margin-bottom:30px;padding-top:0px;min-height:200px;" src="/Portals/0/Bilder/Kirkevalg/Therese_Th…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.news-item.col-sm-3:nth-child(4) > a:nth-child(1)`
  - **HTML:** `<a href="https://re.kirken.no/Menighetene/Artikler/Vis/ArticleId/118/Jegerotte-i-Vivestad"> <img class="news-image" style="width:100%;margin-bottom:30px;padding-top:0px;min-height:200px;" src="/Portals/0/Bilder/Vivestad/Jegerotte.jpg" alt=…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 29

#### Affected Elements:

- **Target:** `#cookieConsentContainer`
  - **HTML:** `<div id="cookieConsentContainer" class="cookieConsentContainer" style="display: flex;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.wsc-banner-container`
  - **HTML:** `<div class="wsc-banner-container container">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.banner-cpr`
  - **HTML:** `<div class="banner-cpr"><i class="far fa-copyright"></i>&nbsp;Anne Martha Askjer Kjær</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#top-menu`
  - **HTML:** `<div id="top-menu"> <div class="menu-item"><a href="#section4">Kalender</a></div> <div class="menu-item"><a href="/Kirkene">Kirker</a></div> <div class="menu-item"><a href="/kontakt">Kontakt</a></div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#dnn_ctr421_DNNArticle_List_MyArticleList_panelArticle`
  - **HTML:** `<div id="dnn_ctr421_DNNArticle_List_MyArticleList_panelArticle">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#dnn_ctr421_ModuleContent > .article-odd`
  - **HTML:** `<div class="article-odd">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#dnn_ctr421_ContentPane > .article-even`
  - **HTML:** `<div class="article-even">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.c_content > .article-odd`
  - **HTML:** `<div class="article-odd">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#section3`
  - **HTML:** `<section id="section3" class="wsc-section wsc-section3 empt-default wsc-empt-no-overlay wsc-empt-text-dark wsc-pane-not-empty wsc-has-panes-inside" style="background-color: #f2f2f2;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.hele-kalender`
  - **HTML:** `<div class="hele-kalender"> <a href="/Kalender">Se hele kalenderen</a></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(2) > .calendar-data-front`
  - **HTML:** `<div class="calendar-data-front"> <div class="calendar-day-front">Søndag</div> <div class="calendar-date-front">22.11</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.11.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=69102e9f-5f18-4303-8b2e-a508d503effc&amp;OccurenceId=69102e9f-5f18-4303-8b2e-a508d503effc">Gudstjeneste</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Våle kirke</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-data-front`
  - **HTML:** `<div class="calendar-data-front"> <div class="calendar-day-front">Onsdag</div> <div class="calendar-date-front">25.11</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.12.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=ac6fae9f-a496-4fb4-80a5-c5cf8a086b0d&amp;OccurenceId=ac6fae9f-a496-4fb4-80a5-c5cf8a086b0d">Andakt på Re helsehus</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Re helsehus</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-data-front`
  - **HTML:** `<div class="calendar-data-front"> <div class="calendar-day-front">Søndag</div> <div class="calendar-date-front">29.11</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(1) > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.11.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=09ea2847-bfec-40ac-a826-86bde5ff9032&amp;OccurenceId=09ea2847-bfec-40ac-a826-86bde5ff9032">Gudstjeneste</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Ramnes kirke</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event-front:nth-child(2) > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.16.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event-front:nth-child(2) > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=5dc220c3-1d2c-4d66-887b-09bc94d63bf6&amp;OccurenceId=5dc220c3-1d2c-4d66-887b-09bc94d63bf6">Gudstjeneste</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event-front:nth-child(2) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Undrumsdal kirke</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(5) > .calendar-data-front`
  - **HTML:** `<div class="calendar-data-front"> <div class="calendar-day-front">Tirsdag</div> <div class="calendar-date-front">01.12</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.19.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=45b9e166-7c4b-4469-bbe2-d12050eca7d2&amp;OccurenceId=45b9e166-7c4b-4469-bbe2-d12050eca7d2">Julekonsert VåRa koret</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Våle kirke</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

