# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-12-20T04:24:09.147Z
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
- **Count:** 8

#### Affected Elements:

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > .t40`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > .t40`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(22) > .t40`
- `.t28.tm21`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > .t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(63) > .t42.tm21`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > .t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(65) > .t42.tm21`

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
- **Count:** 102

#### Affected Elements:

- `h1`
- `div[title="Regler mot avskoging utsettes"] > h2`
- `div[title="Regler mot avskoging utsettes"] > .meta`
- `#notice-10121271 > .content > h2`
- `#notice-10121271 > .content > .meta`
- `#notice-10121196 > .content > h2`
- `#notice-10121196 > .content > .meta`
- `div[title="Anker ikke dommen mot Arne Bye"] > h2`
- `div[title="Anker ikke dommen mot Arne Bye"] > .meta`
- `#notice-10120896 > .content > h2`
- `#notice-10120896 > .content > .meta`
- `#notice-10120792 > .content > h2`
- `#notice-10120792 > .content > .meta`
- `#notice-10120791 > .content > h2`
- `#notice-10120791 > .content > .meta`
- `#notice-10120782 > .content > h2`
- `#notice-10120782 > .content > .meta`
- `div[title="Louvre-streiken avsluttes"] > h2`
- `time[datetime="2025-12-19T12:01:18.000Z"]`
- `#notice-10120215 > .content > h2`
- `time[datetime="2025-12-19T11:47:49.000Z"]`
- `.content[title="Arthur «Oluf» Arntzen er død"] > h2`
- `time[datetime="2025-12-19T11:47:18.000Z"]`
- `#notice-10119933 > .content > h2`
- `#notice-10119933 > .content > .meta`
- `div[title="Vurderer egen sameskatt"] > h2`
- `time[datetime="2025-12-19T08:30:14.000Z"]`
- `div[title="Angriper skattelotto"] > h2`
- `time[datetime="2025-12-19T08:29:36.000Z"]`
- `div[title="Arbeidsledigheten går litt ned"] > h2`
- `time[datetime="2025-12-19T07:30:44.000Z"]`
- `#notice-10119023 > .content > h2`
- `time[datetime="2025-12-19T08:12:56.000Z"]`
- `div[title="Skytemistenkt funnet død"] > h2`
- `time[datetime="2025-12-19T06:16:23.000Z"]`
- `div[title="Trump: Nå må Ukraina handle"] > h2`
- `time[datetime="2025-12-19T06:15:44.000Z"]`
- `#notice-10118856 > .content > h2`
- `#notice-10118856 > .content > .meta`
- `#notice-10118842 > .content > h2`
- `#notice-10118842 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(9)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(11)`
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
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(42)`
- `.row.large-12.small-12:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.row.large-12.small-12:nth-child(48)`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `article[data-instance="10110087"] > .content > a[itemprop="url"][rel=""] > .below.kicker`
- `span[data-lab-text_size_mobile="24"]`
- `.tm41`
- `.row.large-12.small-12:nth-child(53) > .columns.large-3.large-abs-3`
- `.row.large-12.small-12:nth-child(54)`
- `.row.large-12.small-12:nth-child(55)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(59)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(60)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(61)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(63)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(65)`
- `.powered-by`
