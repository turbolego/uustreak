# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-10-04T05:05:39.677Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 5

## Violation Details

### <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements

- **Impact:** serious
- **Description:** Ensure <dl> elements are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/definition-list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.3
- **Count:** 2

#### Affected Elements:

- `.Credits:nth-child(2) > dl:nth-child(3)`
- `.Credits:nth-child(2) > dl:nth-child(4)`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 98

#### Affected Elements:

- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-aske-skin.gridspotlight.card-size-large > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot20.gridspotlightside.life20 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .life40.hot60.gridspotlightside > a > .text.t100`
- `.hot80 > a > .text.t100`
- `.hot20.liveblog.timeline > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .life40.gridtriple.hot40 > a > .text.t100`
- `.hot90 > a > .text.t100`
- `.hot70.life60.is-dark-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(5) > .hot70.gridspotlight.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(5) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(7) > .gridspotlight.life40.card-size-large > a > .text.t100`
- `.is-dark-skin-prefix-red.breakingvarsel.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(7) > .hot60.gridspotlightside.payed:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .gridtriple.hot40.payed > a > .text.t100`
- `.life60.gridtriple.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot50.life40.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .breakingvarsel.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.breakingvarsel > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.hot50.is-aske-skin.gridspotlight > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(13) > .hot60.gridspotlightside.payed:nth-child(3) > a > .text.t100`
- `.hot20.no-image.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot60.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .hot50.life40.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .breakingvarsel.hot40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .hot70.gridspotlight.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.is-dark-skin.life40.breakingvarsel > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(19) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.breakingvarsel.hot40.gridspotlightside:nth-child(2) > a > .text.t100`
- `a[href$="tabbens-aften"] > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot50.gridtriple.payed > a > .text.t100`
- `.opinion.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .gridtriple.hot40.payed > a > .text.t100`
- `.no-image.is-aske-skin.is-skin:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .is-aske-skin.breakingvarsel.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .no-image.is-aske-skin.is-skin:nth-child(4) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(24) > .opinion.gridtriple.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.no-image.life40.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.feature > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .no-image.gridtriple.hot40 > a > .text.t100`
- `.hot70.is-dark-skin.breakingvarsel > a > .text.t100`
- `.liveblog.timeline.hot30 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .hot30.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.is-dark-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.no-image.is-aske-skin.breakingvarsel > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.card-size-mega.is-dark-skin-prefix-red.hot50 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(33) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(33) > .breakingvarsel.gridtriple.hot40 > a > .text.t100`
- `.hot50.is-aske-skin.breakingvarsel > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(36) > .hot50.gridtriple.payed > a > .text.t100`
- `.opinion.hot50.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.liveblog.timeline.hot50 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .hot40.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(41) > .gridtriple.hot40.life20 > a > .text.t100`
- `.breakingvarsel.gridtriple.hot40:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .is-dark-skin.breakingvarsel.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .breakingvarsel.hot40.gridspotlightside > a > .text.t100`
- `.no-image.hot30.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .hot30.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.is-dark-skin.no-image.hot30 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot60.gridtriple.payed:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .opinion.hot30.gridtriple > a > .text.t100`
- `.hot60.gridtriple.payed:nth-child(3) > a > .text.t100`
- `.hot30.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .is-dark-skin.hot60.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .no-image.hot30.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .gridtriple.hot40.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .opinion.hot30.gridtriple > a > .text.t100`
- `.is-aske-skin.life40.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(50) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(50) > .life40.hot60.gridspotlightside:nth-child(3) > a > .text.t100`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.Layout`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.top`
- `.Layout`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
