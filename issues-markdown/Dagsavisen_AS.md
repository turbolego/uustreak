# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-04-26T01:01:45.770Z
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

- `#markup_10268378 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"]`
- `#markup_10311343 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 7

#### Affected Elements:

- `.t20`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(54) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(57) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(60) > h5`
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
- **Count:** 97

#### Affected Elements:

- `h1`
- `#notice-10316440 > .content > h2`
- `time[datetime="2026-04-25T16:38:31.000Z"]`
- `#notice-10316439 > .content > h2`
- `time[datetime="2026-04-25T16:04:25.000Z"]`
- `div[title="Fire drept i israelske angrep"] > h2`
- `time[datetime="2026-04-25T13:19:17.000Z"]`
- `div[title="Russisk drone i Romania"] > h2`
- `time[datetime="2026-04-25T13:17:32.000Z"]`
- `div[title="Ruud herjet"] > h2`
- `time[datetime="2026-04-25T13:15:56.000Z"]`
- `#notice-10316322 > .content > h2`
- `time[datetime="2026-04-25T11:50:02.000Z"]`
- `div[title="Flåklypa-manusforfatter er død"] > h2`
- `time[datetime="2026-04-25T10:32:01.000Z"]`
- `div[title="Skyting flere steder på Mali"] > h2`
- `time[datetime="2026-04-25T11:08:17.000Z"]`
- `#notice-10316257 > .content > h2`
- `time[datetime="2026-04-25T09:19:24.000Z"]`
- `#notice-10316214 > .content > h2`
- `time[datetime="2026-04-25T08:16:09.000Z"]`
- `#notice-10316193 > .content > h2`
- `time[datetime="2026-04-25T08:22:51.000Z"]`
- `#notice-10316192 > .content > h2`
- `time[datetime="2026-04-25T06:42:12.000Z"]`
- `#notice-10316191 > .content > h2`
- `time[datetime="2026-04-25T06:41:38.000Z"]`
- `#notice-10316190 > .content > h2`
- `time[datetime="2026-04-25T06:11:07.000Z"]`
- `div[title="Flaggblemme i Washington"] > h2`
- `time[datetime="2026-04-25T06:10:34.000Z"]`
- `div[title="Iran: Møter ikke USA direkte"] > h2`
- `time[datetime="2026-04-25T06:10:03.000Z"]`
- `#notice-10316178 > .content > h2`
- `#notice-10316178 > .content > .meta`
- `#notice-10316145 > .content > h2`
- `#notice-10316145 > .content > .meta`
- `#notice-10316005 > .content > h2`
- `#notice-10316005 > .content > .meta`
- `#notice-10315977 > .content > h2`
- `#notice-10315977 > .content > .meta`
- `.bg-primary`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(7)`
- `#markup_10268378 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], h1`
- `#markup_10268378 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `#markup_10268378 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], a[dir="auto"]`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.bg-tertiary.color_mobile_bg-tertiary.mobile_no_border_side`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articlescroller-header`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.row.large-12.small-12:nth-child(16)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(18)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.t25.align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(21)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(27)`
- `#article_list_10184114 > .content > .lab-scrollbox-headline.t25.font-weight-normal`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `#article_list_10230577 > .content > .lab-scrollbox-headline.t25.font-weight-normal`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(48)`
- `.color_mobile_no_bg_color.content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(53)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(54)`
- `.row.large-12.small-12:nth-child(56)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(57)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(60)`
- `.row.large-12.small-12:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(63)`
- `.powered-by`
