# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2026-08-06T02:34:27.854Z
**URL:** [https://www.adressa.no/](https://www.adressa.no/)
**Total Violations:** 7

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

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 94

#### Affected Elements:

- `.is-hendelse-skin.gridfullsize.hot60 > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.is-section-sport-skin.hot70.gridspotlightside > a > .t100`
- `.variant-a.opinion.is-section-meninger-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-section-sport-skin.gridspotlightside.hot60 > a > .t100`
- `.gridfullsize-bundle > a > .t100`
- `.small-items.griddouble.life20 > a > .t100`
- `.small-items.griddouble.life60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-rbk-skin.life20.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .is-section-mn24-skin.life20.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .gridtriple.hot60.life40 > a > .t100`
- `.hot70.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .is-section-kultur-skin.gridspotlight.card-size-large > a > .t100`
- `.is-hendelse-skin.life20.gridspotlightside > a > .t100`
- `.is-section-sport-skin.life20.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .no-image.life20.gridspotlightside > a > .t100`
- `.opinion.is-section-meninger-skin.hot70 > a > .t100`
- `.is-section-mn24-skin.hot70.gridspotlight > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .no-image.life20.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .is-rbk-skin.life20.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(12) > .gridtriple.hot60.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(12) > .life20.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(12) > .is-hendelse-skin.no-image.gridtriple > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .no-image.life20.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .is-section-kultur-skin.gridspotlightside.hot60 > a > .t100`
- `.gridspotlightside.hot60.life40:nth-child(4) > a > .t100`
- `.no-image.life20.gridspotlightside:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .gridspotlightside.hot50.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .no-image.life20.gridspotlightside:nth-child(4) > a > .t100`
- `.is-rbk-skin.life20.gridtriple > a > .t100`
- `.life20.gridtriple.hot60 > a > .t100`
- `.hot20 > a > .t100`
- `.is-hendelse-skin.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .no-image.life20.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .life20.gridspotlightside.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .life20.gridspotlightside.hot50:nth-child(4) > a > .t100`
- `.AdWithTeaser.grid:nth-child(21) > .grade.gridtriple.hot50 > a > .t100`
- `.opinion.is-section-meninger-skin.life20:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .is-section-trdby-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .no-image.life20.gridspotlightside > a > .t100`
- `.opinion.is-section-meninger-skin.life20:nth-child(4) > a > .t100`
- `.ThreeTeasers.grid:nth-child(25) > .life20.gridtriple.hot50:nth-child(1) > a > .t100`
- `.is-section-kultur-skin.life20.gridtriple > a > .t100`
- `.breakingvarsel > a > .t100`
- `.opinion.is-section-meninger-skin.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .is-section-kultur-skin.gridspotlightside.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .hot70.gridspotlightside.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .gridspotlightside.hot60.life40:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .is-section-kultur-skin.gridspotlightside.hot60 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(29) > .gridtriple.hot60.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(30) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(30) > .gridtriple.hot60.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(30) > .gridtriple.hot60.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.grid:nth-child(32) > .is-hendelse-skin.life20.gridtriple > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .is-section-kultur-skin.grade.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .opinion.is-section-meninger-skin.life20 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .is-section-kultur-skin.gridspotlightside.hot60 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(34) > .life60.gridtriple.hot50 > a > .t100`
- `.variant-a.gridspotlightside.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.is-hendelse-skin.gridspotlightside.hot60 > a > .t100`
- `.AdWithTeaser.grid:nth-child(37) > .grade.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(38) > .life60.gridtriple.hot50 > a > .t100`
- `.opinion.is-section-meninger-skin.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(38) > .gridtriple.hot60.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .gridtriple.hot50.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .is-section-kultur-skin.grade.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .gridspotlightside.hot50.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .gridspotlightside.hot60.life40 > a > .t100`
- `.AdWithTeaser.grid:nth-child(41) > .life60.gridtriple.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .is-section-kultur-skin.gridspotlightside.is-skin > a > .t100`
- `.is-section-trdby-skin.hot70.gridspotlight > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .hot70.gridspotlightside.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(43) > .is-hendelse-skin.gridtriple.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(43) > .gridtriple.hot50.life40:nth-child(2) > a > .t100`
- `.hot70.is-section-kultur-skin.grade > a > .t100`
- `.customSkin-video-square > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlightside.hot60.life40 > a > .t100`
- `.is-section-sport-skin.life60.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(46) > .gridtriple.hot50.life40:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(46) > .gridtriple.hot50.life40:nth-child(2) > a > .t100`
- `.is-section-trdby-skin.gridtriple.is-skin > a > .t100`
- `.AdWithTeaser.grid:nth-child(47) > .life60.gridtriple.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .gridspotlightside.hot50.life40 > a > .t100`
- `.variant-a.life60.gridspotlight > a > .t100`
- `.hot80 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(49) > .life60.gridtriple.hot50 > a > .t100`
- `.hot40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(50) > .life60.gridtriple.hot50:nth-child(2) > a > .t100`
- `.variant-a.life60.gridtriple > a > .t100`

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
