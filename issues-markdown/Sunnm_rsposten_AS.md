# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-01-30T22:09:11.739Z
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
- **Count:** 99

#### Affected Elements:

- `.breakingvarsel.no-image.gridfullsize > a > .text.t100`
- `.hot70.breakingvarsel.gridspotlight > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot70.life40.gridspotlightside > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot80.life40.gridspotlightside > a > .text.t100`
- `.hot80.life60.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot60.payed:nth-child(1) > a > .text.t100`
- `.is-dark-skin.hot70.life60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot60.payed:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .hot70.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.breakingvarsel.hot50.no-image > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .life60.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.life60.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .life40.gridtriple.hot60:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .life40.gridtriple.hot60:nth-child(3) > a > .text.t100`
- `.breaking > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot80.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.is-dark-skin.hot40.is-skin > a > .text.t100`
- `.hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .life40.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .gridtriple.hot60.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(19) > .hot40.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(21) > .gridtriple.hot60.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(21) > .hot40.gridtriple.payed:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(21) > .is-aske-skin.hot40.is-skin > a > .text.t100`
- `.is-dark-skin-prefix-red.hot80.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .hot40.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(24) > .hot40.gridtriple.payed > a > .text.t100`
- `.hot40.gridspotlightside.payed:nth-child(1) > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.opinion.hot40.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.hot40.life40.gridtriple > a > .text.t100`
- `.no-image.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot30.gridtriple.payed > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .opinion.hot30.gridtriple > a > .text.t100`
- `.opinion.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .is-dark-skin-prefix-red.is-skin.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .is-aske-skin.is-skin.hot60:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .opinion.hot30.gridtriple:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .opinion.hot30.gridtriple:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .gridtriple.hot60.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .hot30.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .hot30.gridspotlightside.payed:nth-child(3) > a > .text.t100`
- `.no-image.is-aske-skin.hot30 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(37) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .gridtriple.hot60.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .hot40.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .is-dark-skin-prefix-red.hot80.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .hot40.gridspotlightside.payed:nth-child(4) > a > .text.t100`
- `.life60.opinion.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.is-aske-skin.gridspotlight.card-size-large > a > .text.t100`
- `.hot70.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .breakingvarsel.no-image.is-aske-skin > a > .text.t100`
- `.is-dark-skin-prefix-red.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot30.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .breakingvarsel.gridspotlight.card-size-large > a > .text.t100`
- `.hot30.gridspotlightside.payed:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot30.gridspotlightside.payed:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .life40.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.griddouble.card-size-medium.hot40 > a > .text.t100`
- `.griddouble.card-size-medium.hot30 > a > .text.t100`

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
