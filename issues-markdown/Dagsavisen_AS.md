# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-02-26T00:41:49.272Z
**URL:** [https://www.dagsavisen.no/#](https://www.dagsavisen.no/#)
**Total Violations:** 7

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
- **Count:** 5

#### Affected Elements:

- `.has-row-header.mobile_no_border_color.hasContentPadding > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(57) > h5`

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
- `.tm17.singleline.t14 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 92

#### Affected Elements:

- `h1`
- `#notice-10222194 > .content > h2`
- `time[datetime="2026-02-25T20:49:55.000Z"]`
- `div[title="Fire drept av cubansk kystvakt"] > h2`
- `time[datetime="2026-02-25T20:08:54.000Z"]`
- `div[title="Kritiserer UDs arkiv-taushet"] > h2`
- `time[datetime="2026-02-25T18:42:45.000Z"]`
- `div[title="Slo ned på nordlysturisme"] > h2`
- `time[datetime="2026-02-25T16:41:31.000Z"]`
- `#notice-10221843 > .content > h2`
- `time[datetime="2026-02-25T15:20:02.000Z"]`
- `#notice-10221710 > .content > h2`
- `time[datetime="2026-02-25T14:18:35.000Z"]`
- `#notice-10220943 > .content > h2`
- `#notice-10220943 > .content > .meta`
- `div[title="Etterforskning av Høiby ferdig"] > h2`
- `div[title="Etterforskning av Høiby ferdig"] > .meta`
- `#notice-10220024 > .content > h2`
- `#notice-10220024 > .content > .meta`
- `#notice-10219924 > .content > h2`
- `#notice-10219924 > .content > .meta`
- `div[title="Minst 30 døde i uvær i Brasil"] > h2`
- `div[title="Minst 30 døde i uvær i Brasil"] > .meta`
- `div[title="Kongen innlagt på sykehus"] > h2`
- `time[datetime="2026-02-24T20:42:45.000Z"]`
- `#notice-10219809 > .content > h2`
- `time[datetime="2026-02-24T20:02:12.000Z"]`
- `#notice-10219802 > .content > h2`
- `time[datetime="2026-02-24T19:40:11.000Z"]`
- `#notice-10219787 > .content > h2`
- `time[datetime="2026-02-24T19:40:38.000Z"]`
- `div[title="Louvre-sjefen går av etter uro"] > h2`
- `time[datetime="2026-02-24T18:09:55.000Z"]`
- `#notice-10219744 > .content > h2`
- `time[datetime="2026-02-24T18:09:16.000Z"]`
- `div[title="Væromslag kan gi stengte veier"] > h2`
- `time[datetime="2026-02-24T14:41:55.000Z"]`
- `div[title="Kongeørn angrep hundevalp"] > h2`
- `time[datetime="2026-02-24T14:42:28.000Z"]`
- `div[title="Borch dømt for fyllekjøring"] > h2`
- `time[datetime="2026-02-24T13:43:19.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(6)`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `.row.large-12.small-12:nth-child(8)`
- `.has-row-header.mobile_no_border_color.hasContentPadding`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(12)`
- `#article_list_10187147 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10187147 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(17)`
- `.row.large-12.small-12:nth-child(18)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(21)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.row.large-12.small-12:nth-child(23)`
- `.row.large-12.small-12:nth-child(26)`
- `#article_list_10184114 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `#article_list_10184103 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10184103 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(42)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46)`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(48)`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(55)`
- `.row.large-12.small-12:nth-child(56)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(57)`
- `.powered-by`
