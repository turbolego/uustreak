# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-04-14T00:45:55.796Z
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

- `.gridfullsize.no-image.card-size-large > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot70.life40.gridspotlightside > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .life40.is-aske-skin.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.hot60.life40.gridspotlightside > a > .text.t100`
- `.hot70.life40.gridtriple > a > .text.t100`
- `.hot70.is-dark-skin.life60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot40.payed > a > .text.t100`
- `.hot70.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .no-image.is-aske-skin.gridspotlightside > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot60.is-aske-skin.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .hot60.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .life60.hot30.gridtriple > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .gridtriple.hot40.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.life60.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlightside.hot40.payed:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .no-image.is-aske-skin.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .hot60.is-aske-skin.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .gridtriple.hot40.payed:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .gridtriple.hot40.payed:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .hot60.life40.gridtriple > a > .text.t100`
- `.life60.gridspotlight.card-size-large > a > .text.t100`
- `.hot50.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .no-image.life40.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(17) > .opinion.life40.gridtriple > a > .text.t100`
- `.griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `.griddouble.hot50.no-image > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .opinion.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .gridtriple.hot40.payed > a > .text.t100`
- `.opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(21) > .hot30.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(21) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(21) > .is-aske-skin.gridtriple.is-skin > a > .text.t100`
- `.breaking > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.is-dark-skin-prefix-red.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.opinion.hot30.gridspotlightside:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .opinion.hot30.gridspotlightside:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(26) > .hot60.is-aske-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .gridtriple.hot40.payed:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .life40.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(28) > .hot30.gridtriple.payed:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(28) > .hot30.is-aske-skin.gridtriple:nth-child(2) > a > .text.t100`
- `.hot30.is-aske-skin.gridtriple:nth-child(3) > a > .text.t100`
- `.hot50.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.no-image.hot30.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .hot30.gridspotlightside.payed:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .no-image.hot30.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(34) > .is-aske-skin.gridtriple.is-skin:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(34) > .life60.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(34) > .life40.is-aske-skin.gridtriple > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(35) > .gridtriple.hot40.life20 > a > .text.t100`
- `.griddouble.is-dark-skin.no-image > a > .text.t100`
- `.TwoTeasers.grid:nth-child(36) > .griddouble.no-image.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(40) > .hot60.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .hot30.life40.is-aske-skin > a > .text.t100`
- `.is-dark-skin-prefix-red.gridtriple.is-skin > a > .text.t100`
- `.hot50.is-dark-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.is-aske-skin.gridspotlightside.is-skin:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot30.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .no-image.hot30.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .is-aske-skin.gridspotlightside.is-skin:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .is-aske-skin.gridspotlightside.is-skin:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .no-image.life40.is-aske-skin > a > .text.t100`
- `.is-dark-skin.hot60.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot60.is-aske-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .is-aske-skin.gridtriple.is-skin:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlightside.hot40.payed:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlightside.hot40.payed:nth-child(3) > a > .text.t100`
- `.hot60.is-aske-skin.gridtriple:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .gridtriple.hot40.payed > a > .text.t100`
- `.hot60.is-aske-skin.gridtriple:nth-child(3) > a > .text.t100`

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
