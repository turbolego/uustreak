# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-09-26T03:51:56.065Z
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
- **Count:** 119

#### Affected Elements:

- `h1`
- `div[title="Børge Brende ute av toppverv"] > h2`
- `time[datetime="2026-09-25T20:14:20.000Z"]`
- `#notice-10552082 > .content > h2`
- `time[datetime="2026-09-25T19:55:51.000Z"]`
- `div[title="Trump varsler Kina-besøk"] > h2`
- `time[datetime="2026-09-25T18:29:00.000Z"]`
- `div[title="Milliontap for Øyafestivalen"] > h2`
- `time[datetime="2026-09-25T18:09:26.000Z"]`
- `div[title="Vil ha kong Harald-gate"] > h2`
- `time[datetime="2026-09-25T17:35:37.000Z"]`
- `div[title="Oslo vil innføre cruise-skatt"] > h2`
- `time[datetime="2026-09-25T16:36:25.000Z"]`
- `div[title="Ed Sheeran avlyser konsert"] > h2`
- `time[datetime="2026-09-25T15:23:12.000Z"]`
- `div[title="TV-kanaler dekker Trump igjen"] > h2`
- `time[datetime="2026-09-25T14:33:00.000Z"]`
- `div[title="Equinor forbyr smartbriller"] > h2`
- `time[datetime="2026-09-25T14:31:28.000Z"]`
- `#notice-10551595 > .content > h2`
- `time[datetime="2026-09-25T12:53:23.000Z"]`
- `#notice-10551587 > .content > h2`
- `time[datetime="2026-09-25T14:29:29.000Z"]`
- `div[title="Eksplosjon i Aten – fem savnet"] > h2`
- `div[title="Eksplosjon i Aten – fem savnet"] > .meta`
- `div[title="Mann siktet for drap i Oslo"] > h2`
- `div[title="Mann siktet for drap i Oslo"] > .meta`
- `#notice-10550832 > .content > h2`
- `#notice-10550832 > .content > .meta`
- `#notice-10550414 > .content > h2`
- `#notice-10550414 > .content > .meta`
- `#notice-10550156 > .content > h2`
- `#notice-10550156 > .content > .meta`
- `#notice-10550155 > .content > h2`
- `#notice-10550155 > .content > .meta`
- `div[title="Canada omdøper «Trump Avenue»"] > h2`
- `time[datetime="2026-09-24T20:08:10.000Z"]`
- `#notice-10549860 > .content > h2`
- `time[datetime="2026-09-24T17:58:32.000Z"]`
- `div[title="Sykehus rammet av systemfeil"] > h2`
- `time[datetime="2026-09-24T16:48:26.000Z"]`
- `.color_mobile_no_bg_color.row.large-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(5)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.bg-white.color_mobile_bg-white.hasContentPadding:nth-child(9)`
- `.bg-white.color_mobile_bg-white.has-row-header`
- `.row.large-12.small-12:nth-child(11)`
- `#offer_f5d28dd56f56b6b28ce4-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(14)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(15)`
- `.page-content > .border-bg-quinary-light.mobile_border-bg-quinary-light.hasBorder`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.t25.font-InterTight`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(19)`
- `.bg-black`
- `.articlescroller-header.t25.tm18`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.page-content > .border_width_no_border_width.border_width_mobile_no_border_width.mobile_no_border_color`
- `.row.large-12.small-12:nth-child(23)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .lab-scrollbox-headline.t25.font-InterTight`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(26)`
- `.has-row-header.bg-quinary.color_mobile_bg-quinary`
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
- `#offer_254dd134cddcdf6c54e6-0, div[ng-show="!terminalError"]`
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
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(64)`
- `.row.large-12.small-12:nth-child(65)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(66)`
- `.row.large-12.small-12:nth-child(67)`
- `.tm20`
- `#article_list_9904930 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `#article_list_10440424 > .content > .scroll-container.swipehelper.snap-container-x`
