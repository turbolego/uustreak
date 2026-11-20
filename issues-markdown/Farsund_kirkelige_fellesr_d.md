# WCAG Violations Report for Farsund kirkelige fellesråd

**Timestamp:** 2026-11-20T06:09:09.919Z
**URL:** [https://farsund.kirken.no/](https://farsund.kirken.no/)
**Total Violations:** 3

## Violation Details

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- `#top-search-trigger`
- `#dnn_ctr380_DNNArticle_List_MyArticleList_panelArticle > .article-even > .image-container-even > a`
- `.image-container-odd > a[href$="listamenighet.no/"]`
- `.image-container-even > a[href$="kirketorget.no/"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 43

#### Affected Elements:

- `#cookieConsentContainer`
- `#top-menu`
- `#dnn_ctr380_DNNArticle_List_MyArticleList_panelArticle`
- `.article-odd`
- `#dnn_ctr380_ContentPane > .article-even`
- `.hele-kalender`
- `.calendar-item-front:nth-child(2) > .calendar-data-front`
- `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(1) > .event-time-front`
- `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .info-text-front`
- `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
- `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(2) > .event-time-front`
- `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .info-text-front`
- `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
- `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(3) > .event-time-front`
- `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(3) > .event-info-front > .info-text-front`
- `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(3) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
- `.calendar-item-front-alt:nth-child(3) > .calendar-data-front`
- `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(1) > .event-time-front`
- `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .info-text-front`
- `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
- `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(2) > .event-time-front`
- `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .info-text-front`
- `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
- `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(3) > .event-time-front`
- `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(3) > .event-info-front > .info-text-front`
- `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(3) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
- `.calendar-item-front:nth-child(4) > .calendar-data-front`
- `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(1) > .event-time-front`
- `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .info-text-front`
- `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
- `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(2) > .event-time-front`
- `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .info-text-front`
- `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
- `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(3) > .event-time-front`
- `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(3) > .event-info-front > .info-text-front`
- `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front:nth-child(3) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
- `.calendar-item-front-alt:nth-child(5) > .calendar-data-front`
- `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front:nth-child(1) > .event-time-front`
- `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .info-text-front`
- `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
- `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front:nth-child(2) > .event-time-front`
- `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .info-text-front`
- `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
