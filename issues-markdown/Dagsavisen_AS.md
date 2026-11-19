# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-11-19T06:36:04.451Z
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
- **Count:** 140

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `div[title="Stadig færre får ta doktorgrad"] > h2`
- `time[datetime="2026-11-19T06:29:48.000Z"]`
- `div[title="Musk angrer på pengebruken"] > h2`
- `time[datetime="2026-11-19T06:28:30.000Z"]`
- `div[title="Nytt angrep mot Krym-broen"] > h2`
- `time[datetime="2026-11-19T06:27:58.000Z"]`
- `#notice-10641011 > .content > h2`
- `#notice-10641011 > .content > .meta`
- `#notice-10641002 > .content > h2`
- `#notice-10641002 > .content > .meta`
- `#notice-10640936 > .content > h2`
- `#notice-10640936 > .content > .meta`
- `div[title="Israel med ny Gaza-offensiv"] > h2`
- `div[title="Israel med ny Gaza-offensiv"] > .meta`
- `#notice-10640551 > .content > h2`
- `#notice-10640551 > .content > .meta`
- `#notice-10640522 > .content > h2`
- `#notice-10640522 > .content > .meta`
- `#notice-10640454 > .content > h2`
- `#notice-10640454 > .content > .meta`
- `div[title="Trump møtte diktatorfrue"] > h2`
- `time[datetime="2026-11-18T11:10:04.000Z"]`
- `div[title="Trump har ankommet Kina"] > h2`
- `time[datetime="2026-11-18T09:19:03.000Z"]`
- `div[title="Målte under 24 minusgrader"] > h2`
- `time[datetime="2026-11-18T08:46:15.000Z"]`
- `#notice-10639289 > .content > h2`
- `time[datetime="2026-11-18T09:49:14.000Z"]`
- `#notice-10639144 > .content > h2`
- `time[datetime="2026-11-18T07:56:09.000Z"]`
- `div[title="Advarer mot GTA VI-svindel"] > h2`
- `time[datetime="2026-11-18T07:38:15.000Z"]`
- `#notice-10639020 > .content > h2`
- `time[datetime="2026-11-18T06:26:33.000Z"]`
- `#notice-10639015 > .content > h2`
- `time[datetime="2026-11-18T06:25:10.000Z"]`
- `div[title="Dovrebanen åpen igjen"] > h2`
- `time[datetime="2026-11-18T06:20:18.000Z"]`
- `#notice-10638851 > .content > h2`
- `#notice-10638851 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(5)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `#offer_00c7379d983c39c932ac-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(13)`
- `.row.large-12.small-12:nth-child(14)`
- `#offer_59dc168a95d88c084eeb-0, div[ng-show="!terminalError"]`
- `.color_mobile_bg-quaternary`
- `.border-bg-quinary-light.mobile_border-bg-quinary-light.hasBorder > ul`
- `.border-bg-quinary-light.mobile_border-bg-quinary-light.hasBorder > .columns.large-4.large-abs-4`
- `#markup_9880678`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .lab-scrollbox-headline.t25.font-InterTight`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(20)`
- `.has-row-header`
- `.articlescroller-header.t25.tm18`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(23)`
- `.mobile_no_border_color.color_mobile_no_bg_color.row:nth-child(25)`
- `.lab-scrollbox-headline.t25.tm18`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(27)`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.t25.font-InterTight`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.lab-scrollbox-headline.t28.font-InterTight`
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
- `.color_mobile_no_bg_color.row.large-12:nth-child(35)`
- `.row.large-12.small-12:nth-child(37)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(40)`
- `#offer_59dc168a95d88c084eeb-1, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(43)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(44)`
- `.row.large-12.small-12:nth-child(45)`
- `.row.large-12.small-12:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(50)`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(53)`
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
- `.row.large-12.small-12:nth-child(68)`
- `.row.large-12.small-12:nth-child(69)`
- `.row.large-12.small-12:nth-child(70)`
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(72)`
- `#offer_00c7379d983c39c932ac-1, div[ng-show="!terminalError"]`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.tm20`
- `#article_list_9904930 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `#article_list_10614247 > .content > .scroll-container.swipehelper.snap-container-x`
