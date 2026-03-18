# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-03-18T00:43:06.042Z
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

- `.large-8.large-abs-8.text_singleline > .singleline`

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
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(53) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(56) > h5`

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
- **Count:** 91

#### Affected Elements:

- `h1`
- `div[title="Montenegro på vei inn i EU"] > h2`
- `time[datetime="2026-03-17T20:22:03.000Z"]`
- `#notice-10255923 > .content > h2`
- `time[datetime="2026-03-17T19:33:50.000Z"]`
- `#notice-10255918 > .content > h2`
- `time[datetime="2026-03-17T19:32:26.000Z"]`
- `div[title="Bekrefter at Basij-sjef er død"] > h2`
- `time[datetime="2026-03-17T19:20:54.000Z"]`
- `div[title="Dropper kutt i postleveringen"] > h2`
- `time[datetime="2026-03-17T18:31:27.000Z"]`
- `#notice-10255860 > .content > h2`
- `time[datetime="2026-03-17T17:55:08.000Z"]`
- `div[title="Rubio: Cuba trenger ny ledelse"] > h2`
- `time[datetime="2026-03-17T16:45:13.000Z"]`
- `#notice-10255745 > .content > h2`
- `time[datetime="2026-03-17T16:19:12.000Z"]`
- `#notice-10255744 > .content > h2`
- `time[datetime="2026-03-17T16:42:59.000Z"]`
- `div[title="Trump: Trenger ikke bistand"] > h2`
- `time[datetime="2026-03-17T16:10:47.000Z"]`
- `#notice-10255608 > .content > h2`
- `time[datetime="2026-03-17T14:48:31.000Z"]`
- `div[title="Spionthriller-forfatter død"] > h2`
- `time[datetime="2026-03-17T14:47:48.000Z"]`
- `#notice-10255588 > .content > h2`
- `time[datetime="2026-03-17T14:46:41.000Z"]`
- `#notice-10255144 > .content > h2`
- `#notice-10255144 > .content > .meta`
- `#notice-10254871 > .content > h2`
- `#notice-10254871 > .content > .meta`
- `#notice-10254649 > .content > h2`
- `#notice-10254649 > .content > .meta`
- `#notice-10254459 > .content > h2`
- `#notice-10254459 > .content > .meta`
- `#notice-10254064 > .content > h2`
- `#notice-10254064 > .content > .meta`
- `#notice-10253940 > .content > h2`
- `#notice-10253940 > .content > .meta`
- `div[title="Blodig angrep mot by i Nigeria"] > h2`
- `div[title="Blodig angrep mot by i Nigeria"] > .meta`
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
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `#article_list_10230577 > .content > .font-weight-normal.m-font-weight-normal.font-PTSans`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(42)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46)`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(48)`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(53)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(56)`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `.powered-by`
