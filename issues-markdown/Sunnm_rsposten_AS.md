# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-11-16T00:53:56.931Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 7

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

- `a[href$="brann"] > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot40.is-aske-skin.gridspotlightside > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .hot80.is-dark-skin.life40 > a > .text.t100`
- `.hot80.gridtriple.payed:nth-child(2) > a > .text.t100`
- `.hot70.life60.is-dark-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .life60.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.hot80.no-image.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .hot80.is-dark-skin.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(5) > .hot60.gridtriple.life20 > a > .text.t100`
- `.is-prefix-red-skin.life60.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(5) > .hot50.gridtriple.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(6) > .life40.hot60.gridtriple > a > .text.t100`
- `.breaking.no-image.hot40 > a > .text.t100`
- `.hot70.life60.gridspotlight > a > .text.t100`
- `.life60.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .is-aske-skin.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `a[href$="leteaksjon"] > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .is-dark-skin.no-image.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(10) > .is-prefix-red-skin.life40.hot60 > a > .text.t100`
- `.breaking.life40.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(10) > .hot40.gridtriple.payed > a > .text.t100`
- `.life40.hot60.gridspotlightside:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.no-image.life40.is-aske-skin > a > .text.t100`
- `.opinion.hot50.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.hot20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .no-image.is-aske-skin.hot60:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .no-image.is-aske-skin.hot60:nth-child(4) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(16) > .is-prefix-red-skin.life40.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(17) > .hot40.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(17) > .hot30.gridtriple.payed > a > .text.t100`
- `.opinion.hot30.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .no-image.is-aske-skin.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.hot80.life40.is-aske-skin > a > .text.t100`
- `a[href$="stenger-e136"] > .text.t100`
- `.is-dark-skin.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .no-image.is-aske-skin.hot60 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(21) > .is-aske-skin.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(22) > .hot30.is-aske-skin.gridtriple > a > .text.t100`
- `.is-dark-skin.hot60.gridtriple > a > .text.t100`
- `a[href$="stenger-e39"] > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.is-dark-skin.hot50.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .no-image.is-aske-skin.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .hot50.is-aske-skin.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(25) > .is-aske-skin.hot60.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.hot50.no-image.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .hot40.is-aske-skin.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot40.gridtriple.life20 > a > .text.t100`
- `.hot50.gridtriple.payed > a > .text.t100`
- `.opinion.hot50.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .hot30.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .is-aske-skin.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .hot40.gridtriple.payed > a > .text.t100`
- `.TwoTeasers.grid:nth-child(30) > .griddouble.no-image.hot40:nth-child(1) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(30) > .griddouble.no-image.hot40:nth-child(2) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(33) > .griddouble.no-image.hot40:nth-child(1) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(33) > .griddouble.no-image.hot40:nth-child(2) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(34) > .life40.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .life40.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .hot60.gridtriple.payed:nth-child(2) > a > .text.t100`
- `.life40.hot40.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .hot50.no-image.gridspotlightside > a > .text.t100`
- `.grade.opinion.gridspotlight > a > .text.t100`
- `.hot50.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .life40.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .hot30.gridtriple.payed:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .hot30.gridtriple.payed:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .hot40.gridtriple.payed > a > .text.t100`
- `.hot30.life40.is-aske-skin > a > .text.t100`
- `.variant-b > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .hot50.is-aske-skin.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .no-image.hot40.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .hot50.gridtriple.life20 > a > .text.t100`
- `.hot40.is-aske-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .hot40.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.griddouble.hot30.no-image > a > .text.t100`
- `.griddouble.is-dark-skin.no-image > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot50.is-aske-skin.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot30.gridspotlightside.life20 > a > .text.t100`

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

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

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
