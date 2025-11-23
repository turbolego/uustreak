# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-11-23T00:31:12.497Z
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
- **Count:** 100

#### Affected Elements:

- `.gridfullsize-bundle > a > .text.t100`
- `.small-items.griddouble.breakingvarsel > a > .text.t100`
- `.small-items.griddouble.hot60 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.breaking.hot30.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot40.life20:nth-child(4) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .hot60.gridtriple.life40 > a > .text.t100`
- `.hot70 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .hot50.gridtriple.life20 > a > .text.t100`
- `.is-aske-skin.is-skin.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.no-image.is-aske-skin.hot50 > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.hot80.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(5) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(6) > .hot60.gridtriple.life40 > a > .text.t100`
- `.life60.hot30.gridtriple > a > .text.t100`
- `.opinion.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(7) > .gridtriple.life40.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .is-dark-skin.life60.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.breaking.hot30.no-image > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.hot80.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .hot60.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .hot30.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .opinion.gridspotlight.card-size-large > a > .text.t100`
- `.breakingvarsel.hot60.life40 > a > .text.t100`
- `.hot20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(16) > .hot50.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.opinion.hot30.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .gridtriple.hot40.life20 > a > .text.t100`
- `.hot30.no-image.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .hot60.gridtriple.life20 > a > .text.t100`
- `.opinion.hot50.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .hot30.life40.gridspotlightside > a > .text.t100`
- `.hot50.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .no-image.gridspotlightside.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(21) > .gridtriple.hot40.life20 > a > .text.t100`
- `.card-size-mega.is-dark-skin.no-image > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .gridtriple.hot40.life20 > a > .text.t100`
- `.opinion.hot50.gridtriple > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(25) > .gridtriple.life40.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.breakingvarsel.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot60.life40.gridspotlightside:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot60.life40.gridspotlightside:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .hot60.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .hot50.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.card-size-mega.gridfullsize.hot60 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(34) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .gridtriple.life40.hot40 > a > .text.t100`
- `.gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .is-aske-skin.is-skin.gridspotlightside:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .gridtriple.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(41) > .gridtriple.life40.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .hot60.gridtriple.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .opinion.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .life40.gridspotlightside.hot40:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .opinion.life40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot60.gridtriple.life40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot60.gridtriple.life40:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .hot50.gridspotlightside.life20 > a > .text.t100`

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
