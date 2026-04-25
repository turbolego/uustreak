# WCAG Violations Report for Bergens Tidende AS

**Timestamp:** 2026-04-25T20:14:01.588Z
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
- **Count:** 20

#### Affected Elements:

- `.liveticker-red`
- `._preview_1166k_667:nth-child(1) > a > ._preview-title_1166k_727 > span`
- `._preview_1166k_667:nth-child(2) > a > ._preview-title_1166k_727 > span`
- `._preview_1166k_667:nth-child(3) > a > ._preview-title_1166k_727 > span`
- `._preview_1166k_667:nth-child(4) > a > ._preview-title_1166k_727 > span`
- `._preview_1166k_667:nth-child(5) > a > ._preview-title_1166k_727 > span`
- `.memo > .text-container > h3`
- `.kryssord > .text-container > h3`
- `.minikryss > .text-container > h3`
- `.ordjakten > .text-container > h3`
- `.article-section--btmeninger-debatt > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `article[data-pulse-entity-id="16oLzK"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `.opinion-banner-desc`
- `article[data-pulse-entity-id="7pP0j4"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `#Vågen`
- `#Finse`
- `#Danmarks\ plass`
- `#Torgallmeningen`
- `#Puddefjordsbroen`
- `#Åsaneveien`

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
- **Count:** 80

#### Affected Elements:

- `.sr-only`
- `.liveticker-red`
- `a[title="Politiet: Røyk fra vaskemakin"]`
- `.liveticker-item--snooze > .name`
- `.collage-x3.row:nth-child(1)`
- `.collage-x3.row:nth-child(4)`
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
- `article[data-pulse-entity-id="n1LL5a"] > .display-flex.article__teaser-container > .article__text-container`
- `.vertical-x2.row:nth-child(16)`
- `.hjernetrim-front-widget`
- `.collage-x3.row:nth-child(19)`
- `.vertical-x2.row:nth-child(22)`
- `.vertical-x3.row:nth-child(23)`
- `.collage-x3.row:nth-child(25)`
- `.vertical-x4.row:nth-child(26)`
- `.collage-x3.row:nth-child(28)`
- `.restaurant-list-header`
- `.top-collage-x3 > .column--big.column`
- `.minimal-teaser:nth-child(1)`
- `.minimal-teaser:nth-child(2) > a > .article__img-container`
- `.minimal-teaser:nth-child(2) > a > .teaser-container > .article__kicker-title`
- `.minimal-teaser:nth-child(2) > .article__labels`
- `.restaurant-map-teaser`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(31)`
- `article[data-pulse-entity-id="0pvB5G"] > .display-flex.article__teaser-container > .article__text-container`
- `.vertical-x2.row:nth-child(34)`
- `.widget-football.regional-widget`
- `.vertical-x3.row:nth-child(36)`
- `#podcast-latest > .podcast-header`
- `.podcast-main`
- `.podcast-sub > .item:nth-child(1)`
- `.item:nth-child(3)`
- `.vertical-x2.row:nth-child(38)`
- `.vertical-small-x2`
- `.vertical-x2.row:nth-child(40)`
- `.vertical-x1-ad.row:nth-child(41)`
- `.vertical-x3.row:nth-child(44)`
- `.vertical-x2.row:nth-child(46)`
- `.opinion-banner-title`
- `.opinion-banner-desc`
- `.vertical-x4.row:nth-child(48)`
- `.widget-webcam`
- `.collage-x3.row:nth-child(50)`
- `.vertical-x1-ad.row:nth-child(51)`
- `article[data-pulse-entity-id="k0Mvp9"] > .display-flex.article__teaser-container > .article__text-container`
- `.vertical-x2.row:nth-child(53)`
- `.vertical-x1-ad.row:nth-child(54)`
- `.vertical-x3.row:nth-child(55)`
- `.vertical-x2.row:nth-child(56)`
- `.vertical-x1-ad.row:nth-child(57)`
- `.collage-x3.row:nth-child(58)`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(59)`
- `.vertical-x2.row:nth-child(60)`
- `.vertical-x3.row:nth-child(61)`
- `.vertical-x2.row:nth-child(63)`
- `.vertical-x4.row:nth-child(64)`
- `.vertical-x3.row:nth-child(65)`
- `.collage-x3.row:nth-child(66)`
- `.sch-datacontroller--footer > .sch-datacontroller__wrapper > .sch-datacontroller__content > .sch-datacontroller__text`
