# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-05-08T01:13:22.359Z
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
- `.breakingvarsel.life40.gridspotlight > a > .text.t100`
- `.hot70.life40.gridspotlightside > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot60.gridspotlightside.card-size-small > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot70.gridspotlightside.card-size-small > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot60.card-size-small:nth-child(1) > a > .text.t100`
- `.life60.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot60.card-size-small:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .is-dark-skin-prefix-red.life40.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .opinion.hot50.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot60.gridspotlightside.card-size-small > a > .text.t100`
- `.hot80.is-dark-skin-prefix-red.life40 > a > .text.t100`
- `.life60.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.life60.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .gridtriple.hot60.card-size-small:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .gridtriple.hot60.card-size-small:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .gridtriple.hot60.card-size-small:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .life40.gridspotlight.card-size-large > a > .text.t100`
- `.is-dark-skin.life60.hot70 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot60.gridspotlightside.card-size-small > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .hot60.gridspotlightside.card-size-small:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .hot60.gridspotlightside.card-size-small:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .gridtriple.hot60.card-size-small:nth-child(1) > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .life40.gridtriple.hot60 > a > .text.t100`
- `.opinion.hot50.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .hot50.gridspotlightside.card-size-small > a > .text.t100`
- `.hot80.is-dark-skin.life60 > a > .text.t100`
- `.is-dark-skin.life40.is-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(17) > .hot50.gridtriple.card-size-small > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .hot50.gridspotlightside.card-size-small:nth-child(1) > a > .text.t100`
- `.opinion.life40.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .hot50.gridspotlightside.card-size-small:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .hot40.gridtriple.card-size-small:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .gridtriple.hot60.card-size-small > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .hot40.gridtriple.card-size-small:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .hot40.gridspotlightside.card-size-small > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .hot60.gridspotlightside.card-size-small > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(22) > .gridtriple.hot60.card-size-small > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .hot60.gridspotlightside.card-size-small:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .life40.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .hot60.gridspotlightside.card-size-small:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .hot40.gridtriple.card-size-small:nth-child(1) > a > .text.t100`
- `.opinion.life40.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .hot40.gridtriple.card-size-small:nth-child(3) > a > .text.t100`
- `.is-aske-skin.life40.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot30.gridspotlightside.card-size-small > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot40.gridspotlightside.card-size-small > a > .text.t100`
- `.is-aske-skin.is-skin.hot40:nth-child(1) > a > .text.t100`
- `.is-aske-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .hot60.gridspotlightside.card-size-small > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .gridtriple.hot60.card-size-small:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .gridtriple.hot60.card-size-small:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .gridtriple.hot60.card-size-small:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .hot50.gridspotlightside.card-size-small:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .hot50.gridspotlightside.card-size-small:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(34) > .hot60.gridspotlightside.card-size-small > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(34) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(34) > .hot50.gridspotlightside.card-size-small:nth-child(3) > a > .text.t100`
- `.no-image.is-aske-skin.hot50 > a > .text.t100`
- `.hot70.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .life40.gridtriple.hot60 > a > .text.t100`
- `.opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .gridtriple.hot60.card-size-small:nth-child(3) > a > .text.t100`
- `.hot70.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .hot50.gridspotlightside.card-size-small > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(40) > .hot40.gridtriple.card-size-small > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .opinion.hot50.gridspotlightside > a > .text.t100`
- `.is-dark-skin-prefix-red.breakingvarsel.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .hot30.gridspotlightside.card-size-small > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(42) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.opinion.hot50.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .hot40.gridtriple.card-size-small:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .hot40.gridspotlightside.card-size-small:nth-child(2) > a > .text.t100`
- `.breakingvarsel.no-image.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .hot60.gridspotlightside.card-size-small > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot60.gridspotlightside.card-size-small:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.hot30.gridtriple.card-size-small:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot30.gridtriple.card-size-small:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot70.gridtriple.card-size-small > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.life40.hot50.gridspotlightside > a > .text.t100`
- `.hot30.is-aske-skin.is-skin > a > .text.t100`
- `.griddouble.card-size-medium.hot50:nth-child(1) > a > .text.t100`
- `.griddouble.card-size-medium.hot50:nth-child(2) > a > .text.t100`

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
