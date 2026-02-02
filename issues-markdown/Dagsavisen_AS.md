# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-02-02T01:00:21.649Z
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
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(11) > .tm36`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(16) > .t35`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(18) > .tm36`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(19) > .tm36`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(47) > h5`
- `.tm15.t28`
- `.tm21.t28`
- `.tm36.color_mobile_no_bg_color`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(52) > .t42.tm21`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(54) > .t42.tm21`

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
- `#notice-10179109 > .content > h2`
- `time[datetime="2026-02-01T14:41:58.000Z"]`
- `div[title="Kaster ut Leger Uten Grenser"] > h2`
- `time[datetime="2026-02-01T14:41:19.000Z"]`
- `#notice-10179086 > .content > h2`
- `time[datetime="2026-02-01T14:21:43.000Z"]`
- `div[title="Hagen vant verdenscupen"] > h2`
- `time[datetime="2026-02-01T17:08:08.000Z"]`
- `#notice-10179011 > .content > h2`
- `time[datetime="2026-02-01T12:38:21.000Z"]`
- `div[title="Kulde kan gi kjæledyr skader"] > h2`
- `time[datetime="2026-02-01T11:41:22.000Z"]`
- `#notice-10178987 > .content > h2`
- `time[datetime="2026-02-01T11:39:48.000Z"]`
- `#notice-10178986 > .content > h2`
- `time[datetime="2026-02-01T11:38:37.000Z"]`
- `#notice-10178967 > .content > h2`
- `time[datetime="2026-02-01T11:24:28.000Z"]`
- `#notice-10178966 > .content > h2`
- `time[datetime="2026-02-01T11:23:33.000Z"]`
- `div[title="Ti omkom i trafikken i januar"] > h2`
- `time[datetime="2026-02-01T11:23:01.000Z"]`
- `#notice-10178964 > .content > h2`
- `time[datetime="2026-02-01T11:19:14.000Z"]`
- `#notice-10178826 > .content > h2`
- `time[datetime="2026-02-01T09:16:11.000Z"]`
- `div[title="Iran advarer USA om krig"] > h2`
- `time[datetime="2026-02-01T11:20:40.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(9)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(11)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.row.large-12.small-12:nth-child(14)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(16) > .t35`
- `article[data-instance="10151714"] > .content > .media > .floatingText`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(17)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(18)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(19)`
- `.row.large-12.small-12:nth-child(21)`
- `.border_width_5.border_width_mobile_5.border-bg-quaternary`
- `.color_mobile_no_bg_color.row.large-12:nth-child(24)`
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
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(42)`
- `.row.large-12.small-12:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(46)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(47)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(48)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(49)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(52)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(54)`
- `.powered-by`
