# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-10-24T03:51:08.915Z
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
- **Count:** 101

#### Affected Elements:

- `.life60.gridfullsize.hot40 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .gridfullsize-bundle.card-size-large.hot40 > a > .text.t100`
- `.small-items.griddouble.hot40 > a > .text.t100`
- `.small-items.griddouble.hot50 > a > .text.t100`
- `.is-dark-skin-prefix-red.hot60.life40 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot50.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.gridfullsize-bundle.breakingvarsel.card-size-large > a > .text.t100`
- `.small-items.griddouble.hot70 > a > .text.t100`
- `.small-items.griddouble.no-image > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.breakingvarsel.hot60.life40 > a > .text.t100`
- `.life60.is-dark-skin.hot70 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot40.life20 > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .hot70.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
- `.breaking > a > .text.t100`
- `.life60.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.hot50.life40.gridspotlightside > a > .text.t100`
- `.hot50.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .is-aske-skin.life40.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.hot70.life40.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(12) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .is-aske-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.hot70.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .hot60.life40.gridtriple > a > .text.t100`
- `.variant-a > a > .text.t100`
- `.is-aske-skin.hot60.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .breakingvarsel.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .hot60.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.opinion.hot30.gridtriple:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .opinion.hot30.gridtriple:nth-child(2) > a > .text.t100`
- `.opinion.hot30.gridtriple:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(21) > .is-dark-skin.is-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.gridspotlightside.hot40.payed:nth-child(2) > a > .text.t100`
- `.is-dark-skin.breakingvarsel.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .gridspotlightside.hot40.life20:nth-child(1) > a > .text.t100`
- `.is-dark-skin-prefix-red.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .no-image.hot30.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .is-dark-skin.hot70.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .gridtriple.hot40.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .hot60.gridtriple.payed > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(27) > .gridtriple.hot40.life20 > a > .text.t100`
- `.TwoTeasers > .griddouble.no-image.is-aske-skin > a > .text.t100`
- `.griddouble.is-dark-skin.no-image > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(31) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .is-dark-skin.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .life40.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .hot60.gridtriple.payed > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.is-aske-skin.hot50.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .hot60.gridtriple.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.opinion.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(44) > .opinion.hot30.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.hot80 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .gridtriple.hot40.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .hot50.gridtriple.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .no-image.hot30.is-aske-skin > a > .text.t100`
- `.is-dark-skin-prefix-red.is-skin.gridspotlightside:nth-child(3) > a > .text.t100`
- `.is-dark-skin-prefix-red.no-image.hot30 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(49) > .gridspotlightside.hot40.payed:nth-child(1) > a > .text.t100`
- `.hot70.gridspotlight.card-size-large > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(50) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(50) > .life40.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(50) > .gridtriple.hot40.payed:nth-child(3) > a > .text.t100`

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
