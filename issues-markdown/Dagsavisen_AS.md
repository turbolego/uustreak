# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-12-30T00:39:27.048Z
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

- `.large-8.large-abs-8.text_singleline > .singleline`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 9

#### Affected Elements:

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > .t40`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > .t40`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22) > .t40`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(41) > .t28`
- `.t28.tm21`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > .t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(46) > .t42.tm21`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(47) > .t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(48) > .t42.tm21`

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
- **Count:** 83

#### Affected Elements:

- `h1`
- `div[title="Døde i trafikkulykke i Troms"] > h2`
- `div[title="Døde i trafikkulykke i Troms"] > .meta`
- `div[title="Bekrefter at Sinwar er drept"] > h2`
- `div[title="Bekrefter at Sinwar er drept"] > .meta`
- `#notice-10129081 > .content > h2`
- `#notice-10129081 > .content > .meta`
- `div[title="Fengslet etter skyting i Oslo"] > h2`
- `div[title="Fengslet etter skyting i Oslo"] > .meta`
- `div[title="Norske Hauk i Tom Ford-film"] > h2`
- `time[datetime="2025-12-29T12:34:41.000Z"]`
- `#notice-10128774 > .content > h2`
- `time[datetime="2025-12-29T12:33:49.000Z"]`
- `div[title="Regn og kulde truer i Gaza"] > h2`
- `time[datetime="2025-12-29T10:05:40.000Z"]`
- `div[title="Mest sette kinofilm i 2025"] > h2`
- `time[datetime="2025-12-29T09:59:43.000Z"]`
- `#notice-10128268 > .content > h2`
- `time[datetime="2025-12-29T09:16:02.000Z"]`
- `div[title="Skjøt fyrverkeri mot biler"] > h2`
- `time[datetime="2025-12-29T08:50:04.000Z"]`
- `div[title="Trump lover penger til FN"] > h2`
- `time[datetime="2025-12-29T08:39:00.000Z"]`
- `div[title="Trump møter Netanyahu"] > h2`
- `time[datetime="2025-12-29T07:26:28.000Z"]`
- `div[title="Ukraina-allierte skal møtes"] > h2`
- `time[datetime="2025-12-29T06:19:57.000Z"]`
- `div[title="Uvær skaper trøbbel i nord"] > h2`
- `time[datetime="2025-12-29T10:04:28.000Z"]`
- `div[title="Mange flere henrettet i Iran"] > h2`
- `time[datetime="2025-12-29T06:14:54.000Z"]`
- `div[title="Pårørende krever gransking"] > h2`
- `time[datetime="2025-12-29T06:13:41.000Z"]`
- `div[title="Flere studenter utestenges"] > h2`
- `time[datetime="2025-12-29T06:12:53.000Z"]`
- `div[title="Nord-Korea testet missiler"] > h2`
- `time[datetime="2025-12-29T06:08:36.000Z"]`
- `div[title="Omkom i trafikkulykke"] > h2`
- `time[datetime="2025-12-29T06:07:27.000Z"]`
- `div[title="Trump har snakket med Putin"] > h2`
- `div[title="Trump har snakket med Putin"] > .meta`
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
- `.row.large-12.small-12:nth-child(21)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22)`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.t40.tm26.font-weight-bold`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(39)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(41)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(42)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(43)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(46)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(47)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(48)`
- `.powered-by`
