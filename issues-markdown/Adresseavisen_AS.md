# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2025-11-01T00:32:33.137Z
**URL:** [https://www.adressa.no/](https://www.adressa.no/)
**Total Violations:** 9

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT
- **Count:** 2

#### Affected Elements:

- `.disabled`
- `.right`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 1

#### Affected Elements:

- `.Abobutton`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT
- **Count:** 24

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

### Aside should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the complementary landmark or aside is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-complementary-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.teaserasides`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 102

#### Affected Elements:

- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .life60.gridspotlightside.hot50 > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .no-image.gridspotlightside.hot50 > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot50.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-section-mn24-skin.is-skin.gridspotlightside > a > .t100`
- `.gridfullsize-bundle.is-section-kultur-skin.card-size-large > a > .t100`
- `.griddouble.small-items.is-section-kultur-skin:nth-child(1) > a > .t100`
- `.griddouble.small-items.is-section-kultur-skin:nth-child(2) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-rbk-skin.hot60.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(3) > .is-section-meninger-skin.opinion.hot60 > a > .t100`
- `.grade.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(3) > .is-section-kultur-skin.hot70.is-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .gridfullsize-bundle.card-size-large.hot70 > a > .t100`
- `.breakingvarsel > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .gridspotlightside.hot50.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .hot60.gridspotlightside.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot70.gridspotlightside.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .is-rbk-skin.hot60.is-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .no-image.gridspotlightside.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(9) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(9) > .is-rbk-skin.hot60.is-skin > a > .t100`
- `.tip > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(12) > .gridspotlight.card-size-large.hot70 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(12) > .hot70.gridspotlightside.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(12) > .is-section-sport-skin.is-skin.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .is-section-meninger-skin.opinion.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.h-lower.hot60.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .no-image.gridspotlightside.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(16) > .is-section-meninger-skin.opinion.is-skin:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(16) > .no-image.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(16) > .is-section-meninger-skin.opinion.is-skin:nth-child(3) > a > .t100`
- `.grade.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot70.gridspotlightside.life40 > a > .t100`
- `.hot40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlightside.hot50.life20:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlight.card-size-large.hot70 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .is-section-meninger-skin.opinion.is-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .no-image.gridspotlightside.hot50 > a > .t100`
- `.AdWithTeaser.grid:nth-child(20) > .is-section-sport-skin.is-skin.gridtriple > a > .t100`
- `.gridtriple.hot50.life20:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(21) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(21) > .gridtriple.hot50.life20:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .is-rbk-skin.gridspotlight.card-size-large > a > .t100`
- `.grade.hot70.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .is-section-mn24-skin.is-skin.gridspotlightside > a > .t100`
- `.feature > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .gridspotlightside.hot50.life40:nth-child(3) > a > .t100`
- `.is-section-meninger-skin.opinion.hot70 > a > .t100`
- `.ThreeTeasers.grid:nth-child(27) > .is-section-mn24-skin.is-skin.gridtriple:nth-child(2) > a > .t100`
- `.is-section-mn24-skin.is-skin.gridtriple:nth-child(3) > a > .t100`
- `.is-rbk-skin.opinion.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .gridspotlightside.hot50.life20:nth-child(2) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .hot60.gridspotlightside.life20 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .no-image.gridspotlightside.hot50 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(30) > .gridtriple.hot50.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .gridspotlightside.hot50.life20:nth-child(1) > a > .t100`
- `.hot80 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .gridspotlightside.hot50.life20:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .no-image.gridspotlightside.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(34) > .hot70.gridtriple.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(34) > .no-image.gridtriple.hot50:nth-child(2) > a > .t100`
- `.no-image.gridtriple.hot50:nth-child(3) > a > .t100`
- `.AdWithTeaser.grid:nth-child(35) > .is-section-mn24-skin.is-skin.gridtriple > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.hot70 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .gridspotlightside.hot50.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .no-image.gridspotlightside.hot50:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .no-image.gridspotlightside.hot50:nth-child(4) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(37) > .hot60.gridtriple.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(38) > .hot70.gridtriple.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(38) > .no-image.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(38) > .hot60.gridtriple.life20 > a > .t100`
- `.AdWithTeaser.grid:nth-child(39) > .is-section-sport-skin.hot60.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(40) > .is-rbk-skin.hot60.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(40) > .hot60.gridtriple.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(40) > .hot60.gridtriple.life20 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(41) > .hot60.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(42) > .is-section-kultur-skin.hot60.is-skin > a > .t100`
- `.grade.gridtriple.hot50 > a > .t100`
- `.hot60.gridtriple.life40:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .is-section-sport-skin.hot60.is-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .is-section-meninger-skin.opinion.is-skin > a > .t100`
- `.AdWithTeaser.grid:nth-child(44) > .hot70.gridtriple.life40 > a > .t100`
- `.is-section-kultur-skin.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlightside.hot50.life20:nth-child(2) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlightside.hot50.life20:nth-child(3) > a > .t100`
- `.ThreeTeasers.grid:nth-child(46) > .is-section-kultur-skin.is-skin.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(46) > .is-section-mn24-skin.is-skin.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(46) > .gridtriple.hot50.life20 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(47) > .hot60.gridtriple.life40 > a > .t100`
- `.AdWithTeaser.grid:nth-child(49) > .gridtriple.hot50.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(50) > .life60.gridspotlightside.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(50) > .gridspotlight.card-size-large.hot70 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(50) > .hot70.gridspotlightside.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(51) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.is-section-sport-skin.hot70.is-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(51) > .hot70.gridspotlightside.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(52) > .is-section-kultur-skin.hot60.is-skin > a > .t100`
- `.is-section-meninger-skin.opinion.gridfullsize > a > .t100`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.Layout`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.top`
- `.Layout`

### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
