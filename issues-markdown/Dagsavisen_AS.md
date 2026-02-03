# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-02-03T00:48:01.389Z
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
- **Count:** 2

#### Affected Elements:

- `.border_width_0 > h5`
- `.text_singleline.large-8.large-abs-8 > .singleline`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 11

#### Affected Elements:

- `.border_width_0 > h5`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(12) > h5`
- `.t35`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(18) > h5`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(21) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.tm15`
- `.t28.tm21`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > .color_mobile_no_bg_color`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(49) > .t42.tm21`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(51) > .t42.tm21`

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
- **Count:** 88

#### Affected Elements:

- `h1`
- `#notice-10181552 > .content > h2`
- `time[datetime="2026-02-02T19:43:16.000Z"]`
- `#notice-10181499 > .content > h2`
- `time[datetime="2026-02-02T18:58:21.000Z"]`
- `div[title="Ulykke: Sats fjerner apparat"] > h2`
- `time[datetime="2026-02-02T19:10:09.000Z"]`
- `#notice-10181467 > .content > h2`
- `time[datetime="2026-02-02T17:21:41.000Z"]`
- `div[title="Israelske angrep i Sør-Libanon"] > h2`
- `time[datetime="2026-02-02T16:20:31.000Z"]`
- `div[title="Venezuelas oljeeksport økte"] > h2`
- `time[datetime="2026-02-02T16:19:39.000Z"]`
- `#notice-10180517 > .content > h2`
- `#notice-10180517 > .content > .meta`
- `#notice-10180404 > .content > h2`
- `#notice-10180404 > .content > .meta`
- `#notice-10179757 > .content > h2`
- `#notice-10179757 > .content > .meta`
- `#notice-10179604 > .content > h2`
- `#notice-10179604 > .content > .meta`
- `div[title="Innbrudd hos gullsmed i Oslo"] > h2`
- `div[title="Innbrudd hos gullsmed i Oslo"] > .meta`
- `#notice-10179439 > .content > h2`
- `#notice-10179439 > .content > .meta`
- `#notice-10179330 > .content > h2`
- `#notice-10179330 > .content > .meta`
- `div[title="Brende beklager kommentar"] > h2`
- `time[datetime="2026-02-01T17:06:53.000Z"]`
- `#notice-10179166 > .content > h2`
- `time[datetime="2026-02-01T17:04:47.000Z"]`
- `#notice-10179155 > .content > h2`
- `time[datetime="2026-02-01T16:52:09.000Z"]`
- `div[title="Nye Ukraina-samtaler"] > h2`
- `time[datetime="2026-02-01T16:57:17.000Z"]`
- `#notice-10179116 > .content > h2`
- `time[datetime="2026-02-01T16:51:08.000Z"]`
- `div[title="Casper Ruud er blitt far"] > h2`
- `time[datetime="2026-02-01T15:18:12.000Z"]`
- `div[title="Hagen vant verdenscupen"] > h2`
- `time[datetime="2026-02-01T17:08:08.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(12)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header.t40.tm36`
- `.count_4`
- `.t35`
- `article[data-instance="10151714"] > .content > .media > .floatingText`
- `.row.large-12.small-12:nth-child(17)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(18)`
- `article[data-instance="10181445"]`
- `.articlescroller-header.t26`
- `.count_2`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(21)`
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
- `.row.large-12.small-12:nth-child(33)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.border_width_5.border_width_mobile_5.border-bg-quaternary`
- `.row.large-12.small-12:nth-child(38)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(42)`
- `.row.large-12.small-12:nth-child(43)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(46)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(47)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(49)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(51)`
- `.powered-by`
