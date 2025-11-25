# WCAG Violations Report for Den Nationale Scene AS

**Timestamp:** 2025-11-25T00:44:26.241Z
**URL:** [https://dns.no/#](https://dns.no/#)
**Total Violations:** 6

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.vc_col-sm-10.vc_hidden-sm.vc_hidden-xs > .vc_column-inner > .wpb_wrapper > .wpb_text_column.wpb_content_element > .wpb_wrapper > p > a`

### Table header text should not be empty

- **Impact:** minor
- **Description:** Ensure table headers have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 2

#### Affected Elements:

- `.month1 > thead > .caption > th:nth-child(3)`
- `.month2 > thead > .caption > th:nth-child(1)`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[data-dojo-attach-point="iframeModalContainer"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 11

#### Affected Elements:

- `div[data-postid="14841"] > .vc_column-inner > .wpb_wrapper > .vc_align_left.wpb_single_image.wpb_animate_when_almost_visible > figure > a`
- `div[data-postid="14843"] > .vc_column-inner > .wpb_wrapper > .vc_align_left.wpb_single_image.wpb_animate_when_almost_visible > figure > a`
- `div[data-postid="16983"] > .vc_column-inner > .wpb_wrapper > .vc_align_left.wpb_single_image.wpb_animate_when_almost_visible > figure > a`
- `div[data-postid="16980"] > .vc_column-inner > .wpb_wrapper > .vc_align_left.wpb_single_image.wpb_animate_when_almost_visible > figure > a`
- `div[data-postid="16982"] > .vc_column-inner > .wpb_wrapper > .vc_align_left.wpb_single_image.wpb_animate_when_almost_visible > figure > a`
- `div[data-postid="17008"] > .vc_column-inner > .wpb_wrapper > .vc_align_left.wpb_single_image.wpb_animate_when_almost_visible > figure > a`
- `div[data-postid="16994"] > .vc_column-inner > .wpb_wrapper > .vc_align_left.wpb_single_image.wpb_animate_when_almost_visible > figure > a`
- `div[data-postid="17010"] > .vc_column-inner > .wpb_wrapper > .vc_align_left.wpb_single_image.wpb_animate_when_almost_visible > figure > a`
- `.social[rel="noopener"][target="_blank"]:nth-child(1)`
- `.social[rel="noopener"][target="_blank"]:nth-child(2)`
- `.social[rel="noopener"][target="_blank"]:nth-child(3)`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 82

#### Affected Elements:

- `.close_sidemenu`
- `.skip-link`
- `#dtx-header-logo`
- `.header-links`
- `.wpb-content-wrapper > .wpb_row.vc_row-fluid.vc_row:nth-child(1)`
- `.cal-month > .vc_col-sm-3.wpb_column.vc_column_container`
- `.sel__placeholder-calendar-sel__placeholderect-date`
- `.sel__placeholder-calendar-sel__placeholderect-production-input`
- `.default-top`
- `.month1 > thead > .caption > th:nth-child(1)`
- `.month1 > thead > .caption > .month-name[colspan="5"]`
- `.month1 > thead > .week-name`
- `.month1 > tbody > tr:nth-child(1) > td:nth-child(6)`
- `.month1 > tbody > tr:nth-child(1) > td:nth-child(7)`
- `.month1 > tbody > tr:nth-child(2)`
- `.month1 > tbody > tr:nth-child(3)`
- `.month1 > tbody > tr:nth-child(4)`
- `.month1 > tbody > tr:nth-child(5)`
- `.month2 > thead > .caption > .month-name[colspan="5"]`
- `.month2 > thead > .caption > th:nth-child(3)`
- `.month2 > thead > .week-name`
- `.month2 > tbody > tr:nth-child(1)`
- `.month2 > tbody > tr:nth-child(2)`
- `.month2 > tbody > tr:nth-child(3)`
- `.month2 > tbody > tr:nth-child(4)`
- `.month2 > tbody > tr:nth-child(5) > td:nth-child(1)`
- `.month2 > tbody > tr:nth-child(5) > td:nth-child(2)`
- `.month2 > tbody > tr:nth-child(5) > td:nth-child(3)`
- `div[data-postid="14841"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-spillested`
- `div[data-postid="14841"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-fritekst`
- `div[data-postid="14841"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > a`
- `div[data-postid="14841"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-ticketlink`
- `div[data-postid="14843"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-spillested`
- `div[data-postid="14843"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-fritekst`
- `div[data-postid="14843"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > a`
- `div[data-postid="14843"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-ticketlink`
- `div[data-postid="16983"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-spillested`
- `div[data-postid="16983"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-fritekst`
- `div[data-postid="16983"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > a`
- `div[data-postid="16983"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-ticketlink`
- `div[data-postid="16980"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-spillested`
- `div[data-postid="16980"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-fritekst`
- `div[data-postid="16980"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > a`
- `div[data-postid="16980"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-ticketlink`
- `div[data-postid="16982"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-spillested`
- `div[data-postid="16982"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-fritekst`
- `div[data-postid="16982"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > a`
- `div[data-postid="16982"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-ticketlink`
- `div[data-postid="17008"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-spillested`
- `div[data-postid="17008"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-fritekst`
- `div[data-postid="17008"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > a`
- `div[data-postid="17008"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-ticketlink`
- `div[data-postid="16994"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-spillested`
- `div[data-postid="16994"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-fritekst`
- `div[data-postid="16994"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > a`
- `div[data-postid="16994"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-ticketlink`
- `div[data-postid="17010"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-spillested`
- `div[data-postid="17010"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-fritekst`
- `div[data-postid="17010"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > a`
- `div[data-postid="17010"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-ticketlink`
- `.vc_custom_1597326627476 > .vc_col-has-fill.vc_col-sm-12.wpb_column > .vc_custom_1597326586251.vc_column-inner > .wpb_wrapper > .all-events.wpb_text_column.wpb_content_element`
- `.vc_custom_1700029085981`
- `.vc_custom_1678087387650`
- `.vc_custom_1701252272509`
- `.js-redirect-post > .vc_grid.vc_grid-gutter-15px.vc_pageable-wrapper > .vc_pageable-slide-wrapper.vc_clearfix[data-vc-grid-content="true"] > .vc_grid-item.vc_grid-item-zone-c-bottom.vc_visible-item > .vc_grid-item-mini.vc_clearfix > .vc_gitem-animated-block.vc_gitem-animate.vc_gitem-animate-fadeIn > .vc_gitem-zone-b.vc_custom_1538040546699.vc-gitem-zone-height-mode-auto`
- `.js-redirect-post > .vc_grid.vc_grid-gutter-15px.vc_pageable-wrapper > .vc_pageable-slide-wrapper.vc_clearfix[data-vc-grid-content="true"] > .vc_grid-item.vc_grid-item-zone-c-bottom.vc_visible-item > .vc_grid-item-mini.vc_clearfix > .vc_gitem-zone-c.vc_gitem-zone > .vc_gitem-zone-mini > .vc_gitem-row-position-top.vc_gitem_row.vc_row > .vc_gitem-col.vc_gitem-col-align-.vc_col-sm-12 > .vc_gitem-post-data-source-post_title.vc_custom_heading.vc_gitem-post-data`
- `.js-redirect-post > .vc_grid.vc_grid-gutter-15px.vc_pageable-wrapper > .vc_pageable-slide-wrapper.vc_clearfix[data-vc-grid-content="true"] > .vc_grid-item.vc_grid-item-zone-c-bottom.vc_visible-item > .vc_grid-item-mini.vc_clearfix > .vc_gitem-zone-c.vc_gitem-zone > .vc_gitem-zone-mini > .vc_gitem-row-position-top.vc_gitem_row.vc_row > .vc_gitem-col.vc_gitem-col-align-.vc_col-sm-12 > .vc_gitem-post-data-source-post_excerpt.vc_custom_heading.vc_gitem-post-data`
- `.vc_col-sm-4.vc_grid-item.vc_grid-item-zone-c-bottom:nth-child(1) > .vc_grid-item-mini.vc_clearfix > .vc_gitem-animated-block.vc_gitem-animate.vc_gitem-animate-fadeIn > .vc_gitem-zone-b.vc_custom_1538040546699.vc-gitem-zone-height-mode-auto`
- `.vc_col-sm-4.vc_grid-item.vc_grid-item-zone-c-bottom:nth-child(1) > .vc_grid-item-mini.vc_clearfix > .vc_gitem-zone-c.vc_gitem-zone > .vc_gitem-zone-mini > .vc_gitem-row-position-top.vc_gitem_row.vc_row > .vc_gitem-col.vc_gitem-col-align-.vc_col-sm-12 > .vc_gitem-post-data-source-post_title.vc_custom_heading.vc_gitem-post-data`
- `.vc_col-sm-4.vc_grid-item.vc_grid-item-zone-c-bottom:nth-child(1) > .vc_grid-item-mini.vc_clearfix > .vc_gitem-zone-c.vc_gitem-zone > .vc_gitem-zone-mini > .vc_gitem-row-position-top.vc_gitem_row.vc_row > .vc_gitem-col.vc_gitem-col-align-.vc_col-sm-12 > .vc_gitem-post-data-source-post_excerpt.vc_custom_heading.vc_gitem-post-data`
- `.vc_col-sm-4.vc_grid-item.vc_grid-item-zone-c-bottom:nth-child(2) > .vc_grid-item-mini.vc_clearfix > .vc_gitem-animated-block.vc_gitem-animate.vc_gitem-animate-fadeIn > .vc_gitem-zone-b.vc_custom_1538040546699.vc-gitem-zone-height-mode-auto`
- `.vc_col-sm-4.vc_grid-item.vc_grid-item-zone-c-bottom:nth-child(2) > .vc_grid-item-mini.vc_clearfix > .vc_gitem-zone-c.vc_gitem-zone > .vc_gitem-zone-mini > .vc_gitem-row-position-top.vc_gitem_row.vc_row > .vc_gitem-col.vc_gitem-col-align-.vc_col-sm-12 > .vc_gitem-post-data-source-post_title.vc_custom_heading.vc_gitem-post-data`
- `.vc_col-sm-4.vc_grid-item.vc_grid-item-zone-c-bottom:nth-child(2) > .vc_grid-item-mini.vc_clearfix > .vc_gitem-zone-c.vc_gitem-zone > .vc_gitem-zone-mini > .vc_gitem-row-position-top.vc_gitem_row.vc_row > .vc_gitem-col.vc_gitem-col-align-.vc_col-sm-12 > .vc_gitem-post-data-source-post_excerpt.vc_custom_heading.vc_gitem-post-data`
- `.vc_col-sm-4.vc_grid-item.vc_grid-item-zone-c-bottom:nth-child(3) > .vc_grid-item-mini.vc_clearfix > .vc_gitem-animated-block.vc_gitem-animate.vc_gitem-animate-fadeIn > .vc_gitem-zone-b.vc_custom_1538040546699.vc-gitem-zone-height-mode-auto`
- `.vc_col-sm-4.vc_grid-item.vc_grid-item-zone-c-bottom:nth-child(3) > .vc_grid-item-mini.vc_clearfix > .vc_gitem-zone-c.vc_gitem-zone > .vc_gitem-zone-mini > .vc_gitem-row-position-top.vc_gitem_row.vc_row > .vc_gitem-col.vc_gitem-col-align-.vc_col-sm-12 > .vc_gitem-post-data-source-post_title.vc_custom_heading.vc_gitem-post-data`
- `.vc_col-sm-4.vc_grid-item.vc_grid-item-zone-c-bottom:nth-child(3) > .vc_grid-item-mini.vc_clearfix > .vc_gitem-zone-c.vc_gitem-zone > .vc_gitem-zone-mini > .vc_gitem-row-position-top.vc_gitem_row.vc_row > .vc_gitem-col.vc_gitem-col-align-.vc_col-sm-12 > .vc_gitem-post-data-source-post_excerpt.vc_custom_heading.vc_gitem-post-data`
- `.padded-section[data-vc-full-width="true"][data-vc-full-width-init="true"] > .vc_col-sm-12.wpb_column.vc_column_container > .vc_column-inner > .wpb_wrapper > .vc_inner.wpb_row.vc_row-fluid:nth-child(2)`
- `.vc_custom_1750769162252`
- `iframe[data-dojo-attach-point="iframeModalContainer"], .content__titleDescription`
- `iframe[data-dojo-attach-point="iframeModalContainer"], #uniqName_3_0`
- `iframe[data-dojo-attach-point="iframeModalContainer"], .content__footer`
- `iframe[data-dojo-attach-point="iframeModalContainer"], #dijit__TemplatedMixin_2`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 10

#### Affected Elements:

- `#calendar-show-calendar`
- `.sel-calendar-select-date`
- `.sel-calendar-select-production-input`
- `.tabable[href$="forestillinger/"]`
- `.vc_custom_1678087387650 > .vc_col-has-fill.vc_col-sm-12.wpb_column > .vc_custom_1597326586251.vc_column-inner > .wpb_wrapper > .all-events.wpb_text_column.wpb_content_element > .wpb_wrapper > p > .tabable`
- `a[href$="nyheter/"]`
- `p:nth-child(2) > a[href$="kontakt/"]`
- `p:nth-child(2) > a[rel="noopener"][target="_blank"]`
- `a[rel="noopener"][href$="nyhetsbrev/"][target="_blank"]`
- `a[href$="gavekort/"][rel="noopener"]`
