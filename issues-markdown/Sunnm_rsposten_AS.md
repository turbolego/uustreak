# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-03-30T03:48:37.264Z
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

- `.gridfullsize.hot60.life20 > a > .text.t100`
- `.is-dark-skin-prefix-red.breakingvarsel.hot70 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.is-aske-skin.hot40.is-skin:nth-child(3) > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot60.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .no-image.hot60.gridspotlightside > a > .text.t100`
- `.life60.is-dark-skin.hot70 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot60.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .hot70.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .hot70.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.life60.hot70.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .hot40.gridtriple.life20 > a > .text.t100`
- `.life60.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot40.gridtriple.life20 > a > .text.t100`
- `.variant-a > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.life60.hot30.gridspotlightside > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .hot60.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.hot80.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .life40.gridtriple.hot60:nth-child(1) > a > .text.t100`
- `.hot80.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .is-dark-skin-prefix-red.life40.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .hot60.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .hot60.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .no-image.hot60.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(17) > .gridtriple.hot60.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.hot50.is-aske-skin.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.hot50.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.is-dark-skin.hot30.is-skin > a > .text.t100`
- `.hot50.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.is-dark-skin.is-skin.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.opinion.hot30.gridtriple > a > .text.t100`
- `.hot30.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .hot30.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .is-dark-skin.no-image.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .hot30.gridtriple.life20 > a > .text.t100`
- `.opinion.hot50.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(26) > .hot40.gridtriple.life20 > a > .text.t100`
- `.griddouble.no-image.is-aske-skin > a > .text.t100`
- `.griddouble.no-image.hot30 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .hot40.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .no-image.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .hot40.gridspotlightside.life20:nth-child(4) > a > .text.t100`
- `.is-dark-skin-prefix-red.breakingvarsel.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .life40.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot40.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .is-aske-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.is-prefix-red-skin.breakingvarsel.hot70 > a > .text.t100`
- `.is-aske-skin.life40.is-skin > a > .text.t100`
- `.is-dark-skin.hot70.life40 > a > .text.t100`
- `.breaking > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(35) > .gridtriple.hot60.life20 > a > .text.t100`
- `.breakingvarsel.no-image.is-aske-skin > a > .text.t100`
- `.is-aske-skin.is-skin.gridtriple:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .gridtriple.hot60.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.opinion.hot30.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(40) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .hot30.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .hot30.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.hot30.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(42) > .gridtriple.hot60.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot40.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.is-dark-skin.hot50.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .is-prefix-red-skin.gridspotlight.card-size-large > a > .text.t100`
- `.breakingvarsel.hot40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .is-dark-skin.no-image.hot40 > a > .text.t100`
- `.life40.hot40.gridtriple:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .life40.hot40.gridtriple:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot40.gridtriple.life20 > a > .text.t100`
- `.opinion.gridspotlight.card-size-large > a > .text.t100`
- `.hot30.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot30.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.card-size-medium.griddouble.hot70 > a > .text.t100`
- `.card-size-medium.griddouble.hot60 > a > .text.t100`

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
