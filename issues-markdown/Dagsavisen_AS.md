# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-12-31T00:36:47.899Z
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

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(12) > .t40.tm36`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(18) > .t40.tm36`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(21) > .t40.tm36`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(43) > .t28`
- `.t28.tm21`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > .t40.tm36`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(47) > .tm21.t42`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(48) > .t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(49) > .tm21.t42`

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
- `#notice-10130393 > .content > h2`
- `#notice-10130393 > .content > .meta`
- `div[title="Krasjet nesten med politiet"] > h2`
- `div[title="Krasjet nesten med politiet"] > .meta`
- `div[title="Møte om Ukraina – Støre deltok"] > h2`
- `div[title="Møte om Ukraina – Støre deltok"] > .meta`
- `div[title="Norge øker støtten til Sudan"] > h2`
- `time[datetime="2025-12-30T12:59:24.000Z"]`
- `#notice-10129993 > .content > h2`
- `time[datetime="2025-12-30T12:58:28.000Z"]`
- `div[title="CIA-angrep i Venezuela"] > h2`
- `time[datetime="2025-12-30T12:57:18.000Z"]`
- `div[title="Haaland vil ha engelsk pass"] > h2`
- `time[datetime="2025-12-30T11:30:35.000Z"]`
- `div[title="Ukraina evakuerer landsbyer"] > h2`
- `time[datetime="2025-12-30T11:29:21.000Z"]`
- `div[title="Fordømmer Kinas militærøvelse"] > h2`
- `time[datetime="2025-12-30T09:57:55.000Z"]`
- `#notice-10129361 > .content > h2`
- `time[datetime="2025-12-30T07:26:07.000Z"]`
- `div[title="Advarer mot aksje-svindel"] > h2`
- `time[datetime="2025-12-30T06:29:53.000Z"]`
- `div[title="Flere turister til stormuseer"] > h2`
- `time[datetime="2025-12-30T06:28:01.000Z"]`
- `div[title="Skyter opp fyrverkeri i fylla"] > h2`
- `time[datetime="2025-12-30T06:25:33.000Z"]`
- `div[title="Saudi-Arabia bombet havneby"] > h2`
- `time[datetime="2025-12-30T06:24:01.000Z"]`
- `div[title="Zelenskyj: Må ha USA-støtte"] > h2`
- `time[datetime="2025-12-30T06:23:22.000Z"]`
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
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(17)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(21)`
- `.row.large-12.small-12:nth-child(23)`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.tm26.t40.hasTextPadding`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(42)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(43)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(44)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(47)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(48)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(49)`
- `.powered-by`
