# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-07-08T03:21:32.022Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 9

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.text_singleline.large-8.large-abs-8 > .singleline`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 3

#### Affected Elements:

- `#offer_25de92e59ecc9e9aa9cd-0`
- `iframe[data-testid="embed-iframe"]`
- `#offer_ef83326ad9b38d597891-0`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 7

#### Affected Elements:

- `.has-row-header.color_mobile_no_bg_color.hasContentPadding > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(32) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(64) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(70) > h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `#offer_25de92e59ecc9e9aa9cd-0, img`
- `#offer_ef83326ad9b38d597891-0, img`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.mainMenu`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- `#google_ads_iframe_\/38586112\/dagsavisen\/toppbanner_0, #aw0`
- `#offer_25de92e59ecc9e9aa9cd-0, a`
- `#offer_ef83326ad9b38d597891-0, a`
- `.singleline.font-PTSans.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 119

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `div[title="Jaffery til Miami"] > h2`
- `time[datetime="2026-07-07T18:34:20.000Z"]`
- `div[title="Nytt fly til Miami"] > h2`
- `time[datetime="2026-07-07T18:26:51.000Z"]`
- `#notice-10432463 > .content > h2`
- `time[datetime="2026-07-07T18:25:37.000Z"]`
- `#notice-10432385 > .content > h2`
- `time[datetime="2026-07-07T16:06:17.000Z"]`
- `#notice-10432348 > .content > h2`
- `time[datetime="2026-07-07T15:10:26.000Z"]`
- `div[title="Kombinert fjernes fra OL"] > h2`
- `time[datetime="2026-07-07T14:18:01.000Z"]`
- `div[title="Marine Le Pen tapte ankesaken"] > h2`
- `time[datetime="2026-07-07T12:21:35.000Z"]`
- `div[title="Ny hetebølge er på vei"] > h2`
- `time[datetime="2026-07-07T11:57:01.000Z"]`
- `div[title="DNB betaler for VM-festen"] > h2`
- `time[datetime="2026-07-07T11:55:02.000Z"]`
- `div[title="Ebola-utbrudd ute av kontroll"] > h2`
- `time[datetime="2026-07-07T10:21:50.000Z"]`
- `div[title="Fem skadet i okseløp"] > h2`
- `time[datetime="2026-07-07T10:05:17.000Z"]`
- `div[title="Spania: Norsk jente funnet død"] > h2`
- `time[datetime="2026-07-07T08:10:53.000Z"]`
- `#notice-10431086 > .content > h2`
- `time[datetime="2026-07-07T08:40:22.000Z"]`
- `div[title="Kjøper fly til ubåtovervåking"] > h2`
- `time[datetime="2026-07-07T07:37:26.000Z"]`
- `div[title="Iran: Trumps trusler et hinder"] > h2`
- `time[datetime="2026-07-07T07:01:11.000Z"]`
- `div[title="Oslo-hotellene fylles opp"] > h2`
- `time[datetime="2026-07-07T06:53:02.000Z"]`
- `div[title="Minst 15 døde i uvær i Kina"] > h2`
- `time[datetime="2026-07-07T06:00:04.000Z"]`
- `div[title="Cuba: Strømmen på vei tilbake"] > h2`
- `time[datetime="2026-07-07T05:00:46.000Z"]`
- `div[title="16 savnet etter jordskred"] > h2`
- `time[datetime="2026-07-07T05:00:02.000Z"]`
- `#notice-10430825 > .content > h2`
- `time[datetime="2026-07-06T18:36:45.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `#offer_25de92e59ecc9e9aa9cd-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `iframe[data-testid="embed-iframe"], .EpisodeOrShowWidget_coverArtContainer__65Ei9`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-small.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `iframe[data-testid="embed-iframe"], label`
- `.row.large-12.small-12:nth-child(11)`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(13)`
- `.has-row-header.color_mobile_no_bg_color.hasContentPadding`
- `.row.large-12.small-12:nth-child(16)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(22)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.page-content > .border-bg-quaternary.mobile_border-bg-quaternary.hasBorder`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `#article_list_10184114 > .content > .lab-scrollbox-headline.font-weight-normal.m-font-weight-normal`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `#article_list_10230577 > .content > .lab-scrollbox-headline.font-weight-normal.m-font-weight-normal`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(48)`
- `.color_mobile_no_bg_color.content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `#markup_10397501 > .fullwidthTarget.content > unite-player,#status-container`
- `#markup_10295897 > .fullwidthTarget.content > unite-player,#status-container`
- `#markup_10295895 > .fullwidthTarget.content > unite-player,#status-container`
- `#markup_10275631 > .fullwidthTarget.content > unite-player,#status-container`
- `#markup_10275507 > .fullwidthTarget.content > unite-player,#status-container`
- `#markup_10275509 > .fullwidthTarget.content > unite-player,#status-container`
- `#markup_10275511 > .fullwidthTarget.content > unite-player,#status-container`
- `#markup_10275513 > .fullwidthTarget.content > unite-player,#status-container`
- `#markup_10275515 > .fullwidthTarget.content > unite-player,#status-container`
- `.row.large-12.small-12:nth-child(51)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(54)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(60)`
- `#offer_ef83326ad9b38d597891-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(64)`
- `.row.large-12.small-12:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(67)`
- `.row.large-12.small-12:nth-child(68)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(70)`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `.color_mobile_no_bg_color.content > .scroll-container.swipehelper.snap-container-x`
