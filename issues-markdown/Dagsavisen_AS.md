# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-01-10T00:39:33.089Z
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

- `a[href="mailto:dag.hoie@dagsavisen.no"]`

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

- `.border_width_12.border_width_mobile_12.bg-tertiary:nth-child(13) > h5`
- `.border_width_12.border_width_mobile_12.bg-tertiary:nth-child(19) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(46) > .t28`
- `.tm21.t28`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(49) > .t42.tm21`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(52) > .t42.tm21`

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

- `a[href$="mailto:kb@dagsavisen.no"]`
- `.tm17.font-PTSans.singleline > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 86

#### Affected Elements:

- `h1`
- `div[title="Wiklund vant EM-gull"] > h2`
- `time[datetime="2026-01-09T20:27:21.000Z"]`
- `div[title="Ebadi frykter massakre i Iran"] > h2`
- `time[datetime="2026-01-09T19:56:25.000Z"]`
- `div[title="Solskjær møter United lørdag"] > h2`
- `time[datetime="2026-01-09T19:47:58.000Z"]`
- `#notice-10143110 > .content > h2`
- `time[datetime="2026-01-09T18:51:46.000Z"]`
- `div[title="Meta satser på atomkraft"] > h2`
- `time[datetime="2026-01-09T18:08:26.000Z"]`
- `div[title="Advarer mot sprengfyring"] > h2`
- `time[datetime="2026-01-09T17:21:02.000Z"]`
- `#notice-10143062 > .content > h2`
- `time[datetime="2026-01-09T17:19:51.000Z"]`
- `div[title="Bedriftseiere dømt"] > h2`
- `time[datetime="2026-01-09T17:12:30.000Z"]`
- `div[title="Klar nett-beskjed til skolene"] > h2`
- `time[datetime="2026-01-09T17:00:54.000Z"]`
- `div[title="Pågripelse etter Sveits-brann"] > h2`
- `time[datetime="2026-01-09T15:34:23.000Z"]`
- `div[title="400.000 så nye «Debatten»"] > h2`
- `time[datetime="2026-01-09T14:45:43.000Z"]`
- `div[title="USA beslaglegger nytt tankskip"] > h2`
- `time[datetime="2026-01-09T14:34:12.000Z"]`
- `#notice-10142433 > .content > h2`
- `time[datetime="2026-01-09T12:33:20.000Z"]`
- `div[title="Svensk politiker narkotatt"] > h2`
- `time[datetime="2026-01-09T11:52:15.000Z"]`
- `#notice-10142119 > .content > h2`
- `time[datetime="2026-01-09T11:00:01.000Z"]`
- `#notice-10142096 > .content > h2`
- `time[datetime="2026-01-09T10:48:40.000Z"]`
- `div[title="Frp snur om Melkøya"] > h2`
- `time[datetime="2026-01-09T11:23:11.000Z"]`
- `#notice-10142094 > .content > h2`
- `time[datetime="2026-01-09T10:47:08.000Z"]`
- `div[title="Nordmann pågrepet i Kenya"] > h2`
- `time[datetime="2026-01-09T10:36:50.000Z"]`
- `#notice-10141959 > .content > h2`
- `time[datetime="2026-01-09T10:04:34.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(6)`
- `.bg-primary`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.border_width_12.border_width_mobile_12.bg-tertiary:nth-child(13)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(17)`
- `.row.large-12.small-12:nth-child(18)`
- `.border_width_12.border_width_mobile_12.bg-tertiary:nth-child(19)`
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
- `.color_mobile_no_bg_color.row.large-12:nth-child(41)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(42)`
- `.row.large-12.small-12:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(46)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(47)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(49)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(52)`
- `.powered-by`
