# WCAG Violations Report for Bergens Tidende AS

**Timestamp:** 2025-10-19T00:30:05.394Z
**URL:** [https://www.bt.no/#](https://www.bt.no/#)
**Total Violations:** 5

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
- `a[aria-label="Politiet: Fallulykke på Engen"] > .article__text-container > .article__section`
- `._preview_1bm9r_661:nth-child(1) > ._preview-title_1bm9r_721 > span`
- `._preview_1bm9r_661:nth-child(2) > ._preview-title_1bm9r_721 > span`
- `._preview_1bm9r_661:nth-child(3) > ._preview-title_1bm9r_721 > span`
- `._preview_1bm9r_661:nth-child(4) > ._preview-title_1bm9r_721 > span`
- `._preview_1bm9r_661:nth-child(5) > ._preview-title_1bm9r_721 > span`
- `.article-section--btmeninger-debatt > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `.memo > .text-container > h3`
- `.kryssord > .text-container > h3`
- `.minikryss > .text-container > h3`
- `.ordjakten > .text-container > h3`
- `a[aria-label="Lyshorntunnelen åpen igjen"] > .article__text-container > .article__section`
- `article[data-pulse-entity-id="KMOxnE"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `.opinion-banner-desc`
- `#Vågen`
- `#Finse`
- `#Danmarks\ plass`
- `#Torgallmeningen`
- `#Puddefjordsbroen`
- `#Åsaneveien`
- `article[data-pulse-entity-id="B0A2lQ"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`

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
- **Count:** 63

#### Affected Elements:

- `h1`
- `#buy-abo-stripe-text`
- `#buy-abo-stripe-link`
- `.collage-x3.row:nth-child(1)`
- `.collage-x3.row:nth-child(4)`
- `#dr-edition-teaser-f6t6t5rp7 > div`
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
- `.vertical-x2.row:nth-child(11)`
- `.collage-x4`
- `.collage-x3.row:nth-child(16)`
- `.hjernetrim-front-widget`
- `.vertical-x2.row:nth-child(19)`
- `.collage-x3.row:nth-child(22)`
- `.vertical-x2.row:nth-child(23)`
- `.vertical-x3.row:nth-child(25)`
- `.vertical-x3.row:nth-child(26)`
- `.podcast-header`
- `.podcast-main`
- `.podcast-sub > .item:nth-child(1)`
- `.item:nth-child(3)`
- `.vertical-x2.row:nth-child(28)`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(29)`
- `.vertical-x3.row:nth-child(30)`
- `.vertical-x2.row:nth-child(32)`
- `.widget-football.regional-widget`
- `.vertical-x4`
- `.vertical-x2.row:nth-child(35)`
- `.vertical-x3.row:nth-child(36)`
- `.vertical-x2.row:nth-child(37)`
- `.vertical-x1-ad.row:nth-child(38)`
- `.collage-x3.row:nth-child(41)`
- `.vertical-x2.row:nth-child(43)`
- `.opinion-banner-title`
- `.opinion-banner-desc`
- `.vertical-x3.row:nth-child(45)`
- `.widget-webcam`
- `.vertical-x2.row:nth-child(47)`
- `.vertical-x1-ad.row:nth-child(48)`
- `.collage-x3.row:nth-child(49)`
- `.vertical-x2.row:nth-child(50)`
- `.vertical-x1-ad.row:nth-child(51)`
- `.row--full`
- `.sch-datacontroller__text`
