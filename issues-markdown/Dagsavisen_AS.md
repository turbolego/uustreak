# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-01-01T00:40:16.014Z
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

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(12) > .t40`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(18) > .t40`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(21) > .t40`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(44) > .t28`
- `.t28.tm21`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > .t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(48) > .t42.tm21`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(49) > .t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(51) > .t42.tm21`

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
- **Count:** 85

#### Affected Elements:

- `h1`
- `div[title="Selvmordsangrep i Syria"] > h2`
- `div[title="Selvmordsangrep i Syria"] > .meta`
- `div[title="Brann i Oslo blusset opp igjen"] > h2`
- `div[title="Brann i Oslo blusset opp igjen"] > .meta`
- `div[title="Arne Bye anker ikke"] > h2`
- `div[title="Arne Bye anker ikke"] > .meta`
- `div[title="Telenor Pakistan solgt"] > h2`
- `time[datetime="2025-12-31T12:01:09.000Z"]`
- `div[title="Hamas får to måneder"] > h2`
- `time[datetime="2025-12-31T11:38:43.000Z"]`
- `div[title="EU advarer Israel"] > h2`
- `time[datetime="2025-12-31T10:14:23.000Z"]`
- `#notice-10130532 > .content > h2`
- `time[datetime="2025-12-31T09:14:00.000Z"]`
- `div[title="Britiske puber forsvinner"] > h2`
- `time[datetime="2025-12-31T08:58:32.000Z"]`
- `div[title="Norske elever velger finsk"] > h2`
- `time[datetime="2025-12-31T08:39:02.000Z"]`
- `div[title="Myanmar: Mange færre stemte"] > h2`
- `time[datetime="2025-12-31T06:49:50.000Z"]`
- `div[title="Barn såret i russiske angrep"] > h2`
- `time[datetime="2025-12-31T06:48:14.000Z"]`
- `div[title="Klager på valgresultat"] > h2`
- `time[datetime="2025-12-31T06:46:04.000Z"]`
- `div[title="Kuppgeneral utropt til vinner"] > h2`
- `time[datetime="2025-12-31T07:42:34.000Z"]`
- `#notice-10130475 > .content > h2`
- `time[datetime="2025-12-31T06:44:40.000Z"]`
- `#notice-10130474 > .content > h2`
- `time[datetime="2025-12-31T06:43:09.000Z"]`
- `div[title="Bil stanset med spikermatte"] > h2`
- `time[datetime="2025-12-31T06:42:18.000Z"]`
- `#notice-10130472 > .content > h2`
- `time[datetime="2025-12-31T06:29:48.000Z"]`
- `div[title="«The Wire»-skuespiller er død"] > h2`
- `time[datetime="2025-12-31T06:27:34.000Z"]`
- `div[title="Hundeeier dømt"] > h2`
- `time[datetime="2025-12-31T06:25:02.000Z"]`
- `#notice-10130393 > .content > h2`
- `#notice-10130393 > .content > .meta`
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
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(16)`
- `.row.large-12.small-12:nth-child(17)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(21)`
- `.row.large-12.small-12:nth-child(23)`
- `.bg-primary`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.tm26.t40.hasTextPadding`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(31)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(41)`
- `.row.large-12.small-12:nth-child(42)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(43)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(44)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(46)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(48)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(49)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(51)`
- `.powered-by`
