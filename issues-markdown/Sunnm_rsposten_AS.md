# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-05-04T01:13:10.531Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 6

## Violation Details

### <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements

- **Impact:** serious
- **Description:** Ensure <dl> elements are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/definition-list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.3
- **Count:** 2

#### Affected Elements:

- `.Credits:nth-child(2) > dl:nth-child(3)`
- `.Credits:nth-child(2) > dl:nth-child(4)`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 101

#### Affected Elements:

- `.hot80.life60.is-dark-skin > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.hot60.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-dark-skin.no-image.hot60 > a > .text.t100`
- `.hot70.life60.is-dark-skin > a > .text.t100`
- `.hot70.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot60.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .is-aske-skin.gridtriple.life40 > a > .text.t100`
- `.gridfullsize-bundle > a > .text.t100`
- `.small-items > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .hot80.life60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .no-image.is-aske-skin.hot60 > a > .text.t100`
- `.life60.hot30.gridspotlightside > a > .text.t100`
- `.griddouble.no-image.is-aske-skin > a > .text.t100`
- `.griddouble.is-dark-skin.no-image > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .gridtriple.hot60.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .is-dark-skin.gridtriple.life40 > a > .text.t100`
- `.life60.hot30.gridtriple > a > .text.t100`
- `.breaking > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(12) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(12) > .is-dark-skin.life40.hot60 > a > .text.t100`
- `.is-restaurantguiden-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(12) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .hot80.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .gridtriple.life40.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.hot80.life60.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.opinion.gridtriple.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(18) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(18) > .hot30.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(18) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(18) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.is-dark-skin.no-image.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .gridtriple.life40.hot60:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .gridtriple.life40.hot60:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(21) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(21) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(21) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(21) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(22) > .gridtriple.hot40.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.opinion.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .is-aske-skin.hot40.is-skin > a > .text.t100`
- `.no-image.is-aske-skin.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .gridtriple.life40.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .is-aske-skin.gridtriple.hot40 > a > .text.t100`
- `.hot80.is-dark-skin.gridtriple > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(26) > .gridtriple.life40.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .is-dark-skin.life40.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .gridtriple.life40.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .is-aske-skin.gridtriple.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .is-dark-skin.hot40.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .hot40.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(34) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(34) > .is-aske-skin.hot40.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(34) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(35) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .gridtriple.hot60.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.is-dark-skin-prefix-red.hot40.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(40) > .is-aske-skin.gridtriple.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(41) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(41) > .hot30.life40.gridspotlightside > a > .text.t100`
- `.is-dark-skin-prefix-red.hot50.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(42) > .hot30.is-aske-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .hot30.is-aske-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .is-dark-skin.gridtriple.life40 > a > .text.t100`
- `.hot50.is-aske-skin.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .is-dark-skin.hot40.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .is-aske-skin.hot40.is-skin:nth-child(4) > a > .text.t100`
- `.is-aske-skin.gridtriple.hot40:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .is-aske-skin.gridtriple.hot40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot30.gridtriple.life20 > a > .text.t100`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.Layout`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.top`
- `.Layout`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.breaking-stripe`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
