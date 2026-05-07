# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-05-07T20:24:54.087Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 5

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
- **Count:** 100

#### Affected Elements:

- `.breakingvarsel.hot70.gridfullsize > a > .text.t100`
- `.breakingvarsel.hot70.is-aske-skin > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot60.payed:nth-child(2) > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot60.payed:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(1) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.variant-a > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(1) > .gridtriple.hot60.payed:nth-child(3) > a > .text.t100`
- `.is-dark-skin.life60.hot70 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(3) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(3) > .gridspotlightside.hot60.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(3) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .is-dark-skin-prefix-red.life40.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .gridspotlightside.hot60.card-size-small:nth-child(3) > a > .text.t100`
- `.life60.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(7) > .gridtriple.hot60.payed > a > .text.t100`
- `.hot70.gridtriple.card-size-small > a > .text.t100`
- `.hot80.is-dark-skin-prefix-red.life40 > a > .text.t100`
- `.life60.gridspotlightside.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(9) > .life40.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(9) > .gridspotlightside.hot60.payed:nth-child(3) > a > .text.t100`
- `.hot80.is-dark-skin.life60 > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.is-dark-skin.life40.is-skin > a > .text.t100`
- `.life60.hot30.gridspotlightside > a > .text.t100`
- `.breaking > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(12) > .gridtriple.hot60.payed:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(12) > .hot40.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(12) > .gridtriple.hot60.payed:nth-child(3) > a > .text.t100`
- `.hot70.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(14) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(14) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.opinion.hot50.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .life40.gridspotlightside.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(17) > .hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .hot40.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .hot50.gridtriple.payed > a > .text.t100`
- `.opinion.life40.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlightside.hot60.card-size-small > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .hot40.gridspotlightside.card-size-small > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .hot70.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .life40.hot40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(22) > .gridtriple.hot60.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(23) > .hot40.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(23) > .gridtriple.hot60.payed:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(23) > .gridtriple.hot60.payed:nth-child(3) > a > .text.t100`
- `.opinion.life40.hot40 > a > .text.t100`
- `.life40.is-aske-skin.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .gridspotlightside.hot60.payed > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(26) > .gridtriple.hot60.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot40.gridspotlightside.card-size-small:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot40.gridspotlightside.card-size-small:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(28) > .hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(28) > .gridtriple.hot60.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(28) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .gridspotlightside.hot60.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .hot50.gridspotlightside.payed:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .gridspotlightside.hot60.payed > a > .text.t100`
- `.no-image.is-aske-skin.hot50 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(34) > .life40.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(34) > .hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(34) > .gridtriple.hot60.payed:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(35) > .hot50.gridtriple.card-size-small > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .hot30.opinion.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .hot70.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .hot30.opinion.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(40) > .hot30.gridtriple.payed > a > .text.t100`
- `.opinion.hot50.gridtriple:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.opinion.hot50.gridtriple:nth-child(3) > a > .text.t100`
- `.is-dark-skin-prefix-red.breakingvarsel.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .hot40.gridspotlightside.payed:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .is-aske-skin.gridspotlight.card-size-large > a > .text.t100`
- `.breakingvarsel.no-image.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .gridspotlightside.hot60.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .gridspotlightside.hot60.payed:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .gridspotlightside.hot60.payed:nth-child(3) > a > .text.t100`
- `.hot30.opinion.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot30.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .gridtriple.hot60.payed > a > .text.t100`
- `.hot30.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .hot70.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .gridspotlightside.hot60.payed:nth-child(4) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .hot50.gridspotlightside.payed:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .hot50.gridspotlightside.payed:nth-child(3) > a > .text.t100`
- `.griddouble.card-size-medium.hot60 > a > .text.t100`
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

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
