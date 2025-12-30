# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-12-30T00:30:17.531Z
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
- **Count:** 97

#### Affected Elements:

- `.is-dark-skin-prefix-red.breakingvarsel.gridspotlight > a > .text.t100`
- `.hot80.life60.gridspotlightside > a > .text.t100`
- `.hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .life60.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot70.is-dark-skin.life60 > a > .text.t100`
- `.gridfullsize-bundle.is-prefix-red-skin.breakingvarsel > a > .text.t100`
- `.is-prefix-red-skin.small-items.griddouble:nth-child(1) > a > .text.t100`
- `.is-prefix-red-skin.breakingvarsel.small-items > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(2) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(2) > .hot60.life40.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(4) > .hot60.life40.is-aske-skin > a > .text.t100`
- `.hot90 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(4) > .hot60.gridtriple.life20 > a > .text.t100`
- `.hot30.life60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .gridfullsize-bundle.breakingvarsel.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .complex-subteasers-wrapper.gridfullsize.grid > .small-items.griddouble.no-image > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .complex-subteasers-wrapper.gridfullsize.grid > .small-items.griddouble.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(7) > .gridtriple.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .gridfullsize-bundle.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .complex-subteasers-wrapper.gridfullsize.grid > .small-items.griddouble.hot60 > a > .text.t100`
- `.hot50.small-items.is-dark-skin > a > .text.t100`
- `.hot70.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .life60.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .gridtriple.hot40.life20 > a > .text.t100`
- `.hot50.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .life60.hot60.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.hot70.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.feature > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .hot30.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .hot30.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(16) > .hot30.is-aske-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(16) > .gridtriple.hot40.life20 > a > .text.t100`
- `.is-dark-skin.hot30.life60 > a > .text.t100`
- `.is-dark-skin.life60.hot60 > a > .text.t100`
- `.breaking > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .no-image.hot30.is-aske-skin:nth-child(3) > a > .text.t100`
- `.no-image.hot30.is-aske-skin:nth-child(4) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .no-image.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .gridspotlightside.hot40.life20:nth-child(4) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(22) > .is-aske-skin.gridtriple.is-skin > a > .text.t100`
- `.is-dark-skin.no-image.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(22) > .hot30.gridtriple.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(23) > .gridtriple.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .life40.gridspotlightside.hot40:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .no-image.life40.is-aske-skin > a > .text.t100`
- `a[href$="hus-overtent"] > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .gridspotlightside.hot40.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(27) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(28) > .life40.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(28) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(28) > .life60.hot60.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .life40.gridspotlightside.hot40:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .is-aske-skin.is-skin.gridspotlightside:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .no-image.life40.is-aske-skin > a > .text.t100`
- `.opinion > a > .text.t100`
- `.hot30.life40.gridtriple:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .no-image.is-aske-skin.gridtriple > a > .text.t100`
- `.life60.gridspotlightside.hot40 > a > .text.t100`
- `.gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(36) > .hot60.life40.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .hot80.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .life40.gridspotlightside.hot40:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .life40.gridspotlightside.hot40:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(39) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(39) > .hot60.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(39) > .hot30.gridtriple.life20 > a > .text.t100`
- `.hot70.life60.gridtriple > a > .text.t100`
- `.griddouble.no-image.hot30:nth-child(1) > a > .text.t100`
- `.variant-a > a > .text.t100`
- `.is-dark-skin-prefix-red.hot80.life60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.hot80.is-prefix-red-skin.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .no-image.hot30.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .hot70.life60.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .no-image.hot30.is-aske-skin > a > .text.t100`
- `.life60.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .life60.hot60.gridtriple > a > .text.t100`
- `.card-size-medium.griddouble.life60:nth-child(1) > a > .text.t100`
- `.card-size-medium.hot50.is-dark-skin > a > .text.t100`

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
