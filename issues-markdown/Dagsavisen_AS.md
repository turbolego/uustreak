# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-03-19T00:47:24.235Z
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

- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][allowfullscreen=""]`
- `#markup_10212819 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][allowfullscreen=""]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 5

#### Affected Elements:

- `.t20`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(51) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(53) > h5`

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
- **Count:** 89

#### Affected Elements:

- `h1`
- `div[title="Store skader på gassanlegg"] > h2`
- `time[datetime="2026-03-18T19:50:39.000Z"]`
- `div[title="USA: Holder renten uendret"] > h2`
- `time[datetime="2026-03-18T18:16:16.000Z"]`
- `div[title="Rekordbeslag av håndgranater"] > h2`
- `time[datetime="2026-03-18T18:07:22.000Z"]`
- `div[title="Stjal 15 tonn gummibjørner"] > h2`
- `time[datetime="2026-03-18T17:58:01.000Z"]`
- `div[title="Oslo Børs stengte på ny rekord"] > h2`
- `time[datetime="2026-03-18T16:39:10.000Z"]`
- `div[title="Riyadh: Flere eksplosjoner"] > h2`
- `time[datetime="2026-03-18T16:38:30.000Z"]`
- `#notice-10257907 > .content > h2`
- `time[datetime="2026-03-18T17:31:48.000Z"]`
- `div[title="En omkom da gondol falt ned"] > h2`
- `time[datetime="2026-03-18T15:21:55.000Z"]`
- `#notice-10257643 > .content > h2`
- `time[datetime="2026-03-18T14:22:44.000Z"]`
- `div[title="Kronen styrkes mot euroen"] > h2`
- `time[datetime="2026-03-18T14:07:10.000Z"]`
- `div[title="Rekordmange politi-varslinger"] > h2`
- `time[datetime="2026-03-18T13:42:30.000Z"]`
- `div[title="Norwegian med ekstraflyginger"] > h2`
- `time[datetime="2026-03-18T13:41:21.000Z"]`
- `#notice-10257207 > .content > h2`
- `#notice-10257207 > .content > .meta`
- `#notice-10257090 > .content > h2`
- `#notice-10257090 > .content > .meta`
- `#notice-10256954 > .content > h2`
- `#notice-10256954 > .content > .meta`
- `#notice-10256573 > .content > h2`
- `#notice-10256573 > .content > .meta`
- `div[title="Oljefunn i Barentshavet"] > h2`
- `div[title="Oljefunn i Barentshavet"] > .meta`
- `#notice-10256134 > .content > h2`
- `#notice-10256134 > .content > .meta`
- `#notice-10256131 > .content > h2`
- `#notice-10256131 > .content > .meta`
- `#notice-10256075 > .content > h2`
- `#notice-10256075 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][allowfullscreen=""], h1`
- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][allowfullscreen=""], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][allowfullscreen=""], a[dir="auto"]`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.bg-tertiary.color_mobile_bg-tertiary.mobile_no_border_side`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
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
- `#article_list_10184114 > .content > .font-weight-normal.m-font-weight-normal.font-PTSans`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `#article_list_10230577 > .content > .font-weight-normal.m-font-weight-normal.font-PTSans`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(42)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(48)`
- `.row.large-12.small-12:nth-child(49)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(51)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(53)`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `.powered-by`
