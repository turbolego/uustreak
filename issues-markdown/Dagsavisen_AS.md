# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-01-22T00:43:18.414Z
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
- **Count:** 11

#### Affected Elements:

- `.border_width_0 > h5`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > .tm36`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(17) > .t35`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > .tm36`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22) > .tm36`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.tm15`
- `.t28.tm21.align-left`
- `.tm36.color_mobile_no_bg_color`
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
- `div[title="Nielsen møter pressen torsdag"] > h2`
- `div[title="Nielsen møter pressen torsdag"] > .meta`
- `#notice-10162621 > .content > h2`
- `#notice-10162621 > .content > .meta`
- `#notice-10162561 > .content > h2`
- `#notice-10162561 > .content > .meta`
- `#notice-10162560 > .content > h2`
- `#notice-10162560 > .content > .meta`
- `#notice-10162416 > .content > h2`
- `#notice-10162416 > .content > .meta`
- `#notice-10161958 > .content > h2`
- `#notice-10161958 > .content > .meta`
- `div[title="USA blandet seg i Le Pen-sak"] > h2`
- `time[datetime="2026-01-21T10:56:42.000Z"]`
- `div[title="Vil ha Nato-øvelse på Grønland"] > h2`
- `time[datetime="2026-01-21T10:07:05.000Z"]`
- `div[title="Kina skeptisk til Trump-råd"] > h2`
- `time[datetime="2026-01-21T09:32:33.000Z"]`
- `div[title="Svensk nei til Trump"] > h2`
- `time[datetime="2026-01-21T08:52:05.000Z"]`
- `div[title="Gjenopptar returer til Syria"] > h2`
- `time[datetime="2026-01-21T08:50:52.000Z"]`
- `div[title="Storaksjon mot syntetisk narko"] > h2`
- `time[datetime="2026-01-21T08:37:20.000Z"]`
- `#notice-10160546 > .content > h2`
- `time[datetime="2026-01-21T07:44:13.000Z"]`
- `div[title="Psykiatri-pasienter på gangen"] > h2`
- `time[datetime="2026-01-21T07:42:54.000Z"]`
- `#notice-10160542 > .content > h2`
- `time[datetime="2026-01-21T07:41:28.000Z"]`
- `div[title="Netanyahu sier ja til Trump"] > h2`
- `time[datetime="2026-01-21T07:04:59.000Z"]`
- `div[title="USAs omdømme stuper"] > h2`
- `time[datetime="2026-01-21T07:40:18.000Z"]`
- `div[title="Prinsessen fyller 22 år"] > h2`
- `time[datetime="2026-01-21T06:47:29.000Z"]`
- `div[title="Ukraina/Russland: Flere drept"] > h2`
- `time[datetime="2026-01-21T06:44:09.000Z"]`
- `div[title="Trumps fly måtte snu"] > h2`
- `time[datetime="2026-01-21T07:39:22.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(6)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(7)`
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
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.tm26.t40.font-weight-bold`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-section="debatt"][data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"] > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(32)`
- `.border_width_5.border_width_mobile_5.border-bg-quaternary`
- `.row.large-12.small-12:nth-child(34)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(37)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(38)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(41)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(42)`
- `.powered-by`
