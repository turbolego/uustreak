# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2026-11-19T06:29:47.209Z
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
- **Count:** 1

#### Affected Elements:

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

- `.hot10 > a > .t100 > h3`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 100

#### Affected Elements:

- `.variant-a.gridspotlight.card-size-large > a > .t100`
- `.hot30 > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .life60.hot60.gridspotlightside > a > .t100`
- `.variant-c > a > .t100`
- `.hot10 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot50.life40 > a > .t100`
- `.variant-a.hot70.is-section-sport-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .life20.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .gridtriple.hot50.life40 > a > .t100`
- `.hot70.is-section-kultur-skin.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .hot60.gridspotlightside.life40:nth-child(2) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .is-section-kultur-skin.hot60.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .is-hendelse-skin.life20.gridspotlightside:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .is-hendelse-skin.life20.gridspotlightside:nth-child(3) > a > .t100`
- `.ThreeTeasers.grid:nth-child(12) > .is-section-sport-skin.life20.gridtriple > a > .t100`
- `.is-section-kultur-skin.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(12) > .is-section-kultur-skin.hot60.gridtriple > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.variant-a.is-hendelse-skin.life20 > a > .t100`
- `.is-section-mn24-skin.life20.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .gridspotlightside.hot50.life40 > a > .t100`
- `.is-section-mn24-skin.life20.gridtriple:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(18) > .hot70.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(18) > .is-section-mn24-skin.life20.gridtriple:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .gridspotlightside.hot50.life40:nth-child(2) > a > .t100`
- `.variant-a.is-section-kultur-skin.gridspotlightside > a > .t100`
- `.AdWithTeaser.grid:nth-child(21) > .hot70.gridtriple.life40 > a > .t100`
- `.life60.hot60.gridtriple > a > .t100`
- `.is-section-sport-skin.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(22) > .is-hendelse-skin.life20.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(24) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(24) > .variant-a.hot70.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(24) > .life20.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(25) > .is-section-sport-skin.life60.gridtriple > a > .t100`
- `.variant-a.is-section-sport-skin.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(25) > .is-section-mn24-skin.life20.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot70.life60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(27) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(27) > .is-section-meninger-skin.opinion.hot60 > a > .t100`
- `.grade.gridtriple.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .no-image.is-hendelse-skin.life20 > a > .t100`
- `.is-section-mn24-skin.gridspotlight.card-size-large > a > .t100`
- `.customSkin-podcast > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .is-hendelse-skin.life20.gridspotlightside:nth-child(4) > a > .t100`
- `.is-rbk-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(32) > .life20.gridtriple.hot50:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot70.life60.gridtriple > a > .t100`
- `.tip > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(33) > .is-hendelse-skin.life20.gridtriple > a > .t100`
- `.no-image.life20.gridtriple:nth-child(1) > a > .t100`
- `.no-image.life20.gridtriple:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(35) > .life20.gridtriple.hot50:nth-child(3) > a > .t100`
- `.AdWithTeaser.grid:nth-child(36) > .is-section-sport-skin.life60.gridtriple > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .is-section-kultur-skin.gridspotlight.card-size-large > a > .t100`
- `.hot40.life20.gridspotlightside:nth-child(2) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.hot40.no-image.is-hendelse-skin > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(38) > .life20.gridtriple.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .is-hendelse-skin.life20.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .is-section-meninger-skin.opinion.gridspotlight > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .life20.gridspotlightside.hot50:nth-child(3) > a > .t100`
- `.AdWithTeaser.grid:nth-child(40) > .is-section-sport-skin.life60.gridtriple > a > .t100`
- `.opinion.is-section-sport-skin.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(41) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(41) > .gridtriple.hot50.life40:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .grade.life60.is-section-kultur-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .is-section-kultur-skin.gridspotlightside.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .is-hendelse-skin.hot60.gridspotlightside > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(43) > .is-section-sport-skin.gridtriple.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .is-section-kultur-skin.hot60.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.grade.gridspotlightside.hot50 > a > .t100`
- `.variant-a.is-section-kultur-skin.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(45) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(45) > .is-hendelse-skin.hot60.gridtriple > a > .t100`
- `.AdWithTeaser.grid:nth-child(46) > .variant-a.hot60.gridtriple > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .is-section-meninger-skin.opinion.gridspotlight > a > .t100`
- `.is-section-kultur-skin.hot60.gridspotlightside:nth-child(2) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .is-section-kultur-skin.hot60.gridspotlightside:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(48) > .hot60.gridtriple.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(49) > .is-hendelse-skin.hot60.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(49) > .is-section-kultur-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(49) > .is-section-meninger-skin.opinion.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(51) > .gridtriple.hot50.life40 > a > .t100`
- `.variant-a.is-hendelse-skin.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(51) > .hot60.gridtriple.life40:nth-child(3) > a > .t100`
- `.ThreeTeasers.grid:nth-child(52) > .gridtriple.hot50.life40:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(52) > .hot60.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(52) > .gridtriple.hot50.life40:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(53) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(53) > .is-section-kultur-skin.gridspotlightside.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(53) > .is-section-sport-skin.life60.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(54) > .is-section-sport-skin.life60.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(54) > .grade.life60.is-section-kultur-skin > a > .t100`
- `.grade.life60.hot60:nth-child(3) > a > .t100`

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
