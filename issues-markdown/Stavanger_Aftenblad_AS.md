# WCAG Violations Report for Stavanger Aftenblad AS

**Timestamp:** 2025-12-11T01:03:21.155Z
**URL:** [https://www.aftenbladet.no/#](https://www.aftenbladet.no/#)
**Total Violations:** 7

## Violation Details

### ARIA roles used must conform to valid values

- **Impact:** critical
- **Description:** Ensure all elements with a role attribute use a valid value
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-roles?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 3

#### Affected Elements:

- `.widget-football[data-pulse-position=""] > .widget-link[role="widget"][data-offset-y="2000"]`
- `.widget-bolig[data-pulse-position=""] > .widget-link[role="widget"][data-offset-y="2000"]`
- `.widget-siste-widget > .widget-link[role="widget"][data-offset-y="2000"]`

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `.ch-menu-state-label`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 14

#### Affected Elements:

- `#skattelisten, li:nth-child(1) > a[target="_top"]`
- `#skattelisten, li:nth-child(2) > a[target="_top"]`
- `#skattelisten, li:nth-child(3) > a[target="_top"]`
- `#skattelisten, li:nth-child(4) > a[target="_top"]`
- `#skattelisten, li:nth-child(5) > a[target="_top"]`
- `#skattelisten, li:nth-child(6) > a[target="_top"]`
- `#skattelisten, li:nth-child(7) > a[target="_top"]`
- `#skattelisten, li:nth-child(8) > a[target="_top"]`
- `#skattelisten, li:nth-child(9) > a[target="_top"]`
- `a[aria-label="Returnerer til gamleklubben"] > .article__text-container > .article__section`
- `.memo > .text-container > h3`
- `.kryssord > .text-container > h3`
- `.minikryss > .text-container > h3`
- `.ordjakten > .text-container > h3`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 16

#### Affected Elements:

- `a:nth-child(1) > .sudoku.gamecard > .icon-container > .icon`
- `.memo > .icon-container > .icon`
- `.kryssord > .icon-container > .icon`
- `.minikryss > .icon-container > .icon`
- `.ordjakten > .icon-container > .icon`
- `a:nth-child(6) > .sudoku.gamecard > .icon-container > .icon`
- `a:nth-child(7) > .sudoku.gamecard > .icon-container > .icon`
- `.kdoku > .icon-container > .icon`
- `.helgekryss > .icon-container > .icon`
- `a[data-podcast-id="100153"] > .podcast-image > .podcast-image-src`
- `a[data-podcast-id="100154"] > .podcast-image > .podcast-image-src`
- `a[data-podcast-id="100157"] > .podcast-image > .podcast-image-src`
- `#webcam-102768`
- `#webcam-105592`
- `#webcam-102012`
- `#webcam-108839`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- `.sa-podcast-desktop-ad`
- `._ethics_logos_udtfw_708 > a[target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 78

#### Affected Elements:

- `h1`
- `#announcement-banner`
- `.collage-x3.row:nth-child(1)`
- `.collage-x3.row:nth-child(3)`
- `a[data-pulse-entity-id="helgomeny-lukekalender-2025"]`
- `#skattelisten, .text`
- `#skattelisten, ol`
- `#skattelisten, #b4-tax-municipality-search`
- `._heading_1bm9r_641 > span`
- `._preview_1bm9r_661:nth-child(1) > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661:nth-child(1) > a > ._preview-title_1bm9r_721`
- `._preview_1bm9r_661:nth-child(2) > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661:nth-child(2) > a > ._preview-title_1bm9r_721`
- `._preview_1bm9r_661:nth-child(3) > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661:nth-child(3) > a > ._preview-title_1bm9r_721`
- `._preview_1bm9r_661:nth-child(4) > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661:nth-child(4) > a > ._preview-title_1bm9r_721`
- `._preview_1bm9r_661:nth-child(5) > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661:nth-child(5) > a > ._preview-title_1bm9r_721`
- `._preview_1bm9r_661:nth-child(6) > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661:nth-child(6) > a > ._preview-title_1bm9r_721`
- `._preview_1bm9r_661:nth-child(7) > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661:nth-child(7) > a > ._preview-title_1bm9r_721`
- `._preview_1bm9r_661:nth-child(8) > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661:nth-child(8) > a > ._preview-title_1bm9r_721`
- `._preview_1bm9r_661:nth-child(9) > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661:nth-child(9) > a > ._preview-title_1bm9r_721`
- `._preview_1bm9r_661:nth-child(10) > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661:nth-child(10) > a > ._preview-title_1bm9r_721`
- `.vertical-x3.row:nth-child(12)`
- `.collage-x4.row:nth-child(14)`
- `.collage-x3.row:nth-child(18)`
- `.collage-x4.row:nth-child(19)`
- `.vertical-x2.row:nth-child(21)`
- `.hjernetrim-front-widget`
- `.vertical-x3.row:nth-child(25)`
- `.vertical-x2.row:nth-child(27)`
- `.podcast-header`
- `.podcast-main`
- `.podcast-sub > .item:nth-child(1)`
- `.item:nth-child(3)`
- `.podcast-spons`
- `.vertical-x4.row:nth-child(29)`
- `.widget-football.regional-widget`
- `.vertical-x3.row:nth-child(31)`
- `.vertical-small-x2.row:nth-child(33)`
- `.collage-x3.row:nth-child(36)`
- `.widget-bolig.regional-widget`
- `.vertical-x2.row:nth-child(38)`
- `.vertical-x3.row:nth-child(39)`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(41)`
- `.vertical-small-x2.row:nth-child(42)`
- `.vertical-x2.row:nth-child(44)`
- `.vertical-x3.row:nth-child(45)`
- `.vertical-x2.row:nth-child(46)`
- `.vertical-x1-ad.row:nth-child(47)`
- `.vertical-x4.row:nth-child(48)`
- `.vertical-x2.row:nth-child(49)`
- `.vertical-x1-ad.row:nth-child(50)`
- `.vertical-x3.row:nth-child(51)`
- `.vertical-x2.row:nth-child(52)`
- `.vertical-small-x2.row:nth-child(53)`
- `.vertical-x2.row:nth-child(54)`
- `.vertical-x3.row:nth-child(55)`
- `.vertical-x2.row:nth-child(56)`
- `.collage-x3.row:nth-child(57)`
- `.vertical-x2.row:nth-child(59)`
- `#webcam-frontpage`
- `.vertical-x3.row:nth-child(61)`
- `.vertical-x2.row:nth-child(62)`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(63)`
- `.collage-x3.row:nth-child(65)`
- `.vertical-x2.row:nth-child(66)`
- `.vertical-x3.row:nth-child(67)`
- `.vertical-x1-ad.row:nth-child(68)`
- `.vertical-x2.row:nth-child(69)`
- `.vertical-x4.row:nth-child(70)`
- `.sch-datacontroller__text`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `.scroll-container`
