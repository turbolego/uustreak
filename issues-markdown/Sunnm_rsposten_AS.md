# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-01-12T14:27:14.465Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 6

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

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 102

#### Affected Elements:

- `.is-dark-skin-prefix-red.breakingvarsel.gridspotlight > a > .text.t100`
- `.is-dark-skin-prefix-red.hot60.is-skin:nth-child(2) > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot40.life40.gridspotlightside > a > .text.t100`
- `.breakingvarsel.hot60.gridspotlightside > a > .text.t100`
- `a[href$="bil-av-vegen"] > .text.t100`
- `.breakingvarsel.small-items.griddouble > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .complex-subteasers-wrapper.gridfullsize.grid > .small-items.griddouble.hot50 > a > .text.t100`
- `.is-prefix-red-skin.hot60.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot60.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot70.is-dark-skin.life60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot40.life20 > a > .text.t100`
- `.gridfullsize-bundle.card-size-large.hot60 > a > .text.t100`
- `.small-items.griddouble.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .complex-subteasers-wrapper.gridfullsize.grid > .small-items.griddouble.hot50 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .opinion.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot60.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.breaking > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.opinion.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot80.life60.gridtriple > a > .text.t100`
- `.hot30.life60.gridtriple > a > .text.t100`
- `.no-image.is-aske-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot70.is-dark-skin.life60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .hot40.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot30.opinion.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.hot50.is-aske-skin.gridtriple > a > .text.t100`
- `.is-dark-skin-prefix-red.hot70.life60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .gridtriple.hot60.life20 > a > .text.t100`
- `.hot70.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .is-dark-skin.hot50.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(18) > .is-dark-skin.gridtriple.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(21) > .gridtriple.hot60.life40 > a > .text.t100`
- `.opinion.hot50.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(21) > .gridtriple.hot40.life20 > a > .text.t100`
- `.is-dark-skin.life60.hot50 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .is-aske-skin.hot40.is-skin:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .is-aske-skin.hot40.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(24) > .hot30.gridtriple.life20 > a > .text.t100`
- `.is-aske-skin.hot60.is-skin:nth-child(1) > a > .text.t100`
- `.opinion.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .is-aske-skin.hot60.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .is-aske-skin.gridtriple.hot40:nth-child(1) > a > .text.t100`
- `.is-aske-skin.gridtriple.hot40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot50.gridtriple.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .opinion.gridtriple.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .hot50.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .opinion.hot60.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot70.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .gridtriple.hot60.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot30.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .no-image.hot50.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .is-dark-skin.hot60.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .opinion.hot60.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .is-aske-skin.hot60.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .no-image.hot50.is-aske-skin > a > .text.t100`
- `.life60.is-aske-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .is-dark-skin.gridtriple.hot60 > a > .text.t100`
- `a[href$="boer-beklage"] > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .gridtriple.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(42) > .gridtriple.hot40.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .is-aske-skin.gridtriple.hot40 > a > .text.t100`
- `.hot70.is-aske-skin.gridtriple > a > .text.t100`
- `.is-prefix-red-skin.hot80.life60 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(44) > .is-aske-skin.gridtriple.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .is-aske-skin.hot40.is-skin > a > .text.t100`
- `.gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot40.life40.gridspotlightside > a > .text.t100`
- `.is-dark-skin.no-image.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .is-aske-skin.hot40.is-skin:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .opinion.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .gridtriple.hot60.life40:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .is-aske-skin.hot40.is-skin:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .no-image.is-aske-skin.hot40 > a > .text.t100`

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
