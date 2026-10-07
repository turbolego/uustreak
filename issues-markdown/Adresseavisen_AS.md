# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2026-10-07T19:13:58.675Z
**URL:** [https://www.adressa.no/](https://www.adressa.no/)
**Total Violations:** 9

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- `.disabled`
- `.right`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.Abobutton`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `#dakapo_postopbar`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot50.life40:nth-child(1) > a > .t100 > h3`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
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

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 101

#### Affected Elements:

- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot70.gridspotlight.card-size-large > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-hendelse-skin.life20.gridspotlightside > a > .t100`
- `.is-rbk-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot50.life40:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-section-sport-skin.life60.gridspotlight > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-section-kultur-skin.gridspotlightside.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .is-section-sport-skin.is-skin.gridtriple > a > .t100`
- `.variant-a.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .hot70.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .gridspotlightside.hot50.life40 > a > .t100`
- `.is-section-kultur-skin.hot60.gridspotlightside > a > .t100`
- `.hot70.gridspotlightside.life40:nth-child(1) > a > .t100`
- `.gridfullsize-bundle > a > .t100`
- `.small-items.griddouble.hot50 > a > .t100`
- `.small-items.griddouble.hot60 > a > .t100`
- `.hot70.gridspotlightside.life40:nth-child(3) > a > .t100`
- `.ThreeTeasers.grid:nth-child(12) > .opinion.is-section-meninger-skin.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(12) > .hot70.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(12) > .is-section-kultur-skin.hot60.is-skin > a > .t100`
- `.hot70.grade.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .is-section-trdby-skin.gridspotlightside.is-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .gridspotlightside.hot50.life40:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .no-image.is-hendelse-skin.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .opinion.is-section-meninger-skin.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .no-image.life20.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .gridspotlightside.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(18) > .opinion.is-section-meninger-skin.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(18) > .hot60.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(18) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(20) > .no-image.life20.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(20) > .is-section-trdby-skin.is-skin.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(20) > .is-section-sport-skin.is-skin.gridtriple > a > .t100`
- `.AdWithTeaser.grid:nth-child(21) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(22) > .no-image.is-hendelse-skin.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(22) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(22) > .is-section-mn24-skin.life20.is-skin > a > .t100`
- `.is-hendelse-skin.hot70.gridspotlight > a > .t100`
- `.is-section-kultur-skin.gridspotlightside.is-skin:nth-child(2) > a > .t100`
- `.hot40.is-section-kultur-skin.life20 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .no-image.life20.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .life20.gridspotlightside.hot50:nth-child(1) > a > .t100`
- `.is-section-sport-skin.hot70.life60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .life20.gridspotlightside.hot50:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .no-image.life20.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(28) > .life20.gridtriple.hot50:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(28) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(28) > .opinion.is-section-meninger-skin.life20 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(29) > .is-hendelse-skin.life20.is-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .is-hendelse-skin.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .is-hendelse-skin.life20.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .gridspotlightside.hot50.life40 > a > .t100`
- `.AdWithTeaser.grid:nth-child(32) > .hot60.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(33) > .life60.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(33) > .gridtriple.hot50.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(33) > .opinion.is-section-meninger-skin.is-skin > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(34) > .opinion.is-section-meninger-skin.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .hot60.gridspotlightside.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .is-section-mn24-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .life20.gridspotlightside.hot50 > a > .t100`
- `.AdWithTeaser.grid:nth-child(37) > .is-section-mn24-skin.hot60.life20 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .is-section-mn24-skin.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .gridspotlightside.hot50.life40:nth-child(2) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .gridspotlightside.hot50.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(40) > .hot60.life20.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(40) > .life60.gridtriple.hot50 > a > .t100`
- `.grade.gridtriple.hot50 > a > .t100`
- `.hot40.life20.gridtriple > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .gridspotlightside.hot50.life40:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .life60.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .is-section-trdby-skin.gridspotlightside.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(43) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(43) > .is-section-mn24-skin.life20.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(43) > .life20.gridtriple.hot50:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(44) > .opinion.is-section-meninger-skin.life20 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.h-square > a > .t100`
- `.hot40.gridspotlightside.life40 > a > .t100`
- `.tip > a > .t100`
- `.opinion.is-section-meninger-skin.gridspotlight > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .hot60.gridspotlightside.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.grid:nth-child(47) > .hot60.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(48) > .gridtriple.hot50.life40:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(48) > .gridtriple.hot50.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(48) > .hot60.gridtriple.life40 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(49) > .hot60.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(50) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.is-section-sport-skin.gridspotlightside.is-skin > a > .t100`
- `a[href$="slutter-i-nrk"] > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(52) > .gridspotlightside.hot50.life40:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(52) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.variant-a.gridspotlightside.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(53) > .is-section-kultur-skin.life60.grade:nth-child(1) > a > .t100`
- `.variant-a.is-section-trdby-skin.hot70 > a > .t100`
- `.is-section-kultur-skin.life60.grade:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(54) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.life60.gridspotlightside.hot50:nth-child(2) > a > .t100`
- `.life60.gridspotlightside.hot50:nth-child(3) > a > .t100`
- `.SingleTeaser > .is-section-kultur-skin.life60.grade > a > .t100`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.Layout`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.top`
- `.Layout`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
