# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-09-01T03:54:43.750Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 8

## Violation Details

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

- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(48) > h5`
- `.has-row-header.bg-quinary.color_mobile_bg-quinary:nth-child(52) > h5`
- `.has-row-header.bg-quinary.color_mobile_bg-quinary:nth-child(65) > h5`

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
- **Count:** 2

#### Affected Elements:

- `#offer_25de92e59ecc9e9aa9cd-0, a`
- `.singleline.font-PTSans.t14 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 123

#### Affected Elements:

- `h1`
- `div[title="Artister slår ring om Tono"] > h2`
- `time[datetime="2026-08-31T20:03:10.000Z"]`
- `div[title="Strammer inn for turister"] > h2`
- `time[datetime="2026-08-31T19:20:44.000Z"]`
- `#notice-10507565 > .content > h2`
- `time[datetime="2026-08-31T18:46:15.000Z"]`
- `div[title="Fotoforbud i Slottskapellet"] > h2`
- `time[datetime="2026-08-31T18:44:59.000Z"]`
- `div[title="Iran ber om dialog"] > h2`
- `time[datetime="2026-08-31T16:48:14.000Z"]`
- `div[title="Nepal: 939 bekreftet døde"] > h2`
- `time[datetime="2026-08-31T16:47:43.000Z"]`
- `#notice-10506870 > .content > h2`
- `time[datetime="2026-08-31T12:25:40.000Z"]`
- `#notice-10506716 > .content > h2`
- `#notice-10506716 > .content > .meta`
- `#notice-10506647 > .content > h2`
- `#notice-10506647 > .content > .meta`
- `#notice-10506570 > .content > h2`
- `#notice-10506570 > .content > .meta`
- `div[title="UDI legger ned sju mottak"] > h2`
- `div[title="UDI legger ned sju mottak"] > .meta`
- `#notice-10506030 > .content > h2`
- `#notice-10506030 > .content > .meta`
- `div[title="Forsinkelser på Østfoldbanen"] > h2`
- `div[title="Forsinkelser på Østfoldbanen"] > .meta`
- `#notice-10505770 > .content > h2`
- `#notice-10505770 > .content > .meta`
- `div[title="Rundt 15 savnet i Grand Canyon"] > h2`
- `div[title="Rundt 15 savnet i Grand Canyon"] > .meta`
- `div[title="To drept i angrep mot Belgorod"] > h2`
- `div[title="To drept i angrep mot Belgorod"] > .meta`
- `#notice-10505014 > .content > h2`
- `#notice-10505014 > .content > .meta`
- `#notice-10504654 > .content > h2`
- `time[datetime="2026-08-31T07:41:01.000Z"]`
- `#notice-10504523 > .content > h2`
- `#notice-10504523 > .content > .meta`
- `#notice-10504521 > .content > h2`
- `#notice-10504521 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.bg-black-dark.color_mobile_bg-black-dark.hasContentPadding:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.row.large-12.small-12:nth-child(13)`
- `.row.large-12.small-12:nth-child(14)`
- `.row.large-12.small-12:nth-child(16)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.t25.font-PTSans`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(22)`
- `.page-content > .border_width_no_border_width.border_width_mobile_no_border_width.mobile_no_border_color`
- `.page-content > .border-bg-quaternary.mobile_border-bg-quaternary.hasBorder`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.bg-black-dark.color_mobile_bg-black-dark.hasContentPadding:nth-child(29)`
- `.bg-black-dark.color_mobile_bg-black-dark.hasContentPadding:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.t28.lab-scrollbox-headline.m-font-weight-normal`
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
- `#article_list_10184114 > .content > .lab-scrollbox-headline.t25.font-PTSans`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.bg-black-dark.color_mobile_bg-black-dark.hasContentPadding:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.bg-black-dark.color_mobile_bg-black-dark.hasContentPadding:nth-child(39)`
- `.bg-black-dark.color_mobile_bg-black-dark.hasContentPadding:nth-child(41)`
- `.row.large-12.small-12:nth-child(42)`
- `.bg-black-dark.color_mobile_bg-black-dark.hasContentPadding:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(47)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(48)`
- `.row.large-12.small-12:nth-child(49)`
- `.has-row-header.bg-quinary.color_mobile_bg-quinary:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(60)`
- `#article_list_10230577 > .content > .lab-scrollbox-headline.t25.font-PTSans`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `#offer_25de92e59ecc9e9aa9cd-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(63)`
- `.row.large-12.small-12:nth-child(64)`
- `.has-row-header.bg-quinary.color_mobile_bg-quinary:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.row.large-12.small-12:nth-child(67)`
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(68)`
- `.row.large-12.small-12:nth-child(69)`
- `.row.large-12.small-12:nth-child(70)`
- `.row.large-12.small-12:nth-child(71)`
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(72)`
- `.row.large-12.small-12:nth-child(73)`
- `.row.large-12.small-12:nth-child(74)`
- `.color_mobile_bg-quaternary.bg-quaternary.hasContentPadding:nth-child(75)`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `#article_list_10440424 > .content > .scroll-container.swipehelper.snap-container-x`
