# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-10-27T04:15:22.181Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 5

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
- **Count:** 100

#### Affected Elements:

- `.gridfullsize.hot60.life40 > a > .text.t100`
- `.gridfullsize-bundle > a > .text.t100`
- `.small-items.griddouble.hot40:nth-child(1) > a > .text.t100`
- `.small-items.griddouble.hot40:nth-child(2) > a > .text.t100`
- `.is-dark-skin.hot60.is-skin > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot60.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot60.gridtriple.life20 > a > .text.t100`
- `.is-dark-skin.life60.hot70 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot40.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.no-image.hot60.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .is-aske-skin.is-skin.gridspotlightside:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .life60.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot70.gridspotlight.card-size-large > a > .text.t100`
- `.opinion.hot60.life40 > a > .text.t100`
- `.is-dark-skin.no-image.hot50 > a > .text.t100`
- `.hot60.gridtriple.payed:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .gridtriple.hot40.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot60.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot70.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .no-image.gridspotlightside.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(12) > .gridtriple.hot40.payed > a > .text.t100`
- `.hot50.gridspotlightside.payed:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.is-dark-skin-prefix-red > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(13) > .no-image.hot50.is-aske-skin > a > .text.t100`
- `.opinion.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .hot60.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .opinion.hot30.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.opinion.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .opinion.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.opinion.hot30.gridspotlightside:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .opinion.hot30.gridspotlightside:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .hot30.no-image.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(21) > .hot30.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .hot50.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .gridtriple.hot40.payed:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .gridtriple.hot40.payed:nth-child(3) > a > .text.t100`
- `.griddouble.no-image.hot40 > a > .text.t100`
- `.griddouble.no-image.hot50 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(27) > .hot50.gridtriple.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .hot30.is-aske-skin.is-skin > a > .text.t100`
- `.life60.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(30) > .gridtriple.hot40.payed > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(31) > .hot60.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .hot70.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .gridspotlightside.hot40.payed:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .gridspotlightside.hot40.payed:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.hot30.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .hot50.gridtriple.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .life60.gridspotlightside.hot40 > a > .text.t100`
- `.hot50.is-aske-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .hot60.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .gridspotlightside.hot40.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(40) > .is-aske-skin.life40.is-skin > a > .text.t100`
- `.hot70.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .hot60.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .gridtriple.hot40.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot30.no-image.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .is-aske-skin.is-skin.gridspotlightside:nth-child(4) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(44) > .hot60.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
- `.breakingvarsel > a > .text.t100`
- `.hot70.gridspotlightside.payed > a > .text.t100`
- `.variant-a > a > .text.t100`
- `.gridtriple.hot40.payed:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .gridtriple.hot40.payed:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .life40.gridspotlightside.hot40 > a > .text.t100`

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

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
