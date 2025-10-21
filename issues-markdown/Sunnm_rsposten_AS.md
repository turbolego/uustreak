# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-10-21T00:26:26.470Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 7

## Violation Details

### <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements

- **Impact:** serious
- **Description:** Ensure <dl> elements are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/definition-list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1
- **Count:** 2

#### Affected Elements:

- `.Credits:nth-child(2) > dl:nth-child(3)`
- `.Credits:nth-child(2) > dl:nth-child(4)`

### Aside should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the complementary landmark or aside is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-complementary-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.teaserasides`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 99

#### Affected Elements:

- `.gridfullsize.hot40.life20 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.hot70.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .hot70.life40.gridtriple > a > .text.t100`
- `.is-dark-skin.life60.hot70 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .life40.gridtriple.hot60 > a > .text.t100`
- `.card-size-medium.griddouble.is-aske-skin > a > .text.t100`
- `.card-size-medium.griddouble.life60 > a > .text.t100`
- `.breaking > a > .text.t100`
- `.griddouble.is-aske-skin.no-image > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(6) > .life40.gridtriple.hot60 > a > .text.t100`
- `.life60.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(7) > .is-aske-skin.no-image.is-skin > a > .text.t100`
- `.hot80 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .life40.gridspotlightside.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .hot70.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .hot50.no-image.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .life40.gridtriple.hot60:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .opinion.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .life60.gridspotlightside.hot60 > a > .text.t100`
- `.opinion.hot50.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(16) > .life40.gridtriple.hot60 > a > .text.t100`
- `.opinion.life40.gridspotlightside:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .opinion.life40.gridspotlightside:nth-child(3) > a > .text.t100`
- `.no-image.gridspotlightside.hot60 > a > .text.t100`
- `.hot50.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.variant-a.hot50.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot40.life40.gridtriple:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot30.gridtriple.life20 > a > .text.t100`
- `.hot40.life40.gridtriple:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(21) > .hot30.gridtriple.life20 > a > .text.t100`
- `.griddouble.no-image.hot40:nth-child(1) > a > .text.t100`
- `.tip > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(25) > .gridtriple.hot60.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .hot30.gridtriple.life20 > a > .text.t100`
- `.life60.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .hot50.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .life40.gridspotlightside.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .opinion.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.hot30.life40.gridspotlightside > a > .text.t100`
- `.hot30.opinion.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.hot30.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.is-aske-skin.hot50.no-image > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot70.opinion.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.opinion.hot40.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.life40.gridspotlightside.hot60:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .life40.gridspotlightside.hot60:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .gridtriple.hot60.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot40.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .life40.gridtriple.hot60 > a > .text.t100`
- `.breakingvarsel.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .life40.gridspotlightside.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot50.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .is-aske-skin.no-image.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(41) > .hot70.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .is-dark-skin.is-skin.hot40 > a > .text.t100`
- `.variant-a.grade.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .hot40.life40.gridtriple > a > .text.t100`
- `.no-image.hot40.gridtriple:nth-child(2) > a > .text.t100`
- `.no-image.hot40.gridtriple:nth-child(3) > a > .text.t100`
- `.is-dark-skin.is-skin.life40 > a > .text.t100`
- `.opinion.hot50.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .is-dark-skin.is-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .life40.gridspotlightside.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .life40.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot50.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.is-dark-skin.hot50.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .opinion.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlightside.hot60.life20 > a > .text.t100`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.Layout`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.top`
- `.Layout`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 1

#### Affected Elements:

- `.breaking-stripe`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
