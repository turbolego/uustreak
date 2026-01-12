# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-01-12T14:35:11.931Z
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
- **Count:** 10

#### Affected Elements:

- `.bg-primary.color_mobile_bg-primary.has-row-header > h5`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > .t40.tm36`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(21) > .t40.tm36`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22) > .t40.tm36`
- `.tm15`
- `.t28.tm21`
- `.t40.tm36.color_mobile_no_bg_color`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(39) > .t42.tm21`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > .t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(42) > .t42.tm21`

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
- **Count:** 78

#### Affected Elements:

- `h1`
- `div[title="Fant ti tonn kokain på skip"] > h2`
- `time[datetime="2026-01-12T14:26:25.000Z"]`
- `div[title="Enova-sjefen går av"] > h2`
- `div[title="Enova-sjefen går av"] > .meta`
- `div[title="Se og Hør-redaktøren går av "] > h2`
- `div[title="Se og Hør-redaktøren går av "] > .meta`
- `div[title="Kina slår tilbake mot Trump"] > h2`
- `div[title="Kina slår tilbake mot Trump"] > .meta`
- `#notice-10144057 > .content > h2`
- `#notice-10144057 > .content > .meta`
- `div[title="Nytt nattlig angrep mot Kyiv"] > h2`
- `div[title="Nytt nattlig angrep mot Kyiv"] > .meta`
- `#notice-10143979 > .content > h2`
- `#notice-10143979 > .content > .meta`
- `#notice-10143961 > .content > h2`
- `#notice-10143961 > .content > .meta`
- `#notice-10143944 > .content > h2`
- `#notice-10143944 > .content > .meta`
- `#notice-10143941 > .content > h2`
- `#notice-10143941 > .content > .meta`
- `#notice-10143936 > .content > h2`
- `#notice-10143936 > .content > .meta`
- `div[title="Vindu falt ut fra 14. etasje"] > h2`
- `time[datetime="2026-01-11T17:31:15.000Z"]`
- `div[title="Erich von Däniken er død"] > h2`
- `time[datetime="2026-01-11T17:00:41.000Z"]`
- `div[title="Hagen tangerte rekord"] > h2`
- `time[datetime="2026-01-11T17:00:12.000Z"]`
- `#notice-10143903 > .content > h2`
- `time[datetime="2026-01-11T16:59:28.000Z"]`
- `div[title="Vil ha felleseuropeisk styrke"] > h2`
- `time[datetime="2026-01-11T16:45:41.000Z"]`
- `div[title="Gullbrekk i Tønsberg"] > h2`
- `time[datetime="2026-01-11T16:07:52.000Z"]`
- `div[title="Kongshaug forsvarte EM-gull"] > h2`
- `time[datetime="2026-01-11T13:55:17.000Z"]`
- `div[title="Østfoldbanen i gang igjen"] > h2`
- `time[datetime="2026-01-11T16:24:27.000Z"]`
- `div[title="Rullebane var stengt"] > h2`
- `time[datetime="2026-01-11T13:40:34.000Z"]`
- `.bg-primary.color_mobile_bg-primary.has-row-header`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(7)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(8)`
- `.row.large-12.small-12:nth-child(11)`
- `.bg-primary.color_mobile_bg-primary.hasContentPadding:nth-child(12)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.row.large-12.small-12:nth-child(16)`
- `.articlescroller-header`
- `.articles`
- `.row.large-12.small-12:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(21)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22)`
- `.row.large-12.small-12:nth-child(23)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.tm26.t40.hasTextPadding`
- `li[data-tags="nyheter"] > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(36)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(37)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(39)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(42)`
- `.powered-by`
