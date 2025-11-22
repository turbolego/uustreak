# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-11-22T00:26:39.882Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 5

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
- **Count:** 105

#### Affected Elements:

- `.SingleTeaser.grid:nth-child(2) > .gridfullsize.hot40.life20 > a > .text.t100`
- `.hot80.card-size-large.gridfullsize > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(1) > .is-bundle-wrapper.gridspotlight[position="1"] > .is-bundle-aske-skin.isBundle.grid > .gridfullsize-bundle.hot20.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(1) > .is-bundle-wrapper.gridspotlight[position="1"] > .is-bundle-aske-skin.isBundle.grid > .complex-subteasers-wrapper.gridfullsize.grid > .small-items.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(1) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .hot60.gridtriple.life40 > a > .text.t100`
- `.hot70 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .hot20.gridtriple.life20 > a > .text.t100`
- `.hot80.life40.gridspotlightside > a > .text.t100`
- `.gridfullsize-bundle.card-size-large.hot60 > a > .text.t100`
- `.griddouble.small-items.hot40 > a > .text.t100`
- `.griddouble.small-items.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(4) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .is-bundle-wrapper.gridspotlight[position="1"] > .is-bundle-aske-skin.isBundle.grid > .gridfullsize-bundle.hot20.is-aske-skin > a > .text.t100`
- `.small-items.no-image.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(6) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(7) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(7) > .hot60.gridtriple.life40 > a > .text.t100`
- `.life60.hot30.gridtriple > a > .text.t100`
- `.hot60.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.gridfullsize-bundle.hot50.card-size-large > a > .text.t100`
- `.griddouble.hot20.small-items > a > .text.t100`
- `.griddouble.small-items.hot50 > a > .text.t100`
- `.hot20.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(8) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .hot20.gridtriple.life20 > a > .text.t100`
- `.is-restaurantguiden-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .gridtriple.hot40.life20 > a > .text.t100`
- `a[href$="brann"] > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(15) > .opinion.hot50.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(15) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(16) > .is-dark-skin.life60.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .opinion.hot50.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .life40.gridspotlightside.hot40:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .life40.gridspotlightside.hot40:nth-child(3) > a > .text.t100`
- `.card-size-mega > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot60.gridtriple.life40 > a > .text.t100`
- `.breakingvarsel.gridtriple.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(21) > .gridtriple.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .no-image.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.hot50.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(25) > .gridtriple.hot40.life20 > a > .text.t100`
- `.hot50.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.breakingvarsel.hot60.gridtriple > a > .text.t100`
- `.hot50.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.hot30.opinion.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot50.life40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .gridtriple.life40.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .gridspotlightside.hot40.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .is-aske-skin.is-skin.gridspotlightside:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .gridspotlightside.hot40.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(34) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .gridtriple.life40.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .opinion.hot50.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .opinion.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(41) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .opinion.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .hot60.gridtriple.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot60.gridtriple.life40 > a > .text.t100`
- `.hot30.opinion.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .gridtriple.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlightside.hot40.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.is-aske-skin.is-skin.gridtriple > a > .text.t100`

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
