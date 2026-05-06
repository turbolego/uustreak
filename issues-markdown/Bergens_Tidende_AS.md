# WCAG Violations Report for Bergens Tidende AS

**Timestamp:** 2026-05-06T00:53:17.746Z
**URL:** [https://www.bt.no/#](https://www.bt.no/#)
**Total Violations:** 5

## Violation Details

### ARIA roles used must conform to valid values

- **Impact:** critical
- **Description:** Ensure all elements with a role attribute use a valid value
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-roles?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `.widget-link`

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
- **Count:** 23

#### Affected Elements:

- `._preview_1166k_667:nth-child(1) > a > ._preview-title_1166k_727 > span`
- `._preview_1166k_667:nth-child(2) > a > ._preview-title_1166k_727 > span`
- `._preview_1166k_667:nth-child(3) > a > ._preview-title_1166k_727 > span`
- `._preview_1166k_667:nth-child(4) > a > ._preview-title_1166k_727 > span`
- `._preview_1166k_667:nth-child(5) > a > ._preview-title_1166k_727 > span`
- `.memo > .text-container > h3`
- `.kryssord > .text-container > h3`
- `.minikryss > .text-container > h3`
- `.ordjakten > .text-container > h3`
- `.article--videoFrontTeaser > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `a[aria-label="– Bil havnet i steinrøys"] > .article__text-container > .article__section`
- `.article-tip-us > p`
- `.tip-us-underline`
- `.article-section--btmeninger-debatt > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `article[data-pulse-entity-id="k0M9Gv"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `article[data-pulse-entity-id="k0Mnwj"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `.opinion-banner-desc`
- `#Vågen`
- `#Finse`
- `#Danmarks\ plass`
- `#Torgallmeningen`
- `#Puddefjordsbroen`
- `#Åsaneveien`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 10

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
- `img[width="382"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 62

#### Affected Elements:

- `h1`
- `.collage-x3.row:nth-child(1)`
- `.top-60-40-block`
- `#dr-edition-teaser-yez8rbjeg > div`
- `._heading_1166k_647 > span`
- `._preview_1166k_667:nth-child(1) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._preview_1166k_667:nth-child(1) > a > ._preview-title_1166k_727`
- `._preview_1166k_667:nth-child(2) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._preview_1166k_667:nth-child(2) > a > ._preview-title_1166k_727`
- `._preview_1166k_667:nth-child(3) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._preview_1166k_667:nth-child(3) > a > ._preview-title_1166k_727`
- `._preview_1166k_667:nth-child(4) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._preview_1166k_667:nth-child(4) > a > ._preview-title_1166k_727`
- `._preview_1166k_667:nth-child(5) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._preview_1166k_667:nth-child(5) > a > ._preview-title_1166k_727`
- `._preview_1166k_667:nth-child(6) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._preview_1166k_667:nth-child(6) > a > ._preview-title_1166k_727`
- `._preview_1166k_667:nth-child(7) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._preview_1166k_667:nth-child(7) > a > ._preview-title_1166k_727`
- `._preview_1166k_667:nth-child(8) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._preview_1166k_667:nth-child(8) > a > ._preview-title_1166k_727`
- `._preview_1166k_667:nth-child(9) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._preview_1166k_667:nth-child(9) > a > ._preview-title_1166k_727`
- `._preview_1166k_667:nth-child(10) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._preview_1166k_667:nth-child(10) > a > ._preview-title_1166k_727`
- `.vertical-x2.row:nth-child(11)`
- `.collage-x3.row:nth-child(14)`
- `.collage-x4`
- `.hjernetrim-front-widget`
- `.vertical-x2.row:nth-child(19)`
- `.vertical-x3.row:nth-child(22)`
- `.collage-x3.row:nth-child(23)`
- `.vertical-x2.row:nth-child(25)`
- `.vertical-x3.row:nth-child(26)`
- `.vertical-x2.row:nth-child(28)`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(29)`
- `.vertical-x4.row:nth-child(30)`
- `.collage-x3.row:nth-child(32)`
- `.widget-football.regional-widget`
- `.vertical-x2.row:nth-child(34)`
- `.podcast-header`
- `.podcast-main`
- `.podcast-sub > .item:nth-child(1)`
- `.item:nth-child(3)`
- `.vertical-x3.row:nth-child(36)`
- `.vertical-x2.row:nth-child(37)`
- `.vertical-x3.row:nth-child(38)`
- `.vertical-x1-ad.row:nth-child(39)`
- `.vertical-x2.row:nth-child(42)`
- `.vertical-x3.row:nth-child(44)`
- `.opinion-banner-title`
- `.opinion-banner-desc`
- `.vertical-x2.row:nth-child(46)`
- `.widget-webcam`
- `.vertical-x4.row:nth-child(48)`
- `.vertical-x1-ad.row:nth-child(49)`
- `.vertical-x2.row:nth-child(50)`
- `.vertical-x3.row:nth-child(51)`
- `.vertical-x1-ad.row:nth-child(52)`
- `.collage-x3.row:nth-child(53)`
- `.row--full`
- `.sch-datacontroller--footer > .sch-datacontroller__wrapper > .sch-datacontroller__content > .sch-datacontroller__text`
