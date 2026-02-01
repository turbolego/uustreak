# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-02-01T00:47:57.728Z
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
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > .tm36`
- `.t35`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > .tm36`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22) > .tm36`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(55) > h5`
- `.tm15.t28`
- `.tm21.t28`
- `.color_mobile_no_bg_color.tm36`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(59) > .tm21.t42`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(60) > .tm21.t42`

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
- **Count:** 94

#### Affected Elements:

- `h1`
- `div[title="Bondevik møtte Epstein"] > h2`
- `time[datetime="2026-01-31T18:06:24.000Z"]`
- `div[title="Diskuterte Ukraina-krigen"] > h2`
- `time[datetime="2026-01-31T19:11:32.000Z"]`
- `div[title="Deila til Israel"] > h2`
- `time[datetime="2026-01-31T15:57:06.000Z"]`
- `#notice-10178176 > .content > h2`
- `time[datetime="2026-01-31T14:27:26.000Z"]`
- `div[title="Toje avviser Epstein-kontakt"] > h2`
- `time[datetime="2026-01-31T12:50:54.000Z"]`
- `div[title="Nesten 50 drept i Pakistan"] > h2`
- `time[datetime="2026-01-31T09:12:16.000Z"]`
- `#notice-10177966 > .content > h2`
- `time[datetime="2026-01-31T07:56:59.000Z"]`
- `#notice-10177912 > .content > h2`
- `time[datetime="2026-01-30T21:05:18.000Z"]`
- `#notice-10177911 > .content > h2`
- `time[datetime="2026-01-30T20:40:01.000Z"]`
- `#notice-10177888 > .content > h2`
- `time[datetime="2026-01-30T19:44:15.000Z"]`
- `div[title="To skadet i boligbrann"] > h2`
- `time[datetime="2026-01-30T20:42:41.000Z"]`
- `#notice-10177798 > .content > h2`
- `time[datetime="2026-01-30T18:33:44.000Z"]`
- `div[title="Storbrann på Stord"] > h2`
- `time[datetime="2026-01-30T17:56:04.000Z"]`
- `#notice-10177785 > .content > h2`
- `time[datetime="2026-01-30T17:32:27.000Z"]`
- `div[title="Nye Epstein-dokumenter ute"] > h2`
- `time[datetime="2026-01-30T17:31:13.000Z"]`
- `div[title="Mangione slipper dødsstraff"] > h2`
- `time[datetime="2026-01-30T17:58:21.000Z"]`
- `div[title="Norsk-samisk serie nominert"] > h2`
- `time[datetime="2026-01-30T18:55:12.000Z"]`
- `div[title="Krigsveteraner mot Trump"] > h2`
- `time[datetime="2026-01-30T16:33:40.000Z"]`
- `div[title="Guterres advarer om FN-kollaps"] > h2`
- `time[datetime="2026-01-30T19:45:05.000Z"]`
- `div[title="Journalist pågrepet av FBI"] > h2`
- `time[datetime="2026-01-30T20:41:04.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(3)`
- `.row.large-12.small-12:nth-child(6)`
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
- `.row.large-12.small-12:nth-child(18)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(21)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22)`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.tm26.t40.hasTextPadding`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-tags="nyheter"] > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
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
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(53)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(55)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(56)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(57)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(59)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(60)`
- `.powered-by`
