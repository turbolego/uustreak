# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-01-24T00:40:39.787Z
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
- `.large-8.large-abs-8.text_singleline > .singleline`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 12

#### Affected Elements:

- `.border_width_0 > h5`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > .tm36.t40`
- `.t35`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > .tm36.t40`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22) > .tm36.t40`
- `.t24`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(42) > .t40`
- `.tm15`
- `.t28.tm21.align-left`
- `.tm36.t40.color_mobile_no_bg_color`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(47) > .t42.tm21`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(48) > .t42.tm21`

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
- **Count:** 87

#### Affected Elements:

- `h1`
- `#notice-10166751 > .content > h2`
- `#notice-10166751 > .content > .meta`
- `#notice-10166739 > .content > h2`
- `#notice-10166739 > .content > .meta`
- `div[title="Prins Harry ut mot Trump"] > h2`
- `div[title="Prins Harry ut mot Trump"] > .meta`
- `div[title="Flere militære på Grønland"] > h2`
- `time[datetime="2026-01-23T13:24:41.000Z"]`
- `div[title="Stanser returer til Iran"] > h2`
- `time[datetime="2026-01-23T13:01:15.000Z"]`
- `div[title="Advarer om datainnbrudd"] > h2`
- `time[datetime="2026-01-23T12:21:13.000Z"]`
- `div[title="Ledere korrupsjonsdømt"] > h2`
- `time[datetime="2026-01-23T12:36:21.000Z"]`
- `div[title="Nato-allierte raser mot Trump"] > h2`
- `time[datetime="2026-01-23T12:07:00.000Z"]`
- `div[title="VG: Artister i opprør"] > h2`
- `time[datetime="2026-01-23T11:10:47.000Z"]`
- `div[title="Ingebrigtsen-brødrene tapte"] > h2`
- `time[datetime="2026-01-23T10:40:55.000Z"]`
- `div[title="Eide fordømmer Israels riving"] > h2`
- `time[datetime="2026-01-23T09:59:40.000Z"]`
- `div[title="Anklager mot bompengeselskap"] > h2`
- `time[datetime="2026-01-23T09:52:50.000Z"]`
- `div[title="Forsvaret fikk bot"] > h2`
- `time[datetime="2026-01-23T09:11:49.000Z"]`
- `div[title="Telia tapte ankesak"] > h2`
- `time[datetime="2026-01-23T09:53:31.000Z"]`
- `div[title="VG: 13 siktet for drapsforbund"] > h2`
- `time[datetime="2026-01-23T08:31:37.000Z"]`
- `#notice-10165038 > .content > h2`
- `time[datetime="2026-01-23T08:13:33.000Z"]`
- `#notice-10165032 > .content > h2`
- `time[datetime="2026-01-23T08:11:11.000Z"]`
- `div[title="Fødende fornøyd med tilbudet"] > h2`
- `time[datetime="2026-01-23T08:02:29.000Z"]`
- `div[title="Kraftig medlemsvekst i KrF"] > h2`
- `time[datetime="2026-01-23T06:49:03.000Z"]`
- `div[title="Tiktok solgt i USA"] > h2`
- `time[datetime="2026-01-23T06:46:55.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.t35`
- `article[data-instance="10151714"] > .content > .media > .floatingText`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(18)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19)`
- `.row.large-12.small-12:nth-child(21)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22)`
- `.row.large-12.small-12:nth-child(24)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(26)`
- `.bg-primary`
- `.t24`
- `article[data-instance="10164561"]`
- `span[data-lab-text_size_mobile="16"]`
- `span[data-lab-text_size_mobile="22"]`
- `.row.large-12.small-12:nth-child(29)`
- `.tm26.t40.hasTextPadding`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(32)`
- `.mobile_no_border_color.bg-quaternary.color_mobile_bg-quaternary`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.border_width_5.border_width_mobile_5.border-bg-quaternary`
- `.row.large-12.small-12:nth-child(41)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(42)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(43)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(44)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(47)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(48)`
- `.powered-by`
