# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-04-26T01:10:58.575Z
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

- `.gridfullsize-bundle > a > .text.t100 > h3`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 101

#### Affected Elements:

- `.gridfullsize-bundle > a > .text.t100`
- `.small-items.griddouble.is-aske-skin:nth-child(1) > a > .text.t100`
- `.small-items.griddouble.is-aske-skin:nth-child(2) > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.is-dark-skin-prefix-red > a > .text.t100`
- `.is-primary-skin.is-skin.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-primary-skin.gridspotlight.card-size-large > a > .text.t100`
- `.breakingvarsel > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .life60.hot30.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot60.life40.gridspotlightside:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot70.is-dark-skin.life60 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .life40.gridtriple.hot40 > a > .text.t100`
- `.life60.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .life60.hot30.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot50.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .life60.hot60.gridspotlightside > a > .text.t100`
- `.life60.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .hot80.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .gridtriple.hot40.life20 > a > .text.t100`
- `.hot30.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .is-dark-skin.life60.is-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(17) > .breaking.hot30.gridtriple > a > .text.t100`
- `.hot70.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .gridtriple.hot40.life20 > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.hot50.no-image.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(22) > .opinion.hot30.gridtriple > a > .text.t100`
- `.griddouble.no-image.hot30:nth-child(1) > a > .text.t100`
- `.griddouble.no-image.hot30:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .hot80.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .hot60.gridtriple.life20 > a > .text.t100`
- `a[href$="varslar-snoe"] > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(26) > .life40.gridtriple.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .is-aske-skin.is-skin.gridspotlightside:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .life40.gridspotlightside.hot40:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .life40.gridspotlightside.hot40:nth-child(4) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot50.gridtriple.life20 > a > .text.t100`
- `.opinion.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot60.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(34) > .life40.gridtriple.hot40:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(34) > .life40.gridtriple.hot40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(34) > .gridtriple.hot40.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(35) > .breaking.hot30.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .gridspotlightside.hot40.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .hot60.gridtriple.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(40) > .hot30.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.is-dark-skin.no-image.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(42) > .hot30.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .life40.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .opinion.hot30.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .is-primary-skin.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .is-aske-skin.is-skin.gridspotlightside:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .is-aske-skin.is-skin.gridspotlightside:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .gridtriple.hot40.life20 > a > .text.t100`
- `.hot60.life40.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .gridspotlightside.hot40.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot30.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .no-image.gridspotlightside.hot40 > a > .text.t100`

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
