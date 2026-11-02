# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-11-02T05:06:00.248Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 6

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

- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-dark-skin.hot60.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.gridfullsize-bundle > a > .text.t100`
- `.small-items.griddouble.life40:nth-child(1) > a > .text.t100`
- `.small-items.griddouble.breakingvarsel > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.card-size-mega > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(4) > .is-dark-skin.hot50.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(4) > .life60.hot70.is-dark-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(4) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(7) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(7) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.breaking.no-image.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(7) > .gridspotlightside.hot40.life20:nth-child(4) > a > .text.t100`
- `.life60.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(9) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(9) > .breakingvarsel.gridspotlightside.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(10) > .life40.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(10) > .gridtriple.hot40.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(10) > .hot50.gridtriple.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(12) > .life40.hot60.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(13) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(13) > .hot70.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(13) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(13) > .breakingvarsel.no-image.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(14) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(14) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(14) > .opinion.life40.hot60 > a > .text.t100`
- `.is-aske-skin.life40.hot60:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(17) > .life40.hot60.gridtriple:nth-child(2) > a > .text.t100`
- `.is-aske-skin.life40.hot60:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(19) > .opinion.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(19) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(19) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .gridspotlightside.hot40.payed:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .breakingvarsel.gridspotlight.card-size-large > a > .text.t100`
- `.hot30 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .no-image.gridspotlightside.hot40 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(21) > .opinion.life40.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(23) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(23) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.is-dark-skin.life40.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .opinion.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.hot50.life40.gridtriple > a > .text.t100`
- `.breaking.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(28) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(28) > .gridtriple.hot40.payed:nth-child(3) > a > .text.t100`
- `.variant-b > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(31) > .gridtriple.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(32) > .is-dark-skin.hot50.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(32) > .breakingvarsel.gridspotlight.card-size-large > a > .text.t100`
- `.breaking.hot50.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(32) > .breakingvarsel.no-image.is-aske-skin > a > .text.t100`
- `.breakingvarsel.gridtriple.hot40 > a > .text.t100`
- `.hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(33) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.is-dark-skin.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .no-image.hot50.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.h-low > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .no-image.gridspotlightside.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(39) > .is-aske-skin.is-skin.gridtriple:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(39) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(39) > .is-aske-skin.is-skin.gridtriple:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(40) > .is-dark-skin.hot60.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .is-aske-skin.hot50.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .hot50.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .opinion.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(44) > .gridtriple.hot40.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot50.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot50 > a > .text.t100`
- `.no-image.is-aske-skin.hot50 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .no-image.is-aske-skin.is-skin:nth-child(4) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(46) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .opinion.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .life40.hot60.gridtriple > a > .text.t100`
- `.hot70.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .life40.gridspotlightside.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(49) > .gridspotlightside.hot40.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(49) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.hot70.is-aske-skin.life40 > a > .text.t100`

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
