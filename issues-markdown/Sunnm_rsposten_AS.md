# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-12-25T21:15:51.044Z
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
- **Count:** 97

#### Affected Elements:

- `.hot30.gridfullsize.card-size-large > a > .text.t100`
- `.hot70.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid > .hot30.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.hot50.life40.gridspotlightside > a > .text.t100`
- `.hot30.no-image.is-aske-skin:nth-child(4) > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.is-dark-skin.hot70.life60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .life40.hot60.gridtriple:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .is-aske-skin.life40.hot60 > a > .text.t100`
- `.hot80.is-dark-skin.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.hot70.life60.gridspotlightside > a > .text.t100`
- `.hot30.life60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .hot40.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .no-image.is-aske-skin.hot60 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(7) > .hot70.life60.gridtriple > a > .text.t100`
- `.life60.hot60.gridtriple:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(8) > .hot40.gridtriple.life20 > a > .text.t100`
- `.life60.hot60.gridtriple:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot70.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot80.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(11) > .life40.hot60.gridtriple > a > .text.t100`
- `.is-dark-skin-prefix-red > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(11) > .hot70.life60.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .hot70.life40.gridspotlightside > a > .text.t100`
- `.no-image.is-aske-skin.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.variant-a > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .hot70.life40.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(18) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .hot40.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .life40.hot60.gridtriple > a > .text.t100`
- `.opinion.hot40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.opinion.life40.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .is-aske-skin.hot40.is-skin:nth-child(1) > a > .text.t100`
- `.hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .is-aske-skin.hot40.is-skin:nth-child(3) > a > .text.t100`
- `.is-dark-skin.no-image.hot40 > a > .text.t100`
- `.hot80.life60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .is-aske-skin.hot40.is-skin:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .hot50.no-image.is-aske-skin > a > .text.t100`
- `.is-aske-skin.hot40.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .gridspotlight.life60.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.no-image.is-aske-skin.hot40:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .no-image.is-aske-skin.hot40:nth-child(4) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(27) > .hot50.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .is-aske-skin.life40.hot60 > a > .text.t100`
- `.hot50.life40.gridtriple:nth-child(2) > a > .text.t100`
- `.hot50.life40.gridtriple:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .hot60.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .no-image.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .hot50.no-image.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(32) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(32) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(32) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(32) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.hot80.is-dark-skin.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .is-aske-skin.life40.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .life40.hot60.gridtriple:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(36) > .hot40.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .no-image.is-aske-skin.hot60 > a > .text.t100`
- `.opinion.hot40.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .is-dark-skin.hot40.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .gridspotlight.life60.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .is-aske-skin.hot40.is-skin > a > .text.t100`
- `.life60.hot40.gridtriple > a > .text.t100`
- `.hot30.life40.gridtriple > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .is-aske-skin.hot40.is-skin > a > .text.t100`
- `.griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `.griddouble.hot30.no-image > a > .text.t100`
- `.lazy > .SingleTeaser.grid > .hot30.gridfullsize.life20 > a > .text.t100`
- `.is-dark-skin.hot30.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.hot30.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.card-size-medium.griddouble.is-dark-skin > a > .text.t100`
- `.card-size-medium.griddouble.life60:nth-child(2) > a > .text.t100`

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
