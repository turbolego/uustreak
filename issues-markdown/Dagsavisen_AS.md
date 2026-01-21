# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-01-21T00:37:53.344Z
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
- **Count:** 2

#### Affected Elements:

- `.border_width_0 > h5`
- `.text_singleline.large-8.large-abs-8 > .singleline`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 11

#### Affected Elements:

- `.border_width_0 > h5`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > .tm36`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(17) > .t35`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > .tm36`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22) > .tm36`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.tm15`
- `.t28.tm21`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > .tm36`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(41) > .t42.tm21`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(42) > .t42.tm21`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.mainMenu`
- `#markup_10151715 > .fullwidthTarget.content > unite-player,mux-player[metadata-video-title="Hva vil Trump med Venezuela?"],media-theme,media-controller`

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
- **Count:** 79

#### Affected Elements:

- `h1`
- `#notice-10160389 > .content > h2`
- `#notice-10160389 > .content > .meta`
- `div[title="Nedgang på børsene i USA"] > h2`
- `time[datetime="2026-01-20T18:31:55.000Z"]`
- `#notice-10160281 > .content > h2`
- `#notice-10160281 > .content > .meta`
- `#notice-10160270 > .content > h2`
- `#notice-10160270 > .content > .meta`
- `#notice-10160101 > .content > h2`
- `#notice-10160101 > .content > .meta`
- `div[title="Trump inviterer til signering"] > h2`
- `div[title="Trump inviterer til signering"] > .meta`
- `div[title="Ber Støre si nei til Trump"] > h2`
- `time[datetime="2026-01-20T11:45:53.000Z"]`
- `div[title="Knausgård ny æresdoktor"] > h2`
- `time[datetime="2026-01-20T10:43:56.000Z"]`
- `div[title="Israel river Unrwa-kontorer"] > h2`
- `time[datetime="2026-01-20T12:30:47.000Z"]`
- `div[title="Ber EU avvente Høyesterett"] > h2`
- `time[datetime="2026-01-20T09:19:49.000Z"]`
- `div[title="Stadig flere privatskoler"] > h2`
- `time[datetime="2026-01-20T08:43:41.000Z"]`
- `div[title="Omfattende russisk angrep"] > h2`
- `time[datetime="2026-01-20T09:27:40.000Z"]`
- `div[title="10.000 flere mottok AAP"] > h2`
- `time[datetime="2026-01-20T12:31:24.000Z"]`
- `div[title="Nato-sjefen hyller Trump"] > h2`
- `time[datetime="2026-01-20T07:41:48.000Z"]`
- `div[title="Truer Frankrike med vintoll"] > h2`
- `time[datetime="2026-01-20T07:40:11.000Z"]`
- `div[title="Trump deler Macron-melding"] > h2`
- `time[datetime="2026-01-20T06:54:12.000Z"]`
- `#notice-10158252 > .content > h2`
- `time[datetime="2026-01-20T06:50:05.000Z"]`
- `#notice-10158250 > .content > h2`
- `time[datetime="2026-01-20T06:45:53.000Z"]`
- `div[title="Vurderer SoMe-forbud for barn"] > h2`
- `time[datetime="2026-01-20T06:42:16.000Z"]`
- `div[title="Overrepresentert i dødsulykker"] > h2`
- `time[datetime="2026-01-20T06:40:00.000Z"]`
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
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(17) > .t35`
- `article[data-instance="10151714"] > .content > .media > .floatingText`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(18)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19)`
- `.row.large-12.small-12:nth-child(21)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22)`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(28)`
- `.border_width_5.border_width_mobile_5.border-bg-quaternary`
- `.tm26.t40.font-weight-bold`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(32)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(37)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(38)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(41)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(42)`
- `.powered-by`
