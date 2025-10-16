# WCAG Violations Report for Bouvet Norge

**Timestamp:** 2025-10-16T00:33:13.503Z
**URL:** [https://www.bouvet.no/#](https://www.bouvet.no/#)
**Total Violations:** 6

## Violation Details

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1
- **Count:** 1

#### Affected Elements:

- `div[role="grid"]`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2
- **Count:** 1

#### Affected Elements:

- `#widget2`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#js-header-navigation`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `#js-header-navigation`
- `.main-header-mobile`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 2

#### Affected Elements:

- `.main-header-small-item.main-header-link:nth-child(8) > a[href$="www.bouvet.se"]`
- `.main-header-small-item.main-header-link:nth-child(9) > a[href$="en.bouvet.no"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 48

#### Affected Elements:

- `.cookie-panel-banner__title`
- `.cookie-panel-banner__description`
- `.main-header-small-item.main-header-link:nth-child(1)`
- `.main-header-small-item.main-header-link:nth-child(2)`
- `.main-header-small-item.main-header-link:nth-child(3)`
- `.main-header-small-item.main-header-link:nth-child(4)`
- `.main-header-small-item.main-header-link:nth-child(5)`
- `.main-header-small-item.main-header-link:nth-child(6)`
- `.main-header-small-item.main-header-link:nth-child(7)`
- `.layout-container[data-portal-component-type="layout"]:nth-child(1)`
- `section`
- `.section-bottom-space.container-flex-justify-center.util-flex-row`
- `.part-container[data-portal-component-type="part"]:nth-child(4) > .util-flex-column-large.util-flex-row-small.collapsible__button`
- `.block-bottom-space.util-container-padding.util-flex-column`
- `div[role="grid"] > .course-calendar-wrap-row\.is-head`
- `div[role="grid"] > .course-calendar-wrap-row:nth-child(2) > .course-calendar-row.util-flex-row > .course-calendar-name`
- `time[datetime="2025-10-23"]`
- `div[role="grid"] > .course-calendar-wrap-row:nth-child(2) > .course-calendar-row.util-flex-row > .course-calendar-main-category`
- `.course-calendar-wrap-row:nth-child(2) > .course-calendar-row.util-flex-row > .course-calendar-sub-category`
- `div[role="grid"] > .course-calendar-wrap-row:nth-child(3) > .course-calendar-row.util-flex-row > .course-calendar-name`
- `.course-calendar-wrap-row:nth-child(3) > .course-calendar-row.util-flex-row > .course-calendar-date > time[datetime="2025-10-30"]`
- `div[role="grid"] > .course-calendar-wrap-row:nth-child(3) > .course-calendar-row.util-flex-row > .course-calendar-main-category`
- `.course-calendar-wrap-row:nth-child(3) > .course-calendar-row.util-flex-row > .course-calendar-sub-category`
- `div[role="grid"] > .course-calendar-wrap-row:nth-child(4) > .course-calendar-row.util-flex-row > .course-calendar-name`
- `.course-calendar-wrap-row:nth-child(4) > .course-calendar-row.util-flex-row > .course-calendar-date > time[datetime="2025-10-30"]`
- `div[role="grid"] > .course-calendar-wrap-row:nth-child(4) > .course-calendar-row.util-flex-row > .course-calendar-main-category`
- `.course-calendar-wrap-row:nth-child(4) > .course-calendar-row.util-flex-row > .course-calendar-sub-category`
- `.course-calendar-wrap-row:nth-child(5) > .course-calendar-row.util-flex-row > .course-calendar-name`
- `.course-calendar-wrap-row:nth-child(5) > .course-calendar-row.util-flex-row > .course-calendar-date > time[datetime="2025-10-30"]`
- `.course-calendar-wrap-row:nth-child(5) > .course-calendar-row.util-flex-row > .course-calendar-main-category`
- `.course-calendar-wrap-row:nth-child(5) > .course-calendar-row.util-flex-row > .course-calendar-sub-category`
- `.course-calendar-wrap-row:nth-child(6) > .course-calendar-row.util-flex-row > .course-calendar-name`
- `time[datetime="2025-11-11"]`
- `.course-calendar-wrap-row:nth-child(6) > .course-calendar-row.util-flex-row > .course-calendar-main-category`
- `.course-calendar-wrap-row:nth-child(6) > .course-calendar-row.util-flex-row > .course-calendar-sub-category`
- `.layout-container__no-gap`
- `.part-container[data-portal-component-type="part"]:nth-child(8)`
- `.related-courses-inner.creme-light > .h3-styling`
- `.related-courses-ingress`
- `.container-flex-justify-center > .course-calendar > .course-calendar-wrap[data-wrap-cols="true"][data-wrap-rows="true"] > .course-calendar-wrap-row\.is-head`
- `.container-flex-justify-center > .course-calendar > .course-calendar-wrap[data-wrap-cols="true"][data-wrap-rows="true"] > .course-calendar-wrap-row:nth-child(2) > .course-calendar-row.util-flex-row > .course-calendar-name`
- `.container-flex-justify-center > .course-calendar > .course-calendar-wrap[data-wrap-cols="true"][data-wrap-rows="true"] > .course-calendar-wrap-row:nth-child(2) > .course-calendar-row.util-flex-row > .course-calendar-date`
- `.container-flex-justify-center > .course-calendar > .course-calendar-wrap[data-wrap-cols="true"][data-wrap-rows="true"] > .course-calendar-wrap-row:nth-child(3) > .course-calendar-row.util-flex-row > .course-calendar-name`
- `.container-flex-justify-center > .course-calendar > .course-calendar-wrap[data-wrap-cols="true"][data-wrap-rows="true"] > .course-calendar-wrap-row:nth-child(3) > .course-calendar-row.util-flex-row > .course-calendar-date`
- `.container-flex-justify-center > .course-calendar > .course-calendar-wrap[data-wrap-cols="true"][data-wrap-rows="true"] > .course-calendar-wrap-row:nth-child(4) > .course-calendar-row.util-flex-row > .course-calendar-name`
- `.container-flex-justify-center > .course-calendar > .course-calendar-wrap[data-wrap-cols="true"][data-wrap-rows="true"] > .course-calendar-wrap-row:nth-child(4) > .course-calendar-row.util-flex-row > .course-calendar-date`
- `.layout-container[data-portal-component-type="layout"]:nth-child(10)`
- `#widget2, #player`
