# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-11-07T05:00:16.190Z
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

- `.singleline.font-PTSans.t14 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 141

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `#notice-10622365 > .content > h2`
- `time[datetime="2026-11-06T21:00:48.000Z"]`
- `#notice-10622326 > .content > h2`
- `time[datetime="2026-11-06T20:06:21.000Z"]`
- `#notice-10622285 > .content > h2`
- `time[datetime="2026-11-06T19:34:34.000Z"]`
- `#notice-10622284 > .content > h2`
- `time[datetime="2026-11-06T19:37:13.000Z"]`
- `#notice-10622254 > .content > h2`
- `time[datetime="2026-11-06T18:21:10.000Z"]`
- `div[title="Trusselsituasjon i Bergen"] > h2`
- `time[datetime="2026-11-06T17:58:55.000Z"]`
- `div[title="Kristersson får utvidet frist"] > h2`
- `time[datetime="2026-11-06T17:30:47.000Z"]`
- `div[title="Togtrafikken i gang igjen"] > h2`
- `time[datetime="2026-11-06T17:29:43.000Z"]`
- `div[title="Anker ikke drapsforbund-dom"] > h2`
- `time[datetime="2026-11-06T14:29:06.000Z"]`
- `#notice-10621357 > .content > h2`
- `time[datetime="2026-11-06T11:43:09.000Z"]`
- `#notice-10621150 > .content > h2`
- `time[datetime="2026-11-06T10:46:21.000Z"]`
- `#notice-10620774 > .content > h2`
- `time[datetime="2026-11-06T09:10:17.000Z"]`
- `#notice-10620623 > .content > h2`
- `time[datetime="2026-11-06T08:28:12.000Z"]`
- `#notice-10620446 > .content > h2`
- `time[datetime="2026-11-06T07:25:40.000Z"]`
- `#notice-10620374 > .content > h2`
- `time[datetime="2026-11-06T06:22:53.000Z"]`
- `div[title="Rubio avviser rykter om avgang"] > h2`
- `time[datetime="2026-11-06T06:21:47.000Z"]`
- `#notice-10620274 > .content > h2`
- `time[datetime="2026-11-05T19:45:48.000Z"]`
- `div[title="Gjerpen slår seg selv konkurs"] > h2`
- `time[datetime="2026-11-05T18:41:33.000Z"]`
- `div[title="USA med nye Cuba-sanksjoner"] > h2`
- `time[datetime="2026-11-05T19:02:46.000Z"]`
- `#notice-10620183 > .content > h2`
- `time[datetime="2026-11-05T17:49:25.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(5)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(7)`
- `#article_list_10616068 > .inner.fullwidthTarget.content > .articlescroller-header`
- `#article_list_10616068 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.has-row-header`
- `#offer_56afa1b3874ca25dd5ca-0, img`
- `#offer_56afa1b3874ca25dd5ca-0, .pw-text`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(13)`
- `.row.large-12.small-12:nth-child(14)`
- `#offer_56afa1b3874ca25dd5ca-2, img`
- `#offer_56afa1b3874ca25dd5ca-2, .pw-text`
- `.page-content > .border-bg-quinary-light.mobile_border-bg-quinary-light.hasBorder`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .lab-scrollbox-headline.t25.font-InterTight`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(20)`
- `.row.large-12.small-12:nth-child(21)`
- `.articlescroller-header.t25.tm18`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.mobile_no_border_color.color_mobile_no_bg_color.row:nth-child(23)`
- `.row.large-12.small-12:nth-child(25)`
- `.lab-scrollbox-headline.t25.tm18`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(27)`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.t25.font-InterTight`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.t28.lab-scrollbox-headline.font-InterTight`
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
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(35)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(40)`
- `#offer_56afa1b3874ca25dd5ca-3, img`
- `#offer_56afa1b3874ca25dd5ca-3, .pw-text`
- `.row.large-12.small-12:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.row.large-12.small-12:nth-child(45)`
- `.row.large-12.small-12:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(50)`
- `.row.large-12.small-12:nth-child(51)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(55)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.bg-black.color_mobile_bg-black.hasContentPadding:nth-child(67)`
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
