# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-04-14T00:52:43.408Z
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

- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(6) > h5`
- `.font-weight-light`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(28) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(43) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(53) > h5`

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
- **Count:** 89

#### Affected Elements:

- `h1`
- `#notice-10295904 > .content > h2`
- `#notice-10295904 > .content > .meta`
- `#notice-10295775 > .content > h2`
- `#notice-10295775 > .content > .meta`
- `div[title="EU lover nye energitiltak"] > h2`
- `div[title="EU lover nye energitiltak"] > .meta`
- `#notice-10294620 > .content > h2`
- `time[datetime="2026-04-13T08:00:03.000Z"]`
- `#notice-10294512 > .content > h2`
- `time[datetime="2026-04-13T07:42:40.000Z"]`
- `div[title="LO advarer mot renteøkning"] > h2`
- `time[datetime="2026-04-13T07:40:01.000Z"]`
- `div[title="Oslo Børs: Åpnet markant opp"] > h2`
- `time[datetime="2026-04-13T07:38:53.000Z"]`
- `#notice-10294484 > .content > h2`
- `time[datetime="2026-04-13T07:37:13.000Z"]`
- `#notice-10294483 > .content > h2`
- `time[datetime="2026-04-13T07:36:40.000Z"]`
- `#notice-10294390 > .content > h2`
- `time[datetime="2026-04-13T06:56:25.000Z"]`
- `#notice-10294360 > .content > h2`
- `time[datetime="2026-04-13T05:52:41.000Z"]`
- `div[title="Trøbbel på t-banen"] > h2`
- `time[datetime="2026-04-13T07:06:15.000Z"]`
- `#notice-10294356 > .content > h2`
- `time[datetime="2026-04-13T05:51:41.000Z"]`
- `div[title="Problemer på Vestfoldbanen"] > h2`
- `time[datetime="2026-04-13T06:57:16.000Z"]`
- `div[title="Trump: Bryr meg ikke"] > h2`
- `time[datetime="2026-04-13T05:50:24.000Z"]`
- `#notice-10294254 > .content > h2`
- `time[datetime="2026-04-12T18:42:00.000Z"]`
- `div[title="Brann i blokk: 16 til sykehus"] > h2`
- `time[datetime="2026-04-12T17:01:17.000Z"]`
- `div[title="Normal trafikk over fjellet"] > h2`
- `time[datetime="2026-04-12T15:53:26.000Z"]`
- `#notice-10293988 > .content > h2`
- `time[datetime="2026-04-12T17:31:23.000Z"]`
- `div[title="Rekordhøy valgdeltakelse"] > h2`
- `time[datetime="2026-04-12T16:48:58.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(6)`
- `.bg-primary`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `.mobile_no_border_side.hasBorder.mobile-hasBorder`
- `.row.large-12.small-12:nth-child(11)`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articlescroller-header`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.row.large-12.small-12:nth-child(14)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(17)`
- `.row.large-12.small-12:nth-child(18)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .align-left.mobile_text_align_align-left.articlescroller-header`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(21)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `.row.large-12.small-12:nth-child(26)`
- `#article_list_10184114 > .content > .font-weight-normal.m-font-weight-normal.font-PTSans`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `#article_list_10230577 > .content > .font-weight-normal.m-font-weight-normal.font-PTSans`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(42)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.italic.m-italic.align-center`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(47)`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(51)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(53)`
- `.powered-by`
