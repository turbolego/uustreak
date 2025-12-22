# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-12-22T00:38:27.118Z
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
- **Count:** 8

#### Affected Elements:

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > .tm36`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > .tm36`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(22) > .tm36`
- `.t28.tm21`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > .tm36`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(44) > .t42.tm21`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(47) > .t42.tm21`

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
- **Count:** 82

#### Affected Elements:

- `h1`
- `#notice-10122096 > .content > h2`
- `#notice-10122096 > .content > .meta`
- `div[title="Hamas og Hizbollah ruster opp"] > h2`
- `div[title="Hamas og Hizbollah ruster opp"] > .meta`
- `div[title="Fotgjenger påkjørt i Porsgrunn"] > h2`
- `div[title="Fotgjenger påkjørt i Porsgrunn"] > .meta`
- `div[title="Ambassadør kritiserer Norge"] > h2`
- `time[datetime="2025-12-21T11:56:32.000Z"]`
- `div[title="Ber Norge ta Gaza-initiativ"] > h2`
- `time[datetime="2025-12-21T11:53:41.000Z"]`
- `#notice-10121751 > .content > h2`
- `time[datetime="2025-12-21T09:22:12.000Z"]`
- `#notice-10121692 > .content > h2`
- `time[datetime="2025-12-21T07:51:04.000Z"]`
- `#notice-10121691 > .content > h2`
- `time[datetime="2025-12-21T07:17:33.000Z"]`
- `#notice-10121690 > .content > h2`
- `time[datetime="2025-12-21T07:13:47.000Z"]`
- `#notice-10121689 > .content > h2`
- `time[datetime="2025-12-21T07:12:27.000Z"]`
- `#notice-10121651 > .content > h2`
- `time[datetime="2025-12-20T17:03:57.000Z"]`
- `div[title="Én omkommet i brann i Fetsund"] > h2`
- `time[datetime="2025-12-20T21:17:05.000Z"]`
- `#notice-10121593 > .content > h2`
- `time[datetime="2025-12-20T15:04:55.000Z"]`
- `#notice-10121526 > .content > h2`
- `time[datetime="2025-12-20T13:55:31.000Z"]`
- `#notice-10121525 > .content > h2`
- `time[datetime="2025-12-20T13:59:07.000Z"]`
- `#notice-10121458 > .content > h2`
- `#notice-10121458 > .content > .meta`
- `#notice-10121431 > .content > h2`
- `#notice-10121431 > .content > .meta`
- `div[title="Babyer dør av kulde på Gaza"] > h2`
- `div[title="Babyer dør av kulde på Gaza"] > .meta`
- `#notice-10121425 > .content > h2`
- `#notice-10121425 > .content > .meta`
- `#notice-10121424 > .content > h2`
- `#notice-10121424 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
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
- `.row.large-12.small-12:nth-child(18)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19)`
- `.row.large-12.small-12:nth-child(21)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(22)`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
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
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(39)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(41)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(42)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(44)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(47)`
- `.powered-by`
