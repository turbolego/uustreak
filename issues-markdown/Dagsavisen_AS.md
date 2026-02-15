# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-02-15T00:57:41.795Z
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
- **Count:** 3

#### Affected Elements:

- `#offer_7d6aba80edd0e047a8a5-0`
- `iframe[data-testid="embed-iframe"]`
- `#offer_7d6aba80edd0e047a8a5-1`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 5

#### Affected Elements:

- `.bg-tertiary > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(9) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(18) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(42) > h5`

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
- **Count:** 3

#### Affected Elements:

- `#google_ads_iframe_\/38586112\/toppbanner_0, #aw0`
- `a[href$="mailto:kb@dagsavisen.no"]`
- `.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 86

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `div[title="Orban ut mot Tyskland og EU "] > h2`
- `div[title="Orban ut mot Tyskland og EU "] > .meta`
- `#notice-10204435 > .content > h2`
- `#notice-10204435 > .content > .meta`
- `div[title="Iran-demonstrasjon i München"] > h2`
- `time[datetime="2026-02-14T13:43:36.000Z"]`
- `#notice-10204368 > .content > h2`
- `time[datetime="2026-02-14T13:41:57.000Z"]`
- `#notice-10204365 > .content > h2`
- `time[datetime="2026-02-14T13:37:53.000Z"]`
- `#notice-10204310 > .content > h2`
- `time[datetime="2026-02-14T12:45:44.000Z"]`
- `div[title="Finland vil diske Klæbo"] > h2`
- `time[datetime="2026-02-14T11:42:06.000Z"]`
- `#notice-10204227 > .content > h2`
- `time[datetime="2026-02-14T11:54:57.000Z"]`
- `#notice-10204157 > .content > h2`
- `time[datetime="2026-02-14T11:00:18.000Z"]`
- `#notice-10204115 > .content > h2`
- `time[datetime="2026-02-14T10:12:03.000Z"]`
- `#notice-10204114 > .content > h2`
- `time[datetime="2026-02-14T10:08:09.000Z"]`
- `#notice-10204059 > .content > h2`
- `time[datetime="2026-02-14T10:07:06.000Z"]`
- `div[title="Person påkjørt av bil i Oslo"] > h2`
- `time[datetime="2026-02-14T09:23:14.000Z"]`
- `#notice-10204017 > .content > h2`
- `time[datetime="2026-02-14T08:47:33.000Z"]`
- `#notice-10204016 > .content > h2`
- `time[datetime="2026-02-14T09:00:10.000Z"]`
- `#notice-10204005 > .content > h2`
- `time[datetime="2026-02-14T07:17:52.000Z"]`
- `#notice-10203862 > .content > h2`
- `#notice-10203862 > .content > .meta`
- `#notice-10203803 > .content > h2`
- `#notice-10203803 > .content > .meta`
- `#notice-10203794 > .content > h2`
- `#notice-10203794 > .content > .meta`
- `#notice-10202807 > .content > h2`
- `#notice-10202807 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.bg-tertiary`
- `#offer_7d6aba80edd0e047a8a5-0, img`
- `#offer_7d6aba80edd0e047a8a5-0, .pw-text`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(9)`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(12)`
- `#article_list_10187147 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10187147 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.page-content > .border-bg-quaternary.mobile_border-bg-quaternary.hasBorder`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(17)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(18)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.color_mobile_no_bg_color.row.large-12:nth-child(21)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.row.large-12.small-12:nth-child(23)`
- `.row.large-12.small-12:nth-child(24)`
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
- `#offer_7d6aba80edd0e047a8a5-1, img`
- `#offer_7d6aba80edd0e047a8a5-1, .pw-text`
- `#article_list_10184103 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10184103 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(41)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(42)`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `.powered-by`
