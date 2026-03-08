# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-03-08T01:00:04.879Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `.singleline.secondary.color_mobile_secondary > a:nth-child(9)`

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

- `#google_ads_iframe_\/38586112\/toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if`
- `#offer_0fb8716b04a01d76c458-0`
- `iframe[data-testid="embed-iframe"]`
- `#offer_03e5d4db8ab8972ef0d4-0`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 7

#### Affected Elements:

- `.bg-primary > h5`
- `.has-row-header.mobile_no_border_color.hasContentPadding > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(34) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(39) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(44) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46) > h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 9

#### Affected Elements:

- `#google_ads_iframe_\/38586112\/toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, .img`
- `#google_ads_iframe_\/38586112\/toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, img[src$="gf.png"]`
- `#google_ads_iframe_\/38586112\/toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, .textPos`
- `#google_ads_iframe_\/38586112\/toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, .tx1`
- `#google_ads_iframe_\/38586112\/toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, .tx2`
- `#google_ads_iframe_\/38586112\/toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, .cta`
- `#google_ads_iframe_\/38586112\/toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, img[src$="ending.png"]`
- `#offer_0fb8716b04a01d76c458-0, img`
- `#offer_03e5d4db8ab8972ef0d4-0, img`

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
- **Count:** 4

#### Affected Elements:

- `#offer_0fb8716b04a01d76c458-0, a`
- `#offer_03e5d4db8ab8972ef0d4-0, a`
- `a[href$="mailto:kb@dagsavisen.no"]`
- `.tm17.singleline.font-PTSans > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 89

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `#google_ads_iframe_\/38586112\/toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, #banner`
- `#notice-10240510 > .content > h2`
- `#notice-10240510 > .content > .meta`
- `div[title="Kongen kommer hjem i kveld"] > h2`
- `div[title="Kongen kommer hjem i kveld"] > .meta`
- `#notice-10240224 > .content > h2`
- `time[datetime="2026-03-07T11:30:16.000Z"]`
- `#notice-10240205 > .content > h2`
- `time[datetime="2026-03-07T10:51:24.000Z"]`
- `#notice-10240200 > .content > h2`
- `time[datetime="2026-03-07T10:20:20.000Z"]`
- `#notice-10240199 > .content > h2`
- `time[datetime="2026-03-07T10:04:01.000Z"]`
- `div[title="EU freder vegetarburgeren"] > h2`
- `time[datetime="2026-03-07T09:56:23.000Z"]`
- `#notice-10240130 > .content > h2`
- `time[datetime="2026-03-07T07:21:01.000Z"]`
- `.content[title="Ap-smell på ny måling"] > h2`
- `time[datetime="2026-03-07T07:20:31.000Z"]`
- `div[title="Israel trapper opp angrep"] > h2`
- `time[datetime="2026-03-07T07:18:04.000Z"]`
- `div[title="1332 sivile drept i Iran"] > h2`
- `time[datetime="2026-03-07T07:16:33.000Z"]`
- `#notice-10240126 > .content > h2`
- `time[datetime="2026-03-07T07:15:51.000Z"]`
- `#notice-10240051 > .content > h2`
- `#notice-10240051 > .content > .meta`
- `div[title="Eksportboom for russisk olje"] > h2`
- `div[title="Eksportboom for russisk olje"] > .meta`
- `#notice-10239938 > .content > h2`
- `#notice-10239938 > .content > .meta`
- `#notice-10239178 > .content > h2`
- `#notice-10239178 > .content > .meta`
- `div[title="Merz besøker Norge"] > h2`
- `div[title="Merz besøker Norge"] > .meta`
- `#notice-10238557 > .content > h2`
- `#notice-10238557 > .content > .meta`
- `#notice-10238556 > .content > h2`
- `#notice-10238556 > .content > .meta`
- `#notice-10238555 > .content > h2`
- `#notice-10238555 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `#offer_0fb8716b04a01d76c458-0, div[ng-show="!terminalError"]`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `.bg-primary`
- `.row.large-12.small-12:nth-child(8)`
- `.has-row-header.mobile_no_border_color.hasContentPadding`
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
- `#offer_03e5d4db8ab8972ef0d4-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(26)`
- `#article_list_10184114 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(39)`
- `#article_list_10230577 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(42)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(43)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(44)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46)`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `.page-content > .border-bg-quaternary.mobile_border-bg-quaternary.hasBorder`
- `.powered-by`
