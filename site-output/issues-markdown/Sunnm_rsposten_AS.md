# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-07-01T11:09:50.371Z
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
- **Count:** 98

#### Affected Elements:

- `.breakingvarsel.is-aske-skin.gridfullsize > a > .text.t100`
- `.hot80 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.variant-a.life40.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot40.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .is-dark-skin.is-skin.hot40 > a > .text.t100`
- `.hot70.life60.is-dark-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot50.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .is-dark-skin.is-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .life40.hot40.gridspotlightside > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.breaking > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .breakingvarsel.is-aske-skin.is-skin > a > .text.t100`
- `.no-image.is-aske-skin.hot50 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .hot40.gridtriple.life20 > a > .text.t100`
- `a[href$="spill"] > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot50.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot50.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .life40.hot40.gridspotlightside > a > .text.t100`
- `.life40.hot40.gridtriple > a > .text.t100`
- `.opinion.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .life40.hot60.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.hot70.variant-a.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .life40.hot40.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(17) > .hot40.gridtriple.life20 > a > .text.t100`
- `.breakingvarsel.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .opinion.hot30.gridtriple:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .opinion.hot30.gridtriple:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .hot50.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .hot50.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .hot50.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.breakingvarsel.no-image.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(23) > .hot40.gridtriple.life20 > a > .text.t100`
- `.card-size-mega > a > .text.t100`
- `.variant-b > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot50.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot50.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .hot30.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .hot30.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .hot30.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot50.gridtriple.life20 > a > .text.t100`
- `.is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot60.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .hot30.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .opinion.hot30.gridtriple > a > .text.t100`
- `.hot30.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .hot60.gridtriple.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(36) > .opinion.hot30.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.opinion.hot30.gridspotlightside:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .opinion.hot30.gridspotlightside:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .hot40.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.variant-a.hot50.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.no-image.is-dark-skin.is-skin > a > .text.t100`
- `.is-worldcup-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .hot40.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.is-aske-skin.is-skin.hot40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .is-aske-skin.is-skin.hot40:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .is-dark-skin.is-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.hot30.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(44) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .life40.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(46) > .is-dark-skin.is-skin.hot60 > a > .text.t100`
- `.is-primary-skin.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.is-primary-skin.is-skin.life40:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.is-dark-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .life40.hot60.gridtriple:nth-child(1) > a > .text.t100`
- `.life40.hot60.gridtriple:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(49) > .is-aske-skin.is-skin.hot40 > a > .text.t100`

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
