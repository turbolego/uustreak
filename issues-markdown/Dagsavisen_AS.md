# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-04-12T01:06:29.086Z
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
- **Count:** 3

#### Affected Elements:

- `#offer_cae0c9fe7be02abfd9f0-0`
- `iframe[data-testid="embed-iframe"]`
- `#offer_03e5d4db8ab8972ef0d4-0`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 7

#### Affected Elements:

- `.font-weight-light`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(12) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(17) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(38) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(55) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(56) > h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `#offer_cae0c9fe7be02abfd9f0-0, img`
- `#offer_03e5d4db8ab8972ef0d4-0, img`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.mainMenu`
- `#markup_10275631 > .fullwidthTarget.content > unite-player,mux-player,media-theme,media-controller`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 5

#### Affected Elements:

- `#google_ads_iframe_\/38586112\/toppbanner_0, #aw0`
- `#offer_cae0c9fe7be02abfd9f0-0, a`
- `#offer_03e5d4db8ab8972ef0d4-0, a`
- `a[href$="mailto:kb@dagsavisen.no"]`
- `.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 94

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `#notice-10293483 > .content > h2`
- `time[datetime="2026-04-11T22:16:52.000Z"]`
- `div[title="Frontfaget: Mekling på overtid"] > h2`
- `time[datetime="2026-04-11T22:15:49.000Z"]`
- `div[title="Oslo: Laget flammer i butikk"] > h2`
- `time[datetime="2026-04-11T15:20:23.000Z"]`
- `#notice-10293396 > .content > h2`
- `time[datetime="2026-04-11T15:18:54.000Z"]`
- `div[title="Eva Franko Aas ny studentleder"] > h2`
- `time[datetime="2026-04-11T13:59:16.000Z"]`
- `#notice-10293288 > .content > h2`
- `time[datetime="2026-04-11T13:20:17.000Z"]`
- `#notice-10293274 > .content > h2`
- `time[datetime="2026-04-11T12:56:01.000Z"]`
- `#notice-10293187 > .content > h2`
- `time[datetime="2026-04-11T11:33:16.000Z"]`
- `#notice-10293180 > .content > h2`
- `time[datetime="2026-04-11T11:11:58.000Z"]`
- `#notice-10293171 > .content > h2`
- `time[datetime="2026-04-11T10:32:21.000Z"]`
- `#notice-10293144 > .content > h2`
- `time[datetime="2026-04-11T09:56:26.000Z"]`
- `div[title="Turfølge funnet i god behold"] > h2`
- `time[datetime="2026-04-11T09:42:33.000Z"]`
- `div[title="Velle gir seg som FpU-leder"] > h2`
- `time[datetime="2026-04-11T09:44:45.000Z"]`
- `#notice-10293085 > .content > h2`
- `time[datetime="2026-04-11T09:45:35.000Z"]`
- `#notice-10293078 > .content > h2`
- `time[datetime="2026-04-11T08:02:20.000Z"]`
- `#notice-10292939 > .content > h2`
- `time[datetime="2026-04-10T20:02:34.000Z"]`
- `div[title="Picasso-maleri loddes ut"] > h2`
- `time[datetime="2026-04-10T19:01:40.000Z"]`
- `div[title="Venezuela: Krever valg"] > h2`
- `time[datetime="2026-04-10T18:15:58.000Z"]`
- `#notice-10292872 > .content > h2`
- `time[datetime="2026-04-10T18:14:30.000Z"]`
- `#notice-10292814 > .content > h2`
- `time[datetime="2026-04-10T17:11:54.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `#offer_cae0c9fe7be02abfd9f0-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `.bg-tertiary.color_mobile_bg-tertiary.mobile_no_border_side`
- `.row.large-12.small-12:nth-child(9)`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articlescroller-header`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(12)`
- `.row.large-12.small-12:nth-child(13)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(16)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(17)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(19)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `#offer_03e5d4db8ab8972ef0d4-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(24)`
- `#article_list_10184114 > .content > .t25.font-weight-normal.m-font-weight-normal`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(38)`
- `#article_list_10230577 > .content > .t25.font-weight-normal.m-font-weight-normal`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(42)`
- `.row.large-12.small-12:nth-child(43)`
- `.italic.m-italic.align-center`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(46)`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(48)`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.row.large-12.small-12:nth-child(54)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(55)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(56)`
- `.powered-by`
