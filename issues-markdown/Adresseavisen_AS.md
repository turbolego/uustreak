# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2025-10-18T00:21:59.846Z
**URL:** [https://www.adressa.no/](https://www.adressa.no/)
**Total Violations:** 10

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

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2
- **Count:** 1

#### Affected Elements:

- `#dakapo_postopbar`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .life20.gridspotlightside.hot50 > a > .t100 > h3`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT
- **Count:** 22

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

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 99

#### Affected Elements:

- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-section-meninger-skin.opinion.hot70 > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot70.gridspotlightside.life40 > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlightside.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .life20.gridspotlightside.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-section-kultur-skin.grade.life60 > a > .t100`
- `.variant-a.is-section-sport-skin.life20 > a > .t100`
- `.is-rbk-skin.is-skin.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot70.life20.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot70.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .grade.hot70.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .is-section-kultur-skin.hot70.is-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .life20.hot60.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot60.gridspotlightside.life40:nth-child(1) > a > .t100`
- `.is-section-sport-skin.life60.gridspotlight > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot60.gridspotlightside.life40:nth-child(3) > a > .t100`
- `.is-section-kultur-skin.opinion.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot70.life20.gridtriple > a > .t100`
- `.customSkin-focus-top > a > .t100`
- `.is-section-sport-skin.hot70.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(12) > .life20.gridspotlightside.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(12) > .life60.gridspotlightside.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(13) > .hot60.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(13) > .life20.gridtriple.hot50:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(13) > .is-section-mn24-skin.life20.is-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .is-section-mn24-skin.life20.is-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .gridspotlightside.hot50.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .no-image.life20.gridspotlightside > a > .t100`
- `.hot80 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .is-section-kultur-skin.hot70.is-skin > a > .t100`
- `.is-section-mn24-skin.is-skin.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .no-image.life20.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(19) > .life20.gridtriple.hot50:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(19) > .life20.gridtriple.hot50:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(19) > .hot60.gridtriple.life40 > a > .t100`
- `.AdWithTeaser.grid:nth-child(20) > .is-section-kultur-skin.grade.life60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(21) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(21) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.feature > a > .t100`
- `.ThreeTeasers.grid:nth-child(24) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(24) > .life20.gridtriple.hot50:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(24) > .is-section-trdby-skin.is-skin.gridtriple > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.is-section-kultur-skin.life20.is-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .no-image.life20.gridspotlightside > a > .t100`
- `.is-section-trdby-skin.life20.is-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .gridspotlightside.hot50.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .is-section-meninger-skin.opinion.hot70 > a > .t100`
- `.is-rbk-skin.life20.is-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .no-image.life20.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(28) > .life20.gridtriple.hot50:nth-child(1) > a > .t100`
- `.variant-a.life20.gridtriple:nth-child(2) > a > .t100`
- `.variant-a.life20.gridtriple:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(30) > .life20.gridtriple.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .is-section-sport-skin.gridspotlight.card-size-large > a > .t100`
- `.no-image.life20.gridspotlightside:nth-child(2) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .no-image.life20.gridspotlightside:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .gridspotlightside.hot50.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(34) > .life20.hot60.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(34) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(34) > .is-section-meninger-skin.opinion.is-skin > a > .t100`
- `.AdWithTeaser.grid:nth-child(35) > .life20.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(36) > .hot60.gridtriple.life40:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(36) > .hot60.gridtriple.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(36) > .hot60.gridtriple.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(37) > .gridtriple.hot50.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .is-section-kultur-skin.is-skin.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .gridspotlightside.hot50.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.grid:nth-child(39) > .is-section-sport-skin.is-skin.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .is-section-meninger-skin.opinion.is-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .life20.gridspotlightside.hot50 > a > .t100`
- `.grade.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(42) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(42) > .hot60.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(42) > .hot70.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .life60.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot70.gridspotlightside.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .is-section-sport-skin.life60.is-skin > a > .t100`
- `.AdWithTeaser.grid:nth-child(44) > .hot60.gridtriple.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot60.gridspotlightside.life40:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot60.gridspotlightside.life40:nth-child(3) > a > .t100`
- `.ThreeTeasers.grid:nth-child(46) > .is-section-meninger-skin.opinion.is-skin:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(46) > .is-section-meninger-skin.opinion.is-skin:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot60.gridtriple.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(47) > .is-section-sport-skin.is-skin.hot60 > a > .t100`
- `.AdWithTeaser.grid:nth-child(49) > .hot60.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(50) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(50) > .is-section-kultur-skin.is-skin.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(50) > .gridspotlightside.hot50.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(51) > .is-section-trdby-skin.is-skin.gridspotlightside > a > .t100`
- `.is-section-trdby-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(51) > .gridspotlightside.hot50.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(52) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(53) > .life60.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(53) > .is-section-trdby-skin.is-skin.gridtriple > a > .t100`
- `.life60.gridtriple.hot50 > a > .t100`

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
