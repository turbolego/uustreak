# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2026-10-11T04:34:16.580Z
**URL:** [https://www.adressa.no/](https://www.adressa.no/)
**Total Violations:** 10

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

- `.hot70.gridspotlightside.life40 > a > .t100 > h3`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 100

#### Affected Elements:

- `.variant-b > a > .t100`
- `.is-section-sport-skin.hot70.life20 > a > .t100`
- `.breakingvarsel > a > .t100`
- `.hot70.gridspotlightside.life40 > a > .t100`
- `.gridfullsize-bundle > a > .t100`
- `.hot10 > a > .t100`
- `.small-items.griddouble.is-rbk-skin:nth-child(2) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot50.life40 > a > .t100`
- `.variant-a.is-section-kultur-skin.life60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .life20.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .hot60.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .is-section-sport-skin.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .opinion.is-section-meninger-skin.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .is-section-trdby-skin.gridspotlightside.is-skin > a > .t100`
- `.no-image.life20.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .is-section-kultur-skin.gridspotlightside.is-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .life20.hot60.gridspotlightside > a > .t100`
- `.hot80 > a > .t100`
- `.ThreeTeasers.grid:nth-child(12) > .hot60.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(12) > .gridtriple.hot50.life40 > a > .t100`
- `.hot70.grade.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .life20.gridspotlightside.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .gridspotlightside.hot50.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .grade.gridspotlightside.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .is-hendelse-skin.life20.gridspotlightside > a > .t100`
- `.is-hendelse-skin.gridtriple.is-skin:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(18) > .life60.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(18) > .is-hendelse-skin.life20.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.is-section-mn24-skin.hot60.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .life20.gridspotlightside.hot50:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .no-image.life20.gridspotlightside > a > .t100`
- `.AdWithTeaser.grid:nth-child(21) > .is-rbk-skin.gridtriple.is-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .gridspotlightside.hot50.life40 > a > .t100`
- `.life20.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .life20.gridspotlightside.hot50 > a > .t100`
- `.is-section-sport-skin.hot70.life60 > a > .t100`
- `.is-rbk-skin.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(25) > .variant-a.is-section-kultur-skin.gridtriple > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .is-section-sport-skin.gridspotlightside.is-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .life60.gridspotlightside.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .hot60.gridspotlightside.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .is-section-kultur-skin.grade.gridspotlight > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .gridspotlightside.hot50.life40 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(29) > .opinion.is-section-meninger-skin.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(30) > .is-section-kultur-skin.gridtriple.is-skin > a > .t100`
- `.is-section-mn24-skin.life20.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(30) > .gridtriple.hot50.life40:nth-child(3) > a > .t100`
- `.opinion.is-section-meninger-skin.life20 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .hot70.life60.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .gridspotlightside.hot50.life40 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(34) > .gridtriple.hot50.life40 > a > .t100`
- `.is-rbk-skin.gridspotlightside.is-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .gridspotlightside.hot50.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.grid:nth-child(37) > .grade.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(38) > .gridtriple.hot50.life40:nth-child(1) > a > .t100`
- `.is-section-kultur-skin.grade.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(38) > .is-section-kultur-skin.gridtriple.is-skin:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .gridtriple.hot50.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .is-section-kultur-skin.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .no-image.gridspotlightside.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .gridspotlightside.hot50.life40:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .opinion.is-section-meninger-skin.hot60 > a > .t100`
- `.AdWithTeaser.grid:nth-child(41) > .opinion.is-section-meninger-skin.hot60 > a > .t100`
- `.is-blank-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .is-section-kultur-skin.grade.gridspotlight > a > .t100`
- `.is-section-kultur-skin.hot60.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(43) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(43) > .life60.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(43) > .hot60.gridtriple.life40 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(44) > .gridtriple.hot50.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .is-section-kultur-skin.gridspotlightside.is-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .opinion.is-section-meninger-skin.gridspotlightside > a > .t100`
- `.is-section-trdby-skin.gridspotlightside.is-skin:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .is-section-sport-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .is-section-trdby-skin.gridspotlightside.is-skin:nth-child(3) > a > .t100`
- `.AdWithTeaser.grid:nth-child(47) > .life60.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(48) > .life60.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(48) > .gridtriple.hot50.life40:nth-child(2) > a > .t100`
- `.is-section-trdby-skin.gridtriple.is-skin > a > .t100`
- `.hot40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(50) > .is-section-kultur-skin.grade.gridspotlight > a > .t100`
- `.customSkin-podcast > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(50) > .gridspotlightside.hot50.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(52) > .gridspotlightside.hot50.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(52) > .is-section-kultur-skin.grade.gridspotlight > a > .t100`
- `.is-section-kultur-skin.grade.life60:nth-child(3) > a > .t100`
- `.life60.hot60.gridtriple:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(53) > .life60.gridtriple.hot50 > a > .t100`
- `.life60.hot60.gridtriple:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(54) > .gridspotlight.card-size-large.life60 > a > .t100`
- `.life60.hot60.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(54) > .hot70.life60.gridspotlightside > a > .t100`
- `.hot70.gridfullsize.life60 > a > .t100`

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

### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-in-text-block?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
