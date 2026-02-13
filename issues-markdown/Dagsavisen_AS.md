# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-02-13T00:48:36.358Z
**URL:** [https://www.dagsavisen.no/#](https://www.dagsavisen.no/#)
**Total Violations:** 6

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

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 4

#### Affected Elements:

- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(18) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32) > h5`
- `.has-row-header.mobile_no_border_color.hasContentPadding > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46) > h5`

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
- `.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 84

#### Affected Elements:

- `h1`
- `#notice-10201523 > .content > h2`
- `#notice-10201523 > .content > .meta`
- `div[title="30 spørsmål til Barth Eide"] > h2`
- `div[title="30 spørsmål til Barth Eide"] > .meta`
- `div[title="Ice på vei ut av Minnesota"] > h2`
- `div[title="Ice på vei ut av Minnesota"] > .meta`
- `div[title="Støre møter Rubio i München"] > h2`
- `div[title="Støre møter Rubio i München"] > .meta`
- `#notice-10200499 > .content > h2`
- `#notice-10200499 > .content > .meta`
- `#notice-10199979 > .content > h2`
- `#notice-10199979 > .content > .meta`
- `#notice-10199557 > .content > h2`
- `#notice-10199557 > .content > .meta`
- `#notice-10199497 > .content > h2`
- `#notice-10199497 > .content > .meta`
- `#notice-10199496 > .content > h2`
- `#notice-10199496 > .content > .meta`
- `#notice-10199300 > .content > h2`
- `#notice-10199300 > .content > .meta`
- `#notice-10199299 > .content > h2`
- `#notice-10199299 > .content > .meta`
- `div[title="James van der Beek er død"] > h2`
- `div[title="James van der Beek er død"] > .meta`
- `#notice-10198982 > .content > h2`
- `#notice-10198982 > .content > .meta`
- `div[title="Netanyahu møter Trump"] > h2`
- `div[title="Netanyahu møter Trump"] > .meta`
- `#notice-10198533 > .content > h2`
- `#notice-10198533 > .content > .meta`
- `#notice-10197001 > .content > h2`
- `#notice-10197001 > .content > .meta`
- `div[title="Bussbrann på E6 i Oslo"] > h2`
- `div[title="Bussbrann på E6 i Oslo"] > .meta`
- `div[title="Masseskyting i Canada"] > h2`
- `div[title="Masseskyting i Canada"] > .meta`
- `#notice-10196763 > .content > h2`
- `#notice-10196763 > .content > .meta`
- `#notice-10196696 > .content > h2`
- `#notice-10196696 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `#article_list_10187147 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10187147 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(9)`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(12)`
- `.row.large-12.small-12:nth-child(13)`
- `.page-content > .border-bg-quaternary.mobile_border-bg-quaternary.hasBorder`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(17)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(18)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(21)`
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
- `.has-row-header.mobile_no_border_color.hasContentPadding`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `#article_list_10184103 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10184103 > .content > .scroll-container.swipehelper.snap-container-x`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(48)`
- `.powered-by`
