# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-01-27T00:40:20.131Z
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
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(17) > .t35`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.tm15.t28`
- `.t28.tm21`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > h5`
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
- **Count:** 88

#### Affected Elements:

- `h1`
- `#notice-10169825 > .content > h2`
- `time[datetime="2026-01-26T21:21:43.000Z"]`
- `div[title="Kina-fabrikk til Norge?"] > h2`
- `time[datetime="2026-01-26T21:19:59.000Z"]`
- `#notice-10169782 > .content > h2`
- `time[datetime="2026-01-26T19:09:19.000Z"]`
- `#notice-10169781 > .content > h2`
- `time[datetime="2026-01-26T19:23:52.000Z"]`
- `div[title="Norsk kvinne vant mot Ice"] > h2`
- `time[datetime="2026-01-26T19:07:04.000Z"]`
- `div[title="USA-hangarskip i Midtøsten"] > h2`
- `time[datetime="2026-01-26T17:59:47.000Z"]`
- `div[title="Nato-sjefen: USA er avgjørende"] > h2`
- `time[datetime="2026-01-26T17:29:26.000Z"]`
- `div[title="Kanye West beklager"] > h2`
- `time[datetime="2026-01-26T17:09:06.000Z"]`
- `div[title="Emiratene sier nei til USA"] > h2`
- `time[datetime="2026-01-26T15:45:50.000Z"]`
- `div[title="Ole Sæter klar for VIF"] > h2`
- `time[datetime="2026-01-26T15:43:52.000Z"]`
- `#notice-10169348 > .content > h2`
- `time[datetime="2026-01-26T13:41:37.000Z"]`
- `div[title="Erklærer valgseier i Myanmar"] > h2`
- `time[datetime="2026-01-26T13:29:30.000Z"]`
- `div[title="Bråstopp i bilsalget"] > h2`
- `time[datetime="2026-01-26T13:18:03.000Z"]`
- `div[title="Minst 18 døde i uvær i USA"] > h2`
- `time[datetime="2026-01-26T15:45:19.000Z"]`
- `#notice-10169001 > .content > h2`
- `time[datetime="2026-01-26T12:08:21.000Z"]`
- `div[title="Ny rektor ved Handelsskolen BI"] > h2`
- `time[datetime="2026-01-26T12:07:45.000Z"]`
- `div[title="Rekordbeslag av kokain"] > h2`
- `div[title="Rekordbeslag av kokain"] > .meta`
- `#notice-10168632 > .content > h2`
- `time[datetime="2026-01-26T09:57:41.000Z"]`
- `#notice-10168621 > .content > h2`
- `time[datetime="2026-01-26T09:56:07.000Z"]`
- `#notice-10168596 > .content > h2`
- `time[datetime="2026-01-26T09:53:59.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
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
- `.row.large-12.small-12:nth-child(18)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19)`
- `.row.large-12.small-12:nth-child(21)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22)`
- `.row.large-12.small-12:nth-child(24)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(28)`
- `article[data-instance="10165603"]`
- `article[data-instance="10163093"] > .content > a[itemprop="url"][rel=""] > .t22.below.kicker`
- `.tm23`
- `span[data-lab-text_size_desktop="65"]`
- `article[data-instance="10162970"]`
- `.tm26.t40.hasTextPadding`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(34)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(36)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(37)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(38)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(43)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(44)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(47)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(48)`
- `.powered-by`
