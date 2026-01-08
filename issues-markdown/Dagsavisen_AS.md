# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-01-08T00:39:29.001Z
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

- `.border_width_12.border_width_mobile_12.bg-tertiary:nth-child(14) > h5`
- `.border_width_12.border_width_mobile_12.bg-tertiary:nth-child(21) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(23) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(46) > .t28`
- `.tm21.t28`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(49) > .tm21.t42`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(52) > .tm21.t42`

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
- **Count:** 86

#### Affected Elements:

- `h1`
- `#notice-10139189 > .content > h2`
- `time[datetime="2026-01-07T19:24:42.000Z"]`
- `div[title="Fotballegende har kreft"] > h2`
- `time[datetime="2026-01-07T19:11:03.000Z"]`
- `div[title="Rubio: Møte med Danmark"] > h2`
- `time[datetime="2026-01-07T17:57:22.000Z"]`
- `div[title="USA: – Vi dikterer Venezuela"] > h2`
- `time[datetime="2026-01-07T17:55:40.000Z"]`
- `div[title="Forbereder seg på snøkaos"] > h2`
- `time[datetime="2026-01-07T16:50:48.000Z"]`
- `#notice-10139099 > .content > h2`
- `time[datetime="2026-01-07T16:49:46.000Z"]`
- `#notice-10139048 > .content > h2`
- `time[datetime="2026-01-07T17:54:15.000Z"]`
- `div[title="Trump: Tåpelig av Norge"] > h2`
- `time[datetime="2026-01-07T17:43:10.000Z"]`
- `div[title="Støre vil informere Stortinget"] > h2`
- `time[datetime="2026-01-07T14:29:13.000Z"]`
- `div[title="Forbyr russiske flagg under OL"] > h2`
- `time[datetime="2026-01-07T13:49:05.000Z"]`
- `div[title="24.000 vil slette studiegjeld"] > h2`
- `time[datetime="2026-01-07T13:47:36.000Z"]`
- `#notice-10138604 > .content > h2`
- `time[datetime="2026-01-07T13:11:58.000Z"]`
- `div[title="Strømmen er tilbake i Berlin"] > h2`
- `time[datetime="2026-01-07T12:52:49.000Z"]`
- `div[title="Rekordvarmt i Nordsjøen"] > h2`
- `time[datetime="2026-01-07T12:20:32.000Z"]`
- `div[title="Sprengkulda ga ny strømrekord"] > h2`
- `time[datetime="2026-01-07T10:53:56.000Z"]`
- `div[title="Ber Kina mekle med Nord-Korea"] > h2`
- `time[datetime="2026-01-07T10:49:12.000Z"]`
- `#notice-10137969 > .content > h2`
- `time[datetime="2026-01-07T10:26:55.000Z"]`
- `div[title="Arthur Arntzen bisatt"] > h2`
- `time[datetime="2026-01-07T10:22:35.000Z"]`
- `#notice-10137812 > .content > h2`
- `time[datetime="2026-01-07T09:34:03.000Z"]`
- `#notice-10137762 > .content > h2`
- `time[datetime="2026-01-07T09:27:17.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.row.large-12.small-12:nth-child(13)`
- `.border_width_12.border_width_mobile_12.bg-tertiary:nth-child(14)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.row.large-12.small-12:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `.border_width_12.border_width_mobile_12.bg-tertiary:nth-child(21)`
- `.row.large-12.small-12:nth-child(22)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(23)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.page-content > .bg-primary.color_mobile_bg-primary.hasContentPadding`
- `.tm26.t40.hasTextPadding`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(41)`
- `.row.large-12.small-12:nth-child(42)`
- `.row.large-12.small-12:nth-child(43)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(44)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(46)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(47)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(49)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(52)`
- `.powered-by`
