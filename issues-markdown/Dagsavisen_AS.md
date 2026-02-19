# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-02-19T00:48:37.216Z
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
- **Count:** 5

#### Affected Elements:

- `.has-row-header.mobile_no_border_color.hasContentPadding > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(18) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46) > h5`
- `.bg-tertiary > h5`

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
- **Count:** 104

#### Affected Elements:

- `h1`
- `div[title="Bergen: Nye skudd avfyrt"] > h2`
- `div[title="Bergen: Nye skudd avfyrt"] > .meta`
- `#notice-10210850 > .content > h2`
- `#notice-10210850 > .content > .meta`
- `div[title="Kronprinsessen ber om mer tid"] > h2`
- `div[title="Kronprinsessen ber om mer tid"] > .meta`
- `div[title="Zuckerberg i retten"] > h2`
- `div[title="Zuckerberg i retten"] > .meta`
- `div[title="Omstridt tankesmie i søkelyset"] > h2`
- `div[title="Omstridt tankesmie i søkelyset"] > .meta`
- `div[title="Krigsfrykt ga børsoppgang"] > h2`
- `div[title="Krigsfrykt ga børsoppgang"] > .meta`
- `#notice-10210446 > .content > h2`
- `#notice-10210446 > .content > .meta`
- `div[title="Kontroll etter Bergen-skyting"] > h2`
- `div[title="Kontroll etter Bergen-skyting"] > .meta`
- `div[title="Bombetrussel mot fransk parti"] > h2`
- `div[title="Bombetrussel mot fransk parti"] > .meta`
- `#notice-10210267 > .content > h2`
- `time[datetime="2026-02-18T12:46:39.000Z"]`
- `div[title="Nyvalg i Bulgaria i april"] > h2`
- `time[datetime="2026-02-18T11:26:06.000Z"]`
- `#notice-10209752 > .content > h2`
- `time[datetime="2026-02-18T10:52:43.000Z"]`
- `#notice-10209697 > .content > h2`
- `time[datetime="2026-02-18T10:36:54.000Z"]`
- `#notice-10209504 > .content > h2`
- `time[datetime="2026-02-18T10:25:22.000Z"]`
- `div[title="Ny reindriftsavtale på plass"] > h2`
- `time[datetime="2026-02-18T08:36:28.000Z"]`
- `#notice-10209088 > .content > h2`
- `time[datetime="2026-02-18T07:27:13.000Z"]`
- `div[title="Netthandelen økte i 2025"] > h2`
- `time[datetime="2026-02-18T07:10:46.000Z"]`
- `#notice-10209023 > .content > h2`
- `time[datetime="2026-02-18T06:47:59.000Z"]`
- `div[title="Nato holder øvelse i Tyskland"] > h2`
- `time[datetime="2026-02-18T07:09:40.000Z"]`
- `div[title="Alvorlig ulykke i Fredrikstad"] > h2`
- `time[datetime="2026-02-18T07:07:19.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.has-row-header.mobile_no_border_color.hasContentPadding`
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
- `.row.large-12.small-12:nth-child(21)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.row.large-12.small-12:nth-child(23)`
- `.row.large-12.small-12:nth-child(26)`
- `#article_list_10184114 > .content > .font-weight-normal.m-font-weight-normal.font-PTSans`
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
- `#article_list_10184103 > .content > .font-weight-normal.m-font-weight-normal.font-PTSans`
- `#article_list_10184103 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(42)`
- `.row.large-12.small-12:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46)`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(48)`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(55)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.bg-tertiary`
- `.row.large-12.small-12:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.row.large-12.small-12:nth-child(64)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.row.large-12.small-12:nth-child(67)`
- `.row.large-12.small-12:nth-child(68)`
- `.row.large-12.small-12:nth-child(69)`
- `.powered-by`
