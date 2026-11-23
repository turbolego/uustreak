# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-11-23T06:11:41.459Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 8

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.text_singleline.large-8.large-abs-8 > .singleline`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 5

#### Affected Elements:

- `#offer_00c7379d983c39c932ac-0`
- `#offer_59dc168a95d88c084eeb-0`
- `iframe[data-testid="embed-iframe"]`
- `#offer_59dc168a95d88c084eeb-1`
- `#offer_00c7379d983c39c932ac-1`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 4

#### Affected Elements:

- `#offer_00c7379d983c39c932ac-0, img`
- `#offer_59dc168a95d88c084eeb-0, img`
- `#offer_59dc168a95d88c084eeb-1, img`
- `#offer_00c7379d983c39c932ac-1, img`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.customMenu2`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 5

#### Affected Elements:

- `#offer_00c7379d983c39c932ac-0, a`
- `#offer_59dc168a95d88c084eeb-0, a`
- `#offer_59dc168a95d88c084eeb-1, a`
- `#offer_00c7379d983c39c932ac-1, a`
- `.singleline.font-PTSans.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 161

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `#notice-10646371 > .content > h2`
- `#notice-10646371 > .content > .meta`
- `#notice-10646364 > .content > h2`
- `#notice-10646364 > .content > .meta`
- `#notice-10646363 > .content > h2`
- `#notice-10646363 > .content > .meta`
- `#notice-10646345 > .content > h2`
- `#notice-10646345 > .content > .meta`
- `#notice-10646274 > .content > h2`
- `time[datetime="2026-11-22T16:33:32.000Z"]`
- `#notice-10646221 > .content > h2`
- `time[datetime="2026-11-22T15:50:42.000Z"]`
- `#notice-10646220 > .content > h2`
- `time[datetime="2026-11-22T15:47:57.000Z"]`
- `#notice-10646219 > .content > h2`
- `time[datetime="2026-11-22T15:46:28.000Z"]`
- `#notice-10646140 > .content > h2`
- `time[datetime="2026-11-22T14:58:17.000Z"]`
- `#notice-10646054 > .content > h2`
- `time[datetime="2026-11-22T12:53:12.000Z"]`
- `#notice-10645984 > .content > h2`
- `time[datetime="2026-11-22T12:26:59.000Z"]`
- `#notice-10645888 > .content > h2`
- `time[datetime="2026-11-22T11:46:23.000Z"]`
- `#notice-10645860 > .content > h2`
- `time[datetime="2026-11-22T11:10:38.000Z"]`
- `#notice-10645821 > .content > h2`
- `time[datetime="2026-11-22T11:10:00.000Z"]`
- `#notice-10645735 > .content > h2`
- `time[datetime="2026-11-22T09:14:53.000Z"]`
- `#notice-10645728 > .content > h2`
- `time[datetime="2026-11-22T09:12:47.000Z"]`
- `div[title="SV lanserer nytt slagord"] > h2`
- `time[datetime="2026-11-21T19:27:09.000Z"]`
- `#notice-10645642 > .content > h2`
- `time[datetime="2026-11-21T18:34:08.000Z"]`
- `#notice-10645617 > .content > h2`
- `time[datetime="2026-11-21T16:28:33.000Z"]`
- `div[title="ID-porten er oppe igjen"] > h2`
- `time[datetime="2026-11-21T15:57:53.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(5)`
- `.row.large-12.small-12:nth-child(7)`
- `.bg-primary`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(9)`
- `#offer_00c7379d983c39c932ac-0, div[ng-show="!terminalError"]`
- `.bg-secondary.color_mobile_bg-secondary.hasContentPadding`
- `.articlescroller-header.t34.font-InterTight`
- `#article_list_10643235 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(14)`
- `#offer_59dc168a95d88c084eeb-0, div[ng-show="!terminalError"]`
- `.color_mobile_bg-quaternary`
- `.border-bg-quinary-light.mobile_border-bg-quinary-light.hasBorder > ul`
- `.border-bg-quinary-light.mobile_border-bg-quinary-light.border-side-top > .columns.large-4.large-abs-4`
- `#markup_9880678`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .lab-scrollbox-headline.t25.font-InterTight`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(20)`
- `.has-row-header`
- `.articlescroller-header.t25.tm18`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.bg-white.color_mobile_bg-white.hasContentPadding:nth-child(23)`
- `.mobile_no_border_color.color_mobile_no_bg_color.row:nth-child(25)`
- `.lab-scrollbox-headline.t25.tm18`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(27)`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.t25.font-InterTight`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.lab-scrollbox-headline.t28.font-InterTight`
- `#markup_10644340 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10644339"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10644332 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10644331"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10644334 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10644333"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10614273 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614272"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10614253 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614252"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10614255 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614254"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10614257 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614256"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10614251 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614250"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10614259 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614258"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10614261 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614260"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10614263 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614262"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10614265 > .fullwidthTarget.content > unite-player,#status-container`
- `.color_mobile_no_bg_color.align-center.mobile_text_align_align-center > .floatingTextSubset.media > .floatingText`
- `#markup_10614267 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614266"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10614269 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614268"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10614271 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614270"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(35)`
- `.row.large-12.small-12:nth-child(37)`
- `.bg-white.color_mobile_bg-white.hasContentPadding:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(40)`
- `#offer_59dc168a95d88c084eeb-1, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(43)`
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
- `.row.large-12.small-12:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.row.large-12.small-12:nth-child(64)`
- `.row.large-12.small-12:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.row.large-12.small-12:nth-child(67)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(68)`
- `.row.large-12.small-12:nth-child(69)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(70)`
- `.row.large-12.small-12:nth-child(71)`
- `.row.large-12.small-12:nth-child(72)`
- `.row.large-12.small-12:nth-child(73)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(74)`
- `.row.large-12.small-12:nth-child(75)`
- `.row.large-12.small-12:nth-child(76)`
- `.row.large-12.small-12:nth-child(77)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.tm20`
- `#article_list_9904930 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(80)`
- `.row.large-12.small-12:nth-child(81)`
- `.row.large-12.small-12:nth-child(82)`
- `.row.large-12.small-12:nth-child(83)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(84)`
- `.row.large-12.small-12:nth-child(85)`
- `.row.large-12.small-12:nth-child(86)`
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(88)`
- `#offer_00c7379d983c39c932ac-1, div[ng-show="!terminalError"]`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `#article_list_10614247 > .content > .scroll-container.swipehelper.snap-container-x`
