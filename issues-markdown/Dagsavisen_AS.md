# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-06-14T01:32:55.295Z
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
- `a[href$="mailto:anne@dagsavisen.no"]`

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

- `#offer_c8109e60c9b57e83dc50-0`
- `iframe[data-testid="embed-iframe"]`
- `#offer_9b4a07563ba6db1130ac-0`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 7

#### Affected Elements:

- `.has-row-header.color_mobile_no_bg_color.hasContentPadding > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(12) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(14) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(60) > h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `#offer_c8109e60c9b57e83dc50-0, img`
- `#offer_9b4a07563ba6db1130ac-0, img`

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

- `#google_ads_iframe_\/38586112\/dagsavisen\/toppbanner_0, #aw0`
- `#offer_c8109e60c9b57e83dc50-0, a`
- `#offer_9b4a07563ba6db1130ac-0, a`
- `.singleline.font-PTSans.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 101

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `div[title="Oljemekling i gang"] > h2`
- `time[datetime="2026-06-13T17:32:25.000Z"]`
- `#notice-10393904 > .content > h2`
- `time[datetime="2026-06-13T17:13:49.000Z"]`
- `div[title="Dødsulykke med hjullaster"] > h2`
- `time[datetime="2026-06-13T16:34:52.000Z"]`
- `div[title="Nordbytunnelen åpnet igjen"] > h2`
- `time[datetime="2026-06-13T16:09:36.000Z"]`
- `div[title="Orban gjenvalgt som partileder"] > h2`
- `time[datetime="2026-06-13T15:39:59.000Z"]`
- `#notice-10393756 > .content > h2`
- `time[datetime="2026-06-13T14:24:06.000Z"]`
- `div[title="Ølsøl utløste brannalarm"] > h2`
- `time[datetime="2026-06-13T13:33:59.000Z"]`
- `div[title="Ghana-protest etter visum-nekt"] > h2`
- `time[datetime="2026-06-13T13:32:34.000Z"]`
- `div[title="Tusenfryd rammet av strømbrudd"] > h2`
- `time[datetime="2026-06-13T15:10:48.000Z"]`
- `div[title="Sveits kan få befolkningstak"] > h2`
- `time[datetime="2026-06-13T12:17:19.000Z"]`
- `#notice-10393570 > .content > h2`
- `time[datetime="2026-06-13T12:05:12.000Z"]`
- `div[title="Køkaos rundt Oslo"] > h2`
- `time[datetime="2026-06-13T12:04:21.000Z"]`
- `div[title="Valdres: Mann antatt omkommet"] > h2`
- `div[title="Valdres: Mann antatt omkommet"] > .meta`
- `div[title="Fem døde i flykrasj i India"] > h2`
- `div[title="Fem døde i flykrasj i India"] > .meta`
- `#notice-10393419 > .content > h2`
- `time[datetime="2026-06-13T07:41:34.000Z"]`
- `#notice-10393377 > .content > h2`
- `#notice-10393377 > .content > .meta`
- `#notice-10393376 > .content > h2`
- `#notice-10393376 > .content > .meta`
- `#notice-10393375 > .content > h2`
- `#notice-10393375 > .content > .meta`
- `div[title="Høye smell i Hormuzstredet"] > h2`
- `div[title="Høye smell i Hormuzstredet"] > .meta`
- `#notice-10393338 > .content > h2`
- `time[datetime="2026-06-12T19:52:29.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `#offer_c8109e60c9b57e83dc50-0, div[ng-show="!terminalError"]`
- `.has-row-header.color_mobile_no_bg_color.hasContentPadding`
- `.row.large-12.small-12:nth-child(8)`
- `iframe[data-testid="embed-iframe"], .EpisodeOrShowWidget_coverArtContainer__65Ei9`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-small.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `iframe[data-testid="embed-iframe"], label`
- `.row.large-12.small-12:nth-child(11)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(12)`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(14)`
- `.row.large-12.small-12:nth-child(16)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.font-PTSans.t25`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.page-content > .border_width_no_border_width.border_width_mobile_no_border_width.mobile_no_border_color`
- `.page-content > .border-bg-quaternary.mobile_border-bg-quaternary.hasBorder`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(24)`
- `#offer_9b4a07563ba6db1130ac-0, div[ng-show="!terminalError"]`
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
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(57)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header`
- `.row.large-12.small-12:nth-child(59)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(60)`
- `.row.large-12.small-12:nth-child(61)`
- `.powered-by`
