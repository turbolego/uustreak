# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-01-19T00:40:30.727Z
**URL:** [https://www.dagsavisen.no/#](https://www.dagsavisen.no/#)
**Total Violations:** 6

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.text_singleline.large-3.large-abs-3:nth-child(3) > .font-PTSans.singleline.tm14 > a:nth-child(9)`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.large-8 > .singleline`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 11

#### Affected Elements:

- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(7) > .t30`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > .tm36`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(17) > .t35`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > .tm36`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(22) > .tm36`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.tm15`
- `.tm21.t28`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > .tm36`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(52) > .t42.tm21`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(53) > .t42.tm21`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.mainMenu`
- `#markup_10151715 > .fullwidthTarget.content > unite-player,mux-player[metadata-video-title="Hva vil Trump med Venezuela?"],media-theme,media-controller`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- `a[href$="mailto:kb@dagsavisen.no"]`
- `.tm17.font-PTSans.singleline > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 88

#### Affected Elements:

- `h1`
- `#notice-10156036 > .content > h2`
- `time[datetime="2026-01-18T21:28:47.000Z"]`
- `#notice-10156029 > .content > h2`
- `time[datetime="2026-01-18T19:43:15.000Z"]`
- `#notice-10155983 > .content > h2`
- `time[datetime="2026-01-18T17:05:05.000Z"]`
- `#notice-10155957 > .content > h2`
- `time[datetime="2026-01-18T16:40:38.000Z"]`
- `#notice-10155956 > .content > h2`
- `time[datetime="2026-01-18T16:06:14.000Z"]`
- `#notice-10155872 > .content > h2`
- `time[datetime="2026-01-18T15:33:07.000Z"]`
- `#notice-10155786 > .content > h2`
- `time[datetime="2026-01-18T13:21:05.000Z"]`
- `#notice-10155693 > .content > h2`
- `time[datetime="2026-01-18T12:12:34.000Z"]`
- `#notice-10155665 > .content > h2`
- `time[datetime="2026-01-18T11:10:50.000Z"]`
- `div[title="Iran: Mer enn 5000 døde"] > h2`
- `time[datetime="2026-01-18T10:35:08.000Z"]`
- `#notice-10155496 > .content > h2`
- `time[datetime="2026-01-18T10:37:22.000Z"]`
- `#notice-10155476 > .content > h2`
- `time[datetime="2026-01-18T07:14:27.000Z"]`
- `#notice-10155475 > .content > h2`
- `time[datetime="2026-01-18T07:02:24.000Z"]`
- `#notice-10155474 > .content > h2`
- `time[datetime="2026-01-18T07:01:18.000Z"]`
- `#notice-10155473 > .content > h2`
- `time[datetime="2026-01-18T06:58:44.000Z"]`
- `#notice-10155403 > .content > h2`
- `time[datetime="2026-01-17T19:01:48.000Z"]`
- `div[title="Macron: Lar oss ikke true"] > h2`
- `time[datetime="2026-01-17T18:46:58.000Z"]`
- `#notice-10155385 > .content > h2`
- `time[datetime="2026-01-17T18:36:47.000Z"]`
- `div[title="NHO om straffetoll: Alvorlig"] > h2`
- `time[datetime="2026-01-17T18:36:02.000Z"]`
- `#notice-10155252 > .content > h2`
- `time[datetime="2026-01-17T18:02:30.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(6)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(7)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(17) > .t35`
- `article[data-instance="10151714"] > .content > .media > .floatingText`
- `.row.large-12.small-12:nth-child(18)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19)`
- `.row.large-12.small-12:nth-child(21)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(22)`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.tm26.t40.hasTextPadding`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(32)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(42)`
- `.row.large-12.small-12:nth-child(43)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.row.large-12.small-12:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(48)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(49)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(52)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(53)`
- `.powered-by`
