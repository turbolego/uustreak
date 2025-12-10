# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-12-10T00:37:57.748Z
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

- `.text_singleline.large-3.large-abs-3:nth-child(3) > .font-PTSans.singleline.t14 > a:nth-child(9)`

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
- **Count:** 8

#### Affected Elements:

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > h5`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > h5`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(22) > h5`
- `.t28.tm21`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > .color_mobile_no_bg_color`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(39) > .t42.tm21`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(41) > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(42) > .t42.tm21`

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

- `article[data-instance="9901219"] > .content > a[itemprop="url"][rel=""]`
- `.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 78

#### Affected Elements:

- `h1`
- `#notice-10102169 > .content > h2`
- `#notice-10102169 > .content > .meta`
- `div[title="Telia-problemer løst"] > h2`
- `div[title="Telia-problemer løst"] > .meta`
- `div[title="Argentinas president i Oslo"] > h2`
- `div[title="Argentinas president i Oslo"] > .meta`
- `div[title="Halve Kyiv uten strøm"] > h2`
- `div[title="Halve Kyiv uten strøm"] > .meta`
- `div[title="Taxi-opprør sprer seg"] > h2`
- `time[datetime="2025-12-09T12:21:09.000Z"]`
- `div[title="Mer fornøyd med Trump"] > h2`
- `time[datetime="2025-12-09T12:19:52.000Z"]`
- `div[title="TV 2s vårsesong"] > h2`
- `time[datetime="2025-12-09T11:16:00.000Z"]`
- `div[title="Nordmann pågrepet i Thailand"] > h2`
- `time[datetime="2025-12-09T10:27:26.000Z"]`
- `div[title="EU utsetter miljøkrav"] > h2`
- `time[datetime="2025-12-09T10:26:08.000Z"]`
- `div[title="Pågrepet for drapsforbund"] > h2`
- `time[datetime="2025-12-09T10:49:49.000Z"]`
- `div[title="Trumpist blir statsminister"] > h2`
- `time[datetime="2025-12-09T09:43:07.000Z"]`
- `#notice-10100347 > .content > h2`
- `time[datetime="2025-12-09T09:42:06.000Z"]`
- `#notice-10100111 > .content > h2`
- `time[datetime="2025-12-09T08:55:37.000Z"]`
- `div[title="PK med fredsprisvinner utsatt"] > h2`
- `time[datetime="2025-12-09T08:54:25.000Z"]`
- `div[title="EU etterforsker Google"] > h2`
- `time[datetime="2025-12-09T10:55:25.000Z"]`
- `div[title="Har drept flest journalister"] > h2`
- `time[datetime="2025-12-09T08:25:22.000Z"]`
- `div[title="Togene går igjen"] > h2`
- `time[datetime="2025-12-09T12:45:56.000Z"]`
- `div[title="Posten tapte i retten"] > h2`
- `time[datetime="2025-12-09T06:55:01.000Z"]`
- `div[title="Flere drept i nye angrep"] > h2`
- `time[datetime="2025-12-09T09:25:51.000Z"]`
- `div[title="Tekoligark årets ord"] > h2`
- `time[datetime="2025-12-09T06:24:29.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(12)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.row.large-12.small-12:nth-child(17)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(18)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19)`
- `.row.large-12.small-12:nth-child(21)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(22)`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(29)`
- `.tm26.t40.font-weight-bold`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(36)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(37)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(39)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(41)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(42)`
- `.powered-by`
