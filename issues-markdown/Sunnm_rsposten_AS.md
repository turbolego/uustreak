# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-11-01T05:14:33.743Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 7

## Violation Details

### <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements

- **Impact:** serious
- **Description:** Ensure <dl> elements are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/definition-list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.3
- **Count:** 2

#### Affected Elements:

- `.Credits:nth-child(2) > dl:nth-child(3)`
- `.Credits:nth-child(2) > dl:nth-child(4)`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 101

#### Affected Elements:

- `.is-dark-skin.breakingvarsel.gridspotlight > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .breakingvarsel.hot40.gridspotlightside > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot50.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.feature > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .complex-subteasers-wrapper.gridfullsize.grid > .small-items.griddouble.hot40 > a > .text.t100`
- `.small-items.griddouble.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .opinion.life40.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .life40.hot60.gridtriple > a > .text.t100`
- `.life60.hot70.is-dark-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot70.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .gridfullsize-bundle.card-size-large.life40 > a > .text.t100`
- `.small-items.griddouble.no-image:nth-child(1) > a > .text.t100`
- `.small-items.griddouble.breakingvarsel > a > .text.t100`
- `.hot70.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .opinion.life40.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlight.card-size-large.hot50 > a > .text.t100`
- `.life60.hot40.gridspotlightside > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .gridtriple.hot40.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .life40.hot60.gridtriple > a > .text.t100`
- `.life60.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot40.gridspotlightside.life20:nth-child(4) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(12) > .hot70.life40.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .gridtriple.hot40.life20 > a > .text.t100`
- `.life40.is-aske-skin.hot60:nth-child(2) > a > .text.t100`
- `.life40.is-aske-skin.hot60:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.is-dark-skin.life40.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.life40.hot40.gridspotlightside:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlight.card-size-large.hot50 > a > .text.t100`
- `.opinion.life40.hot40 > a > .text.t100`
- `.is-dark-skin.breakingvarsel.hot50 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot60.gridtriple.payed:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(21) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.breaking.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .hot40.gridspotlightside.payed:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .breakingvarsel.no-image.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .hot40.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.hot50.gridtriple.payed:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .gridtriple.hot40.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .breakingvarsel.hot50.gridtriple > a > .text.t100`
- `.variant-b > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .is-dark-skin.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .breakingvarsel.hot40.gridspotlightside > a > .text.t100`
- `.breaking.hot50.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.no-image.gridfullsize.hot50 > a > .text.t100`
- `.h-low > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot50.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .is-dark-skin.hot60.is-skin > a > .text.t100`
- `.hot30.opinion.gridtriple:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(33) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.hot30.opinion.gridtriple:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .hot60.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.no-image.hot50.is-aske-skin > a > .text.t100`
- `.opinion.gridspotlight.card-size-large > a > .text.t100`
- `.hot30.opinion.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(39) > .hot50.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(39) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(39) > .gridtriple.hot40.payed > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(40) > .hot50.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .gridspotlight.card-size-large.hot50 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .is-aske-skin.is-skin.hot40:nth-child(4) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot50.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(44) > .gridtriple.hot40.payed > a > .text.t100`
- `.life40.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot70.life40.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(46) > .gridtriple.hot40.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.hot50.life40.gridspotlightside > a > .text.t100`
- `.hot30.no-image.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.variant-c > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .hot50.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .life40.is-aske-skin.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .gridtriple.hot40.life20 > a > .text.t100`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.Layout`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.top`
- `.Layout`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.breaking-stripe`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
