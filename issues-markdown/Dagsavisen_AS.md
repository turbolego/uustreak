# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-05-24T01:09:34.707Z
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

- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(8) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(16) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(27) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(76) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(79) > h5`

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
- **Count:** 116

#### Affected Elements:

- `h1`
- `div[title="Siktet for drapsforsøk"] > h2`
- `time[datetime="2026-05-23T18:10:44.000Z"]`
- `div[title="Over 50 skadet i trikkeulykke"] > h2`
- `time[datetime="2026-05-23T17:48:10.000Z"]`
- `div[title="Innbrudd hos Finansavisen"] > h2`
- `time[datetime="2026-05-23T15:37:46.000Z"]`
- `#notice-10361591 > .content > h2`
- `time[datetime="2026-05-23T15:18:42.000Z"]`
- `div[title="Dobbeltdrapsdømt anker dommen"] > h2`
- `time[datetime="2026-05-23T14:57:00.000Z"]`
- `div[title="Meslingutbrudd: 500 barn døde"] > h2`
- `time[datetime="2026-05-23T14:06:45.000Z"]`
- `#notice-10361465 > .content > h2`
- `time[datetime="2026-05-23T12:44:17.000Z"]`
- `div[title="Uganda: Tre nye ebolatilfeller"] > h2`
- `time[datetime="2026-05-23T11:37:20.000Z"]`
- `div[title="Bare seks røde fridager i 2027"] > h2`
- `time[datetime="2026-05-23T11:35:04.000Z"]`
- `#notice-10361421 > .content > h2`
- `time[datetime="2026-05-23T11:33:53.000Z"]`
- `#notice-10361413 > .content > h2`
- `#notice-10361413 > .content > .meta`
- `#notice-10361253 > .content > h2`
- `#notice-10361253 > .content > .meta`
- `div[title="Eksplosjon i New York"] > h2`
- `div[title="Eksplosjon i New York"] > .meta`
- `#notice-10361249 > .content > h2`
- `#notice-10361249 > .content > .meta`
- `div[title="Uenighet om forsvarsforlik"] > h2`
- `div[title="Uenighet om forsvarsforlik"] > .meta`
- `div[title="Vellykket oppskyting av rakett"] > h2`
- `div[title="Vellykket oppskyting av rakett"] > .meta`
- `div[title="Streik avverget "] > h2`
- `div[title="Streik avverget "] > .meta`
- `div[title="USA frykter ebolasmitte"] > h2`
- `time[datetime="2026-05-22T19:38:36.000Z"]`
- `#notice-10361233 > .content > h2`
- `time[datetime="2026-05-22T19:37:18.000Z"]`
- `div[title="Fare for ny streik "] > h2`
- `time[datetime="2026-05-22T18:27:22.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(7)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(8)`
- `iframe[data-testid="embed-iframe"], .EpisodeOrShowWidget_coverArtContainer__65Ei9`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-small.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `iframe[data-testid="embed-iframe"], label`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articlescroller-header`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(14)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(16)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(18)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(22)`
- `.page-content > .border_width_no_border_width.border_width_mobile_no_border_width.mobile_no_border_color`
- `.page-content > .border-bg-quaternary.mobile_border-bg-quaternary.hasBorder`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(27)`
- `#article_list_10184114 > .content > .lab-scrollbox-headline.font-weight-normal.m-font-weight-normal`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `#article_list_10230577 > .content > .lab-scrollbox-headline.font-weight-normal.m-font-weight-normal`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(48)`
- `.color_mobile_no_bg_color.content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(54)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(60)`
- `.row.large-12.small-12:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.row.large-12.small-12:nth-child(64)`
- `.row.large-12.small-12:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.row.large-12.small-12:nth-child(67)`
- `.row.large-12.small-12:nth-child(68)`
- `.row.large-12.small-12:nth-child(69)`
- `.row.large-12.small-12:nth-child(70)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(71)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(72)`
- `.row.large-12.small-12:nth-child(73)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(74)`
- `.row.large-12.small-12:nth-child(75)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(76)`
- `.row.large-12.small-12:nth-child(77)`
- `.row.large-12.small-12:nth-child(78)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(79)`
- `.powered-by`
