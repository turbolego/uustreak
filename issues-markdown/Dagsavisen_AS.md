# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-01-02T00:39:14.189Z
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

- `.large-8.large-abs-8.text_singleline > .singleline`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 9

#### Affected Elements:

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > .t40.tm36`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > .t40.tm36`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22) > .t40.tm36`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(38) > .t28`
- `.t28.tm21`
- `.t40.tm36.color_mobile_no_bg_color`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(42) > .t42.tm21`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > .t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(44) > .t42.tm21`

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
- **Count:** 80

#### Affected Elements:

- `h1`
- `div[title="Sveits: Kong Harald kondolerer"] > h2`
- `div[title="Sveits: Kong Harald kondolerer"] > .meta`
- `div[title="Kypros overtar formannskapet"] > h2`
- `time[datetime="2026-01-01T14:28:52.000Z"]`
- `div[title="Bolsonaro fikk avslag"] > h2`
- `time[datetime="2026-01-01T13:44:02.000Z"]`
- `div[title="To pågrepet etter knivstikking"] > h2`
- `time[datetime="2026-01-01T13:31:05.000Z"]`
- `div[title="Iran henrettet minst 1500"] > h2`
- `time[datetime="2026-01-01T13:24:59.000Z"]`
- `#notice-10131231 > .content > h2`
- `time[datetime="2026-01-01T12:39:03.000Z"]`
- `div[title="Politiet brukte tåregass"] > h2`
- `time[datetime="2026-01-01T11:33:58.000Z"]`
- `div[title="Norge leder nordisk samarbeid"] > h2`
- `time[datetime="2026-01-01T11:06:55.000Z"]`
- `div[title="Nordmenn bryter Tour de Ski"] > h2`
- `time[datetime="2026-01-01T09:03:54.000Z"]`
- `div[title="Henrettet rekordmange"] > h2`
- `time[datetime="2026-01-01T08:35:42.000Z"]`
- `div[title="Ungarn mister milliardstøtte"] > h2`
- `time[datetime="2026-01-01T07:34:18.000Z"]`
- `#notice-10131030 > .content > h2`
- `time[datetime="2026-01-01T07:28:21.000Z"]`
- `div[title="Mamdani tatt i ed"] > h2`
- `time[datetime="2026-01-01T07:26:54.000Z"]`
- `#notice-10131028 > .content > h2`
- `time[datetime="2026-01-01T07:25:16.000Z"]`
- `div[title="Elektrosjokkvåpen mot tenåring"] > h2`
- `time[datetime="2026-01-01T07:22:04.000Z"]`
- `#notice-10131026 > .content > h2`
- `time[datetime="2026-01-01T07:21:11.000Z"]`
- `#notice-10131025 > .content > h2`
- `time[datetime="2026-01-01T07:20:13.000Z"]`
- `div[title="128 journalister drept i 2025"] > h2`
- `time[datetime="2026-01-01T07:19:09.000Z"]`
- `div[title="Selvmordsangrep i Syria"] > h2`
- `div[title="Selvmordsangrep i Syria"] > .meta`
- `div[title="Brann i Oslo blusset opp igjen"] > h2`
- `div[title="Brann i Oslo blusset opp igjen"] > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(6)`
- `.page-content > .bg-primary.color_mobile_bg-primary.hasContentPadding`
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
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.tm26.t40.font-weight-bold`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-section="sport"][data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"] > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(37)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(38)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(39)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(42)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(44)`
- `.powered-by`
