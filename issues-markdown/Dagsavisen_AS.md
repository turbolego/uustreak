# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-04-16T11:22:02.993Z
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
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(38) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(54) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(56) > h5`

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
- **Count:** 91

#### Affected Elements:

- `h1`
- `#notice-10301912 > .content > h2`
- `#notice-10301912 > .content > .meta`
- `#notice-10301849 > .content > h2`
- `#notice-10301849 > .content > .meta`
- `#notice-10300854 > .content > h2`
- `#notice-10300854 > .content > .meta`
- `#notice-10300840 > .content > h2`
- `#notice-10300840 > .content > .meta`
- `div[title="Nkom åpner tilsyn med Telia"] > h2`
- `div[title="Nkom åpner tilsyn med Telia"] > .meta`
- `#notice-10300265 > .content > h2`
- `#notice-10300265 > .content > .meta`
- `div[title="Libanon og Israel nær avtale"] > h2`
- `div[title="Libanon og Israel nær avtale"] > .meta`
- `#notice-10300246 > .content > h2`
- `#notice-10300246 > .content > .meta`
- `#notice-10300198 > .content > h2`
- `#notice-10300198 > .content > .meta`
- `#notice-10300103 > .content > h2`
- `#notice-10300103 > .content > .meta`
- `div[title="Kjempesmell for Norse Atlantic"] > h2`
- `div[title="Kjempesmell for Norse Atlantic"] > .meta`
- `#notice-10299413 > .content > h2`
- `time[datetime="2026-04-15T12:10:10.000Z"]`
- `div[title="Jo Nesbø vant Rivertonprisen"] > h2`
- `time[datetime="2026-04-15T11:12:19.000Z"]`
- `#notice-10298840 > .content > h2`
- `time[datetime="2026-04-15T08:50:55.000Z"]`
- `#notice-10298743 > .content > h2`
- `time[datetime="2026-04-15T12:08:18.000Z"]`
- `#notice-10298742 > .content > h2`
- `time[datetime="2026-04-15T08:29:51.000Z"]`
- `#notice-10298361 > .content > h2`
- `time[datetime="2026-04-15T06:49:35.000Z"]`
- `#notice-10298270 > .content > h2`
- `time[datetime="2026-04-15T05:20:56.000Z"]`
- `#notice-10298269 > .content > h2`
- `time[datetime="2026-04-15T05:20:20.000Z"]`
- `#notice-10298268 > .content > h2`
- `time[datetime="2026-04-15T05:19:31.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `.bg-tertiary.color_mobile_bg-tertiary.mobile_no_border_side`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(12)`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articlescroller-header`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(14)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .align-left.mobile_text_align_align-left.articlescroller-header`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(22)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `.row.large-12.small-12:nth-child(27)`
- `#article_list_10184114 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `#article_list_10230577 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.italic.m-italic.align-center`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(48)`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(51)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(54)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(56)`
- `.powered-by`
