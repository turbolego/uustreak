# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-12-06T09:46:38.649Z
**URL:** [https://www.dagsavisen.no/#](https://www.dagsavisen.no/#)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `a[href$="mailto:anne@dagsavisen.no"]`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.large-8.large-abs-8.text_singleline > .singleline`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- `#offer_03ddbf85405e7fd453b7-0`
- `#offer_03ddbf85405e7fd453b7-0, iframe`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 7

#### Affected Elements:

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(14) > h5`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(21) > h5`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(23) > h5`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(44) > .t42.tm21`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(47) > .t42.tm21`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `#offer_03ddbf85405e7fd453b7-0, img`

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
- **Count:** 3

#### Affected Elements:

- `#offer_03ddbf85405e7fd453b7-0, a`
- `article[data-instance="9901219"] > .content > a[itemprop="url"][rel=""]`
- `.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 84

#### Affected Elements:

- `h1`
- `#notice-10096647 > .content > h2`
- `#notice-10096647 > .content > .meta`
- `#notice-10096646 > .content > h2`
- `#notice-10096646 > .content > .meta`
- `#notice-10096645 > .content > h2`
- `#notice-10096645 > .content > .meta`
- `#notice-10096644 > .content > h2`
- `#notice-10096644 > .content > .meta`
- `div[title="Julebordgjest falt i sjøen"] > h2`
- `time[datetime="2025-12-05T19:50:34.000Z"]`
- `div[title="Statsbudsjettet vedtatt"] > h2`
- `time[datetime="2025-12-05T20:38:29.000Z"]`
- `#notice-10096560 > .content > h2`
- `time[datetime="2025-12-05T19:42:02.000Z"]`
- `#notice-10096526 > .content > h2`
- `time[datetime="2025-12-05T19:19:41.000Z"]`
- `#notice-10096453 > .content > h2`
- `time[datetime="2025-12-05T18:08:10.000Z"]`
- `div[title="Norsk Tipping totalslaktes"] > h2`
- `time[datetime="2025-12-05T17:01:46.000Z"]`
- `div[title="Malalas Oslo-besøk avlyst"] > h2`
- `time[datetime="2025-12-05T17:00:06.000Z"]`
- `div[title="Steinras knuste campingvogn"] > h2`
- `time[datetime="2025-12-05T14:49:37.000Z"]`
- `#notice-10095961 > .content > h2`
- `time[datetime="2025-12-05T14:50:29.000Z"]`
- `#notice-10094565 > .content > h2`
- `#notice-10094565 > .content > .meta`
- `div[title="Kreml venter på USA-uttalelse"] > h2`
- `div[title="Kreml venter på USA-uttalelse"] > .meta`
- `div[title="Eksplosjon i Göteborg"] > h2`
- `div[title="Eksplosjon i Göteborg"] > .meta`
- `div[title="Tiltalt for Pokémon-innbrudd"] > h2`
- `time[datetime="2025-12-04T20:53:35.000Z"]`
- `div[title="Vekter angrepet av ungdommer "] > h2`
- `time[datetime="2025-12-04T20:20:36.000Z"]`
- `div[title="Færøyene åpner for fri abort"] > h2`
- `time[datetime="2025-12-04T18:28:02.000Z"]`
- `div[title="Blokkerer Snapchat"] > h2`
- `time[datetime="2025-12-04T17:44:35.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `#offer_03ddbf85405e7fd453b7-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.row.large-12.small-12:nth-child(13)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(14)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.row.large-12.small-12:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(21)`
- `.row.large-12.small-12:nth-child(22)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(23)`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(31)`
- `.tm26.t40.font-weight-bold`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(41)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(42)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(44)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(47)`
- `.powered-by`
