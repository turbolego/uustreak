# WCAG Violations Report for Bergens Tidende AS

**Timestamp:** 2025-12-09T00:30:04.955Z
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
- **Count:** 26

#### Affected Elements:

- `article[data-pulse-entity-id="pB6GbR"] > a[data-pulse-entity-id="tip-us-pB6GbR"][data-pulse-source="tip-us-teaser"][data-pulse-product-name="tip-us-teaser"] > .article-tip-us > p`
- `article[data-pulse-entity-id="pB6GbR"] > a[data-pulse-entity-id="tip-us-pB6GbR"][data-pulse-source="tip-us-teaser"][data-pulse-product-name="tip-us-teaser"] > .article-tip-us > p > .tip-us-underline`
- `article[data-pulse-entity-id="7plmP9"] > a[data-pulse-entity-id="tip-us-pB6GbR"][data-pulse-source="tip-us-teaser"][data-pulse-product-name="tip-us-teaser"] > .article-tip-us > p`
- `article[data-pulse-entity-id="7plmP9"] > a[data-pulse-entity-id="tip-us-pB6GbR"][data-pulse-source="tip-us-teaser"][data-pulse-product-name="tip-us-teaser"] > .article-tip-us > p > .tip-us-underline`
- `._preview_1bm9r_661:nth-child(1) > a > ._preview-title_1bm9r_721 > span`
- `._preview_1bm9r_661:nth-child(2) > a > ._preview-title_1bm9r_721 > span`
- `._preview_1bm9r_661:nth-child(3) > a > ._preview-title_1bm9r_721 > span`
- `._preview_1bm9r_661:nth-child(4) > a > ._preview-title_1bm9r_721 > span`
- `._preview_1bm9r_661:nth-child(5) > a > ._preview-title_1bm9r_721 > span`
- `article[data-pulse-entity-id="e7WxP9"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `.memo > .text-container > h3`
- `.kryssord > .text-container > h3`
- `.minikryss > .text-container > h3`
- `.ordjakten > .text-container > h3`
- `article[data-pulse-entity-id="OknEnl"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `article[data-pulse-entity-id="bOK7Gv"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section`
- `article[data-pulse-entity-id="7plVL4"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section`
- `article[data-pulse-entity-id="JbPKjj"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `.opinion-banner-desc`
- `article[data-pulse-entity-id="XMlB8x"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
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
- **Count:** 61

#### Affected Elements:

- `h1`
- `.collage-x3.row:nth-child(1)`
- `.collage-x3.row:nth-child(4)`
- `#dr-edition-teaser-kipoxih0 > div`
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
- `.collage-x4`
- `.collage-x3.row:nth-child(16)`
- `.hjernetrim-front-widget`
- `.vertical-x2.row:nth-child(19)`
- `.vertical-x3.row:nth-child(22)`
- `.vertical-x2.row:nth-child(24)`
- `.collage-x3.row:nth-child(25)`
- `.vertical-x2.row:nth-child(26)`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(28)`
- `.vertical-x3.row:nth-child(29)`
- `.vertical-x3.row:nth-child(31)`
- `.vertical-x2.row:nth-child(32)`
- `.widget-football.regional-widget`
- `.podcast-header`
- `.podcast-main`
- `.podcast-sub > .item:nth-child(1)`
- `.item:nth-child(3)`
- `.display-flex > .article__text-container`
- `.vertical-x3.row:nth-child(36)`
- `.vertical-x2.row:nth-child(37)`
- `.vertical-x1-ad.row:nth-child(38)`
- `.vertical-x4`
- `.collage-x3.row:nth-child(42)`
- `.opinion-banner-title`
- `.opinion-banner-desc`
- `.vertical-x2.row:nth-child(45)`
- `.vertical-x3.row:nth-child(46)`
- `.widget-webcam`
- `.vertical-x1-ad.row:nth-child(48)`
- `.vertical-small-x2`
- `.vertical-x2.row:nth-child(50)`
- `.vertical-x1-ad.row:nth-child(51)`
- `.collage-x3.row:nth-child(52)`
- `.vertical-x3.row:nth-child(53)`
- `.sch-datacontroller__text`
