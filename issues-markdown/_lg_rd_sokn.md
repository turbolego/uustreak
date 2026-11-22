# WCAG Violations Report for Ålgård sokn

**Timestamp:** 2026-11-22T06:32:49.957Z
**URL:** [https://algard.kirken.no/](https://algard.kirken.no/)
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
  - **HTML:** `<html lang="nb-NO" dir="ltr" class="wf-opensans-n4-active wf-opensans-n7-active wf-opensans-n6-active wf-opensans-n8-active wf-opensans-n3-active wf-opensans-i3-active wf-opensans-i7-active wf-opensans-i8-active wf-opensans-i6-active wf-op…`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 18

#### Affected Elements:

- **Target:** `#top-search-trigger`
  - **HTML:** `<a id="top-search-trigger" href="#" class="toggle-item"> <i class="fa fa-search"></i> <i class="fa fa-close"></i> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[target="_blank"]:nth-child(3)`
  - **HTML:** `<a href="https://www.facebook.com/algardmenighet" target="_blank"><img alt="" src="/portals/0/SoMe%20ikoner%20nettsiden%20%281%29_1.png" style="width: 50px; height: 50px; float: right;"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `p > a[target="_blank"]:nth-child(4)`
  - **HTML:** `<a href="https://www.instagram.com/algard.menighet/" target="_blank"><img alt="" src="/portals/0/SoMe%20ikoner%20nettsiden.png" style="width: 50px; height: 50px; float: right;"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[target="_blank"]:nth-child(5)`
  - **HTML:** `<a href="https://podcasts.apple.com/us/podcast/taler-fra-gudstjeneste-i-%C3%A5lg%C3%A5rd-menighet/id1292007208" target="_blank"><img alt="" src="/portals/0/Apple%20Podkast%20Hvit.png" style="width: 50px; height: 50px; float: right;"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[target="_blank"]:nth-child(6)`
  - **HTML:** `<a href="https://open.spotify.com/show/4L8BAOgs8wBCGBVM48sKr6" target="_blank"><img alt="" src="/portals/0/SoMe%20ikoner%20nettsiden%20%282%29.png" style="width: 50px; height: 50px; float: right;"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#dnn_ctr380_DNNArticle_List_MyArticleList_panelArticle > .article-even > .image-container-even > a`
  - **HTML:** `<a href="https://algard.kirken.no/Artikler/Artikkeldetaljer/ArticleId/30/Lys-v-229-ken"> <img class="article-image-even" style="width:100%;margin-bottom:30px;padding-top:0px;" src="/Portals/0/lys våken logo.jpg" alt=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#dnn_ctr380_ContentPane > .article-even > .image-container-even > a`
  - **HTML:** `<a href="https://www.algard.kirken.no/Portals/0/Konserter/Oltedal_a4 annonse_TRYKK.pdf?ver=sL1d5i4iLK8rF4aSBi9qmA%3d%3d"> <img class="article-image-even" style="width:100%;margin-bottom:30px;padding-top:0px;" src="/Portals/0/Digital_HS_Olt…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.news-item.col-sm-3:nth-child(1) > a:nth-child(1)`
  - **HTML:** `<a href="https://algard.kirken.no/Artikler/Artikkeldetaljer/ArticleId/5658/Nyttarsretreat"> <img class="news-image" style="width:100%;margin-bottom:30px;padding-top:0px;min-height:200px;" src="/Portals/0/Bilde til SoMe.png" alt=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.news-item.col-sm-3:nth-child(2) > a:nth-child(1)`
  - **HTML:** `<a href="https://algard.kirken.no/Artikler/Artikkeldetaljer/ArticleId/5675/Knottekor"> <img class="news-image" style="width:100%;margin-bottom:30px;padding-top:0px;min-height:200px;" src="/Portals/0/Kor.png" alt=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.news-item.col-sm-3:nth-child(3) > a:nth-child(1)`
  - **HTML:** `<a href="https://algard.kirken.no/Artikler/Artikkeldetaljer/ArticleId/5639/Stilledager-i-kirken"> <img class="news-image" style="width:100%;margin-bottom:30px;padding-top:0px;min-height:200px;" src="/Portals/0/Stillerom.png" alt=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.news-item.col-sm-3:nth-child(4) > a:nth-child(1)`
  - **HTML:** `<a href="https://algard.kirken.no/Artikler/Artikkeldetaljer/ArticleId/5673/Sorggrupper-for-barn"> <img class="news-image" style="width:100%;margin-bottom:30px;padding-top:0px;min-height:200px;" src="/Portals/0/Bilder/Hender.jpg" alt=""> </…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.news-item.col-sm-3:nth-child(5) > a:nth-child(1)`
  - **HTML:** `<a href="https://algard.kirken.no/Artikler/Artikkeldetaljer/ArticleId/5670/KUNSTUTSTILLING-I-ALGARD-KIRKE-13-14-JUNI">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.news-item.col-sm-3:nth-child(6) > a:nth-child(1)`
  - **HTML:** `<a href="https://algard.kirken.no/Artikler/Artikkeldetaljer/ArticleId/5667/Arsrapport-2025-Algard-menighet"> <img class="news-image" style="width:100%;margin-bottom:30px;padding-top:0px;min-height:200px;" src="/Portals/0/IMG_2292.jpeg" alt…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.news-item.col-sm-3:nth-child(9) > a:nth-child(1)`
  - **HTML:** `<a href="https://algard.kirken.no/Artikler/Artikkeldetaljer/ArticleId/153/Global-kafe"> <img class="news-image" style="width:100%;margin-bottom:30px;padding-top:0px;min-height:200px;" src="/Portals/0/globalkafe.jpg" alt=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.news-item.col-sm-3:nth-child(10) > a:nth-child(1)`
  - **HTML:** `<a href="https://algard.kirken.no/Artikler/Artikkeldetaljer/ArticleId/5647/Portrettintervju-Ola-Vigesdal-Oftedal-Med-hjerte-for-ungdommene"> <img class="news-image" style="width:100%;margin-bottom:30px;padding-top:0px;min-height:200px;" sr…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.news-item.col-sm-3:nth-child(11) > a:nth-child(1)`
  - **HTML:** `<a href="https://algard.kirken.no/Artikler/Artikkeldetaljer/ArticleId/4627/Smabarnssang"> <img class="news-image" style="width:100%;margin-bottom:30px;padding-top:0px;min-height:200px;" src="/Portals/0/Kopi av Invitasjoner trosopplæring (F…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.news-item.col-sm-3:nth-child(12) > a:nth-child(1)`
  - **HTML:** `<a href="https://algard.kirken.no/Artikler/Artikkeldetaljer/ArticleId/4620/Apen-ungdomskjeller"> <img class="news-image" style="width:100%;margin-bottom:30px;padding-top:0px;min-height:200px;" src="/Portals/0/1.jpg" alt=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.news-item.col-sm-3:nth-child(14) > a:nth-child(1)`
  - **HTML:** `<a href="https://soundcloud.com/algardmenighet/tracks"> <img class="news-image" style="width:100%;margin-bottom:30px;padding-top:0px;min-height:200px;" src="/Portals/0/headset.png" alt=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 33

#### Affected Elements:

- **Target:** `#cookieConsentContainer`
  - **HTML:** `<div id="cookieConsentContainer" class="cookieConsentContainer" style="display: flex;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#top-menu`
  - **HTML:** `<div id="top-menu"> <div class="menu-item"><a href="/Gudstjeneste/Gudstjenestep%C3%A5melding">Gudstjenester</a></div> <div class="menu-item"><a href="#section4">Kalender</a></div> <div class="menu-item"><a href="/kontakt">Kontakt</a></div>…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.DnnModule-2633`
  - **HTML:** `<div class="DnnModule DnnModule-DNN_HTML DnnModule-2633 DnnVersionableControl">`
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

- **Target:** `#section3`
  - **HTML:** `<section id="section3" class="wsc-section wsc-section3 empt-default wsc-empt-no-overlay wsc-empt-text-dark wsc-pane-not-empty wsc-has-panes-inside" style="background-color: #f2f2f2;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.hele-kalender`
  - **HTML:** `<div class="hele-kalender"> <a href="/Omoss/Kalender">Se hele kalenderen</a></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(2) > .calendar-data-front`
  - **HTML:** `<div class="calendar-data-front"> <div class="calendar-day-front">Søndag</div> <div class="calendar-date-front">22.11</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.11.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Omoss/Kalender/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=fdcbef64-146f-4415-8581-7b8a5906a867&amp;OccurenceId=fdcbef64-146f-4415-8581-7b8a5906a867">Lys Våken-gudstjeneste</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Ålgård kirke</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-data-front`
  - **HTML:** `<div class="calendar-data-front"> <div class="calendar-day-front">Tirsdag</div> <div class="calendar-date-front">24.11</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(1) > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.17.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Omoss/Kalender/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=03621c90-d8f2-4c35-9c24-64c76c87ba18&amp;OccurenceId=03621c90-d8f2-4c35-9c24-64c76c87ba18">Global kafé</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Kjøkken Ålgård,Kafe Ålgård</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(2) > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.19.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Omoss/Kalender/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=2dde571c-4e8c-4fdb-be91-7c2bc4f7d40a&amp;OccurenceId=2dde571c-4e8c-4fdb-be91-7c2bc4f7d40a">Stille kveld i Ålgård kirke</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Ålgård kirke</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-data-front`
  - **HTML:** `<div class="calendar-data-front"> <div class="calendar-day-front">Torsdag</div> <div class="calendar-date-front">26.11</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(1) > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.16.30</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Omoss/Kalender/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=93cd2be4-c78e-4345-950b-2b5a7cdb4a58&amp;OccurenceId=93cd2be4-c78e-4345-950b-2b5a7cdb4a58">Kirkemiddag</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Ungdomskjelleren,Kjøkken Ålgård,Kafe Ålgård</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(2) > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.17.15</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Omoss/Kalender/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=2f0bad5f-fc8c-494b-a86a-e9d68fccbf26&amp;OccurenceId=ac5d8fa6-239e-4f5a-b8f5-e9825cba3942">Småbarnssang</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Lekerommet</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event-front:nth-child(3) > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.18.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event-front:nth-child(3) > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Omoss/Kalender/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=5d6dc77f-37f4-48d0-9544-2ebea1afafdf&amp;OccurenceId=201e7c81-dfbb-48ec-843a-4b1605034335">Stasjonsklubb Ungdom</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.event-front:nth-child(3) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Ålgård kirke,Kafe Ålgård</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(5) > .calendar-data-front`
  - **HTML:** `<div class="calendar-data-front"> <div class="calendar-day-front">Fredag</div> <div class="calendar-date-front">27.11</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front > .event-time-front`
  - **HTML:** `<div class="event-time-front">kl.11.00</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front > .event-info-front > .info-text-front`
  - **HTML:** `<p class="info-text-front"> <a href="/Omoss/Kalender/Kalenderdetaljer?Publish=Polo&amp;Att=Nei&amp;EventId=6c7e0efe-0249-44cb-88b3-d6675b9854a7&amp;OccurenceId=231f3396-c9e3-49e1-b9ed-b0fba79588ad">Kafé Stoppen</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
  - **HTML:** `<span class="calendar-location-front">Kafe Ålgård</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

