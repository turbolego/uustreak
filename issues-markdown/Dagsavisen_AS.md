# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-05-17T01:20:29.725Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 6

## Violation Details

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
- **Count:** 4

#### Affected Elements:

- `#offer_25e43cc57497e0d99469-0`
- `iframe[data-testid="embed-iframe"]`
- `#offer_25e43cc57497e0d99469-1`
- `#offer_5384188b9ab0112f9422-0`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 7

#### Affected Elements:

- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(14) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(19) > h5`
- `.t20`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(43) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(64) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(68) > h5`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.mainMenu`
- `#markup_10295897 > .fullwidthTarget.content > unite-player,mux-player,media-theme,media-controller`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- `a[href$="mailto:kb@dagsavisen.no"]`
- `.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 113

#### Affected Elements:

- `h1`
- `#notice-10349069 > .content > h2`
- `time[datetime="2026-05-16T18:36:29.000Z"]`
- `#notice-10348998 > .content > h2`
- `time[datetime="2026-05-16T18:19:41.000Z"]`
- `#notice-10348869 > .content > h2`
- `time[datetime="2026-05-16T12:58:07.000Z"]`
- `#notice-10348836 > .content > h2`
- `time[datetime="2026-05-16T11:33:58.000Z"]`
- `#notice-10348805 > .content > h2`
- `time[datetime="2026-05-16T10:28:29.000Z"]`
- `#notice-10348741 > .content > h2`
- `time[datetime="2026-05-16T08:34:06.000Z"]`
- `#notice-10348712 > .content > h2`
- `time[datetime="2026-05-16T07:28:08.000Z"]`
- `#notice-10348711 > .content > h2`
- `time[datetime="2026-05-16T07:27:15.000Z"]`
- `#notice-10348710 > .content > h2`
- `time[datetime="2026-05-16T07:26:43.000Z"]`
- `#notice-10348701 > .content > h2`
- `time[datetime="2026-05-16T07:24:52.000Z"]`
- `div[title="Sju drept i Gaza"] > h2`
- `time[datetime="2026-05-16T07:24:00.000Z"]`
- `#notice-10348590 > .content > h2`
- `time[datetime="2026-05-15T19:55:43.000Z"]`
- `#notice-10348589 > .content > h2`
- `time[datetime="2026-05-15T19:21:29.000Z"]`
- `#notice-10348588 > .content > h2`
- `time[datetime="2026-05-15T19:19:44.000Z"]`
- `#notice-10348557 > .content > h2`
- `time[datetime="2026-05-15T19:56:26.000Z"]`
- `#notice-10348530 > .content > h2`
- `time[datetime="2026-05-15T17:45:35.000Z"]`
- `#notice-10348510 > .content > h2`
- `time[datetime="2026-05-15T16:38:28.000Z"]`
- `#notice-10348440 > .content > h2`
- `time[datetime="2026-05-15T14:40:55.000Z"]`
- `#notice-10348439 > .content > h2`
- `time[datetime="2026-05-15T15:56:53.000Z"]`
- `#notice-10348428 > .content > h2`
- `time[datetime="2026-05-15T14:35:39.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `#offer_25e43cc57497e0d99469-0, img`
- `#offer_25e43cc57497e0d99469-0, .pw-text`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `iframe[data-testid="embed-iframe"], .EpisodeOrShowWidget_coverArtContainer__65Ei9`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-small.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `iframe[data-testid="embed-iframe"], label`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articlescroller-header`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(14)`
- `.row.large-12.small-12:nth-child(16)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(18)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(19)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `.row.large-12.small-12:nth-child(24)`
- `#offer_25e43cc57497e0d99469-1, img`
- `#offer_25e43cc57497e0d99469-1, .pw-text`
- `.row.large-12.small-12:nth-child(27)`
- `#article_list_10184114 > .content > .lab-scrollbox-headline.font-weight-normal.m-font-weight-normal`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(29)`
- `.bg-tertiary.color_mobile_bg-tertiary.mobile_no_border_side`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `#article_list_10230577 > .content > .lab-scrollbox-headline.font-weight-normal.m-font-weight-normal`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(48)`
- `.color_mobile_no_bg_color.content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(54)`
- `#offer_5384188b9ab0112f9422-0, img`
- `#offer_5384188b9ab0112f9422-0, .pw-subtitle`
- `#offer_5384188b9ab0112f9422-0, .pw-offer`
- `#offer_5384188b9ab0112f9422-0, #pw-countdown`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(59)`
- `.row.large-12.small-12:nth-child(60)`
- `.row.large-12.small-12:nth-child(61)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(64)`
- `.row.large-12.small-12:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.row.large-12.small-12:nth-child(67)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(68)`
- `.powered-by`
