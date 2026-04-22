# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-04-22T00:51:22.994Z
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

- `.t20`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(18) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(33) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(37) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(43) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(57) > h5`

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
- **Count:** 92

#### Affected Elements:

- `h1`
- `#notice-10309396 > .content > h2`
- `time[datetime="2026-04-21T19:46:24.000Z"]`
- `#notice-10309339 > .content > h2`
- `time[datetime="2026-04-21T19:46:50.000Z"]`
- `#notice-10309334 > .content > h2`
- `time[datetime="2026-04-21T18:29:22.000Z"]`
- `#notice-10309333 > .content > h2`
- `time[datetime="2026-04-21T18:28:13.000Z"]`
- `#notice-10309318 > .content > h2`
- `time[datetime="2026-04-21T17:45:49.000Z"]`
- `#notice-10309267 > .content > h2`
- `time[datetime="2026-04-21T16:14:56.000Z"]`
- `#notice-10309229 > .content > h2`
- `time[datetime="2026-04-21T15:07:12.000Z"]`
- `#notice-10308787 > .content > h2`
- `time[datetime="2026-04-21T12:49:32.000Z"]`
- `div[title="EU ser på drivstofftiltak"] > h2`
- `time[datetime="2026-04-21T12:37:55.000Z"]`
- `div[title="Bensinpriser nede på 15-tallet"] > h2`
- `time[datetime="2026-04-21T12:07:56.000Z"]`
- `#notice-10308659 > .content > h2`
- `time[datetime="2026-04-21T11:53:28.000Z"]`
- `div[title="Trump: Iran bryter våpenhvilen"] > h2`
- `time[datetime="2026-04-21T11:49:42.000Z"]`
- `#notice-10308439 > .content > h2`
- `time[datetime="2026-04-21T11:16:55.000Z"]`
- `div[title="Ny rettsrunde for Weinstein"] > h2`
- `time[datetime="2026-04-21T11:15:43.000Z"]`
- `#notice-10308430 > .content > h2`
- `time[datetime="2026-04-21T11:14:45.000Z"]`
- `div[title="Færre hatkrim-anmeldelser"] > h2`
- `time[datetime="2026-04-21T10:22:03.000Z"]`
- `#notice-10308221 > .content > h2`
- `time[datetime="2026-04-21T10:19:49.000Z"]`
- `#notice-10308218 > .content > h2`
- `time[datetime="2026-04-21T10:18:56.000Z"]`
- `div[title="Ny Norfund-sjef"] > h2`
- `time[datetime="2026-04-21T09:30:39.000Z"]`
- `div[title="Ukraina-lån: Tror på «ja»"] > h2`
- `time[datetime="2026-04-21T09:29:08.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
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
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(18)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(21)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `.row.large-12.small-12:nth-child(26)`
- `#article_list_10184114 > .content > .t25.font-weight-normal.m-font-weight-normal`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(33)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
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
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(57)`
- `.powered-by`
