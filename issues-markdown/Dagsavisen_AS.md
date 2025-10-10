# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-10-10T00:34:45.149Z
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
- **Count:** 2

#### Affected Elements:

- `.secondary`
- `a[href$="mailto:anne@dagsavisen.no"]`

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
- **Count:** 5

#### Affected Elements:

- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(17) > .t42`
- `.mobile-collapsed-element > h5`
- `.border-side-top.mobile_border-side-top.has-row-header:nth-child(33) > .t42`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(38) > .t42`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`

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
- **Count:** 92

#### Affected Elements:

- `h1`
- `div[title="Norli får ny toppsjef"] > h2`
- `time[datetime="2025-10-09T19:03:35.000Z"]`
- `#notice-10000144 > .content > h2`
- `time[datetime="2025-10-09T18:44:13.000Z"]`
- `div[title="Vikinggravfelt skadet i uværet"] > h2`
- `time[datetime="2025-10-09T17:52:28.000Z"]`
- `div[title="Svømmere stjal kosmetikk"] > h2`
- `time[datetime="2025-10-09T17:06:47.000Z"]`
- `div[title="Utvider flyforbud i Oslo"] > h2`
- `time[datetime="2025-10-09T15:52:56.000Z"]`
- `div[title="Vurderer færre elsparkesykler"] > h2`
- `time[datetime="2025-10-09T15:52:02.000Z"]`
- `#notice-9999893 > .content > h2`
- `time[datetime="2025-10-09T15:14:06.000Z"]`
- `div[title="Ensomhetspartiet avvikles"] > h2`
- `time[datetime="2025-10-09T13:48:21.000Z"]`
- `#notice-9999641 > .content > h2`
- `time[datetime="2025-10-09T13:04:06.000Z"]`
- `div[title="Dagdrømte og kjørte av veien"] > h2`
- `time[datetime="2025-10-09T13:02:46.000Z"]`
- `#notice-9999512 > .content > h2`
- `time[datetime="2025-10-09T12:28:26.000Z"]`
- `div[title="Norge tar dronegrep"] > h2`
- `time[datetime="2025-10-09T11:00:37.000Z"]`
- `div[title="Ærespris til Liv Ullmann"] > h2`
- `time[datetime="2025-10-09T10:59:25.000Z"]`
- `#notice-9998893 > .content > h2`
- `time[datetime="2025-10-09T10:16:10.000Z"]`
- `#notice-9998562 > .content > h2`
- `time[datetime="2025-10-09T08:34:52.000Z"]`
- `div[title="Gaza-avtalen: Avgjørende"] > h2`
- `time[datetime="2025-10-09T06:23:11.000Z"]`
- `#notice-9998275 > .content > h2`
- `time[datetime="2025-10-09T06:20:57.000Z"]`
- `div[title="Ingen vekst i utleieprisene"] > h2`
- `time[datetime="2025-10-09T05:58:30.000Z"]`
- `div[title="Norges U20-lag skrev historie"] > h2`
- `time[datetime="2025-10-09T05:26:48.000Z"]`
- `div[title="Elleve ran på samme kveld"] > h2`
- `time[datetime="2025-10-09T12:26:36.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `#offer_a8dfe1abe190392acdc8-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary:nth-child(13)`
- `.row.large-12.small-12:nth-child(14)`
- `.articlescroller-header`
- `.count_4`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(17)`
- `.mobile-collapsed-element > h5`
- `.count_1`
- `.row.large-12.small-12:nth-child(19)`
- `.row.large-12.small-12:nth-child(21)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary:nth-child(22)`
- `.row.large-12.small-12:nth-child(23)`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.mobile_no_border_color.bg-tertiary.color_mobile_bg-tertiary`
- `.border-side-top.mobile_border-side-top.has-row-header:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.border-side-top.mobile_border-side-top.has-row-header:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(42)`
- `.row.large-12.small-12:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.row.large-12.small-12:nth-child(48)`
- `.row.large-12.small-12:nth-child(49)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(53)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(54)`
- `.row.large-12.small-12:nth-child(55)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(56)`
- `.color_mobile_no_bg_color.row.large-12`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
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
