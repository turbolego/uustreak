# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-11-29T00:35:38.172Z
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
- **Count:** 7

#### Affected Elements:

- `.border_width_12.border_width_mobile_12.has-row-header:nth-child(9) > .tm36`
- `.border_width_12.border_width_mobile_12.has-row-header:nth-child(18) > .tm36`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(21) > .tm36`
- `.tm36.color_mobile_no_bg_color`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(42) > .tm21.t42`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(44) > .tm21.t42`

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
- **Count:** 83

#### Affected Elements:

- `h1`
- `#notice-10083260 > .content > h2`
- `time[datetime="2025-11-28T21:04:20.000Z"]`
- `div[title="Mann døde i utforkjøring"] > h2`
- `time[datetime="2025-11-28T19:38:56.000Z"]`
- `div[title="Sigrid vant P3-prisen"] > h2`
- `time[datetime="2025-11-28T20:28:29.000Z"]`
- `div[title="Støre tente lys for"] > h2`
- `time[datetime="2025-11-28T17:15:12.000Z"]`
- `div[title="Sabotasje på Østfoldbanen"] > h2`
- `time[datetime="2025-11-28T17:08:45.000Z"]`
- `div[title="Frankrike stanser migrantbåter"] > h2`
- `time[datetime="2025-11-28T17:06:41.000Z"]`
- `div[title="Mann omkom i ulykke"] > h2`
- `time[datetime="2025-11-28T14:45:50.000Z"]`
- `div[title="Åtte pågrepet etter dødsbrann"] > h2`
- `time[datetime="2025-11-28T13:34:57.000Z"]`
- `div[title="Egg tilbakekalles"] > h2`
- `time[datetime="2025-11-28T13:23:25.000Z"]`
- `div[title="Vaskemaskin for mennesker"] > h2`
- `time[datetime="2025-11-28T12:34:34.000Z"]`
- `div[title="Fire siktet for drapsforbund"] > h2`
- `time[datetime="2025-11-28T13:25:52.000Z"]`
- `#notice-10082062 > .content > h2`
- `time[datetime="2025-11-28T10:20:57.000Z"]`
- `div[title="Greenpeace-sjefen går av"] > h2`
- `time[datetime="2025-11-28T13:21:52.000Z"]`
- `div[title="Bussjåfør sovnet på E6"] > h2`
- `time[datetime="2025-11-28T09:20:10.000Z"]`
- `div[title="Putin skal til India "] > h2`
- `time[datetime="2025-11-28T09:18:11.000Z"]`
- `#notice-10081474 > .content > h2`
- `time[datetime="2025-11-28T08:05:57.000Z"]`
- `div[title="Kjørte på kvinne med barnevogn"] > h2`
- `time[datetime="2025-11-28T09:19:10.000Z"]`
- `div[title="Soldat død etter skyting"] > h2`
- `time[datetime="2025-11-28T06:17:00.000Z"]`
- `div[title="Trump varsler landoperasjoner"] > h2`
- `time[datetime="2025-11-28T06:10:54.000Z"]`
- `div[title="Orban møtte Putin"] > h2`
- `time[datetime="2025-11-28T13:39:09.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `#offer_03ddbf85405e7fd453b7-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(6)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.border_width_12.border_width_mobile_12.has-row-header:nth-child(9)`
- `.color_mobile_bg-primary`
- `.row.large-12.small-12:nth-child(12)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary:nth-child(13)`
- `.articlescroller-header`
- `.articles`
- `.row.large-12.small-12:nth-child(16)`
- `.row.large-12.small-12:nth-child(17)`
- `.border_width_12.border_width_mobile_12.has-row-header:nth-child(18)`
- `article[data-instance="10081421"]`
- `.t45.tm32.headline`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(21)`
- `.row.large-12.small-12:nth-child(22)`
- `.row.large-12.small-12:nth-child(23)`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(28)`
- `.tm26.t40.font-weight-bold`
- `li[data-section="sport"][data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"] > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(31)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary:nth-child(34)`
- `.mobile_no_border_side.border_width_12.border_width_mobile_12`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(41)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(42)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(44)`
- `.powered-by`
