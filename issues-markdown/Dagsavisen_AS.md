# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-01-11T00:45:55.856Z
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

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(12) > .t40`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(18) > .t40`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(21) > .t40`
- `.tm15`
- `.tm21.t28`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > .t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(47) > .t42.tm21`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > .t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(49) > .t42.tm21`

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
- **Count:** 84

#### Affected Elements:

- `h1`
- `div[title="Dobiet elsparkesykkel-skader"] > h2`
- `time[datetime="2026-01-10T18:48:47.000Z"]`
- `div[title="Skal ha tatt israelsk spion"] > h2`
- `time[datetime="2026-01-10T18:45:20.000Z"]`
- `div[title="Trump med olje-ordre"] > h2`
- `time[datetime="2026-01-10T18:44:36.000Z"]`
- `div[title="Mann siktet for voldtekt"] > h2`
- `time[datetime="2026-01-10T16:27:07.000Z"]`
- `div[title="Nytt EM-gull til Wiklund"] > h2`
- `time[datetime="2026-01-10T16:05:11.000Z"]`
- `div[title="Flere døde i vinterstorm"] > h2`
- `time[datetime="2026-01-10T15:17:22.000Z"]`
- `div[title="Historisk få fikk asyl"] > h2`
- `time[datetime="2026-01-10T15:14:53.000Z"]`
- `div[title="Migrant-båt sank"] > h2`
- `time[datetime="2026-01-10T15:14:11.000Z"]`
- `div[title="Sterk norsk stafett"] > h2`
- `time[datetime="2026-01-10T15:13:18.000Z"]`
- `div[title="Norsk hattrick i FA-cupen"] > h2`
- `time[datetime="2026-01-10T15:10:06.000Z"]`
- `div[title="Hagen suveren "] > h2`
- `time[datetime="2026-01-10T15:09:04.000Z"]`
- `div[title="Norsk opptur – Vonn vant"] > h2`
- `time[datetime="2026-01-10T15:08:28.000Z"]`
- `div[title="Oftebro med karrierebeste"] > h2`
- `time[datetime="2026-01-10T15:07:39.000Z"]`
- `div[title="Seieren glapp for Uldal"] > h2`
- `time[datetime="2026-01-10T15:07:09.000Z"]`
- `div[title="Sjokkexit for FA-cupmesteren"] > h2`
- `time[datetime="2026-01-10T14:17:08.000Z"]`
- `div[title="Snoket i pasientjournal"] > h2`
- `time[datetime="2026-01-10T11:49:44.000Z"]`
- `div[title="600.000 i bot for ruskjøring"] > h2`
- `time[datetime="2026-01-10T11:48:46.000Z"]`
- `div[title="Kyiv: Strøm på vei tilbake"] > h2`
- `div[title="Kyiv: Strøm på vei tilbake"] > .meta`
- `#notice-10143264 > .content > h2`
- `#notice-10143264 > .content > .meta`
- `div[title="Stor vannlekkasje i Oslo"] > h2`
- `div[title="Stor vannlekkasje i Oslo"] > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(12)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.row.large-12.small-12:nth-child(16)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(17)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(21)`
- `.row.large-12.small-12:nth-child(23)`
- `.bg-primary`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.tm26.t40.hasTextPadding`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-tags="nyheter"] > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(39)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(42)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(43)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(44)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(47)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(49)`
- `.powered-by`
