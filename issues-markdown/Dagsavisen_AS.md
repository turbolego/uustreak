# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-01-03T00:37:43.584Z
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

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > .tm36`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > .tm36`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22) > .tm36`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(34) > .t28`
- `.t28.tm21`
- `.tm36.color_mobile_no_bg_color`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(38) > .t42.tm21`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(39) > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(41) > .t42.tm21`

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
- **Count:** 77

#### Affected Elements:

- `h1`
- `#notice-10132841 > .content > h2`
- `#notice-10132841 > .content > .meta`
- `div[title="Kontroll på flammene i Sandnes"] > h2`
- `div[title="Kontroll på flammene i Sandnes"] > .meta`
- `#notice-10132734 > .content > h2`
- `#notice-10132734 > .content > .meta`
- `div[title="Jordskjelv ryster Mexico"] > h2`
- `div[title="Jordskjelv ryster Mexico"] > .meta`
- `div[title="Blir Zelenskyjs nye stabssjef"] > h2`
- `time[datetime="2026-01-02T13:29:55.000Z"]`
- `div[title="Forbruksgjelden økte"] > h2`
- `time[datetime="2026-01-02T10:45:10.000Z"]`
- `div[title="Obos-prisene falt"] > h2`
- `time[datetime="2026-01-02T10:32:19.000Z"]`
- `div[title="– Grønland kan ikke annekteres"] > h2`
- `time[datetime="2026-01-02T10:26:16.000Z"]`
- `div[title="Godt år for førstegangskjøpere"] > h2`
- `time[datetime="2026-01-02T10:25:28.000Z"]`
- `div[title="Flyskole legges ned"] > h2`
- `time[datetime="2026-01-02T10:03:24.000Z"]`
- `#notice-10131885 > .content > h2`
- `time[datetime="2026-01-02T09:29:08.000Z"]`
- `#notice-10131753 > .content > h2`
- `time[datetime="2026-01-02T08:37:40.000Z"]`
- `div[title="Rekordår for nybilsalget"] > h2`
- `time[datetime="2026-01-02T10:24:07.000Z"]`
- `div[title="Togtrøbbel"] > h2`
- `time[datetime="2026-01-02T07:38:42.000Z"]`
- `#notice-10131627 > .content > h2`
- `time[datetime="2026-01-02T07:38:20.000Z"]`
- `div[title="Vil endre sikkerhetsrådet"] > h2`
- `time[datetime="2026-01-02T07:35:23.000Z"]`
- `div[title="En mann død – tre siktet"] > h2`
- `time[datetime="2026-01-02T12:56:00.000Z"]`
- `div[title="Kina: Avgift på prevensjon"] > h2`
- `time[datetime="2026-01-02T06:19:11.000Z"]`
- `div[title="Kyiv: Dødsfall iscenesatt"] > h2`
- `time[datetime="2026-01-02T06:18:28.000Z"]`
- `div[title="61 foreslått som ny biskop"] > h2`
- `time[datetime="2026-01-02T06:15:18.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(12)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.bg-primary`
- `.row.large-12.small-12:nth-child(18)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19)`
- `.row.large-12.small-12:nth-child(21)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22)`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(29)`
- `.tm26.t40.font-weight-bold`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-section="sport"][data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"] > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(34)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(36)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(38)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(39)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(41)`
- `.powered-by`
