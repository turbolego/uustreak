# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-10-27T00:28:40.313Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 6

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

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 99

#### Affected Elements:

- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .breakingvarsel.is-dark-skin-prefix-red.hot40 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.gridfullsize-bundle > a > .text.t100`
- `.small-items.griddouble.hot50 > a > .text.t100`
- `.small-items.griddouble.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot40.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot50.no-image.is-aske-skin > a > .text.t100`
- `.TwoTeasers.grid:nth-child(2) > .griddouble.hot50.no-image:nth-child(1) > a > .text.t100`
- `.griddouble.hot50.no-image:nth-child(2) > a > .text.t100`
- `.hot70.life60.is-dark-skin > a > .text.t100`
- `.hot50.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(4) > .life40.gridtriple.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot40.is-aske-skin.is-skin:nth-child(2) > a > .text.t100`
- `.is-prefix-red-skin.life60.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .no-image.hot40.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(6) > .life40.hot40.gridtriple > a > .text.t100`
- `.life60.hot30.gridspotlightside > a > .text.t100`
- `.is-prefix-red-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .opinion.life40.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .no-image.hot40.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(8) > .life40.gridtriple.hot60:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(8) > .life40.gridtriple.hot60:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(8) > .life40.gridtriple.hot60:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.hot30.life40.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot30.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .breaking.no-image.hot30 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .life40.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .gridtriple.hot60.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot30.gridtriple.life20 > a > .text.t100`
- `.hot30.is-aske-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot50.no-image.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot30.is-aske-skin.is-skin > a > .text.t100`
- `.hot70.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .hot40.is-aske-skin.is-skin:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .hot40.is-aske-skin.is-skin:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .no-image.hot30.is-aske-skin > a > .text.t100`
- `.no-image.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .life40.gridtriple.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(21) > .opinion.life40.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot60.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .is-dark-skin-prefix-red.hot60.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .no-image.hot30.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .hot30.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.breakingvarsel.is-dark-skin-prefix-red.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.is-dark-skin.gridtriple.hot60 > a > .text.t100`
- `.hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .hot30.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .gridtriple.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot30.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .hot40.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .breakingvarsel.is-dark-skin-prefix-red.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .gridtriple.hot40.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .life40.gridtriple.hot40 > a > .text.t100`
- `.hot70.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .breaking.no-image.hot30 > a > .text.t100`
- `.hot50.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(34) > .hot40.is-aske-skin.gridtriple > a > .text.t100`
- `.hot60.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.no-image.is-aske-skin.hot60 > a > .text.t100`
- `.is-dark-skin.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .gridtriple.hot60.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .life40.gridtriple.hot40 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .opinion.life40.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .breaking.no-image.hot30 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(41) > .life40.gridtriple.hot60 > a > .text.t100`
- `.griddouble.no-image.hot40 > a > .text.t100`
- `.griddouble.no-image.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .life40.gridtriple.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .gridtriple.hot60.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .hot30.life40.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .life40.is-aske-skin.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .no-image.hot40.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.opinion.hot30.life40 > a > .text.t100`
- `.hot30.life40.gridspotlightside:nth-child(3) > a > .text.t100`

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
