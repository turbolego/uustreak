# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-11-20T00:27:58.051Z
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

### Aside should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the complementary landmark or aside is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-complementary-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.teaserasides`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 102

#### Affected Elements:

- `.gridfullsize.life40.hot60 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .gridfullsize-bundle.card-size-large.hot40 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .complex-subteasers-wrapper.gridfullsize.grid > .small-items.gridfullsize.hot40 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .life40.hot60.gridspotlightside > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlightside.payed:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(1) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(1) > .gridtriple.hot40.payed:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(1) > .gridtriple.hot40.payed:nth-child(3) > a > .text.t100`
- `.hot70.is-dark-skin.life60 > a > .text.t100`
- `.gridfullsize-bundle.card-size-large.hot60 > a > .text.t100`
- `.small-items.griddouble.life40 > a > .text.t100`
- `.small-items.griddouble.hot40:nth-child(2) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(2) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .life40.hot60.gridspotlightside:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .life40.hot60.gridspotlightside:nth-child(3) > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(5) > .hot60.gridtriple.payed:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(5) > .gridtriple.hot40.payed > a > .text.t100`
- `a[href$="brann"] > .text.t100`
- `.life60.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .gridfullsize-bundle.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .complex-subteasers-wrapper.gridfullsize.grid > .small-items.gridfullsize.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.is-dark-skin.life60.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(10) > .hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(10) > .hot30.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(10) > .opinion.hot30.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot50.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot70.is-dark-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .opinion.hot50.life40 > a > .text.t100`
- `.life40.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(17) > .hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(17) > .gridtriple.hot40.payed:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(17) > .gridtriple.hot40.payed:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .gridspotlightside.hot40.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .opinion.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .no-image.is-aske-skin.is-skin:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .no-image.is-aske-skin.is-skin:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .gridspotlightside.hot40.payed:nth-child(4) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(21) > .breakingvarsel.gridtriple.hot40 > a > .text.t100`
- `.TwoTeasers.grid:nth-child(22) > .griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(22) > .griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .gridtriple.hot40.payed > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(25) > .hot60.gridtriple.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.hot50.gridspotlightside.payed:nth-child(2) > a > .text.t100`
- `.hot30.life40.gridspotlightside > a > .text.t100`
- `.hot50.gridspotlightside.payed:nth-child(4) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .hot30.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .gridtriple.hot40.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .gridspotlightside.hot40.payed:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.TwoTeasers.grid:nth-child(33) > .griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `a[href$="straumbrott"] > .text.t100`
- `.AdWithTeaser.grid:nth-child(34) > .gridtriple.hot40.payed > a > .text.t100`
- `a[href$="stenger-veg"] > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .breakingvarsel.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .hot50.gridtriple.payed > a > .text.t100`
- `.TwoTeasers.grid:nth-child(40) > .griddouble.no-image.hot40:nth-child(1) > a > .text.t100`
- `.breakingvarsel.griddouble.no-image > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(41) > .gridtriple.hot40.life20 > a > .text.t100`
- `.liveblog > a > .text.t100`
- `.opinion.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .hot30.gridtriple.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.opinion.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot30.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .gridtriple.hot40.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot60.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .opinion.hot50.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .hot60.gridspotlightside.payed > a > .text.t100`

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
