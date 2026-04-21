# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-04-21T00:56:16.195Z
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
- **Count:** 7

#### Affected Elements:

- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(7) > h5`
- `.t20`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(29) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(43) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(61) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(63) > h5`

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
- **Count:** 98

#### Affected Elements:

- `h1`
- `#notice-10307397 > .content > h2`
- `time[datetime="2026-04-20T19:22:00.000Z"]`
- `div[title="Cuba bekrefter møte med USA"] > h2`
- `time[datetime="2026-04-20T18:56:55.000Z"]`
- `div[title="FBI-sjef saksøker tidsskrift"] > h2`
- `time[datetime="2026-04-20T18:07:49.000Z"]`
- `#notice-10307347 > .content > h2`
- `time[datetime="2026-04-20T18:07:12.000Z"]`
- `#notice-10307346 > .content > h2`
- `time[datetime="2026-04-20T18:06:05.000Z"]`
- `#notice-10307012 > .content > h2`
- `time[datetime="2026-04-20T13:19:28.000Z"]`
- `#notice-10307010 > .content > h2`
- `time[datetime="2026-04-20T13:15:02.000Z"]`
- `div[title="To menn henrettet i Iran"] > h2`
- `time[datetime="2026-04-20T13:14:15.000Z"]`
- `#notice-10306754 > .content > h2`
- `time[datetime="2026-04-20T12:00:40.000Z"]`
- `#notice-10306753 > .content > h2`
- `time[datetime="2026-04-20T11:59:39.000Z"]`
- `#notice-10306432 > .content > h2`
- `time[datetime="2026-04-20T10:55:53.000Z"]`
- `#notice-10306289 > .content > h2`
- `time[datetime="2026-04-20T10:15:29.000Z"]`
- `div[title="Ber om 21 år for dobbeltdrap"] > h2`
- `time[datetime="2026-04-20T09:35:39.000Z"]`
- `div[title="To pågrepet for drapsforsøk"] > h2`
- `time[datetime="2026-04-20T08:16:58.000Z"]`
- `#notice-10305907 > .content > h2`
- `time[datetime="2026-04-20T10:04:53.000Z"]`
- `#notice-10305867 > .content > h2`
- `time[datetime="2026-04-20T07:42:06.000Z"]`
- `#notice-10305757 > .content > h2`
- `time[datetime="2026-04-20T06:27:32.000Z"]`
- `#notice-10305756 > .content > h2`
- `time[datetime="2026-04-20T06:25:24.000Z"]`
- `div[title="USA: Drepte sine egne barn"] > h2`
- `time[datetime="2026-04-20T05:51:24.000Z"]`
- `#notice-10305733 > .content > h2`
- `time[datetime="2026-04-20T05:14:37.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(6)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(7)`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `.bg-tertiary.color_mobile_bg-tertiary.mobile_no_border_side`
- `.row.large-12.small-12:nth-child(11)`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articlescroller-header`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(13)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(17)`
- `.row.large-12.small-12:nth-child(18)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(21)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `.row.large-12.small-12:nth-child(26)`
- `#article_list_10184114 > .content > .t25.font-weight-normal.m-font-weight-normal`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(28)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(39)`
- `#article_list_10230577 > .content > .t25.font-weight-normal.m-font-weight-normal`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(42)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.italic.m-italic.align-center`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(47)`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(55)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(60)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(63)`
- `.powered-by`
