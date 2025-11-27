# WCAG Violations Report for Ringerike kommune

**Timestamp:** 2025-11-27T00:33:16.634Z
**URL:** [https://www.ringerike.kommune.no/#](https://www.ringerike.kommune.no/#)
**Total Violations:** 9

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- `#portalframe1, button[data-templatetype="1"]`
- `#portalframe1, button[data-templatetype="2"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- `a[title="Se alle saker"]`
- `a[title="Vis alle "]`
- `#corner_text`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `#portalframe1`

### <html> element must have a lang attribute

- **Impact:** serious
- **Description:** Ensure every HTML document has a lang attribute
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright
- **Tags:** cat.language, wcag2a, wcag311, TTv5, TT11.a, EN-301-549, EN-9.3.1.1, ACT, RGAAv4, RGAA-8.3.1
- **Count:** 1

#### Affected Elements:

- `html`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 12

#### Affected Elements:

- `div[data-blockid="46"] > .ssp__panel__news-item:nth-child(1) > .ssp__panel__news-item-anchor > .ssp__panel__news-image-text > .row > .col-sm-5.pr-15.pr-sm-0 > .ssp__panel__news-image[data-responsiveimage="true"][width="204"]`
- `div[data-blockid="46"] > .ssp__panel__news-item:nth-child(2) > .ssp__panel__news-item-anchor > .ssp__panel__news-image-text > .row > .col-sm-5.pr-15.pr-sm-0 > .ssp__panel__news-image[data-responsiveimage="true"][width="204"]`
- `div[data-blockid="46"] > .ssp__panel__news-item:nth-child(3) > .ssp__panel__news-item-anchor > .ssp__panel__news-image-text > .row > .col-sm-5.pr-15.pr-sm-0 > .ssp__panel__news-image[data-responsiveimage="true"][width="204"]`
- `div[data-blockid="46"] > .ssp__panel__news-item:nth-child(4) > .ssp__panel__news-item-anchor > .ssp__panel__news-image-text > .row > .col-sm-5.pr-15.pr-sm-0 > .ssp__panel__news-image[data-responsiveimage="true"][width="204"]`
- `div[data-blockid="46"] > .ssp__panel__news-item:nth-child(5) > .ssp__panel__news-item-anchor > .ssp__panel__news-image-text > .row > .col-sm-5.pr-15.pr-sm-0 > .ssp__panel__news-image[data-responsiveimage="true"][width="204"]`
- `div[data-blockid="12423"] > .ssp__panel__news-item:nth-child(1) > .ssp__panel__news-item-anchor > .ssp__panel__news-image-text > .row > .col-sm-5.pr-15.pr-sm-0 > .ssp__panel__news-image[data-responsiveimage="true"][width="204"]`
- `div[data-blockid="12423"] > .ssp__panel__news-item:nth-child(2) > .ssp__panel__news-item-anchor > .ssp__panel__news-image-text > .row > .col-sm-5.pr-15.pr-sm-0 > .ssp__panel__news-image[data-responsiveimage="true"][width="204"]`
- `div[data-blockid="12423"] > .ssp__panel__news-item:nth-child(3) > .ssp__panel__news-item-anchor > .ssp__panel__news-image-text > .row > .col-sm-5.pr-15.pr-sm-0 > .ssp__panel__news-image[data-responsiveimage="true"][width="204"]`
- `div[data-blockid="12423"] > .ssp__panel__news-item:nth-child(4) > .ssp__panel__news-item-anchor > .ssp__panel__news-image-text > .row > .col-sm-5.pr-15.pr-sm-0 > .ssp__panel__news-image[data-responsiveimage="true"][width="204"]`
- `div[data-blockid="12423"] > .ssp__panel__news-item:nth-child(5) > .ssp__panel__news-item-anchor > .ssp__panel__news-image-text > .row > .col-sm-5.pr-15.pr-sm-0 > .ssp__panel__news-image[data-responsiveimage="true"][width="204"]`
- `div[data-blockid="1301"] > .ssp__panel__news-item:nth-child(1) > .ssp__panel__news-item-anchor > .ssp__panel__news-image-text > .row > .col-sm-5.pr-15.pr-sm-0 > .ssp__panel__news-image[data-responsiveimage="true"][width="204"]`
- `.ssp__footer-wave`

### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 1

#### Affected Elements:

- `#search__input--id`

### Form elements must have labels

- **Impact:** critical
- **Description:** Ensure every form element has a label
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/label?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 2

#### Affected Elements:

- `#portalframe1, .date-from`
- `#portalframe1, .date-to`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 7

#### Affected Elements:

- `#portalframe1, .single-0.day-listings.single-date-list:nth-child(2) > .item-container > .list-item.line:nth-child(1) > .list-item-date > .list-item-time > .ical`
- `#portalframe1, .single-0.day-listings.single-date-list:nth-child(2) > .item-container > .list-item.line:nth-child(2) > .list-item-date > .list-item-time > .ical`
- `#portalframe1, .list-item.line:nth-child(3) > .list-item-date > .list-item-time > .ical`
- `#portalframe1, .single-1.day-listings.single-date-list:nth-child(3) > .item-container > .list-item.line > .list-item-date > .list-item-time > .ical`
- `#portalframe1, .single-0.day-listings.single-date-list:nth-child(4) > .item-container > .list-item.line > .list-item-date > .list-item-time > .ical`
- `#portalframe1, .single-1.day-listings.single-date-list:nth-child(5) > .item-container > .list-item.line:nth-child(1) > .list-item-date > .list-item-time > .ical`
- `#portalframe1, .single-1.day-listings.single-date-list:nth-child(5) > .item-container > .list-item.line:nth-child(2) > .list-item-date > .list-item-time > .ical`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 32

#### Affected Elements:

- `div:nth-child(8) > div:nth-child(1)`
- `div:nth-child(8) > div:nth-child(2)`
- `.ssp__panel--grey.ssp__panel.mb-30 > .ssp__panel__title`
- `.ssp__timespan`
- `#portalframe1, .input-list > .heading`
- `#portalframe1, .input-search`
- `#portalframe1, .data-from-to-expand`
- `#portalframe1, .CaptionCont`
- `#portalframe1, .optWrapper`
- `#portalframe1, .single-0.day-listings.single-date-list:nth-child(2) > h1`
- `#portalframe1, .single-0.day-listings.single-date-list:nth-child(2) > .item-container > .list-item.line:nth-child(1) > .list-item-date`
- `#portalframe1, a[data-itemid="35691"] > .ul-main`
- `#portalframe1, .single-0.day-listings.single-date-list:nth-child(2) > .item-container > .list-item.line:nth-child(2) > .list-item-date`
- `#portalframe1, a[data-itemid="32260"] > .ul-main`
- `#portalframe1, .list-item.line:nth-child(3) > .list-item-date`
- `#portalframe1, a[data-itemid="37399"] > .ul-main`
- `#portalframe1, .single-1.day-listings.single-date-list:nth-child(3) > h1`
- `#portalframe1, .single-1.day-listings.single-date-list:nth-child(3) > .item-container > .list-item.line > .list-item-date`
- `#portalframe1, a[data-itemid="37193"] > .ul-main`
- `#portalframe1, .single-0.day-listings.single-date-list:nth-child(4) > h1`
- `#portalframe1, .single-0.day-listings.single-date-list:nth-child(4) > .item-container > .list-item.line > .list-item-date`
- `#portalframe1, a[data-itemid="37243"] > .ul-main`
- `#portalframe1, .single-1.day-listings.single-date-list:nth-child(5) > h1`
- `#portalframe1, .single-1.day-listings.single-date-list:nth-child(5) > .item-container > .list-item.line:nth-child(1) > .list-item-date`
- `#portalframe1, a[data-itemid="31481"] > .ul-main`
- `#portalframe1, .single-1.day-listings.single-date-list:nth-child(5) > .item-container > .list-item.line:nth-child(2) > .list-item-date`
- `#portalframe1, a[data-itemid="37118"] > .ul-main`
- `.mt-20`
- `.ssp__fluid-panel > div > div > div > .container > .row > .col-md-6.mb-30.col-xs-12:nth-child(2)`
- `.test-wrapper`
- `#vFact_audioFrame, #vfact_testaudio`
- `#vFact_audioFrame, h1`
