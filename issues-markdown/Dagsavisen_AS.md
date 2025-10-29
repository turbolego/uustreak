# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-10-29T00:40:44.723Z
**URL:** [https://www.dagsavisen.no/#](https://www.dagsavisen.no/#)
**Total Violations:** 12

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-allowed-role?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 1

#### Affected Elements:

- `.text_singleline.large-3.large-abs-3:nth-child(3) > .t16.font-PTSerif.singleline > a:nth-child(8)`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.text_singleline.large-4.large-abs-4:nth-child(3) > .singleline`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2
- **Count:** 3

#### Affected Elements:

- `#offer_a8dfe1abe190392acdc8-0`
- `#offer_a8dfe1abe190392acdc8-0, iframe`
- `iframe[width="100%"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 6

#### Affected Elements:

- `.tm39.t56.tertiary`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary > .t24`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(33) > .tm21.t42`
- `.t42.tm32`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > .t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(38) > .tm21.t42`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT
- **Count:** 4

#### Affected Elements:

- `#offer_a8dfe1abe190392acdc8-0, img`
- `li:nth-child(1) > a > img[loading="lazy"]`
- `li:nth-child(2) > a > img[loading="lazy"]`
- `li:nth-child(3) > a > img[loading="lazy"]`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.mainMenu`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 3

#### Affected Elements:

- `#offer_a8dfe1abe190392acdc8-0, a`
- `a[href="/kultur/hjernetrim/9901219"]`
- `a[data-lab-text_color_desktop=""]`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[width="100%"], ul`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 73

#### Affected Elements:

- `h1`
- `div[title=" Rolf Smedvig Hodne er død"] > h2`
- `div[title=" Rolf Smedvig Hodne er død"] > .meta`
- `#notice-10030151 > .content > h2`
- `#notice-10030151 > .content > .meta`
- `#notice-10030120 > .content > h2`
- `#notice-10030120 > .content > .meta`
- `#notice-10030096 > .content > h2`
- `#notice-10030096 > .content > .meta`
- `#notice-10030095 > .content > h2`
- `#notice-10030095 > .content > .meta`
- `div[title="Tilbakekaller tiramisu"] > h2`
- `div[title="Tilbakekaller tiramisu"] > .meta`
- `#notice-10029607 > .content > h2`
- `time[datetime="2025-10-28T13:04:17.000Z"]`
- `div[title="Zelenskyj ber om press mot Xi"] > h2`
- `time[datetime="2025-10-28T12:38:57.000Z"]`
- `#notice-10029468 > .content > h2`
- `time[datetime="2025-10-28T12:18:34.000Z"]`
- `div[title="– Norge er avgjørende for EU"] > h2`
- `time[datetime="2025-10-28T11:05:42.000Z"]`
- `#notice-10029221 > .content > h2`
- `time[datetime="2025-10-28T13:17:57.000Z"]`
- `#notice-10029153 > .content > h2`
- `time[datetime="2025-10-28T11:04:24.000Z"]`
- `#notice-10029035 > .content > h2`
- `time[datetime="2025-10-28T10:03:01.000Z"]`
- `div[title="Trekker hamburger med brød"] > h2`
- `time[datetime="2025-10-28T09:24:59.000Z"]`
- `div[title="Rimmen lager kvinnemagasin"] > h2`
- `time[datetime="2025-10-28T09:08:08.000Z"]`
- `#notice-10028795 > .content > h2`
- `time[datetime="2025-10-28T10:17:32.000Z"]`
- `div[title="Savnet i to år – funnet død"] > h2`
- `time[datetime="2025-10-28T09:26:30.000Z"]`
- `div[title="Musk lanserer «Grokipedia»"] > h2`
- `time[datetime="2025-10-28T08:46:37.000Z"]`
- `div[title="1700 mm regn på ett døgn"] > h2`
- `time[datetime="2025-10-28T07:48:30.000Z"]`
- `#notice-10028451 > .content > h2`
- `time[datetime="2025-10-28T14:20:02.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(6)`
- `#offer_a8dfe1abe190392acdc8-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.color_mobile_bg-primary`
- `.row.large-12.small-12:nth-child(12)`
- `.row.large-12.small-12:nth-child(13)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary:nth-child(14)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(16)`
- `.articlescroller-header`
- `.count_4`
- `.row.large-12.small-12:nth-child(18)`
- `.tm39.t56.tertiary`
- `.count_1`
- `.row.large-12.small-12:nth-child(21)`
- `.row.large-12.small-12:nth-child(22)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary:nth-child(23)`
- `.row.large-12.small-12:nth-child(24)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(26)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(28)`
- `.mobile_no_border_color.bg-tertiary.color_mobile_bg-tertiary`
- `.border-side-top.mobile_border-side-top.has-row-header:nth-child(32)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(33)`
- `.border-side-top.mobile_border-side-top.has-row-header:nth-child(34)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(36)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(38)`
- `.powered-by`

### [role="img"] elements must have an alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] elements have alternative text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT
- **Count:** 2

#### Affected Elements:

- `iframe[width="100%"], .ShareControl__ShareIcon-sc-1pwe6vd-0`
- `iframe[width="100%"], .SubscribeLink__PlusIcon-sc-q4x3v7-0`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3
- **Count:** 1

#### Affected Elements:

- `iframe[width="100%"], ul`
