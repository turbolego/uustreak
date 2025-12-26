# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-12-26T00:35:24.860Z
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

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > .t40.tm36`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > .t40.tm36`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(22) > .t40.tm36`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(42) > .t28`
- `.tm21.t28`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > .t40.tm36`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(47) > .t42.tm21`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > .t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(49) > .t42.tm21`

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
- **Count:** 84

#### Affected Elements:

- `h1`
- `div[title="Vold mot 14-åring i Skien"] > h2`
- `time[datetime="2025-12-25T22:45:41.000Z"]`
- `#notice-10126067 > .content > h2`
- `time[datetime="2025-12-25T22:14:40.000Z"]`
- `#notice-10126033 > .content > h2`
- `time[datetime="2025-12-25T19:44:57.000Z"]`
- `div[title="John Robertson er død"] > h2`
- `time[datetime="2025-12-25T15:32:57.000Z"]`
- `div[title="Ukraina angrep oljeraffineri"] > h2`
- `time[datetime="2025-12-25T14:39:54.000Z"]`
- `div[title="Historisk valg i Somalia"] > h2`
- `div[title="Historisk valg i Somalia"] > .meta`
- `div[title="Leteaksjon i Lyngdal utvides"] > h2`
- `div[title="Leteaksjon i Lyngdal utvides"] > .meta`
- `div[title="IS-topp pågrepet i Syria"] > h2`
- `div[title="IS-topp pågrepet i Syria"] > .meta`
- `div[title="Karl XIIs feltbok funnet"] > h2`
- `div[title="Karl XIIs feltbok funnet"] > .meta`
- `div[title="Tolv døde i migrantbåtforlis"] > h2`
- `div[title="Tolv døde i migrantbåtforlis"] > .meta`
- `div[title="Rødt farevarsel om snøskred"] > h2`
- `time[datetime="2025-12-24T19:40:34.000Z"]`
- `#notice-10125575 > .content > h2`
- `time[datetime="2025-12-24T20:19:14.000Z"]`
- `div[title="Golflegenden «Jumbo» er død"] > h2`
- `time[datetime="2025-12-24T18:08:38.000Z"]`
- `div[title="Leteaksjon i Lyngdal"] > h2`
- `time[datetime="2025-12-24T17:44:38.000Z"]`
- `div[title="300 måtte evakuere kirke"] > h2`
- `time[datetime="2025-12-24T16:54:41.000Z"]`
- `div[title="Lokfører slått ned på julaften"] > h2`
- `time[datetime="2025-12-24T16:14:52.000Z"]`
- `#notice-10125510 > .content > h2`
- `time[datetime="2025-12-24T15:46:14.000Z"]`
- `div[title="Netanyahu varsler våpensatsing"] > h2`
- `time[datetime="2025-12-24T13:53:32.000Z"]`
- `#notice-10125454 > .content > h2`
- `time[datetime="2025-12-24T13:27:17.000Z"]`
- `#notice-10125422 > .content > h2`
- `#notice-10125422 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.row.large-12.small-12:nth-child(17)`
- `.row.large-12.small-12:nth-child(18)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(21)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(22)`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.t40.tm26.hasTextPadding`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(41)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(42)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(43)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(44)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(47)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(49)`
- `.powered-by`
