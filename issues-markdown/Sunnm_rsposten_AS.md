# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-07-26T13:28:36.815Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 6

## Violation Details

### <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements

- **Impact:** serious
- **Description:** Ensure <dl> elements are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/definition-list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.3
- **Count:** 2

#### Affected Elements:

- `.Credits:nth-child(2) > dl:nth-child(3)`
- `.Credits:nth-child(2) > dl:nth-child(4)`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 101

#### Affected Elements:

- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlight.card-size-large > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot40.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-dark-skin-prefix-red.breakingvarsel.is-skin > a > .text.t100`
- `.breaking.gridtriple.hot40 > a > .text.t100`
- `.hot70 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.gridfullsize-bundle.is-prefix-red-skin.hot60 > a > .text.t100`
- `.small-items.is-prefix-red-skin.hot60 > a > .text.t100`
- `.hot50.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `a[href$="heilt-villt"] > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot50.gridtriple.life40 > a > .text.t100`
- `a[href$="spill"] > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlightside.hot40.life20:nth-child(1) > a > .text.t100`
- `.feature > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .is-primary-skin.is-skin.gridspotlightside > a > .text.t100`
- `.opinion > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .hot60.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .gridtriple.life40.hot40 > a > .text.t100`
- `.gridfullsize-bundle.hot30.card-size-large > a > .text.t100`
- `.small-items.is-dark-skin.hot30 > a > .text.t100`
- `.hot80 > a > .text.t100`
- `.breakingvarsel.hot60.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(17) > .life40.gridtriple.hot40 > a > .text.t100`
- `.TwoTeasers.grid:nth-child(18) > .griddouble.breakingvarsel.hot50 > a > .text.t100`
- `.griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.is-dark-skin-prefix-red.gridtriple.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .no-image.is-aske-skin.gridtriple > a > .text.t100`
- `.hot60.is-aske-skin.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .hot30.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .hot60.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .hot30.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(23) > .life40.gridtriple.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.is-prefix-red-skin.is-skin.gridspotlightside > a > .text.t100`
- `.hot60.gridspotlightside.life20 > a > .text.t100`
- `.hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .gridtriple.hot40.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .gridtriple.hot40.life20 > a > .text.t100`
- `.breaking.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.variant-a > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .gridtriple.life40.hot40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .breakingvarsel.gridtriple.life40 > a > .text.t100`
- `.hot30.is-aske-skin.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.is-primary-skin.breakingvarsel.hot30 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .no-image.gridspotlightside.hot40 > a > .text.t100`
- `.TwoTeasers.grid:nth-child(35) > .griddouble.no-image.is-aske-skin > a > .text.t100`
- `.griddouble.is-dark-skin-prefix-red.breakingvarsel > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(36) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot60.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .is-aske-skin.gridtriple.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(39) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(39) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(39) > .life40.gridspotlightside.hot40:nth-child(3) > a > .text.t100`
- `.no-image.is-aske-skin.life40 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(40) > .breakingvarsel.is-aske-skin.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .is-aske-skin.is-skin.gridspotlightside:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .hot50.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .is-aske-skin.gridtriple.is-skin:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .no-image.is-aske-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.is-dark-skin-prefix-red.breakingvarsel.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .breakingvarsel.no-image.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .hot30.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .hot50.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .breakingvarsel.is-aske-skin.gridtriple > a > .text.t100`
- `.is-dark-skin.hot50.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .no-image.is-aske-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .is-dark-skin-prefix-red.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .gridspotlightside.hot40.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.Layout`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.top`
- `.Layout`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.breaking-stripe`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
