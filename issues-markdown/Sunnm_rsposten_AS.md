# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-12-08T00:41:06.866Z
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
- **Count:** 98

#### Affected Elements:

- `.gridfullsize-bundle > a > .text.t100`
- `.small-items.griddouble.opinion > a > .text.t100`
- `.small-items.griddouble.hot80 > a > .text.t100`
- `.hot50.life40.gridspotlightside > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot50.gridspotlightside.payed:nth-child(3) > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot50.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.opinion.gridtriple.hot60 > a > .text.t100`
- `.hot70.life60.is-dark-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .hot50.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .gridspotlight.hot40.card-size-large > a > .text.t100`
- `.is-prefix-red-skin.hot70.life40 > a > .text.t100`
- `.hot70.life40.gridspotlightside:nth-child(3) > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.variant-b > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .no-image.hot40.is-aske-skin > a > .text.t100`
- `.is-prefix-red-skin.hot80.life40 > a > .text.t100`
- `.life60.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(8) > .hot40.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(8) > .life40.gridtriple.hot60 > a > .text.t100`
- `.hot70.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(9) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(9) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.is-dark-skin-prefix-red.hot80.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot40.is-aske-skin.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .no-image.hot50.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .life40.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot30.gridtriple.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .no-image.hot50.is-aske-skin > a > .text.t100`
- `.opinion.hot50.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(18) > .gridtriple.hot60.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.breakingvarsel > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot70.is-dark-skin.gridtriple > a > .text.t100`
- `.hot30.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .life40.gridtriple.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.opinion.hot40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .is-dark-skin.is-skin.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .no-image.hot30.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(23) > .gridtriple.hot60.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .hot60.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .hot50.gridtriple.life20 > a > .text.t100`
- `.variant-a.is-dark-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .opinion.hot30.gridtriple > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(27) > .opinion.hot30.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .hot30.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .no-image.hot30.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.hot30.gridspotlightside.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(31) > .is-dark-skin.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(31) > .hot40.gridtriple.payed > a > .text.t100`
- `.is-prefix-red-skin.hot50.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .is-aske-skin.life40.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(36) > .is-dark-skin.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .life40.gridtriple.hot60 > a > .text.t100`
- `.is-prefix-red-skin.life60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .gridtriple.hot60.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(39) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.is-dark-skin-prefix-red.is-skin.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(39) > .is-prefix-red-skin.life40.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(39) > .no-image.hot40.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(41) > .hot50.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .gridspotlight.hot40.card-size-large > a > .text.t100`
- `.hot70.life60.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .life40.gridtriple.hot60 > a > .text.t100`
- `.hot80.life60.is-dark-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .hot40.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.hot40.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.hot40.card-size-large > a > .text.t100`
- `.variant-a.life40.hot60 > a > .text.t100`
- `.hot80.life60.gridspotlightside > a > .text.t100`
- `.hot40.is-aske-skin.is-skin:nth-child(1) > a > .text.t100`
- `.opinion.gridspotlight.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .hot40.is-aske-skin.is-skin:nth-child(3) > a > .text.t100`
- `.card-size-medium.griddouble.life40 > a > .text.t100`
- `.card-size-medium.griddouble.hot30 > a > .text.t100`

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
