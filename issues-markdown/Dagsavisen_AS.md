# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-08-20T01:35:03.883Z
**URL:** [https://www.dagsavisen.no/#](https://www.dagsavisen.no/#)
**Total Violations:** 7

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.text_singleline.large-8.large-abs-8 > .singleline`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[data-testid="embed-iframe"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 6

#### Affected Elements:

- `.bg-white.color_mobile_bg-white.has-row-header > h5`
- `.has-row-header.color_mobile_bg-quaternary.bg-quaternary:nth-child(32) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52) > h5`
- `.has-row-header.bg-quinary.color_mobile_bg-quinary > h5`
- `.has-row-header.color_mobile_bg-quaternary.bg-quaternary:nth-child(69) > h5`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.mainMenu`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `.singleline.font-PTSans.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 142

#### Affected Elements:

- `h1`
- `div[title="Ny skogbrann i Spania"] > h2`
- `div[title="Ny skogbrann i Spania"] > .meta`
- `#notice-10487474 > .content > h2`
- `#notice-10487474 > .content > .meta`
- `div[title="Ni drept i angrep i Gaza"] > h2`
- `div[title="Ni drept i angrep i Gaza"] > .meta`
- `#notice-10487088 > .content > h2`
- `#notice-10487088 > .content > .meta`
- `#notice-10486750 > .content > h2`
- `#notice-10486750 > .content > .meta`
- `div[title="Bane Nor unnskylder seg"] > h2`
- `div[title="Bane Nor unnskylder seg"] > .meta`
- `#notice-10486657 > .content > h2`
- `#notice-10486657 > .content > .meta`
- `#notice-10486586 > .content > h2`
- `#notice-10486586 > .content > .meta`
- `div[title="Hamar-brannen er henlagt"] > h2`
- `div[title="Hamar-brannen er henlagt"] > .meta`
- `#notice-10486570 > .content > h2`
- `#notice-10486570 > .content > .meta`
- `#notice-10485989 > .content > h2`
- `time[datetime="2026-08-19T08:03:55.000Z"]`
- `div[title="Ny oppgang i antall fødsler"] > h2`
- `div[title="Ny oppgang i antall fødsler"] > .meta`
- `#notice-10485635 > .content > h2`
- `#notice-10485635 > .content > .meta`
- `#notice-10485632 > .content > h2`
- `#notice-10485632 > .content > .meta`
- `#notice-10485631 > .content > h2`
- `#notice-10485631 > .content > .meta`
- `div[title="Høy ledighet blant arkitekter"] > h2`
- `div[title="Høy ledighet blant arkitekter"] > .meta`
- `#notice-10485548 > .content > h2`
- `#notice-10485548 > .content > .meta`
- `#notice-10485535 > .content > h2`
- `#notice-10485535 > .content > .meta`
- `#notice-10485534 > .content > h2`
- `#notice-10485534 > .content > .meta`
- `#notice-10485462 > .content > h2`
- `#notice-10485462 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `iframe[data-testid="embed-iframe"], .EpisodeOrShowWidget_coverArtContainer__65Ei9`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-small.encore-internal-color-text-subdued.e-10682-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `iframe[data-testid="embed-iframe"], label`
- `.row.large-12.small-12:nth-child(11)`
- `.bg-white.color_mobile_bg-white.has-row-header`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(14)`
- `.row.large-12.small-12:nth-child(16)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(22)`
- `.page-content > .border_width_no_border_width.border_width_mobile_no_border_width.mobile_no_border_color`
- `.page-content > .border-bg-quaternary.mobile_border-bg-quaternary.hasBorder`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `#article_list_10230577 > .content > .lab-scrollbox-headline.font-weight-normal.m-font-weight-normal`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.has-row-header.color_mobile_bg-quaternary.bg-quaternary:nth-child(32)`
- `.t28.lab-scrollbox-headline.font-weight-normal`
- `#markup_10478983 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10478981"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10453098 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10453097"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10453072 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10453073"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10440435 > .fullwidthTarget.content > unite-player,#status-container`
- `.color_mobile_no_bg_color.align-center.mobile_text_align_align-center > .floatingTextSubset.media > .floatingText`
- `#markup_10440421 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10440420"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10440430 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10440429"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10440438 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10440437"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `#article_list_10184114 > .content > .lab-scrollbox-headline.font-weight-normal.m-font-weight-normal`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(42)`
- `.row.large-12.small-12:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(48)`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(51)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(53)`
- `.row.large-12.small-12:nth-child(54)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.has-row-header.bg-quinary.color_mobile_bg-quinary`
- `.row.large-12.small-12:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.row.large-12.small-12:nth-child(64)`
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.row.large-12.small-12:nth-child(67)`
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(68)`
- `.has-row-header.color_mobile_bg-quaternary.bg-quaternary:nth-child(69)`
- `.row.large-12.small-12:nth-child(70)`
- `.bg-black.color_mobile_bg-black.t34`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(1)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(2)`
- `.tm19.color_mobile_no_bg_color.primary > .t14[data-lab-text_size_desktop="14"]`
- `span[data-lab-text_size_desktop="27"]`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(4)`
- `span[data-lab-text_size_mobile="17"]`
- `.tm19.color_mobile_no_bg_color.primary > .font-weight-bold.m-font-weight-bold[data-lab-font_weight_mobile="font-weight-bold"]`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(6)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(7)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(8)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(9)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(10)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(11)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(12)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(13)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(14)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(15)`
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(73)`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `#article_list_10440424 > .content > .scroll-container.swipehelper.snap-container-x`
