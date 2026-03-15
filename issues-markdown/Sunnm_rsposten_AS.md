# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-03-15T00:39:23.472Z
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
- **Count:** 101

#### Affected Elements:

- `.breakingvarsel.no-image.gridfullsize > a > .text.t100`
- `.is-prefix-red-skin.life60.gridspotlight > a > .text.t100`
- `.hot60.is-aske-skin.life40 > a > .text.t100`
- `.is-dark-skin-prefix-red.breakingvarsel.life40 > a > .text.t100`
- `.breaking.hot40.gridspotlightside > a > .text.t100`
- `.gridfullsize-bundle > a > .text.t100`
- `.small-items.griddouble.breakingvarsel:nth-child(1) > a > .text.t100`
- `.small-items.griddouble.breakingvarsel:nth-child(2) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.hot80.is-aske-skin.life40 > a > .text.t100`
- `.is-dark-skin.life60.hot70 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot60.is-aske-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .life60.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.no-image.is-aske-skin.life40 > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.variant-a > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .life40.hot40.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .hot70.is-aske-skin.life40 > a > .text.t100`
- `.life60.hot30.gridtriple > a > .text.t100`
- `.is-primary-skin.hot50.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .gridtriple.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.is-primary-skin.is-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .is-aske-skin.life40.gridtriple > a > .text.t100`
- `.is-primary-skin.hot30.gridtriple > a > .text.t100`
- `.hot80.is-dark-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .opinion.hot40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .hot70.is-aske-skin.life40 > a > .text.t100`
- `.breaking.no-image.hot30 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(17) > .hot60.life40.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .hot70.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .hot30.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .is-dark-skin.gridtriple.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .is-aske-skin.gridtriple.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .hot30.gridtriple.life20 > a > .text.t100`
- `.gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .opinion.hot30.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .no-image.hot30.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(22) > .opinion.hot30.life40 > a > .text.t100`
- `.life40.hot40.gridspotlightside:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.opinion.life40.hot40 > a > .text.t100`
- `.breakingvarsel.hot50.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .life40.gridtriple.hot40 > a > .text.t100`
- `.breakingvarsel.is-aske-skin.gridtriple > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(26) > .gridtriple.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot70.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot70.is-aske-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `a[href$="faar-ja"] > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .life40.hot40.gridspotlightside > a > .text.t100`
- `.hot60.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot60.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot60.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .hot70.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.is-prefix-red-skin.hot60.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(34) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(34) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(34) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(35) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .hot30.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .opinion.hot30.gridtriple > a > .text.t100`
- `.card-size-medium.griddouble.hot30:nth-child(1) > a > .text.t100`
- `.card-size-medium.griddouble.opinion > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(40) > .gridtriple.hot40.life20 > a > .text.t100`
- `.no-image.gridfullsize.hot60 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(42) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .hot60.is-aske-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.is-dark-skin-prefix-red.hot50.no-image > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .opinion.hot30.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot80.life60.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot60.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .no-image.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(49) > .hot40.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.life60.hot70.gridspotlight > a > .text.t100`
- `a[href$="skiftar-ham"] > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(49) > .no-image.hot30.is-aske-skin > a > .text.t100`

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
