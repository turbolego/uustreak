# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-11-03T05:39:44.507Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 5

#### Affected Elements:

- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `#offer_c8928054870bf8449e7e-0, .pw-button`
- `#offer_c8928054870bf8449e7e-2, .pw-button`
- `#offer_c8928054870bf8449e7e-3, .pw-button`
- `#offer_c8928054870bf8449e7e-1, .pw-button`

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
- **Count:** 6

#### Affected Elements:

- `#offer_c8928054870bf8449e7e-0`
- `#offer_c8928054870bf8449e7e-2`
- `iframe[data-testid="embed-iframe"]`
- `#offer_c8928054870bf8449e7e-3`
- `#offer_c8928054870bf8449e7e-1`
- `#offer_59f21cedc04d31bdab4d-0`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `h5`

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
- **Count:** 1

#### Affected Elements:

- `.singleline.font-PTSans.t14 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 144

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `div[title="Netanyahu foreslår seg selv "] > h2`
- `time[datetime="2026-11-02T21:08:32.000Z"]`
- `#notice-10613089 > .content > h2`
- `time[datetime="2026-11-02T20:31:46.000Z"]`
- `div[title="Boligprisene nedjusteres"] > h2`
- `time[datetime="2026-11-02T20:29:27.000Z"]`
- `#notice-10613055 > .content > h2`
- `time[datetime="2026-11-02T19:17:19.000Z"]`
- `div[title="Ny varmerekord på Sørlandet"] > h2`
- `time[datetime="2026-11-02T17:45:04.000Z"]`
- `#notice-10613014 > .content > h2`
- `time[datetime="2026-11-02T17:43:40.000Z"]`
- `#notice-10612968 > .content > h2`
- `time[datetime="2026-11-02T16:19:35.000Z"]`
- `#notice-10612696 > .content > h2`
- `time[datetime="2026-11-02T14:13:17.000Z"]`
- `#notice-10612517 > .content > h2`
- `time[datetime="2026-11-02T13:29:12.000Z"]`
- `#notice-10612250 > .content > h2`
- `time[datetime="2026-11-02T12:15:47.000Z"]`
- `#notice-10612159 > .content > h2`
- `time[datetime="2026-11-02T12:04:46.000Z"]`
- `#notice-10612028 > .content > h2`
- `time[datetime="2026-11-02T11:01:14.000Z"]`
- `#notice-10612027 > .content > h2`
- `time[datetime="2026-11-02T11:00:41.000Z"]`
- `#notice-10611773 > .content > h2`
- `time[datetime="2026-11-02T09:35:45.000Z"]`
- `#notice-10611514 > .content > h2`
- `time[datetime="2026-11-02T08:16:08.000Z"]`
- `#notice-10611472 > .content > h2`
- `time[datetime="2026-11-02T07:51:08.000Z"]`
- `div[title="Venezuelas hær angrep gerilja"] > h2`
- `time[datetime="2026-11-02T06:24:08.000Z"]`
- `#notice-10611390 > .content > h2`
- `#notice-10611390 > .content > .meta`
- `#notice-10611335 > .content > h2`
- `time[datetime="2026-11-01T20:52:37.000Z"]`
- `#notice-10611329 > .content > h2`
- `time[datetime="2026-11-02T11:29:01.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(5)`
- `.row.large-12.small-12:nth-child(7)`
- `.has-row-header`
- `.row.large-12.small-12:nth-child(9)`
- `#offer_c8928054870bf8449e7e-0, img`
- `#offer_c8928054870bf8449e7e-0, .pw-text`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(13)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(14)`
- `#offer_c8928054870bf8449e7e-2, img`
- `#offer_c8928054870bf8449e7e-2, .pw-text`
- `.border-bg-quinary-light.mobile_border-bg-quinary-light.border-side-top`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .lab-scrollbox-headline.t25.font-InterTight`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(20)`
- `.row.large-12.small-12:nth-child(21)`
- `.articlescroller-header.t25.tm18`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.mobile_no_border_color.color_mobile_no_bg_color.row:nth-child(23)`
- `.row.large-12.small-12:nth-child(25)`
- `.lab-scrollbox-headline.t25.tm18`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(27)`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.t25.font-InterTight`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.lab-scrollbox-headline.t28.font-InterTight`
- `#markup_10603102 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10603099"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10603074 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10603073"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10602266 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10602265"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10603093 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10603092"] > .content > .floatingTextSubset.media > .floatingText`
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
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(35)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(40)`
- `#offer_c8928054870bf8449e7e-3, img`
- `#offer_c8928054870bf8449e7e-3, .pw-text`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.row.large-12.small-12:nth-child(45)`
- `.row.large-12.small-12:nth-child(46)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(47)`
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
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(68)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(70)`
- `.row.large-12.small-12:nth-child(71)`
- `.page-content > .bg-black.color_mobile_bg-black.hasContentPadding`
- `.row.large-12.small-12:nth-child(73)`
- `#offer_c8928054870bf8449e7e-1, img`
- `#offer_c8928054870bf8449e7e-1, .pw-text`
- `.row.large-12.small-12:nth-child(75)`
- `#offer_59f21cedc04d31bdab4d-0, img`
- `#offer_59f21cedc04d31bdab4d-0, .pw-subtitle`
- `#offer_59f21cedc04d31bdab4d-0, .pw-offer`
- `#offer_59f21cedc04d31bdab4d-0, #pw-countdown`
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

- `#article_list_10440424 > .content > .scroll-container.swipehelper.snap-container-x`
