# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-04-23T00:57:39.954Z
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

- `#markup_10268378 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"]`
- `#markup_10311343 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 7

#### Affected Elements:

- `.t20`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(34) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(43) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(51) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(64) > h5`

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
- **Count:** 98

#### Affected Elements:

- `h1`
- `#notice-10311925 > .content > h2`
- `#notice-10311925 > .content > .meta`
- `#notice-10311910 > .content > h2`
- `#notice-10311910 > .content > .meta`
- `#notice-10311885 > .content > h2`
- `#notice-10311885 > .content > .meta`
- `#notice-10311884 > .content > h2`
- `#notice-10311884 > .content > .meta`
- `#notice-10311749 > .content > h2`
- `#notice-10311749 > .content > .meta`
- `#notice-10310845 > .content > h2`
- `time[datetime="2026-04-22T11:11:15.000Z"]`
- `div[title="EU har godkjent Ukraina-lån"] > h2`
- `time[datetime="2026-04-22T11:14:18.000Z"]`
- `div[title="ICC avviste Duterte-anke"] > h2`
- `time[datetime="2026-04-22T10:45:45.000Z"]`
- `div[title="Kvinne siktet for drapsforsøk"] > h2`
- `time[datetime="2026-04-22T10:30:16.000Z"]`
- `#notice-10310488 > .content > h2`
- `time[datetime="2026-04-22T09:36:44.000Z"]`
- `#notice-10310416 > .content > h2`
- `time[datetime="2026-04-22T09:16:06.000Z"]`
- `#notice-10310415 > .content > h2`
- `time[datetime="2026-04-22T09:15:12.000Z"]`
- `div[title="Brann i bygård på Majorstuen"] > h2`
- `time[datetime="2026-04-22T09:20:15.000Z"]`
- `#notice-10310242 > .content > h2`
- `time[datetime="2026-04-22T08:38:34.000Z"]`
- `#notice-10309745 > .content > h2`
- `time[datetime="2026-04-22T07:59:46.000Z"]`
- `div[title="Fem døde i fangeopprør"] > h2`
- `time[datetime="2026-04-22T05:07:42.000Z"]`
- `div[title="Ungarn: Magyar tas i ed 9. mai"] > h2`
- `time[datetime="2026-04-22T05:07:10.000Z"]`
- `div[title="Konteinerskip beskutt av Iran"] > h2`
- `time[datetime="2026-04-22T06:36:25.000Z"]`
- `#notice-10309396 > .content > h2`
- `time[datetime="2026-04-21T19:46:24.000Z"]`
- `#notice-10309339 > .content > h2`
- `time[datetime="2026-04-21T19:46:50.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(7)`
- `#markup_10268378 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], h1`
- `#markup_10268378 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `#markup_10268378 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], a[dir="auto"]`
- `.row.large-12.small-12:nth-child(9)`
- `.bg-tertiary.color_mobile_bg-tertiary.mobile_no_border_side`
- `.row.large-12.small-12:nth-child(12)`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articlescroller-header`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(14)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(18)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(22)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `.row.large-12.small-12:nth-child(27)`
- `#article_list_10184114 > .content > .lab-scrollbox-headline.t25.font-weight-normal`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `#article_list_10230577 > .content > .lab-scrollbox-headline.t25.font-weight-normal`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(46)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(48)`
- `.color_mobile_no_bg_color.content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(54)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(60)`
- `.row.large-12.small-12:nth-child(61)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(64)`
- `.powered-by`
