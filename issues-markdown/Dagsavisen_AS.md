# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-12-08T00:37:05.012Z
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
- **Count:** 8

#### Affected Elements:

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(12) > h5`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(18) > h5`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(21) > h5`
- `.t28.tm21`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(51) > .tm21.t42`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52) > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(53) > .tm21.t42`

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
- **Count:** 89

#### Affected Elements:

- `h1`
- `#notice-10097702 > .content > h2`
- `#notice-10097702 > .content > .meta`
- `#notice-10097681 > .content > h2`
- `#notice-10097681 > .content > .meta`
- `#notice-10097680 > .content > h2`
- `#notice-10097680 > .content > .meta`
- `div[title="Venezuela: Flere nye soldater"] > h2`
- `time[datetime="2025-12-07T15:51:09.000Z"]`
- `div[title="Mann i 30-årene funnet død"] > h2`
- `time[datetime="2025-12-07T15:49:12.000Z"]`
- `div[title="Brann i brakker er slukket"] > h2`
- `time[datetime="2025-12-07T15:01:12.000Z"]`
- `div[title="Rekordmange pakker fra Kina"] > h2`
- `time[datetime="2025-12-07T10:13:37.000Z"]`
- `div[title="Flere drept i droneangrep"] > h2`
- `time[datetime="2025-12-07T09:33:57.000Z"]`
- `div[title="Benin: Avverget militærkupp"] > h2`
- `time[datetime="2025-12-07T12:06:55.000Z"]`
- `#notice-10097205 > .content > h2`
- `time[datetime="2025-12-07T09:30:23.000Z"]`
- `div[title="Avbrøt flytur etter rar lukt"] > h2`
- `time[datetime="2025-12-06T18:40:30.000Z"]`
- `#notice-10097100 > .content > h2`
- `time[datetime="2025-12-06T17:12:00.000Z"]`
- `div[title="Advarer mot pakketyver"] > h2`
- `time[datetime="2025-12-06T16:52:01.000Z"]`
- `#notice-10097037 > .content > h2`
- `time[datetime="2025-12-06T15:44:27.000Z"]`
- `#notice-10097034 > .content > h2`
- `time[datetime="2025-12-06T15:17:04.000Z"]`
- `#notice-10096998 > .content > h2`
- `time[datetime="2025-12-06T14:43:15.000Z"]`
- `div[title="Siktet for forgiftning"] > h2`
- `time[datetime="2025-12-06T15:18:26.000Z"]`
- `div[title="Havvindmøller truer flaggermus"] > h2`
- `div[title="Havvindmøller truer flaggermus"] > .meta`
- `div[title="Sør-Afrika: 11 drept i skyting"] > h2`
- `div[title="Sør-Afrika: 11 drept i skyting"] > .meta`
- `#notice-10096647 > .content > h2`
- `#notice-10096647 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `#offer_03ddbf85405e7fd453b7-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(12)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.row.large-12.small-12:nth-child(16)`
- `.row.large-12.small-12:nth-child(17)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(21)`
- `.row.large-12.small-12:nth-child(22)`
- `.row.large-12.small-12:nth-child(23)`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(28)`
- `.tm26.t40.hasTextPadding`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(42)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(47)`
- `.row.large-12.small-12:nth-child(48)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(51)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(53)`
- `.powered-by`
