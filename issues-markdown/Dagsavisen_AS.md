# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-12-01T01:36:06.031Z
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

- `a:nth-child(8)`

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
- **Count:** 8

#### Affected Elements:

- `.has-row-header.row.large-12:nth-child(12) > .t30`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > .tm36`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(22) > .tm36`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(33) > .tm36`
- `.mobile_no_border_side.border_width_12.border_width_mobile_12 > .tm36`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(38) > .t42.tm21`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(41) > .t42.tm21`

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
- **Count:** 79

#### Affected Elements:

- `h1`
- `div[title="USA har angrepet mål i Syria"] > h2`
- `time[datetime="2025-11-30T20:48:44.000Z"]`
- `#notice-10084590 > .content > h2`
- `time[datetime="2025-11-30T20:48:03.000Z"]`
- `#notice-10084513 > .content > h2`
- `time[datetime="2025-11-30T18:59:48.000Z"]`
- `div[title="– Svikter fellesskolen"] > h2`
- `time[datetime="2025-11-30T17:07:17.000Z"]`
- `div[title="MDG: Må skje endringer"] > h2`
- `time[datetime="2025-11-30T17:06:14.000Z"]`
- `div[title="Tror strømprisen vil øke"] > h2`
- `time[datetime="2025-11-30T17:04:56.000Z"]`
- `div[title="Sveits: Nei til riking-skatt"] > h2`
- `time[datetime="2025-11-30T13:29:34.000Z"]`
- `div[title="Gardermobanen åpnet"] > h2`
- `time[datetime="2025-11-30T13:05:42.000Z"]`
- `div[title="Barn døde etter tre legebesøk"] > h2`
- `time[datetime="2025-11-30T11:10:11.000Z"]`
- `div[title="Hongkong-brannen: 146 døde"] > h2`
- `time[datetime="2025-11-30T11:08:57.000Z"]`
- `div[title="Siktet for voldtekt"] > h2`
- `time[datetime="2025-11-30T11:06:29.000Z"]`
- `#notice-10083993 > .content > h2`
- `time[datetime="2025-11-30T11:05:13.000Z"]`
- `div[title="1000 døde etter flommer"] > h2`
- `time[datetime="2025-11-30T17:03:47.000Z"]`
- `div[title="– Et bla-bla-bla-budsjett"] > h2`
- `time[datetime="2025-11-30T10:51:27.000Z"]`
- `div[title="Amundsen vant i Ruka"] > h2`
- `time[datetime="2025-11-30T09:55:14.000Z"]`
- `#notice-10083872 > .content > h2`
- `time[datetime="2025-11-30T08:15:14.000Z"]`
- `#notice-10083837 > .content > h2`
- `time[datetime="2025-11-30T07:27:43.000Z"]`
- `div[title="Norge knuste Kasakhstan"] > h2`
- `time[datetime="2025-11-29T21:08:22.000Z"]`
- `div[title="Listhaug: – Totalt kaos"] > h2`
- `time[datetime="2025-11-29T19:51:38.000Z"]`
- `div[title="Satte fyr på banen"] > h2`
- `time[datetime="2025-11-29T18:53:35.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `#offer_03ddbf85405e7fd453b7-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.has-row-header.row.large-12:nth-child(12)`
- `.row.large-12.small-12:nth-child(13)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.row.large-12.small-12:nth-child(17)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(18)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19)`
- `.row.large-12.small-12:nth-child(21)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(22)`
- `.row.large-12.small-12:nth-child(23)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(29)`
- `.tm26.t40.font-weight-bold`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-section="sport"][data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"] > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(32)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(33)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(34)`
- `.mobile_no_border_side.border_width_12.border_width_mobile_12`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(37)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(38)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(41)`
- `.powered-by`
