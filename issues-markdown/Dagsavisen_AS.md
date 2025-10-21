# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-10-21T00:33:25.752Z
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

- `#offer_e28d7915cf6198783b9c-0`
- `#offer_e28d7915cf6198783b9c-0, iframe`
- `iframe[width="100%"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 5

#### Affected Elements:

- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(14) > .tm21.t42`
- `.t56.tm39`
- `.border-side-top.mobile_border-side-top.has-row-header:nth-child(33) > .t42`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > .t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(47) > .tm21.t42`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT
- **Count:** 4

#### Affected Elements:

- `#offer_e28d7915cf6198783b9c-0, img`
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

- `#offer_e28d7915cf6198783b9c-0, a`
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
- **Count:** 80

#### Affected Elements:

- `h1`
- `div[title="Trump får sende nasjonalgarden"] > h2`
- `time[datetime="2025-10-20T20:07:36.000Z"]`
- `div[title="Svakeste TV-aksjon på 20 år"] > h2`
- `time[datetime="2025-10-20T18:31:58.000Z"]`
- `div[title="Trump sier han vil besøke Kina"] > h2`
- `time[datetime="2025-10-20T17:55:05.000Z"]`
- `#notice-10017178 > .content > h2`
- `time[datetime="2025-10-20T17:54:09.000Z"]`
- `#notice-10017171 > .content > h2`
- `time[datetime="2025-10-20T17:01:19.000Z"]`
- `div[title="FN-ansatte frigitt i Jemen"] > h2`
- `time[datetime="2025-10-20T16:23:55.000Z"]`
- `div[title="Ny statsminister på Madagaskar"] > h2`
- `time[datetime="2025-10-20T15:39:47.000Z"]`
- `div[title="Netanyahu: 153 tonn med bomber"] > h2`
- `time[datetime="2025-10-20T15:17:04.000Z"]`
- `div[title="Colombia: Trues av USA"] > h2`
- `time[datetime="2025-10-20T15:16:22.000Z"]`
- `div[title="Demonstranter avbrøt bystyret"] > h2`
- `time[datetime="2025-10-20T14:52:51.000Z"]`
- `#notice-10016075 > .content > h2`
- `time[datetime="2025-10-20T09:30:47.000Z"]`
- `div[title="Marokko lover reformer"] > h2`
- `div[title="Marokko lover reformer"] > .meta`
- `div[title="Potter tar over Sverige"] > h2`
- `div[title="Potter tar over Sverige"] > .meta`
- `#notice-10015476 > .content > h2`
- `#notice-10015476 > .content > .meta`
- `div[title="Refser regjeringen"] > h2`
- `div[title="Refser regjeringen"] > .meta`
- `#notice-10015420 > .content > h2`
- `#notice-10015420 > .content > .meta`
- `div[title="Vestre vil forhandle"] > h2`
- `div[title="Vestre vil forhandle"] > .meta`
- `#notice-10015373 > .content > h2`
- `#notice-10015373 > .content > .meta`
- `div[title="IDF: To soldater drept søndag"] > h2`
- `time[datetime="2025-10-19T17:08:54.000Z"]`
- `div[title="33 drept i israelske angrep"] > h2`
- `time[datetime="2025-10-19T17:22:22.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `#offer_e28d7915cf6198783b9c-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary:nth-child(13)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(14)`
- `.articlescroller-header`
- `.count_4`
- `.row.large-12.small-12:nth-child(17)`
- `.t56.tm39`
- `.count_1`
- `.row.large-12.small-12:nth-child(19)`
- `.row.large-12.small-12:nth-child(21)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary:nth-child(22)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(23)`
- `.color_mobile_bg-primary.hasContentPadding.mobile-hasContentPadding:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.mobile_no_border_color.bg-tertiary.color_mobile_bg-tertiary`
- `.border-side-top.mobile_border-side-top.has-row-header:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.border-side-top.mobile_border-side-top.has-row-header:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.row.large-12.small-12:nth-child(43)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(44)`
- `.color_mobile_bg-primary.hasContentPadding.mobile-hasContentPadding:nth-child(46)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(47)`
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
