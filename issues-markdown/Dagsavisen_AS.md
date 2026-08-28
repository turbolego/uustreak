# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-08-28T09:54:23.257Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

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
- `#offer_59f21cedc04d31bdab4d-0`
- `#offer_c8928054870bf8449e7e-1`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 6

#### Affected Elements:

- `.bg-black-light > h5`
- `.has-row-header.bg-quinary.color_mobile_bg-quinary:nth-child(48) > h5`
- `.has-row-header.bg-quinary.color_mobile_bg-quinary:nth-child(53) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(55) > h5`
- `.has-row-header.color_mobile_bg-quaternary.bg-quaternary:nth-child(87) > h5`
- `.has-row-header.color_mobile_bg-quaternary.bg-quaternary:nth-child(94) > h5`

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
- **Count:** 171

#### Affected Elements:

- `h1`
- `div[title="Den nye kongen i statsråd"] > h2`
- `div[title="Den nye kongen i statsråd"] > .meta`
- `#notice-10502271 > .content > h2`
- `time[datetime="2026-08-28T09:16:14.000Z"]`
- `div[title="Nasjonal sørgeperiode"] > h2`
- `time[datetime="2026-08-28T09:02:49.000Z"]`
- `div[title="Hedrer kong Harald med salutt"] > h2`
- `time[datetime="2026-08-28T08:21:53.000Z"]`
- `div[title="Kirkene åpner dørene"] > h2`
- `time[datetime="2026-08-28T07:47:58.000Z"]`
- `#notice-10501721 > .content > h2`
- `time[datetime="2026-08-28T07:28:52.000Z"]`
- `div[title="Stoltenberg: Leve kong Haakon"] > h2`
- `time[datetime="2026-08-28T07:27:27.000Z"]`
- `#notice-10501648 > .content > h2`
- `time[datetime="2026-08-28T07:01:30.000Z"]`
- `div[title="Nepal: Innsjø flommet over"] > h2`
- `time[datetime="2026-08-28T06:48:02.000Z"]`
- `div[title="USA: Ice kjøper sjokkhansker"] > h2`
- `time[datetime="2026-08-28T05:34:52.000Z"]`
- `#notice-10501443 > .content > h2`
- `time[datetime="2026-08-28T05:17:21.000Z"]`
- `div[title="Diakonhjemmet: Streiken over"] > h2`
- `time[datetime="2026-08-28T05:16:15.000Z"]`
- `div[title="Warholm mistet verdensrekorden"] > h2`
- `time[datetime="2026-08-27T19:29:10.000Z"]`
- `#notice-10501291 > .content > h2`
- `time[datetime="2026-08-27T19:03:39.000Z"]`
- `div[title="Morgenbladet utsetter avis"] > h2`
- `time[datetime="2026-08-27T18:40:46.000Z"]`
- `#notice-10501287 > .content > h2`
- `time[datetime="2026-08-27T18:40:20.000Z"]`
- `#notice-10501204 > .content > h2`
- `time[datetime="2026-08-27T17:44:47.000Z"]`
- `#notice-10501147 > .content > h2`
- `time[datetime="2026-08-27T17:02:05.000Z"]`
- `div[title="Øyehaug vinner Aschehougprisen"] > h2`
- `time[datetime="2026-08-27T16:49:10.000Z"]`
- `#notice-10501123 > .content > h2`
- `time[datetime="2026-08-27T16:11:15.000Z"]`
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
- `.row.large-12.small-12:nth-child(12)`
- `.bg-black-light`
- `.row.large-12.small-12:nth-child(14)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(18)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.font-PTSans.t25`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(21)`
- `.page-content > .border_width_no_border_width.border_width_mobile_no_border_width.mobile_no_border_color`
- `.page-content > .border-bg-quaternary.mobile_border-bg-quaternary.hasBorder`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `#article_list_10230577 > .content > .lab-scrollbox-headline.font-PTSans.t25`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
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
- `.row.large-12.small-12:nth-child(33)`
- `#article_list_10184114 > .content > .lab-scrollbox-headline.font-PTSans.t25`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.color_mobile_bg-primary`
- `#offer_c8928054870bf8449e7e-0, img`
- `#offer_c8928054870bf8449e7e-0, .pw-text`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(42)`
- `.row.large-12.small-12:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(47)`
- `.has-row-header.bg-quinary.color_mobile_bg-quinary:nth-child(48)`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.has-row-header.bg-quinary.color_mobile_bg-quinary:nth-child(53)`
- `#offer_59f21cedc04d31bdab4d-0, img`
- `#offer_59f21cedc04d31bdab4d-0, .pw-subtitle`
- `#offer_59f21cedc04d31bdab4d-0, .pw-offer`
- `#offer_59f21cedc04d31bdab4d-0, #pw-countdown`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(55)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `#offer_c8928054870bf8449e7e-1, img`
- `#offer_c8928054870bf8449e7e-1, .pw-text`
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
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(73)`
- `.row.large-12.small-12:nth-child(74)`
- `.row.large-12.small-12:nth-child(75)`
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
- `.row.large-12.small-12:nth-child(77)`
- `.row.large-12.small-12:nth-child(78)`
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(79)`
- `.row.large-12.small-12:nth-child(80)`
- `.row.large-12.small-12:nth-child(81)`
- `.row.large-12.small-12:nth-child(82)`
- `.row.large-12.small-12:nth-child(83)`
- `.row.large-12.small-12:nth-child(84)`
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(85)`
- `.row.large-12.small-12:nth-child(86)`
- `.has-row-header.color_mobile_bg-quaternary.bg-quaternary:nth-child(87)`
- `.bg-tertiary`
- `.row.large-12.small-12:nth-child(89)`
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(90)`
- `.row.large-12.small-12:nth-child(91)`
- `.row.large-12.small-12:nth-child(92)`
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(93)`
- `.has-row-header.color_mobile_bg-quaternary.bg-quaternary:nth-child(94)`
- `.row.large-12.small-12:nth-child(95)`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `#article_list_10440424 > .content > .scroll-container.swipehelper.snap-container-x`
