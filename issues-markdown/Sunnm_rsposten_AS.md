# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-09-21T19:37:07.036Z
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

- `.breakingvarsel.gridfullsize.hot50 > a > .text.t100`
- `.breakingvarsel.hot70.gridspotlight > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.is-dark-skin-prefix-red > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot70.life40.gridspotlightside > a > .text.t100`
- `.gridfullsize-bundle > a > .text.t100`
- `.small-items.griddouble.life40 > a > .text.t100`
- `.small-items.griddouble.hot50 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .no-image.hot50.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot50.is-aske-skin.is-skin > a > .text.t100`
- `.hot70.life60.is-dark-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot60.gridtriple.life20 > a > .text.t100`
- `.hot80.is-prefix-red-skin.gridspotlight > a > .text.t100`
- `.hot60.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .hot60.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .life60.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot50.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.no-image.hot50.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot80.is-dark-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .life40.hot40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .is-prefix-red-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .life40.hot40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot50.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.is-dark-skin.hot50.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot60.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot80.is-dark-skin.is-skin > a > .text.t100`
- `.breakingvarsel.hot40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.breakingvarsel.life40.gridtriple > a > .text.t100`
- `.is-aske-skin.is-skin.life40:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.is-aske-skin.hot60.is-skin:nth-child(3) > a > .text.t100`
- `.no-image.is-aske-skin.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .is-prefix-red-skin.hot60.is-skin > a > .text.t100`
- `.hot50.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot30.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.hot30.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(24) > .hot30.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.is-dark-skin.no-image.is-skin > a > .text.t100`
- `.variant-a > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot60.life40.gridtriple > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .hot60.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .hot40.gridspotlightside.life20:nth-child(4) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.is-dark-skin.hot60.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .hot70.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .life60.hot60.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(36) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `.griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(41) > .hot50.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .is-aske-skin.is-skin.hot40:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .is-dark-skin.is-skin.life40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .hot70.life60.gridtriple > a > .text.t100`
- `.hot30.is-dark-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .is-prefix-red-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .life60.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot40.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .life40.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .gridtriple.hot40.life20 > a > .text.t100`

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
