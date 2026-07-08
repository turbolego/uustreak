# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-07-08T03:29:00.846Z
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
- **Count:** 98

#### Affected Elements:

- `.breakingvarsel > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.life40.gridspotlightside > a > .text.t100`
- `.hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.is-dark-skin.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .life60.hot70.is-dark-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot60.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .is-dark-skin.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .is-aske-skin.hot40.is-skin:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .is-dark-skin.no-image.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot60.life40.gridspotlightside > a > .text.t100`
- `a[href$="spill"] > .text.t100`
- `.TwoTeasers.grid:nth-child(9) > .griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `a[href$="bil-mot-mc"] > .text.t100`
- `.life60.hot70.gridtriple:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(10) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(10) > .life60.hot70.is-dark-skin > a > .text.t100`
- `.gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.hot50.opinion.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(12) > .is-aske-skin.hot40.is-skin:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(14) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(14) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(14) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(16) > .gridtriple.hot60.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(16) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(16) > .is-aske-skin.gridtriple.hot40 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(17) > .gridtriple.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(18) > .is-dark-skin.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(18) > .is-aske-skin.hot40.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(18) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .hot30.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(22) > .gridtriple.hot60.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(22) > .hot50.gridtriple.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(23) > .gridtriple.hot60.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.opinion.hot30.gridspotlightside:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .opinion.hot30.gridspotlightside:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .is-aske-skin.hot40.is-skin > a > .text.t100`
- `.is-prefix-red-skin.hot70.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .gridtriple.hot60.life40 > a > .text.t100`
- `.opinion.gridtriple.hot60 > a > .text.t100`
- `.hot50.is-aske-skin.gridtriple > a > .text.t100`
- `.gridtriple.hot60.life40:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .is-aske-skin.hot40.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.opinion.life40.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(32) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(32) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(33) > .is-aske-skin.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(33) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(33) > .is-aske-skin.gridtriple.hot40:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .hot40.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.is-aske-skin.gridtriple.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .opinion.hot30.gridspotlightside:nth-child(1) > a > .text.t100`
- `.hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .opinion.hot30.gridspotlightside:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .is-dark-skin.no-image.hot40 > a > .text.t100`
- `.griddouble.hot50.no-image > a > .text.t100`
- `.TwoTeasers.grid:nth-child(39) > .griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.is-prefix-red-skin.hot50.gridtriple > a > .text.t100`
- `.is-prefix-red-skin.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .gridtriple.hot40.life20 > a > .text.t100`
- `.hot80 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .is-aske-skin.gridtriple.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.is-aske-skin.hot60.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .hot70.is-aske-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot70.life40.gridspotlightside:nth-child(3) > a > .text.t100`
- `.hot70.life40.gridspotlightside:nth-child(4) > a > .text.t100`
- `.hot30.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot50.gridtriple.life20 > a > .text.t100`
- `.no-image.is-aske-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .hot40.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .no-image.is-aske-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .hot70.is-aske-skin.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .is-dark-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .is-aske-skin.hot40.is-skin:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .no-image.is-aske-skin.hot40 > a > .text.t100`

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
