# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-01-07T01:02:50.949Z
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

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > .t40`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > .t40`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22) > .t40`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(47) > .t28`
- `.t28.tm21`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > .t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(51) > .tm21.t42`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > .t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(53) > .tm21.t42`

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
- **Count:** 87

#### Affected Elements:

- `h1`
- `div[title="Danmark: USA tegner feil bilde"] > h2`
- `time[datetime="2026-01-06T19:55:32.000Z"]`
- `div[title="Danmark ber om møte med USA"] > h2`
- `time[datetime="2026-01-06T18:25:15.000Z"]`
- `div[title="Pågrepet for fire overfall"] > h2`
- `time[datetime="2026-01-06T18:12:02.000Z"]`
- `#notice-10137112 > .content > h2`
- `time[datetime="2026-01-06T17:41:05.000Z"]`
- `div[title="Forsvarsbygg legger seg flate"] > h2`
- `time[datetime="2026-01-06T17:27:44.000Z"]`
- `div[title="KLM innstiller 600 flygninger"] > h2`
- `time[datetime="2026-01-06T17:25:26.000Z"]`
- `div[title="MDG-exit i Trondheim?"] > h2`
- `time[datetime="2026-01-06T16:07:36.000Z"]`
- `div[title="34.000 husstander uten strøm"] > h2`
- `time[datetime="2026-01-06T16:06:29.000Z"]`
- `div[title="Fikk Fritt Ords Honnør"] > h2`
- `time[datetime="2026-01-06T15:38:52.000Z"]`
- `div[title="Ousdal bisettes 19. januar"] > h2`
- `time[datetime="2026-01-06T15:38:02.000Z"]`
- `#notice-10136990 > .content > h2`
- `time[datetime="2026-01-06T15:36:37.000Z"]`
- `div[title="Bildt tror Trump mener alvor"] > h2`
- `time[datetime="2026-01-06T13:31:47.000Z"]`
- `#notice-10136705 > .content[title="Minst 25 drept i Iran"] > h2`
- `time[datetime="2026-01-06T13:30:53.000Z"]`
- `div[title="Ungdommer angrep elever"] > h2`
- `time[datetime="2026-01-06T13:29:19.000Z"]`
- `div[title="Miljøsak i Høyesterett i april"] > h2`
- `time[datetime="2026-01-06T13:27:53.000Z"]`
- `#notice-10136582 > .content > h2`
- `time[datetime="2026-01-06T12:53:49.000Z"]`
- `#notice-10136577 > .content[title="Minst 25 drept i Iran"] > h2`
- `time[datetime="2026-01-06T12:50:08.000Z"]`
- `#notice-10136525 > .content > h2`
- `time[datetime="2026-01-06T12:27:06.000Z"]`
- `#notice-10136076 > .content > h2`
- `time[datetime="2026-01-06T14:47:51.000Z"]`
- `#notice-10135832 > .content > h2`
- `time[datetime="2026-01-06T10:39:38.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.page-content > .border_width_5.border_width_mobile_5.mobile_no_border_color`
- `.row.large-12.small-12:nth-child(11)`
- `.bg-primary.color_mobile_bg-primary.hasContentPadding:nth-child(12)`
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
- `.bg-primary.color_mobile_bg-primary.hasContentPadding:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(28)`
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
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(42)`
- `.row.large-12.small-12:nth-child(43)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(47)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(48)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(51)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(53)`
- `.powered-by`
