# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-11-09T04:59:25.052Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 5

#### Affected Elements:

- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `#offer_56afa1b3874ca25dd5ca-0, .pw-button`
- `#offer_56afa1b3874ca25dd5ca-2, .pw-button`
- `#offer_56afa1b3874ca25dd5ca-3, .pw-button`
- `#offer_56afa1b3874ca25dd5ca-1, .pw-button`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.text_singleline.large-8.large-abs-8 > .singleline`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 6

#### Affected Elements:

- `#offer_56afa1b3874ca25dd5ca-0`
- `#offer_56afa1b3874ca25dd5ca-2`
- `iframe[data-testid="embed-iframe"]`
- `#offer_56afa1b3874ca25dd5ca-3`
- `#offer_56afa1b3874ca25dd5ca-1`
- `#offer_6fcd7fa199cb7f539808-0`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `h5`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.customMenu2`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `.singleline.font-PTSans.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 145

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `#notice-10623549 > .content > h2`
- `time[datetime="2026-11-08T20:25:00.000Z"]`
- `#notice-10623542 > .content > h2`
- `time[datetime="2026-11-08T19:39:44.000Z"]`
- `#notice-10623541 > .content > h2`
- `time[datetime="2026-11-08T19:28:35.000Z"]`
- `#notice-10623532 > .content > h2`
- `time[datetime="2026-11-08T19:05:19.000Z"]`
- `#notice-10623531 > .content > h2`
- `time[datetime="2026-11-08T19:04:08.000Z"]`
- `#notice-10623525 > .content > h2`
- `time[datetime="2026-11-08T18:41:09.000Z"]`
- `#notice-10623517 > .content > h2`
- `time[datetime="2026-11-08T18:39:02.000Z"]`
- `#notice-10623510 > .content > h2`
- `time[datetime="2026-11-08T17:48:39.000Z"]`
- `#notice-10623480 > .content > h2`
- `time[datetime="2026-11-08T17:24:32.000Z"]`
- `#notice-10623469 > .content > h2`
- `time[datetime="2026-11-08T16:54:07.000Z"]`
- `#notice-10623453 > .content > h2`
- `time[datetime="2026-11-08T16:32:16.000Z"]`
- `#notice-10623400 > .content > h2`
- `time[datetime="2026-11-08T17:01:45.000Z"]`
- `#notice-10623345 > .content > h2`
- `time[datetime="2026-11-08T15:45:23.000Z"]`
- `#notice-10623344 > .content > h2`
- `time[datetime="2026-11-08T15:07:02.000Z"]`
- `#notice-10623326 > .content > h2`
- `time[datetime="2026-11-08T14:52:01.000Z"]`
- `#notice-10623308 > .content > h2`
- `time[datetime="2026-11-08T14:10:54.000Z"]`
- `div[title="Innstilte ferger og stengt vei"] > h2`
- `time[datetime="2026-11-08T12:08:44.000Z"]`
- `div[title="21 døde da migrantbåt kantret"] > h2`
- `time[datetime="2026-11-08T10:16:05.000Z"]`
- `div[title="600.000 uten strøm i Ukraina"] > h2`
- `time[datetime="2026-11-08T09:04:17.000Z"]`
- `div[title="Tre menn henrettet i Iran"] > h2`
- `time[datetime="2026-11-08T09:03:11.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.bg-primary`
- `.row.large-12.small-12:nth-child(5)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(7)`
- `#offer_56afa1b3874ca25dd5ca-0, img`
- `#offer_56afa1b3874ca25dd5ca-0, .pw-text`
- `.has-row-header`
- `.row.large-12.small-12:nth-child(10)`
- `#article_list_10616068 > .inner.fullwidthTarget.content > .articlescroller-header`
- `#article_list_10616068 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `#offer_56afa1b3874ca25dd5ca-2, img`
- `#offer_56afa1b3874ca25dd5ca-2, .pw-text`
- `.page-content > .border-bg-quinary-light.mobile_border-bg-quinary-light.hasBorder`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .lab-scrollbox-headline.t25.font-InterTight`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(17)`
- `.row.large-12.small-12:nth-child(19)`
- `.row.large-12.small-12:nth-child(20)`
- `.articlescroller-header.t25.tm18`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.mobile_no_border_color.color_mobile_no_bg_color.row:nth-child(22)`
- `.row.large-12.small-12:nth-child(23)`
- `.lab-scrollbox-headline.t25.tm18`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(26)`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.t25.font-InterTight`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.lab-scrollbox-headline.t28.font-InterTight`
- `#markup_10614273 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614272"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10614251 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614250"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10614253 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614252"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10614255 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614254"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10614257 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614256"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10614259 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614258"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10614261 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614260"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10614263 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614262"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10614265 > .fullwidthTarget.content > unite-player,#status-container`
- `.color_mobile_no_bg_color.align-center.mobile_text_align_align-center > .floatingTextSubset.media > .floatingText`
- `#markup_10614267 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614266"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10614269 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614268"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10614271 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10614270"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(35)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `#offer_56afa1b3874ca25dd5ca-3, img`
- `#offer_56afa1b3874ca25dd5ca-3, .pw-text`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.row.large-12.small-12:nth-child(45)`
- `.row.large-12.small-12:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(50)`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(55)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(63)`
- `.row.large-12.small-12:nth-child(64)`
- `.row.large-12.small-12:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.row.large-12.small-12:nth-child(67)`
- `.row.large-12.small-12:nth-child(68)`
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(70)`
- `.bg-black.color_mobile_bg-black.hasContentPadding:nth-child(71)`
- `#offer_56afa1b3874ca25dd5ca-1, img`
- `#offer_56afa1b3874ca25dd5ca-1, .pw-text`
- `#offer_6fcd7fa199cb7f539808-0, img`
- `#offer_6fcd7fa199cb7f539808-0, .pw-subtitle`
- `#offer_6fcd7fa199cb7f539808-0, .pw-offer`
- `#offer_6fcd7fa199cb7f539808-0, #pw-countdown`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.tm20`
- `#article_list_9904930 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `#article_list_10614247 > .content > .scroll-container.swipehelper.snap-container-x`
