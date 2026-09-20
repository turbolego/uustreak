# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-09-20T05:24:44.604Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 9

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`

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

- `#offer_c73387d3ba7d6f714705-0`
- `#offer_bf4832a825707f8d4b4e-0`
- `#offer_bf4832a825707f8d4b4e-1`
- `iframe[data-testid="embed-iframe"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 5

#### Affected Elements:

- `.bg-white.color_mobile_bg-white.has-row-header > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(29) > h5`
- `.has-row-header.row.large-12:nth-child(68) > h5`
- `.has-row-header.bg-quinary.color_mobile_bg-quinary > h5`
- `.bg-primary > h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 3

#### Affected Elements:

- `#offer_c73387d3ba7d6f714705-0, img`
- `#offer_bf4832a825707f8d4b4e-0, img`
- `#offer_bf4832a825707f8d4b4e-1, img`

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
- **Count:** 5

#### Affected Elements:

- `#google_ads_iframe_\/38586112\/dagsavisen\/toppbanner_0, #aw0`
- `#offer_c73387d3ba7d6f714705-0, a`
- `#offer_bf4832a825707f8d4b4e-0, a`
- `#offer_bf4832a825707f8d4b4e-1, a`
- `.singleline.font-PTSans.t14 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 153

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `div[title="Knivstikking i Fredrikstad"] > h2`
- `div[title="Knivstikking i Fredrikstad"] > .meta`
- `#notice-10539573 > .content > h2`
- `#notice-10539573 > .content > .meta`
- `#notice-10539572 > .content > h2`
- `#notice-10539572 > .content > .meta`
- `#notice-10539536 > .content > h2`
- `#notice-10539536 > .content > .meta`
- `#notice-10539490 > .content > h2`
- `#notice-10539490 > .content > .meta`
- `#notice-10539481 > .content > h2`
- `#notice-10539481 > .content > .meta`
- `#notice-10539441 > .content > h2`
- `time[datetime="2026-09-19T10:10:20.000Z"]`
- `#notice-10539440 > .content > h2`
- `time[datetime="2026-09-19T10:01:45.000Z"]`
- `div[title="Henrettet for Mossad-spionasje"] > h2`
- `time[datetime="2026-09-19T07:59:57.000Z"]`
- `div[title="Sikkerhetsavtale klar"] > h2`
- `time[datetime="2026-09-19T06:20:20.000Z"]`
- `div[title="250 innstilte avganger"] > h2`
- `time[datetime="2026-09-19T06:17:44.000Z"]`
- `#notice-10539385 > .content > h2`
- `time[datetime="2026-09-19T06:14:56.000Z"]`
- `div[title="Trump utestenger CNN"] > h2`
- `div[title="Trump utestenger CNN"] > .meta`
- `div[title="Fortsatt skyhøye dieselpriser"] > h2`
- `div[title="Fortsatt skyhøye dieselpriser"] > .meta`
- `div[title="Ingen buss for tog"] > h2`
- `div[title="Ingen buss for tog"] > .meta`
- `div[title="Negativ rekord for Oslo Børs"] > h2`
- `div[title="Negativ rekord for Oslo Børs"] > .meta`
- `#notice-10538841 > .content > h2`
- `time[datetime="2026-09-18T11:28:33.000Z"]`
- `#notice-10538634 > .content > h2`
- `time[datetime="2026-09-18T10:29:13.000Z"]`
- `#notice-10538494 > .content > h2`
- `time[datetime="2026-09-18T09:35:02.000Z"]`
- `div[title="Iran angrep tankskip "] > h2`
- `time[datetime="2026-09-18T09:34:17.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `#offer_c73387d3ba7d6f714705-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.bg-white.color_mobile_bg-white.has-row-header`
- `.row.large-12.small-12:nth-child(10)`
- `.bg-black.color_mobile_bg-black.hasContentPadding:nth-child(11)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(13)`
- `#offer_bf4832a825707f8d4b4e-0, div[ng-show="!terminalError"]`
- `.page-content > .border-bg-quinary-light.mobile_border-bg-quinary-light.hasBorder`
- `.row.large-12.small-12:nth-child(16)`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.t25.font-InterTight`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(19)`
- `.articlescroller-header.t25.tm18`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(21)`
- `.page-content > .border_width_no_border_width.border_width_mobile_no_border_width.mobile_no_border_color`
- `.row.large-12.small-12:nth-child(23)`
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
- `#offer_bf4832a825707f8d4b4e-1, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.row.large-12.small-12:nth-child(49)`
- `.bg-black.color_mobile_bg-black.hasContentPadding:nth-child(50)`
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
- `.has-row-header.row.large-12:nth-child(68)`
- `.row.large-12.small-12:nth-child(69)`
- `.row.large-12.small-12:nth-child(70)`
- `.row.large-12.small-12:nth-child(71)`
- `.row.large-12.small-12:nth-child(72)`
- `.row.large-12.small-12:nth-child(73)`
- `.row.large-12.small-12:nth-child(74)`
- `.row.large-12.small-12:nth-child(75)`
- `.row.large-12.small-12:nth-child(76)`
- `.row.large-12.small-12:nth-child(77)`
- `.row.large-12.small-12:nth-child(78)`
- `.row.large-12.small-12:nth-child(79)`
- `.has-row-header.bg-quinary.color_mobile_bg-quinary`
- `.bg-primary`
- `.row.large-12.small-12:nth-child(82)`
- `.row.large-12.small-12:nth-child(83)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(84)`
- `.row.large-12.small-12:nth-child(85)`
- `.row.large-12.small-12:nth-child(86)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(87)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(88)`
- `.row.large-12.small-12:nth-child(89)`
- `.row.large-12.small-12:nth-child(90)`
- `.row.large-12.small-12:nth-child(91)`
- `.row.large-12.small-12:nth-child(92)`
- `.row.large-12.small-12:nth-child(93)`
- `.row.large-12.small-12:nth-child(94)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(95)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(96)`
- `.articlescroller-header.tm20.font-PTSans`
- `#article_list_9904930 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(98)`
- `.row.large-12.small-12:nth-child(99)`
- `.row.large-12.small-12:nth-child(102)`
- `.page-content > .color_mobile_bg-quaternary.bg-quaternary.hasContentPadding`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `#article_list_10440424 > .content > .scroll-container.swipehelper.snap-container-x`
