# WCAG Violations Report for Stavanger Aftenblad AS

**Timestamp:** 2026-01-30T22:22:05.499Z
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
- **Count:** 6

#### Affected Elements:

- `.liveticker-red`
- `.article--live > .article__teaser-container > .article__link.url > .article__text-container > .article__section`
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
- **Count:** 82

#### Affected Elements:

- `h1`
- `#announcement-banner`
- `.liveticker-red`
- `a[data-name="Trafikkstudio"]`
- `a[title="Stenger dørene i Pedersgata"]`
- `a[title="Har signert for ny klubb"]`
- `a[data-name="Nyhetsstudio"]`
- `.liveticker-item--snooze > .name`
- `.top-60-40-block`
- `.collage-x3.row:nth-child(3)`
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
- `.vertical-x2.row:nth-child(11)`
- `.vertical-x3.row:nth-child(13)`
- `.collage-x4`
- `.vertical-x2.row:nth-child(18)`
- `.collage-x3.row:nth-child(20)`
- `.hjernetrim-front-widget`
- `.vertical-x2.row:nth-child(24)`
- `.vertical-x3.row:nth-child(26)`
- `.podcast-header`
- `.podcast-main`
- `.podcast-sub > .item:nth-child(1)`
- `.item:nth-child(3)`
- `.podcast-spons`
- `.vertical-x2.row:nth-child(29)`
- `.widget-football.regional-widget`
- `.collage-x3.row:nth-child(31)`
- `.vertical-x2.row:nth-child(33)`
- `.vertical-x3.row:nth-child(36)`
- `.widget-bolig.regional-widget`
- `.vertical-x2.row:nth-child(38)`
- `.collage-x3.row:nth-child(39)`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(41)`
- `.vertical-x3.row:nth-child(42)`
- `.collage-x3.row:nth-child(44)`
- `.vertical-x2.row:nth-child(45)`
- `.vertical-x3.row:nth-child(46)`
- `.vertical-x1-ad.row:nth-child(47)`
- `.collage-x3.row:nth-child(48)`
- `.vertical-x2.row:nth-child(49)`
- `.vertical-x1-ad.row:nth-child(50)`
- `.vertical-x3.row:nth-child(51)`
- `.vertical-x2.row:nth-child(52)`
- `.vertical-x4.row:nth-child(53)`
- `.vertical-x2.row:nth-child(54)`
- `.vertical-x3.row:nth-child(55)`
- `.collage-x3.row:nth-child(56)`
- `.vertical-x2.row:nth-child(57)`
- `.collage-x3.row:nth-child(59)`
- `#webcam-frontpage`
- `.vertical-x2.row:nth-child(61)`
- `.vertical-x3.row:nth-child(62)`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(63)`
- `.vertical-x2.row:nth-child(65)`
- `.vertical-x4.row:nth-child(66)`
- `.vertical-x2.row:nth-child(67)`
- `.vertical-x1-ad.row:nth-child(68)`
- `.vertical-x3.row:nth-child(69)`
- `.vertical-x2.row:nth-child(70)`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(71)`
- `.vertical-x2.row:nth-child(72)`
- `.sch-datacontroller__text`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `.scroll-container`
