# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-02-26T00:53:33.671Z
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

- `.breakingvarsel.is-dark-skin.gridspotlight > a > .text.t100 > h3`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 100

#### Affected Elements:

- `.breakingvarsel.is-dark-skin.gridspotlight > a > .text.t100`
- `.breakingvarsel.hot60.life40 > a > .text.t100`
- `.is-prefix-red-skin.hot50.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.gridfullsize-bundle > a > .text.t100`
- `.small-items.griddouble.breaking > a > .text.t100`
- `.small-items.griddouble.hot40:nth-child(2) > a > .text.t100`
- `.is-primary-skin.is-skin.hot60 > a > .text.t100`
- `.is-dark-skin.is-skin.hot60 > a > .text.t100`
- `.hot70.gridtriple.life20 > a > .text.t100`
- `.hot70.life60.is-dark-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot60.life40.gridspotlightside:nth-child(2) > a > .text.t100`
- `.hot60.life40.gridspotlightside:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.is-primary-skin.hot50.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot60.gridtriple.life40:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot60.gridtriple.life40:nth-child(2) > a > .text.t100`
- `.life60.hot30.gridtriple > a > .text.t100`
- `.opinion.hot50.gridspotlight > a > .text.t100`
- `.is-restaurantguiden-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.breaking.no-image.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .hot50.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot80.is-prefix-red-skin.is-skin > a > .text.t100`
- `.hot50.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .is-aske-skin.hot50.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.breaking.hot30.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .opinion.hot40.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot40.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot40.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(22) > .hot30.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(22) > .hot30.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(22) > .hot30.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(23) > .opinion.hot30.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .hot30.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .is-aske-skin.hot30.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .is-dark-skin.no-image.is-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(27) > .hot60.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(28) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(28) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(28) > .hot30.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .hot60.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .is-aske-skin.hot50.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.opinion.hot50.gridspotlightside > a > .text.t100`
- `.is-dark-skin-prefix-red.no-image.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot40.gridtriple.life40:nth-child(1) > a > .text.t100`
- `.hot30.gridtriple.life40 > a > .text.t100`
- `.hot40.gridtriple.life40:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .is-dark-skin.no-image.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(36) > .opinion.hot30.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .hot30.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .hot40.life40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .hot60.gridtriple.life40:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .hot60.gridtriple.life40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .hot60.gridtriple.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(42) > .hot40.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .opinion.hot40.life40 > a > .text.t100`
- `.no-image.is-aske-skin.hot30 > a > .text.t100`
- `.hot30.gridspotlightside.life20:nth-child(4) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(44) > .opinion.hot30.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot30.life40.gridspotlightside:nth-child(1) > a > .text.t100`
- `.is-aske-skin.gridspotlight.card-size-large > a > .text.t100`
- `.opinion.hot30.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot30.gridtriple.life20 > a > .text.t100`
- `.hot50.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot50.gridtriple.life20 > a > .text.t100`
- `.is-dark-skin-prefix-red.hot50.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .hot50.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .hot40.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .hot40.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .hot40.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .hot40.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .hot60.gridtriple.life40 > a > .text.t100`

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
