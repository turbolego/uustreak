# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2026-08-20T01:32:40.384Z
**URL:** [https://www.adressa.no/](https://www.adressa.no/)
**Total Violations:** 8

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

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/image-alt?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 98

#### Affected Elements:

- `.is-rbk-skin.opinion.hot70 > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-section-kultur-skin.hot60.is-skin > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlightside.life40:nth-child(3) > a > .t100`
- `.ThreeTeasers.grid:nth-child(1) > .is-rbk-skin.life20.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(1) > .hot70.gridtriple.life40 > a > .t100`
- `.hot20.life20.gridtriple > a > .t100`
- `.hot10 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(4) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.life60.gridspotlightside.hot50 > a > .t100`
- `.hot20.no-image.life20 > a > .t100`
- `.is-section-meninger-skin.opinion.hot70 > a > .t100`
- `.is-section-sport-skin.life20.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .hot60.gridspotlightside.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(10) > .is-section-sport-skin.hot60.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(10) > .life20.gridtriple.hot50:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(10) > .life20.gridtriple.hot50:nth-child(3) > a > .t100`
- `.tip > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .hot70.is-section-kultur-skin.gridspotlight > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .is-rbk-skin.life20.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .no-image.life20.gridspotlightside > a > .t100`
- `.breakingvarsel.is-rbk-skin.gridspotlight > a > .t100`
- `.hot70.gridspotlightside.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .is-section-kultur-skin.hot60.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(16) > .life20.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(16) > .life20.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(16) > .hot60.gridtriple.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .is-section-sport-skin.is-skin.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .is-section-mn24-skin.life20.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .gridspotlightside.hot50.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .no-image.life20.gridspotlightside > a > .t100`
- `.AdWithTeaser.grid:nth-child(21) > .is-section-mn24-skin.life20.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(22) > .is-rbk-skin.is-skin.gridtriple > a > .t100`
- `.no-image.life20.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(22) > .hot70.is-section-kultur-skin.is-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .life20.gridspotlightside.hot50:nth-child(1) > a > .t100`
- `.life60.hot70.is-section-kultur-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .gridspotlightside.hot50.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .no-image.life20.gridspotlightside > a > .t100`
- `.grade.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(26) > .life20.gridtriple.hot50:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(26) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .is-section-meninger-skin.opinion.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .no-image.life20.gridspotlightside > a > .t100`
- `.breakingvarsel.life20.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .life20.gridspotlightside.hot50:nth-child(4) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(29) > .gridtriple.hot50.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .no-image.life20.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.hot40.life20.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .hot60.gridspotlightside.life40 > a > .t100`
- `.AdWithTeaser.grid:nth-child(32) > .is-section-kultur-skin.hot60.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(33) > .hot60.gridtriple.life40:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(33) > .is-section-kultur-skin.is-skin.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(33) > .hot60.gridtriple.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(34) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .is-section-kultur-skin.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .no-image.life20.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .is-section-kultur-skin.is-skin.gridspotlightside > a > .t100`
- `.gridspotlightside.hot50.life40:nth-child(4) > a > .t100`
- `.AdWithTeaser.grid:nth-child(37) > .life60.gridtriple.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .hot60.gridspotlightside.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.life60.hot60.gridspotlightside > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .is-section-kultur-skin.is-skin.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(40) > .is-section-meninger-skin.opinion.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(40) > .hot60.gridtriple.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(40) > .life60.gridtriple.hot50 > a > .t100`
- `.AdWithTeaser.grid:nth-child(41) > .hot60.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .is-section-meninger-skin.opinion.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .is-section-sport-skin.is-skin.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .gridspotlightside.hot50.life40:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .gridspotlightside.hot50.life40:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.grade.gridspotlightside.hot50 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(44) > .hot60.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(45) > .gridtriple.hot50.life40:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(45) > .gridtriple.hot50.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(45) > .gridtriple.hot50.life40:nth-child(3) > a > .t100`
- `.ThreeTeasers.grid:nth-child(46) > .is-section-kultur-skin.is-skin.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(46) > .gridtriple.hot50.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(46) > .gridtriple.hot50.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.grid:nth-child(47) > .gridtriple.hot50.life40 > a > .t100`
- `.is-section-trdby-skin.hot40.life60 > a > .t100`
- `.is-section-trdby-skin.hot40.is-skin:nth-child(2) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .gridspotlightside.hot50.life40 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(49) > .life60.gridtriple.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(50) > .gridspotlightside.hot50.life40:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(50) > .is-rbk-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(50) > .gridspotlightside.hot50.life40:nth-child(3) > a > .t100`
- `.life60.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(52) > .life60.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(52) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(53) > .gridtriple.hot50.life40:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(53) > .gridtriple.hot50.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(53) > .gridtriple.hot50.life40:nth-child(3) > a > .t100`

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
