# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2026-11-10T06:12:49.747Z
**URL:** [https://www.adressa.no/](https://www.adressa.no/)
**Total Violations:** 8

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- `.left`
- `.right`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `.Abobutton`
- `#dakapo_postopbar, a`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `#dakapo_postopbar`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.variant-a.hot60.gridspotlightside > a > .t100 > h3`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 100

#### Affected Elements:

- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-hendelse-skin.life20.gridspotlightside > a > .t100`
- `.h-low.hot60.gridspotlightside > a > .t100`
- `.variant-a.hot60.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot70.gridspotlightside.life40 > a > .t100`
- `.h-low.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .hot70.is-section-kultur-skin.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .is-section-meninger-skin.opinion.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .is-section-mn24-skin.life20.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .gridspotlightside.hot50.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .is-rbk-skin.hot60.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.is-section-sport-skin.life20.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(12) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(12) > .is-section-sport-skin.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(12) > .hot70.is-section-kultur-skin.life60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.is-rbk-skin.gridspotlightside.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .is-section-kultur-skin.grade.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .no-image.is-hendelse-skin.life20 > a > .t100`
- `.variant-a.life20.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .gridspotlightside.hot50.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .no-image.life20.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(18) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.hot80.variant-a.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(18) > .life20.gridtriple.hot50:nth-child(3) > a > .t100`
- `.is-section-meninger-skin.opinion.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .no-image.is-hendelse-skin.life20 > a > .t100`
- `.is-hendelse-skin.gridspotlightside.hot50:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .hot60.gridspotlightside.life40 > a > .t100`
- `.AdWithTeaser.grid:nth-child(21) > .is-hendelse-skin.life20.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(22) > .gridtriple.hot50.life40:nth-child(1) > a > .t100`
- `.is-blank-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(22) > .gridtriple.hot50.life40:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .is-section-sport-skin.life20.gridspotlightside > a > .t100`
- `.variant-a.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .life20.gridspotlightside.hot50:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .no-image.is-hendelse-skin.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(25) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(25) > .life20.gridtriple.hot50:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(25) > .is-section-mn24-skin.life20.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(27) > .no-image.is-hendelse-skin.life20 > a > .t100`
- `.no-image.life20.gridtriple:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot70.gridtriple.life40 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .is-hendelse-skin.gridtriple.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .is-rbk-skin.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .is-section-mn24-skin.life20.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .life20.gridspotlightside.hot50:nth-child(3) > a > .t100`
- `.AdWithTeaser.grid:nth-child(31) > .is-section-mn24-skin.life20.gridtriple > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(32) > .hot60.gridspotlightside.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(32) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.hot40.gridspotlightside.life40 > a > .t100`
- `.hot30 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(33) > .is-section-sport-skin.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(35) > .is-section-sport-skin.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(35) > .is-section-kultur-skin.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(35) > .gridtriple.hot50.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.grid:nth-child(36) > .gridtriple.hot50.life40 > a > .t100`
- `.hot40.gridspotlight.card-size-large > a > .t100`
- `.is-hendelse-skin.hot60.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .is-rbk-skin.hot60.gridspotlightside > a > .t100`
- `.grade.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(39) > .is-section-kultur-skin.life60.grade > a > .t100`
- `.ThreeTeasers.grid:nth-child(39) > .is-section-sport-skin.life60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(39) > .hot60.gridtriple.life40 > a > .t100`
- `.AdWithTeaser.grid:nth-child(40) > .is-section-sport-skin.life60.gridtriple > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .is-section-kultur-skin.grade.gridspotlightside > a > .t100`
- `.is-rbk-skin.hot70.gridspotlight > a > .t100`
- `.opinion.is-rbk-skin.hot70 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .is-section-kultur-skin.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .is-rbk-skin.hot60.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .hot70.is-section-kultur-skin.gridspotlightside > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(43) > .hot60.gridtriple.life40 > a > .t100`
- `.is-rbk-skin.gridtriple.hot50 > a > .t100`
- `.variant-a.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(44) > .is-section-sport-skin.hot60.gridtriple > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot60.gridspotlightside.life40:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .life60.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .grade.hot60.gridspotlightside > a > .t100`
- `.AdWithTeaser.grid:nth-child(46) > .hot60.gridtriple.life40 > a > .t100`
- `.hot80.life60.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .is-section-sport-skin.gridspotlightside.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .hot70.is-section-kultur-skin.life60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .no-image.gridspotlightside.hot50 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(48) > .life60.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(49) > .gridtriple.hot50.life40 > a > .t100`
- `.life60.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(49) > .is-section-sport-skin.life60.gridtriple > a > .t100`
- `.life60.hot60.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(51) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(51) > .life60.gridspotlightside.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(52) > .is-section-kultur-skin.life60.grade:nth-child(1) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(52) > .hot70.life60.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(52) > .is-section-kultur-skin.life60.grade:nth-child(3) > a > .t100`
- `.hot40.is-rbk-skin.gridtriple > a > .t100`
- `.customSkin-podcast > a > .t100`
- `.ThreeTeasers.grid:nth-child(53) > .hot60.gridtriple.life40 > a > .t100`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.Layout`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.top`
- `.Layout`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
