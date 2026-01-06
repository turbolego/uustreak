# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-01-06T15:16:26.613Z
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

- `.gridfullsize.hot40.life20 > a > .text.t100`
- `.breakingvarsel > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.is-dark-skin-prefix-red > a > .text.t100`
- `.is-prefix-red-skin.hot60.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.breaking > a > .text.t100`
- `.is-dark-skin.hot70.life60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .life40.hot60.gridtriple:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.hot70.life60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .is-prefix-red-skin.life40.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .hot40.gridtriple.life20 > a > .text.t100`
- `.hot70.life40.gridtriple > a > .text.t100`
- `.life60.hot30.gridtriple > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.is-prefix-red-skin.hot70.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlightside.hot40.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot60.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.hot80 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot70.gridspotlight.card-size-large > a > .text.t100`
- `.opinion.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(19) > .hot40.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .hot30.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(21) > .hot30.gridtriple.life20 > a > .text.t100`
- `.hot50.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(21) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.is-dark-skin.hot50.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .hot30.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot40.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .opinion.life40.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .hot40.gridtriple.life20 > a > .text.t100`
- `.TwoTeasers.grid:nth-child(29) > .griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(29) > .griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.opinion.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot30.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .opinion.hot30.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .hot30.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(37) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .hot30.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .life40.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .opinion.hot30.gridtriple > a > .text.t100`
- `.no-image.gridfullsize.hot30 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(42) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .hot40.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.is-dark-skin.is-skin.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(44) > .hot60.gridtriple.life20 > a > .text.t100`
- `.gridfullsize.is-aske-skin.hot60 > a > .text.t100`
- `.TwoTeasers.grid:nth-child(46) > .griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(46) > .griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .hot50.life40.gridtriple > a > .text.t100`
- `.TwoTeasers.grid:nth-child(48) > .griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(48) > .griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(49) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(49) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(49) > .is-aske-skin.life40.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(50) > .life40.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(50) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(50) > .life40.hot60.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(51) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(51) > .gridspotlightside.hot40.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(51) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(51) > .no-image.hot30.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(52) > .is-aske-skin.life40.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(52) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(52) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(53) > .hot50.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(53) > .is-aske-skin.hot60.is-skin:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(53) > .is-aske-skin.hot60.is-skin:nth-child(3) > a > .text.t100`

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
