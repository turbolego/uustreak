# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-01-06T15:40:45.023Z
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

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(14) > h5`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(21) > h5`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(23) > h5`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(52) > .t28`
- `.t28.tm21`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(55) > .t42.tm21`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(57) > .t42.tm21`

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
- **Count:** 91

#### Affected Elements:

- `h1`
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
- `div[title="Boligprisene falt i desember"] > h2`
- `time[datetime="2026-01-06T10:25:11.000Z"]`
- `#notice-10136076 > .content > h2`
- `time[datetime="2026-01-06T14:47:51.000Z"]`
- `#notice-10136029 > .content > h2`
- `time[datetime="2026-01-06T09:19:52.000Z"]`
- `div[title="Fortsatt flykaos i Europa"] > h2`
- `time[datetime="2026-01-06T08:35:52.000Z"]`
- `div[title="Snøvær skaper trafikktrøbbel"] > h2`
- `time[datetime="2026-01-06T10:10:24.000Z"]`
- `#notice-10135954 > .content > h2`
- `time[datetime="2026-01-06T08:30:06.000Z"]`
- `#notice-10135832 > .content > h2`
- `time[datetime="2026-01-06T10:39:38.000Z"]`
- `#notice-10135809 > .content > h2`
- `time[datetime="2026-01-06T06:14:09.000Z"]`
- `div[title="Minst 14 døde i styrtflod"] > h2`
- `time[datetime="2026-01-06T06:13:31.000Z"]`
- `div[title="Kan ta tid før E6 åpner"] > h2`
- `time[datetime="2026-01-05T20:36:32.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.page-content > .border_width_5.border_width_mobile_5.mobile_no_border_color`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.row.large-12.small-12:nth-child(13)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(14)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.row.large-12.small-12:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(21)`
- `.bg-primary.color_mobile_bg-primary.hasContentPadding:nth-child(22)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(23)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.tm26.t40.hasTextPadding`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.bg-primary.color_mobile_bg-primary.has-row-header`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(42)`
- `.row.large-12.small-12:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(48)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(51)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(52)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(53)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(55)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(57)`
- `.powered-by`
