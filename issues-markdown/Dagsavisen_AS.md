# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-10-15T05:25:06.322Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 9

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`

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

- `#offer_e64a1fe71b6292cd3ab0-0`
- `iframe[data-testid="embed-iframe"]`
- `#offer_4992f7477e94a7ea214a-0`
- `#offer_4992f7477e94a7ea214a-1`
- `#offer_e64a1fe71b6292cd3ab0-1`

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
- **Count:** 4

#### Affected Elements:

- `#offer_e64a1fe71b6292cd3ab0-0, img`
- `#offer_4992f7477e94a7ea214a-0, img`
- `#offer_4992f7477e94a7ea214a-1, img`
- `#offer_e64a1fe71b6292cd3ab0-1, img`

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
- **Count:** 5

#### Affected Elements:

- `#offer_e64a1fe71b6292cd3ab0-0, a`
- `#offer_4992f7477e94a7ea214a-0, a`
- `#offer_4992f7477e94a7ea214a-1, a`
- `#offer_e64a1fe71b6292cd3ab0-1, a`
- `.singleline.font-PTSans.t14 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 135

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `#notice-10584113 > .content > h2`
- `time[datetime="2026-10-14T18:53:39.000Z"]`
- `#notice-10583989 > .content > h2`
- `time[datetime="2026-10-14T16:53:38.000Z"]`
- `div[title="Mobiltelefon startet dødsbrann"] > h2`
- `time[datetime="2026-10-14T15:14:31.000Z"]`
- `#notice-10583898 > .content > h2`
- `time[datetime="2026-10-14T15:14:03.000Z"]`
- `div[title="Pave Leo bedre etter operasjon"] > h2`
- `time[datetime="2026-10-14T15:06:41.000Z"]`
- `div[title="Netflix sier opp 1000 ansatte"] > h2`
- `time[datetime="2026-10-14T13:55:29.000Z"]`
- `div[title="Overfylte sykehus i Jemen"] > h2`
- `time[datetime="2026-10-14T13:42:50.000Z"]`
- `div[title="Kongo: Over 9000 ebolasmittet"] > h2`
- `time[datetime="2026-10-14T13:41:54.000Z"]`
- `div[title="Skadet etter vådeskudd"] > h2`
- `time[datetime="2026-10-14T13:40:49.000Z"]`
- `div[title="Fem siktet for Nato-bedrageri"] > h2`
- `time[datetime="2026-10-14T12:29:45.000Z"]`
- `#notice-10582565 > .content > h2`
- `#notice-10582565 > .content > .meta`
- `#notice-10582104 > .content > h2`
- `time[datetime="2026-10-14T09:40:19.000Z"]`
- `div[title="Seks døde i uvær i Mexico"] > h2`
- `time[datetime="2026-10-14T07:14:27.000Z"]`
- `#notice-10581908 > .content > h2`
- `time[datetime="2026-10-14T05:51:50.000Z"]`
- `div[title="Kinas eksport øker kraftig"] > h2`
- `time[datetime="2026-10-14T05:42:01.000Z"]`
- `#notice-10581864 > .content > h2`
- `time[datetime="2026-10-14T05:40:14.000Z"]`
- `div[title="Krever endring i skattekutt"] > h2`
- `time[datetime="2026-10-14T05:39:49.000Z"]`
- `#notice-10581862 > .content > h2`
- `time[datetime="2026-10-14T05:39:17.000Z"]`
- `#notice-10581841 > .content > h2`
- `time[datetime="2026-10-14T05:34:22.000Z"]`
- `div[title="Kulen i pavens lunge var kreft"] > h2`
- `time[datetime="2026-10-14T05:28:08.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `#offer_e64a1fe71b6292cd3ab0-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(7)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(10)`
- `.has-row-header`
- `.row.large-12.small-12:nth-child(13)`
- `#offer_4992f7477e94a7ea214a-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(16)`
- `.page-content > .border-bg-quinary-light.mobile_border-bg-quinary-light.hasBorder`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.t25.font-InterTight`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(20)`
- `.row.large-12.small-12:nth-child(21)`
- `.articlescroller-header.t25.tm18`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.mobile_no_border_color.color_mobile_no_bg_color.row:nth-child(23)`
- `.row.large-12.small-12:nth-child(25)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(32)`
- `.t28.lab-scrollbox-headline.font-InterTight`
- `#markup_10478983 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10478981"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10453098 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10453097"] > .mobile_text_align_align-center.align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10453072 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10453073"] > .mobile_text_align_align-center.align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10440435 > .fullwidthTarget.content > unite-player,#status-container`
- `.color_mobile_no_bg_color.mobile_text_align_align-center.align-center > .floatingTextSubset.media > .floatingText`
- `#markup_10440421 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10440420"] > .mobile_text_align_align-center.align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10440430 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10440429"] > .mobile_text_align_align-center.align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10440438 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10440437"] > .mobile_text_align_align-center.align-center.content > .floatingTextSubset.media > .floatingText`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(35)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(40)`
- `#offer_4992f7477e94a7ea214a-1, div[ng-show="!terminalError"]`
- `.bg-white.color_mobile_bg-white.hasContentPadding:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.row.large-12.small-12:nth-child(45)`
- `.row.large-12.small-12:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .lab-scrollbox-headline.t25.font-InterTight`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .scroll-container.swipehelper.snap-container-x`
- `.color_mobile_no_bg_color.row.large-12:nth-child(50)`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.lab-scrollbox-headline.t25.tm18`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(55)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(62)`
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
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(76)`
- `.row.large-12.small-12:nth-child(77)`
- `.row.large-12.small-12:nth-child(78)`
- `.tm20`
- `#article_list_9904930 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.bg-black`
- `.row.large-12.small-12:nth-child(81)`
- `#offer_e64a1fe71b6292cd3ab0-1, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(83)`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `#article_list_10440424 > .content > .scroll-container.swipehelper.snap-container-x`
