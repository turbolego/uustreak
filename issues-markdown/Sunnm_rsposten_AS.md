# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-10-02T17:23:53.348Z
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

- `.is-dark-skin-prefix-red > a > .text.t100`
- `.variant-c > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-dark-skin.breakingvarsel.is-skin > a > .text.t100`
- `.hot20.breakingvarsel.no-image > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot20.gridspotlightside.payed > a > .text.t100`
- `.gridfullsize-bundle > a > .text.t100`
- `.small-items.griddouble.breakingvarsel:nth-child(1) > a > .text.t100`
- `.small-items.griddouble.breakingvarsel:nth-child(2) > a > .text.t100`
- `.hot80.life60.gridspotlightside > a > .text.t100`
- `.variant-b.hot70.is-dark-skin > a > .text.t100`
- `.life60.hot70.is-dark-skin > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.is-dark-skin.breakingvarsel.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .is-aske-skin.hot60.is-skin:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .breakingvarsel.no-image.is-aske-skin > a > .text.t100`
- `.life60.hot40.gridspotlightside > a > .text.t100`
- `.life40.gridspotlight.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .no-image.hot50.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .breakingvarsel.hot40.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .hot60.gridtriple.card-size-small > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot40.gridtriple.card-size-small > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot60.gridtriple.payed > a > .text.t100`
- `.liveblog > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot50 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .no-image.is-aske-skin.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot40.gridspotlightside.card-size-small:nth-child(4) > a > .text.t100`
- `.breakingvarsel.no-image.life40 > a > .text.t100`
- `.hot70.life40.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.opinion.hot50.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .life40.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot40.gridtriple.card-size-small > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot40.gridspotlightside.card-size-small > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(18) > .hot40.gridtriple.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.variant-b.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot60.gridtriple.payed:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .is-dark-skin.hot60.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot30.no-image.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .hot30.opinion.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.life40.is-aske-skin.hot60 > a > .text.t100`
- `.hot30.opinion.gridspotlightside:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .life40.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .hot30.opinion.gridspotlightside:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot40.gridtriple.card-size-small > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot60.gridtriple.payed:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot60.gridtriple.payed:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .hot60.gridtriple.card-size-small > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .hot40.gridtriple.payed:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot40.gridtriple.payed:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot40.gridtriple.payed:nth-child(3) > a > .text.t100`
- `.opinion.life40.gridspotlight > a > .text.t100`
- `.hot70.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .is-dark-skin.is-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .opinion.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .hot40.gridspotlightside.payed:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(36) > .hot40.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot40.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot40.gridtriple.card-size-small:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .life40.hot60.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .life40.hot60.gridspotlightside:nth-child(3) > a > .text.t100`
- `.life40.hot60.gridspotlightside:nth-child(4) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(41) > .hot50.gridtriple.payed > a > .text.t100`
- `.is-dark-skin.no-image.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .life40.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .hot30.gridspotlightside.card-size-small:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .hot30.opinion.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .hot60.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .hot30.gridtriple.card-size-small > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .hot50.gridtriple.card-size-small:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot50.gridspotlightside.card-size-small:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .no-image.is-aske-skin.hot50 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .no-image.is-aske-skin.is-skin:nth-child(4) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.hot50 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .is-aske-skin.hot50.is-skin:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .no-image.is-aske-skin.hot50 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .hot40.gridtriple.card-size-small:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .hot40.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .hot50.gridtriple.payed > a > .text.t100`
- `.card-size-medium.griddouble.hot40:nth-child(1) > a > .text.t100`
- `.card-size-medium.griddouble.opinion > a > .text.t100`
- `.hot80.no-image.gridfullsize > a > .text.t100`

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
