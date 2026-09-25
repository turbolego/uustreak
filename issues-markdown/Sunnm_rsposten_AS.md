# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-09-25T04:15:37.955Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 6

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
- **Count:** 98

#### Affected Elements:

- `.gridfullsize.hot50.payed > a > .text.t100`
- `.hot70.gridspotlight.card-size-large > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot50.gridspotlightside.payed > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot50.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.hot70.life60.is-dark-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .is-dark-skin.no-image.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .opinion.life40.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlight.card-size-large.hot50 > a > .text.t100`
- `.life60.hot40.gridspotlightside > a > .text.t100`
- `.hot80 > a > .text.t100`
- `.hot60.gridtriple.payed:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot30.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .life40.hot60.gridtriple > a > .text.t100`
- `.breaking > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .gridspotlight.card-size-large.hot50 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.variant-b.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .is-dark-skin.life40.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot60.gridtriple.payed:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.hot50 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.variant-b.hot50.gridspotlightside > a > .text.t100`
- `.breakingvarsel.no-image.hot50 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(18) > .hot50.gridtriple.payed > a > .text.t100`
- `.griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `.griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .life40.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot40.gridtriple.payed:nth-child(2) > a > .text.t100`
- `.opinion.life40.hot50 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(24) > .life40.hot40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .is-aske-skin.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .breakingvarsel.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot40.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot60.gridtriple.payed > a > .text.t100`
- `.is-dark-skin-prefix-red > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.no-image.hot30.gridspotlightside > a > .text.t100`
- `.breakingvarsel.is-aske-skin.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.life60.hot30.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .life40.hot50.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot30.gridtriple.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot50 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .gridspotlight.card-size-large.hot50 > a > .text.t100`
- `.breakingvarsel.hot30.gridspotlightside > a > .text.t100`
- `.opinion.hot30.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(36) > .is-aske-skin.is-skin.hot50 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot50.gridtriple.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(41) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .gridspotlight.card-size-large.hot50 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .life40.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .life40.hot40.gridtriple:nth-child(1) > a > .text.t100`
- `.is-aske-skin.life40.is-skin > a > .text.t100`
- `.hot40.gridtriple.payed:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .opinion.life40.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .is-dark-skin.life40.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .hot40.gridtriple.payed:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .hot60.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .hot30.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .hot60.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .opinion.hot30.gridtriple > a > .text.t100`
- `.is-dark-skin.no-image.gridfullsize > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(50) > .opinion.hot30.gridtriple:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(50) > .hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(50) > .opinion.hot30.gridtriple:nth-child(3) > a > .text.t100`

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

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.breaking-stripe`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
