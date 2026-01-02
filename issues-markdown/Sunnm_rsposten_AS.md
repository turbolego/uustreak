# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-01-02T00:31:02.894Z
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

- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .life60.gridspotlight.card-size-large > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .breakingvarsel.hot60.is-aske-skin > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot50.life40.gridspotlightside > a > .text.t100`
- `.breakingvarsel.gridspotlight.card-size-large > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .hot80.life60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(2) > .hot60.gridtriple.life20 > a > .text.t100`
- `.is-dark-skin.hot70.life60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.life60.hot40.gridspotlightside > a > .text.t100`
- `.breakingvarsel.no-image.hot60 > a > .text.t100`
- `.hot60.life40.is-aske-skin:nth-child(4) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .life60.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .opinion.gridspotlight.card-size-large > a > .text.t100`
- `.is-dark-skin-prefix-red.hot40.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(6) > .no-image.hot30.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(7) > .hot70.life40.gridtriple > a > .text.t100`
- `.life60.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(8) > .life40.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(8) > .breakingvarsel.hot40.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(9) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.life40.hot40.gridspotlightside > a > .text.t100`
- `.hot80.life60.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(9) > .no-image.hot40.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .breakingvarsel.hot40.is-aske-skin > a > .text.t100`
- `.is-dark-skin-prefix-red.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .no-image.hot60.is-aske-skin > a > .text.t100`
- `.is-prefix-red-skin.hot80.life60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .is-dark-skin-prefix-red.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .hot70.life40.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.is-prefix-red-skin.breakingvarsel.hot60 > a > .text.t100`
- `.hot50.no-image.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(17) > .hot30.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .hot30.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .opinion.gridspotlight.card-size-large > a > .text.t100`
- `.breaking > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(19) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .opinion.hot30.life40 > a > .text.t100`
- `.opinion.hot30.gridtriple:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot60.is-aske-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .hot30.is-aske-skin.is-skin:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .no-image.hot30.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .hot30.gridspotlightside.life20:nth-child(4) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(23) > .hot30.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .no-image.hot30.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.is-dark-skin-prefix-red.hot30.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(26) > .hot60.gridtriple.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(27) > .is-dark-skin-prefix-red.hot60.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.opinion.hot30.gridspotlightside:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .opinion.hot30.gridspotlightside:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .hot80.life60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .opinion.hot30.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(29) > .no-image.hot40.is-aske-skin > a > .text.t100`
- `.hot50.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(31) > .no-image.hot30.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(31) > .hot40.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .hot30.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .hot40.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .hot40.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(36) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .life40.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot60.is-aske-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot60.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(39) > .life60.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(39) > .no-image.hot40.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(39) > .hot40.is-aske-skin.is-skin:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(39) > .hot60.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(41) > .hot70.life40.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.hot90 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .hot60.life40.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .hot40.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .hot40.is-aske-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .hot50.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .hot30.is-aske-skin.is-skin > a > .text.t100`
- `.is-dark-skin.life60.hot30 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot70.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .no-image.hot40.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .hot40.is-aske-skin.gridtriple > a > .text.t100`
- `.hot40.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .life40.hot40.gridtriple > a > .text.t100`

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
