# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-11-13T05:46:13.077Z
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

- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlight.card-size-large > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.life20.hot40 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot60.breakingvarsel.is-aske-skin > a > .text.t100`
- `.gridfullsize-bundle > a > .text.t100`
- `.small-items.griddouble.life20:nth-child(1) > a > .text.t100`
- `.small-items.griddouble.life20:nth-child(2) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.life20.hot40 > a > .text.t100`
- `.life60.hot60.breakingvarsel > a > .text.t100`
- `.opinion.hot60.gridtriple > a > .text.t100`
- `.hot70 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .breaking.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .hot50.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlightside.life20.hot40:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .breaking.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlightside.life20.hot40:nth-child(3) > a > .text.t100`
- `.is-prefix-red-skin.hot50.is-skin > a > .text.t100`
- `.hot50.gridtriple.life40 > a > .text.t100`
- `.hot50.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.life20 > a > .text.t100`
- `.hot80.life60.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(12) > .hot60.gridtriple.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .breakingvarsel.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .opinion.gridtriple.life40 > a > .text.t100`
- `.hot80.gridtriple.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .hot60.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.opinion.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .hot60.life40.gridspotlightside:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .gridspotlight.card-size-large.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .hot60.life40.gridspotlightside:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .opinion.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .gridtriple.life20.hot40:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(20) > .breakingvarsel.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .breakingvarsel.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .life40.gridspotlightside.hot40:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.opinion.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .hot60.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .is-prefix-red-skin.breakingvarsel.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .gridtriple.life20.hot40:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(26) > .gridtriple.life20.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .breakingvarsel.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot30.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.no-image.hot30.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .is-dark-skin-prefix-red.breakingvarsel.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .is-prefix-red-skin.breakingvarsel.is-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(30) > .breakingvarsel.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(31) > .gridtriple.life40.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(31) > .gridtriple.life20.hot40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(31) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .breakingvarsel.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .gridspotlightside.life20.hot40:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(34) > .gridspotlightside.life20.hot40:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(34) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(34) > .gridspotlightside.life20.hot40:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .breakingvarsel.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .is-dark-skin-prefix-red.breakingvarsel.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.hot60.is-aske-skin.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .hot50.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .gridspotlightside.life20.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(39) > .gridtriple.life20.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .hot60.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .gridtriple.life20.hot40 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(43) > .gridtriple.life20.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .gridspotlightside.life20.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(45) > .gridtriple.life20.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .breakingvarsel.gridspotlightside.life20 > a > .text.t100`
- `.no-image.hot30.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .gridtriple.life20.hot40:nth-child(1) > a > .text.t100`
- `.no-image.breakingvarsel.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .is-aske-skin.is-skin.gridtriple:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .is-aske-skin.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .gridspotlightside.life20.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .hot50.life40.gridspotlightside > a > .text.t100`

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
