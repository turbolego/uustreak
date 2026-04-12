# WCAG Violations Report for Bergens Tidende AS

**Timestamp:** 2026-04-12T00:59:56.909Z
**URL:** [https://www.bt.no/](https://www.bt.no/)
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

- `.article-tip-us > p`
- `.tip-us-underline`
- `._preview_12jab_666:nth-child(1) > a > ._preview-title_12jab_726 > span`
- `._preview_12jab_666:nth-child(2) > a > ._preview-title_12jab_726 > span`
- `._preview_12jab_666:nth-child(3) > a > ._preview-title_12jab_726 > span`
- `._preview_12jab_666:nth-child(4) > a > ._preview-title_12jab_726 > span`
- `._preview_12jab_666:nth-child(5) > a > ._preview-title_12jab_726 > span`
- `.article-section--btmeninger-debatt > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `.memo > .text-container > h3`
- `.kryssord > .text-container > h3`
- `.minikryss > .text-container > h3`
- `.ordjakten > .text-container > h3`
- `a[aria-label="– Bergen blør. Igjen!"] > .article__text-container > .article__section-kicker-container > .article__section`
- `.article--live > .article__teaser-container > .article__link.url > .article__text-container > .article__section`
- `.opinion-banner-desc`
- `#Vågen`
- `#Finse`
- `#Danmarks\ plass`
- `#Torgallmeningen`
- `#Puddefjordsbroen`
- `#Åsaneveien`
- `article[data-pulse-entity-id="rrrB9A"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `article[data-pulse-entity-id="WvvpJk"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`

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
- **Count:** 68

#### Affected Elements:

- `h1`
- `.row--full`
- `.collage-x3.row:nth-child(2)`
- `.collage-x3.row:nth-child(5)`
- `._heading_12jab_646 > span`
- `._preview_12jab_666:nth-child(1) > a > ._preview-image_12jab_714[loading="lazy"]`
- `._preview_12jab_666:nth-child(1) > a > ._preview-title_12jab_726`
- `._preview_12jab_666:nth-child(2) > a > ._preview-image_12jab_714[loading="lazy"]`
- `._preview_12jab_666:nth-child(2) > a > ._preview-title_12jab_726`
- `._preview_12jab_666:nth-child(3) > a > ._preview-image_12jab_714[loading="lazy"]`
- `._preview_12jab_666:nth-child(3) > a > ._preview-title_12jab_726`
- `._preview_12jab_666:nth-child(4) > a > ._preview-image_12jab_714[loading="lazy"]`
- `._preview_12jab_666:nth-child(4) > a > ._preview-title_12jab_726`
- `._preview_12jab_666:nth-child(5) > a > ._preview-image_12jab_714[loading="lazy"]`
- `._preview_12jab_666:nth-child(5) > a > ._preview-title_12jab_726`
- `._preview_12jab_666:nth-child(6) > a > ._preview-image_12jab_714[loading="lazy"]`
- `._preview_12jab_666:nth-child(6) > a > ._preview-title_12jab_726`
- `._preview_12jab_666:nth-child(7) > a > ._preview-image_12jab_714[loading="lazy"]`
- `._preview_12jab_666:nth-child(7) > a > ._preview-title_12jab_726`
- `._preview_12jab_666:nth-child(8) > a > ._preview-image_12jab_714[loading="lazy"]`
- `._preview_12jab_666:nth-child(8) > a > ._preview-title_12jab_726`
- `._preview_12jab_666:nth-child(9) > a > ._preview-image_12jab_714[loading="lazy"]`
- `._preview_12jab_666:nth-child(9) > a > ._preview-title_12jab_726`
- `._preview_12jab_666:nth-child(10) > a > ._preview-image_12jab_714[loading="lazy"]`
- `._preview_12jab_666:nth-child(10) > a > ._preview-title_12jab_726`
- `.vertical-x2.row:nth-child(12)`
- `.collage-x3.row:nth-child(15)`
- `.vertical-x2.row:nth-child(17)`
- `.hjernetrim-front-widget`
- `.vertical-x3.row:nth-child(20)`
- `.vertical-x2.row:nth-child(23)`
- `.vertical-x4.row:nth-child(24)`
- `.vertical-x3.row:nth-child(26)`
- `.vertical-x2.row:nth-child(27)`
- `.vertical-small-x2.row:nth-child(29)`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(30)`
- `.vertical-x3.row:nth-child(31)`
- `.vertical-x2.row:nth-child(33)`
- `.widget-football.regional-widget`
- `.vertical-x3.row:nth-child(35)`
- `#podcast-latest > .podcast-header`
- `.podcast-main`
- `.podcast-sub > .item:nth-child(1)`
- `.item:nth-child(3)`
- `.vertical-small-x2.row:nth-child(37)`
- `.collage-x3.row:nth-child(38)`
- `.vertical-x3.row:nth-child(39)`
- `.vertical-x1-ad.row:nth-child(40)`
- `.vertical-x2.row:nth-child(43)`
- `.vertical-x4.row:nth-child(45)`
- `.opinion-banner-title`
- `.opinion-banner-desc`
- `.vertical-x3.row:nth-child(47)`
- `.widget-webcam`
- `.vertical-small-x2.row:nth-child(49)`
- `.vertical-x1-ad.row:nth-child(50)`
- `.vertical-x2.row:nth-child(51)`
- `.vertical-x3.row:nth-child(52)`
- `.vertical-x1-ad.row:nth-child(53)`
- `.vertical-x2.row:nth-child(54)`
- `.vertical-small-x2.row:nth-child(55)`
- `.vertical-x1-ad.row:nth-child(56)`
- `.vertical-x2.row:nth-child(57)`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(58)`
- `.vertical-x3.row:nth-child(59)`
- `.collage-x3.row:nth-child(60)`
- `.vertical-x2.row:nth-child(62)`
- `.sch-datacontroller__text`
