# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-12-09T00:35:51.770Z
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

- `.font-PTSans.singleline.secondary > a:nth-child(9)`

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
- **Count:** 8

#### Affected Elements:

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > .tm36`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > .tm36`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(22) > .tm36`
- `.t28.tm21`
- `.color_mobile_no_bg_color.tm36`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(37) > .t42.tm21`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(39) > .t42.tm21`

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
- **Count:** 2

#### Affected Elements:

- `article[data-instance="9901219"] > .content > a[itemprop="url"][rel=""]`
- `.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 76

#### Affected Elements:

- `h1`
- `div[title="DNBs problemer er løst"] > h2`
- `div[title="DNBs problemer er løst"] > .meta`
- `#notice-10099378 > .content > h2`
- `#notice-10099378 > .content > .meta`
- `div[title="Oslo vant rettssak om anbud"] > h2`
- `time[datetime="2025-12-08T13:17:15.000Z"]`
- `div[title="Bare én NC-avhopper fikk asyl"] > h2`
- `time[datetime="2025-12-08T12:38:11.000Z"]`
- `div[title="114 døde i barnehage-angrep"] > h2`
- `time[datetime="2025-12-08T12:23:42.000Z"]`
- `div[title="Nesbø valgte Årets Ålreite"] > h2`
- `time[datetime="2025-12-08T11:45:12.000Z"]`
- `div[title="Mann døde i arbeidsulykke"] > h2`
- `time[datetime="2025-12-08T11:24:03.000Z"]`
- `div[title="Nye klare for Tons of Rock"] > h2`
- `time[datetime="2025-12-08T11:21:50.000Z"]`
- `div[title="EU-ja til asyl-lov"] > h2`
- `time[datetime="2025-12-08T12:46:41.000Z"]`
- `div[title="EU-presidenten ut mot USA"] > h2`
- `time[datetime="2025-12-08T09:35:39.000Z"]`
- `div[title="Taxi-aksjon på Sola"] > h2`
- `time[datetime="2025-12-08T09:35:07.000Z"]`
- `div[title="Brasil vil møte Norge"] > h2`
- `time[datetime="2025-12-08T08:33:39.000Z"]`
- `#notice-10097887 > .content > h2`
- `time[datetime="2025-12-08T12:45:13.000Z"]`
- `#notice-10097884 > .content > h2`
- `time[datetime="2025-12-08T08:29:16.000Z"]`
- `div[title="Norge mister Nato-oppdrag"] > h2`
- `time[datetime="2025-12-08T07:42:44.000Z"]`
- `div[title="Florida boikotter Norge"] > h2`
- `time[datetime="2025-12-08T07:42:12.000Z"]`
- `#notice-10097790 > .content > h2`
- `time[datetime="2025-12-08T06:59:42.000Z"]`
- `div[title="Thailandske luftangrep"] > h2`
- `time[datetime="2025-12-08T11:46:58.000Z"]`
- `div[title="Tatt av bølger på Tenerife"] > h2`
- `time[datetime="2025-12-08T11:16:49.000Z"]`
- `#notice-10097779 > .content > h2`
- `time[datetime="2025-12-08T06:48:13.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(12)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.row.large-12.small-12:nth-child(17)`
- `.row.large-12.small-12:nth-child(18)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19)`
- `.bg-primary`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(22)`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(29)`
- `.tm26.t40.font-weight-bold`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(32)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(33)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(34)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(37)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(39)`
- `.powered-by`
