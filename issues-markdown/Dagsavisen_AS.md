# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-09-02T07:05:27.947Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 9

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.text_singleline.large-8.large-abs-8 > .singleline`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- `iframe[data-testid="embed-iframe"]`
- `#offer_25de92e59ecc9e9aa9cd-0`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- `.bg-white > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(57) > h5`
- `.has-row-header.bg-quinary.color_mobile_bg-quinary > h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `#offer_25de92e59ecc9e9aa9cd-0, img`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.customMenu2`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- `#google_ads_iframe_\/38586112\/dagsavisen\/toppbanner_0, #aw0`
- `#offer_25de92e59ecc9e9aa9cd-0, a`
- `.singleline.font-PTSans.t14 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 125

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `div[title="Åtte såret i angrep mot Odesa"] > h2`
- `div[title="Åtte såret i angrep mot Odesa"] > .meta`
- `#notice-10509840 > .content > h2`
- `#notice-10509840 > .content > .meta`
- `#notice-10509763 > .content > h2`
- `#notice-10509763 > .content > .meta`
- `div[title="Syria: Har sikret 73 tonn uran"] > h2`
- `time[datetime="2026-09-01T19:27:43.000Z"]`
- `div[title="MC-fører omkom i trafikkulykke"] > h2`
- `time[datetime="2026-09-01T18:07:09.000Z"]`
- `#notice-10509649 > .content > h2`
- `time[datetime="2026-09-01T17:47:37.000Z"]`
- `#notice-10509589 > .content > h2`
- `time[datetime="2026-09-01T16:20:41.000Z"]`
- `div[title="Slutter i Norges bank"] > h2`
- `time[datetime="2026-09-01T14:55:54.000Z"]`
- `div[title="Tolv drept i russiske angrep"] > h2`
- `time[datetime="2026-09-01T14:54:34.000Z"]`
- `#notice-10509449 > .content > h2`
- `time[datetime="2026-09-01T14:18:54.000Z"]`
- `div[title="Inflasjonshopp i eurosonen"] > h2`
- `time[datetime="2026-09-01T13:35:10.000Z"]`
- `#notice-10509066 > .content > h2`
- `time[datetime="2026-09-01T12:44:52.000Z"]`
- `div[title="Ikea kutter priser i Europa"] > h2`
- `time[datetime="2026-09-01T12:43:45.000Z"]`
- `#notice-10508859 > .content > h2`
- `#notice-10508859 > .content > .meta`
- `div[title="Bhatti nekter straffskyld"] > h2`
- `div[title="Bhatti nekter straffskyld"] > .meta`
- `#notice-10507903 > .content > h2`
- `#notice-10507903 > .content > .meta`
- `#notice-10507819 > .content > h2`
- `#notice-10507819 > .content > .meta`
- `div[title="Over tusen døde i Himalaya"] > h2`
- `div[title="Over tusen døde i Himalaya"] > .meta`
- `#notice-10507764 > .content > h2`
- `#notice-10507764 > .content > .meta`
- `#notice-10507763 > .content > h2`
- `#notice-10507763 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.bg-white`
- `.row.large-12.small-12:nth-child(13)`
- `.row.large-12.small-12:nth-child(14)`
- `.row.large-12.small-12:nth-child(16)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(18)`
- `.bg-primary`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.t25.font-PTSans`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(22)`
- `.page-content > .border_width_no_border_width.border_width_mobile_no_border_width.mobile_no_border_color`
- `.color_mobile_no_bg_color.row.large-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.bg-black-dark.color_mobile_bg-black-dark.hasContentPadding:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.t28.lab-scrollbox-headline.font-weight-normal`
- `#markup_10478983 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10478981"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10453098 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10453097"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10453072 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10453073"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10440435 > .fullwidthTarget.content > unite-player,#status-container`
- `.color_mobile_no_bg_color.align-center.mobile_text_align_align-center > .floatingTextSubset.media > .floatingText`
- `#markup_10440421 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10440420"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10440430 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10440429"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10440438 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10440437"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `.row.large-12.small-12:nth-child(34)`
- `.lab-scrollbox-headline.t25.tm18`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.page-content > .border-bg-quaternary.mobile_border-bg-quaternary.hasBorder`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `.bg-black-dark.color_mobile_bg-black-dark.hasContentPadding:nth-child(42)`
- `.bg-black-dark.color_mobile_bg-black-dark.hasContentPadding:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.bg-black-dark.color_mobile_bg-black-dark.hasContentPadding:nth-child(46)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(48)`
- `.bg-black-dark.color_mobile_bg-black-dark.hasContentPadding:nth-child(49)`
- `.bg-black-dark.color_mobile_bg-black-dark.hasContentPadding:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.bg-black-dark.color_mobile_bg-black-dark.hasContentPadding:nth-child(53)`
- `.row.large-12.small-12:nth-child(55)`
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(56)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.row.large-12.small-12:nth-child(64)`
- `.lab-scrollbox-headline.t25.font-Newsreader`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .scroll-container.swipehelper.snap-container-x`
- `#offer_25de92e59ecc9e9aa9cd-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(67)`
- `.row.large-12.small-12:nth-child(68)`
- `.has-row-header.bg-quinary.color_mobile_bg-quinary`
- `.row.large-12.small-12:nth-child(70)`
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(71)`
- `.row.large-12.small-12:nth-child(72)`
- `.row.large-12.small-12:nth-child(73)`
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(74)`
- `.row.large-12.small-12:nth-child(75)`
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(76)`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `#article_list_10440424 > .content > .scroll-container.swipehelper.snap-container-x`
