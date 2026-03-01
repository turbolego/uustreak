# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-03-01T00:34:55.000Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 7

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `a[href$="mailto:anne@dagsavisen.no"]`

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
- **Count:** 5

#### Affected Elements:

- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe`
- `#offer_a8688bd5c0038a134f94-0`
- `iframe[data-testid="embed-iframe"]`
- `#offer_a8688bd5c0038a134f94-1`
- `#offer_69e1b5b72ff1f3f5badd-0`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 5

#### Affected Elements:

- `.bg-primary > h5`
- `.has-row-header.mobile_no_border_color.hasContentPadding > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(18) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(43) > h5`

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
- **Count:** 93

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe, .content`
- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe, streamedby-player,#video`
- `div[title="Ny angrepsbølge fra Iran"] > h2`
- `time[datetime="2026-02-28T21:17:01.000Z"]`
- `div[title="Trump: Khamenei er død"] > h2`
- `time[datetime="2026-02-28T21:48:11.000Z"]`
- `#notice-10228124 > .content > h2`
- `time[datetime="2026-02-28T19:59:42.000Z"]`
- `#notice-10228121 > .content > h2`
- `time[datetime="2026-02-28T19:27:56.000Z"]`
- `#notice-10228120 > .content > h2`
- `time[datetime="2026-02-28T19:03:48.000Z"]`
- `div[title="Støre: – Sterkt urovekkende"] > h2`
- `time[datetime="2026-02-28T18:42:53.000Z"]`
- `#notice-10228104 > .content > h2`
- `time[datetime="2026-02-28T18:35:48.000Z"]`
- `div[title="Iran: 201 drept i USA-angrep"] > h2`
- `time[datetime="2026-02-28T18:27:14.000Z"]`
- `#notice-10228102 > .content > h2`
- `time[datetime="2026-02-28T18:32:56.000Z"]`
- `#notice-10228095 > .content > h2`
- `time[datetime="2026-02-28T18:24:25.000Z"]`
- `#notice-10228080 > .content > h2`
- `time[datetime="2026-02-28T17:22:52.000Z"]`
- `#notice-10228071 > .content > h2`
- `time[datetime="2026-02-28T16:45:56.000Z"]`
- `div[title="Bilferge står på grunn "] > h2`
- `time[datetime="2026-02-28T16:45:04.000Z"]`
- `#notice-10228026 > .content > h2`
- `time[datetime="2026-02-28T16:16:12.000Z"]`
- `div[title="Hastemøte i FNs sikkerhetsråd"] > h2`
- `time[datetime="2026-02-28T14:55:57.000Z"]`
- `#notice-10227882 > .content > h2`
- `time[datetime="2026-02-28T14:14:44.000Z"]`
- `div[title="PST: Trusselbildet er uendret"] > h2`
- `time[datetime="2026-02-28T14:12:46.000Z"]`
- `#notice-10227878 > .content > h2`
- `time[datetime="2026-02-28T14:11:41.000Z"]`
- `#notice-10227584 > .content > h2`
- `#notice-10227584 > .content > .meta`
- `#notice-10227547 > .content > h2`
- `#notice-10227547 > .content > .meta`
- `.bg-primary`
- `.row.large-12.small-12:nth-child(3)`
- `#offer_a8688bd5c0038a134f94-0, img`
- `#offer_a8688bd5c0038a134f94-0, .pw-text`
- `.row.large-12.small-12:nth-child(6)`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `.has-row-header.mobile_no_border_color.hasContentPadding`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `#article_list_10187147 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10187147 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(18)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(21)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.row.large-12.small-12:nth-child(23)`
- `#offer_a8688bd5c0038a134f94-1, img`
- `#offer_a8688bd5c0038a134f94-1, .pw-text`
- `.row.large-12.small-12:nth-child(26)`
- `#article_list_10184114 > .content > .font-weight-normal.m-font-weight-normal.t25`
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
- `#article_list_10184103 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10184103 > .content > .scroll-container.swipehelper.snap-container-x`
- `.bg-tertiary`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(43)`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `#offer_69e1b5b72ff1f3f5badd-0, img`
- `#offer_69e1b5b72ff1f3f5badd-0, .pw-subtitle`
- `#offer_69e1b5b72ff1f3f5badd-0, .pw-offer`
- `#offer_69e1b5b72ff1f3f5badd-0, #pw-countdown`
- `.powered-by`
