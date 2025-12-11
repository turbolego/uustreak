# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-12-11T00:53:17.026Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 5

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

- `.life60.gridfullsize.hot40 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.hot70.is-prefix-red-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot40.life40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .hot40.gridtriple.life20 > a > .text.t100`
- `.hot70.life60.is-dark-skin > a > .text.t100`
- `.hot10 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .life40.gridspotlightside.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.life60.gridspotlightside.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.hot20.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(8) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.life60.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(8) > .gridtriple.life40.hot60:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(9) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(9) > .hot30.opinion.gridspotlightside > a > .text.t100`
- `.hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot30.opinion.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot40.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .is-dark-skin.is-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlightside.hot60.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .is-primary-skin.is-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(18) > .gridtriple.hot60.life20 > a > .text.t100`
- `.hot20.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.breakingvarsel.griddouble.no-image:nth-child(1) > a > .text.t100`
- `.breakingvarsel.griddouble.no-image:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(22) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(22) > .hot40.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(22) > .hot40.gridtriple.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(23) > .hot50.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .opinion.hot50.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .hot40.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.gridspotlightside.hot60.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .life40.gridspotlightside.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(27) > .gridtriple.hot60.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(28) > .is-aske-skin.is-skin.gridtriple:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(28) > .gridtriple.life40.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(28) > .hot50.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.hot50.life40.gridspotlightside:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .is-prefix-red-skin.hot50.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .life40.gridspotlightside.hot60:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .gridtriple.life40.hot60:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .gridtriple.life40.hot60:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .opinion.hot50.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .life40.gridspotlightside.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(36) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .life40.gridspotlightside.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .hot40.life40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(39) > .hot50.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(39) > .hot30.opinion.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(39) > .gridtriple.life40.hot60 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(41) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .opinion.hot50.gridspotlight > a > .text.t100`
- `.hot40.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .is-prefix-red-skin.hot50.is-skin > a > .text.t100`
- `.griddouble.no-image.hot50 > a > .text.t100`
- `.is-dark-skin.griddouble.no-image > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .gridtriple.life40.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot40.gridtriple.life40:nth-child(2) > a > .text.t100`
- `.is-primary-skin.hot40.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.hot30.life40.gridspotlightside > a > .text.t100`
- `a[href$="bil-av-vegen"] > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .hot30.opinion.gridspotlightside:nth-child(2) > a > .text.t100`
- `.hot30.opinion.gridspotlightside:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .gridtriple.life40.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .is-dark-skin.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .gridtriple.hot60.life20:nth-child(3) > a > .text.t100`
- `.card-size-medium.griddouble.hot60:nth-child(1) > a > .text.t100`
- `.card-size-medium.griddouble.hot60:nth-child(2) > a > .text.t100`

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

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
