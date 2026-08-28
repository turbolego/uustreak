# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-08-28T10:10:35.253Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 5

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
- **Count:** 100

#### Affected Elements:

- `.gridfullsize-bundle > a > .text.t100`
- `.small-items.is-dark-skin.is-skin:nth-child(1) > a > .text.t100`
- `.liveblog.timeline.small-items > a > .text.t100`
- `.small-items.hot80.life60 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot80.life60.is-dark-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.hot100 > a > .text.t100`
- `.hot50.gridspotlightside.payed > a > .text.t100`
- `.hot90 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot80.is-dark-skin.is-skin > a > .text.t100`
- `.hot70.life60.is-dark-skin > a > .text.t100`
- `.hot80.opinion.life60 > a > .text.t100`
- `.feature > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(6) > .hot60.gridtriple.payed > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.hot70.life60.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .is-dark-skin-prefix-red.hot50.is-skin > a > .text.t100`
- `.life40.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(8) > .hot60.gridtriple.payed:nth-child(2) > a > .text.t100`
- `a[href$="spill"] > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot70.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.hot70.is-dark-skin-prefix-red.life60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .hot60.gridspotlightside.payed:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .is-dark-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .no-image.is-aske-skin.hot60 > a > .text.t100`
- `.is-dark-skin.hot30.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .hot40.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .hot40.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(15) > .hot80.life60.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .opinion.life40.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .no-image.is-aske-skin.hot60 > a > .text.t100`
- `.griddouble.no-image.hot50 > a > .text.t100`
- `.griddouble.no-image.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot50.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot40.gridtriple.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(21) > .hot40.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .hot40.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.breakingvarsel.hot50.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(26) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot70.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot30.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .gridspotlight.life40.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .no-image.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.life40.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot60.gridspotlightside.payed:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot60.gridspotlightside.payed:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(31) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(31) > .hot60.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(31) > .is-dark-skin.is-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.opinion.gridspotlight.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .hot60.gridspotlightside.payed > a > .text.t100`
- `.variant-a > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.no-image.hot50.is-aske-skin > a > .text.t100`
- `.opinion.hot30.gridtriple:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot50.gridtriple.life20 > a > .text.t100`
- `.opinion.hot30.gridtriple:nth-child(3) > a > .text.t100`
- `.is-aske-skin.hot30.life40 > a > .text.t100`
- `.opinion.hot30.gridspotlightside:nth-child(1) > a > .text.t100`
- `.is-dark-skin-prefix-red.breakingvarsel.hot50 > a > .text.t100`
- `.opinion.hot30.gridspotlightside:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .no-image.life40.hot40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(40) > .opinion.hot30.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .gridspotlight.life40.card-size-large > a > .text.t100`
- `.life40.hot40.gridspotlightside:nth-child(2) > a > .text.t100`
- `.liveblog.timeline.hot50 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .no-image.life40.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .hot50.is-aske-skin.is-skin > a > .text.t100`
- `.no-image.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(43) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .is-dark-skin-prefix-red.breakingvarsel.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .is-dark-skin-prefix-red.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .hot70.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .breakingvarsel.is-aske-skin.is-skin > a > .text.t100`
- `.breakingvarsel.hot40.gridspotlightside:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot30.gridtriple.payed > a > .text.t100`
- `.hot80.is-aske-skin.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot40.gridtriple.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.no-image.is-aske-skin.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .hot30.gridspotlightside.life20 > a > .text.t100`

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

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
