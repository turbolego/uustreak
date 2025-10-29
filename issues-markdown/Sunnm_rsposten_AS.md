# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-10-29T00:52:20.459Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 5

## Violation Details

### <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements

- **Impact:** serious
- **Description:** Ensure <dl> elements are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/definition-list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1
- **Count:** 2

#### Affected Elements:

- `.Credits:nth-child(2) > dl:nth-child(3)`
- `.Credits:nth-child(2) > dl:nth-child(4)`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 100

#### Affected Elements:

- `.breakingvarsel.gridfullsize.no-image > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.variant-b > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .life40.gridspotlightside.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.gridfullsize-bundle > a > .text.t100`
- `.hot20 > a > .text.t100`
- `.small-items.is-prefix-red-skin.griddouble:nth-child(2) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .gridtriple.hot60.life20 > a > .text.t100`
- `.hot70.life60.is-dark-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .hot50.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .is-dark-skin.is-skin.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(5) > .opinion.life40.gridspotlightside > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.life60.is-prefix-red-skin.is-skin > a > .text.t100`
- `.opinion.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(7) > .life40.gridtriple.hot60:nth-child(1) > a > .text.t100`
- `.life60.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(7) > .life40.gridtriple.hot60:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .opinion.life40.gridspotlightside > a > .text.t100`
- `.variant-a > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.hot80 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .hot40.gridtriple.life20 > a > .text.t100`
- `.breakingvarsel.life40.gridtriple > a > .text.t100`
- `.is-prefix-red-skin.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.opinion.life40.gridspotlightside:nth-child(2) > a > .text.t100`
- `.opinion.life40.gridspotlightside:nth-child(3) > a > .text.t100`
- `.is-restaurantguiden-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .opinion.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .opinion.hot40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .opinion.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .gridtriple.hot60.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .gridtriple.hot60.life20:nth-child(3) > a > .text.t100`
- `.hot70.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .opinion.hot40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(21) > .gridtriple.hot60.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .gridspotlightside.hot60.life20:nth-child(3) > a > .text.t100`
- `.is-dark-skin.no-image.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .gridtriple.hot60.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .life40.gridtriple.hot60 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(25) > .life40.gridtriple.hot60 > a > .text.t100`
- `.hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.is-dark-skin.hot40.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .hot50.no-image.is-aske-skin > a > .text.t100`
- `.life40.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .life40.gridtriple.hot60 > a > .text.t100`
- `.griddouble.hot30.no-image > a > .text.t100`
- `.TwoTeasers.grid:nth-child(30) > .griddouble.hot50.no-image > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot30.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .hot50.no-image.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .hot30.gridspotlightside.life20:nth-child(4) > a > .text.t100`
- `.is-dark-skin-prefix-red.hot40.gridtriple > a > .text.t100`
- `.griddouble.hot50.no-image:nth-child(1) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(35) > .griddouble.hot50.no-image:nth-child(2) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(37) > .griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(37) > .griddouble.hot50.no-image > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .is-aske-skin.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .hot40.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.hot50.life40.gridtriple > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(41) > .gridtriple.hot60.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .is-dark-skin-prefix-red.is-skin.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.is-aske-skin.hot40.is-skin:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.hot30.is-aske-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .life40.gridspotlightside.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .life40.gridtriple.hot60 > a > .text.t100`
- `.hot30.is-aske-skin.gridtriple > a > .text.t100`
- `.hot50.is-aske-skin.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot30.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot30.no-image.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .is-aske-skin.hot40.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .is-dark-skin-prefix-red.is-skin.gridspotlightside > a > .text.t100`
- `.is-aske-skin.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .is-dark-skin.gridtriple.is-skin > a > .text.t100`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.Layout`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.top`
- `.Layout`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
