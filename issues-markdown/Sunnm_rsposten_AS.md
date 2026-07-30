# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-07-30T00:53:30.846Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 5

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
- **Count:** 100

#### Affected Elements:

- `.hot50.gridfullsize.life20 > a > .text.t100`
- `.gridfullsize-bundle > a > .text.t100`
- `.small-items.is-prefix-red-skin.griddouble:nth-child(1) > a > .text.t100`
- `.small-items.is-prefix-red-skin.hot50 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.hot10 > a > .text.t100`
- `.is-dark-skin.is-skin.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .no-image.gridspotlightside.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .life60.hot60.gridtriple > a > .text.t100`
- `.hot70.is-dark-skin.life60 > a > .text.t100`
- `.feature.hot70.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .is-aske-skin.no-image.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .is-aske-skin.is-skin.gridspotlightside:nth-child(3) > a > .text.t100`
- `a[href$="spill"] > .text.t100`
- `.hot20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .life60.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .life40.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot60.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .no-image.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.hot50.life40.gridspotlightside > a > .text.t100`
- `.is-dark-skin-prefix-red > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .hot60.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(17) > .gridtriple.hot40.life20 > a > .text.t100`
- `.hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .no-image.gridspotlightside.hot40 > a > .text.t100`
- `.feature.hot60.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .breakingvarsel.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .hot30.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .is-aske-skin.no-image.is-skin > a > .text.t100`
- `.hot30.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .hot50.breakingvarsel.gridspotlightside > a > .text.t100`
- `.variant-a > a > .text.t100`
- `.hot50.breakingvarsel.is-aske-skin > a > .text.t100`
- `.opinion.hot50.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .no-image.gridspotlightside.hot40 > a > .text.t100`
- `.hot50.griddouble.no-image > a > .text.t100`
- `.breakingvarsel.griddouble.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .is-dark-skin.is-skin.gridtriple > a > .text.t100`
- `.TwoTeasers.grid:nth-child(29) > .griddouble.is-aske-skin.no-image:nth-child(1) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(29) > .griddouble.is-aske-skin.no-image:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .life40.gridtriple.hot40 > a > .text.t100`
- `.TwoTeasers.grid:nth-child(32) > .griddouble.is-aske-skin.hot60 > a > .text.t100`
- `.TwoTeasers.grid:nth-child(32) > .griddouble.is-aske-skin.no-image:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.opinion.hot30.gridspotlightside:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .opinion.hot30.gridspotlightside:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .hot60.life40.gridtriple > a > .text.t100`
- `.hot30.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .hot30.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(36) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.is-dark-skin.griddouble.no-image > a > .text.t100`
- `.TwoTeasers.grid:nth-child(37) > .griddouble.no-image.hot40:nth-child(2) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .gridspotlightside.hot40.life20:nth-child(1) > a > .text.t100`
- `.breakingvarsel.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .breakingvarsel.is-aske-skin.no-image > a > .text.t100`
- `.opinion.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .breakingvarsel.is-aske-skin.no-image > a > .text.t100`
- `.breakingvarsel.no-image.gridtriple:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .hot60.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.breaking > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .hot30.no-image.gridspotlightside > a > .text.t100`
- `.hot30.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .is-aske-skin.no-image.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot30.no-image.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .gridspotlightside.hot40.life20:nth-child(2) > a > .text.t100`
- `a[href$="heilt-villt"] > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .is-aske-skin.no-image.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .life40.gridspotlightside.hot40 > a > .text.t100`

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

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
