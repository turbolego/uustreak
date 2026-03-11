# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-03-11T04:12:52.518Z
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
- **Count:** 6

#### Affected Elements:

- `.t20`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(13) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(31) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(49) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(54) > h5`

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
- `.tm17.singleline.font-PTSans > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 90

#### Affected Elements:

- `h1`
- `div[title="Israel øker forsvarsbudsjettet"] > h2`
- `time[datetime="2026-03-10T20:16:32.000Z"]`
- `div[title="Trump advarer Iran"] > h2`
- `time[datetime="2026-03-10T19:49:30.000Z"]`
- `#notice-10244822 > .content > h2`
- `time[datetime="2026-03-10T19:23:05.000Z"]`
- `#notice-10244818 > .content > h2`
- `time[datetime="2026-03-10T18:37:31.000Z"]`
- `#notice-10244815 > .content > h2`
- `time[datetime="2026-03-10T18:21:56.000Z"]`
- `#notice-10244742 > .content > h2`
- `time[datetime="2026-03-10T17:29:26.000Z"]`
- `#notice-10244630 > .content > h2`
- `time[datetime="2026-03-10T15:22:12.000Z"]`
- `#notice-10244627 > .content > h2`
- `time[datetime="2026-03-10T15:21:36.000Z"]`
- `#notice-10244421 > .content > h2`
- `time[datetime="2026-03-10T14:27:35.000Z"]`
- `#notice-10244417 > .content > h2`
- `time[datetime="2026-03-10T14:26:48.000Z"]`
- `#notice-10244389 > .content > h2`
- `time[datetime="2026-03-10T14:21:42.000Z"]`
- `div[title="EU vil satse på kjernekraft"] > h2`
- `time[datetime="2026-03-10T14:18:47.000Z"]`
- `div[title="Telia: Problemet er løst"] > h2`
- `time[datetime="2026-03-10T14:02:53.000Z"]`
- `#notice-10243582 > .content > h2`
- `time[datetime="2026-03-10T13:24:44.000Z"]`
- `div[title="Pågrepet etter skyteepisoder"] > h2`
- `time[datetime="2026-03-10T10:00:25.000Z"]`
- `div[title="Fange rømte under lufting"] > h2`
- `time[datetime="2026-03-10T09:59:25.000Z"]`
- `div[title="Minst 70 kyr brant inne"] > h2`
- `time[datetime="2026-03-10T09:57:47.000Z"]`
- `div[title="Feilen ved Oslo S er rettet"] > h2`
- `time[datetime="2026-03-10T08:45:09.000Z"]`
- `div[title="NTP: Beredskap nytt hovedmål "] > h2`
- `time[datetime="2026-03-10T07:48:20.000Z"]`
- `#notice-10243098 > .content > h2`
- `time[datetime="2026-03-10T07:32:05.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `.row.large-12.small-12:nth-child(6)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.mobile_no_border_side.hasBorder.mobile-hasBorder`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(13)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `#article_list_10187147 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10187147 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(17)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(19)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.row.large-12.small-12:nth-child(22)`
- `.row.large-12.small-12:nth-child(24)`
- `#article_list_10184114 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(29)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `#article_list_10230577 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(41)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(42)`
- `.row.large-12.small-12:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(47)`
- `.row.large-12.small-12:nth-child(48)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(49)`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(54)`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `.powered-by`
