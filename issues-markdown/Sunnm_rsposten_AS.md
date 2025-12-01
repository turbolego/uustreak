# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-12-01T00:34:22.692Z
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

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `#dakapo_postopbar`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.life60.hot50.gridspotlight > a > .text.t100 > h3`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 100

#### Affected Elements:

- `.life60.hot50.gridspotlight > a > .text.t100`
- `.variant-c > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.life40.gridspotlightside:nth-child(3) > a > .text.t100`
- `.is-prefix-red-skin.hot30.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-primary-skin.gridspotlight.card-size-large > a > .text.t100`
- `.is-primary-skin.is-skin.hot60:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .hot60.gridtriple.life20 > a > .text.t100`
- `.hot70.is-dark-skin.life60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .hot30.gridtriple.life20 > a > .text.t100`
- `.gridfullsize-bundle > a > .text.t100`
- `.small-items.is-prefix-red-skin.griddouble:nth-child(1) > a > .text.t100`
- `.small-items.is-prefix-red-skin.griddouble:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.hot80.life40.gridspotlightside > a > .text.t100`
- `.is-dark-skin.no-image.hot50 > a > .text.t100`
- `.hot30.life60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(5) > .is-primary-skin.gridspotlight.card-size-large > a > .text.t100`
- `.variant-a > a > .text.t100`
- `.is-primary-skin.hot50.is-skin > a > .text.t100`
- `.hot70.is-primary-skin.is-skin > a > .text.t100`
- `.is-prefix-red-skin.life60.is-skin > a > .text.t100`
- `.feature.life60.hot50 > a > .text.t100`
- `.is-aske-skin.gridspotlight.card-size-large > a > .text.t100`
- `.hot20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .hot30.gridtriple.life20 > a > .text.t100`
- `.variant-b.hot60.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .hot50.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .is-aske-skin.no-image.is-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(16) > .life40.gridtriple.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .life40.hot40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .life60.gridspotlight.card-size-large > a > .text.t100`
- `.hot80.feature.life60 > a > .text.t100`
- `.opinion.hot30.gridtriple:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .hot60.gridtriple.life20 > a > .text.t100`
- `.opinion.hot30.gridtriple:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .hot40.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .is-dark-skin.no-image.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(21) > .hot50.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .no-image.hot40.gridspotlightside:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.life40.hot40.gridspotlightside:nth-child(3) > a > .text.t100`
- `.no-image.life40.hot40 > a > .text.t100`
- `.griddouble.no-image.hot50:nth-child(1) > a > .text.t100`
- `.griddouble.is-aske-skin.no-image > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(25) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.hot80.life60.gridtriple > a > .text.t100`
- `.opinion.gridtriple.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.variant-b.life40.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.is-dark-skin.is-skin.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .opinion.hot50.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot60.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .hot70.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .hot40.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.is-aske-skin.hot30.no-image > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(34) > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .hot30.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .is-dark-skin.hot50.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .is-aske-skin.no-image.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot60.gridtriple.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .life40.gridtriple.hot40 > a > .text.t100`
- `.griddouble.no-image.hot60 > a > .text.t100`
- `.griddouble.no-image.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(41) > .gridtriple.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .hot40.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .life40.gridtriple.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.feature.gridspotlight.card-size-large > a > .text.t100`
- `.hot70.is-aske-skin.no-image > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.hot70.life60.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .opinion.hot50.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`

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
