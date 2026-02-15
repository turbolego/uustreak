# WCAG Violations Report for Bergens Tidende AS

**Timestamp:** 2026-02-15T00:51:20.273Z
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

- `.liveticker-red`
- `._preview_12jab_666:nth-child(1) > a > ._preview-title_12jab_726 > span`
- `._preview_12jab_666:nth-child(2) > a > ._preview-title_12jab_726 > span`
- `._preview_12jab_666:nth-child(3) > a > ._preview-title_12jab_726 > span`
- `._preview_12jab_666:nth-child(4) > a > ._preview-title_12jab_726 > span`
- `._preview_12jab_666:nth-child(5) > a > ._preview-title_12jab_726 > span`
- `.memo > .text-container > h3`
- `.kryssord > .text-container > h3`
- `.minikryss > .text-container > h3`
- `.ordjakten > .text-container > h3`
- `article[data-pulse-entity-id="ExaQzo"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `article[data-pulse-entity-id="gk64WL"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `article[data-pulse-entity-id="43zyao"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `.opinion-banner-desc`
- `.article--live > .article__teaser-container > .article__link.url > .article__text-container > .article__section`
- `#Vågen`
- `#Finse`
- `#Danmarks\ plass`
- `#Torgallmeningen`
- `#Puddefjordsbroen`
- `#Åsaneveien`
- `article[data-pulse-entity-id="7pdxBv"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `article[data-pulse-entity-id="V69qq4"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`

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
- **Count:** 71

#### Affected Elements:

- `h1`
- `#liveticker`
- `.breaking-x1`
- `.collage-x3.row:nth-child(4)`
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
- `.vertical-x2.row:nth-child(11)`
- `.vertical-x3.row:nth-child(14)`
- `.collage-x3.row:nth-child(16)`
- `.hjernetrim-front-widget`
- `.vertical-x2.row:nth-child(19)`
- `.vertical-x3.row:nth-child(22)`
- `.vertical-x2.row:nth-child(23)`
- `.vertical-x4.row:nth-child(25)`
- `.vertical-x3.row:nth-child(26)`
- `.vertical-x2.row:nth-child(28)`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(29)`
- `.collage-x3.row:nth-child(30)`
- `.vertical-x2.row:nth-child(32)`
- `.widget-football.regional-widget`
- `.vertical-x3.row:nth-child(34)`
- `#podcast-latest > .podcast-header`
- `.podcast-main`
- `.podcast-sub > .item:nth-child(1)`
- `.item:nth-child(3)`
- `.collage-x3.row:nth-child(36)`
- `.vertical-x2.row:nth-child(37)`
- `.vertical-x3.row:nth-child(38)`
- `.vertical-x1-ad.row:nth-child(39)`
- `.vertical-x4.row:nth-child(42)`
- `.vertical-small-x2.row:nth-child(44)`
- `.opinion-banner-title`
- `.opinion-banner-desc`
- `.vertical-x3.row:nth-child(46)`
- `.widget-webcam`
- `.collage-x3.row:nth-child(48)`
- `.vertical-x1-ad.row:nth-child(49)`
- `article[data-pulse-entity-id="Gx3qjB"] > .display-flex.article__teaser-container > .article__text-container`
- `.vertical-x2.row:nth-child(51)`
- `.vertical-x1-ad.row:nth-child(52)`
- `.vertical-x3.row:nth-child(53)`
- `.vertical-x2.row:nth-child(54)`
- `.vertical-x1-ad.row:nth-child(55)`
- `.vertical-small-x2.row:nth-child(56)`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(57)`
- `.collage-x3.row:nth-child(58)`
- `.vertical-x2.row:nth-child(59)`
- `.vertical-x3.row:nth-child(61)`
- `.collage-x3.row:nth-child(62)`
- `.vertical-x2.row:nth-child(63)`
- `.vertical-x2.row:nth-child(64)`
- `.sch-datacontroller__text`
