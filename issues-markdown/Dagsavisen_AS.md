# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-09-25T03:52:30.637Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 8

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
- **Count:** 4

#### Affected Elements:

- `#offer_f5d28dd56f56b6b28ce4-0`
- `#offer_254dd134cddcdf6c54e6-0`
- `#offer_f5d28dd56f56b6b28ce4-1`
- `iframe[data-testid="embed-iframe"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- `.bg-white.color_mobile_bg-white.has-row-header > h5`
- `.has-row-header.bg-quinary.color_mobile_bg-quinary > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(29) > h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 3

#### Affected Elements:

- `#offer_f5d28dd56f56b6b28ce4-0, img`
- `#offer_254dd134cddcdf6c54e6-0, img`
- `#offer_f5d28dd56f56b6b28ce4-1, img`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.customMenu2`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- `#offer_f5d28dd56f56b6b28ce4-0, a`
- `#offer_254dd134cddcdf6c54e6-0, a`
- `#offer_f5d28dd56f56b6b28ce4-1, a`
- `.singleline.font-PTSans.t14 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 128

#### Affected Elements:

- `h1`
- `div[title="Canada omdøper «Trump Avenue»"] > h2`
- `time[datetime="2026-09-24T20:08:10.000Z"]`
- `#notice-10549860 > .content > h2`
- `time[datetime="2026-09-24T17:58:32.000Z"]`
- `div[title="Sykehus rammet av systemfeil"] > h2`
- `time[datetime="2026-09-24T16:48:26.000Z"]`
- `div[title="Netflix med reklame til Norge"] > h2`
- `time[datetime="2026-09-24T16:35:24.000Z"]`
- `div[title="99 ordførere med dieselprotest"] > h2`
- `time[datetime="2026-09-24T15:20:35.000Z"]`
- `div[title="To angrepet med øks"] > h2`
- `time[datetime="2026-09-24T15:19:08.000Z"]`
- `#notice-10549707 > .content > h2`
- `time[datetime="2026-09-24T14:09:48.000Z"]`
- `div[title="Ni soldater omkom i øvelse"] > h2`
- `time[datetime="2026-09-24T13:11:30.000Z"]`
- `div[title="Mann siktet etter brann"] > h2`
- `time[datetime="2026-09-24T13:09:58.000Z"]`
- `div[title="Innbrudd hos Jon Almaas"] > h2`
- `time[datetime="2026-09-24T12:55:19.000Z"]`
- `#notice-10549267 > .content > h2`
- `time[datetime="2026-09-24T12:56:17.000Z"]`
- `#notice-10549266 > .content > h2`
- `time[datetime="2026-09-24T12:25:23.000Z"]`
- `div[title="Nordmann pågrepet i Thailand"] > h2`
- `div[title="Nordmann pågrepet i Thailand"] > .meta`
- `#notice-10548859 > .content > h2`
- `#notice-10548859 > .content > .meta`
- `div[title="Rødt vil kutte matmomsen"] > h2`
- `div[title="Rødt vil kutte matmomsen"] > .meta`
- `#notice-10548185 > .content > h2`
- `#notice-10548185 > .content > .meta`
- `#notice-10547852 > .content > h2`
- `#notice-10547852 > .content > .meta`
- `#notice-10547851 > .content > h2`
- `#notice-10547851 > .content > .meta`
- `#notice-10547660 > .content > h2`
- `#notice-10547660 > .content > .meta`
- `#notice-10547582 > .content > h2`
- `#notice-10547582 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.bg-white.color_mobile_bg-white.hasContentPadding:nth-child(4)`
- `.row.large-12.small-12:nth-child(5)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.bg-white.color_mobile_bg-white.has-row-header`
- `.row.large-12.small-12:nth-child(10)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(13)`
- `#offer_f5d28dd56f56b6b28ce4-0, div[ng-show="!terminalError"]`
- `.has-row-header.bg-quinary.color_mobile_bg-quinary`
- `.page-content > .border-bg-quinary-light.mobile_border-bg-quinary-light.hasBorder`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.t25.font-InterTight`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(19)`
- `.bg-black`
- `.articlescroller-header.t25.tm18`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.page-content > .border_width_no_border_width.border_width_mobile_no_border_width.mobile_no_border_color`
- `#offer_254dd134cddcdf6c54e6-0, div[ng-show="!terminalError"]`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .lab-scrollbox-headline.t25.font-InterTight`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
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
- `#offer_f5d28dd56f56b6b28ce4-1, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
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
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(68)`
- `.row.large-12.small-12:nth-child(69)`
- `.row.large-12.small-12:nth-child(70)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(71)`
- `.row.large-12.small-12:nth-child(72)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(73)`
- `.row.large-12.small-12:nth-child(74)`
- `.tm20`
- `#article_list_9904930 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(78)`
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `#article_list_10440424 > .content > .scroll-container.swipehelper.snap-container-x`
