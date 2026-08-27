# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2026-08-27T07:35:42.215Z
**URL:** [https://www.adressa.no/](https://www.adressa.no/)
**Total Violations:** 9

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- `.disabled`
- `.right`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.Abobutton`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `#dakapo_postopbar`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot50.life40:nth-child(1) > a > .t100 > h3`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 24

#### Affected Elements:

- `.center.no-padding.table-cell:nth-child(2) > .fade-image.icon > img[src=""]:nth-child(1)`
- `.center.no-padding.table-cell:nth-child(2) > .fade-image.icon > img[src=""]:nth-child(2)`
- `.center.no-padding.table-cell:nth-child(3) > .fade-image.icon > img[src=""]:nth-child(1)`
- `.center.no-padding.table-cell:nth-child(3) > .fade-image.icon > img[src=""]:nth-child(2)`
- `.center.no-padding.table-cell:nth-child(4) > .fade-image.icon > img[src=""]:nth-child(1)`
- `.center.no-padding.table-cell:nth-child(4) > .fade-image.icon > img[src=""]:nth-child(2)`
- `.center.no-padding.table-cell:nth-child(5) > .fade-image.icon > img[src=""]:nth-child(1)`
- `.center.no-padding.table-cell:nth-child(5) > .fade-image.icon > img[src=""]:nth-child(2)`
- `.center.no-padding.table-cell:nth-child(6) > .fade-image.icon > img[src=""]:nth-child(1)`
- `.center.no-padding.table-cell:nth-child(6) > .fade-image.icon > img[src=""]:nth-child(2)`
- `.center.no-padding.table-cell:nth-child(7) > .fade-image.icon > img[src=""]:nth-child(1)`
- `.center.no-padding.table-cell:nth-child(7) > .fade-image.icon > img[src=""]:nth-child(2)`
- `.center.no-padding.table-cell:nth-child(8) > .fade-image.icon > img[src=""]:nth-child(1)`
- `.center.no-padding.table-cell:nth-child(8) > .fade-image.icon > img[src=""]:nth-child(2)`
- `.center.no-padding.table-cell:nth-child(9) > .fade-image.icon > img[src=""]`
- `.center.no-padding.table-cell:nth-child(9) > .fade-image.icon > img:nth-child(2)`
- `.center.no-padding.table-cell:nth-child(10) > .fade-image.icon > img[src=""]`
- `.center.no-padding.table-cell:nth-child(10) > .fade-image.icon > img:nth-child(2)`
- `.center.no-padding.table-cell:nth-child(11) > .fade-image.icon > img[src=""]`
- `.center.no-padding.table-cell:nth-child(11) > .fade-image.icon > img:nth-child(2)`
- `.center.no-padding.table-cell:nth-child(12) > .fade-image.icon > img[src=""]`
- `.center.no-padding.table-cell:nth-child(12) > .fade-image.icon > img:nth-child(2)`
- `.center.no-padding.table-cell:nth-child(13) > .fade-image.icon > img[src=""]`
- `.center.no-padding.table-cell:nth-child(13) > .fade-image.icon > img:nth-child(2)`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 100

#### Affected Elements:

- `.breakingvarsel > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-rbk-skin.gridspotlightside.life20 > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-section-mn24-skin.gridspotlightside.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot50.life40:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot50.life40:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .no-image.gridspotlightside.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.is-hendelse-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .grade.hot50.gridtriple > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .is-section-kultur-skin.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .hot70.gridspotlightside.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .gridspotlightside.hot50.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .is-section-mn24-skin.gridspotlightside.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .is-section-sport-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .hot70.gridspotlightside.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(12) > .is-section-meninger-skin.opinion.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(12) > .is-section-sport-skin.hot60.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(12) > .life20.hot50.gridtriple > a > .t100`
- `.variant-a.hot70.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .is-dark-skin.gridspotlightside.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .gridspotlightside.hot60.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .is-section-meninger-skin.opinion.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .gridspotlightside.life20.hot50:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .no-image.gridspotlightside.life20 > a > .t100`
- `.hot70.life20.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(18) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(18) > .life20.hot50.gridtriple:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.is-rbk-skin.gridspotlightside.hot60 > a > .t100`
- `.is-rbk-skin.opinion.hot70 > a > .t100`
- `a[href$="mc-velt"] > .t100`
- `.ThreeTeasers.grid:nth-child(22) > .hot50.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(22) > .life20.hot50.gridtriple > a > .t100`
- `.hot70.is-section-kultur-skin.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(25) > .life60.hot50.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(25) > .life20.hot50.gridtriple > a > .t100`
- `.life60.is-section-kultur-skin.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(26) > .no-image.life20.hot50:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(26) > .hot70.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(26) > .no-image.life20.hot50:nth-child(3) > a > .t100`
- `.ThreeTeasers.grid:nth-child(28) > .no-image.life20.hot50:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(28) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(28) > .no-image.life20.hot50:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(29) > .hot70.gridtriple.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .is-section-mn24-skin.gridspotlightside.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .is-section-meninger-skin.opinion.gridspotlightside > a > .t100`
- `.AdWithTeaser.grid:nth-child(32) > .hot60.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .is-section-sport-skin.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .gridspotlightside.life20.hot50:nth-child(2) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .gridspotlightside.life20.hot50:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(34) > .grade.hot50.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(36) > .life20.hot50.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(36) > .hot60.gridtriple.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(36) > .is-section-meninger-skin.opinion.hot60 > a > .t100`
- `.AdWithTeaser.grid:nth-child(37) > .hot50.gridtriple.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .gridspotlightside.hot60.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.hot30.gridspotlightside.life20 > a > .t100`
- `.hot40.life20.gridtriple > a > .t100`
- `.customSkin-podcast > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .is-section-mn24-skin.gridspotlightside.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .is-dark-skin.gridspotlightside.hot60 > a > .t100`
- `.AdWithTeaser.grid:nth-child(41) > .hot50.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(42) > .hot60.gridtriple.life40:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(42) > .is-rbk-skin.hot60.is-skin > a > .t100`
- `.hot30.life20.gridtriple > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .is-section-kultur-skin.gridspotlightside.hot60 > a > .t100`
- `.is-section-trdby-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .gridspotlightside.hot50.life40 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(44) > .is-section-trdby-skin.life60.is-skin > a > .t100`
- `.is-section-meninger-skin.opinion.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlightside.hot50.life40 > a > .t100`
- `.hot40.is-section-trdby-skin.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(46) > .life60.hot50.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(46) > .is-section-kultur-skin.hot60.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot60.gridtriple.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.grid:nth-child(47) > .is-section-mn24-skin.hot60.is-skin > a > .t100`
- `.variant-a.gridspotlightside.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .gridspotlightside.hot50.life40:nth-child(3) > a > .t100`
- `.hot30.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(50) > .is-section-kultur-skin.gridspotlight.card-size-large > a > .t100`
- `.is-section-kultur-skin.gridspotlightside.hot60:nth-child(2) > a > .t100`
- `.is-section-kultur-skin.grade.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(52) > .hot50.gridtriple.life40:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(52) > .hot50.gridtriple.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(52) > .hot50.gridtriple.life40:nth-child(3) > a > .t100`
- `.ThreeTeasers.grid:nth-child(53) > .life60.hot50.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(53) > .hot50.gridtriple.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(53) > .hot50.gridtriple.life40:nth-child(3) > a > .t100`
- `.life60.is-section-kultur-skin.grade:nth-child(1) > a > .t100`
- `.is-section-trdby-skin.life60.hot60 > a > .t100`
- `.life60.is-section-kultur-skin.grade:nth-child(3) > a > .t100`
- `.ThreeTeasers.grid:nth-child(55) > .life60.hot50.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(55) > .hot50.gridtriple.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(55) > .hot50.gridtriple.life40:nth-child(3) > a > .t100`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.Layout`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.top`
- `.Layout`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
