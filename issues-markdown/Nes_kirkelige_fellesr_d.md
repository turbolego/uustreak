# WCAG Violations Report for Nes kirkelige fellesråd

**Timestamp:** 2026-11-20T06:21:13.438Z
**URL:** [https://kirkenines.no/](https://kirkenines.no/)
**Total Violations:** 4

## Violation Details

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1, RGAAv4, RGAA-10.6.1
- **Count:** 2

#### Affected Elements:

- `a[target="_blank"]:nth-child(4)`
- `a[href$="Tilgjengelighet"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 8

#### Affected Elements:

- `#top-search-trigger`
- `#dnn_ctr380_ModuleContent > .article-odd > .image-container-odd > a`
- `.news-item.col-sm-3:nth-child(1) > a:nth-child(1)`
- `.news-item.col-sm-3:nth-child(2) > a:nth-child(1)`
- `.news-item.col-sm-3:nth-child(3) > a:nth-child(1)`
- `.news-item.col-sm-3:nth-child(4) > a:nth-child(1)`
- `#dnn_dnnTerms_hypTerms`
- `#dnn_dnnPrivacy_hypPrivacy`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 35

#### Affected Elements:

- `#cookieConsentContainer`
- `.top-menu-bootstrap`
- `#dnn_ctr380_DNNArticle_List_MyArticleList_panelArticle`
- `#dnn_ctr380_ModuleContent > .article-odd`
- `#dnn_ctr380_ContentPane > .article-even`
- `.c_content > .article-odd`
- `.c_head.no_title_container > .article-even`
- `.DnnModule-380 > .article-odd`
- `#section4`
- `.hele-kalender`
- `.calendar-item-front:nth-child(2) > .calendar-data-front`
- `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(1) > .event-time-front`
- `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .info-text-front`
- `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
- `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(2) > .event-time-front`
- `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .info-text-front`
- `.calendar-item-front:nth-child(2) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
- `.calendar-item-front-alt:nth-child(3) > .calendar-data-front`
- `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(1) > .event-time-front`
- `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .info-text-front`
- `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(1) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
- `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(2) > .event-time-front`
- `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .info-text-front`
- `.calendar-item-front-alt:nth-child(3) > .calendar-event-front > .event-front:nth-child(2) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
- `.event-front:nth-child(3) > .event-time-front`
- `.event-front:nth-child(3) > .event-info-front > .info-text-front`
- `.event-front:nth-child(3) > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
- `.calendar-item-front:nth-child(4) > .calendar-data-front`
- `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front > .event-time-front`
- `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front > .event-info-front > .info-text-front`
- `.calendar-item-front:nth-child(4) > .calendar-event-front > .event-front > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
- `.calendar-item-front-alt:nth-child(5) > .calendar-data-front`
- `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front > .event-time-front`
- `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front > .event-info-front > .info-text-front`
- `.calendar-item-front-alt:nth-child(5) > .calendar-event-front > .event-front > .event-info-front > .calendar-kategori-front > a > .calendar-location-front`
