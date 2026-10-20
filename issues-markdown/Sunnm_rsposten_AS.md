# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-10-20T04:02:31.699Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 5

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

- `.breakingvarsel.hot70.gridfullsize > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.is-dark-skin.hot50.gridspotlightside > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot50.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(1) > .hot50.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(1) > .hot50.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.hot50.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(3) > .is-dark-skin-prefix-red.hot70.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(3) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.life60.is-dark-skin.hot70 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .hot70.gridspotlight.card-size-large > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.hot70.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(7) > .hot50.gridtriple.life20 > a > .text.t100`
- `.life60.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(7) > .hot60.gridtriple.life20 > a > .text.t100`
- `.breakingvarsel.hot50.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(9) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(9) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(9) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .hot50.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .hot50.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .opinion.life40.hot40 > a > .text.t100`
- `.life40.hot60.gridspotlightside:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(15) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.is-dark-skin.no-image.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(15) > .life40.hot60.gridspotlightside:nth-child(4) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot30.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.hot30.gridspotlightside.life20:nth-child(4) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(18) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .opinion.life40.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .life40.hot60.gridtriple > a > .text.t100`
- `.opinion.hot30.gridspotlightside:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .opinion.hot30.gridspotlightside:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.is-prefix-red-skin.gridspotlight.hot50 > a > .text.t100`
- `.hot30.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.is-dark-skin.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .hot30.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .life40.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot40.gridtriple.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .hot30.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .hot30.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.hot80 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .hot30.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot40.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.hot40.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.no-image.hot30.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(33) > .griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.hot50.is-aske-skin.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.opinion.hot50.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .life40.hot60.gridtriple > a > .text.t100`
- `.is-prefix-red-skin.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .is-dark-skin-prefix-red.hot40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .hot70.gridspotlight.card-size-large > a > .text.t100`
- `.hot70.is-aske-skin.life40:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .is-aske-skin.hot40.gridspotlightside:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.is-dark-skin-prefix-red.hot60.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .gridspotlight.hot50.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .hot70.is-aske-skin.life40 > a > .text.t100`
- `.is-dark-skin-prefix-red.life40.hot60 > a > .text.t100`
- `.is-dark-skin-prefix-red.hot30.gridtriple > a > .text.t100`
- `.hot30.is-aske-skin.gridtriple:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .is-dark-skin-prefix-red.hot70.life40 > a > .text.t100`
- `.hot30.is-aske-skin.gridtriple:nth-child(3) > a > .text.t100`
- `.griddouble.no-image.hot40:nth-child(1) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(45) > .griddouble.no-image.is-aske-skin > a > .text.t100`
- `.is-dark-skin-prefix-red.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot70.life40.gridspotlightside > a > .text.t100`
- `.is-dark-skin.hot60.gridtriple:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .is-dark-skin-prefix-red.hot40.gridtriple > a > .text.t100`
- `.is-dark-skin.life40.hot60 > a > .text.t100`
- `.card-size-medium.griddouble.is-aske-skin > a > .text.t100`
- `.card-size-medium.griddouble.hot60:nth-child(2) > a > .text.t100`

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

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
