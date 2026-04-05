# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-04-05T00:40:28.849Z
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

- `#offer_0fb8716b04a01d76c458-0`
- `iframe[data-testid="embed-iframe"]`
- `#offer_03e5d4db8ab8972ef0d4-0`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 7

#### Affected Elements:

- `.font-weight-light`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(18) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(59) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(62) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(71) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(74) > h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 3

#### Affected Elements:

- `#google_ads_iframe_\/38586112\/toppbanner_0, img`
- `#offer_0fb8716b04a01d76c458-0, img`
- `#offer_03e5d4db8ab8972ef0d4-0, img`

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

- `#google_ads_iframe_\/38586112\/toppbanner_0, a`
- `#offer_0fb8716b04a01d76c458-0, a`
- `#offer_03e5d4db8ab8972ef0d4-0, a`
- `a[href$="mailto:kb@dagsavisen.no"]`
- `.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 112

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `#google_ads_iframe_\/38586112\/toppbanner_0, #awxBn-diswuoayjpqsykr-V3VMH`
- `#notice-10282454 > .content > h2`
- `time[datetime="2026-04-04T13:53:12.000Z"]`
- `div[title="Angrep mot ukrainsk marked"] > h2`
- `time[datetime="2026-04-04T11:48:55.000Z"]`
- `div[title="Jordskjelv på 5,2 i Tyrkia"] > h2`
- `time[datetime="2026-04-04T14:04:04.000Z"]`
- `#notice-10282215 > .content > h2`
- `time[datetime="2026-04-04T06:28:23.000Z"]`
- `div[title="Iran jakter besetningsmeldem"] > h2`
- `time[datetime="2026-04-04T06:27:51.000Z"]`
- `#notice-10282213 > .content > h2`
- `time[datetime="2026-04-04T16:09:53.000Z"]`
- `#notice-10282164 > .content > h2`
- `time[datetime="2026-04-03T19:20:22.000Z"]`
- `#notice-10282155 > .content > h2`
- `time[datetime="2026-04-03T14:53:23.000Z"]`
- `#notice-10282136 > .content > h2`
- `time[datetime="2026-04-03T14:19:09.000Z"]`
- `#notice-10282130 > .content > h2`
- `time[datetime="2026-04-03T13:28:09.000Z"]`
- `div[title="Iran: Har skutt ned jagerfly"] > h2`
- `time[datetime="2026-04-03T13:26:54.000Z"]`
- `#notice-10282026 > .content > h2`
- `time[datetime="2026-04-03T11:33:10.000Z"]`
- `div[title="Innsatt satte fyr på celle"] > h2`
- `time[datetime="2026-04-03T11:31:39.000Z"]`
- `div[title="Gassanlegg i Abu Dhabi truffet"] > h2`
- `time[datetime="2026-04-03T09:48:33.000Z"]`
- `div[title="Kuwait: Brann på raffineri"] > h2`
- `time[datetime="2026-04-03T10:04:16.000Z"]`
- `div[title="«Påskekomet» kan bli synlig"] > h2`
- `time[datetime="2026-04-03T07:40:48.000Z"]`
- `div[title="USAs hærsjef er sparket"] > h2`
- `time[datetime="2026-04-03T06:09:32.000Z"]`
- `div[title="FN utsetter Hormuzmøte"] > h2`
- `time[datetime="2026-04-03T06:02:26.000Z"]`
- `div[title="Bomber bruer og kraftstasjoner"] > h2`
- `time[datetime="2026-04-03T06:01:50.000Z"]`
- `div[title="Trump skryter av angrep"] > h2`
- `time[datetime="2026-04-02T19:32:40.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `#offer_0fb8716b04a01d76c458-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `.mobile_no_border_side.hasBorder.mobile-hasBorder`
- `.row.large-12.small-12:nth-child(11)`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articlescroller-header`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(13)`
- `.row.large-12.small-12:nth-child(14)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(17)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(18)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(21)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `#offer_03e5d4db8ab8972ef0d4-0, div[ng-show="!terminalError"]`
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
- `#article_list_10230577 > .content > .font-weight-normal.m-font-weight-normal.font-PTSans`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(42)`
- `.row.large-12.small-12:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(55)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(59)`
- `.row.large-12.small-12:nth-child(60)`
- `.row.large-12.small-12:nth-child(61)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.row.large-12.small-12:nth-child(64)`
- `.row.large-12.small-12:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.row.large-12.small-12:nth-child(67)`
- `.row.large-12.small-12:nth-child(68)`
- `.row.large-12.small-12:nth-child(69)`
- `.row.large-12.small-12:nth-child(70)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(71)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(72)`
- `.row.large-12.small-12:nth-child(73)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(74)`
- `.powered-by`
