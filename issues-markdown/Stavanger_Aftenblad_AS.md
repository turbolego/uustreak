# WCAG Violations Report for Stavanger Aftenblad AS

**Timestamp:** 2025-10-27T00:43:25.205Z
**URL:** [https://www.aftenbladet.no/#](https://www.aftenbladet.no/#)
**Total Violations:** 7

## Violation Details

### ARIA roles used must conform to valid values

- **Impact:** critical
- **Description:** Ensure all elements with a role attribute use a valid value
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-roles?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2
- **Count:** 3

#### Affected Elements:

- `.widget-football[data-pulse-position=""] > .widget-link[role="widget"][data-offset-y="2000"]`
- `.widget-bolig[data-pulse-position=""] > .widget-link[role="widget"][data-offset-y="2000"]`
- `.widget-siste-widget > .widget-link[role="widget"][data-offset-y="2000"]`

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2
- **Count:** 1

#### Affected Elements:

- `.ch-menu-state-label`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 13

#### Affected Elements:

- `.article--live > .article__teaser-container > .article__link.url > .article__text-container > .article__section`
- `.memo > .text-container > h3`
- `.kryssord > .text-container > h3`
- `.minikryss > .text-container > h3`
- `.ordjakten > .text-container > h3`
- `.first > span:nth-child(1)`
- `#stockBid`
- `.first > span:nth-child(3)`
- `#stockAsk`
- `.second > span:nth-child(1)`
- `#stockHigh`
- `.second > span:nth-child(3)`
- `#stockLow`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 3

#### Affected Elements:

- `.mm-box-content > a`
- `.sa-podcast-desktop-ad`
- `._ethics_logos_udtfw_708 > a[target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 100

#### Affected Elements:

- `h1`
- `#buy-abo-stripe-text`
- `#buy-abo-stripe-link`
- `.collage-x3.row:nth-child(1)`
- `.collage-x3.row:nth-child(3)`
- `.mm-front-link`
- `._content_1bm9r_637 > ._heading_1bm9r_641 > span`
- `._sa_4e48p_13 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(1) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._sa_4e48p_13 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(1) > ._preview-title_1bm9r_721`
- `._sa_4e48p_13 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(2) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._sa_4e48p_13 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(2) > ._preview-title_1bm9r_721`
- `._sa_4e48p_13 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(3) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._sa_4e48p_13 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(3) > ._preview-title_1bm9r_721`
- `._sa_4e48p_13 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(4) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._sa_4e48p_13 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(4) > ._preview-title_1bm9r_721`
- `._sa_4e48p_13 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(5) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._sa_4e48p_13 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(5) > ._preview-title_1bm9r_721`
- `._sa_4e48p_13 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(6) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._sa_4e48p_13 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(6) > ._preview-title_1bm9r_721`
- `._sa_4e48p_13 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(7) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._sa_4e48p_13 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(7) > ._preview-title_1bm9r_721`
- `._sa_4e48p_13 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(8) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._sa_4e48p_13 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(8) > ._preview-title_1bm9r_721`
- `._sa_4e48p_13 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(9) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._sa_4e48p_13 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(9) > ._preview-title_1bm9r_721`
- `._sa_4e48p_13 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(10) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._sa_4e48p_13 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(10) > ._preview-title_1bm9r_721`
- `.vertical-x3.row:nth-child(11)`
- `.collage-x4`
- `.collage-x3.row:nth-child(17)`
- `.vertical-x2.row:nth-child(18)`
- `.vertical-x3.row:nth-child(20)`
- `.hjernetrim-front-widget`
- `a > ._heading_1bm9r_641 > span`
- `._aftenball_4e48p_37 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(1) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._aftenball_4e48p_37 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(1) > ._preview-title_1bm9r_721`
- `._aftenball_4e48p_37 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(2) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._aftenball_4e48p_37 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(2) > ._preview-title_1bm9r_721`
- `._aftenball_4e48p_37 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(3) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._aftenball_4e48p_37 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(3) > ._preview-title_1bm9r_721`
- `._aftenball_4e48p_37 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(4) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._aftenball_4e48p_37 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(4) > ._preview-title_1bm9r_721`
- `._aftenball_4e48p_37 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(5) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._aftenball_4e48p_37 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(5) > ._preview-title_1bm9r_721`
- `._aftenball_4e48p_37 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(6) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._aftenball_4e48p_37 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(6) > ._preview-title_1bm9r_721`
- `._aftenball_4e48p_37 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(7) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._aftenball_4e48p_37 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(7) > ._preview-title_1bm9r_721`
- `._aftenball_4e48p_37 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(8) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._aftenball_4e48p_37 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(8) > ._preview-title_1bm9r_721`
- `._aftenball_4e48p_37 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(9) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._aftenball_4e48p_37 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(9) > ._preview-title_1bm9r_721`
- `._aftenball_4e48p_37 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(10) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._aftenball_4e48p_37 > ._content_1bm9r_637 > ._controls_1bm9r_657 > ._previews_1bm9r_661 > ._preview_1bm9r_661:nth-child(10) > ._preview-title_1bm9r_721`
- `.collage-x3.row:nth-child(28)`
- `.vertical-x2.row:nth-child(30)`
- `.podcast-header`
- `.podcast-main`
- `.podcast-sub > .item:nth-child(1)`
- `.item:nth-child(3)`
- `.podcast-spons`
- `.vertical-x3.row:nth-child(32)`
- `.widget-football.regional-widget`
- `.vertical-x4.row:nth-child(34)`
- `#oilwidget`
- `.vertical-x2.row:nth-child(36)`
- `.vertical-x3.row:nth-child(39)`
- `.widget-bolig.regional-widget`
- `.vertical-small-x2`
- `.vertical-x2.row:nth-child(42)`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(44)`
- `.vertical-x3.row:nth-child(45)`
- `.collage-x3.row:nth-child(47)`
- `article[data-pulse-entity-id="63pKOW"] > .display-flex.article__teaser-container > .article__text-container`
- `.vertical-x2.row:nth-child(49)`
- `.vertical-x1-ad.row:nth-child(50)`
- `.collage-x3.row:nth-child(51)`
- `.vertical-x2.row:nth-child(52)`
- `.vertical-x1-ad.row:nth-child(53)`
- `.collage-x3.row:nth-child(54)`
- `.vertical-x2.row:nth-child(55)`
- `.vertical-x3.row:nth-child(56)`
- `.vertical-x2.row:nth-child(57)`
- `.vertical-x4.row:nth-child(58)`
- `article[data-pulse-entity-id="LMvamP"] > .display-flex.article__teaser-container > .article__text-container`
- `.vertical-x2.row:nth-child(60)`
- `.vertical-x3.row:nth-child(62)`
- `#webcam-frontpage`
- `.vertical-x2.row:nth-child(64)`
- `.vertical-x2.row:nth-child(65)`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(66)`
- `.vertical-x3.row:nth-child(68)`
- `.collage-x3.row:nth-child(69)`
- `.vertical-x2.row:nth-child(70)`
- `.vertical-x1-ad.row:nth-child(71)`
- `.collage-x3.row:nth-child(72)`
- `.vertical-x2.row:nth-child(73)`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(74)`
- `.vertical-x3.row:nth-child(75)`
- `.row--full.horizontal-x1.row:nth-child(76)`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3
- **Count:** 1

#### Affected Elements:

- `.scroll-container`
