# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-05-31T01:25:12.945Z
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

- `#offer_76ab86a74ebe8319bc9f-0`
- `iframe[data-testid="embed-iframe"]`
- `#offer_76ab86a74ebe8319bc9f-1`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 6

#### Affected Elements:

- `.has-row-header.color_mobile_no_bg_color.hasContentPadding > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(16) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(53) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(62) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(68) > h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `#offer_76ab86a74ebe8319bc9f-0, img`
- `#offer_76ab86a74ebe8319bc9f-1, img`

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
- **Count:** 5

#### Affected Elements:

- `#google_ads_iframe_\/38586112\/dagsavisen\/toppbanner_0, #aw0`
- `#offer_76ab86a74ebe8319bc9f-0, a`
- `#offer_76ab86a74ebe8319bc9f-1, a`
- `a[href$="mailto:kb@dagsavisen.no"]`
- `.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 109

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `#notice-10371715 > .content > h2`
- `#notice-10371715 > .content > .meta`
- `div[title="Stor demonstrasjon i Tyrkia"] > h2`
- `div[title="Stor demonstrasjon i Tyrkia"] > .meta`
- `#notice-10371452 > .content > h2`
- `#notice-10371452 > .content > .meta`
- `#notice-10371421 > .content > h2`
- `#notice-10371421 > .content > .meta`
- `#notice-10371375 > .content > h2`
- `#notice-10371375 > .content > .meta`
- `div[title="Russisk tankskip angrepet"] > h2`
- `div[title="Russisk tankskip angrepet"] > .meta`
- `#notice-10371330 > .content > h2`
- `#notice-10371330 > .content > .meta`
- `#notice-10371329 > .content > h2`
- `#notice-10371329 > .content > .meta`
- `#notice-10371154 > .content > h2`
- `#notice-10371154 > .content > .meta`
- `div[title="NHO vant søksmål mot LO"] > h2`
- `div[title="NHO vant søksmål mot LO"] > .meta`
- `#notice-10371076 > .content > h2`
- `#notice-10371076 > .content > .meta`
- `#notice-10371030 > .content > h2`
- `#notice-10371030 > .content > .meta`
- `div[title="Trump med krav til Iran"] > h2`
- `div[title="Trump med krav til Iran"] > .meta`
- `#notice-10370969 > .content > h2`
- `#notice-10370969 > .content > .meta`
- `#notice-10370419 > .content > h2`
- `#notice-10370419 > .content > .meta`
- `div[title="Dronning Margrethe utskrevet"] > h2`
- `div[title="Dronning Margrethe utskrevet"] > .meta`
- `#notice-10370222 > .content > h2`
- `#notice-10370222 > .content > .meta`
- `#notice-10370064 > .content > h2`
- `#notice-10370064 > .content > .meta`
- `div[title="Enighet i statsoppgjøret"] > h2`
- `div[title="Enighet i statsoppgjøret"] > .meta`
- `div[title="Carsten Smith er død"] > h2`
- `div[title="Carsten Smith er død"] > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `#offer_76ab86a74ebe8319bc9f-0, div[ng-show="!terminalError"]`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.has-row-header.color_mobile_no_bg_color.hasContentPadding`
- `iframe[data-testid="embed-iframe"], .EpisodeOrShowWidget_coverArtContainer__65Ei9`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-small.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `iframe[data-testid="embed-iframe"], label`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(11)`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articlescroller-header`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(13)`
- `.row.large-12.small-12:nth-child(14)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(16)`
- `.row.large-12.small-12:nth-child(17)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(19)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(22)`
- `.page-content > .border_width_no_border_width.border_width_mobile_no_border_width.mobile_no_border_color`
- `.page-content > .border-bg-quaternary.mobile_border-bg-quaternary.hasBorder`
- `.row.large-12.small-12:nth-child(26)`
- `#offer_76ab86a74ebe8319bc9f-1, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(28)`
- `#article_list_10184114 > .content > .lab-scrollbox-headline.font-weight-normal.m-font-weight-normal`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(42)`
- `#article_list_10230577 > .content > .lab-scrollbox-headline.font-weight-normal.m-font-weight-normal`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(44)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(49)`
- `.color_mobile_no_bg_color.content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(52)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(53)`
- `.mobile_no_border_color.color_mobile_no_bg_color.row:nth-child(54)`
- `.row.large-12.small-12:nth-child(55)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(60)`
- `.row.large-12.small-12:nth-child(61)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.row.large-12.small-12:nth-child(64)`
- `.row.large-12.small-12:nth-child(65)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(66)`
- `.row.large-12.small-12:nth-child(67)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(68)`
- `.row.large-12.small-12:nth-child(69)`
- `.powered-by`
