# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-03-23T00:41:17.004Z
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
- **Count:** 98

#### Affected Elements:

- `.hot20 > a > .text.t100`
- `.variant-b.gridspotlight.card-size-large > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot40.payed > a > .text.t100`
- `.OnePlusXTeasers.grid > .is-dark-skin.life40.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.is-primary-skin.is-skin.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot70.life60.gridtriple > a > .text.t100`
- `.life60.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot40.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.breaking.no-image.gridspotlightside > a > .text.t100`
- `.hot70.is-dark-skin.life60 > a > .text.t100`
- `.hot80.life60.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .is-dark-skin.life40.is-skin > a > .text.t100`
- `.life60.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot60.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .gridtriple.hot40.payed > a > .text.t100`
- `.hot70.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.hot80.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .life60.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.breaking.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .gridtriple.hot40.payed > a > .text.t100`
- `.hot80.life60.gridtriple > a > .text.t100`
- `.feature.variant-b.hot70 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .opinion.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(17) > .hot30.gridtriple.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .life40.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .hot60.gridtriple.payed:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .opinion.hot30.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .is-primary-skin.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .hot30.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.hot30.is-aske-skin.is-skin:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .no-image.hot30.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(22) > .is-aske-skin.life40.is-skin > a > .text.t100`
- `.griddouble.no-image.hot30 > a > .text.t100`
- `.breaking.griddouble.no-image > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .gridtriple.hot40.payed:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .life40.gridtriple.hot40:nth-child(2) > a > .text.t100`
- `.life40.gridtriple.hot40:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(26) > .gridtriple.hot40.life20 > a > .text.t100`
- `.hot50.opinion.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .is-primary-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .hot50.no-image.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .is-aske-skin.is-skin.gridspotlightside:nth-child(4) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot60.gridtriple.payed:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .life40.hot60.gridtriple > a > .text.t100`
- `.hot60.gridtriple.payed:nth-child(3) > a > .text.t100`
- `.hot30.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .is-dark-skin.is-skin.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(34) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(34) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(34) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(35) > .life40.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .opinion.hot30.gridtriple > a > .text.t100`
- `.breakingvarsel.is-aske-skin.is-skin:nth-child(2) > a > .text.t100`
- `.breakingvarsel.is-aske-skin.is-skin:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.no-image.gridspotlightside.hot40:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .no-image.gridspotlightside.hot40:nth-child(4) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(40) > .gridtriple.hot40.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(41) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(41) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(41) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(41) > .is-dark-skin.is-skin.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(42) > .life40.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .gridtriple.hot40.payed:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .gridtriple.hot40.payed:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.gridspotlightside.hot40.payed:nth-child(1) > a > .text.t100`
- `.breakingvarsel.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .is-aske-skin.is-skin.gridspotlightside:nth-child(3) > a > .text.t100`
- `.no-image.is-aske-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.feature.life60.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .hot50.no-image.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .gridtriple.hot40.payed > a > .text.t100`
- `.opinion.life40.hot60 > a > .text.t100`
- `.hot50.gridtriple.life20 > a > .text.t100`
- `.griddouble.hot50.no-image:nth-child(1) > a > .text.t100`
- `.griddouble.hot50.no-image:nth-child(2) > a > .text.t100`
- `.breakingvarsel.gridfullsize.hot60 > a > .text.t100`

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
