# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-11-05T18:47:22.369Z
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

- `.t56.tm39`
- `.tm32.t42`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(43) > .tm21.t42`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > .t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(46) > .tm21.t42`

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
- **Count:** 80

#### Affected Elements:

- `h1`
- `#notice-10042830 > .content > h2`
- `time[datetime="2025-11-05T18:39:11.000Z"]`
- `div[title="Opphever dom mot ekspresident"] > h2`
- `time[datetime="2025-11-05T18:38:05.000Z"]`
- `#notice-10042794 > .content > h2`
- `time[datetime="2025-11-05T17:24:42.000Z"]`
- `div[title="To elever fengslet"] > h2`
- `time[datetime="2025-11-05T17:12:02.000Z"]`
- `div[title="Putin vurderer nye atomtester"] > h2`
- `time[datetime="2025-11-05T17:08:29.000Z"]`
- `#notice-10042749 > .content > h2`
- `time[datetime="2025-11-05T16:48:24.000Z"]`
- `div[title="Fifa oppretter egen fredspris"] > h2`
- `time[datetime="2025-11-05T16:44:57.000Z"]`
- `div[title="Frankrike blokkerer Shein"] > h2`
- `time[datetime="2025-11-05T14:40:26.000Z"]`
- `#notice-10042373 > .content > h2`
- `time[datetime="2025-11-05T13:58:07.000Z"]`
- `div[title="Fugleinfluensa sprer seg"] > h2`
- `time[datetime="2025-11-05T13:57:18.000Z"]`
- `#notice-10042043 > .content > h2`
- `time[datetime="2025-11-05T14:04:57.000Z"]`
- `#notice-10042030 > .content > h2`
- `time[datetime="2025-11-05T14:08:06.000Z"]`
- `div[title="11 døde i brann på aldershjem"] > h2`
- `time[datetime="2025-11-05T12:36:27.000Z"]`
- `div[title="Sykepleier dømt for ti drap"] > h2`
- `time[datetime="2025-11-05T12:35:01.000Z"]`
- `#notice-10041595 > .content > h2`
- `time[datetime="2025-11-05T11:30:31.000Z"]`
- `#notice-10041552 > .content > h2`
- `time[datetime="2025-11-05T11:24:17.000Z"]`
- `div[title="Lyse varsler nedbemanning"] > h2`
- `time[datetime="2025-11-05T11:23:11.000Z"]`
- `div[title="Ukraina med i forsvarsallianse"] > h2`
- `time[datetime="2025-11-05T14:08:35.000Z"]`
- `div[title="40 drept i angrep i Sudan"] > h2`
- `time[datetime="2025-11-05T14:09:03.000Z"]`
- `#notice-10040596 > .content > h2`
- `time[datetime="2025-11-05T14:10:03.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `#offer_a8dfe1abe190392acdc8-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.row.large-12.small-12:nth-child(13)`
- `.row.large-12.small-12:nth-child(14)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary:nth-child(16)`
- `.row.large-12.small-12:nth-child(17)`
- `.articlescroller-header`
- `.count_4`
- `.row.large-12.small-12:nth-child(19)`
- `.t56.tm39`
- `.count_1`
- `.row.large-12.small-12:nth-child(22)`
- `.row.large-12.small-12:nth-child(23)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.mobile_no_border_color.bg-tertiary.color_mobile_bg-tertiary`
- `.border-side-top.mobile_border-side-top.has-row-header:nth-child(33)`
- `.content > .t29.below.kicker`
- `.t98`
- `.border-side-top.mobile_border-side-top.has-row-header:nth-child(36)`
- `.row.large-12.small-12:nth-child(38)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(39)`
- `.color_mobile_no_bg_color.row.large-12`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(42)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(43)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(46)`
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
