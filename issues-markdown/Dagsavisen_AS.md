# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-05-28T01:06:40.735Z
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
- **Count:** 1

#### Affected Elements:

- `iframe[data-testid="embed-iframe"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 7

#### Affected Elements:

- `.has-row-header.color_mobile_no_bg_color.hasContentPadding > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(16) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(58) > h5`
- `.bg-tertiary > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(66) > h5`

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
- **Count:** 106

#### Affected Elements:

- `h1`
- `div[title="Matthew Perrys assistent dømt"] > h2`
- `div[title="Matthew Perrys assistent dømt"] > .meta`
- `#notice-10367082 > .content > h2`
- `#notice-10367082 > .content > .meta`
- `#notice-10366913 > .content > h2`
- `#notice-10366913 > .content > .meta`
- `#notice-10366404 > .content > h2`
- `#notice-10366404 > .content > .meta`
- `#notice-10366104 > .content > h2`
- `#notice-10366104 > .content > .meta`
- `#notice-10365686 > .content > h2`
- `#notice-10365686 > .content > .meta`
- `div[title="Ingen penger til Gaza-fond"] > h2`
- `div[title="Ingen penger til Gaza-fond"] > .meta`
- `#notice-10365255 > .content > h2`
- `#notice-10365255 > .content > .meta`
- `div[title="Brudd mellom HK Norge og NHO"] > h2`
- `div[title="Brudd mellom HK Norge og NHO"] > .meta`
- `div[title="Toll på storfekjøtt igjen"] > h2`
- `div[title="Toll på storfekjøtt igjen"] > .meta`
- `#notice-10365176 > .content > h2`
- `#notice-10365176 > .content > .meta`
- `#notice-10365175 > .content > h2`
- `#notice-10365175 > .content > .meta`
- `#notice-10365152 > .content > h2`
- `#notice-10365152 > .content > .meta`
- `#notice-10365089 > .content > h2`
- `#notice-10365089 > .content > .meta`
- `div[title="Enige om ny motorferdselslov"] > h2`
- `div[title="Enige om ny motorferdselslov"] > .meta`
- `#notice-10365031 > .content > h2`
- `#notice-10365031 > .content > .meta`
- `#notice-10364969 > .content > h2`
- `#notice-10364969 > .content > .meta`
- `div[title="Siktet for drap på savnet mann"] > h2`
- `div[title="Siktet for drap på savnet mann"] > .meta`
- `#notice-10364019 > .content > h2`
- `#notice-10364019 > .content > .meta`
- `#notice-10363992 > .content > h2`
- `#notice-10363992 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `article[data-instance="10357168"] > .content > a[itemprop="url"][rel=""] > .tm16.below.kicker`
- `span[data-lab-text_size_mobile="28"]`
- `span[data-lab-text_size_mobile="41"]`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(4)`
- `.row.large-12.small-12:nth-child(7)`
- `.has-row-header.color_mobile_no_bg_color.hasContentPadding`
- `iframe[data-testid="embed-iframe"], .EpisodeOrShowWidget_coverArtContainer__65Ei9`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-small.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `iframe[data-testid="embed-iframe"], label`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
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
- `.page-content > .border_width_no_border_width.border_width_mobile_no_border_width.mobile_no_border_color`
- `.page-content > .border-bg-quaternary.mobile_border-bg-quaternary.hasBorder`
- `.row.large-12.small-12:nth-child(27)`
- `#article_list_10184114 > .content > .lab-scrollbox-headline.font-weight-normal.m-font-weight-normal`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `#article_list_10230577 > .content > .lab-scrollbox-headline.font-weight-normal.m-font-weight-normal`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(48)`
- `.color_mobile_no_bg_color.content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(51)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(54)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(60)`
- `.row.large-12.small-12:nth-child(61)`
- `.bg-tertiary`
- `.row.large-12.small-12:nth-child(63)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(64)`
- `.row.large-12.small-12:nth-child(65)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(66)`
- `.row.large-12.small-12:nth-child(67)`
- `.powered-by`
