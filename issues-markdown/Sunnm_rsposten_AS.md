# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-10-10T00:26:44.450Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 9

## Violation Details

### <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements

- **Impact:** serious
- **Description:** Ensure <dl> elements are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/definition-list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1
- **Count:** 2

#### Affected Elements:

- `.Credits:nth-child(2) > dl:nth-child(3)`
- `.Credits:nth-child(2) > dl:nth-child(4)`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2
- **Count:** 1

#### Affected Elements:

- `#dakapo_postopbar`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.gridfullsize.hot60.life20 > a > .text.t100 > h3`

### Aside should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the complementary landmark or aside is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-complementary-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.teaserasides`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 103

#### Affected Elements:

- `.gridfullsize.hot60.life20 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .gridfullsize-bundle.breakingvarsel.card-size-large > a > .text.t100`
- `.small-items.griddouble.is-aske-skin:nth-child(1) > a > .text.t100`
- `.breaking > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlightside.life40:nth-child(2) > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-dark-skin.is-skin.hot60 > a > .text.t100`
- `.is-dark-skin-prefix-red > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .gridfullsize-bundle.breakingvarsel.card-size-large > a > .text.t100`
- `.is-prefix-red-skin.hot80.small-items > a > .text.t100`
- `.small-items.griddouble.no-image > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot40.gridspotlightside.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-dark-skin.is-skin.hot60 > a > .text.t100`
- `.hot70.life60.is-dark-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .hot60.gridtriple.life20 > a > .text.t100`
- `.is-prefix-red-skin.hot50.is-skin > a > .text.t100`
- `.hot80.gridspotlight.card-size-large > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .hot50.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.life60.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(5) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(5) > .hot40.gridspotlightside.life40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(6) > .hot60.gridtriple.life40 > a > .text.t100`
- `.life60.hot60.gridtriple > a > .text.t100`
- `.liveblog > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(7) > .hot40.gridtriple.life20 > a > .text.t100`
- `.hot70.life60.gridspotlight > a > .text.t100`
- `.is-dark-skin.no-image.hot50 > a > .text.t100`
- `.hot80.gridspotlightside.life40 > a > .text.t100`
- `.opinion.hot40.gridspotlightside > a > .text.t100`
- `.griddouble.no-image.hot30 > a > .text.t100`
- `.TwoTeasers > .griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.hot80.life60.gridspotlightside > a > .text.t100`
- `.opinion.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(15) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(16) > .hot50.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(17) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(17) > .hot50.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(17) > .opinion.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .hot30.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .hot30.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .hot30.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(21) > .hot30.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .hot30.gridspotlightside.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .hot60.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .hot40.gridtriple.life20 > a > .text.t100`
- `.opinion.hot50.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .hot40.gridspotlightside.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .is-aske-skin.hot40.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .opinion.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .hot60.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot60.gridspotlightside.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.is-dark-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .hot30.gridspotlightside.life40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(34) > .is-aske-skin.hot40.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .hot50.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .hot40.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .hot30.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .hot30.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .hot60.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .hot40.gridspotlightside.life40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(41) > .hot60.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .hot50.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .opinion.hot30.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot40.gridspotlightside.life40 > a > .text.t100`
- `.no-image.hot50.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .hot40.gridspotlightside.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot60.gridtriple.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot60.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot60.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .is-aske-skin.is-skin.hot60 > a > .text.t100`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.Layout`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.top`
- `.Layout`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 1

#### Affected Elements:

- `.breaking-stripe`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
