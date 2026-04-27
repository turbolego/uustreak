# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-04-27T08:09:00.838Z
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
- **Count:** 102

#### Affected Elements:

- `.gridfullsize-bundle > a > .text.t100`
- `.small-items.griddouble.hot50 > a > .text.t100`
- `.small-items.griddouble.hot40 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.is-primary-skin.is-skin.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.hot80.life40.gridtriple > a > .text.t100`
- `.is-dark-skin.hot70.life60 > a > .text.t100`
- `.is-dark-skin.gridtriple.is-skin:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.is-dark-skin-prefix-red.hot50.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .life60.hot30.gridspotlightside > a > .text.t100`
- `.breaking > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .gridtriple.hot40.life20 > a > .text.t100`
- `.hot80.life60.gridtriple > a > .text.t100`
- `.life60.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot50.is-aske-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .life60.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.hot60.life40.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .hot30.gridtriple.life20 > a > .text.t100`
- `.hot70.life60.gridspotlight > a > .text.t100`
- `.opinion.gridspotlightside.hot40 > a > .text.t100`
- `.hot80.life40.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(17) > .hot50.is-aske-skin.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .no-image.hot50.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .hot50.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .no-image.hot50.is-aske-skin:nth-child(2) > a > .text.t100`
- `.no-image.hot50.is-aske-skin:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .hot60.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(22) > .hot60.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .hot30.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .hot60.is-aske-skin.gridtriple > a > .text.t100`
- `.is-primary-skin.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .is-aske-skin.gridtriple.is-skin:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(26) > .hot30.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .is-dark-skin-prefix-red.is-skin.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .life40.gridspotlightside.hot40:nth-child(1) > a > .text.t100`
- `.is-primary-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .life40.gridspotlightside.hot40:nth-child(3) > a > .text.t100`
- `.life60.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
- `.hot70.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(34) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(34) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(34) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(35) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .hot60.is-aske-skin.gridtriple > a > .text.t100`
- `.hot30.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .no-image.hot50.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .is-aske-skin.is-skin.gridspotlightside:nth-child(4) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(40) > .life40.gridtriple.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .no-image.hot30.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `a[href$="varslar-snoe"] > .text.t100`
- `.griddouble.no-image.hot30 > a > .text.t100`
- `.griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.life40.gridtriple.hot40:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .life40.gridtriple.hot40:nth-child(2) > a > .text.t100`
- `.hot80.is-aske-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlightside.hot40.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .life40.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.card-size-medium.griddouble.hot60 > a > .text.t100`
- `.card-size-medium.griddouble.hot50 > a > .text.t100`

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
