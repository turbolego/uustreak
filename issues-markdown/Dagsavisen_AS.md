# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-05-12T01:04:48.474Z
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
- **Count:** 8

#### Affected Elements:

- `.t20`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(16) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(54) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(64) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(67) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(69) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(71) > h5`

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
- `.tm17.singleline.font-PTSans > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 108

#### Affected Elements:

- `h1`
- `#notice-10341573 > .content > h2`
- `#notice-10341573 > .content > .meta`
- `#notice-10341572 > .content > h2`
- `#notice-10341572 > .content > .meta`
- `#notice-10341562 > .content > h2`
- `#notice-10341562 > .content > .meta`
- `#notice-10341507 > .content > h2`
- `#notice-10341507 > .content > .meta`
- `#notice-10341482 > .content > h2`
- `#notice-10341482 > .content > .meta`
- `#notice-10341448 > .content > h2`
- `#notice-10341448 > .content > .meta`
- `div[title="Høiby-anke leveres i dag"] > h2`
- `div[title="Høiby-anke leveres i dag"] > .meta`
- `div[title="Flere banker setter opp renta"] > h2`
- `time[datetime="2026-05-11T11:45:23.000Z"]`
- `div[title="Tilbakekaller Rema-salami"] > h2`
- `time[datetime="2026-05-11T11:26:02.000Z"]`
- `div[title="17. mai: Melder godt bunadsvær"] > h2`
- `time[datetime="2026-05-11T11:18:47.000Z"]`
- `div[title="Høiby får dommen 15. juni"] > h2`
- `time[datetime="2026-05-11T11:11:12.000Z"]`
- `div[title="Viste fram machete på tog"] > h2`
- `time[datetime="2026-05-11T11:10:18.000Z"]`
- `#notice-10340749 > .content > h2`
- `time[datetime="2026-05-11T10:37:30.000Z"]`
- `#notice-10340639 > .content > h2`
- `time[datetime="2026-05-11T09:55:08.000Z"]`
- `div[title="DNB setter opp boliglånsrenten"] > h2`
- `time[datetime="2026-05-11T10:03:33.000Z"]`
- `div[title="Sudan: 900 drept i droneangrep"] > h2`
- `time[datetime="2026-05-11T09:50:47.000Z"]`
- `#notice-10340487 > .content > h2`
- `time[datetime="2026-05-11T09:24:32.000Z"]`
- `#notice-10340486 > .content > h2`
- `time[datetime="2026-05-11T09:23:49.000Z"]`
- `#notice-10339948 > .content > h2`
- `time[datetime="2026-05-11T06:47:13.000Z"]`
- `div[title="Testet positivt på hantavirus"] > h2`
- `time[datetime="2026-05-11T07:23:34.000Z"]`
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
- `.bg-tertiary.color_mobile_bg-tertiary.mobile_no_border_side`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articlescroller-header`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(14)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(16)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(22)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `.row.large-12.small-12:nth-child(27)`
- `#article_list_10184114 > .content > .lab-scrollbox-headline.font-PTSans.font-weight-normal`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `#article_list_10230577 > .content > .lab-scrollbox-headline.font-PTSans.font-weight-normal`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(48)`
- `.color_mobile_no_bg_color.content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(54)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(60)`
- `.row.large-12.small-12:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(64)`
- `.row.large-12.small-12:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(67)`
- `.row.large-12.small-12:nth-child(68)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(69)`
- `.row.large-12.small-12:nth-child(70)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(71)`
- `.powered-by`
