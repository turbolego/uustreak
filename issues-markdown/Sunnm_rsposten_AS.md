# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-12-23T00:28:22.444Z
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

- `.gridfullsize.card-size-large.no-image > a > .text.t100`
- `.breakingvarsel > a > .text.t100`
- `.hot70.life40.gridspotlightside:nth-child(2) > a > .text.t100`
- `.hot70.life40.gridspotlightside:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot50.life40.gridspotlightside > a > .text.t100`
- `.life60.gridspotlight.card-size-large > a > .text.t100`
- `.is-dark-skin.hot60.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .life40.is-aske-skin.gridtriple > a > .text.t100`
- `.hot70.life60.is-dark-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .gridtriple.hot60.payed:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .is-aske-skin.hot60.is-skin:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.life60.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.is-dark-skin.hot50.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(8) > .life60.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(8) > .life40.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(8) > .hot50.gridtriple.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(9) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(9) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(9) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(9) > .hot50.no-image.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .hot50.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .gridspotlight.hot50.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .hot40.gridspotlightside.payed:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.hot30.gridtriple.payed > a > .text.t100`
- `.opinion.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .life60.gridtriple.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .gridspotlight.hot50.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .hot50.no-image.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(18) > .life40.is-aske-skin.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .opinion.life40.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .no-image.is-aske-skin.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot80.is-dark-skin.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .life40.is-aske-skin.gridtriple > a > .text.t100`
- `.life40.gridtriple.hot60:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .no-image.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(23) > .hot40.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.hot30.life40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .is-aske-skin.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .is-aske-skin.gridtriple.hot60 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(27) > .hot40.gridtriple.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.is-dark-skin.hot40.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.card-size-medium.griddouble.is-aske-skin > a > .text.t100`
- `.TwoTeasers.grid:nth-child(29) > .card-size-medium.griddouble.hot60 > a > .text.t100`
- `.griddouble.hot30.no-image > a > .text.t100`
- `.TwoTeasers.grid:nth-child(31) > .griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .gridtriple.hot60.payed > a > .text.t100`
- `.is-dark-skin.hot30.gridtriple > a > .text.t100`
- `.hot80.gridspotlightside.payed > a > .text.t100`
- `.hot80.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .hot80.is-dark-skin.life40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(36) > .hot30.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .is-aske-skin.hot40.is-skin > a > .text.t100`
- `.hot50.life40.gridtriple:nth-child(1) > a > .text.t100`
- `.hot50.life40.gridtriple:nth-child(2) > a > .text.t100`
- `.no-image.is-aske-skin.gridtriple > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(41) > .hot40.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .no-image.is-aske-skin.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .is-aske-skin.hot40.gridtriple > a > .text.t100`
- `.gridfullsize.life40.hot60 > a > .text.t100`
- `.griddouble.hot50.no-image > a > .text.t100`
- `.griddouble.no-image.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .gridtriple.hot60.payed:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .gridtriple.hot60.payed:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .is-aske-skin.gridtriple.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.hot50.card-size-large > a > .text.t100`
- `.hot30.no-image.gridspotlightside > a > .text.t100`
- `.life60.hot40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .is-aske-skin.hot40.is-skin > a > .text.t100`
- `.card-size-medium.griddouble.life40 > a > .text.t100`
- `.card-size-medium.griddouble.hot50 > a > .text.t100`

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
