# WCAG Violations Report for Bergens Tidende AS

**Timestamp:** 2026-05-08T00:55:59.189Z
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
- **Count:** 27

#### Affected Elements:

- `.liveticker-red`
- `._bt_gcann_1 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(1) > a > ._preview-title_1166k_727 > span`
- `._bt_gcann_1 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(2) > a > ._preview-title_1166k_727 > span`
- `._bt_gcann_1 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(3) > a > ._preview-title_1166k_727 > span`
- `._bt_gcann_1 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(4) > a > ._preview-title_1166k_727 > span`
- `._bt_gcann_1 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(5) > a > ._preview-title_1166k_727 > span`
- `.memo > .text-container > h3`
- `.kryssord > .text-container > h3`
- `.minikryss > .text-container > h3`
- `.ordjakten > .text-container > h3`
- `._ballspark_gcann_49 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(1) > a > ._preview-title_1166k_727 > span`
- `._ballspark_gcann_49 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(2) > a > ._preview-title_1166k_727 > span`
- `._ballspark_gcann_49 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(3) > a > ._preview-title_1166k_727 > span`
- `._ballspark_gcann_49 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(4) > a > ._preview-title_1166k_727 > span`
- `._ballspark_gcann_49 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(5) > a > ._preview-title_1166k_727 > span`
- `.opinion-banner-desc`
- `a[aria-label="– Legg ned Akvariet!"] > .article__text-container > .article__section-kicker-container > .article__section`
- `#Vågen`
- `#Finse`
- `#Danmarks\ plass`
- `#Torgallmeningen`
- `#Puddefjordsbroen`
- `#Åsaneveien`
- `article[data-pulse-entity-id="k0Mmwj"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `article[data-pulse-entity-id="bOk0Bq"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `article[data-pulse-entity-id="e7zwbO"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `article[data-pulse-entity-id="k0M9Gv"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`

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
- **Count:** 100

#### Affected Elements:

- `.sr-only`
- `.liveticker-red`
- `a[data-name="Nyheter"]`
- `a[title="Tjuvstarter åpningen 15. mai"] > .name`
- `a[data-name="Trafikken"] > .name`
- `.article--breaking > .display-flex.article__teaser-container > .article__text-container`
- `.collage-x3.row:nth-child(2)`
- `article[data-pulse-entity-id="oWmrQK"]`
- `article[data-pulse-entity-id="8pP4Xx"] > .article__teaser-container`
- `article[data-pulse-entity-id="Pd5R2e"] > .article__teaser-container`
- `article[data-pulse-entity-id="Pd5rmR"] > .article__teaser-container`
- `._bt_gcann_1 > ._content_1166k_643 > ._heading_1166k_647 > span`
- `._bt_gcann_1 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(1) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._bt_gcann_1 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(1) > a > ._preview-title_1166k_727`
- `._bt_gcann_1 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(2) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._bt_gcann_1 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(2) > a > ._preview-title_1166k_727`
- `._bt_gcann_1 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(3) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._bt_gcann_1 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(3) > a > ._preview-title_1166k_727`
- `._bt_gcann_1 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(4) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._bt_gcann_1 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(4) > a > ._preview-title_1166k_727`
- `._bt_gcann_1 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(5) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._bt_gcann_1 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(5) > a > ._preview-title_1166k_727`
- `._bt_gcann_1 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(6) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._bt_gcann_1 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(6) > a > ._preview-title_1166k_727`
- `._bt_gcann_1 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(7) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._bt_gcann_1 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(7) > a > ._preview-title_1166k_727`
- `._bt_gcann_1 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(8) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._bt_gcann_1 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(8) > a > ._preview-title_1166k_727`
- `._preview_1166k_667:nth-child(9) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._preview_1166k_667:nth-child(9) > a > ._preview-title_1166k_727`
- `._preview_1166k_667:nth-child(10) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._preview_1166k_667:nth-child(10) > a > ._preview-title_1166k_727`
- `.vertical-x2.row:nth-child(12)`
- `.collage-x4`
- `.collage-x3.row:nth-child(17)`
- `.hjernetrim-front-widget`
- `.vertical-x2.row:nth-child(20)`
- `.vertical-x3.row:nth-child(23)`
- `.collage-x3.row:nth-child(25)`
- `._sr-only_gcann_153`
- `._ballspark_gcann_49 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(1) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._ballspark_gcann_49 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(1) > a > ._preview-title_1166k_727`
- `._ballspark_gcann_49 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(2) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._ballspark_gcann_49 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(2) > a > ._preview-title_1166k_727`
- `._ballspark_gcann_49 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(3) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._ballspark_gcann_49 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(3) > a > ._preview-title_1166k_727`
- `._ballspark_gcann_49 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(4) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._ballspark_gcann_49 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(4) > a > ._preview-title_1166k_727`
- `._ballspark_gcann_49 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(5) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._ballspark_gcann_49 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(5) > a > ._preview-title_1166k_727`
- `._ballspark_gcann_49 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(6) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._ballspark_gcann_49 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(6) > a > ._preview-title_1166k_727`
- `._ballspark_gcann_49 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(7) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._ballspark_gcann_49 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(7) > a > ._preview-title_1166k_727`
- `._ballspark_gcann_49 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(8) > a > ._preview-image_1166k_715[loading="lazy"]`
- `._ballspark_gcann_49 > ._content_1166k_643 > ._controls_1166k_663 > ._previews_1166k_667 > ._preview_1166k_667:nth-child(8) > a > ._preview-title_1166k_727`
- `.vertical-x2.row:nth-child(31)`
- `.vertical-x3.row:nth-child(32)`
- `.vertical-x2.row:nth-child(34)`
- `.restaurant-list-header`
- `.top-collage-x3 > .column--big.column`
- `.minimal-teaser:nth-child(1)`
- `.minimal-teaser:nth-child(2) > a > .article__img-container`
- `.minimal-teaser:nth-child(2) > a > .teaser-container > .article__kicker-title`
- `.restaurant-map-teaser`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(37)`
- `.vertical-x4.row:nth-child(38)`
- `.vertical-x2.row:nth-child(40)`
- `.widget-football.regional-widget`
- `.vertical-x3.row:nth-child(42)`
- `#podcast-latest > .podcast-header`
- `.podcast-main`
- `.podcast-sub > .item:nth-child(1)`
- `.item:nth-child(3)`
- `.vertical-x2.row:nth-child(44)`
- `.collage-x3.row:nth-child(45)`
- `.vertical-x3.row:nth-child(46)`
- `.vertical-x1-ad.row:nth-child(47)`
- `article[data-pulse-entity-id="Pd5RgX"] > .display-flex.article__teaser-container > .article__text-container`
- `.vertical-small-x2`
- `.opinion-banner-title`
- `.opinion-banner-desc`
- `.vertical-x2.row:nth-child(54)`
- `.widget-webcam`
- `.vertical-x3.row:nth-child(56)`
- `.vertical-x1-ad.row:nth-child(57)`
- `.vertical-x2.row:nth-child(58)`
- `.vertical-x4.row:nth-child(59)`
- `.vertical-x1-ad.row:nth-child(60)`
- `.collage-x3.row:nth-child(61)`
- `.vertical-x2.row:nth-child(62)`
- `.vertical-x1-ad.row:nth-child(63)`
- `.vertical-x3.row:nth-child(64)`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(65)`
- `.vertical-x2.row:nth-child(66)`
- `.collage-x3.row:nth-child(67)`
- `.vertical-x2.row:nth-child(69)`
- `.vertical-x3.row:nth-child(70)`
- `.horizontal-x1.row--full.row:nth-child(71)`
- `.sch-datacontroller--footer > .sch-datacontroller__wrapper > .sch-datacontroller__content > .sch-datacontroller__text`
