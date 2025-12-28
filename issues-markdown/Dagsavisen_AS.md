# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-12-28T00:38:37.788Z
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

- `.large-8.large-abs-8.text_singleline > .singleline`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 9

#### Affected Elements:

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(12) > h5`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(18) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(21) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(46) > .t28`
- `.tm21.t28`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(51) > .t42.tm21`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52) > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(53) > .t42.tm21`

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
- **Count:** 87

#### Affected Elements:

- `h1`
- `#notice-10127464 > .content > h2`
- `time[datetime="2025-12-27T21:55:20.000Z"]`
- `div[title="15 døde i bussulykke"] > h2`
- `time[datetime="2025-12-27T21:52:01.000Z"]`
- `div[title="Tusenvis uten strøm i Trysil"] > h2`
- `time[datetime="2025-12-27T17:18:08.000Z"]`
- `#notice-10127354 > .content > h2`
- `time[datetime="2025-12-27T16:14:48.000Z"]`
- `div[title="Til sykehus etter vold og ran"] > h2`
- `time[datetime="2025-12-27T17:59:20.000Z"]`
- `div[title="Betydelig skredfare"] > h2`
- `time[datetime="2025-12-27T15:22:34.000Z"]`
- `div[title="Haaland målløs i City-seier"] > h2`
- `time[datetime="2025-12-27T14:43:35.000Z"]`
- `div[title="Gävlebocken har veltet"] > h2`
- `time[datetime="2025-12-27T14:42:32.000Z"]`
- `div[title="Bergensbanen åpen igjen"] > h2`
- `time[datetime="2025-12-27T14:34:17.000Z"]`
- `#notice-10126929 > .content > h2`
- `#notice-10126929 > .content > .meta`
- `div[title="Kraftige eksplosjoner i Kyiv"] > h2`
- `div[title="Kraftige eksplosjoner i Kyiv"] > .meta`
- `#notice-10126875 > .content > h2`
- `#notice-10126875 > .content > .meta`
- `div[title="Fordømmer moskeangrep"] > h2`
- `time[datetime="2025-12-26T20:55:23.000Z"]`
- `.content[title="Gitaristen i The Cure er død"] > h2`
- `time[datetime="2025-12-26T19:35:14.000Z"]`
- `#notice-10126808 > .content > h2`
- `time[datetime="2025-12-26T19:34:24.000Z"]`
- `#notice-10126761 > .content > h2`
- `time[datetime="2025-12-26T16:56:07.000Z"]`
- `#notice-10126657 > .content > h2`
- `time[datetime="2025-12-26T14:59:17.000Z"]`
- `#notice-10126372 > .content > h2`
- `#notice-10126372 > .content > .meta`
- `#notice-10126294 > .content > h2`
- `#notice-10126294 > .content > .meta`
- `div[title="Sønn siktet for drapsforsøk"] > h2`
- `div[title="Sønn siktet for drapsforsøk"] > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(12)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.row.large-12.small-12:nth-child(16)`
- `.row.large-12.small-12:nth-child(17)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(21)`
- `.row.large-12.small-12:nth-child(23)`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.tm26.t40.font-weight-bold`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(31)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(42)`
- `.row.large-12.small-12:nth-child(43)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(44)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(46)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(47)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(48)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(51)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(53)`
- `.powered-by`
