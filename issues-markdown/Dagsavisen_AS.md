# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-06-27T01:10:51.106Z
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

- `.t14[data-lab-text_size_desktop="14"] > a:nth-child(5)`

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
- **Count:** 8

#### Affected Elements:

- `.has-row-header.color_mobile_no_bg_color.hasContentPadding > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(22) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(33) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(34) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > .font-weight-normal.m-font-weight-normal`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52) > .font-weight-normal.m-font-weight-normal`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(70) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(74) > h5`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.mainMenu`
- `#markup_10397501 > .fullwidthTarget.content > unite-player,mux-player,media-theme,media-controller`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `.singleline.font-PTSans.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 111

#### Affected Elements:

- `h1`
- `#notice-10417641 > .content > h2`
- `time[datetime="2026-06-26T20:27:22.000Z"]`
- `#notice-10417640 > .content > h2`
- `time[datetime="2026-06-26T20:26:22.000Z"]`
- `#notice-10417639 > .content > h2`
- `time[datetime="2026-06-26T20:25:57.000Z"]`
- `#notice-10417602 > .content > h2`
- `time[datetime="2026-06-26T18:50:55.000Z"]`
- `#notice-10417601 > .content > h2`
- `time[datetime="2026-06-26T18:50:13.000Z"]`
- `#notice-10417102 > .content > h2`
- `time[datetime="2026-06-26T12:39:31.000Z"]`
- `#notice-10417097 > .content > h2`
- `time[datetime="2026-06-26T12:38:09.000Z"]`
- `#notice-10417088 > .content > h2`
- `time[datetime="2026-06-26T12:37:35.000Z"]`
- `div[title="Utestedet Salt stengt på dagen"] > h2`
- `time[datetime="2026-06-26T10:50:32.000Z"]`
- `#notice-10416585 > .content > h2`
- `time[datetime="2026-06-26T10:37:43.000Z"]`
- `div[title="100 pågrepet før Nato-toppmøte"] > h2`
- `time[datetime="2026-06-26T10:04:05.000Z"]`
- `#notice-10416294 > .content > h2`
- `time[datetime="2026-06-26T09:03:59.000Z"]`
- `#notice-10416238 > .content > h2`
- `time[datetime="2026-06-26T09:57:24.000Z"]`
- `div[title="Høyre vil ha lesereform"] > h2`
- `time[datetime="2026-06-26T08:41:01.000Z"]`
- `#notice-10415988 > .content > h2`
- `time[datetime="2026-06-26T07:44:21.000Z"]`
- `div[title="Her blir flest rådyr påkjørt"] > h2`
- `time[datetime="2026-06-26T07:42:09.000Z"]`
- `#notice-10415846 > .content > h2`
- `time[datetime="2026-06-26T06:44:51.000Z"]`
- `div[title="Over 300 døde i ebolautbrudd"] > h2`
- `time[datetime="2026-06-26T05:11:25.000Z"]`
- `div[title="Oljeprisen stiger etter angrep"] > h2`
- `time[datetime="2026-06-26T05:10:01.000Z"]`
- `div[title="Tenåring døde etter badeulykke"] > h2`
- `time[datetime="2026-06-26T05:01:14.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `iframe[data-testid="embed-iframe"], .EpisodeOrShowWidget_coverArtContainer__65Ei9`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-small.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `iframe[data-testid="embed-iframe"], label`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.has-row-header.color_mobile_no_bg_color.hasContentPadding`
- `.row.large-12.small-12:nth-child(16)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(22)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.page-content > .border-bg-quaternary.mobile_border-bg-quaternary.hasBorder`
- `.row.large-12.small-12:nth-child(27)`
- `#article_list_10184114 > .content > .lab-scrollbox-headline.font-weight-normal.m-font-weight-normal`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(33)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `#article_list_10230577 > .content > .lab-scrollbox-headline.font-weight-normal.m-font-weight-normal`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(48)`
- `.color_mobile_no_bg_color.content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(51)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(54)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(60)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(63)`
- `.row.large-12.small-12:nth-child(64)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.row.large-12.small-12:nth-child(67)`
- `.row.large-12.small-12:nth-child(68)`
- `.row.large-12.small-12:nth-child(69)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(70)`
- `.row.large-12.small-12:nth-child(71)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(72)`
- `.row.large-12.small-12:nth-child(73)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(74)`
- `.powered-by`
