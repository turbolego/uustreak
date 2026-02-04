# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-02-04T00:46:58.077Z
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
- **Count:** 2

#### Affected Elements:

- `.border_width_0 > h5`
- `.large-8.large-abs-8.text_singleline > .singleline`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 8

#### Affected Elements:

- `.border_width_0 > h5`
- `.mobile_no_border_color.has-row-header.hasContentPadding > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(21) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(31) > h5`
- `.tm15.t28`
- `.tm21.t28`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46) > h5`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.mainMenu`
- `#markup_10151715 > .fullwidthTarget.content > unite-player,mux-player[metadata-video-title="Hva vil Trump med Venezuela?"],media-theme,media-controller`

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
- **Count:** 79

#### Affected Elements:

- `h1`
- `#notice-10184058 > .content > h2`
- `time[datetime="2026-02-03T20:08:34.000Z"]`
- `div[title="Kongehuset endrer ikke planer"] > h2`
- `time[datetime="2026-02-03T19:24:11.000Z"]`
- `div[title="Frp faller markant på måling"] > h2`
- `time[datetime="2026-02-03T19:22:56.000Z"]`
- `div[title="USA skjøt ned iransk drone"] > h2`
- `time[datetime="2026-02-03T18:06:41.000Z"]`
- `#notice-10183923 > .content > h2`
- `time[datetime="2026-02-03T17:44:46.000Z"]`
- `#notice-10183918 > .content > h2`
- `time[datetime="2026-02-03T17:43:29.000Z"]`
- `#notice-10183870 > .content > h2`
- `time[datetime="2026-02-03T17:41:31.000Z"]`
- `div[title="Lærer skadet i knivstikking"] > h2`
- `time[datetime="2026-02-03T15:21:22.000Z"]`
- `div[title="Fotballfeberen herjer i Bodø"] > h2`
- `time[datetime="2026-02-03T14:32:02.000Z"]`
- `#notice-10183444 > .content > h2`
- `time[datetime="2026-02-03T13:53:00.000Z"]`
- `div[title="Rema dropper Kinderegg"] > h2`
- `time[datetime="2026-02-03T13:21:55.000Z"]`
- `#notice-10182481 > .content > h2`
- `#notice-10182481 > .content > .meta`
- `div[title="– Ikke interessert i Svalbard"] > h2`
- `div[title="– Ikke interessert i Svalbard"] > .meta`
- `#notice-10182368 > .content > h2`
- `#notice-10182368 > .content > .meta`
- `#notice-10182342 > .content > h2`
- `#notice-10182342 > .content > .meta`
- `#notice-10181977 > .content > h2`
- `#notice-10181977 > .content > .meta`
- `#notice-10181707 > .content > h2`
- `#notice-10181707 > .content > .meta`
- `#notice-10181706 > .content > h2`
- `#notice-10181706 > .content > .meta`
- `div[title="Cuba: Ingen dialog med USA"] > h2`
- `div[title="Cuba: Ingen dialog med USA"] > .meta`
- `#notice-10181552 > .content > h2`
- `time[datetime="2026-02-02T19:43:16.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.mobile_no_border_color.has-row-header.hasContentPadding`
- `.row.large-12.small-12:nth-child(9)`
- `#article_list_10180103 > .inner.fullwidthTarget.content`
- `.page-content > .border-bg-quaternary.mobile_border-bg-quaternary.hasBorder`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `article[data-instance="10151714"] > .content > .media > .floatingText`
- `.row.large-12.small-12:nth-child(17)`
- `.row.large-12.small-12:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(21)`
- `.page-content > .border_width_no_border_width.border_width_mobile_no_border_width.mobile_no_border_color`
- `.row.large-12.small-12:nth-child(23)`
- `.row.large-12.small-12:nth-child(24)`
- `#article_list_10184114 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `#article_list_10184103 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10184103 > .content > .scroll-container.swipehelper.snap-container-x`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(41)`
- `.row.large-12.small-12:nth-child(42)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(43)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(44)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46)`
- `.powered-by`
