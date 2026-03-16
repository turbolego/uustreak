# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-03-16T00:46:21.315Z
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
- **Count:** 2

#### Affected Elements:

- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"]`
- `#markup_10212819 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 9

#### Affected Elements:

- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(11) > h5`
- `.t20`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32) > .font-weight-normal.m-font-weight-normal`
- `.has-row-header.row.large-12:nth-child(36) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46) > .font-weight-normal.m-font-weight-normal`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(57) > .font-weight-normal.m-font-weight-normal`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(63) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(64) > h5`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.mainMenu`
- `#markup_10195540 > .fullwidthTarget.content > unite-player,mux-player,media-theme,media-controller`

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
- **Count:** 99

#### Affected Elements:

- `h1`
- `#notice-10251479 > .content > h2`
- `time[datetime="2026-03-15T20:10:13.000Z"]`
- `div[title="Frekke scoringer da KFUM vant"] > h2`
- `time[datetime="2026-03-15T18:07:06.000Z"]`
- `#notice-10251445 > .content > h2`
- `time[datetime="2026-03-15T18:05:42.000Z"]`
- `#notice-10251441 > .content > h2`
- `time[datetime="2026-03-15T17:12:02.000Z"]`
- `#notice-10251263 > .content > h2`
- `time[datetime="2026-03-15T12:45:28.000Z"]`
- `#notice-10251262 > .content > h2`
- `time[datetime="2026-03-15T12:57:09.000Z"]`
- `#notice-10251237 > .content > h2`
- `time[datetime="2026-03-15T12:06:08.000Z"]`
- `#notice-10251236 > .content > h2`
- `time[datetime="2026-03-15T12:04:56.000Z"]`
- `#notice-10251235 > .content > h2`
- `time[datetime="2026-03-15T11:58:06.000Z"]`
- `#notice-10251232 > .content > h2`
- `time[datetime="2026-03-15T11:51:40.000Z"]`
- `#notice-10251229 > .content > h2`
- `time[datetime="2026-03-15T11:46:47.000Z"]`
- `#notice-10251050 > .content > h2`
- `time[datetime="2026-03-15T07:24:05.000Z"]`
- `#notice-10251049 > .content > h2`
- `time[datetime="2026-03-15T11:41:30.000Z"]`
- `#notice-10251048 > .content > h2`
- `time[datetime="2026-03-15T11:41:55.000Z"]`
- `#notice-10251047 > .content > h2`
- `time[datetime="2026-03-15T07:13:24.000Z"]`
- `#notice-10251046 > .content > h2`
- `time[datetime="2026-03-15T07:11:42.000Z"]`
- `div[title="Over 100 barn drept i Libanon"] > h2`
- `time[datetime="2026-03-14T16:24:48.000Z"]`
- `div[title="Norsk-kanadisk romavtale"] > h2`
- `time[datetime="2026-03-14T15:04:39.000Z"]`
- `div[title="Jürgen Habermas er død"] > h2`
- `time[datetime="2026-03-14T15:48:24.000Z"]`
- `#notice-10250722 > .content > h2`
- `#notice-10250722 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], h1`
- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], a[dir="auto"]`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(11)`
- `.mobile_no_border_side.hasBorder.mobile-hasBorder`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(14)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `#article_list_10187147 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10187147 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(18)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(21)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.row.large-12.small-12:nth-child(23)`
- `.row.large-12.small-12:nth-child(26)`
- `#article_list_10184114 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.has-row-header.row.large-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `#article_list_10230577 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(42)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46)`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(48)`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.row.large-12.small-12:nth-child(56)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(57)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(60)`
- `.row.large-12.small-12:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(63)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(64)`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `.powered-by`
