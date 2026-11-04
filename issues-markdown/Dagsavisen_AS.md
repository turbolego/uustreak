# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-11-04T05:11:16.957Z
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
- **Count:** 2

#### Affected Elements:

- `.has-row-header.row.large-12:nth-child(2) > h5`
- `.has-row-header.bg-white.color_mobile_bg-white > h5`

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
- **Count:** 149

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `#notice-10615711 > .content > h2`
- `time[datetime="2026-11-04T04:37:18.000Z"]`
- `#notice-10615710 > .content > h2`
- `time[datetime="2026-11-04T04:36:47.000Z"]`
- `#notice-10615570 > .content > h2`
- `time[datetime="2026-11-03T20:40:37.000Z"]`
- `#notice-10615569 > .content > h2`
- `time[datetime="2026-11-03T20:38:52.000Z"]`
- `#notice-10615502 > .content > h2`
- `time[datetime="2026-11-03T19:26:35.000Z"]`
- `#notice-10615499 > .content > h2`
- `time[datetime="2026-11-03T19:25:19.000Z"]`
- `#notice-10615488 > .content > h2`
- `time[datetime="2026-11-03T19:02:04.000Z"]`
- `div[title="Humanistpris til Bals og Tromp"] > h2`
- `time[datetime="2026-11-03T17:24:55.000Z"]`
- `#notice-10615418 > .content > h2`
- `time[datetime="2026-11-03T17:20:27.000Z"]`
- `div[title="SV mest fram på ny måling"] > h2`
- `time[datetime="2026-11-03T17:06:58.000Z"]`
- `div[title="Opel-eier? Kom deg på verksted"] > h2`
- `time[datetime="2026-11-03T16:14:01.000Z"]`
- `div[title="Audun Tjomsland er død"] > h2`
- `time[datetime="2026-11-03T16:12:25.000Z"]`
- `#notice-10614645 > .content > h2`
- `time[datetime="2026-11-03T12:52:58.000Z"]`
- `div[title="Jens Stoltenberg er i Kyiv"] > h2`
- `time[datetime="2026-11-03T12:53:20.000Z"]`
- `#notice-10614017 > .content > h2`
- `time[datetime="2026-11-03T12:06:43.000Z"]`
- `div[title="Varmeste oktober siden 2000"] > h2`
- `time[datetime="2026-11-03T08:29:15.000Z"]`
- `#notice-10613494 > .content > h2`
- `time[datetime="2026-11-03T08:25:56.000Z"]`
- `#notice-10613367 > .content > h2`
- `time[datetime="2026-11-03T09:42:13.000Z"]`
- `div[title="DNB øker prisene på bankkort"] > h2`
- `time[datetime="2026-11-03T07:46:25.000Z"]`
- `#notice-10613259 > .content > h2`
- `time[datetime="2026-11-03T07:04:21.000Z"]`
- `.has-row-header.row.large-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(5)`
- `.has-row-header.bg-white.color_mobile_bg-white`
- `.row.large-12.small-12:nth-child(8)`
- `#offer_c8928054870bf8449e7e-0, img`
- `#offer_c8928054870bf8449e7e-0, .pw-text`
- `.row.large-12.small-12:nth-child(10)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(13)`
- `#offer_c8928054870bf8449e7e-2, img`
- `#offer_c8928054870bf8449e7e-2, .pw-text`
- `.border-bg-quinary-light.mobile_border-bg-quinary-light.border-side-top`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .lab-scrollbox-headline.t25.font-InterTight`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(19)`
- `.row.large-12.small-12:nth-child(20)`
- `.articlescroller-header.t25.tm18`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.mobile_no_border_color.color_mobile_no_bg_color.row:nth-child(22)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(23)`
- `.lab-scrollbox-headline.t25.tm18`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(26)`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.t25.font-InterTight`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(31)`
- `.lab-scrollbox-headline.t28.font-InterTight`
- `#markup_10614273 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614272"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10614251 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614250"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10614253 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614252"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10614255 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614254"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10614257 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614256"] > .content > .floatingTextSubset.media > .floatingText`
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
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(35)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `#offer_c8928054870bf8449e7e-3, img`
- `#offer_c8928054870bf8449e7e-3, .pw-text`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.row.large-12.small-12:nth-child(45)`
- `.row.large-12.small-12:nth-child(46)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(47)`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(50)`
- `.row.large-12.small-12:nth-child(51)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(55)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(58)`
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
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articlescroller-header.mobile_text_align_align-left.align-left`
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(71)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(73)`
- `.row.large-12.small-12:nth-child(74)`
- `.page-content > .bg-black.color_mobile_bg-black.hasContentPadding`
- `.row.large-12.small-12:nth-child(76)`
- `#offer_c8928054870bf8449e7e-1, img`
- `#offer_c8928054870bf8449e7e-1, .pw-text`
- `.tm20`
- `#article_list_9904930 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(79)`
- `#offer_59f21cedc04d31bdab4d-0, img`
- `#offer_59f21cedc04d31bdab4d-0, .pw-subtitle`
- `#offer_59f21cedc04d31bdab4d-0, .pw-offer`
- `#offer_59f21cedc04d31bdab4d-0, #pw-countdown`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `#article_list_10614247 > .content > .scroll-container.swipehelper.snap-container-x`
