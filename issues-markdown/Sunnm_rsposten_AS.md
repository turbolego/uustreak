# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-12-29T00:30:42.842Z
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
- **Count:** 100

#### Affected Elements:

- `.hot20 > a > .text.t100`
- `.gridfullsize-bundle > a > .text.t100`
- `.small-items.breaking.griddouble > a > .text.t100`
- `.is-primary-skin.small-items.griddouble > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .breakingvarsel.gridspotlightside.life20 > a > .text.t100`
- `.hot30.life40.gridspotlightside > a > .text.t100`
- `.is-dark-skin-prefix-red.breakingvarsel.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.life20 > a > .text.t100`
- `.breaking.breakingvarsel.no-image > a > .text.t100`
- `.gridspotlightside.life20.hot40:nth-child(4) > a > .text.t100`
- `.hot70.is-dark-skin.life60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .is-aske-skin.no-image.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .life40.gridtriple.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot70.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .breaking.no-image.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .gridspotlightside.life20.hot40:nth-child(3) > a > .text.t100`
- `.hot30.life60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .is-aske-skin.no-image.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .gridspotlight.card-size-large.life20 > a > .text.t100`
- `.feature > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .hot60.life60.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(7) > .is-dark-skin.is-skin.gridtriple > a > .text.t100`
- `.TwoTeasers.grid:nth-child(8) > .griddouble.is-aske-skin.no-image > a > .text.t100`
- `.griddouble.is-dark-skin.no-image > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot70.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot60.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot30.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(11) > .gridspotlight.hot60.life60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(11) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(11) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(14) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(14) > .gridspotlightside.life20.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(14) > .is-aske-skin.no-image.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(16) > .hot60.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(16) > .is-dark-skin.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(16) > .gridtriple.life20.hot40:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(18) > .gridtriple.life20.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(19) > .opinion.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(19) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(19) > .hot60.life60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .is-primary-skin.is-skin.life40 > a > .text.t100`
- `a[href$="hus-overtent"] > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .gridspotlightside.life20.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(22) > .gridtriple.life20.hot40:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(22) > .gridtriple.life20.hot40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(22) > .gridtriple.life20.hot40:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(23) > .gridtriple.life20.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .opinion.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .is-aske-skin.no-image.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .life40.gridspotlightside.hot40:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .life40.gridspotlightside.hot40:nth-child(4) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .breakingvarsel.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .gridspotlight.hot60.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(27) > .gridtriple.life20.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(28) > .gridtriple.life20.hot40 > a > .text.t100`
- `.hot30.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(28) > .is-dark-skin.is-skin.life40 > a > .text.t100`
- `.is-aske-skin.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .life60.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .no-image.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .is-aske-skin.no-image.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.TwoTeasers.grid:nth-child(32) > .griddouble.is-aske-skin.no-image:nth-child(1) > a > .text.t100`
- `.griddouble.is-aske-skin.no-image:nth-child(2) > a > .text.t100`
- `.breakingvarsel.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .life40.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .hot60.life40.gridtriple > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(36) > .life40.gridtriple.hot40 > a > .text.t100`
- `.hot70.gridspotlight.life60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .hot30.is-aske-skin.no-image > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .hot30.gridspotlightside.life20:nth-child(4) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.hot80.is-dark-skin.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .hot30.is-aske-skin.no-image > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(41) > .life40.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .gridtriple.life20.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .hot30.is-aske-skin.no-image > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .hot60.life40.gridtriple > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .gridtriple.life20.hot40 > a > .text.t100`
- `.griddouble.is-aske-skin.hot60 > a > .text.t100`
- `.variant-a > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot70.life60.gridtriple > a > .text.t100`
- `.hot70.life40.gridtriple:nth-child(2) > a > .text.t100`
- `.is-dark-skin-prefix-red.hot70.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.life60.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .life60.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlightside.life20.hot40 > a > .text.t100`
- `.hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.hot60.life60 > a > .text.t100`
- `.hot80.life60.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .hot70.life60.gridtriple > a > .text.t100`
- `.hot50.is-dark-skin.life60 > a > .text.t100`
- `.hot60.life60.gridtriple > a > .text.t100`

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
