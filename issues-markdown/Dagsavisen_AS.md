# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-08-06T02:38:11.674Z
**URL:** [https://www.dagsavisen.no/#](https://www.dagsavisen.no/#)
**Total Violations:** 7

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.text_singleline.large-8.large-abs-8 > .singleline`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[data-testid="embed-iframe"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 6

#### Affected Elements:

- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(16) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(83) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(87) > h5`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.mainMenu`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `.singleline.font-PTSans.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 149

#### Affected Elements:

- `h1`
- `div[title="Datainnbrudd hos Ryde "] > h2`
- `div[title="Datainnbrudd hos Ryde "] > .meta`
- `#notice-10468413 > .content > h2`
- `#notice-10468413 > .content > .meta`
- `div[title="Fire menn stukket ned i London"] > h2`
- `div[title="Fire menn stukket ned i London"] > .meta`
- `#notice-10468383 > .content > h2`
- `#notice-10468383 > .content > .meta`
- `#notice-10468337 > .content > h2`
- `#notice-10468337 > .content > .meta`
- `#notice-10468336 > .content > h2`
- `#notice-10468336 > .content > .meta`
- `#notice-10467864 > .content > h2`
- `#notice-10467864 > .content > .meta`
- `#notice-10467667 > .content > h2`
- `time[datetime="2026-08-05T11:55:18.000Z"]`
- `div[title="Putin utnevner dronesjef"] > h2`
- `time[datetime="2026-08-05T11:16:54.000Z"]`
- `#notice-10467502 > .content > h2`
- `time[datetime="2026-08-05T11:08:49.000Z"]`
- `#notice-10467451 > .content > h2`
- `time[datetime="2026-08-05T10:53:21.000Z"]`
- `#notice-10467410 > .content > h2`
- `time[datetime="2026-08-05T10:42:11.000Z"]`
- `#notice-10467399 > .content > h2`
- `time[datetime="2026-08-05T10:39:09.000Z"]`
- `#notice-10467398 > .content > h2`
- `time[datetime="2026-08-05T10:38:17.000Z"]`
- `#notice-10466737 > .content > h2`
- `time[datetime="2026-08-05T07:26:21.000Z"]`
- `div[title="14 døde av lynnedslag i India"] > h2`
- `time[datetime="2026-08-05T06:01:14.000Z"]`
- `#notice-10466607 > .content > h2`
- `time[datetime="2026-08-05T05:37:38.000Z"]`
- `#notice-10466606 > .content > h2`
- `time[datetime="2026-08-05T05:36:57.000Z"]`
- `#notice-10466605 > .content > h2`
- `time[datetime="2026-08-05T05:36:34.000Z"]`
- `#notice-10466604 > .content > h2`
- `time[datetime="2026-08-05T05:36:12.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(14)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(16)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(22)`
- `.page-content > .border_width_no_border_width.border_width_mobile_no_border_width.mobile_no_border_color`
- `.page-content > .border-bg-quaternary.mobile_border-bg-quaternary.hasBorder`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `#article_list_10184114 > .content > .lab-scrollbox-headline.font-weight-normal.m-font-weight-normal`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.t28.lab-scrollbox-headline.font-weight-normal`
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
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `#article_list_10230577 > .content > .lab-scrollbox-headline.font-weight-normal.m-font-weight-normal`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(48)`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(51)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(54)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(60)`
- `.row.large-12.small-12:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.row.large-12.small-12:nth-child(64)`
- `.row.large-12.small-12:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.row.large-12.small-12:nth-child(67)`
- `.row.large-12.small-12:nth-child(68)`
- `.row.large-12.small-12:nth-child(69)`
- `.row.large-12.small-12:nth-child(70)`
- `.row.large-12.small-12:nth-child(71)`
- `.row.large-12.small-12:nth-child(72)`
- `.row.large-12.small-12:nth-child(73)`
- `.row.large-12.small-12:nth-child(74)`
- `.row.large-12.small-12:nth-child(75)`
- `.row.large-12.small-12:nth-child(76)`
- `.row.large-12.small-12:nth-child(77)`
- `.bg-black.color_mobile_bg-black.lab-scrollbox-headline`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(1)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(2)`
- `.tm19.color_mobile_no_bg_color.primary > .t14[data-lab-text_size_desktop="14"]`
- `span[data-lab-text_size_desktop="27"]`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(4)`
- `span[data-lab-text_size_mobile="17"]`
- `.tm19.color_mobile_no_bg_color.primary > .font-weight-bold.m-font-weight-bold[data-lab-font_weight_mobile="font-weight-bold"]`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(6)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(7)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(8)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(9)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(10)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(11)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(12)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(13)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(14)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(15)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(79)`
- `.row.large-12.small-12:nth-child(80)`
- `.row.large-12.small-12:nth-child(81)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(83)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(85)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(87)`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `#article_list_10440424 > .content > .scroll-container.swipehelper.snap-container-x`
