# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-12-03T00:37:23.958Z
**URL:** [https://www.dagsavisen.no/#](https://www.dagsavisen.no/#)
**Total Violations:** 7

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.large-8 > .singleline`

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

- `.border_width_12.border_width_mobile_12.bg-tertiary:nth-child(13) > .tm36`
- `.border_width_12.border_width_mobile_12.bg-tertiary:nth-child(19) > .tm36`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22) > .tm36`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > .tm36`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(43) > .t42.tm21`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(46) > .t42.tm21`

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
- **Count:** 4

#### Affected Elements:

- `#offer_03ddbf85405e7fd453b7-0, a`
- `article[data-instance="9901219"] > .content > a[itemprop="url"][rel=""]`
- `.font-PTSans.singleline.secondary > a[href$="mailto:anne@dagsavisen.no"]`
- `.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 83

#### Affected Elements:

- `h1`
- `#notice-10088837 > .content > h2`
- `#notice-10088837 > .content > .meta`
- `div[title="Popstjerne med klar beskjed"] > h2`
- `time[datetime="2025-12-02T19:01:33.000Z"]`
- `#notice-10088688 > .content > h2`
- `time[datetime="2025-12-02T18:49:00.000Z"]`
- `div[title="Gruppemøte i MDG i kveld"] > h2`
- `time[datetime="2025-12-02T19:13:40.000Z"]`
- `div[title="Norsk duo på album-toppliste"] > h2`
- `time[datetime="2025-12-02T18:00:37.000Z"]`
- `#notice-10088443 > .content > h2`
- `time[datetime="2025-12-02T15:19:32.000Z"]`
- `div[title="Togstans på Hovedbanen"] > h2`
- `time[datetime="2025-12-02T17:35:15.000Z"]`
- `div[title="Prada kjøper rivalen Versace"] > h2`
- `time[datetime="2025-12-02T13:25:11.000Z"]`
- `#notice-10087575 > .content > h2`
- `#notice-10087575 > .content > .meta`
- `div[title="Witkoff og Kushner i Moskva"] > h2`
- `div[title="Witkoff og Kushner i Moskva"] > .meta`
- `div[title="«Propaganda»-låt blir kunst"] > h2`
- `time[datetime="2025-12-02T09:36:16.000Z"]`
- `#notice-10086780 > .content > h2`
- `#notice-10086780 > .content > .meta`
- `div[title="Enighet om osloskolen"] > h2`
- `div[title="Enighet om osloskolen"] > .meta`
- `div[title="Maduro: Vil ikke ha slavefred"] > h2`
- `div[title="Maduro: Vil ikke ha slavefred"] > .meta`
- `div[title="Minst 12 døde i jordskred"] > h2`
- `time[datetime="2025-12-01T20:33:00.000Z"]`
- `div[title="Døde etter trafokrasj"] > h2`
- `time[datetime="2025-12-01T19:24:07.000Z"]`
- `div[title="Omkom etter togpåkjørsel"] > h2`
- `time[datetime="2025-12-01T19:17:06.000Z"]`
- `#notice-10086593 > .content > h2`
- `time[datetime="2025-12-01T19:15:36.000Z"]`
- `#notice-10086592 > .content > h2`
- `time[datetime="2025-12-01T19:02:24.000Z"]`
- `#notice-10086560 > .content > h2`
- `time[datetime="2025-12-01T18:06:27.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `#offer_03ddbf85405e7fd453b7-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.border_width_12.border_width_mobile_12.bg-tertiary:nth-child(13)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.row.large-12.small-12:nth-child(17)`
- `.row.large-12.small-12:nth-child(18)`
- `.border_width_12.border_width_mobile_12.bg-tertiary:nth-child(19)`
- `.row.large-12.small-12:nth-child(21)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22)`
- `.row.large-12.small-12:nth-child(23)`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(29)`
- `.hide-border > .t40.font-weight-bold.m-font-weight-bold`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-section="sport"][data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"] > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.bg-primary`
- `.row.large-12.small-12:nth-child(33)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(34)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(41)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(46)`
- `.powered-by`
