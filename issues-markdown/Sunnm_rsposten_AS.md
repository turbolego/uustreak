# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-08-29T06:17:12.221Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 6

## Violation Details

### <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements

- **Impact:** serious
- **Description:** Ensure <dl> elements are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/definition-list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.3
- **Count:** 2

#### Affected Elements:

- `.Credits:nth-child(2) > dl:nth-child(3)`
- `.Credits:nth-child(2) > dl:nth-child(4)`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 104

#### Affected Elements:

- `.feature > a > .text.t100`
- `.breaking > a > .text.t100`
- `.OnePlusXTeasers.grid > .hot80.life60.is-dark-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot40.gridspotlightside.payed:nth-child(1) > a > .text.t100`
- `.variant-b > a > .text.t100`
- `.griddouble.small-items.hot30 > a > .text.t100`
- `.hot20 > a > .text.t100`
- `.is-prefix-red-skin.no-image.hot40 > a > .text.t100`
- `.hot70.life60.is-dark-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .is-bundle-wrapper.gridspotlight[position="1"] > .is-bundle-dark-skin.isBundle.grid > .gridfullsize-bundle.card-size-large.is-dark-skin > a > .text.t100`
- `.hot80.griddouble.small-items:nth-child(1) > a > .text.t100`
- `.hot80.griddouble.small-items:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(7) > .hot60.gridtriple.life20 > a > .text.t100`
- `.life60.hot60.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(8) > .is-dark-skin.hot60.is-skin > a > .text.t100`
- `.gridfullsize-bundle.hot80.life60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(8) > .is-bundle-wrapper.gridspotlight[position="1"] > .is-bundle-dark-skin.isBundle.grid > .complex-subteasers-wrapper.gridfullsize.grid > .griddouble.small-items.is-dark-skin:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(8) > .is-bundle-wrapper.gridspotlight[position="1"] > .is-bundle-dark-skin.isBundle.grid > .complex-subteasers-wrapper.gridfullsize.grid > .griddouble.small-items.is-dark-skin:nth-child(2) > a > .text.t100`
- `.breakingvarsel.no-image.is-aske-skin > a > .text.t100`
- `.breakingvarsel.life40.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(9) > .is-dark-skin.life40.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .gridfullsize-bundle.card-size-large.hot40 > a > .text.t100`
- `.small-items.no-image.is-aske-skin > a > .text.t100`
- `a[href$="spill"] > .text.t100`
- `.liveblog.timeline.is-dark-skin-prefix-red > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(11) > .life40.hot60.gridtriple > a > .text.t100`
- `.breakingvarsel.hot50.is-dark-skin > a > .text.t100`
- `.hot70.is-dark-skin-prefix-red.life60 > a > .text.t100`
- `.opinion.hot50.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .gridspotlight.card-size-large.is-dark-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.life60.opinion.hot50 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.hot70.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .no-image.is-aske-skin.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(17) > .is-dark-skin.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(17) > .gridtriple.hot40.payed > a > .text.t100`
- `.is-aske-skin.hot60.gridtriple > a > .text.t100`
- `.is-dark-skin-prefix-red.gridtriple.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .no-image.is-aske-skin.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .opinion.life40.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .no-image.hot50.gridspotlightside > a > .text.t100`
- `.hot30.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(23) > .hot30.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(23) > .hot50.gridtriple.life20 > a > .text.t100`
- `.hot30.is-dark-skin.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.life60.hot30.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .hot30.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .hot30.is-dark-skin.is-skin:nth-child(2) > a > .text.t100`
- `.hot30.is-dark-skin.is-skin:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(29) > .gridtriple.hot40.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .gridtriple.hot40.payed > a > .text.t100`
- `.breakingvarsel.is-aske-skin.hot50 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .is-aske-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(31) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(34) > .hot60.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(34) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(34) > .hot70.gridtriple.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .is-aske-skin.hot40.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .no-image.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(37) > .hot60.gridtriple.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .hot60.gridspotlightside.payed:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .hot60.gridspotlightside.payed:nth-child(3) > a > .text.t100`
- `.life40.gridtriple.hot40:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .is-dark-skin.gridtriple.hot40 > a > .text.t100`
- `.opinion.life40.gridtriple > a > .text.t100`
- `.variant-a.hot60.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.is-prefix-red-skin.hot50.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .hot30.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(44) > .hot50.gridtriple.life20 > a > .text.t100`
- `.is-dark-skin-prefix-red.breakingvarsel.hot50 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.is-aske-skin.hot30.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .no-image.is-aske-skin.hot50 > a > .text.t100`
- `.opinion.hot30.gridtriple:nth-child(1) > a > .text.t100`
- `.opinion.hot30.gridtriple:nth-child(2) > a > .text.t100`
- `.opinion.hot30.gridtriple:nth-child(3) > a > .text.t100`
- `.life40.hot40.gridspotlightside:nth-child(1) > a > .text.t100`
- `.liveblog.timeline.hot50 > a > .text.t100`
- `.no-image.life40.hot40:nth-child(3) > a > .text.t100`
- `.no-image.life40.hot40:nth-child(4) > a > .text.t100`
- `.is-aske-skin.hot50.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .hot40.gridspotlightside.payed:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .is-dark-skin-prefix-red.breakingvarsel.hot40 > a > .text.t100`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.Layout`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.top`
- `.Layout`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.breaking-stripe`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
