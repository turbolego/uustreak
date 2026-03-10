# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-03-10T02:29:27.257Z
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

- `.t20`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(39) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(51) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(55) > h5`

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
- **Count:** 91

#### Affected Elements:

- `h1`
- `#notice-10243043 > .content > h2`
- `time[datetime="2026-03-09T20:54:35.000Z"]`
- `div[title="Nesten 500 drept i Sør-Libanon"] > h2`
- `time[datetime="2026-03-09T20:39:40.000Z"]`
- `div[title="Gir Iran-spillere asyl"] > h2`
- `time[datetime="2026-03-09T20:32:36.000Z"]`
- `div[title="Oppgang på Wall Street"] > h2`
- `time[datetime="2026-03-09T20:31:38.000Z"]`
- `#notice-10243028 > .content > h2`
- `time[datetime="2026-03-09T19:49:38.000Z"]`
- `#notice-10243027 > .content > h2`
- `time[datetime="2026-03-09T20:05:49.000Z"]`
- `#notice-10243022 > .content > h2`
- `time[datetime="2026-03-09T19:03:12.000Z"]`
- `#notice-10242992 > .content > h2`
- `time[datetime="2026-03-09T17:41:51.000Z"]`
- `#notice-10242989 > .content > h2`
- `time[datetime="2026-03-09T17:24:45.000Z"]`
- `#notice-10242983 > .content > h2`
- `time[datetime="2026-03-09T16:39:04.000Z"]`
- `#notice-10242980 > .content > h2`
- `time[datetime="2026-03-09T16:14:19.000Z"]`
- `#notice-10242979 > .content > h2`
- `time[datetime="2026-03-09T16:12:54.000Z"]`
- `#notice-10242845 > .content > h2`
- `time[datetime="2026-03-09T16:13:24.000Z"]`
- `#notice-10242746 > .content > h2`
- `time[datetime="2026-03-09T14:16:00.000Z"]`
- `#notice-10242744 > .content > h2`
- `time[datetime="2026-03-09T14:10:39.000Z"]`
- `#notice-10242259 > .content > h2`
- `time[datetime="2026-03-09T11:37:55.000Z"]`
- `div[title="BankID-appen med nye krav"] > h2`
- `time[datetime="2026-03-09T10:27:05.000Z"]`
- `div[title="Eksplosjon ved synagoge"] > h2`
- `time[datetime="2026-03-09T09:13:31.000Z"]`
- `div[title="Flere vil ta politiutdanning"] > h2`
- `time[datetime="2026-03-09T09:13:02.000Z"]`
- `div[title="Gassprisen opp 30 prosent"] > h2`
- `time[datetime="2026-03-09T07:42:37.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(12)`
- `.row.large-12.small-12:nth-child(13)`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `#article_list_10187147 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10187147 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(18)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(21)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.mobile_no_border_side.hasBorder.mobile-hasBorder`
- `.row.large-12.small-12:nth-child(26)`
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
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(39)`
- `#article_list_10230577 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(42)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46)`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(48)`
- `.row.large-12.small-12:nth-child(49)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(55)`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `.powered-by`
