# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-10-18T03:50:08.932Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 5

## Violation Details

### <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements

- **Impact:** serious
- **Description:** Ensure <dl> elements are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/definition-list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.3
- **Count:** 2

#### Affected Elements:

- `.Credits:nth-child(2) > dl:nth-child(3)`
- `.Credits:nth-child(2) > dl:nth-child(4)`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 98

#### Affected Elements:

- `.is-prefix-red-skin.gridspotlight.card-size-large > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-aske-skin.hot40.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot70.gridspotlight.card-size-large > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.no-image.is-aske-skin.hot60 > a > .text.t100`
- `.life60.is-dark-skin.hot70 > a > .text.t100`
- `.hot90 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot40.life20 > a > .text.t100`
- `.life60.hot70.is-dark-skin-prefix-red > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.life60.hot40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot50.opinion.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.hot70.is-dark-skin-prefix-red.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .is-aske-skin.gridtriple.hot40:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .is-aske-skin.gridtriple.hot40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .is-dark-skin-prefix-red.gridtriple.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot70.is-aske-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .is-prefix-red-skin.hot60.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot70.is-aske-skin.life40 > a > .text.t100`
- `.hot70.life40.gridspotlightside:nth-child(4) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .is-dark-skin-prefix-red.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .is-aske-skin.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot70.is-aske-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .is-prefix-red-skin.hot60.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot30.opinion.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(18) > .is-dark-skin-prefix-red.gridtriple.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .hot30.opinion.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .is-dark-skin-prefix-red.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.no-image.is-aske-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .is-dark-skin-prefix-red.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .gridtriple.hot60.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .opinion.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .is-dark-skin-prefix-red.hot40.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(24) > .opinion.gridtriple.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.is-dark-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.is-dark-skin.gridtriple.hot60 > a > .text.t100`
- `.hot30.opinion.gridtriple:nth-child(2) > a > .text.t100`
- `.hot30.opinion.gridtriple:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .gridtriple.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .is-dark-skin-prefix-red.gridspotlight.card-size-large > a > .text.t100`
- `.hot30.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .gridtriple.life40.hot40 > a > .text.t100`
- `.is-dark-skin.hot50.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .gridtriple.hot40.life20 > a > .text.t100`
- `.gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .hot40.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .life40.hot40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.hot80 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .hot50.opinion.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .is-aske-skin.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(41) > .opinion.gridtriple.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .is-dark-skin.hot60.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .is-aske-skin.gridtriple.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .hot60.life40.gridspotlightside:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .hot60.life40.gridspotlightside:nth-child(4) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot70.is-aske-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .is-aske-skin.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .gridtriple.hot60.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.hot50.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .opinion.life40.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .hot40.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.griddouble.card-size-medium.hot40:nth-child(1) > a > .text.t100`
- `.griddouble.card-size-medium.hot40:nth-child(2) > a > .text.t100`

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
