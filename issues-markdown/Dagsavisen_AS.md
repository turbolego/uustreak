# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-05-09T01:03:59.186Z
**URL:** [https://www.dagsavisen.no/#](https://www.dagsavisen.no/#)
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
- **Count:** 1

#### Affected Elements:

- `iframe[data-testid="embed-iframe"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 8

#### Affected Elements:

- `.t20`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(16) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(29) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(51) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(54) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(57) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(59) > h5`

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
- **Count:** 96

#### Affected Elements:

- `h1`
- `#notice-10338785 > .content > h2`
- `time[datetime="2026-05-08T19:05:37.000Z"]`
- `#notice-10338638 > .content > h2`
- `#notice-10338638 > .content > .meta`
- `#notice-10338613 > .content > h2`
- `#notice-10338613 > .content > .meta`
- `#notice-10337984 > .content > h2`
- `time[datetime="2026-05-08T11:05:40.000Z"]`
- `#notice-10337981 > .content > h2`
- `time[datetime="2026-05-08T11:04:34.000Z"]`
- `#notice-10337978 > .content > h2`
- `time[datetime="2026-05-08T11:04:09.000Z"]`
- `#notice-10337610 > .content > h2`
- `time[datetime="2026-05-08T08:46:11.000Z"]`
- `#notice-10337609 > .content > h2`
- `time[datetime="2026-05-08T08:45:24.000Z"]`
- `#notice-10337468 > .content > h2`
- `time[datetime="2026-05-08T08:11:25.000Z"]`
- `#notice-10337463 > .content > h2`
- `time[datetime="2026-05-08T08:10:58.000Z"]`
- `#notice-10337462 > .content > h2`
- `time[datetime="2026-05-08T08:18:58.000Z"]`
- `#notice-10337207 > .content > h2`
- `time[datetime="2026-05-08T07:34:14.000Z"]`
- `#notice-10337114 > .content > h2`
- `time[datetime="2026-05-08T06:43:12.000Z"]`
- `#notice-10337109 > .content > h2`
- `time[datetime="2026-05-08T06:11:51.000Z"]`
- `div[title="To funnet døde i Halsa"] > h2`
- `time[datetime="2026-05-08T06:11:12.000Z"]`
- `#notice-10337072 > .content > h2`
- `time[datetime="2026-05-08T05:38:17.000Z"]`
- `#notice-10337039 > .content > h2`
- `time[datetime="2026-05-08T05:19:33.000Z"]`
- `#notice-10337038 > .content > h2`
- `time[datetime="2026-05-08T05:19:02.000Z"]`
- `#notice-10337037 > .content > h2`
- `time[datetime="2026-05-08T05:18:34.000Z"]`
- `div[title="Medier: Over 30 drept i Mali"] > h2`
- `div[title="Medier: Over 30 drept i Mali"] > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(4)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `iframe[data-testid="embed-iframe"], .EpisodeOrShowWidget_coverArtContainer__65Ei9`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-small.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `iframe[data-testid="embed-iframe"], label`
- `.row.large-12.small-12:nth-child(11)`
- `.bg-tertiary.color_mobile_bg-tertiary.mobile_no_border_side`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articlescroller-header`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(14)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(16)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(22)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `.row.large-12.small-12:nth-child(27)`
- `#article_list_10184114 > .content > .lab-scrollbox-headline.font-weight-normal.m-font-weight-normal`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
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
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(54)`
- `.row.large-12.small-12:nth-child(56)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(59)`
- `.powered-by`
