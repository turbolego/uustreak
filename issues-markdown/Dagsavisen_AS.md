# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-11-08T00:33:48.832Z
**URL:** [https://www.dagsavisen.no/#](https://www.dagsavisen.no/#)
**Total Violations:** 12

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

- `.text_singleline.large-4.large-abs-4:nth-child(3) > .singleline`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 3

#### Affected Elements:

- `#offer_a8dfe1abe190392acdc8-0`
- `#offer_a8dfe1abe190392acdc8-0, iframe`
- `iframe[width="100%"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 5

#### Affected Elements:

- `.mobile-collapsed-element > .t56`
- `.t42.tm32`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(47) > .tm21.t42`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > .t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(49) > .tm21.t42`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 4

#### Affected Elements:

- `#offer_a8dfe1abe190392acdc8-0, img`
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

- `#offer_a8dfe1abe190392acdc8-0, a`
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
- **Count:** 83

#### Affected Elements:

- `h1`
- `#notice-10046814 > .content > h2`
- `time[datetime="2025-11-07T19:47:02.000Z"]`
- `div[title="Omfattende tog-problemer"] > h2`
- `time[datetime="2025-11-07T19:02:45.000Z"]`
- `div[title="To nordmenn Grammy-nominert"] > h2`
- `time[datetime="2025-11-07T19:49:53.000Z"]`
- `div[title="UD nedjusterer reiseadvarsel"] > h2`
- `time[datetime="2025-11-07T18:43:22.000Z"]`
- `div[title="Flest Grammy-nominasjoner"] > h2`
- `time[datetime="2025-11-07T18:38:19.000Z"]`
- `#notice-10046716 > .content > h2`
- `time[datetime="2025-11-07T16:46:40.000Z"]`
- `div[title="Rives etter dødsulykke"] > h2`
- `time[datetime="2025-11-07T18:37:06.000Z"]`
- `div[title="En million laks strøk med"] > h2`
- `time[datetime="2025-11-07T16:06:31.000Z"]`
- `div[title="USA uteble fra FN-høring"] > h2`
- `time[datetime="2025-11-07T16:04:11.000Z"]`
- `#notice-10046680 > .content > h2`
- `time[datetime="2025-11-07T16:02:45.000Z"]`
- `#notice-10046679 > .content > h2`
- `time[datetime="2025-11-07T16:01:54.000Z"]`
- `div[title="Dansk aldersgrense på SoMe"] > h2`
- `time[datetime="2025-11-07T16:07:02.000Z"]`
- `div[title="Mistenker forgiftning"] > h2`
- `time[datetime="2025-11-07T13:22:54.000Z"]`
- `#notice-10046438 > .content > h2`
- `time[datetime="2025-11-07T13:17:38.000Z"]`
- `div[title="Nord-Korea testet rakett"] > h2`
- `time[datetime="2025-11-07T12:59:07.000Z"]`
- `#notice-10046119 > .content > h2`
- `time[datetime="2025-11-07T13:39:26.000Z"]`
- `#notice-10046090 > .content > h2`
- `time[datetime="2025-11-07T11:41:36.000Z"]`
- `div[title="Oljearbeidere må slanke seg"] > h2`
- `time[datetime="2025-11-07T11:25:46.000Z"]`
- `div[title="Øker antall ulv som kan skytes"] > h2`
- `time[datetime="2025-11-07T10:54:30.000Z"]`
- `div[title="Jensens Bøfhus legges ned"] > h2`
- `time[datetime="2025-11-07T11:24:10.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `#offer_a8dfe1abe190392acdc8-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(8)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.row.large-12.small-12:nth-child(13)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary:nth-child(14)`
- `.row.large-12.small-12:nth-child(16)`
- `.articlescroller-header`
- `.count_4`
- `.row.large-12.small-12:nth-child(18)`
- `.mobile-collapsed-element > .t56`
- `.count_1`
- `.row.large-12.small-12:nth-child(21)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(22)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary:nth-child(23)`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.page-content > .mobile_no_border_color.bg-tertiary.color_mobile_bg-tertiary`
- `.border-side-top.mobile_border-side-top.has-row-header:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.border-side-top.mobile_border-side-top.has-row-header:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.content > .t29.below.kicker`
- `.content > .t98.headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(41)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(43)`
- `.color_mobile_no_bg_color.row.large-12`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(46)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(47)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(49)`
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
