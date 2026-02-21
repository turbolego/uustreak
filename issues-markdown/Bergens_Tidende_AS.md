# WCAG Violations Report for Bergens Tidende AS

**Timestamp:** 2026-02-21T00:38:37.964Z
**URL:** [https://www.bt.no/#](https://www.bt.no/#)
**Total Violations:** 6

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
- **Count:** 25

#### Affected Elements:

- `.article-tip-us > p`
- `.tip-us-underline`
- `._preview_12jab_666:nth-child(1) > a > ._preview-title_12jab_726 > span`
- `._preview_12jab_666:nth-child(2) > a > ._preview-title_12jab_726 > span`
- `._preview_12jab_666:nth-child(3) > a > ._preview-title_12jab_726 > span`
- `._preview_12jab_666:nth-child(4) > a > ._preview-title_12jab_726 > span`
- `._preview_12jab_666:nth-child(5) > a > ._preview-title_12jab_726 > span`
- `article[data-pulse-entity-id="bOGJ83"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `article[data-pulse-entity-id="oEWbnW"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `.memo > .text-container > h3`
- `.kryssord > .text-container > h3`
- `.minikryss > .text-container > h3`
- `.ordjakten > .text-container > h3`
- `article[data-pulse-entity-id="K8zKOE"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `article[data-pulse-entity-id="vr5V5L"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `article[data-pulse-entity-id="7pd1qo"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `a[aria-label="– Nivået er faktisk helt vilt"] > .article__text-container > .article__section-kicker-container > .article__section`
- `.opinion-banner-desc`
- `#Vågen`
- `#Finse`
- `#Danmarks\ plass`
- `#Torgallmeningen`
- `#Puddefjordsbroen`
- `#Åsaneveien`
- `a[aria-label="– Det er gift for integreringa"] > .article__text-container > .article__section-kicker-container > .article__section`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.track-click.url > .article__text-container > .article__title--short`

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
- **Count:** 69

#### Affected Elements:

- `.sr-only`
- `.top-60-40-block`
- `article[data-pulse-entity-id="JOxXKP"]`
- `article[data-pulse-entity-id="e7Ep2a"] > .article__teaser-container`
- `#dr-edition-teaser-5n4f7wag > div`
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
- `.collage-x4`
- `.vertical-x2.row:nth-child(16)`
- `.hjernetrim-front-widget`
- `.vertical-x3.row:nth-child(19)`
- `.collage-x3.row:nth-child(22)`
- `.vertical-x2.row:nth-child(23)`
- `.vertical-x3.row:nth-child(25)`
- `.vertical-x2.row:nth-child(26)`
- `.vertical-x4.row:nth-child(28)`
- `.restaurant-list-header`
- `.top-collage-x3 > .column--big.column`
- `.minimal-teaser:nth-child(1)`
- `.minimal-teaser:nth-child(2) > a > .article__img-container`
- `.minimal-teaser:nth-child(2) > a > .teaser-container > .article__kicker-title`
- `.minimal-teaser:nth-child(2) > .article__labels`
- `.restaurant-map-teaser`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(31)`
- `.vertical-x3.row:nth-child(32)`
- `.display-flex > .article__text-container`
- `.widget-football.regional-widget`
- `.collage-x3.row:nth-child(36)`
- `.podcast-header`
- `.podcast-main`
- `.podcast-sub > .item:nth-child(1)`
- `.item:nth-child(3)`
- `.vertical-x2.row:nth-child(38)`
- `.vertical-x3.row:nth-child(39)`
- `.vertical-x2.row:nth-child(40)`
- `.vertical-x1-ad.row:nth-child(41)`
- `.collage-x3.row:nth-child(44)`
- `.vertical-x2.row:nth-child(46)`
- `.opinion-banner-title`
- `.opinion-banner-desc`
- `.vertical-x3.row:nth-child(48)`
- `.widget-webcam`
- `.vertical-x2.row:nth-child(50)`
- `.vertical-x1-ad.row:nth-child(51)`
- `.vertical-x4.row:nth-child(52)`
- `.vertical-x2.row:nth-child(53)`
- `.vertical-x1-ad.row:nth-child(54)`
- `.vertical-x3.row:nth-child(55)`
- `.sch-datacontroller__text`
