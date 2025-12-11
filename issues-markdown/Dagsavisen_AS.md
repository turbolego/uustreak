# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-12-11T01:00:38.170Z
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

- `.text_singleline.large-3.large-abs-3:nth-child(3) > .font-PTSans.singleline.t14 > a:nth-child(9)`

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

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > h5`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > h5`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(22) > h5`
- `.t28.tm21`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(38) > .t42.tm21`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
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

- `article[data-instance="9901219"] > .content > a[itemprop="url"][rel=""]`
- `.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 77

#### Affected Elements:

- `h1`
- `#notice-10104484 > .content > h2`
- `#notice-10104484 > .content > .meta`
- `div[title="USAs sentralbank kutter renta"] > h2`
- `div[title="USAs sentralbank kutter renta"] > .meta`
- `#notice-10104337 > .content > h2`
- `#notice-10104337 > .content > .meta`
- `#notice-10104230 > .content > h2`
- `#notice-10104230 > .content > .meta`
- `div[title="Tilbakekaller melkeerstatning"] > h2`
- `time[datetime="2025-12-10T11:48:29.000Z"]`
- `div[title="Ny jobb for Borten Moe"] > h2`
- `time[datetime="2025-12-10T10:17:16.000Z"]`
- `div[title="Anker gruvedumping-sak"] > h2`
- `time[datetime="2025-12-10T10:16:18.000Z"]`
- `div[title="Far dømt for overgrep"] > h2`
- `time[datetime="2025-12-10T10:15:29.000Z"]`
- `div[title="Ny drapsforbund-pågripelse"] > h2`
- `time[datetime="2025-12-10T10:21:20.000Z"]`
- `div[title="Vil byttehandle med Ukraina"] > h2`
- `time[datetime="2025-12-10T09:19:03.000Z"]`
- `div[title="Trump vil ha nordmenn"] > h2`
- `time[datetime="2025-12-10T08:48:44.000Z"]`
- `div[title="Ny havvind-satsing"] > h2`
- `time[datetime="2025-12-10T08:46:06.000Z"]`
- `div[title="Vil endre MC-regler"] > h2`
- `time[datetime="2025-12-10T09:21:33.000Z"]`
- `div[title="«Troll 2» på Netflix-toppen"] > h2`
- `time[datetime="2025-12-10T08:02:22.000Z"]`
- `div[title="Opptrapping av kamper"] > h2`
- `time[datetime="2025-12-10T10:46:45.000Z"]`
- `div[title="Tror Stoltenberg fikk sjokk"] > h2`
- `time[datetime="2025-12-10T06:15:54.000Z"]`
- `div[title="Miami stemte for demokrat"] > h2`
- `time[datetime="2025-12-10T06:14:46.000Z"]`
- `div[title="Tusener på flukt i Kongo"] > h2`
- `time[datetime="2025-12-10T06:13:46.000Z"]`
- `div[title="Gir milliarder til veldedighet"] > h2`
- `time[datetime="2025-12-10T06:11:58.000Z"]`
- `div[title="EU enig om klimamål"] > h2`
- `time[datetime="2025-12-10T06:10:12.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(6)`
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
- `.row.large-12.small-12:nth-child(21)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(22)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(24)`
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
- `.row.large-12.small-12:nth-child(33)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(34)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(36)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(38)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(41)`
- `.powered-by`
