# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-11-22T00:42:31.423Z
**URL:** [https://www.dagsavisen.no/#](https://www.dagsavisen.no/#)
**Total Violations:** 13

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 18

#### Affected Elements:

- `iframe[width="100%"], li:nth-child(1)`
- `iframe[width="100%"], li:nth-child(2)`
- `iframe[width="100%"], li:nth-child(3)`
- `iframe[width="100%"], li:nth-child(4)`
- `iframe[width="100%"], li:nth-child(5)`
- `iframe[width="100%"], li:nth-child(6)`
- `iframe[width="100%"], li:nth-child(7)`
- `iframe[width="100%"], li:nth-child(8)`
- `iframe[width="100%"], li:nth-child(9)`
- `iframe[width="100%"], li:nth-child(10)`
- `iframe[width="100%"], li:nth-child(11)`
- `iframe[width="100%"], li:nth-child(12)`
- `iframe[width="100%"], li:nth-child(13)`
- `iframe[width="100%"], li:nth-child(14)`
- `iframe[width="100%"], li:nth-child(15)`
- `iframe[width="100%"], li:nth-child(16)`
- `iframe[width="100%"], li:nth-child(17)`
- `iframe[width="100%"], li:nth-child(18)`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `iframe[width="100%"], .iXPhXq`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `a:nth-child(8)`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.text_singleline.large-4.large-abs-4:nth-child(3) > .singleline`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[width="100%"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 7

#### Affected Elements:

- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(18) > .t23`
- `.t56`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(27) > .t24`
- `.tm32.t42`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(36) > .tm21.t42`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > .t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(38) > .tm21.t42`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 3

#### Affected Elements:

- `li:nth-child(1) > a > img[loading="lazy"]`
- `li:nth-child(2) > a > img[loading="lazy"]`
- `li:nth-child(3) > a > img[loading="lazy"]`

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

- `iframe[width="100%"], .klhHFW`
- `article[data-instance="9901219"] > .content > a[itemprop="url"][rel=""]`
- `a[data-lab-text_color_desktop=""]`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[width="100%"], ul`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 79

#### Affected Elements:

- `h1`
- `div[title="Støre i Ukraina-møte "] > h2`
- `div[title="Støre i Ukraina-møte "] > .meta`
- `#notice-10070670 > .content > h2`
- `#notice-10070670 > .content > .meta`
- `#notice-10070435 > .content > h2`
- `#notice-10070435 > .content > .meta`
- `div[title="Kallas: – Farlig for oss alle"] > h2`
- `div[title="Kallas: – Farlig for oss alle"] > .meta`
- `#notice-10069659 > .content > h2`
- `time[datetime="2025-11-21T11:28:01.000Z"]`
- `#notice-10069650 > .content > h2`
- `time[datetime="2025-11-21T11:29:16.000Z"]`
- `#notice-10069566 > .content > h2`
- `time[datetime="2025-11-21T12:12:33.000Z"]`
- `div[title="Eurovision får nye regler"] > h2`
- `time[datetime="2025-11-21T11:10:34.000Z"]`
- `div[title="Politiet avfyrte varselskudd"] > h2`
- `time[datetime="2025-11-21T10:00:17.000Z"]`
- `#notice-10069201 > .content > h2`
- `time[datetime="2025-11-21T09:25:20.000Z"]`
- `#notice-10069061 > .content > h2`
- `time[datetime="2025-11-21T08:36:08.000Z"]`
- `div[title="Grizzlybjørn angrep elever"] > h2`
- `time[datetime="2025-11-21T08:34:47.000Z"]`
- `div[title="Drept i eksplosjon på fabrikk"] > h2`
- `time[datetime="2025-11-21T08:15:24.000Z"]`
- `#notice-10068995 > .content > h2`
- `time[datetime="2025-11-21T08:03:23.000Z"]`
- `#notice-10068983 > .content > h2`
- `time[datetime="2025-11-21T07:53:40.000Z"]`
- `#notice-10068947 > .content > h2`
- `time[datetime="2025-11-21T07:42:38.000Z"]`
- `div[title="Japan godkjente krisepakke"] > h2`
- `time[datetime="2025-11-21T06:15:54.000Z"]`
- `#notice-10068879 > .content > h2`
- `time[datetime="2025-11-21T06:14:41.000Z"]`
- `div[title="Vil subsidiere industristrøm"] > h2`
- `time[datetime="2025-11-21T06:14:05.000Z"]`
- `div[title="Nye lokaltog kan bli forsinket"] > h2`
- `time[datetime="2025-11-21T09:02:42.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.tm19`
- `.t55`
- `article[data-instance="10053926"]`
- `.row.large-12.small-12:nth-child(13)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary:nth-child(14)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(16)`
- `.articlescroller-header`
- `.count_4`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(18)`
- `.t56`
- `.count_1`
- `.row.large-12.small-12:nth-child(21)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(22)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary:nth-child(23)`
- `.row.large-12.small-12:nth-child(24)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(26)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(27)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(29)`
- `.tm26`
- `a[href="/kommentar/nav-ma-ga/10067330"] > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `a[href="/kommentar/fokk-eu/10065590"] > h4`
- `.border-side-top.mobile_border-side-top.has-row-header:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.border-side-top.mobile_border-side-top.has-row-header:nth-child(34)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(36)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(38)`
- `.powered-by`

### [role="img"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] elements have alternative text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `iframe[width="100%"], .ShareControl__ShareIcon-sc-1pwe6vd-0`
- `iframe[width="100%"], .SubscribeLink__PlusIcon-sc-q4x3v7-0`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `iframe[width="100%"], ul`
