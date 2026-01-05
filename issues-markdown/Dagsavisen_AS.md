# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-01-05T00:43:35.598Z
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

- `.text_singleline.large-8.large-abs-8 > .singleline`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 11

#### Affected Elements:

- `.bg-primary.color_mobile_bg-primary.has-row-header:nth-child(2) > .t26`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > .t40.tm36`
- `.t37`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > .t40.tm36`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22) > .t40.tm36`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(38) > .t28`
- `.t28.tm21`
- `.t40.color_mobile_no_bg_color.tm36`
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
- **Count:** 2

#### Affected Elements:

- `a[href$="mailto:kb@dagsavisen.no"]`
- `.tm17.font-PTSans.singleline > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 80

#### Affected Elements:

- `h1`
- `#notice-10134105 > .content > h2`
- `#notice-10134105 > .content > .meta`
- `#notice-10134099 > .content > h2`
- `#notice-10134099 > .content > .meta`
- `div[title="Ulykke i Porsgrunn "] > h2`
- `div[title="Ulykke i Porsgrunn "] > .meta`
- `#notice-10133861 > .content > h2`
- `#notice-10133861 > .content > .meta`
- `#notice-10133840 > .content > h2`
- `time[datetime="2026-01-04T14:11:06.000Z"]`
- `#notice-10133685 > .content > h2`
- `#notice-10133685 > .content > .meta`
- `#notice-10133672 > .content > h2`
- `time[datetime="2026-01-04T10:20:48.000Z"]`
- `div[title="Spredte protester i Teheran"] > h2`
- `div[title="Spredte protester i Teheran"] > .meta`
- `#notice-10133606 > .content > h2`
- `#notice-10133606 > .content > .meta`
- `#notice-10133605 > .content > h2`
- `time[datetime="2026-01-04T08:12:22.000Z"]`
- `#notice-10133596 > .content > h2`
- `time[datetime="2026-01-04T07:48:29.000Z"]`
- `#notice-10133592 > .content > h2`
- `time[datetime="2026-01-04T07:44:49.000Z"]`
- `#notice-10133591 > .content > h2`
- `time[datetime="2026-01-04T07:42:37.000Z"]`
- `div[title="Maduro i New York"] > h2`
- `time[datetime="2026-01-04T07:41:03.000Z"]`
- `#notice-10133508 > .content > h2`
- `#notice-10133508 > .content > .meta`
- `#notice-10133438 > .content > h2`
- `#notice-10133438 > .content > .meta`
- `#notice-10133396 > .content > h2`
- `#notice-10133396 > .content > .meta`
- `#notice-10133191 > .content > h2`
- `#notice-10133191 > .content > .meta`
- `#notice-10133039 > .content > h2`
- `#notice-10133039 > .content > .meta`
- `#notice-10132979 > .content > h2`
- `#notice-10132979 > .content > .meta`
- `.bg-primary.color_mobile_bg-primary.has-row-header:nth-child(2)`
- `.page-content > .bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(3)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.row.large-12.small-12:nth-child(17)`
- `.bg-primary.color_mobile_bg-primary.has-row-header:nth-child(18)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19)`
- `.row.large-12.small-12:nth-child(21)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.tm26.t40.hasTextPadding`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-section="debatt"][data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"] > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-tags="nyheter"] > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(34)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(38)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(39)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(42)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(44)`
- `.powered-by`
