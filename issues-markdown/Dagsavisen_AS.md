# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-11-19T02:13:44.275Z
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
- **Count:** 9

#### Affected Elements:

- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(6) > .t34`
- `.t23`
- `.t56`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(19) > h5`
- `.t42.tm32`
- `.t22`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(37) > .tm21.t42`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > .t40`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(39) > .tm21.t42`

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
- **Count:** 2

#### Affected Elements:

- `.mainMenu`
- `#markup_10061985 > .fullwidthTarget.content > unite-player,mux-player,media-theme,media-controller[breakpointsm=""]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

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
- `#notice-10064412 > .content > h2`
- `#notice-10064412 > .content > .meta`
- `div[title="Politiet advarer mot svindlere"] > h2`
- `div[title="Politiet advarer mot svindlere"] > .meta`
- `#notice-10064310 > .content > h2`
- `#notice-10064310 > .content > .meta`
- `div[title="EU varsler aluminium-tiltak"] > h2`
- `div[title="EU varsler aluminium-tiltak"] > .meta`
- `div[title="Økning i nyboligmarkedet"] > h2`
- `div[title="Økning i nyboligmarkedet"] > .meta`
- `div[title="Rekdal kreftoperert"] > h2`
- `time[datetime="2025-11-18T13:08:06.000Z"]`
- `div[title="Lydbøker på Spotify"] > h2`
- `time[datetime="2025-11-18T12:57:02.000Z"]`
- `#notice-10063130 > .content > h2`
- `time[datetime="2025-11-18T12:30:06.000Z"]`
- `div[title="Deep Purple dobler i Norge"] > h2`
- `time[datetime="2025-11-18T11:57:19.000Z"]`
- `div[title="Sabotasje: Peker på Russland"] > h2`
- `time[datetime="2025-11-18T12:40:54.000Z"]`
- `#notice-10063022 > .content > h2`
- `time[datetime="2025-11-18T11:54:21.000Z"]`
- `div[title="Nynazister dømt"] > h2`
- `time[datetime="2025-11-18T11:53:12.000Z"]`
- `div[title="OpenAI dømt"] > h2`
- `time[datetime="2025-11-18T11:35:45.000Z"]`
- `div[title="Max Manus-statue flyttes"] > h2`
- `time[datetime="2025-11-18T09:29:01.000Z"]`
- `div[title="Mattilsynet-varsel mot solkrem"] > h2`
- `time[datetime="2025-11-18T09:27:30.000Z"]`
- `div[title="Jerntabletter tilbakekalles"] > h2`
- `time[datetime="2025-11-18T08:27:39.000Z"]`
- `div[title="Lysbakken til Brussel-jobb"] > h2`
- `time[datetime="2025-11-18T08:27:04.000Z"]`
- `#notice-10062089 > .content > h2`
- `time[datetime="2025-11-18T06:41:16.000Z"]`
- `#notice-10062040 > .content > h2`
- `time[datetime="2025-11-18T06:10:56.000Z"]`
- `#notice-10062038 > .content > h2`
- `time[datetime="2025-11-18T07:36:06.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary:nth-child(13)`
- `.row.large-12.small-12:nth-child(14)`
- `.articlescroller-header`
- `.count_4`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(17)`
- `.t56`
- `.count_1`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(19) > h5`
- `article[data-instance="10057802"]`
- `.t44.tm22.headline`
- `article[data-instance="10062805"]`
- `.row.large-12.small-12:nth-child(21)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary:nth-child(22)`
- `.row.large-12.small-12:nth-child(23)`
- `.row.large-12.small-12:nth-child(24)`
- `article[data-instance="10047926"]`
- `.t43.tm31.headline`
- `article[data-instance="10046481"]`
- `.row.large-12.small-12:nth-child(28)`
- `.tm26.t40.font-weight-bold`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-tags="nyheter"] > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.border-side-top.mobile_border-side-top.has-row-header:nth-child(31)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(32)`
- `.border-side-top.mobile_border-side-top.has-row-header:nth-child(33)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(34)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(36)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(37)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(39)`
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
