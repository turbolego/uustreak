# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-01-09T00:41:25.999Z
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

- `.border_width_12.border_width_mobile_12.bg-tertiary:nth-child(12) > h5`
- `.border_width_12.border_width_mobile_12.bg-tertiary:nth-child(18) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(21) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(48) > .t28`
- `.tm21.t28`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(52) > .t42.tm21`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(53) > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(54) > .t42.tm21`

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
- **Count:** 88

#### Affected Elements:

- `h1`
- `div[title="Vance: – Ta Trump seriøst"] > h2`
- `time[datetime="2026-01-08T19:17:59.000Z"]`
- `div[title="Bulgarer skal lede Gaza-råd"] > h2`
- `time[datetime="2026-01-08T18:54:11.000Z"]`
- `div[title="Michelinrestaurant stenger"] > h2`
- `time[datetime="2026-01-08T17:56:38.000Z"]`
- `#notice-10141056 > .content[title="Nye sammenstøt i Iran"] > h2`
- `time[datetime="2026-01-08T17:55:39.000Z"]`
- `div[title="Internett nede i Iran"] > h2`
- `time[datetime="2026-01-08T17:54:12.000Z"]`
- `div[title="Oligark saksøker Norge"] > h2`
- `time[datetime="2026-01-08T16:55:44.000Z"]`
- `div[title="Varsel mot parti lagt vekk"] > h2`
- `time[datetime="2026-01-08T16:54:08.000Z"]`
- `div[title="200 skoler bryter lærernormen"] > h2`
- `time[datetime="2026-01-08T16:51:55.000Z"]`
- `div[title="Lula stopper lov"] > h2`
- `time[datetime="2026-01-08T15:53:09.000Z"]`
- `div[title="Gazas sivilforsvar: Sju drept"] > h2`
- `time[datetime="2026-01-08T15:52:28.000Z"]`
- `div[title="USA trekker seg fra fond"] > h2`
- `time[datetime="2026-01-08T14:41:33.000Z"]`
- `div[title="Influensatoppen kan være nådd"] > h2`
- `time[datetime="2026-01-08T13:05:20.000Z"]`
- `#notice-10140235 > .content > h2`
- `time[datetime="2026-01-08T11:56:38.000Z"]`
- `div[title="Zalando kutter 2700 stillinger"] > h2`
- `time[datetime="2026-01-08T11:55:36.000Z"]`
- `div[title="Svalbard er varmest i Norge"] > h2`
- `time[datetime="2026-01-08T11:55:02.000Z"]`
- `#notice-10140003 > .content[title="Nye sammenstøt i Iran"] > h2`
- `time[datetime="2026-01-08T10:51:18.000Z"]`
- `#notice-10139846 > .content > h2`
- `time[datetime="2026-01-08T09:44:48.000Z"]`
- `#notice-10139841 > .content > h2`
- `time[datetime="2026-01-08T09:44:12.000Z"]`
- `div[title="Robyn med nytt album i mars"] > h2`
- `time[datetime="2026-01-08T08:10:55.000Z"]`
- `div[title="Vance: Grønland er avgjørende"] > h2`
- `time[datetime="2026-01-08T08:28:18.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.border_width_12.border_width_mobile_12.bg-tertiary:nth-child(12)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.row.large-12.small-12:nth-child(16)`
- `.row.large-12.small-12:nth-child(17)`
- `.border_width_12.border_width_mobile_12.bg-tertiary:nth-child(18)`
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
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(42)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(47)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(48)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(49)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(52)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(53)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(54)`
- `.powered-by`
