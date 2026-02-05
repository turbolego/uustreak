# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-02-05T00:37:29.301Z
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

- `.gridfullsize.hot40.payed > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-dark-skin.is-skin.gridspotlightside > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlightside.payed > a > .text.t100`
- `.hot80.life60.gridspotlightside > a > .text.t100`
- `.hot50.gridspotlight.card-size-large > a > .text.t100`
- `.is-prefix-red-skin.hot70.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-dark-skin.no-image.hot60 > a > .text.t100`
- `.hot70.life60.is-dark-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot50.gridtriple.payed > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.is-aske-skin.hot60.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.life60.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.is-dark-skin.hot60.life40 > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .gridtriple.hot40.payed:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot60.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .gridtriple.hot40.payed:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .no-image.gridspotlightside.hot40:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .is-dark-skin.no-image.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .is-prefix-red-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot50.gridtriple.payed > a > .text.t100`
- `.feature > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .opinion.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.hot50.life40.gridtriple > a > .text.t100`
- `.hot50.no-image.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.opinion.life40.gridspotlightside:nth-child(3) > a > .text.t100`
- `.opinion.life40.gridspotlightside:nth-child(4) > a > .text.t100`
- `.griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `.griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.life60.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(23) > .life40.gridtriple.hot40 > a > .text.t100`
- `.hot30.gridtriple.payed > a > .text.t100`
- `.hot70.is-dark-skin.life40 > a > .text.t100`
- `.is-aske-skin.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.breaking > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .is-dark-skin.no-image.hot60 > a > .text.t100`
- `.hot30.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .hot50.life40.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .hot60.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .hot60.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .gridtriple.hot40.payed:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .is-dark-skin.life40.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .is-prefix-red-skin.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot30.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(32) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(32) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(32) > .hot50.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(32) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(33) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.hot80.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(33) > .gridtriple.hot40.payed:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .gridspotlightside.hot40.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .is-dark-skin.is-skin.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(37) > .is-aske-skin.life40.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .opinion.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.is-dark-skin-prefix-red.life40.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .gridtriple.hot40.payed:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .hot60.life40.gridtriple > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(42) > .gridtriple.hot40.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.no-image.is-aske-skin.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(44) > .hot60.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.is-dark-skin-prefix-red.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.opinion.hot60.life40 > a > .text.t100`
- `.opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .gridtriple.hot40.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .hot30.gridspotlightside.payed > a > .text.t100`

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
