# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-01-15T06:58:33.797Z
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

- `.large-8 > .singleline`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 9

#### Affected Elements:

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(14) > h5`
- `.tm23`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(21) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(23) > h5`
- `.tm21.t28.align-left`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(37) > .t42.tm21`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(38) > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(39) > .t42.tm21`

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
- **Count:** 76

#### Affected Elements:

- `h1`
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
- `#notice-10150285 > .content > h2`
- `time[datetime="2026-01-14T19:43:54.000Z"]`
- `#notice-10150222 > .content > h2`
- `time[datetime="2026-01-14T19:10:50.000Z"]`
- `div[title="Fordømmer Grønland-uttalelser"] > h2`
- `time[datetime="2026-01-14T18:48:12.000Z"]`
- `#notice-10150179 > .content > h2`
- `time[datetime="2026-01-14T17:29:55.000Z"]`
- `div[title="Utvider siktelsen mot Arne Bye"] > h2`
- `time[datetime="2026-01-14T17:07:24.000Z"]`
- `div[title="Danmark varsler økt nærvær"] > h2`
- `time[datetime="2026-01-14T17:05:46.000Z"]`
- `#notice-10150140 > .content > h2`
- `time[datetime="2026-01-14T16:39:14.000Z"]`
- `#notice-10150107 > .content > h2`
- `time[datetime="2026-01-14T16:38:04.000Z"]`
- `div[title="USA: Utsetter tollavgjørelse"] > h2`
- `time[datetime="2026-01-14T15:49:03.000Z"]`
- `div[title="PST henlegger spionsak"] > h2`
- `time[datetime="2026-01-14T15:32:21.000Z"]`
- `div[title="FBI ransaket journalist-hjem"] > h2`
- `time[datetime="2026-01-14T15:29:41.000Z"]`
- `#notice-10149911 > .content > h2`
- `time[datetime="2026-01-14T14:50:08.000Z"]`
- `div[title="Brann i buss etter kollisjon"] > h2`
- `time[datetime="2026-01-14T15:30:19.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.row.large-12.small-12:nth-child(13)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(14)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(21)`
- `.row.large-12.small-12:nth-child(22)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(23)`
- `.row.large-12.small-12:nth-child(26)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.tm26.t40.hasTextPadding`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(33)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(34)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(37)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(38)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(39)`
- `.powered-by`
