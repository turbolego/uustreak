# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-09-06T02:23:45.965Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 7

## Violation Details

### <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements

- **Impact:** serious
- **Description:** Ensure <dl> elements are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/definition-list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.3
- **Count:** 2

#### Affected Elements:

- `.Credits:nth-child(2) > dl:nth-child(3)`
- `.Credits:nth-child(2) > dl:nth-child(4)`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 101

#### Affected Elements:

- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .breakingvarsel.gridspotlight.hot60 > a > .text.t100`
- `.breakingvarsel.no-image.is-aske-skin > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot30.gridspotlightside.payed > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-aske-skin.is-skin.gridspotlightside:nth-child(4) > a > .text.t100`
- `.feature > a > .text.t100`
- `.gridfullsize-bundle > a > .text.t100`
- `.breaking.small-items.griddouble > a > .text.t100`
- `.small-items.griddouble.no-image:nth-child(2) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot70.life40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot50.gridtriple.payed > a > .text.t100`
- `.life60.hot70.is-dark-skin:nth-child(2) > a > .text.t100`
- `.life60.hot70.is-dark-skin:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .breakingvarsel.gridspotlight.hot60 > a > .text.t100`
- `.is-dark-skin-prefix-red > a > .text.t100`
- `.variant-a.gridspotlightside.hot40 > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.breaking.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.is-primary-skin.hot60.is-skin > a > .text.t100`
- `a[href$="spill"] > .text.t100`
- `.hot50.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.hot70.breakingvarsel.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.opinion.hot50.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .breakingvarsel.is-aske-skin.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .life40.gridtriple.hot40:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .life40.gridtriple.hot40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot60.life40.gridtriple > a > .text.t100`
- `.hot70.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .is-aske-skin.hot60.life40 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(18) > .is-primary-skin.is-skin.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.is-prefix-red-skin.hot60.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(24) > .life40.gridtriple.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `a[href$="15-fikk-bot"] > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot60.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot50.gridtriple.payed > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(29) > .gridtriple.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .is-dark-skin.is-skin.gridspotlightside > a > .text.t100`
- `.hot50.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .no-image.hot50.gridspotlightside > a > .text.t100`
- `.gridspotlightside.hot40.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .breakingvarsel.is-aske-skin.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .no-image.hot50.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(33) > .hot50.gridtriple.life20 > a > .text.t100`
- `.is-prefix-red-skin.breakingvarsel.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(33) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(34) > .hot80.gridspotlight.card-size-large > a > .text.t100`
- `.variant-c > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(34) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(37) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .opinion.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .hot60.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .is-dark-skin.is-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .hot80.gridspotlight.card-size-large > a > .text.t100`
- `.hot50.gridspotlightside.payed > a > .text.t100`
- `.is-dark-skin.hot60.life40 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(41) > .opinion.hot30.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .gridspotlight.hot60.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
- `.variant-a.opinion.hot30 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot30.gridtriple.life20 > a > .text.t100`
- `.opinion.hot60.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot50.gridtriple.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlightside.hot40.payed:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlightside.hot40.payed:nth-child(4) > a > .text.t100`
- `.hot80.is-dark-skin.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .gridtriple.hot40.payed:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(49) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(49) > .is-dark-skin.is-skin.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(49) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.card-size-medium.griddouble.hot40:nth-child(1) > a > .text.t100`
- `.card-size-medium.griddouble.hot40:nth-child(2) > a > .text.t100`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.Layout`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.top`
- `.Layout`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.breaking-stripe`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
