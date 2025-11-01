# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-11-01T00:43:27.328Z
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
- **Count:** 5

#### Affected Elements:

- `.t56.tm39`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(32) > .tm21`
- `.border-side-top.mobile_border-side-top.has-row-header:nth-child(33) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > .t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(37) > .tm21`

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
- **Count:** 72

#### Affected Elements:

- `h1`
- `#notice-10035969 > .content > h2`
- `#notice-10035969 > .content > .meta`
- `div[title="– Må fortsette med matordning"] > h2`
- `div[title="– Må fortsette med matordning"] > .meta`
- `#notice-10035843 > .content > h2`
- `#notice-10035843 > .content > .meta`
- `div[title="Brann over i Fredrikstad"] > h2`
- `div[title="Brann over i Fredrikstad"] > .meta`
- `#notice-10035819 > .content > h2`
- `#notice-10035819 > .content > .meta`
- `#notice-10035781 > .content > h2`
- `#notice-10035781 > .content > .meta`
- `div[title="Jetten erklærer valgseier"] > h2`
- `div[title="Jetten erklærer valgseier"] > .meta`
- `div[title="Dressing tilbakekalles"] > h2`
- `time[datetime="2025-10-31T13:09:07.000Z"]`
- `div[title="Chilisaus trekkes"] > h2`
- `time[datetime="2025-10-31T13:05:19.000Z"]`
- `div[title="Byrå: D66 vant i Nederland"] > h2`
- `time[datetime="2025-10-31T12:00:37.000Z"]`
- `div[title="Lovforslag om oljepionerene"] > h2`
- `time[datetime="2025-10-31T11:58:29.000Z"]`
- `#notice-10035177 > .content > h2`
- `time[datetime="2025-10-31T11:24:42.000Z"]`
- `#notice-10035091 > .content > h2`
- `time[datetime="2025-10-31T10:44:10.000Z"]`
- `div[title="Ingen raplåter på hitlistene"] > h2`
- `time[datetime="2025-10-31T09:36:13.000Z"]`
- `div[title="Ny bok om Høiby"] > h2`
- `time[datetime="2025-10-31T12:29:15.000Z"]`
- `#notice-10034755 > .content > h2`
- `time[datetime="2025-10-31T08:50:49.000Z"]`
- `#notice-10034628 > .content > h2`
- `time[datetime="2025-10-31T08:10:07.000Z"]`
- `div[title="Eks Nato-sjef refser Europa"] > h2`
- `time[datetime="2025-10-31T07:21:30.000Z"]`
- `div[title="Vil senke fartsgrensen"] > h2`
- `time[datetime="2025-10-31T07:19:51.000Z"]`
- `div[title="Ledigheten litt opp"] > h2`
- `time[datetime="2025-10-31T07:16:31.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(4)`
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
- `.row.large-12.small-12:nth-child(17)`
- `.t56.tm39`
- `.count_1`
- `.color_mobile_no_bg_color.row.large-12`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(21)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary:nth-child(22)`
- `.row.large-12.small-12:nth-child(23)`
- `.row.large-12.small-12:nth-child(24)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.mobile_no_border_color.bg-tertiary.color_mobile_bg-tertiary`
- `.border-side-top.mobile_border-side-top.has-row-header:nth-child(31)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(32)`
- `.border-side-top.mobile_border-side-top.has-row-header:nth-child(33)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(34)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(37)`
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
