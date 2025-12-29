# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-12-29T00:39:09.137Z
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

- `.text_singleline.large-8.large-abs-8 > .singleline`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 9

#### Affected Elements:

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > h5`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(51) > .t28`
- `.tm21.t28`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(55) > .t42.tm21`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(56) > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(57) > .t42.tm21`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.mainMenu`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `.tm17.font-PTSans.singleline > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 91

#### Affected Elements:

- `h1`
- `div[title="Trump har snakket med Putin"] > h2`
- `div[title="Trump har snakket med Putin"] > .meta`
- `div[title="Ni drept i knivangrep"] > h2`
- `time[datetime="2025-12-28T17:03:15.000Z"]`
- `div[title="Buss kjørte i grøfta i Tromsø"] > h2`
- `time[datetime="2025-12-28T16:44:37.000Z"]`
- `#notice-10127898 > .content > h2`
- `time[datetime="2025-12-28T16:43:31.000Z"]`
- `#notice-10127772 > .content > h2`
- `time[datetime="2025-12-28T14:53:10.000Z"]`
- `#notice-10127771 > .content > h2`
- `time[datetime="2025-12-28T14:51:57.000Z"]`
- `#notice-10127726 > .content > h2`
- `time[datetime="2025-12-28T13:46:28.000Z"]`
- `#notice-10127714 > .content > h2`
- `time[datetime="2025-12-28T13:40:36.000Z"]`
- `#notice-10127713 > .content > h2`
- `time[datetime="2025-12-28T13:38:49.000Z"]`
- `#notice-10127526 > .content > h2`
- `time[datetime="2025-12-28T11:12:51.000Z"]`
- `#notice-10127503 > .content > h2`
- `time[datetime="2025-12-28T11:13:13.000Z"]`
- `div[title="Brigitte Bardot (91) er død"] > h2`
- `time[datetime="2025-12-28T11:13:30.000Z"]`
- `#notice-10127488 > .content > h2`
- `time[datetime="2025-12-28T10:12:13.000Z"]`
- `#notice-10127487 > .content > h2`
- `time[datetime="2025-12-28T09:22:06.000Z"]`
- `#notice-10127479 > .content > h2`
- `time[datetime="2025-12-28T08:42:50.000Z"]`
- `#notice-10127478 > .content > h2`
- `time[datetime="2025-12-28T08:41:07.000Z"]`
- `#notice-10127477 > .content > h2`
- `time[datetime="2025-12-28T08:57:34.000Z"]`
- `#notice-10127464 > .content > h2`
- `time[datetime="2025-12-27T21:55:20.000Z"]`
- `div[title="15 døde i bussulykke"] > h2`
- `time[datetime="2025-12-27T21:52:01.000Z"]`
- `div[title="Til sykehus etter vold og ran"] > h2`
- `time[datetime="2025-12-27T17:59:20.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(9)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.row.large-12.small-12:nth-child(17)`
- `.row.large-12.small-12:nth-child(18)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19)`
- `.row.large-12.small-12:nth-child(21)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22)`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.tm26.t40.hasTextPadding`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-tags="langrenn,ski,sport,tour de ski"] > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(42)`
- `.row.large-12.small-12:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.row.large-12.small-12:nth-child(48)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(49)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(51)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(52)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(53)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(55)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(56)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(57)`
- `.powered-by`
