# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-02-16T03:40:49.464Z
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

- `.breakingvarsel.gridfullsize.is-aske-skin > a > .text.t100 > h3`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 99

#### Affected Elements:

- `.breakingvarsel.gridfullsize.is-aske-skin > a > .text.t100`
- `.is-dark-skin-prefix-red.breakingvarsel.gridspotlight > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.breakingvarsel.hot50.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.life40.hot40 > a > .text.t100`
- `.life60.hot50.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-primary-skin.hot60.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot50.gridtriple.life40 > a > .text.t100`
- `.life60.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .life60.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .breaking.gridspotlightside.hot40 > a > .text.t100`
- `.life60.hot30.gridspotlightside > a > .text.t100`
- `.is-primary-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot60.gridtriple.life40 > a > .text.t100`
- `.is-dark-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot50.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .is-primary-skin.is-skin.gridspotlightside > a > .text.t100`
- `.is-dark-skin-prefix-red.hot60.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .opinion.gridspotlightside.life40 > a > .text.t100`
- `.hot70.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot30.gridtriple.life40 > a > .text.t100`
- `.life60.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .gridtriple.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot50.no-image.is-aske-skin > a > .text.t100`
- `.hot70.no-image.is-aske-skin > a > .text.t100`
- `.is-aske-skin.is-skin.gridspotlightside:nth-child(4) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(18) > .is-primary-skin.is-skin.gridtriple > a > .text.t100`
- `.is-dark-skin-prefix-red.griddouble.no-image > a > .text.t100`
- `.TwoTeasers.grid:nth-child(19) > .griddouble.no-image.hot30 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .is-aske-skin.hot30.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot30.gridtriple.life20 > a > .text.t100`
- `.is-primary-skin.breakingvarsel.hot60 > a > .text.t100`
- `.hot30.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .hot30.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.no-image.hot30.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(23) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .gridspotlightside.life40.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .hot60.gridspotlightside.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .is-dark-skin-prefix-red.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .is-aske-skin.is-skin.gridtriple:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .is-aske-skin.is-skin.gridtriple:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(27) > .gridtriple.life40.hot40 > a > .text.t100`
- `.gridfullsize.hot30.life40 > a > .text.t100`
- `.TwoTeasers.grid:nth-child(30) > .griddouble.no-image.is-aske-skin > a > .text.t100`
- `.griddouble.no-image.hot60 > a > .text.t100`
- `.TwoTeasers.grid:nth-child(32) > .griddouble.no-image.is-aske-skin > a > .text.t100`
- `.TwoTeasers.grid:nth-child(32) > .griddouble.no-image.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(33) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(33) > .hot30.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(33) > .gridtriple.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .opinion.gridspotlightside.hot40 > a > .text.t100`
- `.opinion.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .hot70.gridspotlightside.life40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(37) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .gridspotlight.is-aske-skin.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .gridspotlightside.life40.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .hot60.gridspotlightside.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .is-dark-skin-prefix-red.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .hot60.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(42) > .hot30.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .gridspotlightside.life40.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .breaking.gridspotlightside.hot40 > a > .text.t100`
- `.breaking.hot50.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .gridtriple.life40.hot40 > a > .text.t100`
- `.opinion.hot30.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlightside.life40.hot40:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.is-aske-skin.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .opinion.gridspotlightside.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.opinion.hot50.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .hot30.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.is-primary-skin.hot30.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .opinion.gridtriple.life40 > a > .text.t100`
- `.is-aske-skin.is-skin.gridspotlightside:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(50) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.breakingvarsel.no-image.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(50) > .gridspotlightside.hot40.life20:nth-child(4) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(51) > .breakingvarsel.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(51) > .hot60.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(51) > .hot60.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(52) > .hot60.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(52) > .opinion.gridtriple.life40 > a > .text.t100`
- `a[href$="maa-punge-ut"] > .text.t100`

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
