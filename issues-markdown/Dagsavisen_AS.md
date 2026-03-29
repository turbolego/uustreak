# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-03-29T01:03:20.558Z
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
- **Count:** 5

#### Affected Elements:

- `#offer_2649a4c9ca9c49c7702d-0`
- `#markup_10268378 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"]`
- `#offer_2649a4c9ca9c49c7702d-1`
- `#markup_10262750 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"]`
- `#offer_776d912cd0ef00ccde3d-0`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 5

#### Affected Elements:

- `.t20`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(49) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(51) > h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `#offer_2649a4c9ca9c49c7702d-0, img`
- `#offer_2649a4c9ca9c49c7702d-1, img`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.mainMenu`
- `#markup_10275631 > .fullwidthTarget.content > unite-player,mux-player,media-theme,media-controller`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 5

#### Affected Elements:

- `#google_ads_iframe_\/38586112\/toppbanner_0, #aw0`
- `#offer_2649a4c9ca9c49c7702d-0, a`
- `#offer_2649a4c9ca9c49c7702d-1, a`
- `a[href$="mailto:kb@dagsavisen.no"]`
- `.tm17.singleline.font-PTSans > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 92

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `#notice-10276055 > .content > h2`
- `#notice-10276055 > .content > .meta`
- `#notice-10276033 > .content > h2`
- `#notice-10276033 > .content > .meta`
- `#notice-10276011 > .content > h2`
- `#notice-10276011 > .content > .meta`
- `#notice-10275886 > .content > h2`
- `#notice-10275886 > .content > .meta`
- `#notice-10275715 > .content > h2`
- `#notice-10275715 > .content > .meta`
- `#notice-10275714 > .content > h2`
- `#notice-10275714 > .content > .meta`
- `#notice-10275713 > .content > h2`
- `#notice-10275713 > .content > .meta`
- `#notice-10275712 > .content > h2`
- `#notice-10275712 > .content > .meta`
- `div[title="Atomanlegg angrepet i Iran"] > h2`
- `div[title="Atomanlegg angrepet i Iran"] > .meta`
- `#notice-10275313 > .content > h2`
- `#notice-10275313 > .content > .meta`
- `#notice-10274659 > .content > h2`
- `time[datetime="2026-03-27T11:42:56.000Z"]`
- `#notice-10274625 > .content > h2`
- `time[datetime="2026-03-27T11:34:11.000Z"]`
- `#notice-10274513 > .content > h2`
- `time[datetime="2026-03-27T11:13:35.000Z"]`
- `#notice-10274128 > .content > h2`
- `time[datetime="2026-03-27T09:01:29.000Z"]`
- `#notice-10274127 > .content > h2`
- `time[datetime="2026-03-27T08:59:57.000Z"]`
- `div[title="Epstein-kommisjonen er klar"] > h2`
- `time[datetime="2026-03-27T08:13:54.000Z"]`
- `#notice-10273932 > .content > h2`
- `time[datetime="2026-03-27T07:04:35.000Z"]`
- `#notice-10273931 > .content > h2`
- `time[datetime="2026-03-27T07:03:31.000Z"]`
- `#notice-10273898 > .content > h2`
- `time[datetime="2026-03-27T06:18:09.000Z"]`
- `div[title="EU: Russland hjelper Iran"] > h2`
- `time[datetime="2026-03-27T06:17:01.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.page-content > .bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(3)`
- `#offer_2649a4c9ca9c49c7702d-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `#markup_10268378 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], h1`
- `#markup_10268378 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `#markup_10268378 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], a[dir="auto"]`
- `.mobile_no_border_side.hasBorder.mobile-hasBorder`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.row.large-12.small-12:nth-child(13)`
- `.row.large-12.small-12:nth-child(14)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(17)`
- `.row.large-12.small-12:nth-child(18)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(21)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `#offer_2649a4c9ca9c49c7702d-1, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(26)`
- `#article_list_10184114 > .content > .font-weight-normal.m-font-weight-normal.font-PTSans`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `#article_list_10230577 > .content > .font-weight-normal.m-font-weight-normal.font-PTSans`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(49)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(51)`
- `#offer_776d912cd0ef00ccde3d-0, img`
- `#offer_776d912cd0ef00ccde3d-0, .pw-subtitle`
- `#offer_776d912cd0ef00ccde3d-0, .pw-offer`
- `#offer_776d912cd0ef00ccde3d-0, #pw-countdown`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(54)`
- `.powered-by`
