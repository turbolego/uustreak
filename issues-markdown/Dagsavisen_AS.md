# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-01-20T00:38:51.311Z
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
- **Count:** 2

#### Affected Elements:

- `.border_width_0 > h5`
- `.text_singleline.large-8.large-abs-8 > .singleline`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 13

#### Affected Elements:

- `.border_width_0 > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(3) > .t24`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > .tm36.t40`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(17) > .t35`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > .tm36.t40`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22) > .tm36.t40`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(28) > .t30`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > .t40`
- `.tm15`
- `.t28.tm21.align-left`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > .tm36.t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(46) > .t42.tm21`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(47) > .t42.tm21`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.mainMenu`
- `#markup_10151715 > .fullwidthTarget.content > unite-player,mux-player[metadata-video-title="Hva vil Trump med Venezuela?"],media-theme,media-controller`

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
- **Count:** 83

#### Affected Elements:

- `h1`
- `#notice-10158158 > .content > h2`
- `#notice-10158158 > .content > .meta`
- `#notice-10158146 > .content > h2`
- `#notice-10158146 > .content > .meta`
- `#notice-10158095 > .content > h2`
- `#notice-10158095 > .content > .meta`
- `div[title="Bulgarias president går av"] > h2`
- `div[title="Bulgarias president går av"] > .meta`
- `div[title="Moteskaperen Valentino er død"] > h2`
- `div[title="Moteskaperen Valentino er død"] > .meta`
- `#notice-10158070 > .content > h2`
- `#notice-10158070 > .content > .meta`
- `#notice-10157983 > .content > h2`
- `#notice-10157983 > .content > .meta`
- `div[title="Voldshendelse på Grünerløkka "] > h2`
- `div[title="Voldshendelse på Grünerløkka "] > .meta`
- `div[title="Tre dagers landesorg i Spania"] > h2`
- `div[title="Tre dagers landesorg i Spania"] > .meta`
- `div[title="Lakseloin tilbakekalles"] > h2`
- `time[datetime="2026-01-19T13:25:43.000Z"]`
- `div[title="Høiby tiltalt for nye lovbrudd"] > h2`
- `time[datetime="2026-01-19T13:19:29.000Z"]`
- `div[title="EU holder krisemøte"] > h2`
- `time[datetime="2026-01-19T11:56:28.000Z"]`
- `div[title="Danmark sender soldater"] > h2`
- `time[datetime="2026-01-19T11:45:59.000Z"]`
- `#notice-10156553 > .content > h2`
- `time[datetime="2026-01-19T10:10:57.000Z"]`
- `div[title="De rike blir bare rikere"] > h2`
- `time[datetime="2026-01-19T08:48:02.000Z"]`
- `div[title="Soldater hjem fra Grønland"] > h2`
- `time[datetime="2026-01-19T08:47:32.000Z"]`
- `div[title="Oslo Børs faller"] > h2`
- `time[datetime="2026-01-19T08:46:23.000Z"]`
- `div[title="Ny Grønland-melding"] > h2`
- `time[datetime="2026-01-19T08:41:30.000Z"]`
- `div[title="Aldri produsert mer strøm"] > h2`
- `time[datetime="2026-01-19T08:30:18.000Z"]`
- `div[title="21 døde i kjøpesenter-brann"] > h2`
- `time[datetime="2026-01-19T12:54:34.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(3)`
- `.row.large-12.small-12:nth-child(6)`
- `.bg-primary.color_mobile_bg-primary.hasContentPadding:nth-child(7)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(17) > .t35`
- `article[data-instance="10151714"] > .content > .media > .floatingText`
- `.row.large-12.small-12:nth-child(18)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19)`
- `.row.large-12.small-12:nth-child(21)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22)`
- `.bg-primary.color_mobile_bg-primary.hasContentPadding:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.border_width_5.border_width_mobile_5.border-bg-quaternary`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(28)`
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
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(41)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(42)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(43)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(46)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(47)`
- `.powered-by`
