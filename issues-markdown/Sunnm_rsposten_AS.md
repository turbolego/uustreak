# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-11-29T00:27:24.905Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 8

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

- `.gridfullsize.hot40.life20 > a > .text.t100 > h3`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 98

#### Affected Elements:

- `.gridfullsize.hot40.life20 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .life40.hot40.gridspotlightside > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot40.gridspotlightside.payed:nth-child(3) > a > .text.t100`
- `.hot80.life60.gridspotlightside > a > .text.t100`
- `.breakingvarsel > a > .text.t100`
- `.feature.hot40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.is-dark-skin.hot70.life60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .hot30.gridtriple.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.breaking > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.life60.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(5) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(5) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.variant-a.life40.hot60 > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(7) > .gridtriple.hot40.payed > a > .text.t100`
- `.hot70.gridtriple.life20 > a > .text.t100`
- `.is-aske-skin.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .hot40.gridspotlightside.payed:nth-child(1) > a > .text.t100`
- `.is-dark-skin.hot50.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .life40.hot40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .hot60.gridtriple.payed:nth-child(1) > a > .text.t100`
- `.is-primary-skin.hot70.life40 > a > .text.t100`
- `.no-image.hot60.gridtriple > a > .text.t100`
- `.is-primary-skin.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .is-aske-skin.life40.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .hot60.gridspotlightside.payed:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(16) > .hot50.gridtriple.life20 > a > .text.t100`
- `.hot50.gridspotlightside.payed:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot50.gridspotlightside.payed:nth-child(3) > a > .text.t100`
- `.opinion.hot50.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .gridtriple.hot40.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .hot70.life60.gridtriple > a > .text.t100`
- `.opinion.gridspotlight.card-size-large > a > .text.t100`
- `.opinion.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.hot70.no-image.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(21) > .hot60.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .hot40.gridspotlightside.payed:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .gridtriple.hot40.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.no-image.life40.gridtriple > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(25) > .life40.hot60.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .life40.hot60.gridspotlightside:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .life40.hot60.gridspotlightside:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .gridtriple.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.hot70.life40.gridspotlightside > a > .text.t100`
- `.hot70.life60.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .life40.hot40.gridspotlightside > a > .text.t100`
- `.hot80.is-dark-skin.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .is-dark-skin.hot50.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .opinion.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .gridtriple.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .gridtriple.hot40.payed > a > .text.t100`
- `.opinion.hot40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(41) > .gridtriple.hot40.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .gridtriple.hot40.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .life40.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .opinion.hot30.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.hot30.no-image.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .is-dark-skin.life40.is-skin > a > .text.t100`
- `.variant-a.hot80.is-dark-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `.griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.hot50.is-aske-skin.life40 > a > .text.t100`
- `.hot30.life40.gridtriple > a > .text.t100`
- `.is-aske-skin.is-skin.gridtriple:nth-child(3) > a > .text.t100`

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
