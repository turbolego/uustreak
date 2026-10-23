# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-10-23T05:42:15.086Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 6

## Violation Details

### <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements

- **Impact:** serious
- **Description:** Ensure <dl> elements are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/definition-list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.3
- **Count:** 2

#### Affected Elements:

- `.Credits:nth-child(2) > dl:nth-child(3)`
- `.Credits:nth-child(2) > dl:nth-child(4)`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 98

#### Affected Elements:

- `.breakingvarsel.life40.gridspotlight > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .breakingvarsel.hot40.gridspotlightside > a > .text.t100`
- `.breakingvarsel.is-dark-skin.hot70 > a > .text.t100`
- `.hot20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot70.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.hot60.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot70.life40.gridtriple > a > .text.t100`
- `.life60.is-dark-skin.hot70 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot50.gridtriple.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .life40.gridspotlight.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot60.gridspotlightside.payed:nth-child(2) > a > .text.t100`
- `.breaking > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot70.gridspotlightside.payed > a > .text.t100`
- `.life60.hot40.gridspotlightside > a > .text.t100`
- `.hot70.life40.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .hot40.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot70.life40.gridtriple > a > .text.t100`
- `.is-dark-skin-prefix-red.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot40.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .life40.gridspotlight.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .is-dark-skin.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .life40.gridtriple.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .life40.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.no-image.is-aske-skin.hot60 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(18) > .is-dark-skin.hot70.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.is-dark-skin.no-image.hot70 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .life40.gridtriple.hot40 > a > .text.t100`
- `.is-aske-skin.life40.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .is-aske-skin.hot50.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .is-dark-skin.is-skin.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(24) > .hot60.gridtriple.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .gridspotlight.hot60.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .is-aske-skin.is-skin.gridtriple:nth-child(2) > a > .text.t100`
- `.life60.hot60.gridtriple > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .hot40.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.hot50.gridspotlightside.payed:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .hot50.gridspotlightside.payed:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .hot40.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .gridtriple.hot40.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot60.gridtriple.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.hot80 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .no-image.is-aske-skin.hot30 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(36) > .hot40.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .life40.gridtriple.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .no-image.is-aske-skin.hot30 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .is-dark-skin-prefix-red.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .hot60.gridtriple.payed > a > .text.t100`
- `.gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .hot40.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .hot40.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.hot30.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.opinion.hot30.gridtriple:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot30.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .opinion.hot30.gridtriple:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.breakingvarsel.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.opinion.hot30.gridspotlightside:nth-child(1) > a > .text.t100`
- `.is-aske-skin.hot50.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .opinion.hot30.gridspotlightside:nth-child(3) > a > .text.t100`
- `.is-dark-skin-prefix-red.hot70.life40 > a > .text.t100`
- `.opinion.hot30.gridtriple:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .opinion.hot30.gridtriple:nth-child(3) > a > .text.t100`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.Layout`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.top`
- `.Layout`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.breaking-stripe`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
