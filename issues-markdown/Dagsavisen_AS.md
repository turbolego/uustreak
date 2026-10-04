# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-10-04T11:39:55.645Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- `#offer_b426df421caf545e51f5-1, .pw-button`
- `#offer_b426df421caf545e51f5-2, .pw-button`
- `#offer_b426df421caf545e51f5-0, .pw-button`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.text_singleline.large-8.large-abs-8 > .singleline`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 5

#### Affected Elements:

- `iframe[data-testid="embed-iframe"]`
- `#offer_b426df421caf545e51f5-1`
- `#offer_b426df421caf545e51f5-2`
- `#offer_b426df421caf545e51f5-0`
- `#offer_35cc7e60bc8ecd3914d0-0`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.has-row-header.bg-white.color_mobile_bg-white > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(29) > h5`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.customMenu2`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `.singleline.font-PTSans.t14 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 124

#### Affected Elements:

- `h1`
- `#notice-10564286 > .content > h2`
- `#notice-10564286 > .content > .meta`
- `div[title="Vestre skal bli pappa"] > h2`
- `div[title="Vestre skal bli pappa"] > .meta`
- `#notice-10564105 > .content > h2`
- `#notice-10564105 > .content > .meta`
- `#notice-10564104 > .content > h2`
- `time[datetime="2026-10-04T06:36:51.000Z"]`
- `#notice-10564103 > .content > h2`
- `#notice-10564103 > .content > .meta`
- `div[title="Brasil: Lulas ledelse minker"] > h2`
- `div[title="Brasil: Lulas ledelse minker"] > .meta`
- `#notice-10563888 > .content > h2`
- `#notice-10563888 > .content > .meta`
- `#notice-10563887 > .content > h2`
- `#notice-10563887 > .content > .meta`
- `#notice-10563797 > .content > h2`
- `#notice-10563797 > .content > .meta`
- `#notice-10563765 > .content > h2`
- `time[datetime="2026-10-03T09:49:10.000Z"]`
- `#notice-10563762 > .content > h2`
- `time[datetime="2026-10-03T09:38:06.000Z"]`
- `#notice-10563742 > .content > h2`
- `time[datetime="2026-10-03T09:13:01.000Z"]`
- `div[title="Faren avblåst i Litauen"] > h2`
- `time[datetime="2026-10-03T08:02:58.000Z"]`
- `div[title="FIS slår alarm om egen økonomi"] > h2`
- `time[datetime="2026-10-03T07:41:20.000Z"]`
- `div[title="Nytt angrep mot bro i Kyiv"] > h2`
- `time[datetime="2026-10-03T06:32:06.000Z"]`
- `#notice-10563603 > .content > h2`
- `time[datetime="2026-10-03T06:40:49.000Z"]`
- `#notice-10563602 > .content > h2`
- `time[datetime="2026-10-03T06:08:00.000Z"]`
- `#notice-10563599 > .content > h2`
- `#notice-10563599 > .content > .meta`
- `#notice-10563541 > .content > h2`
- `#notice-10563541 > .content > .meta`
- `#notice-10563523 > .content > h2`
- `#notice-10563523 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(5)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.has-row-header.bg-white.color_mobile_bg-white`
- `.row.large-12.small-12:nth-child(11)`
- `#offer_b426df421caf545e51f5-1, img`
- `#offer_b426df421caf545e51f5-1, .pw-text`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(15)`
- `.page-content > .border-bg-quinary-light.mobile_border-bg-quinary-light.hasBorder`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.t25.font-InterTight`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(19)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(20)`
- `.articlescroller-header.t25.tm18`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.page-content > .border_width_no_border_width.border_width_mobile_no_border_width.mobile_no_border_color`
- `.row.large-12.small-12:nth-child(23)`
- `.row.large-12.small-12:nth-child(25)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(26)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .lab-scrollbox-headline.t25.font-InterTight`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(28)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.lab-scrollbox-headline.t28.font-InterTight`
- `#markup_10478983 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10478981"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10453098 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10453097"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10453072 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10453073"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10440435 > .fullwidthTarget.content > unite-player,#status-container`
- `.color_mobile_no_bg_color.align-center.mobile_text_align_align-center > .floatingTextSubset.media > .floatingText`
- `#markup_10440421 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10440420"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10440430 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10440429"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10440438 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10440437"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `.row.large-12.small-12:nth-child(33)`
- `.lab-scrollbox-headline.t25.tm18`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(35)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `#offer_b426df421caf545e51f5-2, img`
- `#offer_b426df421caf545e51f5-2, .pw-text`
- `.row.large-12.small-12:nth-child(41)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(46)`
- `.bg-black`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(50)`
- `.row.large-12.small-12:nth-child(51)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(55)`
- `.row.large-12.small-12:nth-child(56)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(63)`
- `.row.large-12.small-12:nth-child(64)`
- `#offer_b426df421caf545e51f5-0, img`
- `#offer_b426df421caf545e51f5-0, .pw-text`
- `.row.large-12.small-12:nth-child(66)`
- `#offer_35cc7e60bc8ecd3914d0-0, img`
- `#offer_35cc7e60bc8ecd3914d0-0, .pw-subtitle`
- `#offer_35cc7e60bc8ecd3914d0-0, .pw-offer`
- `#offer_35cc7e60bc8ecd3914d0-0, #pw-countdown`
- `.tm20`
- `#article_list_9904930 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `#article_list_10440424 > .content > .scroll-container.swipehelper.snap-container-x`
