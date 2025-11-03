# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-11-03T00:28:09.188Z
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

- `.breakingvarsel.gridfullsize.hot40 > a > .text.t100`
- `.breakingvarsel.gridspotlight.card-size-large > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .variant-b.hot40.life40 > a > .text.t100`
- `.is-primary-skin.is-skin.hot60 > a > .text.t100`
- `.is-primary-skin.is-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot60.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.breaking > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .hot50.gridtriple.life20 > a > .text.t100`
- `.is-dark-skin.hot70.life60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .no-image.gridtriple.hot60 > a > .text.t100`
- `.hot80.life60.gridspotlight > a > .text.t100`
- `.variant-a > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .is-aske-skin.is-skin.no-image > a > .text.t100`
- `.life60.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(5) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(5) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.is-prefix-red-skin.life60.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(7) > .hot50.gridtriple.life40 > a > .text.t100`
- `.hot10 > a > .text.t100`
- `.is-dark-skin-prefix-red > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot50.no-image.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot50.life40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .gridtriple.life40.hot60:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .gridtriple.life40.hot60:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .gridtriple.life40.hot60:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.hot30.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .hot30.no-image.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(16) > .hot30.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .opinion.life40.hot60 > a > .text.t100`
- `.feature > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .is-aske-skin.hot30.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .gridtriple.life40.hot60:nth-child(1) > a > .text.t100`
- `.is-aske-skin.is-skin.no-image:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .is-aske-skin.hot30.is-skin > a > .text.t100`
- `.TwoTeasers.grid:nth-child(20) > .griddouble.is-aske-skin.hot30 > a > .text.t100`
- `.griddouble.breakingvarsel.hot50 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(21) > .hot40.gridtriple.life20 > a > .text.t100`
- `.TwoTeasers.grid:nth-child(22) > .griddouble.is-aske-skin.hot30 > a > .text.t100`
- `a[href$="var-truende"] > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .hot40.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .hot40.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.opinion.hot50.gridtriple > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(25) > .hot40.gridtriple.life40 > a > .text.t100`
- `.variant-b.hot70.gridspotlight > a > .text.t100`
- `.no-image.hot40.gridspotlightside > a > .text.t100`
- `.hot30.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .opinion.life40.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .hot60.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .hot60.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .no-image.hot60.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .hot50.gridtriple.life40 > a > .text.t100`
- `.hot50.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.hot50.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.is-prefix-red-skin.hot50.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .opinion.life40.hot60 > a > .text.t100`
- `.is-dark-skin.is-skin.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .hot60.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .no-image.hot60.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(34) > .hot40.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .gridtriple.hot60.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .hot40.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.hot40.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .hot40.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.is-prefix-red-skin.breakingvarsel.hot30 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .gridtriple.hot60.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .life40.hot60.gridspotlightside:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .life40.hot60.gridspotlightside:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(41) > .hot70.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .opinion.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .gridtriple.life40.hot60:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .variant-b.hot40.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .gridtriple.hot60.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot70.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .opinion.gridtriple.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot60.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot60.gridspotlightside.life20:nth-child(3) > a > .text.t100`

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
