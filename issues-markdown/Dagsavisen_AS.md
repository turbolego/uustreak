# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-04-28T04:29:22.501Z
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
- **Count:** 2

#### Affected Elements:

- `#markup_10268378 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"]`
- `#markup_10311343 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 8

#### Affected Elements:

- `.font-weight-light`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(36) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(64) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(66) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(68) > .t25`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(70) > .t25`

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
- `.tm17.singleline.font-PTSans > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 104

#### Affected Elements:

- `h1`
- `#notice-10318970 > .content > h2`
- `time[datetime="2026-04-27T19:40:50.000Z"]`
- `#notice-10318943 > .content > h2`
- `time[datetime="2026-04-27T18:44:36.000Z"]`
- `#notice-10318936 > .content > h2`
- `time[datetime="2026-04-27T19:24:22.000Z"]`
- `div[title="Støre i samtaler med Bergstø"] > h2`
- `time[datetime="2026-04-27T18:12:32.000Z"]`
- `div[title="Innfører nytt sjøfartskort"] > h2`
- `time[datetime="2026-04-27T16:20:36.000Z"]`
- `div[title="Canada kunngjør nasjonalt fond"] > h2`
- `time[datetime="2026-04-27T16:13:05.000Z"]`
- `#notice-10318840 > .content > h2`
- `time[datetime="2026-04-27T16:03:46.000Z"]`
- `#notice-10318583 > .content > h2`
- `time[datetime="2026-04-27T16:13:59.000Z"]`
- `#notice-10318033 > .content > h2`
- `#notice-10318033 > .content > .meta`
- `div[title="Togtrøbbel på Østlandet løst"] > h2`
- `div[title="Togtrøbbel på Østlandet løst"] > .meta`
- `#notice-10317645 > .content > h2`
- `#notice-10317645 > .content > .meta`
- `#notice-10317357 > .content > h2`
- `#notice-10317357 > .content > .meta`
- `div[title="To Norwegian-fly fikk trøbbel"] > h2`
- `div[title="To Norwegian-fly fikk trøbbel"] > .meta`
- `#notice-10317243 > .content > h2`
- `#notice-10317243 > .content > .meta`
- `div[title="Iran har gitt USA nytt forslag"] > h2`
- `div[title="Iran har gitt USA nytt forslag"] > .meta`
- `div[title="Jordskjelv rystet Japan"] > h2`
- `div[title="Jordskjelv rystet Japan"] > .meta`
- `#notice-10317042 > .content > h2`
- `time[datetime="2026-04-26T19:50:32.000Z"]`
- `#notice-10317041 > .content > h2`
- `time[datetime="2026-04-26T18:50:57.000Z"]`
- `#notice-10317025 > .content > h2`
- `time[datetime="2026-04-26T18:34:27.000Z"]`
- `#notice-10317024 > .content > h2`
- `time[datetime="2026-04-26T18:33:58.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(8)`
- `#markup_10268378 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], h1`
- `#markup_10268378 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `#markup_10268378 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], a[dir="auto"]`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.mobile_no_border_side.hasBorder.mobile-hasBorder`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articlescroller-header`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(16)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(19)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(21)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.t25.align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(23)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `.row.large-12.small-12:nth-child(28)`
- `#article_list_10184114 > .content > .lab-scrollbox-headline.t25.font-weight-normal`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(34)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(42)`
- `#article_list_10230577 > .content > .lab-scrollbox-headline.t25.font-weight-normal`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(44)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(49)`
- `.color_mobile_no_bg_color.content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(54)`
- `.row.large-12.small-12:nth-child(55)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(60)`
- `.row.large-12.small-12:nth-child(61)`
- `.row.large-12.small-12:nth-child(63)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(64)`
- `.row.large-12.small-12:nth-child(65)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(66)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(67)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(68)`
- `.row.large-12.small-12:nth-child(69)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(70)`
- `.powered-by`
