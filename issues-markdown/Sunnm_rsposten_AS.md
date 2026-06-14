# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-06-14T01:39:01.947Z
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

- `.gridfullsize-bundle > a > .text.t100 > h3`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 101

#### Affected Elements:

- `.gridfullsize-bundle > a > .text.t100`
- `.hot20 > a > .text.t100`
- `.small-items.griddouble.is-dark-skin > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.life40.gridspotlightside > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-prefix-red-skin.life40.is-skin > a > .text.t100`
- `.variant-a.gridspotlight.card-size-large > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot40.life20 > a > .text.t100`
- `.hot80 > a > .text.t100`
- `a[href$="spill"] > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .is-dark-skin.no-image.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .life60.hot70.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.life60.is-dark-skin.hot70 > a > .text.t100`
- `.hot50.opinion.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot70.life40.gridtriple > a > .text.t100`
- `.hot90 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .breakingvarsel.gridtriple.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .is-prefix-red-skin.hot70.life40 > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.is-dark-skin.hot70.no-image > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot50.life40.gridspotlightside > a > .text.t100`
- `.variant-b.life40.gridtriple > a > .text.t100`
- `.variant-a.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .opinion.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .no-image.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .hot70.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(17) > .gridtriple.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .hot70.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .breakingvarsel.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .is-prefix-red-skin.hot70.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.is-prefix-red-skin.no-image.life40 > a > .text.t100`
- `.life40.gridspotlightside.hot40:nth-child(4) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(23) > .hot60.gridtriple.life20 > a > .text.t100`
- `.griddouble.no-image.life40 > a > .text.t100`
- `.TwoTeasers.grid:nth-child(24) > .griddouble.is-dark-skin.no-image > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.is-dark-skin.is-skin.gridtriple > a > .text.t100`
- `.breakingvarsel.hot50.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .gridtriple.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .is-aske-skin.no-image.is-skin > a > .text.t100`
- `.breakingvarsel.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .opinion.life40.gridtriple > a > .text.t100`
- `.gridspotlightside.hot40.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .opinion.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .is-aske-skin.no-image.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .gridspotlightside.hot40.life20:nth-child(4) > a > .text.t100`
- `.variant-b.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.hot70.gridspotlightside.life20 > a > .text.t100`
- `.hot60.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .opinion.hot30.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.is-dark-skin.hot70.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .is-dark-skin.hot60.is-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(40) > .opinion.hot30.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(41) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.is-aske-skin.hot60.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(41) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.is-aske-skin.no-image.hot60 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .hot30.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .hot30.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .is-aske-skin.no-image.is-skin > a > .text.t100`
- `.hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .is-dark-skin.hot60.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .is-aske-skin.no-image.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.is-aske-skin.is-skin.gridtriple:nth-child(1) > a > .text.t100`
- `.hot70.is-aske-skin.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.gridfullsize.hot60.life40 > a > .text.t100`
- `.griddouble.hot50.is-aske-skin > a > .text.t100`
- `.griddouble.is-aske-skin.no-image:nth-child(2) > a > .text.t100`
- `.gridfullsize.hot40.life20 > a > .text.t100`

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
