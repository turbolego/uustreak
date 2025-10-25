# WCAG Violations Report for Bergens Tidende AS

**Timestamp:** 2025-10-25T00:33:02.246Z
**URL:** [https://www.bt.no/#](https://www.bt.no/#)
**Total Violations:** 6

## Violation Details

### ARIA roles used must conform to valid values

- **Impact:** critical
- **Description:** Ensure all elements with a role attribute use a valid value
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-roles?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2
- **Count:** 1

#### Affected Elements:

- `.widget-link`

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
- **Count:** 22

#### Affected Elements:

- `#buy-abo-stripe-btn`
- `article[data-pulse-entity-id="OoLQ8A"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `._preview_1bm9r_661:nth-child(1) > ._preview-title_1bm9r_721 > span`
- `._preview_1bm9r_661:nth-child(2) > ._preview-title_1bm9r_721 > span`
- `._preview_1bm9r_661:nth-child(3) > ._preview-title_1bm9r_721 > span`
- `._preview_1bm9r_661:nth-child(4) > ._preview-title_1bm9r_721 > span`
- `._preview_1bm9r_661:nth-child(5) > ._preview-title_1bm9r_721 > span`
- `.memo > .text-container > h3`
- `.kryssord > .text-container > h3`
- `.minikryss > .text-container > h3`
- `.ordjakten > .text-container > h3`
- `article[data-pulse-entity-id="5EApmE"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `article[data-pulse-entity-id="63pBMr"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `.opinion-banner-desc`
- `article[data-pulse-entity-id="pPJLyX"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `#Vågen`
- `#Finse`
- `#Danmarks\ plass`
- `#Torgallmeningen`
- `#Puddefjordsbroen`
- `#Åsaneveien`
- `article[data-pulse-entity-id="kw4Jnk"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.track-click.url > .article__text-container > .article__title--short`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 73

#### Affected Elements:

- `.sr-only`
- `#buy-abo-stripe-text`
- `#buy-abo-stripe-link`
- `.collage-x3.row:nth-child(1)`
- `.collage-x3.row:nth-child(4)`
- `._heading_1bm9r_641 > span`
- `._preview_1bm9r_661:nth-child(1) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661:nth-child(1) > ._preview-title_1bm9r_721`
- `._preview_1bm9r_661:nth-child(2) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661:nth-child(2) > ._preview-title_1bm9r_721`
- `._preview_1bm9r_661:nth-child(3) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661:nth-child(3) > ._preview-title_1bm9r_721`
- `._preview_1bm9r_661:nth-child(4) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661:nth-child(4) > ._preview-title_1bm9r_721`
- `._preview_1bm9r_661:nth-child(5) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661:nth-child(5) > ._preview-title_1bm9r_721`
- `._preview_1bm9r_661:nth-child(6) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661:nth-child(6) > ._preview-title_1bm9r_721`
- `._preview_1bm9r_661:nth-child(7) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661:nth-child(7) > ._preview-title_1bm9r_721`
- `._preview_1bm9r_661:nth-child(8) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661:nth-child(8) > ._preview-title_1bm9r_721`
- `._preview_1bm9r_661:nth-child(9) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661:nth-child(9) > ._preview-title_1bm9r_721`
- `._preview_1bm9r_661:nth-child(10) > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661:nth-child(10) > ._preview-title_1bm9r_721`
- `.display-flex > .article__text-container`
- `.collage-x3.row:nth-child(14)`
- `.collage-x4`
- `.hjernetrim-front-widget`
- `.vertical-x2.row:nth-child(19)`
- `.collage-x3.row:nth-child(22)`
- `.vertical-x2.row:nth-child(23)`
- `.vertical-x3.row:nth-child(25)`
- `.vertical-x2.row:nth-child(26)`
- `#podcast-latest > .podcast-header`
- `.podcast-main`
- `.podcast-sub > .item:nth-child(1)`
- `.item:nth-child(3)`
- `.vertical-x4`
- `.restaurant-list-header`
- `.top-collage-x3 > .column--big.column`
- `.minimal-teaser:nth-child(1)`
- `.minimal-teaser:nth-child(2) > a > .article__img-container`
- `.minimal-teaser:nth-child(2) > a > .teaser-container > .article__kicker-title`
- `.restaurant-map-teaser`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(31)`
- `.vertical-x3.row:nth-child(32)`
- `.vertical-x2.row:nth-child(34)`
- `.widget-football.regional-widget`
- `.collage-x3.row:nth-child(36)`
- `.vertical-x2.row:nth-child(37)`
- `.collage-x3.row:nth-child(38)`
- `.vertical-x2.row:nth-child(39)`
- `.vertical-x1-ad.row:nth-child(40)`
- `.collage-x3.row:nth-child(43)`
- `.vertical-x2.row:nth-child(45)`
- `.opinion-banner-title`
- `.opinion-banner-desc`
- `.vertical-x3.row:nth-child(47)`
- `.widget-webcam`
- `.collage-x3.row:nth-child(49)`
- `.vertical-x1-ad.row:nth-child(50)`
- `.vertical-x2.row:nth-child(51)`
- `.vertical-x3.row:nth-child(52)`
- `.vertical-x1-ad.row:nth-child(53)`
- `.vertical-x2.row:nth-child(54)`
- `.collage-x3.row:nth-child(55)`
- `.vertical-x1-ad.row:nth-child(56)`
- `.vertical-x2.row:nth-child(57)`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(58)`
- `.vertical-x2.row:nth-child(59)`
- `.sch-datacontroller__text`
