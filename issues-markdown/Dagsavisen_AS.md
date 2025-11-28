# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-11-28T00:36:00.747Z
**URL:** [https://www.dagsavisen.no/#](https://www.dagsavisen.no/#)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `a[href="mailto:dag.hoie@dagsavisen.no"]`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.text_singleline.large-4.large-abs-4:nth-child(3) > .singleline`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- `#offer_03ddbf85405e7fd453b7-0`
- `#offer_03ddbf85405e7fd453b7-0, iframe`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 6

#### Affected Elements:

- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary > .t23`
- `.t40.tm34`
- `.t42.tm32`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(41) > .tm21.t42`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(42) > .t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(43) > .tm21.t42`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `#offer_03ddbf85405e7fd453b7-0, img`

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
- **Count:** 3

#### Affected Elements:

- `#offer_03ddbf85405e7fd453b7-0, a`
- `article[data-instance="9901219"] > .content > a[itemprop="url"][rel=""]`
- `a[data-lab-text_color_desktop=""]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 84

#### Affected Elements:

- `h1`
- `div[title="Solvangs svanesang"] > h2`
- `time[datetime="2025-11-27T21:02:31.000Z"]`
- `div[title="Israel starter gransking"] > h2`
- `time[datetime="2025-11-27T19:45:50.000Z"]`
- `div[title="Økt lønn til Helse nord-sjef"] > h2`
- `time[datetime="2025-11-27T20:33:16.000Z"]`
- `div[title="Trump vil gjennomgå asylsaker"] > h2`
- `time[datetime="2025-11-27T19:06:57.000Z"]`
- `div[title="Flertall positive til merking"] > h2`
- `time[datetime="2025-11-27T18:06:19.000Z"]`
- `div[title="Bergensbanen åpnet"] > h2`
- `time[datetime="2025-11-27T21:02:02.000Z"]`
- `div[title="Tromsø kan få romsenter"] > h2`
- `time[datetime="2025-11-27T17:08:25.000Z"]`
- `div[title="Bomsjokk for lastebiler"] > h2`
- `time[datetime="2025-11-27T15:15:40.000Z"]`
- `div[title="Norsk luftvern til Danmark"] > h2`
- `time[datetime="2025-11-27T17:11:17.000Z"]`
- `div[title="Dømt for drap på tenåring"] > h2`
- `time[datetime="2025-11-27T13:52:32.000Z"]`
- `div[title="Henlegger politiskyting"] > h2`
- `time[datetime="2025-11-27T11:29:49.000Z"]`
- `div[title="Fare for flom i vest"] > h2`
- `time[datetime="2025-11-27T11:10:16.000Z"]`
- `div[title="Influenser nekter å betale "] > h2`
- `time[datetime="2025-11-27T11:09:31.000Z"]`
- `div[title="Dømt for plan om ESC-terror"] > h2`
- `time[datetime="2025-11-27T09:24:42.000Z"]`
- `div[title="31 døde i skred og flom"] > h2`
- `time[datetime="2025-11-27T09:05:22.000Z"]`
- `div[title="Tog sto fast i tunnel"] > h2`
- `time[datetime="2025-11-27T10:21:17.000Z"]`
- `div[title="Vanskelige kjøreforhold "] > h2`
- `time[datetime="2025-11-27T08:09:39.000Z"]`
- `div[title="Sykefraværet faller fortsatt"] > h2`
- `time[datetime="2025-11-27T08:08:39.000Z"]`
- `div[title="Færre ønsker Norge inn i EU"] > h2`
- `time[datetime="2025-11-27T06:14:02.000Z"]`
- `div[title="Elleve døde i togulykke"] > h2`
- `time[datetime="2025-11-27T06:10:41.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `#offer_03ddbf85405e7fd453b7-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `article[data-instance="10081007"]`
- `article[data-instance="10072249"]`
- `.content > .t26.below.kicker`
- `.tm49`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(12)`
- `.row.large-12.small-12:nth-child(13)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary:nth-child(14)`
- `.row.large-12.small-12:nth-child(16)`
- `.articlescroller-header`
- `.articles`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary`
- `.border_width_10`
- `.row.large-12.small-12:nth-child(21)`
- `.row.large-12.small-12:nth-child(22)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary:nth-child(23)`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(29)`
- `.tm26.t40.font-weight-bold`
- `li[data-section="sport"][data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"] > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.border-side-top.mobile_border-side-top.has-row-header:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.border-side-top.mobile_border-side-top.has-row-header:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(38)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(39)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(41)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(42)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(43)`
- `.powered-by`
