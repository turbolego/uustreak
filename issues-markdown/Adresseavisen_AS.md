# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2025-11-20T00:23:04.444Z
**URL:** [https://www.adressa.no/](https://www.adressa.no/)
**Total Violations:** 9

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- `.disabled`
- `.right`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.Abobutton`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 26

#### Affected Elements:

- `.center.no-padding.table-cell:nth-child(2) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(2) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(3) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(3) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(4) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(4) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(5) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(5) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(6) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(6) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(7) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(7) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(8) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(8) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(9) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(9) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(10) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(10) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(11) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(11) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(12) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(12) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(13) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(13) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(14) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(14) > .fade-image.icon > .on`

### Aside should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the complementary landmark or aside is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-complementary-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.teaserasides`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 98

#### Affected Elements:

- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot70.gridspotlight.card-size-large > a > .t100`
- `.variant-a.hot50.gridspotlightside > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-section-sport-skin.is-skin.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .life20.hot50.gridspotlightside > a > .t100`
- `.is-section-mn24-skin.gridspotlight.card-size-large > a > .t100`
- `.customSkin-hendelse > a > .t100`
- `.ThreeTeasers.grid:nth-child(3) > .is-section-meninger-skin.opinion.is-skin:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(3) > .is-section-meninger-skin.opinion.is-skin:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(3) > .is-section-kultur-skin.is-skin.gridtriple > a > .t100`
- `.gridfullsize-bundle > a > .t100`
- `.is-dark-skin > a > .t100`
- `.hot70.gridspotlightside.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .life20.hot50.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlightside.hot60.life40:nth-child(1) > a > .t100`
- `.is-section-kultur-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlightside.hot60.life40:nth-child(3) > a > .t100`
- `.is-rbk-skin.is-skin.life20 > a > .t100`
- `.is-section-sport-skin.is-skin.gridtriple > a > .t100`
- `.grade.gridtriple.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(12) > .is-section-sport-skin.gridspotlight.card-size-large > a > .t100`
- `.is-section-kultur-skin.is-skin.gridspotlightside:nth-child(2) > a > .t100`
- `.is-section-kultur-skin.is-skin.gridspotlightside:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .life20.gridspotlightside.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot70.is-section-sport-skin.gridspotlight > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .life20.hot50.gridspotlightside:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .no-image.life20.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(16) > .is-section-meninger-skin.opinion.is-skin > a > .t100`
- `.life60.gridtriple.hot60 > a > .t100`
- `.hot70.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlightside.hot60.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .is-section-mn24-skin.is-skin.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .hot50.gridspotlightside.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlight.card-size-large.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .life20.hot50.gridspotlightside:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .no-image.life20.hot50 > a > .t100`
- `.AdWithTeaser.grid:nth-child(20) > .is-section-kultur-skin.is-skin.gridtriple > a > .t100`
- `.hot70.life60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(21) > .is-section-meninger-skin.opinion.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(21) > .life20.gridtriple.hot60 > a > .t100`
- `.hot70.is-section-sport-skin.life60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .no-image.life20.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .gridspotlightside.hot60.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .is-section-mn24-skin.is-skin.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .is-section-meninger-skin.opinion.is-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .hot40.life20.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .no-image.life20.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(27) > .life20.gridtriple.hot50 > a > .t100`
- `.is-section-mn24-skin.is-skin.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(27) > .gridtriple.hot50.life40:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .is-section-meninger-skin.opinion.gridspotlight > a > .t100`
- `.variant-a.is-section-sport-skin.is-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .hot50.gridspotlightside.life40 > a > .t100`
- `.variant-a.life20.gridtriple > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .variant-a.gridspotlightside.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .is-section-mn24-skin.is-skin.life20 > a > .t100`
- `.hot40.no-image.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(34) > .life20.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(34) > .gridtriple.hot60.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(34) > .gridtriple.hot60.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.grid:nth-child(35) > .life20.gridtriple.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.is-rbk-skin.is-skin.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .life20.hot50.gridspotlightside > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(37) > .gridtriple.hot60.life40 > a > .t100`
- `.grade.hot50.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .is-section-meninger-skin.opinion.gridspotlight > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .life20.hot50.gridspotlightside > a > .t100`
- `.AdWithTeaser.grid:nth-child(39) > .life20.gridtriple.hot50 > a > .t100`
- `.hot40.life20.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(40) > .grade.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(40) > .gridtriple.hot50.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(41) > .life60.gridtriple.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .gridspotlightside.hot60.life40:nth-child(2) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .gridspotlightside.hot60.life40:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .is-section-kultur-skin.is-skin.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .is-section-sport-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .life60.hot50.gridspotlightside > a > .t100`
- `.AdWithTeaser.grid:nth-child(44) > .variant-a.gridtriple.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(45) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(45) > .gridtriple.hot60.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(45) > .is-section-meninger-skin.opinion.is-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot50.gridspotlightside.life40:nth-child(2) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot50.gridspotlightside.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(47) > .gridtriple.hot50.life40 > a > .t100`
- `.AdWithTeaser.grid:nth-child(49) > .gridtriple.hot60.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(50) > .life60.hot50.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(50) > .life60.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(50) > .hot50.gridspotlightside.life40 > a > .t100`
- `.is-section-kultur-skin.grade.life60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(51) > .gridtriple.hot50.life40 > a > .t100`
- `.life60.gridtriple.hot50:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(52) > .gridtriple.hot50.life40 > a > .t100`
- `a[href$="dyr-i-drift"] > .t100`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.Layout`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.top`
- `.Layout`

### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1, RGAAv4, RGAA-10.6.1
- **Count:** 6

#### Affected Elements:

- `a:nth-child(5)`
- `section:nth-child(4) > div > div > .Tips > dl > dd > a[href="tel:46407200"]`
- `div > div > p > a:nth-child(1)`
- `p > a:nth-child(2)`
- `a[href$="medietilsynet.no/"]`
- `p > a:nth-child(4)`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
