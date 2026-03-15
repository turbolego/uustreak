# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-03-15T00:48:37.422Z
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

- `.t20`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(18) > h5`
- `.has-row-header.row.large-12:nth-child(26) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32) > .font-weight-normal.m-font-weight-normal`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46) > .font-weight-normal.m-font-weight-normal.t25`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(51) > .font-weight-normal.m-font-weight-normal.t25`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(64) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(65) > h5`

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
- `.tm17.singleline.font-PTSans > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 100

#### Affected Elements:

- `h1`
- `div[title="Over 100 barn drept i Libanon"] > h2`
- `time[datetime="2026-03-14T16:24:48.000Z"]`
- `div[title="Norsk-kanadisk romavtale"] > h2`
- `time[datetime="2026-03-14T15:04:39.000Z"]`
- `div[title="Ambassadebomben: To anker"] > h2`
- `time[datetime="2026-03-14T14:34:58.000Z"]`
- `div[title="Jürgen Habermas er død"] > h2`
- `time[datetime="2026-03-14T15:48:24.000Z"]`
- `div[title="Eksplosjon ved jødisk skole"] > h2`
- `time[datetime="2026-03-14T13:21:52.000Z"]`
- `#notice-10250806 > .content > h2`
- `time[datetime="2026-03-14T13:02:45.000Z"]`
- `#notice-10250798 > .content > h2`
- `time[datetime="2026-03-14T12:30:42.000Z"]`
- `div[title="Iran lar indiske skip passere"] > h2`
- `time[datetime="2026-03-14T12:24:52.000Z"]`
- `#notice-10250722 > .content > h2`
- `#notice-10250722 > .content > .meta`
- `#notice-10250721 > .content > h2`
- `#notice-10250721 > .content > .meta`
- `#notice-10250698 > .content > h2`
- `#notice-10250698 > .content > .meta`
- `#notice-10250678 > .content > h2`
- `#notice-10250678 > .content > .meta`
- `div[title="773 drept i israelske angrep"] > h2`
- `div[title="773 drept i israelske angrep"] > .meta`
- `#notice-10249686 > .content > h2`
- `time[datetime="2026-03-13T12:24:19.000Z"]`
- `#notice-10249189 > .content > h2`
- `time[datetime="2026-03-13T09:50:00.000Z"]`
- `#notice-10248980 > .content > h2`
- `time[datetime="2026-03-13T08:55:40.000Z"]`
- `div[title="Stålplater kan blåse av gårde"] > h2`
- `time[datetime="2026-03-13T08:35:01.000Z"]`
- `div[title="Iran: Truer demonstranter"] > h2`
- `time[datetime="2026-03-13T07:59:17.000Z"]`
- `div[title="USA: 6000 mål rammet i Iran"] > h2`
- `time[datetime="2026-03-13T06:07:58.000Z"]`
- `#notice-10248770 > .content > h2`
- `time[datetime="2026-03-13T06:05:31.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], h1`
- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], a[dir="auto"]`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.mobile_no_border_side.hasBorder.mobile-hasBorder`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(14)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `#article_list_10187147 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10187147 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(18)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(21)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.row.large-12.small-12:nth-child(23)`
- `.has-row-header.row.large-12:nth-child(26)`
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
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(43)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46)`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(48)`
- `.row.large-12.small-12:nth-child(49)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(51)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(55)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(60)`
- `.row.large-12.small-12:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(64)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(65)`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `.powered-by`
