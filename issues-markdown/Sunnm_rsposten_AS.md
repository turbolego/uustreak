# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-10-11T04:37:27.974Z
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
- **Count:** 100

#### Affected Elements:

- `.gridfullsize-bundle > a > .text.t100`
- `.small-items.griddouble.hot60:nth-child(1) > a > .text.t100`
- `.small-items.griddouble.hot60:nth-child(2) > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlightside.payed:nth-child(2) > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.hot60.no-image.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.hot90 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot50.no-image.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot50.gridtriple.life20 > a > .text.t100`
- `.life60.hot70.is-dark-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .is-dark-skin.hot60.is-skin > a > .text.t100`
- `.opinion.hot60.gridspotlight > a > .text.t100`
- `.is-dark-skin.hot60.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.life60.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlightside.hot40.payed:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot50.no-image.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .hot60.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.hot70.life40.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .gridtriple.hot40.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot80 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot70.is-aske-skin.is-skin > a > .text.t100`
- `.is-prefix-red-skin.hot60.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot70.gridtriple.payed:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot70.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.life40.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot30.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot50.no-image.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot30.gridspotlightside.life20:nth-child(4) > a > .text.t100`
- `.is-dark-skin.hot30.is-skin > a > .text.t100`
- `.hot30.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .hot30.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .hot50.gridtriple.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .opinion.gridspotlightside.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(24) > .hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .is-dark-skin.is-skin.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .gridspotlightside.hot40.payed:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.opinion.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .opinion.hot30.gridtriple > a > .text.t100`
- `.griddouble.no-image.hot30:nth-child(1) > a > .text.t100`
- `.griddouble.no-image.hot30:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot30.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .no-image.is-aske-skin.hot30 > a > .text.t100`
- `.breakingvarsel.hot50.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .hot30.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(36) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .opinion.hot30.gridtriple > a > .text.t100`
- `.is-dark-skin-prefix-red.life40.is-skin > a > .text.t100`
- `.breakingvarsel.hot50.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .gridspotlightside.hot40.payed:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .breakingvarsel.no-image.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(41) > .breakingvarsel.gridtriple.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .gridspotlight.life40.card-size-large > a > .text.t100`
- `.is-dark-skin-prefix-red.no-image.is-skin > a > .text.t100`
- `.is-prefix-red-skin.is-skin.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .gridtriple.hot40.life20 > a > .text.t100`
- `.liveblog > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .breakingvarsel.gridtriple.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.life40.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .no-image.is-aske-skin.is-skin:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .no-image.gridspotlightside.hot40:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .breakingvarsel.no-image.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .hot30.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.breakingvarsel.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .no-image.is-aske-skin.hot30 > a > .text.t100`
- `.life40.gridtriple.hot40:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .life40.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .gridtriple.hot40.payed:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .no-image.is-aske-skin.hot30 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .hot60.gridspotlightside.payed > a > .text.t100`

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
