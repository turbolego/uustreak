# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-01-23T00:39:52.472Z
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

- `.font-PTSans.singleline.secondary > a:nth-child(9)`

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
- `.t24`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > .tm36`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(17) > .t35`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > .tm36`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22) > .tm36`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(37) > h5`
- `.tm15`
- `.t28.tm21.align-left`
- `.color_mobile_no_bg_color.tm36`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(42) > .t42.tm21`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(43) > .t42.tm21`

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
- **Count:** 83

#### Affected Elements:

- `h1`
- `#notice-10164780 > .content > h2`
- `#notice-10164780 > .content > .meta`
- `div[title="Trump saksøker JPMorgan "] > h2`
- `div[title="Trump saksøker JPMorgan "] > .meta`
- `#notice-10164637 > .content > h2`
- `#notice-10164637 > .content > .meta`
- `#notice-10164364 > .content > h2`
- `#notice-10164364 > .content > .meta`
- `#notice-10164248 > .content > h2`
- `#notice-10164248 > .content > .meta`
- `#notice-10164227 > .content > h2`
- `#notice-10164227 > .content > .meta`
- `div[title="Evakuert fra gondol i Trysil"] > h2`
- `time[datetime="2026-01-22T12:42:06.000Z"]`
- `div[title="– Rafah-overgang åpner"] > h2`
- `time[datetime="2026-01-22T12:15:41.000Z"]`
- `div[title="Nok en togulykke i Spania"] > h2`
- `time[datetime="2026-01-22T12:07:40.000Z"]`
- `div[title="– Europa fikk Trump til å snu"] > h2`
- `time[datetime="2026-01-22T11:39:23.000Z"]`
- `div[title="Mer luftvern til Ukraina"] > h2`
- `time[datetime="2026-01-22T11:18:27.000Z"]`
- `#notice-10163507 > .content > h2`
- `time[datetime="2026-01-22T11:12:27.000Z"]`
- `#notice-10163504 > .content > h2`
- `time[datetime="2026-01-22T11:17:35.000Z"]`
- `div[title="Britisk nei til Trump"] > h2`
- `time[datetime="2026-01-22T09:15:10.000Z"]`
- `div[title="Vy øker billettprisene"] > h2`
- `time[datetime="2026-01-22T08:49:39.000Z"]`
- `#notice-10162922 > .content > h2`
- `time[datetime="2026-01-22T08:48:21.000Z"]`
- `div[title="Mange feil på Tesla-modell"] > h2`
- `time[datetime="2026-01-22T09:10:18.000Z"]`
- `div[title="Ap-statsråder tier om EU"] > h2`
- `time[datetime="2026-01-22T08:39:24.000Z"]`
- `div[title="Varsler grep mot skole-KI"] > h2`
- `time[datetime="2026-01-22T08:35:24.000Z"]`
- `div[title="Putin om Grønland"] > h2`
- `time[datetime="2026-01-22T09:59:39.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.t24`
- `article[data-instance="10164561"]`
- `span[data-lab-text_size_mobile="16"]`
- `.tm22`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(17) > .t35`
- `article[data-instance="10151714"] > .content > .media > .floatingText`
- `.mobile_no_border_color.hasContentPadding.mobile-hasContentPadding:nth-child(18)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19)`
- `.row.large-12.small-12:nth-child(21)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22)`
- `.row.large-12.small-12:nth-child(24)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.tm26.t40.hasTextPadding`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-section="debatt"][data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"] > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.border_width_5.border_width_mobile_5.border-bg-quaternary`
- `.row.large-12.small-12:nth-child(36)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(37)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(38)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(39)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(42)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(43)`
- `.powered-by`
