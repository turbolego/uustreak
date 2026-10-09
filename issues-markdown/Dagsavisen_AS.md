# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-10-09T04:57:01.472Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 8

## Violation Details

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
- **Count:** 4

#### Affected Elements:

- `iframe[data-testid="embed-iframe"]`
- `#offer_4992f7477e94a7ea214a-0`
- `#offer_4992f7477e94a7ea214a-1`
- `#offer_25de92e59ecc9e9aa9cd-0`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 3

#### Affected Elements:

- `#offer_4992f7477e94a7ea214a-0, img`
- `#offer_4992f7477e94a7ea214a-1, img`
- `#offer_25de92e59ecc9e9aa9cd-0, img`

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
- **Count:** 4

#### Affected Elements:

- `#offer_4992f7477e94a7ea214a-0, a`
- `#offer_4992f7477e94a7ea214a-1, a`
- `#offer_25de92e59ecc9e9aa9cd-0, a`
- `.singleline.font-PTSans.t14 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 142

#### Affected Elements:

- `h1`
- `div[title="Togene går igjen"] > h2`
- `div[title="Togene går igjen"] > .meta`
- `#notice-10574019 > .content > h2`
- `#notice-10574019 > .content > .meta`
- `div[title="Nkom hever beredskapen"] > h2`
- `div[title="Nkom hever beredskapen"] > .meta`
- `#notice-10573998 > .content > h2`
- `#notice-10573998 > .content > .meta`
- `div[title="Tiltalen mot Maduro utvidet"] > h2`
- `div[title="Tiltalen mot Maduro utvidet"] > .meta`
- `#notice-10573954 > .content > h2`
- `#notice-10573954 > .content > .meta`
- `#notice-10573942 > .content > h2`
- `#notice-10573942 > .content > .meta`
- `#notice-10573939 > .content > h2`
- `#notice-10573939 > .content > .meta`
- `#notice-10573852 > .content > h2`
- `#notice-10573852 > .content > .meta`
- `#notice-10573822 > .content > h2`
- `#notice-10573822 > .content > .meta`
- `div[title="Telenor-trøbbel"] > h2`
- `div[title="Telenor-trøbbel"] > .meta`
- `div[title="Lørdag kan Østlandet få snø"] > h2`
- `div[title="Lørdag kan Østlandet få snø"] > .meta`
- `div[title="Elkjøp opplever problemer"] > h2`
- `div[title="Elkjøp opplever problemer"] > .meta`
- `#notice-10573494 > .content > h2`
- `#notice-10573494 > .content > .meta`
- `#notice-10573476 > .content > h2`
- `#notice-10573476 > .content > .meta`
- `#notice-10573161 > .content > h2`
- `time[datetime="2026-10-08T11:36:59.000Z"]`
- `#notice-10572919 > .content > h2`
- `time[datetime="2026-10-08T09:55:43.000Z"]`
- `div[title="Nødetatene med felles øvelse"] > h2`
- `time[datetime="2026-10-08T09:47:05.000Z"]`
- `div[title="SV innkaller til krisemøte"] > h2`
- `time[datetime="2026-10-08T09:47:45.000Z"]`
- `#notice-10572603 > .content > h2`
- `time[datetime="2026-10-08T08:53:31.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(5)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(10)`
- `.row.large-12.small-12:nth-child(11)`
- `.has-row-header`
- `.row.large-12.small-12:nth-child(14)`
- `#offer_4992f7477e94a7ea214a-0, div[ng-show="!terminalError"]`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(17)`
- `.page-content > .border-bg-quinary-light.mobile_border-bg-quinary-light.hasBorder`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.t25.font-InterTight`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(22)`
- `.articlescroller-header.t25.tm18`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.page-content > .border_width_no_border_width.border_width_mobile_no_border_width.mobile_no_border_color`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .lab-scrollbox-headline.t25.font-InterTight`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
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
- `.row.large-12.small-12:nth-child(35)`
- `.lab-scrollbox-headline.t25.tm18`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(40)`
- `.row.large-12.small-12:nth-child(41)`
- `#offer_4992f7477e94a7ea214a-1, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(44)`
- `.row.large-12.small-12:nth-child(45)`
- `.row.large-12.small-12:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(50)`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(55)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(61)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(63)`
- `.row.large-12.small-12:nth-child(64)`
- `.row.large-12.small-12:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(67)`
- `.row.large-12.small-12:nth-child(68)`
- `.row.large-12.small-12:nth-child(69)`
- `.row.large-12.small-12:nth-child(70)`
- `.row.large-12.small-12:nth-child(71)`
- `.row.large-12.small-12:nth-child(72)`
- `.row.large-12.small-12:nth-child(73)`
- `.row.large-12.small-12:nth-child(74)`
- `.row.large-12.small-12:nth-child(75)`
- `.row.large-12.small-12:nth-child(76)`
- `.bg-black`
- `.row.large-12.small-12:nth-child(78)`
- `.row.large-12.small-12:nth-child(79)`
- `.tm20`
- `#article_list_9904930 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(81)`
- `.row.large-12.small-12:nth-child(82)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(83)`
- `.row.large-12.small-12:nth-child(84)`
- `.row.large-12.small-12:nth-child(85)`
- `.row.large-12.small-12:nth-child(86)`
- `.row.large-12.small-12:nth-child(87)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(88)`
- `.row.large-12.small-12:nth-child(89)`
- `#offer_25de92e59ecc9e9aa9cd-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(91)`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `#article_list_10440424 > .content > .scroll-container.swipehelper.snap-container-x`
