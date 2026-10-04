# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-10-04T04:57:56.464Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `#offer_b426df421caf545e51f5-1, .pw-button`
- `#offer_b426df421caf545e51f5-2, .pw-button`
- `#offer_b426df421caf545e51f5-0, .pw-button`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.text_singleline.large-8.large-abs-8 > .singleline`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 5

#### Affected Elements:

- `iframe[data-testid="embed-iframe"]`
- `#offer_b426df421caf545e51f5-1`
- `#offer_b426df421caf545e51f5-2`
- `#offer_b426df421caf545e51f5-0`
- `#offer_35cc7e60bc8ecd3914d0-0`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 4

#### Affected Elements:

- `.has-row-header.bg-white.color_mobile_bg-white:nth-child(11) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(31) > h5`
- `.has-row-header.bg-white.color_mobile_bg-white:nth-child(53) > h5`
- `.has-row-header.bg-white.color_mobile_bg-white:nth-child(64) > h5`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.customMenu2`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- `#google_ads_iframe_\/38586112\/dagsavisen\/toppbanner_0, #aw0`
- `.singleline.font-PTSans.t14 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 140

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `div[title="Brasil: Lulas ledelse minker"] > h2`
- `div[title="Brasil: Lulas ledelse minker"] > .meta`
- `#notice-10563888 > .content > h2`
- `#notice-10563888 > .content > .meta`
- `#notice-10563887 > .content > h2`
- `#notice-10563887 > .content > .meta`
- `#notice-10563797 > .content > h2`
- `#notice-10563797 > .content > .meta`
- `#notice-10563765 > .content > h2`
- `time[datetime="2026-10-03T09:49:10.000Z"]`
- `#notice-10563762 > .content > h2`
- `time[datetime="2026-10-03T09:38:06.000Z"]`
- `#notice-10563742 > .content > h2`
- `time[datetime="2026-10-03T09:13:01.000Z"]`
- `div[title="Faren avblåst i Litauen"] > h2`
- `time[datetime="2026-10-03T08:02:58.000Z"]`
- `div[title="FIS slår alarm om egen økonomi"] > h2`
- `time[datetime="2026-10-03T07:41:20.000Z"]`
- `div[title="Nytt angrep mot bro i Kyiv"] > h2`
- `time[datetime="2026-10-03T06:32:06.000Z"]`
- `#notice-10563603 > .content > h2`
- `time[datetime="2026-10-03T06:40:49.000Z"]`
- `#notice-10563602 > .content > h2`
- `time[datetime="2026-10-03T06:08:00.000Z"]`
- `#notice-10563599 > .content > h2`
- `#notice-10563599 > .content > .meta`
- `#notice-10563541 > .content > h2`
- `#notice-10563541 > .content > .meta`
- `#notice-10563523 > .content > h2`
- `#notice-10563523 > .content > .meta`
- `#notice-10563415 > .content > h2`
- `#notice-10563415 > .content > .meta`
- `#notice-10562932 > .content > h2`
- `#notice-10562932 > .content > .meta`
- `div[title="Kraftig vekst i leieprisene"] > h2`
- `div[title="Kraftig vekst i leieprisene"] > .meta`
- `div[title="Arbeidslivsavtale om KI"] > h2`
- `div[title="Arbeidslivsavtale om KI"] > .meta`
- `#notice-10561951 > .content > h2`
- `#notice-10561951 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(5)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(10)`
- `.has-row-header.bg-white.color_mobile_bg-white:nth-child(11)`
- `.row.large-12.small-12:nth-child(13)`
- `#offer_b426df421caf545e51f5-1, img`
- `#offer_b426df421caf545e51f5-1, .pw-text`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(16)`
- `.page-content > .border-bg-quinary-light.mobile_border-bg-quinary-light.hasBorder`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.t25.font-InterTight`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.color_mobile_no_bg_color.row.large-12:nth-child(20)`
- `.row.large-12.small-12:nth-child(21)`
- `.articlescroller-header.t25.tm18`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.page-content > .border_width_no_border_width.border_width_mobile_no_border_width.mobile_no_border_color`
- `.row.large-12.small-12:nth-child(25)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .lab-scrollbox-headline.t25.font-InterTight`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(29)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.t28.lab-scrollbox-headline.font-InterTight`
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
- `.row.large-12.small-12:nth-child(37)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(40)`
- `#offer_b426df421caf545e51f5-2, img`
- `#offer_b426df421caf545e51f5-2, .pw-text`
- `.row.large-12.small-12:nth-child(43)`
- `.bg-black`
- `.row.large-12.small-12:nth-child(45)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(47)`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(50)`
- `.row.large-12.small-12:nth-child(51)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(52)`
- `.has-row-header.bg-white.color_mobile_bg-white:nth-child(53)`
- `.row.large-12.small-12:nth-child(55)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(59)`
- `.row.large-12.small-12:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.has-row-header.bg-white.color_mobile_bg-white:nth-child(64)`
- `.row.large-12.small-12:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.row.large-12.small-12:nth-child(67)`
- `.row.large-12.small-12:nth-child(68)`
- `.row.large-12.small-12:nth-child(69)`
- `.row.large-12.small-12:nth-child(70)`
- `.row.large-12.small-12:nth-child(71)`
- `.row.large-12.small-12:nth-child(72)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(73)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(74)`
- `.row.large-12.small-12:nth-child(75)`
- `.row.large-12.small-12:nth-child(76)`
- `.row.large-12.small-12:nth-child(77)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(78)`
- `.articlescroller-header.tm20.font-PTSans`
- `#article_list_9904930 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(80)`
- `#offer_b426df421caf545e51f5-0, img`
- `#offer_b426df421caf545e51f5-0, .pw-text`
- `.row.large-12.small-12:nth-child(82)`
- `#offer_35cc7e60bc8ecd3914d0-0, img`
- `#offer_35cc7e60bc8ecd3914d0-0, .pw-subtitle`
- `#offer_35cc7e60bc8ecd3914d0-0, .pw-offer`
- `#offer_35cc7e60bc8ecd3914d0-0, #pw-countdown`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `#article_list_10440424 > .content > .scroll-container.swipehelper.snap-container-x`
