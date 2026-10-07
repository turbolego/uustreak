# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-10-07T19:37:19.403Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 6

## Violation Details

### <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements

- **Impact:** serious
- **Description:** Ensure <dl> elements are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/definition-list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.3
- **Count:** 2

#### Affected Elements:

- `.Credits:nth-child(2) > dl:nth-child(3)`
- `.Credits:nth-child(2) > dl:nth-child(4)`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 104

#### Affected Elements:

- `.gridfullsize-bundle.card-size-large.breakingvarsel > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .complex-subteasers-wrapper.gridfullsize.grid > .small-items.griddouble.hot40 > a > .text.t100`
- `.small-items.griddouble.hot50 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-dark-skin-prefix-red.is-skin.breakingvarsel > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot50.opinion.life40 > a > .text.t100`
- `.is-prefix-red-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.is-dark-skin.hot70.life60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot60.is-aske-skin.life40 > a > .text.t100`
- `.is-primary-skin.hot60.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .gridfullsize-bundle.card-size-large.hot40 > a > .text.t100`
- `.small-items.griddouble.is-aske-skin > a > .text.t100`
- `.small-items.griddouble.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot60.breakingvarsel.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot50.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .gridfullsize-bundle.card-size-large.hot40 > a > .text.t100`
- `.hot90 > a > .text.t100`
- `.is-dark-skin-prefix-red.small-items.griddouble > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .life60.gridspotlightside.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .breakingvarsel.gridtriple.hot40 > a > .text.t100`
- `.breaking.variant-a.gridtriple > a > .text.t100`
- `.hot70.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .is-aske-skin.is-skin.breakingvarsel > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot60.gridspotlight.card-size-large > a > .text.t100`
- `.hot70.life60.gridspotlightside > a > .text.t100`
- `.is-prefix-red-skin.is-skin.breakingvarsel > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .opinion.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot60.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .is-primary-skin.is-skin.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .breakingvarsel.gridtriple.hot40:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .breakingvarsel.gridtriple.hot40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.hot80 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .is-primary-skin.is-skin.gridspotlightside > a > .text.t100`
- `.no-image.hot60.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(18) > .breakingvarsel.gridtriple.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .no-image.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .hot60.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .opinion.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .life60.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .breakingvarsel.gridspotlightside.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(24) > .gridtriple.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .is-primary-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.hot30.no-image.opinion > a > .text.t100`
- `.life60.hot50.gridtriple > a > .text.t100`
- `.hot50.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot60.breakingvarsel.gridtriple > a > .text.t100`
- `.hot30.opinion.gridtriple > a > .text.t100`
- `.is-dark-skin-prefix-red.gridspotlight.card-size-large > a > .text.t100`
- `.hot50.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .no-image.breakingvarsel.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .hot50.opinion.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .is-primary-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .opinion.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.life60.breakingvarsel.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .life40.breakingvarsel.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(36) > .gridtriple.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .gridspotlightside.hot40.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .gridspotlight.card-size-large.breakingvarsel > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.life40.breakingvarsel.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(41) > .breaking.gridtriple.hot40 > a > .text.t100`
- `.hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .opinion.gridspotlightside.hot40 > a > .text.t100`
- `.is-prefix-red-skin.hot30.is-skin > a > .text.t100`
- `.hot30.no-image.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .hot60.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .hot30.opinion.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .is-dark-skin-prefix-red.is-skin.breakingvarsel > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.is-aske-skin.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlightside.hot40.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .is-aske-skin.is-skin.breakingvarsel:nth-child(4) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .no-image.is-aske-skin.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .is-aske-skin.is-skin.breakingvarsel > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .breakingvarsel.gridspotlightside.hot40:nth-child(4) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .breakingvarsel.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .opinion.life40.gridtriple > a > .text.t100`
- `.card-size-medium.griddouble.hot60 > a > .text.t100`
- `.card-size-medium.griddouble.is-aske-skin > a > .text.t100`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.Layout`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.top`
- `.Layout`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.breaking-stripe`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
