# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-03-20T00:38:48.952Z
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

- `.feature.life60.hot50 > a > .text.t100`
- `.hot40.gridspotlightside.payed:nth-child(2) > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot40.gridspotlightside.payed:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .breakingvarsel.gridspotlight.card-size-large > a > .text.t100`
- `.feature.life60.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .is-primary-skin.hot50.is-skin > a > .text.t100`
- `.breakingvarsel.life40.hot60 > a > .text.t100`
- `.life60.hot60.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot50.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .is-dark-skin-prefix-red.life40.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .no-image.is-aske-skin.hot50 > a > .text.t100`
- `.is-dark-skin.hot70.life60 > a > .text.t100`
- `.gridfullsize-bundle > a > .text.t100`
- `.small-items.griddouble.hot50 > a > .text.t100`
- `.small-items.griddouble.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .no-image.is-aske-skin.hot50 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .hot70.is-dark-skin-prefix-red.life40 > a > .text.t100`
- `.life60.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .no-image.is-aske-skin.hot50 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.is-dark-skin.is-skin.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot70.is-dark-skin-prefix-red.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .opinion.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .is-primary-skin.hot50.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .gridtriple.hot40.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .hot70.is-dark-skin-prefix-red.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .is-dark-skin-prefix-red.life40.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .no-image.is-aske-skin.is-skin:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .no-image.is-aske-skin.is-skin:nth-child(4) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(17) > .hot50.gridtriple.life20 > a > .text.t100`
- `.variant-b.hot40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .opinion.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .is-prefix-red-skin.is-skin.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .gridtriple.hot40.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .hot30.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.variant-b.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .hot40.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(22) > .hot40.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .opinion.life40.hot60 > a > .text.t100`
- `.is-primary-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.hot60.gridtriple.payed:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .life40.hot60.gridtriple > a > .text.t100`
- `.is-prefix-red-skin.is-skin.gridtriple > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(26) > .life40.hot60.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.breaking > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.no-image.hot30.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .is-aske-skin.life40.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .is-dark-skin-prefix-red.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.hot60.gridspotlightside.payed:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(34) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(34) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(34) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(35) > .hot40.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .hot30.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(40) > .hot40.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(42) > .hot40.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .hot60.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .opinion.hot30.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.hot70.no-image.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .breakingvarsel.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot30.gridtriple.life20 > a > .text.t100`
- `.hot30.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .is-dark-skin-prefix-red.is-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .is-dark-skin-prefix-red.gridspotlight.card-size-large > a > .text.t100`
- `.is-aske-skin.hot50.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .hot50.gridspotlightside.payed > a > .text.t100`

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
