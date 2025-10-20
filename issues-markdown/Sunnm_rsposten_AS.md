# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-10-20T00:28:03.601Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 8

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

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2
- **Count:** 1

#### Affected Elements:

- `#dakapo_postopbar`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.gridfullsize.hot60.life20 > a > .text.t100 > h3`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 98

#### Affected Elements:

- `.gridfullsize.hot60.life20 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .life40.hot60.gridspotlightside > a > .text.t100`
- `.hot30.is-dark-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.hot70.life60.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .gridtriple.hot60.life20 > a > .text.t100`
- `.hot70.is-dark-skin.life60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .opinion.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.breaking > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.is-prefix-red-skin.life60.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(5) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(5) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(5) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.life60.gridtriple.hot60 > a > .text.t100`
- `.hot30.life60.gridtriple > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.hot80 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .hot70.life40.gridspotlightside > a > .text.t100`
- `.no-image.is-aske-skin.hot50 > a > .text.t100`
- `.hot70.opinion.life40 > a > .text.t100`
- `.hot70.gridspotlight.card-size-large > a > .text.t100`
- `.hot10 > a > .text.t100`
- `.is-dark-skin-prefix-red > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .gridtriple.life40.hot60:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .gridtriple.life40.hot60:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.opinion.hot40.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(16) > .hot40.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.hot40.gridtriple.life40:nth-child(1) > a > .text.t100`
- `.hot40.gridtriple.life40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .is-dark-skin.is-skin.hot40 > a > .text.t100`
- `.variant-b > a > .text.t100`
- `.hot50.life40.gridspotlightside > a > .text.t100`
- `.breakingvarsel.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(21) > .is-dark-skin.is-skin.gridtriple > a > .text.t100`
- `.no-image.hot40.gridspotlightside:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot70.no-image.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .no-image.hot40.gridspotlightside:nth-child(4) > a > .text.t100`
- `.griddouble.no-image.hot40:nth-child(1) > a > .text.t100`
- `.griddouble.no-image.hot40:nth-child(2) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(25) > .gridtriple.life40.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .hot30.gridtriple.life20 > a > .text.t100`
- `.opinion.hot50.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .gridtriple.life40.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.hot50.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .opinion.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .hot50.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot30.opinion.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .gridtriple.life40.hot60:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .gridtriple.life40.hot60:nth-child(3) > a > .text.t100`
- `.life60.hot50.gridspotlight > a > .text.t100`
- `.is-dark-skin.hot50.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .is-dark-skin.is-skin.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(34) > .hot50.gridtriple.life40 > a > .text.t100`
- `.breakingvarsel.hot40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.hot30.no-image.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .gridtriple.life40.hot60 > a > .text.t100`
- `.is-prefix-red-skin.is-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .life60.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .life40.hot60.gridspotlightside:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(41) > .hot50.gridtriple.life40 > a > .text.t100`
- `.life40.hot60.gridspotlightside:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .opinion.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .gridtriple.life40.hot60:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .gridtriple.life40.hot60:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .life60.gridspotlight.card-size-large > a > .text.t100`
- `.hot40.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot30.opinion.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot40.gridtriple.life20 > a > .text.t100`

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
