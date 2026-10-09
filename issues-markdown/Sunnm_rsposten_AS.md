# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-10-09T05:12:18.897Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 6

## Violation Details

### <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements

- **Impact:** serious
- **Description:** Ensure <dl> elements are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/definition-list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.3
- **Count:** 2

#### Affected Elements:

- `.Credits:nth-child(2) > dl:nth-child(3)`
- `.Credits:nth-child(2) > dl:nth-child(4)`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 98

#### Affected Elements:

- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot50.breakingvarsel.gridspotlightside > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .breakingvarsel.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot40.life20:nth-child(1) > a > .text.t100`
- `.is-dark-skin-prefix-red.life40.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
- `.hot90 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot50.is-aske-skin.breakingvarsel > a > .text.t100`
- `.is-dark-skin.hot70.life60 > a > .text.t100`
- `.liveblog > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.hot70.life40.gridspotlightside > a > .text.t100`
- `.hot50.life40.breakingvarsel > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .life60.gridspotlightside.hot40 > a > .text.t100`
- `.breaking > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .breakingvarsel.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot60.life40.breakingvarsel > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .life40.is-aske-skin.is-skin > a > .text.t100`
- `.is-prefix-red-skin.gridspotlight.card-size-large > a > .text.t100`
- `.hot70.life60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .no-image.is-aske-skin.breakingvarsel > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot60.life40.breakingvarsel > a > .text.t100`
- `.is-dark-skin-prefix-red.no-image.is-skin > a > .text.t100`
- `.is-primary-skin.hot50.gridspotlight > a > .text.t100`
- `.is-primary-skin.is-skin.gridspotlightside > a > .text.t100`
- `.is-dark-skin-prefix-red.life60.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot50.gridtriple.life20 > a > .text.t100`
- `.hot80 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .gridtriple.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.breakingvarsel > a > .text.t100`
- `.hot60.life40.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .no-image.is-aske-skin.is-skin:nth-child(3) > a > .text.t100`
- `.no-image.is-aske-skin.is-skin:nth-child(4) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(18) > .life40.gridtriple.hot40 > a > .text.t100`
- `.TwoTeasers.grid:nth-child(19) > .griddouble.no-image.is-aske-skin > a > .text.t100`
- `.TwoTeasers.grid:nth-child(19) > .griddouble.no-image.hot40:nth-child(2) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(20) > .griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(20) > .griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(23) > .breakingvarsel.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(23) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(23) > .hot30.gridtriple.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(24) > .life40.gridtriple.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .life40.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .life60.gridspotlightside.hot40 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .hot30.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .opinion.hot30.gridtriple > a > .text.t100`
- `.gridfullsize.hot30.life20 > a > .text.t100`
- `.griddouble.no-image.hot30:nth-child(1) > a > .text.t100`
- `.griddouble.no-image.hot30:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(33) > .hot30.is-aske-skin.is-skin > a > .text.t100`
- `.opinion.hot30.gridtriple:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(33) > .opinion.hot30.gridtriple:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(36) > .gridtriple.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .gridspotlightside.hot40.life20:nth-child(1) > a > .text.t100`
- `.opinion.life40.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.is-prefix-red-skin.is-skin.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .breakingvarsel.gridspotlightside.hot40 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(41) > .is-dark-skin-prefix-red.breakingvarsel.is-skin > a > .text.t100`
- `.life60.hot50.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.is-prefix-red-skin.breakingvarsel.is-skin > a > .text.t100`
- `.breakingvarsel.gridspotlightside.hot40:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.breakingvarsel > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .life40.breakingvarsel.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .no-image.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.opinion.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .breakingvarsel.gridspotlightside.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot60.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.hot30.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.breakingvarsel > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .opinion.hot30.gridtriple > a > .text.t100`
- `.hot30.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .hot50.gridtriple.life20 > a > .text.t100`
- `.opinion.hot30.gridspotlightside:nth-child(1) > a > .text.t100`
- `.life60.hot50.gridspotlight > a > .text.t100`
- `.opinion.hot30.gridspotlightside:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(51) > .is-dark-skin-prefix-red.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(51) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(51) > .hot50.is-aske-skin.breakingvarsel > a > .text.t100`
- `.card-size-medium.griddouble.hot40:nth-child(1) > a > .text.t100`
- `.card-size-medium.is-primary-skin.griddouble > a > .text.t100`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.Layout`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.top`
- `.Layout`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.breaking-stripe`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
