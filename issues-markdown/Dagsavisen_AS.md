# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-06-07T01:00:04.909Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 7

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
- **Count:** 3

#### Affected Elements:

- `#offer_a40f38d066bf6918666f-0`
- `iframe[data-testid="embed-iframe"]`
- `#offer_76ab86a74ebe8319bc9f-0`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 7

#### Affected Elements:

- `.has-row-header.color_mobile_no_bg_color.hasContentPadding > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(8) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(14) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(67) > h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `#offer_a40f38d066bf6918666f-0, img`
- `#offer_76ab86a74ebe8319bc9f-0, img`

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
- **Count:** 3

#### Affected Elements:

- `#offer_a40f38d066bf6918666f-0, a`
- `#offer_76ab86a74ebe8319bc9f-0, a`
- `.singleline.font-PTSans.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 107

#### Affected Elements:

- `h1`
- `#notice-10382479 > .content > h2`
- `time[datetime="2026-06-06T18:02:54.000Z"]`
- `div[title="En av tre tyskere støtter AfD"] > h2`
- `time[datetime="2026-06-06T17:31:14.000Z"]`
- `div[title="Mann døde etter fall fra vindu"] > h2`
- `time[datetime="2026-06-06T17:18:09.000Z"]`
- `div[title="Norwegian-fly måtte nødlande"] > h2`
- `time[datetime="2026-06-06T15:18:32.000Z"]`
- `div[title="Bryllupsgjester drept i Gaza"] > h2`
- `time[datetime="2026-06-06T16:49:26.000Z"]`
- `div[title="Advarer mot israelsk spionasje"] > h2`
- `time[datetime="2026-06-06T14:24:08.000Z"]`
- `div[title="Slåsskamp på fly på Gardermoen"] > h2`
- `time[datetime="2026-06-06T13:56:32.000Z"]`
- `#notice-10382359 > .content > h2`
- `time[datetime="2026-06-06T13:53:19.000Z"]`
- `div[title="Mekling i butikkbransjen"] > h2`
- `time[datetime="2026-06-06T13:50:47.000Z"]`
- `#notice-10382274 > .content > h2`
- `time[datetime="2026-06-06T12:42:56.000Z"]`
- `div[title="Ukrainsk angrep mot marinebase"] > h2`
- `time[datetime="2026-06-06T12:09:03.000Z"]`
- `#notice-10382262 > .content > h2`
- `time[datetime="2026-06-06T11:34:42.000Z"]`
- `div[title="Hønefoss: Slått med batong"] > h2`
- `time[datetime="2026-06-06T11:14:21.000Z"]`
- `div[title="Buss for tog til en halv mrd."] > h2`
- `time[datetime="2026-06-06T11:11:49.000Z"]`
- `#notice-10382122 > .content > h2`
- `#notice-10382122 > .content > .meta`
- `#notice-10382083 > .content > h2`
- `#notice-10382083 > .content > .meta`
- `#notice-10382072 > .content > h2`
- `#notice-10382072 > .content > .meta`
- `div[title="Kuwait og Bahrain angrepet"] > h2`
- `div[title="Kuwait og Bahrain angrepet"] > .meta`
- `div[title="Fem drept i russiske angrep"] > h2`
- `div[title="Fem drept i russiske angrep"] > .meta`
- `div[title="Varmerekord i Finnmark"] > h2`
- `time[datetime="2026-06-05T19:26:32.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `#offer_a40f38d066bf6918666f-0, div[ng-show="!terminalError"]`
- `.has-row-header.color_mobile_no_bg_color.hasContentPadding`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(8)`
- `iframe[data-testid="embed-iframe"], .EpisodeOrShowWidget_coverArtContainer__65Ei9`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-small.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `iframe[data-testid="embed-iframe"], label`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(14)`
- `.row.large-12.small-12:nth-child(16)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.page-content > .border_width_no_border_width.border_width_mobile_no_border_width.mobile_no_border_color`
- `.page-content > .border-bg-quaternary.mobile_border-bg-quaternary.hasBorder`
- `.row.large-12.small-12:nth-child(24)`
- `#offer_76ab86a74ebe8319bc9f-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(27)`
- `#article_list_10184114 > .content > .lab-scrollbox-headline.t25.font-weight-normal`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `#article_list_10230577 > .content > .lab-scrollbox-headline.t25.font-weight-normal`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header`
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
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(60)`
- `.row.large-12.small-12:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.row.large-12.small-12:nth-child(64)`
- `.row.large-12.small-12:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(67)`
- `.row.large-12.small-12:nth-child(68)`
- `.powered-by`
