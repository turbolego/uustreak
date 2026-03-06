# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-03-06T00:47:56.542Z
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

- `.singleline.secondary.color_mobile_secondary > a:nth-child(9)`

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
- **Count:** 1

#### Affected Elements:

- `iframe[data-testid="embed-iframe"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 6

#### Affected Elements:

- `.bg-primary > h5`
- `.has-row-header.mobile_no_border_color.hasContentPadding > h5`
- `.has-row-header.color_mobile_no_bg_color.row > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(39) > h5`
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
- `.tm17.singleline.font-PTSans > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 82

#### Affected Elements:

- `h1`
- `div[title="Nato skjerper rakett-beredskap"] > h2`
- `div[title="Nato skjerper rakett-beredskap"] > .meta`
- `#notice-10237807 > .content > h2`
- `#notice-10237807 > .content > .meta`
- `div[title="Trump sparker Kristi Noem"] > h2`
- `div[title="Trump sparker Kristi Noem"] > .meta`
- `#notice-10237690 > .content > h2`
- `#notice-10237690 > .content > .meta`
- `#notice-10237667 > .content > h2`
- `#notice-10237667 > .content > .meta`
- `div[title="Steinskred har gått i Rogaland"] > h2`
- `div[title="Steinskred har gått i Rogaland"] > .meta`
- `#notice-10237616 > .content > h2`
- `#notice-10237616 > .content > .meta`
- `#notice-10236726 > .content > h2`
- `#notice-10236726 > .content > .meta`
- `#notice-10236523 > .content > h2`
- `#notice-10236523 > .content > .meta`
- `#notice-10236326 > .content > h2`
- `#notice-10236326 > .content > .meta`
- `#notice-10236068 > .content > h2`
- `#notice-10236068 > .content > .meta`
- `#notice-10236064 > .content > h2`
- `#notice-10236064 > .content > .meta`
- `div[title="Bloomberg: Yara granskes i USA"] > h2`
- `div[title="Bloomberg: Yara granskes i USA"] > .meta`
- `#notice-10235824 > .content > h2`
- `#notice-10235824 > .content > .meta`
- `div[title="Valget i Nepal er i gang"] > h2`
- `div[title="Valget i Nepal er i gang"] > .meta`
- `div[title="Kina senker vekstmålet"] > h2`
- `div[title="Kina senker vekstmålet"] > .meta`
- `#notice-10235730 > .content > h2`
- `#notice-10235730 > .content > .meta`
- `div[title="Hizbollah vil ikke overgi seg"] > h2`
- `div[title="Hizbollah vil ikke overgi seg"] > .meta`
- `div[title="Hele Irak rammet av strømbrudd"] > h2`
- `div[title="Hele Irak rammet av strømbrudd"] > .meta`
- `#notice-10235569 > .content > h2`
- `#notice-10235569 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `.bg-primary`
- `.has-row-header.mobile_no_border_color.hasContentPadding`
- `.row.large-12.small-12:nth-child(9)`
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
- `.has-row-header.color_mobile_no_bg_color.row`
- `.page-content > .border-bg-quaternary.mobile_border-bg-quaternary.hasBorder`
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
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(39)`
- `#article_list_10230577 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.bg-tertiary`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(43)`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `.powered-by`
