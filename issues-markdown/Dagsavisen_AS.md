# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-03-17T00:45:15.442Z
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
- **Count:** 6

#### Affected Elements:

- `.font-weight-light`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(48) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(51) > h5`

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
- **Count:** 87

#### Affected Elements:

- `h1`
- `#notice-10253651 > .content > h2`
- `time[datetime="2026-03-16T19:59:14.000Z"]`
- `div[title="Spedbarn falt flere etasjer"] > h2`
- `time[datetime="2026-03-16T19:56:34.000Z"]`
- `div[title="Hele Cuba uten strøm"] > h2`
- `time[datetime="2026-03-16T18:59:42.000Z"]`
- `div[title="Kommunene bes rustes for krise"] > h2`
- `time[datetime="2026-03-16T16:09:38.000Z"]`
- `div[title="Mann funnet død etter brann"] > h2`
- `time[datetime="2026-03-16T14:45:15.000Z"]`
- `#notice-10253257 > .content > h2`
- `time[datetime="2026-03-16T14:44:44.000Z"]`
- `div[title="Soldater forstyrret reinflokk"] > h2`
- `time[datetime="2026-03-16T14:17:20.000Z"]`
- `#notice-10253172 > .content > h2`
- `time[datetime="2026-03-16T13:58:09.000Z"]`
- `#notice-10252523 > .content > h2`
- `#notice-10252523 > .content > .meta`
- `#notice-10252371 > .content > h2`
- `#notice-10252371 > .content > .meta`
- `#notice-10252128 > .content > h2`
- `#notice-10252128 > .content > .meta`
- `div[title="Børsoppgang da Oslo Børs åpnet"] > h2`
- `div[title="Børsoppgang da Oslo Børs åpnet"] > .meta`
- `#notice-10251624 > .content > h2`
- `#notice-10251624 > .content > .meta`
- `#notice-10251623 > .content > h2`
- `time[datetime="2026-03-16T06:20:56.000Z"]`
- `div[title="Bilbrann i Oslo"] > h2`
- `div[title="Bilbrann i Oslo"] > .meta`
- `#notice-10251479 > .content > h2`
- `time[datetime="2026-03-15T20:10:13.000Z"]`
- `div[title="Frekke scoringer da KFUM vant"] > h2`
- `time[datetime="2026-03-15T18:07:06.000Z"]`
- `#notice-10251445 > .content > h2`
- `time[datetime="2026-03-15T18:05:42.000Z"]`
- `#notice-10251441 > .content > h2`
- `time[datetime="2026-03-15T17:12:02.000Z"]`
- `#notice-10251262 > .content > h2`
- `time[datetime="2026-03-15T12:57:09.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(4)`
- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], h1`
- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], a[dir="auto"]`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.bg-tertiary.color_mobile_bg-tertiary.mobile_no_border_side`
- `.row.large-12.small-12:nth-child(12)`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(16)`
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
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `#article_list_10230577 > .content > .font-weight-normal.m-font-weight-normal.font-PTSans`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(42)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(48)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(51)`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `.powered-by`
