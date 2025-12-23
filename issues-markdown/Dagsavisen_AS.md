# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-12-23T00:35:14.361Z
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

- `.large-8.large-abs-8.text_singleline > .singleline`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 8

#### Affected Elements:

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(12) > h5`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(18) > h5`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(21) > h5`
- `.t28.tm21`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(38) > .t42.tm21`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(39) > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(41) > .t42.tm21`

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
- **Count:** 77

#### Affected Elements:

- `h1`
- `div[title="Stordalen anker skattekrav"] > h2`
- `time[datetime="2025-12-22T20:53:41.000Z"]`
- `#notice-10124111 > .content > h2`
- `time[datetime="2025-12-22T20:36:33.000Z"]`
- `div[title="Bil kjørte inn i folkemengde"] > h2`
- `time[datetime="2025-12-22T20:16:22.000Z"]`
- `div[title="Matsentralen får ett tonn laks"] > h2`
- `time[datetime="2025-12-22T18:24:31.000Z"]`
- `div[title="Gutter skadet av etsende væske"] > h2`
- `time[datetime="2025-12-22T17:48:22.000Z"]`
- `div[title="Eksplosjon på norsk fabrikk"] > h2`
- `time[datetime="2025-12-22T16:27:02.000Z"]`
- `div[title="KI-bekymring i bokbransjen"] > h2`
- `time[datetime="2025-12-22T16:07:08.000Z"]`
- `div[title="Matsentralen får fem mill. mer"] > h2`
- `time[datetime="2025-12-22T15:06:39.000Z"]`
- `#notice-10123891 > .content > h2`
- `time[datetime="2025-12-22T14:59:05.000Z"]`
- `#notice-10123792 > .content > h2`
- `#notice-10123792 > .content > .meta`
- `#notice-10123243 > .content > h2`
- `#notice-10123243 > .content > .meta`
- `div[title="Russisk general drept i Moskva"] > h2`
- `div[title="Russisk general drept i Moskva"] > .meta`
- `#notice-10122195 > .content > h2`
- `#notice-10122195 > .content > .meta`
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
- `.row.large-12.small-12:nth-child(16)`
- `.row.large-12.small-12:nth-child(17)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(21)`
- `.row.large-12.small-12:nth-child(23)`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(28)`
- `.t40.tm26.font-weight-bold`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(31)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(32)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(33)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(34)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(36)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(38)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(39)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(41)`
- `.powered-by`
