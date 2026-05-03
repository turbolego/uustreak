# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-05-03T00:49:27.738Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`

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

- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe`
- `iframe[data-testid="embed-iframe"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 8

#### Affected Elements:

- `.font-weight-light`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(16) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(38) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(61) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(64) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(65) > .t25`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(67) > .t25`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 4

#### Affected Elements:

- `html`
- `#google_ads_iframe_\/38586112\/toppbanner_0, html`
- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe, html`
- `iframe[data-testid="embed-iframe"], html`

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
- **Count:** 102

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe, .content`
- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe, streamedby-player,#video`
- `div[title="Sørlandsbanen åpner igjen"] > h2`
- `time[datetime="2026-05-02T17:18:20.000Z"]`
- `#notice-10327309 > .content > h2`
- `time[datetime="2026-05-02T16:57:34.000Z"]`
- `div[title="Terrorsiktet 18-åring løslatt"] > h2`
- `time[datetime="2026-05-02T14:41:26.000Z"]`
- `#notice-10327221 > .content > h2`
- `time[datetime="2026-05-02T14:27:31.000Z"]`
- `#notice-10327148 > .content > h2`
- `time[datetime="2026-05-02T13:43:34.000Z"]`
- `#notice-10327147 > .content > h2`
- `time[datetime="2026-05-02T13:41:34.000Z"]`
- `div[title="Sørlandsbanen fortsatt stengt"] > h2`
- `time[datetime="2026-05-02T12:38:28.000Z"]`
- `div[title="To menn henrettet i Iran"] > h2`
- `time[datetime="2026-05-02T13:04:15.000Z"]`
- `#notice-10327104 > .content > h2`
- `time[datetime="2026-05-02T12:19:22.000Z"]`
- `div[title="Kritisk skadet i rekkehusbrann"] > h2`
- `div[title="Kritisk skadet i rekkehusbrann"] > .meta`
- `#notice-10326979 > .content > h2`
- `#notice-10326979 > .content > .meta`
- `div[title="Brann i rekkehus i Bærum"] > h2`
- `div[title="Brann i rekkehus i Bærum"] > .meta`
- `#notice-10326871 > .content > h2`
- `#notice-10326871 > .content > .meta`
- `#notice-10326870 > .content > h2`
- `#notice-10326870 > .content > .meta`
- `div[title="Hvaler: Funnet etter båtulykke"] > h2`
- `time[datetime="2026-05-01T20:06:36.000Z"]`
- `#notice-10326806 > .content > h2`
- `time[datetime="2026-05-01T18:38:44.000Z"]`
- `div[title="Sør-Norge: Stor skogbrannfare"] > h2`
- `time[datetime="2026-05-01T18:39:11.000Z"]`
- `#notice-10326797 > .content > h2`
- `time[datetime="2026-05-01T19:55:11.000Z"]`
- `#notice-10326705 > .content > h2`
- `time[datetime="2026-05-01T16:17:50.000Z"]`
- `#notice-10326489 > .content > h2`
- `time[datetime="2026-05-01T14:43:44.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
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
- `#article_list_10184114 > .content > .lab-scrollbox-headline.t25.font-weight-normal`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `#article_list_10230577 > .content > .lab-scrollbox-headline.t25.font-weight-normal`
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
- `.row.large-12.small-12:nth-child(54)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(60)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(64)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(67)`
- `.powered-by`
