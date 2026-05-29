# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-05-29T04:56:27.974Z
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
- **Count:** 6

#### Affected Elements:

- `.has-row-header.color_mobile_no_bg_color.hasContentPadding > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(16) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(53) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(55) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(62) > h5`

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
- **Count:** 100

#### Affected Elements:

- `h1`
- `#notice-10369228 > .content > h2`
- `#notice-10369228 > .content > .meta`
- `#notice-10369205 > .content > h2`
- `#notice-10369205 > .content > .meta`
- `#notice-10369200 > .content > h2`
- `#notice-10369200 > .content > .meta`
- `div[title="Tre knivstukket i Sveits"] > h2`
- `div[title="Tre knivstukket i Sveits"] > .meta`
- `#notice-10369025 > .content > h2`
- `#notice-10369025 > .content > .meta`
- `#notice-10368969 > .content > h2`
- `#notice-10368969 > .content > .meta`
- `#notice-10368107 > .content > h2`
- `time[datetime="2026-05-28T10:27:14.000Z"]`
- `div[title="Banktrøbbel for DNB løst"] > h2`
- `time[datetime="2026-05-28T13:29:31.000Z"]`
- `#notice-10368085 > .content > h2`
- `time[datetime="2026-05-28T18:21:09.000Z"]`
- `#notice-10368084 > .content > h2`
- `time[datetime="2026-05-28T10:15:52.000Z"]`
- `#notice-10368050 > .content > h2`
- `time[datetime="2026-05-28T18:21:33.000Z"]`
- `#notice-10367611 > .content > h2`
- `time[datetime="2026-05-28T08:14:50.000Z"]`
- `#notice-10367478 > .content > h2`
- `time[datetime="2026-05-28T18:22:08.000Z"]`
- `#notice-10367441 > .content > h2`
- `time[datetime="2026-05-28T18:24:16.000Z"]`
- `#notice-10367374 > .content > h2`
- `time[datetime="2026-05-28T06:26:22.000Z"]`
- `#notice-10367367 > .content > h2`
- `time[datetime="2026-05-28T18:22:44.000Z"]`
- `div[title="Gasslekkasje i Halden"] > h2`
- `time[datetime="2026-05-28T18:23:06.000Z"]`
- `#notice-10367311 > .content > h2`
- `time[datetime="2026-05-28T18:23:44.000Z"]`
- `#notice-10367299 > .content > h2`
- `time[datetime="2026-05-28T05:19:32.000Z"]`
- `#notice-10367295 > .content > h2`
- `time[datetime="2026-05-28T10:14:33.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(6)`
- `.has-row-header.color_mobile_no_bg_color.hasContentPadding`
- `iframe[data-testid="embed-iframe"], .EpisodeOrShowWidget_coverArtContainer__65Ei9`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-small.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `iframe[data-testid="embed-iframe"], label`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.row.large-12.small-12:nth-child(13)`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articlescroller-header`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(16)`
- `.bg-tertiary`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(19)`
- `.row.large-12.small-12:nth-child(21)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.page-content > .border_width_no_border_width.border_width_mobile_no_border_width.mobile_no_border_color`
- `.page-content > .border-bg-quaternary.mobile_border-bg-quaternary.hasBorder`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(28)`
- `#article_list_10184114 > .content > .lab-scrollbox-headline.font-weight-normal.m-font-weight-normal`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.mobile_no_border_color.color_mobile_no_bg_color.row:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(42)`
- `#article_list_10230577 > .content > .lab-scrollbox-headline.font-weight-normal.m-font-weight-normal`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(44)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(49)`
- `.color_mobile_no_bg_color.content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(52)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(53)`
- `.row.large-12.small-12:nth-child(54)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(55)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(60)`
- `.row.large-12.small-12:nth-child(61)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.powered-by`
