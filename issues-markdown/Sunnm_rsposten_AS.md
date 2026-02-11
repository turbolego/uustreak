# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-02-11T07:51:06.337Z
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

- `.breakingvarsel.gridfullsize.hot40 > a > .text.t100 > h3`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 105

#### Affected Elements:

- `.breakingvarsel.gridfullsize.hot40 > a > .text.t100`
- `.is-dark-skin-prefix-red > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(1) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .gridfullsize-bundle.card-size-large.life40 > a > .text.t100`
- `.breaking.small-items.griddouble > a > .text.t100`
- `.is-prefix-red-skin.breakingvarsel.small-items > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(1) > .life40.hot40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(1) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot60.gridtriple.life20 > a > .text.t100`
- `.hot70.is-dark-skin.life60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .hot80.life40.gridspotlightside > a > .text.t100`
- `.gridfullsize-bundle.hot70.card-size-large > a > .text.t100`
- `.small-items.opinion.griddouble > a > .text.t100`
- `.small-items.griddouble.hot60:nth-child(2) > a > .text.t100`
- `.breakingvarsel.is-aske-skin.no-image > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(7) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .gridfullsize-bundle.card-size-large.life40 > a > .text.t100`
- `.hot70.small-items.griddouble > a > .text.t100`
- `.hot80.small-items.griddouble > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(7) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.life60.hot30.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot50.gridtriple.life20 > a > .text.t100`
- `.hot80.life60.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .life60.hot60.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot90 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(12) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(12) > .is-prefix-red-skin.is-skin.hot40 > a > .text.t100`
- `.opinion.life40.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot60.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot50.gridtriple.life20 > a > .text.t100`
- `.hot60.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.is-dark-skin.is-skin.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.hot30.life40.gridspotlightside > a > .text.t100`
- `.is-dark-skin.no-image.is-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(19) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.breaking.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.hot30.is-aske-skin.no-image > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(21) > .hot50.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(21) > .gridtriple.hot40.life20 > a > .text.t100`
- `.hot50.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .hot40.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.hot70.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(24) > .gridtriple.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.opinion.hot50.life40 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .gridtriple.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.variant-a > a > .text.t100`
- `.is-prefix-red-skin.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot80.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .life40.gridtriple.hot40:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot60.gridtriple.life20 > a > .text.t100`
- `.life40.gridtriple.hot40:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .no-image.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(37) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .hot60.gridtriple.life20 > a > .text.t100`
- `.opinion.hot30.gridtriple > a > .text.t100`
- `.opinion.hot30.gridspotlightside > a > .text.t100`
- `.is-dark-skin.gridspotlight.card-size-large > a > .text.t100`
- `.is-aske-skin.hot50.is-skin > a > .text.t100`
- `.breakingvarsel.no-image.hot40 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(42) > .hot60.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .is-aske-skin.no-image.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(44) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .opinion.gridtriple.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.breakingvarsel.life40.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .life40.hot40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .opinion.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .life60.hot60.gridtriple > a > .text.t100`
- `.card-size-medium.griddouble.life40 > a > .text.t100`
- `.card-size-medium.griddouble.is-aske-skin > a > .text.t100`

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
