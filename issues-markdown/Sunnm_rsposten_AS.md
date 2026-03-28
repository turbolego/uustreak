# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-03-28T00:36:27.484Z
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
- **Count:** 102

#### Affected Elements:

- `.gridfullsize.hot40.life20 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot70.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot60.life20:nth-child(1) > a > .text.t100`
- `.gridfullsize-bundle > a > .text.t100`
- `.small-items.griddouble.is-aske-skin > a > .text.t100`
- `.small-items.griddouble.life40 > a > .text.t100`
- `.is-dark-skin-prefix-red.breakingvarsel.hot40 > a > .text.t100`
- `.breakingvarsel.no-image.is-aske-skin > a > .text.t100`
- `.life60.hot70.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot60.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot60.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.is-prefix-red-skin.breakingvarsel.hot70 > a > .text.t100`
- `.life60.is-dark-skin.hot70 > a > .text.t100`
- `.is-aske-skin.gridspotlight.card-size-large > a > .text.t100`
- `.hot20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .life60.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .life60.gridtriple.hot60 > a > .text.t100`
- `.breaking.breakingvarsel.gridtriple > a > .text.t100`
- `.hot50.gridtriple.life20 > a > .text.t100`
- `.is-dark-skin-prefix-red.life60.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.life60.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .life40.gridspotlightside.hot60 > a > .text.t100`
- `.variant-a > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .gridtriple.hot60.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .gridtriple.hot60.life20:nth-child(2) > a > .text.t100`
- `.variant-b > a > .text.t100`
- `.is-prefix-red-skin.gridspotlight.card-size-large > a > .text.t100`
- `.is-dark-skin.hot50.is-skin > a > .text.t100`
- `.is-dark-skin-prefix-red.is-skin.life40 > a > .text.t100`
- `.is-prefix-red-skin.is-skin.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .life40.gridspotlightside.hot60:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .life40.gridspotlightside.hot60:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .opinion.hot40.life40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .opinion.hot40.life40:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .hot70.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .is-dark-skin.no-image.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(22) > .hot30.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .gridspotlightside.hot60.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.hot50.life40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .gridtriple.hot60.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .gridtriple.hot60.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(26) > .gridtriple.hot60.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .life40.gridspotlightside.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .is-dark-skin.no-image.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .hot40.life40.gridspotlightside > a > .text.t100`
- `.is-dark-skin-prefix-red.griddouble.hot50 > a > .text.t100`
- `.griddouble.no-image.hot30 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(31) > .opinion.hot40.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(31) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(31) > .hot40.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(34) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(34) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(34) > .is-aske-skin.hot40.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(35) > .hot40.life40.gridtriple > a > .text.t100`
- `.hot50.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .hot40.gridtriple.life20 > a > .text.t100`
- `.breaking.hot40.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .is-aske-skin.hot40.is-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(40) > .hot40.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(41) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(41) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(41) > .opinion.hot40.life40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(42) > .opinion.hot40.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .is-dark-skin.no-image.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .hot30.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .opinion.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .hot30.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.is-aske-skin.hot40.is-skin:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .life40.gridspotlightside.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.opinion.hot30.life40 > a > .text.t100`
- `.hot70.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .gridtriple.hot60.life20 > a > .text.t100`
- `.opinion.hot30.gridtriple > a > .text.t100`
- `.card-size-medium.griddouble.hot30:nth-child(1) > a > .text.t100`
- `.card-size-medium.griddouble.hot30:nth-child(2) > a > .text.t100`

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
