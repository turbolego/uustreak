# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-01-17T00:40:03.295Z
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

- `a[href$="mailto:anne@dagsavisen.no"]`

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
- **Count:** 10

#### Affected Elements:

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(11) > .tm36`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(17) > .t35`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(21) > .tm36`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(33) > .t23`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.tm15`
- `.tm21.t28`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > .tm36`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(43) > .t42.tm21`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(44) > .t42.tm21`

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
- **Count:** 81

#### Affected Elements:

- `h1`
- `#notice-10154805 > .content > h2`
- `time[datetime="2026-01-16T20:35:37.000Z"]`
- `div[title="20 kilometer kø etter ulykke"] > h2`
- `time[datetime="2026-01-16T20:30:22.000Z"]`
- `div[title="Fraråder flyging over Iran"] > h2`
- `time[datetime="2026-01-16T19:38:37.000Z"]`
- `div[title="Tester reklame til ChatGPT"] > h2`
- `time[datetime="2026-01-16T19:19:44.000Z"]`
- `#notice-10154765 > .content > h2`
- `time[datetime="2026-01-16T18:42:02.000Z"]`
- `#notice-10154763 > .content > h2`
- `time[datetime="2026-01-16T19:18:04.000Z"]`
- `#notice-10154744 > .content > h2`
- `time[datetime="2026-01-16T20:31:45.000Z"]`
- `#notice-10154653 > .content > h2`
- `time[datetime="2026-01-16T16:58:02.000Z"]`
- `div[title="Oslo: Signalfeilen er rettet"] > h2`
- `time[datetime="2026-01-16T16:36:14.000Z"]`
- `#notice-10154532 > .content > h2`
- `time[datetime="2026-01-16T14:51:06.000Z"]`
- `div[title="Iran: 3000 pågrepet"] > h2`
- `time[datetime="2026-01-16T14:05:43.000Z"]`
- `div[title="Lærer slått ned av elev"] > h2`
- `time[datetime="2026-01-16T14:04:11.000Z"]`
- `#notice-10154037 > .content > h2`
- `#notice-10154037 > .content > .meta`
- `#notice-10153879 > .content > h2`
- `#notice-10153879 > .content > .meta`
- `#notice-10153621 > .content > h2`
- `time[datetime="2026-01-16T10:59:40.000Z"]`
- `#notice-10153486 > .content > h2`
- `#notice-10153486 > .content > .meta`
- `div[title="VG: Nav har problemer "] > h2`
- `div[title="VG: Nav har problemer "] > .meta`
- `#notice-10153191 > .content > h2`
- `#notice-10153191 > .content > .meta`
- `div[title="Flere matbud utvist fra Norge"] > h2`
- `div[title="Flere matbud utvist fra Norge"] > .meta`
- `#notice-10152859 > .content > h2`
- `#notice-10152859 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(9)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(16)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(17) > .t35`
- `article[data-instance="10151714"] > .content > .media > .floatingText`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(21)`
- `.row.large-12.small-12:nth-child(22)`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(29)`
- `.tm26.t40.hasTextPadding`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(32)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(39)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(41)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(43)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(44)`
- `.powered-by`
