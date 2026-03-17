# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-03-17T00:35:12.155Z
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

### Aside should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the complementary landmark or aside is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-complementary-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.teaserasides`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 103

#### Affected Elements:

- `.tip > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.is-dark-skin-prefix-red.breakingvarsel.hot70 > a > .text.t100`
- `.hot50.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.hot80.gridfullsize-bundle.card-size-large > a > .text.t100`
- `.small-items.gridfullsize.hot40 > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.hot70.life40.gridtriple > a > .text.t100`
- `.is-dark-skin.hot70.life60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot60.gridtriple.life20 > a > .text.t100`
- `.gridfullsize-bundle.hot50.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .complex-subteasers-wrapper.gridfullsize.grid > .small-items.griddouble.hot50 > a > .text.t100`
- `.small-items.breakingvarsel.griddouble > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot30.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.gridfullsize-bundle.hot70.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .complex-subteasers-wrapper.gridfullsize.grid > .small-items.griddouble.hot50:nth-child(1) > a > .text.t100`
- `.small-items.griddouble.hot50:nth-child(2) > a > .text.t100`
- `.life60.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .no-image.is-aske-skin.hot60 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(8) > .hot60.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot60.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .life60.hot60.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .no-image.is-aske-skin.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.hot80.gridspotlight.card-size-large > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `a[href$="tildelt-pris"] > .text.t100`
- `.is-dark-skin.breakingvarsel.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .opinion.life40.gridtriple > a > .text.t100`
- `.life60.gridspotlight.card-size-large > a > .text.t100`
- `.hot70.life60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(17) > .gridtriple.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.is-dark-skin-prefix-red.hot60.is-skin > a > .text.t100`
- `.opinion.hot30.gridtriple:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .opinion.hot30.gridtriple:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(22) > .hot30.gridtriple.life20 > a > .text.t100`
- `.is-prefix-red-skin.breakingvarsel.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .life40.hot40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(23) > .no-image.is-aske-skin.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .gridtriple.hot40.life20 > a > .text.t100`
- `.is-prefix-red-skin.life60.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(25) > .opinion.life40.gridtriple > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(26) > .gridtriple.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(27) > .hot40.gridspotlightside.life20:nth-child(4) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .life40.hot40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.TwoTeasers.grid:nth-child(30) > .griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `.breakingvarsel.griddouble.no-image > a > .text.t100`
- `.variant-a > a > .text.t100`
- `.breaking > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(31) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(34) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(34) > .hot30.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(34) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(34) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(35) > .life40.gridtriple.hot40 > a > .text.t100`
- `.TwoTeasers.grid:nth-child(36) > .griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `.griddouble.no-image.hot30 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .life40.gridtriple.hot40:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .is-dark-skin-prefix-red.is-skin.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(40) > .hot70.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .hot30.is-aske-skin.is-skin > a > .text.t100`
- `.breakingvarsel.hot50.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(42) > .hot60.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot70.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .is-dark-skin.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .opinion.hot30.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .life40.hot40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .opinion.hot30.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .no-image.hot30.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .life40.gridtriple.hot40:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .opinion.life40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .life40.gridtriple.hot40:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .hot60.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.opinion.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .hot60.gridspotlightside.life20:nth-child(3) > a > .text.t100`

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
