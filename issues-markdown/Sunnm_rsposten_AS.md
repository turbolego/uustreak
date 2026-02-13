# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-02-13T00:42:16.279Z
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

- `.gridfullsize.hot40.life20 > a > .text.t100 > h3`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 100

#### Affected Elements:

- `.gridfullsize.hot40.life20 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot70.gridspotlight.card-size-large > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot40.life20:nth-child(2) > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot60.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.gridfullsize-bundle > a > .text.t100`
- `.small-items.griddouble.hot40 > a > .text.t100`
- `.is-primary-skin.small-items.griddouble > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot60.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .is-dark-skin.hot70.life60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot50.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot80.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .is-dark-skin.hot70.life60 > a > .text.t100`
- `.hot70.life40.gridtriple > a > .text.t100`
- `.life60.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot50.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.breaking.hot70.no-image > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot20 > a > .text.t100`
- `.no-image.hot50.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.life60.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot80.life60.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .is-aske-skin.is-skin.gridspotlightside:nth-child(3) > a > .text.t100`
- `.breakingvarsel.no-image.is-aske-skin > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.opinion.hot50.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(23) > .is-dark-skin-prefix-red.breakingvarsel.is-skin > a > .text.t100`
- `a[href$="maa-punge-ut"] > .text.t100`
- `.is-primary-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .life40.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .hot50.gridtriple.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(27) > .hot30.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .is-dark-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .opinion.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .opinion.hot30.gridtriple > a > .text.t100`
- `.hot30.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .no-image.gridspotlightside.hot40 > a > .text.t100`
- `.opinion.hot60.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(37) > .hot50.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .no-image.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.breaking.hot50.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(42) > .life40.gridtriple.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .hot70.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(44) > .life40.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .life40.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot30.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.hot70.gridspotlightside.life20 > a > .text.t100`
- `.is-dark-skin.life60.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .is-dark-skin-prefix-red.breakingvarsel.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .opinion.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .life40.gridtriple.hot40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .opinion.hot30.gridtriple > a > .text.t100`
- `.opinion.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(49) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(49) > .hot30.gridspotlightside.life20 > a > .text.t100`

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
