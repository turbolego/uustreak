# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-10-22T11:55:59.766Z
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
- **Count:** 4

#### Affected Elements:

- `iframe[data-testid="embed-iframe"]`
- `#offer_4992f7477e94a7ea214a-0`
- `#offer_4992f7477e94a7ea214a-1`
- `#offer_25de92e59ecc9e9aa9cd-0`

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
- **Count:** 3

#### Affected Elements:

- `#offer_4992f7477e94a7ea214a-0, img`
- `#offer_4992f7477e94a7ea214a-1, img`
- `#offer_25de92e59ecc9e9aa9cd-0, img`

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
- **Count:** 4

#### Affected Elements:

- `#offer_4992f7477e94a7ea214a-0, a`
- `#offer_4992f7477e94a7ea214a-1, a`
- `#offer_25de92e59ecc9e9aa9cd-0, a`
- `.singleline.font-PTSans.t14 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 127

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `#notice-10595560 > .content > h2`
- `#notice-10595560 > .content > .meta`
- `#notice-10595541 > .content > h2`
- `#notice-10595541 > .content > .meta`
- `#notice-10595538 > .content > h2`
- `#notice-10595538 > .content > .meta`
- `div[title="Røykutvikling på godstog"] > h2`
- `div[title="Røykutvikling på godstog"] > .meta`
- `#notice-10595101 > .content > h2`
- `#notice-10595101 > .content > .meta`
- `div[title="Nybilsalget i EU øker"] > h2`
- `div[title="Nybilsalget i EU øker"] > .meta`
- `div[title="Flere alderspensjonister"] > h2`
- `div[title="Flere alderspensjonister"] > .meta`
- `#notice-10594798 > .content > h2`
- `#notice-10594798 > .content > .meta`
- `#notice-10594751 > .content > h2`
- `#notice-10594751 > .content > .meta`
- `div[title="Stort missilangrep mot Kyiv"] > h2`
- `div[title="Stort missilangrep mot Kyiv"] > .meta`
- `div[title="Stort droneangrep mot Moskva"] > h2`
- `div[title="Stort droneangrep mot Moskva"] > .meta`
- `#notice-10594691 > .content > h2`
- `time[datetime="2026-10-21T19:27:11.000Z"]`
- `#notice-10594690 > .content > h2`
- `time[datetime="2026-10-21T19:41:03.000Z"]`
- `#notice-10594632 > .content > h2`
- `time[datetime="2026-10-21T18:14:40.000Z"]`
- `#notice-10594539 > .content > h2`
- `time[datetime="2026-10-21T17:58:44.000Z"]`
- `#notice-10594071 > .content > h2`
- `time[datetime="2026-10-21T13:02:16.000Z"]`
- `#notice-10593965 > .content > h2`
- `time[datetime="2026-10-21T12:30:40.000Z"]`
- `#notice-10593819 > .content > h2`
- `#notice-10593819 > .content > .meta`
- `div[title="Kreml: Mye avhenger av Ukraina"] > h2`
- `div[title="Kreml: Mye avhenger av Ukraina"] > .meta`
- `#notice-10593724 > .content > h2`
- `#notice-10593724 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(5)`
- `.row.large-12.small-12:nth-child(7)`
- `.has-row-header`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(9)`
- `#offer_4992f7477e94a7ea214a-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(13)`
- `.row.large-12.small-12:nth-child(14)`
- `.page-content > .border-bg-quinary-light.mobile_border-bg-quinary-light.hasBorder`
- `.row.large-12.small-12:nth-child(16)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .lab-scrollbox-headline.t25.font-InterTight`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(19)`
- `.articlescroller-header.t25.tm18`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(21)`
- `.mobile_no_border_color.color_mobile_no_bg_color.row:nth-child(22)`
- `.row.large-12.small-12:nth-child(23)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(25)`
- `.row.large-12.small-12:nth-child(26)`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.t25.font-InterTight`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.lab-scrollbox-headline.t28.font-InterTight`
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
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(35)`
- `.row.large-12.small-12:nth-child(37)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `#offer_4992f7477e94a7ea214a-1, div[ng-show="!terminalError"]`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(41)`
- `.row.large-12.small-12:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.row.large-12.small-12:nth-child(45)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(50)`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(55)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(61)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(64)`
- `.row.large-12.small-12:nth-child(65)`
- `.lab-scrollbox-headline.t25.tm18`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(68)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(70)`
- `.row.large-12.small-12:nth-child(71)`
- `.bg-black`
- `.row.large-12.small-12:nth-child(73)`
- `#offer_25de92e59ecc9e9aa9cd-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(75)`
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

- `#article_list_10440424 > .content > .scroll-container.swipehelper.snap-container-x`
