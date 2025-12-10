# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-12-10T00:29:42.056Z
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
- **Count:** 99

#### Affected Elements:

- `.breakingvarsel > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot40.gridspotlightside.payed > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-primary-skin.is-skin.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot60.payed > a > .text.t100`
- `.is-prefix-red-skin.is-skin.gridtriple > a > .text.t100`
- `.hot70.life60.is-dark-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .hot40.gridtriple.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.breaking > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .gridspotlightside.hot60.payed:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.life60.gridspotlightside.hot60 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(7) > .gridtriple.hot60.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(8) > .gridtriple.life40.hot60:nth-child(1) > a > .text.t100`
- `.life60.hot30.gridtriple > a > .text.t100`
- `.gridtriple.life40.hot60:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(9) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(9) > .life40.gridspotlightside.hot60:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(9) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.life40.gridspotlightside.hot60:nth-child(4) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .opinion.hot50.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .gridtriple.life40.hot60:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .gridtriple.life40.hot60:nth-child(2) > a > .text.t100`
- `.life60.hot80.gridtriple > a > .text.t100`
- `.hot80.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlightside.hot60.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(18) > .hot40.gridtriple.life20 > a > .text.t100`
- `.is-aske-skin.is-skin.gridspotlightside:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.hot50.is-aske-skin.is-skin:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .no-image.hot50.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .gridtriple.hot60.life20:nth-child(2) > a > .text.t100`
- `.is-dark-skin.no-image.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.is-prefix-red-skin.hot50.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.opinion.hot50.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .opinion.hot40.life40 > a > .text.t100`
- `.is-primary-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .hot30.opinion.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .gridtriple.life40.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .gridtriple.hot60.payed:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(27) > .gridtriple.life40.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `a[href$="bil-av-vegen"] > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .opinion.hot50.gridspotlightside > a > .text.t100`
- `.is-dark-skin.is-skin.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .gridspotlightside.hot60.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .gridspotlightside.hot60.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.griddouble.hot30.no-image > a > .text.t100`
- `.TwoTeasers.grid:nth-child(31) > .griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot40.gridtriple.life40 > a > .text.t100`
- `.variant-c > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot50.gridtriple.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.hot30.gridspotlightside.payed > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(36) > .opinion.gridtriple.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .hot40.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.is-dark-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(39) > .hot30.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(39) > .is-aske-skin.hot40.is-skin > a > .text.t100`
- `.opinion.hot40.gridtriple > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(41) > .hot40.gridtriple.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .opinion.hot40.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .hot30.opinion.gridtriple > a > .text.t100`
- `.TwoTeasers.grid:nth-child(44) > .griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `.TwoTeasers.grid:nth-child(44) > .griddouble.no-image.hot50 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot30.opinion.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot50.gridtriple.life20 > a > .text.t100`
- `.hot80.gridtriple.life40 > a > .text.t100`
- `.card-size-medium.griddouble.hot30 > a > .text.t100`
- `.hot70.card-size-medium.griddouble > a > .text.t100`
- `.TwoTeasers.grid:nth-child(47) > .griddouble.no-image.hot50 > a > .text.t100`
- `.TwoTeasers.grid:nth-child(47) > .griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .hot50.gridtriple.payed > a > .text.t100`
- `.is-dark-skin-prefix-red > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(49) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(49) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot80.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(50) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(50) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(50) > .is-aske-skin.is-skin.life40 > a > .text.t100`

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
