# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-12-15T00:30:23.507Z
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
- **Count:** 99

#### Affected Elements:

- `.gridfullsize.is-aske-skin.is-skin > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot60.life20:nth-child(2) > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot60.life20:nth-child(4) > a > .text.t100`
- `.hot80.life60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.hot70 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .life40.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .gridtriple.hot60.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.breaking > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.life60.gridspotlightside.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.hot30.life60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(8) > .is-dark-skin.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(8) > .life40.gridtriple.hot60 > a > .text.t100`
- `.hot80.life40.gridtriple > a > .text.t100`
- `.hot80.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(9) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(9) > .life40.gridspotlightside.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(9) > .hot40.gridspotlightside.life20:nth-child(4) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .hot40.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .life40.gridtriple.hot60:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .life40.gridtriple.hot60:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .opinion.life40.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.is-dark-skin.is-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `a[href$="feira-20-aar"] > .text.t100`
- `.hot30.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .is-dark-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .life40.gridtriple.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.feature > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(23) > .opinion.life40.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .hot40.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.is-aske-skin.is-skin.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .opinion.life40.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .life40.hot40.gridtriple:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(27) > .life40.hot40.gridtriple > a > .text.t100`
- `.TwoTeasers.grid:nth-child(28) > .griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(28) > .griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(31) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(31) > .gridtriple.hot60.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(31) > .life40.gridtriple.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(32) > .is-aske-skin.is-skin.gridspotlightside:nth-child(1) > a > .text.t100`
- `.life60.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(32) > .no-image.is-aske-skin.is-skin:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(32) > .no-image.is-aske-skin.is-skin:nth-child(4) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(35) > .griddouble.hot50.no-image > a > .text.t100`
- `.TwoTeasers.grid:nth-child(35) > .griddouble.no-image.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(36) > .gridtriple.hot60.life20 > a > .text.t100`
- `.opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot50.gridtriple.life20 > a > .text.t100`
- `.is-prefix-red-skin.is-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(39) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(39) > .no-image.is-aske-skin.is-skin:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(39) > .no-image.is-aske-skin.is-skin:nth-child(4) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(41) > .hot50.life40.gridtriple > a > .text.t100`
- `.TwoTeasers.grid:nth-child(42) > .griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(42) > .griddouble.hot50.no-image > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .hot40.gridtriple.life20 > a > .text.t100`
- `.opinion.hot50.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .life40.gridtriple.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .is-dark-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlightside.hot60.life20:nth-child(2) > a > .text.t100`
- `.is-prefix-red-skin.is-skin.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .is-dark-skin.is-skin.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .life40.gridtriple.hot60:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .hot50.life40.gridtriple > a > .text.t100`
- `.life40.gridspotlightside.hot60:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .life40.gridspotlightside.hot60:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .gridtriple.hot60.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .hot50.gridtriple.life20 > a > .text.t100`

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
