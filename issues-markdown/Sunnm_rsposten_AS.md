# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-11-19T02:15:13.291Z
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
- **Count:** 2

#### Affected Elements:

- `.liveblog > .teaserasides`
- `.tip > .teaserasides`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 102

#### Affected Elements:

- `.gridfullsize.hot40.payed > a > .text.t100`
- `.gridfullsize-bundle.card-size-large.hot40 > a > .text.t100`
- `.small-items.griddouble.no-image:nth-child(1) > a > .text.t100`
- `.small-items.griddouble.no-image:nth-child(2) > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlightside.payed > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot50.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .breakingvarsel.hot40.gridspotlightside > a > .text.t100`
- `.gridfullsize-bundle.card-size-large.hot60 > a > .text.t100`
- `.small-items.griddouble.hot60:nth-child(1) > a > .text.t100`
- `.small-items.griddouble.life40 > a > .text.t100`
- `.hot10 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .breakingvarsel.no-image.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .hot60.gridtriple.life20 > a > .text.t100`
- `.hot70.is-dark-skin.life60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .hot50.gridtriple.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.is-prefix-red-skin.life60.hot60 > a > .text.t100`
- `.breakingvarsel.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(5) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(5) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.is-dark-skin.life60.hot60 > a > .text.t100`
- `.life60.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(7) > .hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(7) > .life40.hot60.gridtriple > a > .text.t100`
- `a[href$="straumbrott"] > .text.t100`
- `.TwoTeasers.grid:nth-child(8) > .griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot60.gridspotlightside.payed > a > .text.t100`
- `a[href$="stenger-veg"] > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .hot60.gridtriple.life20 > a > .text.t100`
- `.hot70.is-dark-skin.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .life40.hot60.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(15) > .life40.hot50.gridspotlightside > a > .text.t100`
- `a[href$="brann"] > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(15) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(15) > .hot50.gridspotlightside.payed:nth-child(4) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(16) > .hot50.gridtriple.life20 > a > .text.t100`
- `.liveblog > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .breakingvarsel.no-image.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.opinion.hot40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .hot30.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .hot40.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .hot60.gridtriple.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.opinion.life40.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .opinion.gridspotlight.card-size-large > a > .text.t100`
- `.opinion.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .hot60.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .hot40.gridtriple.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(25) > .hot40.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .hot60.gridspotlightside.payed:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .opinion.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.tip > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .gridspotlight.card-size-large.hot50 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .opinion.life40.hot50 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .hot50.gridtriple.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .hot30.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.TwoTeasers.grid:nth-child(33) > .griddouble.no-image.hot40:nth-child(1) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(33) > .griddouble.no-image.hot40:nth-child(2) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(34) > .hot40.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .opinion.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .breakingvarsel.no-image.is-aske-skin > a > .text.t100`
- `.life40.hot50.gridtriple > a > .text.t100`
- `.is-dark-skin-prefix-red > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.life40.hot40.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .hot30.gridtriple.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .hot30.gridspotlightside.payed:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .no-image.is-aske-skin.hot30 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(41) > .hot30.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .hot70.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .hot30.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .hot30.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .is-aske-skin.hot30.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .opinion.hot30.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.hot50 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .hot30.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .no-image.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .hot50.no-image.is-aske-skin > a > .text.t100`
- `.TwoTeasers.grid:nth-child(45) > .griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(45) > .griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.is-prefix-red-skin.life40.hot60 > a > .text.t100`
- `.is-prefix-red-skin.life40.hot30 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .no-image.is-aske-skin.is-skin > a > .text.t100`

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
