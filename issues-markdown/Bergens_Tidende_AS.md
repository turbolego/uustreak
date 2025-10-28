# WCAG Violations Report for Bergens Tidende AS

**Timestamp:** 2025-10-28T12:57:18.549Z
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
- **Count:** 18

#### Affected Elements:

- `#buy-abo-stripe-btn`
- `.liveticker-red`
- `.memo > .text-container > h3`
- `.kryssord > .text-container > h3`
- `.minikryss > .text-container > h3`
- `.ordjakten > .text-container > h3`
- `a[aria-label="– Sanninga er komen fram"] > .article__text-container > .article__section-kicker-container > .article__section`
- `article[data-pulse-entity-id="zAW9J5"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `article[data-pulse-entity-id="ny5l4B"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `article[data-pulse-entity-id="B05rv7"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
- `article[data-pulse-entity-id="Vzy4mV"] > .article__teaser-container > .article__link.url > .article__text-container > .article__section-kicker-container > .article__section`
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
- **Count:** 42

#### Affected Elements:

- `h1`
- `#buy-abo-stripe-text`
- `#buy-abo-stripe-link`
- `.liveticker-red`
- `a[data-name="Trafikken"]`
- `.liveticker-item--snooze > .name`
- `.collage-x3.row:nth-child(1)`
- `.collage-x3.row:nth-child(4)`
- `.vertical-x2.row:nth-child(7)`
- `.vertical-x3.row:nth-child(10)`
- `.display-flex > .article__text-container`
- `.hjernetrim-front-widget`
- `.collage-x3.row:nth-child(15)`
- `.vertical-x2.row:nth-child(18)`
- `.vertical-x3.row:nth-child(19)`
- `.collage-x3.row:nth-child(21)`
- `.vertical-x2.row:nth-child(22)`
- `.podcast-header`
- `.podcast-main`
- `.podcast-sub > .item:nth-child(1)`
- `.item:nth-child(3)`
- `.collage-x3.row:nth-child(24)`
- `.vertical-static-ad.vertical-x1-ad.row:nth-child(25)`
- `.vertical-x2.row:nth-child(26)`
- `.vertical-x3.row:nth-child(28)`
- `.widget-football.regional-widget`
- `.collage-x3.row:nth-child(30)`
- `.vertical-x2.row:nth-child(31)`
- `.vertical-x3.row:nth-child(32)`
- `.collage-x3.row:nth-child(33)`
- `.vertical-x1-ad.row:nth-child(34)`
- `.vertical-x2.row:nth-child(37)`
- `.collage-x3.row:nth-child(39)`
- `.opinion-banner-title`
- `.opinion-banner-desc`
- `.vertical-x2.row:nth-child(41)`
- `.widget-webcam`
- `.collage-x3.row:nth-child(43)`
- `.vertical-x1-ad.row:nth-child(44)`
- `.vertical-x2.row:nth-child(45)`
- `.collage-x3.row:nth-child(46)`
- `.vertical-x1-ad.row:nth-child(47)`
