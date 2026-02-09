# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-02-09T00:46:08.463Z
**URL:** [https://www.dagsavisen.no/#](https://www.dagsavisen.no/#)
**Total Violations:** 6

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `a[href$="mailto:anne@dagsavisen.no"]`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.text_singleline.large-8.large-abs-8 > .singleline`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 6

#### Affected Elements:

- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(3) > h5`
- `.has-row-header.mobile_no_border_color.hasContentPadding > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(17) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(19) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46) > h5`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.mainMenu`
- `#markup_10151718 > .fullwidthTarget.content > unite-player,mux-player,media-theme,media-controller`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- `a[href$="mailto:kb@dagsavisen.no"]`
- `.tm17.singleline.font-PTSans > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 88

#### Affected Elements:

- `h1`
- `#notice-10192381 > .content > h2`
- `#notice-10192381 > .content > .meta`
- `#notice-10192350 > .content > h2`
- `#notice-10192350 > .content > .meta`
- `div[title="Sveits-minnesmerke tok fyr"] > h2`
- `div[title="Sveits-minnesmerke tok fyr"] > .meta`
- `#notice-10192228 > .content > h2`
- `#notice-10192228 > .content > .meta`
- `#notice-10192208 > .content > h2`
- `#notice-10192208 > .content > .meta`
- `#notice-10192184 > .content > h2`
- `#notice-10192184 > .content > .meta`
- `div[title="Starmers stabssjef går av"] > h2`
- `time[datetime="2026-02-08T14:37:58.000Z"]`
- `div[title="Bergen: Store rotteproblemer"] > h2`
- `time[datetime="2026-02-08T11:47:25.000Z"]`
- `div[title="Fire døde etter flere snøskred"] > h2`
- `time[datetime="2026-02-08T09:22:43.000Z"]`
- `div[title="Bråk på utested i Bergen"] > h2`
- `time[datetime="2026-02-08T09:23:14.000Z"]`
- `#notice-10191822 > .content > h2`
- `time[datetime="2026-02-08T09:23:33.000Z"]`
- `#notice-10191813 > .content > h2`
- `time[datetime="2026-02-07T20:18:43.000Z"]`
- `#notice-10191738 > .content > h2`
- `time[datetime="2026-02-07T17:46:53.000Z"]`
- `#notice-10191703 > .content > h2`
- `time[datetime="2026-02-07T16:42:33.000Z"]`
- `#notice-10191700 > .content > h2`
- `time[datetime="2026-02-07T16:37:50.000Z"]`
- `div[title="Mann død i arbeidsulykke"] > h2`
- `time[datetime="2026-02-07T16:17:53.000Z"]`
- `div[title="Kvinne død etter boligbrann"] > h2`
- `time[datetime="2026-02-07T15:40:22.000Z"]`
- `#notice-10191678 > .content > h2`
- `time[datetime="2026-02-07T15:20:18.000Z"]`
- `#notice-10191657 > .content > h2`
- `time[datetime="2026-02-07T14:39:47.000Z"]`
- `div[title="Flere snøskred i Troms"] > h2`
- `div[title="Flere snøskred i Troms"] > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(3)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.has-row-header.mobile_no_border_color.hasContentPadding`
- `.row.large-12.small-12:nth-child(9)`
- `#article_list_10187147 > .inner.fullwidthTarget.content`
- `#article_list_10180103 > .inner.fullwidthTarget.content`
- `.page-content > .border-bg-quaternary.mobile_border-bg-quaternary.hasBorder`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(16)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(17) > h5`
- `#article_list_10188193 > .inner.fullwidthTarget.content`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(19)`
- `.row.large-12.small-12:nth-child(21)`
- `.page-content > .border_width_no_border_width.border_width_mobile_no_border_width.mobile_no_border_color`
- `.row.large-12.small-12:nth-child(23)`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `#article_list_10184114 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `#article_list_10184103 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10184103 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(42)`
- `.row.large-12.small-12:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.row.large-12.small-12:nth-child(48)`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(55)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.powered-by`
