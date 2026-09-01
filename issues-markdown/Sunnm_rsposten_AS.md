# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-09-01T04:09:07.446Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 5

## Violation Details

### <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements

- **Impact:** serious
- **Description:** Ensure <dl> elements are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/definition-list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.3
- **Count:** 2

#### Affected Elements:

- `.Credits:nth-child(2) > dl:nth-child(3)`
- `.Credits:nth-child(2) > dl:nth-child(4)`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 99

#### Affected Elements:

- `.gridfullsize.life40.hot60 > a > .text.t100`
- `.breakingvarsel.gridspotlight.card-size-large > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlightside.payed:nth-child(2) > a > .text.t100`
- `.is-aske-skin.life40.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .life40.is-dark-skin.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .life60.gridspotlight.card-size-large > a > .text.t100`
- `.hot50.life40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot60.gridtriple.payed:nth-child(1) > a > .text.t100`
- `.hot70 > a > .text.t100`
- `.is-restaurantguiden-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .is-primary-skin.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .is-aske-skin.hot40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .life60.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .life40.hot60.gridtriple > a > .text.t100`
- `a[href$="spill"] > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot60.gridtriple.payed:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.is-dark-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .is-primary-skin.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .is-aske-skin.hot40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot40.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot60.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot80.life60.is-dark-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(18) > .is-aske-skin.hot40.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.hot50.gridspotlight.card-size-large > a > .text.t100`
- `.hot50.is-aske-skin.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .is-dark-skin.hot40.gridtriple:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .is-dark-skin.hot40.gridtriple:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot50.gridtriple.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.no-image.hot30.is-dark-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(24) > .is-dark-skin.hot40.gridtriple > a > .text.t100`
- `.hot40.gridspotlightside.payed:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .hot40.gridspotlightside.payed:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .no-image.hot30.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .is-dark-skin.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot30.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .opinion.hot30.gridtriple > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(29) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot30.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot60.gridtriple.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.opinion.hot30.gridspotlightside > a > .text.t100`
- `.no-image.is-aske-skin.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .hot30.gridspotlightside.life20:nth-child(4) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(33) > .griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(33) > .griddouble.hot50.no-image > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(34) > .hot40.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(34) > .hot40.gridtriple.payed:nth-child(2) > a > .text.t100`
- `.breakingvarsel.is-dark-skin.hot40 > a > .text.t100`
- `.opinion.life40.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .hot30.is-dark-skin.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(37) > .life40.hot60.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.hot30.life40.is-dark-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .hot80.life40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .is-dark-skin.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .hot40.gridtriple.payed > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(41) > .is-aske-skin.hot40.gridtriple > a > .text.t100`
- `.is-dark-skin.hot40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.breaking > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .hot80.is-dark-skin.gridtriple > a > .text.t100`
- `.hot80.life60.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .hot30.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .hot80.life60.is-dark-skin:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot30.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot80.life60.is-dark-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .is-aske-skin.hot40.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .life40.is-dark-skin.hot60:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.is-dark-skin > a > .text.t100`
- `.life40.is-dark-skin.hot60:nth-child(3) > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.griddouble.no-image.hot30 > a > .text.t100`
- `.TwoTeasers.grid:nth-child(48) > .griddouble.hot50.no-image > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .hot40.gridtriple.payed:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .is-dark-skin.hot40.gridtriple:nth-child(2) > a > .text.t100`
- `.life40.is-dark-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(50) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(50) > .hot80.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(50) > .no-image.is-aske-skin.hot40 > a > .text.t100`

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
