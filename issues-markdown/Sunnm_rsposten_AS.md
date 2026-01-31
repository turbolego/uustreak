# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-01-31T00:36:40.983Z
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
- **Count:** 99

#### Affected Elements:

- `a[href$="her-stod-up"] > .text.t100`
- `.hot70.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid > .no-image.is-aske-skin.is-skin:nth-child(2) > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot70.life40.gridspotlightside > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .no-image.is-aske-skin.is-skin:nth-child(4) > a > .text.t100`
- `.hot80.life60.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot60.payed > a > .text.t100`
- `.is-dark-skin.hot70.life60 > a > .text.t100`
- `.life60.gridtriple.hot60 > a > .text.t100`
- `.hot80.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .gridspotlightside.hot60.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .hot70.life40.gridspotlightside > a > .text.t100`
- `.life60.gridspotlightside.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .life40.gridspotlightside.hot60 > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.life60.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .life40.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot30.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot80.life40.gridspotlightside > a > .text.t100`
- `.breakingvarsel.hot50.no-image > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlightside.hot60.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .life40.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .gridtriple.hot60.payed:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .is-dark-skin-prefix-red.hot80.is-skin > a > .text.t100`
- `.hot50.gridspotlightside.payed > a > .text.t100`
- `.is-dark-skin.hot40.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .life40.gridspotlightside.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(21) > .hot40.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(21) > .gridtriple.hot60.payed > a > .text.t100`
- `.hot40.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .hot40.gridspotlightside.payed:nth-child(2) > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(24) > .hot40.life40.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot40.life40.gridtriple:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .is-dark-skin-prefix-red.hot80.is-skin > a > .text.t100`
- `.opinion.hot40.life40 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .opinion.hot40.gridtriple > a > .text.t100`
- `.TwoTeasers.grid:nth-child(29) > .griddouble.no-image.hot40:nth-child(1) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(29) > .griddouble.no-image.hot40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot40.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot30.gridtriple.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .is-dark-skin-prefix-red.is-skin.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .hot30.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .hot30.gridtriple.payed > a > .text.t100`
- `.hot50.gridtriple.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .is-aske-skin.is-skin.gridspotlightside:nth-child(3) > a > .text.t100`
- `.no-image.hot30.is-aske-skin > a > .text.t100`
- `.life60.opinion.hot40 > a > .text.t100`
- `.TwoTeasers.grid:nth-child(43) > .griddouble.no-image.hot40:nth-child(1) > a > .text.t100`
- `.breakingvarsel.griddouble.no-image > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(44) > .hot30.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .life40.gridtriple.hot60:nth-child(2) > a > .text.t100`
- `.hot70.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .is-dark-skin-prefix-red.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .hot30.gridtriple.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(49) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(49) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(49) > .hot30.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(50) > .hot40.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(50) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(50) > .life40.gridtriple.hot60 > a > .text.t100`

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
