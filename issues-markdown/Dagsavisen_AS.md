# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-12-17T00:37:36.949Z
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
- **Count:** 9

#### Affected Elements:

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(11) > h5`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(18) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(19) > h5`
- `.bg-primary > h5`
- `.t28`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(53) > .tm21.t42`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(55) > .tm21.t42`

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
- **Count:** 95

#### Affected Elements:

- `h1`
- `div[title="Massesøksmål mot Norsk Tipping"] > h2`
- `div[title="Massesøksmål mot Norsk Tipping"] > .meta`
- `#notice-10114259 > .content > h2`
- `#notice-10114259 > .content > .meta`
- `#notice-10114252 > .content > h2`
- `#notice-10114252 > .content > .meta`
- `#notice-10113975 > .content > h2`
- `#notice-10113975 > .content > .meta`
- `#notice-10113968 > .content > h2`
- `#notice-10113968 > .content > .meta`
- `#notice-10113858 > .content > h2`
- `#notice-10113858 > .content > .meta`
- `div[title="30 fengslet etter kuppforsøk"] > h2`
- `time[datetime="2025-12-16T12:49:05.000Z"]`
- `div[title="Ny makrellavtale i boks"] > h2`
- `time[datetime="2025-12-16T10:40:58.000Z"]`
- `div[title="Økokrim gir Equinor gigantbot"] > h2`
- `time[datetime="2025-12-16T06:59:12.000Z"]`
- `div[title="Vil skrote hjemmeeksamen"] > h2`
- `time[datetime="2025-12-16T06:37:44.000Z"]`
- `div[title="Trump med søksmål mot BBC"] > h2`
- `time[datetime="2025-12-16T06:03:47.000Z"]`
- `div[title="Åtte drept i båtangrep"] > h2`
- `time[datetime="2025-12-16T06:38:25.000Z"]`
- `div[title="Staten anker klimadom"] > h2`
- `time[datetime="2025-12-15T20:27:07.000Z"]`
- `#notice-10111801 > .content > h2`
- `time[datetime="2025-12-15T17:49:59.000Z"]`
- `div[title="– Trump anklager Netanyahu"] > h2`
- `time[datetime="2025-12-15T21:03:50.000Z"]`
- `div[title="Norgesgruppen får kjøpe apotek"] > h2`
- `time[datetime="2025-12-15T17:17:53.000Z"]`
- `div[title="Frp stemte for Ap-budsjett"] > h2`
- `time[datetime="2025-12-15T17:16:46.000Z"]`
- `div[title="Hevder FBI forhindret terror"] > h2`
- `time[datetime="2025-12-15T17:15:55.000Z"]`
- `div[title="Mistenkt kvinne løslatt"] > h2`
- `time[datetime="2025-12-15T16:26:01.000Z"]`
- `div[title="Vil forby utenlandske medier"] > h2`
- `time[datetime="2025-12-15T15:04:53.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(11)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.row.large-12.small-12:nth-child(13)`
- `.articlescroller-header`
- `.articles`
- `.row.large-12.small-12:nth-child(16)`
- `.row.large-12.small-12:nth-child(17)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(18)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(19)`
- `.row.large-12.small-12:nth-child(21)`
- `.row.large-12.small-12:nth-child(23)`
- `.row.large-12.small-12:nth-child(24)`
- `article[data-instance="10111838"]`
- `article[data-instance="10113426"]`
- `article[data-instance="10110087"] > .content > a[itemprop="url"][rel=""] > .below.kicker`
- `.t38`
- `.t82`
- `.row.large-12.small-12:nth-child(26) > .large-3.columns.large-abs-3`
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
- `.row.large-12.small-12:nth-child(37)`
- `.bg-primary`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(42)`
- `.row.large-12.small-12:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(48)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(49)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(51)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(53)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(55)`
- `.powered-by`
