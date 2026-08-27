# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-08-27T07:41:23.923Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- `span[data-lab-font_weight_desktop="font-weight-black"] > .tertiary.color_mobile_tertiary[data-lab-text_color_desktop="tertiary"]`
- `#offer_c8928054870bf8449e7e-0, .pw-button`
- `#offer_c8928054870bf8449e7e-1, .pw-button`

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

- `iframe[data-testid="embed-iframe"]`
- `#offer_c8928054870bf8449e7e-0`
- `#offer_c8928054870bf8449e7e-1`
- `#offer_59f21cedc04d31bdab4d-0`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 6

#### Affected Elements:

- `.bg-white > h5`
- `.has-row-header.bg-quinary.color_mobile_bg-quinary > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52) > h5`
- `.has-row-header.color_mobile_bg-quaternary.bg-quaternary:nth-child(85) > h5`
- `.has-row-header.color_mobile_bg-quaternary.bg-quaternary:nth-child(92) > h5`

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

- `.singleline.font-PTSans.t14 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 169

#### Affected Elements:

- `h1`
- `#notice-10498564 > .content > h2`
- `time[datetime="2026-08-27T06:37:29.000Z"]`
- `#notice-10498555 > .content > h2`
- `time[datetime="2026-08-27T06:02:54.000Z"]`
- `#notice-10498493 > .content > h2`
- `time[datetime="2026-08-27T05:08:21.000Z"]`
- `div[title="Hormuzstredet: Skip angrepet"] > h2`
- `time[datetime="2026-08-27T05:06:57.000Z"]`
- `div[title="Yayoi Kusama er død"] > h2`
- `time[datetime="2026-08-27T05:05:56.000Z"]`
- `#notice-10498419 > .content > h2`
- `time[datetime="2026-08-26T19:07:34.000Z"]`
- `#notice-10498370 > .content > h2`
- `time[datetime="2026-08-26T18:34:09.000Z"]`
- `div[title="Putin vil trappe opp angrepene"] > h2`
- `time[datetime="2026-08-26T16:55:02.000Z"]`
- `div[title="Tim Curry er død"] > h2`
- `time[datetime="2026-08-26T15:55:30.000Z"]`
- `#notice-10498169 > .content > h2`
- `time[datetime="2026-08-26T14:58:00.000Z"]`
- `div[title="Treg økonomisk vekst i USA"] > h2`
- `time[datetime="2026-08-26T14:55:26.000Z"]`
- `#notice-10497932 > .content > h2`
- `time[datetime="2026-08-26T13:36:50.000Z"]`
- `div[title="Tromsø kommune på Robek-listen"] > h2`
- `time[datetime="2026-08-26T13:09:46.000Z"]`
- `div[title="Europa dropper Fifa-boikott"] > h2`
- `time[datetime="2026-08-26T12:43:37.000Z"]`
- `#notice-10497499 > .content > h2`
- `time[datetime="2026-08-26T12:36:17.000Z"]`
- `#notice-10497181 > .content > h2`
- `time[datetime="2026-08-26T11:09:51.000Z"]`
- `div[title="Zelenskyj hedrer Elon Musk"] > h2`
- `time[datetime="2026-08-26T11:31:18.000Z"]`
- `#notice-10497155 > .content > h2`
- `time[datetime="2026-08-26T11:00:31.000Z"]`
- `div[title="Norsk kvinne døde i Thailand"] > h2`
- `time[datetime="2026-08-26T10:59:22.000Z"]`
- `#notice-10496984 > .content > h2`
- `time[datetime="2026-08-26T09:50:22.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `iframe[data-testid="embed-iframe"], .EpisodeOrShowWidget_coverArtContainer__65Ei9`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-small.encore-internal-color-text-subdued.e-10682-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `iframe[data-testid="embed-iframe"], label`
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(11)`
- `.bg-white`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(14)`
- `.row.large-12.small-12:nth-child(16)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.font-PTSans.align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.page-content > .bg-primary.color_mobile_bg-primary.hasContentPadding`
- `.page-content > .border_width_no_border_width.border_width_mobile_no_border_width.mobile_no_border_color`
- `.page-content > .border-bg-quaternary.mobile_border-bg-quaternary.hasBorder`
- `#offer_c8928054870bf8449e7e-0, img`
- `#offer_c8928054870bf8449e7e-0, .pw-text`
- `.row.large-12.small-12:nth-child(27)`
- `#article_list_10230577 > .content > .lab-scrollbox-headline.font-PTSans.t25`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.t28.lab-scrollbox-headline.font-weight-normal`
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
- `#article_list_10184114 > .content > .lab-scrollbox-headline.font-PTSans.t25`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(42)`
- `.has-row-header.bg-quinary.color_mobile_bg-quinary`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(48)`
- `#offer_c8928054870bf8449e7e-1, img`
- `#offer_c8928054870bf8449e7e-1, .pw-text`
- `.row.large-12.small-12:nth-child(51)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(54)`
- `#offer_59f21cedc04d31bdab4d-0, img`
- `#offer_59f21cedc04d31bdab4d-0, .pw-subtitle`
- `#offer_59f21cedc04d31bdab4d-0, .pw-offer`
- `#offer_59f21cedc04d31bdab4d-0, #pw-countdown`
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
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(70)`
- `.row.large-12.small-12:nth-child(71)`
- `.row.large-12.small-12:nth-child(72)`
- `.row.large-12.small-12:nth-child(73)`
- `.row.large-12.small-12:nth-child(74)`
- `.row.large-12.small-12:nth-child(75)`
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(76)`
- `.bg-black.color_mobile_bg-black.t34`
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
- `.row.large-12.small-12:nth-child(78)`
- `.row.large-12.small-12:nth-child(79)`
- `.row.large-12.small-12:nth-child(80)`
- `.row.large-12.small-12:nth-child(81)`
- `.row.large-12.small-12:nth-child(82)`
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(83)`
- `.row.large-12.small-12:nth-child(84)`
- `.has-row-header.color_mobile_bg-quaternary.bg-quaternary:nth-child(85)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(86)`
- `.row.large-12.small-12:nth-child(87)`
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(88)`
- `.row.large-12.small-12:nth-child(89)`
- `.row.large-12.small-12:nth-child(90)`
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(91)`
- `.has-row-header.color_mobile_bg-quaternary.bg-quaternary:nth-child(92)`
- `.row.large-12.small-12:nth-child(93)`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `#article_list_10440424 > .content > .scroll-container.swipehelper.snap-container-x`
