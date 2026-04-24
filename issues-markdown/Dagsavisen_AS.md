# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-04-24T10:13:02.826Z
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
- **Count:** 7

#### Affected Elements:

- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.t20`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(48) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(56) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(59) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(67) > h5`

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
- **Count:** 101

#### Affected Elements:

- `h1`
- `#notice-10314990 > .content > h2`
- `time[datetime="2026-04-24T09:41:23.000Z"]`
- `div[title="Siktet for fire nye overfall"] > h2`
- `time[datetime="2026-04-24T09:40:30.000Z"]`
- `#notice-10314757 > .content > h2`
- `time[datetime="2026-04-24T08:28:20.000Z"]`
- `#notice-10314579 > .content > h2`
- `time[datetime="2026-04-24T08:04:33.000Z"]`
- `div[title="Ny kinesisk KI-modell lansert"] > h2`
- `time[datetime="2026-04-24T07:54:11.000Z"]`
- `div[title="«Michael» kan sette rekord"] > h2`
- `time[datetime="2026-04-24T07:41:00.000Z"]`
- `div[title="Enighet i bussoppgjøret"] > h2`
- `time[datetime="2026-04-24T07:14:29.000Z"]`
- `#notice-10314019 > .content > h2`
- `time[datetime="2026-04-24T05:05:50.000Z"]`
- `#notice-10313994 > .content > h2`
- `time[datetime="2026-04-24T05:04:44.000Z"]`
- `div[title="Jordskjelv like utenfor Kreta"] > h2`
- `time[datetime="2026-04-24T05:02:38.000Z"]`
- `#notice-10313968 > .content > h2`
- `#notice-10313968 > .content > .meta`
- `#notice-10313930 > .content > h2`
- `#notice-10313930 > .content > .meta`
- `div[title="Stor skogbrannfare"] > h2`
- `div[title="Stor skogbrannfare"] > .meta`
- `#notice-10313803 > .content > h2`
- `#notice-10313803 > .content > .meta`
- `#notice-10313693 > .content > h2`
- `#notice-10313693 > .content > .meta`
- `div[title="Forsvarstopper siktet"] > h2`
- `div[title="Forsvarstopper siktet"] > .meta`
- `div[title="Hvithval i Hokksund"] > h2`
- `div[title="Hvithval i Hokksund"] > .meta`
- `div[title="Brann i lokomotiv i Oslo"] > h2`
- `div[title="Brann i lokomotiv i Oslo"] > .meta`
- `#notice-10313278 > .content > h2`
- `time[datetime="2026-04-23T12:08:35.000Z"]`
- `#notice-10313072 > .content > h2`
- `time[datetime="2026-04-23T10:58:58.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(7)`
- `#markup_10268378 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], h1`
- `#markup_10268378 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `#markup_10268378 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], a[dir="auto"]`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articlescroller-header`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(14)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.t25.align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(22)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `.bg-tertiary.color_mobile_bg-tertiary.mobile_no_border_side`
- `#article_list_10184114 > .content > .lab-scrollbox-headline.t25.font-weight-normal`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `#article_list_10230577 > .content > .lab-scrollbox-headline.t25.font-weight-normal`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(48)`
- `.color_mobile_no_bg_color.content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(54)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(56)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(59)`
- `.row.large-12.small-12:nth-child(60)`
- `.row.large-12.small-12:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.row.large-12.small-12:nth-child(64)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(67)`
- `.powered-by`
