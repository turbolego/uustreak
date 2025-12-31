# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-12-31T00:29:14.117Z
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
- **Count:** 96

#### Affected Elements:

- `.is-dark-skin-prefix-red.breakingvarsel.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid > .breakingvarsel.life40.hot60 > a > .text.t100`
- `.hot60.gridspotlightside.life20 > a > .text.t100`
- `.breakingvarsel.gridspotlightside.hot40 > a > .text.t100`
- `.gridfullsize-bundle.breakingvarsel.card-size-large > a > .text.t100`
- `.is-dark-skin-prefix-red.small-items.breakingvarsel > a > .text.t100`
- `.small-items.griddouble.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.hot50.gridtriple.life20 > a > .text.t100`
- `.hot70.is-dark-skin.life60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .gridtriple.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .gridfullsize-bundle.card-size-large.hot60 > a > .text.t100`
- `.small-items.griddouble.hot30 > a > .text.t100`
- `.small-items.griddouble.no-image > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .hot80.life60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .hot30.life60.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(7) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(8) > .is-aske-skin.life40.gridtriple > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(8) > .life60.hot60.gridtriple > a > .text.t100`
- `.hot70.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(9) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(9) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(9) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.breaking > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .is-aske-skin.is-skin.gridspotlightside:nth-child(4) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .is-aske-skin.gridtriple.is-skin:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .is-aske-skin.life40.hot60 > a > .text.t100`
- `.griddouble.no-image.hot30 > a > .text.t100`
- `.TwoTeasers > .griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.hot90 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(19) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.is-dark-skin-prefix-red.hot70.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(19) > .hot30.is-aske-skin.is-skin > a > .text.t100`
- `.hot60.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot60.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .is-aske-skin.hot60.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .gridspotlight.card-size-large.life60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .hot30.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(23) > .hot60.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
- `.hot30.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.hot50.life40.gridtriple > a > .text.t100`
- `.hot30.is-aske-skin.gridtriple > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(27) > .hot30.gridtriple.life20 > a > .text.t100`
- `.is-dark-skin.hot30.life60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .no-image.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(31) > .is-aske-skin.gridtriple.is-skin:nth-child(1) > a > .text.t100`
- `.is-aske-skin.gridtriple.is-skin:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(31) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(32) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.is-dark-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(32) > .life60.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .life60.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.is-dark-skin.no-image.life40 > a > .text.t100`
- `a[href$="hus-overtent"] > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .life40.gridtriple.hot40:nth-child(1) > a > .text.t100`
- `.life40.gridtriple.hot40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .gridtriple.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(41) > .life40.hot60.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.opinion > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.hot30.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .life40.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .life60.gridtriple.hot40 > a > .text.t100`
- `.feature > a > .text.t100`
- `.hot80.is-dark-skin-prefix-red.life60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot70.life60.gridspotlightside > a > .text.t100`
- `.no-image.is-aske-skin.life40 > a > .text.t100`
- `.hot80.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot70.life60.gridspotlightside > a > .text.t100`
- `.hot50.is-dark-skin.life60 > a > .text.t100`
- `.life60.hot60.gridtriple:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .life60.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .life60.hot60.gridtriple:nth-child(3) > a > .text.t100`

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
