# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-11-11T05:02:35.476Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 9

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`

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
- **Count:** 5

#### Affected Elements:

- `#offer_0cfaa4c18ebe058946bc-0`
- `#offer_59dc168a95d88c084eeb-0`
- `iframe[data-testid="embed-iframe"]`
- `#offer_59dc168a95d88c084eeb-1`
- `#offer_0cfaa4c18ebe058946bc-1`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 4

#### Affected Elements:

- `#offer_0cfaa4c18ebe058946bc-0, img`
- `#offer_59dc168a95d88c084eeb-0, img`
- `#offer_59dc168a95d88c084eeb-1, img`
- `#offer_0cfaa4c18ebe058946bc-1, img`

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
- **Count:** 5

#### Affected Elements:

- `#offer_0cfaa4c18ebe058946bc-0, a`
- `#offer_59dc168a95d88c084eeb-0, a`
- `#offer_59dc168a95d88c084eeb-1, a`
- `#offer_0cfaa4c18ebe058946bc-1, a`
- `.singleline.font-PTSans.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 128

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `div[title="SAS legger ned rute"] > h2`
- `time[datetime="2026-11-10T20:08:34.000Z"]`
- `#notice-10627430 > .content > h2`
- `time[datetime="2026-11-10T19:13:07.000Z"]`
- `#notice-10627414 > .content > h2`
- `time[datetime="2026-11-10T18:51:46.000Z"]`
- `#notice-10627359 > .content > h2`
- `time[datetime="2026-11-10T17:25:25.000Z"]`
- `div[title="Ny byutviklingsbyråd i Oslo"] > h2`
- `div[title="Ny byutviklingsbyråd i Oslo"] > .meta`
- `div[title="Nvidia saksøkt av aksjeeiere"] > h2`
- `time[datetime="2026-11-10T12:22:43.000Z"]`
- `#notice-10626297 > .content > h2`
- `#notice-10626297 > .content > .meta`
- `div[title="Nå kommer snøen til Østlandet"] > h2`
- `div[title="Nå kommer snøen til Østlandet"] > .meta`
- `#notice-10625455 > .content > h2`
- `#notice-10625455 > .content > .meta`
- `#notice-10625442 > .content > h2`
- `#notice-10625442 > .content > .meta`
- `#notice-10625439 > .content > h2`
- `#notice-10625439 > .content > .meta`
- `div[title="Australia skjerper KI-regler"] > h2`
- `div[title="Australia skjerper KI-regler"] > .meta`
- `div[title="Oljeprisen falt kraftig"] > h2`
- `div[title="Oljeprisen falt kraftig"] > .meta`
- `#notice-10625436 > .content > h2`
- `#notice-10625436 > .content > .meta`
- `#notice-10625327 > .content > h2`
- `time[datetime="2026-11-09T19:49:39.000Z"]`
- `div[title="Marius Borg Høiby er avhørt"] > h2`
- `time[datetime="2026-11-09T17:56:02.000Z"]`
- `#notice-10625215 > .content > h2`
- `time[datetime="2026-11-09T16:37:21.000Z"]`
- `#notice-10625122 > .content > h2`
- `time[datetime="2026-11-09T15:28:12.000Z"]`
- `div[title="Russell Brand dømt til fengsel"] > h2`
- `time[datetime="2026-11-09T14:50:58.000Z"]`
- `#notice-10624773 > .content > h2`
- `time[datetime="2026-11-09T13:36:35.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(5)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.has-row-header`
- `.row.large-12.small-12:nth-child(10)`
- `#offer_0cfaa4c18ebe058946bc-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(13)`
- `.row.large-12.small-12:nth-child(14)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(15)`
- `#offer_59dc168a95d88c084eeb-0, div[ng-show="!terminalError"]`
- `.page-content > .border-bg-quinary-light.mobile_border-bg-quinary-light.hasBorder`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .lab-scrollbox-headline.t25.font-InterTight`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(21)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(22)`
- `.articlescroller-header.t25.tm18`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(25)`
- `.mobile_no_border_color.color_mobile_no_bg_color.row:nth-child(26)`
- `.lab-scrollbox-headline.t25.tm18`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(28)`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.t25.font-InterTight`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
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
- `.row.large-12.small-12:nth-child(35)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(40)`
- `.row.large-12.small-12:nth-child(41)`
- `#offer_59dc168a95d88c084eeb-1, div[ng-show="!terminalError"]`
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
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(62)`
- `.page-content > .bg-black.color_mobile_bg-black.hasContentPadding`
- `#offer_0cfaa4c18ebe058946bc-1, div[ng-show="!terminalError"]`
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
