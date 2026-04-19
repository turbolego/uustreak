# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-04-19T01:07:31.737Z
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
- **Count:** 4

#### Affected Elements:

- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe`
- `#offer_cae0c9fe7be02abfd9f0-0`
- `iframe[data-testid="embed-iframe"]`
- `#offer_03e5d4db8ab8972ef0d4-0`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 5

#### Affected Elements:

- `.t20`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(42) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(60) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(62) > h5`

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
- `#markup_10295897 > .fullwidthTarget.content > unite-player,mux-player,media-theme,media-controller`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- `#offer_cae0c9fe7be02abfd9f0-0, a`
- `#offer_03e5d4db8ab8972ef0d4-0, a`
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
- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe, madington-player,#video`
- `#notice-10304938 > .content > h2`
- `#notice-10304938 > .content > .meta`
- `#notice-10304907 > .content > h2`
- `#notice-10304907 > .content > .meta`
- `#notice-10304838 > .content > h2`
- `#notice-10304838 > .content > .meta`
- `#notice-10304723 > .content > h2`
- `#notice-10304723 > .content > .meta`
- `#notice-10304704 > .content > h2`
- `#notice-10304704 > .content > .meta`
- `#notice-10304604 > .content > h2`
- `#notice-10304604 > .content > .meta`
- `#notice-10304536 > .content > h2`
- `#notice-10304536 > .content > .meta`
- `#notice-10304535 > .content > h2`
- `#notice-10304535 > .content > .meta`
- `#notice-10304534 > .content > h2`
- `#notice-10304534 > .content > .meta`
- `#notice-10304533 > .content > h2`
- `#notice-10304533 > .content > .meta`
- `div[title="Oslo Børs gikk rett ned "] > h2`
- `div[title="Oslo Børs gikk rett ned "] > .meta`
- `#notice-10303717 > .content > h2`
- `#notice-10303717 > .content > .meta`
- `#notice-10303716 > .content > h2`
- `#notice-10303716 > .content > .meta`
- `#notice-10303715 > .content > h2`
- `#notice-10303715 > .content > .meta`
- `#notice-10303082 > .content > h2`
- `#notice-10303082 > .content > .meta`
- `#notice-10303012 > .content > h2`
- `#notice-10303012 > .content > .meta`
- `#notice-10302955 > .content > h2`
- `#notice-10302955 > .content > .meta`
- `#notice-10302872 > .content > h2`
- `#notice-10302872 > .content > .meta`
- `#notice-10302869 > .content > h2`
- `#notice-10302869 > .content > .meta`
- `#notice-10302856 > .content > h2`
- `#notice-10302856 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `#offer_cae0c9fe7be02abfd9f0-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `.bg-tertiary`
- `.row.large-12.small-12:nth-child(9)`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articlescroller-header`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(12)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(16)`
- `.row.large-12.small-12:nth-child(17)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .align-left.mobile_text_align_align-left.articlescroller-header`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(19)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `#offer_03e5d4db8ab8972ef0d4-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(24)`
- `#article_list_10184114 > .content > .font-weight-normal.m-font-weight-normal.font-PTSans`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(27)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `#article_list_10230577 > .content > .font-weight-normal.m-font-weight-normal.font-PTSans`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(41)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(42)`
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
- `.row.large-12.small-12:nth-child(55)`
- `.row.large-12.small-12:nth-child(56)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(60)`
- `.row.large-12.small-12:nth-child(61)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(62)`
- `.powered-by`
