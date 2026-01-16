# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-01-16T00:40:38.158Z
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

- `.large-8 > .singleline`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 10

#### Affected Elements:

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(12) > .tm36`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(16) > .t35`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(18) > .tm36`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(21) > .tm36`
- `.tm15`
- `.t28.tm21.align-left`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > .tm36`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(42) > .t42.tm21`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(44) > .t42.tm21`

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
- **Count:** 81

#### Affected Elements:

- `h1`
- `div[title="Medlemsvekst i Rødt"] > h2`
- `time[datetime="2026-01-15T20:10:23.000Z"]`
- `#notice-10152597 > .content > h2`
- `time[datetime="2026-01-15T18:02:58.000Z"]`
- `#notice-10152478 > .content > h2`
- `time[datetime="2026-01-15T16:02:36.000Z"]`
- `div[title="Gutt døde i snøhuleulykke"] > h2`
- `time[datetime="2026-01-15T15:50:08.000Z"]`
- `div[title="Energianlegg bombet i Kharkiv"] > h2`
- `time[datetime="2026-01-15T15:13:43.000Z"]`
- `div[title="Israelske angrep i Libanon"] > h2`
- `time[datetime="2026-01-15T15:12:15.000Z"]`
- `#notice-10152083 > .content > h2`
- `time[datetime="2026-01-15T14:24:15.000Z"]`
- `div[title="Trump truer med opprørslov"] > h2`
- `time[datetime="2026-01-15T13:26:24.000Z"]`
- `div[title="Telenor: Feilen er rettet"] > h2`
- `time[datetime="2026-01-15T14:23:23.000Z"]`
- `#notice-10151542 > .content > h2`
- `#notice-10151542 > .content > .meta`
- `#notice-10150721 > .content > h2`
- `#notice-10150721 > .content > .meta`
- `#notice-10150720 > .content > h2`
- `#notice-10150720 > .content > .meta`
- `#notice-10150533 > .content > h2`
- `#notice-10150533 > .content > .meta`
- `#notice-10150357 > .content > h2`
- `#notice-10150357 > .content > .meta`
- `#notice-10150356 > .content > h2`
- `#notice-10150356 > .content > .meta`
- `#notice-10150355 > .content > h2`
- `#notice-10150355 > .content > .meta`
- `#notice-10150354 > .content > h2`
- `#notice-10150354 > .content > .meta`
- `#notice-10150291 > .content > h2`
- `time[datetime="2026-01-14T20:27:25.000Z"]`
- `div[title="Equinor-avklaring i USA utsatt"] > h2`
- `time[datetime="2026-01-14T20:12:06.000Z"]`
- `div[title="Etterforsker KI-verktøyet Grok"] > h2`
- `time[datetime="2026-01-14T20:10:42.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(12)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(16) > .t35`
- `article[data-instance="10151714"] > .content > .media > .floatingText`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(17)`
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
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(38)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(39)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(42)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(44)`
- `.powered-by`
