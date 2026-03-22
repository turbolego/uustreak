# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-03-22T00:47:21.235Z
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

- `#markup_10262750 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"]`
- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 6

#### Affected Elements:

- `.t20`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(14) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(53) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(57) > h5`

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
- **Count:** 97

#### Affected Elements:

- `h1`
- `#notice-10263030 > .content > h2`
- `time[datetime="2026-03-21T19:00:00.000Z"]`
- `div[title="Italia: To døde i snøskred"] > h2`
- `time[datetime="2026-03-21T17:52:41.000Z"]`
- `#notice-10262967 > .content > h2`
- `time[datetime="2026-03-21T17:08:40.000Z"]`
- `#notice-10262822 > .content > h2`
- `time[datetime="2026-03-21T14:53:59.000Z"]`
- `#notice-10262775 > .content > h2`
- `time[datetime="2026-03-21T14:00:05.000Z"]`
- `div[title="PST: Forventer Pride-trusler"] > h2`
- `time[datetime="2026-03-21T13:22:22.000Z"]`
- `div[title="Isbjørn skutt på Svalbard"] > h2`
- `time[datetime="2026-03-21T11:56:52.000Z"]`
- `#notice-10262701 > .content > h2`
- `time[datetime="2026-03-21T11:55:11.000Z"]`
- `#notice-10262662 > .content > h2`
- `time[datetime="2026-03-21T11:56:02.000Z"]`
- `#notice-10262643 > .content > h2`
- `time[datetime="2026-03-21T10:34:21.000Z"]`
- `#notice-10262640 > .content > h2`
- `time[datetime="2026-03-21T09:49:37.000Z"]`
- `div[title="Atomanlegg i Natanz angrepet"] > h2`
- `time[datetime="2026-03-21T09:28:41.000Z"]`
- `#notice-10262611 > .content > h2`
- `time[datetime="2026-03-21T09:14:46.000Z"]`
- `div[title="Vil ha flere helsesykepleiere"] > h2`
- `time[datetime="2026-03-21T09:14:12.000Z"]`
- `#notice-10262585 > .content > h2`
- `time[datetime="2026-03-21T07:22:18.000Z"]`
- `#notice-10262584 > .content > h2`
- `time[datetime="2026-03-21T07:20:26.000Z"]`
- `#notice-10262583 > .content > h2`
- `time[datetime="2026-03-21T07:17:19.000Z"]`
- `#notice-10262572 > .content > h2`
- `time[datetime="2026-03-20T21:20:25.000Z"]`
- `#notice-10262496 > .content > h2`
- `time[datetime="2026-03-20T21:17:47.000Z"]`
- `div[title="Trump-søksmål mot Harvard"] > h2`
- `time[datetime="2026-03-20T18:35:17.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(6)`
- `#markup_10262750 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], h1`
- `#markup_10262750 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], .encore-text-body-small.encore-internal-color-text-subdued.e-91185-text`
- `#markup_10262750 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], a[dir="auto"]`
- `#markup_10262750 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], label`
- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], h1`
- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], .encore-text-body-small.encore-internal-color-text-subdued.e-91185-text`
- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], a[dir="auto"]`
- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], label`
- `.row.large-12.small-12:nth-child(8)`
- `.mobile_no_border_side.hasBorder.mobile-hasBorder`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(14)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `#article_list_10187147 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10187147 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(18)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(21)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.row.large-12.small-12:nth-child(23)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(26)`
- `#article_list_10184114 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `#article_list_10230577 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(42)`
- `.row.large-12.small-12:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(48)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(49)`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(53)`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(56)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(57)`
- `.powered-by`
