# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-01-16T00:35:35.277Z
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

- `.gridfullsize.hot60.life20 > a > .text.t100 > h3`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 102

#### Affected Elements:

- `.gridfullsize.hot60.life20 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .breakingvarsel.gridspotlight.card-size-large > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.breakingvarsel.is-dark-skin.no-image > a > .text.t100`
- `.gridfullsize-bundle.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .complex-subteasers-wrapper.gridfullsize.grid > .small-items.griddouble.is-aske-skin > a > .text.t100`
- `.small-items.griddouble.hot50 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.hot70.life60.is-dark-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot60.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot50.gridtriple.life20 > a > .text.t100`
- `.hot80.life60.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .opinion.life40.hot60 > a > .text.t100`
- `.gridfullsize-bundle.breakingvarsel.hot50 > a > .text.t100`
- `.small-items.griddouble.no-image > a > .text.t100`
- `.small-items.griddouble.hot40:nth-child(2) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.is-dark-skin-prefix-red.no-image.hot50 > a > .text.t100`
- `.hot80.life40.gridtriple > a > .text.t100`
- `.hot30.life60.gridtriple > a > .text.t100`
- `.no-image.is-aske-skin.hot50 > a > .text.t100`
- `.no-image.is-aske-skin.is-skin:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot40.life40.gridspotlightside > a > .text.t100`
- `.hot80.is-dark-skin-prefix-red.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .opinion.hot40.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.hot30.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .life40.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot50.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot70.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(19) > .life40.gridtriple.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .opinion.hot60.gridspotlightside > a > .text.t100`
- `.gridtriple.hot60.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(21) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(21) > .is-aske-skin.is-skin.gridtriple:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.is-dark-skin-prefix-red.is-skin.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(24) > .gridtriple.hot60.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .hot40.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .breakingvarsel.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.life40.gridtriple.hot60:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .life40.gridtriple.hot60:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .opinion.hot40.gridtriple > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .hot50.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .opinion.life40.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.is-dark-skin-prefix-red.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .hot60.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .is-dark-skin.no-image.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot50.gridtriple.life20 > a > .text.t100`
- `.hot50.life40.gridtriple > a > .text.t100`
- `.opinion.hot50.gridspotlight > a > .text.t100`
- `.hot80.no-image.is-aske-skin > a > .text.t100`
- `.is-dark-skin.is-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .hot40.gridspotlightside.life20:nth-child(4) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .hot70.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .is-aske-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(37) > .hot40.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .is-prefix-red-skin.is-skin.hot40 > a > .text.t100`
- `.is-prefix-red-skin.is-skin.life40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .gridtriple.hot60.life20 > a > .text.t100`
- `.hot70.is-aske-skin.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .is-prefix-red-skin.is-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .is-prefix-red-skin.is-skin.hot40 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(42) > .is-prefix-red-skin.is-skin.gridtriple > a > .text.t100`
- `.hot30.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .hot70.gridspotlight.card-size-large > a > .text.t100`
- `.hot30.opinion.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(44) > .hot40.gridtriple.life20 > a > .text.t100`
- `.hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .is-dark-skin.is-skin.gridtriple > a > .text.t100`
- `.is-prefix-red-skin.hot50.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .gridtriple.hot60.life20 > a > .text.t100`
- `.is-dark-skin.hot50.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .is-dark-skin.is-skin.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.no-image.hot40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .opinion.hot50.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .is-dark-skin.is-skin.hot60 > a > .text.t100`
- `.life60.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .hot40.life40.gridtriple:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .opinion.hot40.life40 > a > .text.t100`

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
