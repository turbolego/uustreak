# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-01-04T00:36:02.071Z
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
- **Count:** 101

#### Affected Elements:

- `#app > main`
- `.gridfullsize.is-aske-skin.hot60 > a > .text.t100`
- `.gridfullsize-bundle > a > .text.t100`
- `.small-items.griddouble.is-aske-skin > a > .text.t100`
- `.small-items.griddouble.hot40 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .life40.hot40.gridspotlightside > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot50.life40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(1) > .gridtriple.hot60.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(1) > .opinion.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(1) > .hot40.is-aske-skin.gridtriple > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(4) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot70.is-dark-skin.life60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(4) > .no-image.is-aske-skin.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot60.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .no-image.hot60.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(6) > .hot70.life40.gridtriple > a > .text.t100`
- `.life60.gridtriple.hot60 > a > .text.t100`
- `.no-image.life40.is-aske-skin > a > .text.t100`
- `.life60.hot30.gridtriple > a > .text.t100`
- `.opinion.hot40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(8) > .hot80.life60.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(8) > .life40.is-aske-skin.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(8) > .no-image.hot40.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot80.life60.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .hot50.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .life40.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .gridtriple.hot60.life20 > a > .text.t100`
- `.hot80.life60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(14) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(14) > .is-dark-skin.life60.hot60 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(17) > .opinion.hot30.gridtriple > a > .text.t100`
- `.life40.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .gridtriple.hot60.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .opinion.gridtriple.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(19) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.is-dark-skin.hot30.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(19) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(21) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(21) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(21) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(22) > .is-aske-skin.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(23) > .hot40.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(23) > .hot40.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(23) > .hot40.is-aske-skin.gridtriple > a > .text.t100`
- `.hot50.life60.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(26) > .opinion.hot30.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .hot50.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .no-image.is-aske-skin.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(28) > .gridtriple.hot60.life20 > a > .text.t100`
- `.hot50.gridtriple.life20 > a > .text.t100`
- `.life60.hot40.gridtriple > a > .text.t100`
- `.is-dark-skin-prefix-red.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .life40.hot40.gridspotlightside:nth-child(2) > a > .text.t100`
- `.life40.hot40.gridspotlightside:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .hot40.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.hot50.no-image.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(33) > .hot40.is-aske-skin.gridtriple > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(33) > .no-image.hot30.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(35) > .life40.is-aske-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .no-image.hot40.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .hot40.is-aske-skin.is-skin:nth-child(4) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .hot30.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.no-image.hot30.gridspotlightside:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .no-image.hot30.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .hot70.life40.gridtriple > a > .text.t100`
- `.is-dark-skin-prefix-red.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .hot50.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .hot30.is-aske-skin.gridtriple > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(42) > .life40.gridtriple.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot40.is-aske-skin.is-skin:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot30.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .no-image.hot40.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.hot30.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot40.is-aske-skin.gridtriple > a > .text.t100`
- `.hot90 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .no-image.hot30.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .is-dark-skin.life60.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot30.gridspotlightside.life20:nth-child(4) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .hot40.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .life60.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .hot50.gridspotlightside.life20 > a > .text.t100`

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
