# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-08-22T03:15:45.987Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 8

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

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `#dakapo_postopbar`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.bundle-title`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 101

#### Affected Elements:

- `.gridfullsize-bundle > a > .text.t100`
- `.small-items.griddouble.hot60:nth-child(1) > a > .text.t100`
- `a[href$="alt-om-jugend"] > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.life40.gridspotlightside:nth-child(2) > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.life40.gridspotlightside:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .hot60.gridtriple.life40 > a > .text.t100`
- `.hot60.gridtriple.life20 > a > .text.t100`
- `a[href$="spill"] > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .is-dark-skin-prefix-red.hot60.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.life60.hot60.gridspotlightside > a > .text.t100`
- `.breaking.no-image.is-aske-skin > a > .text.t100`
- `.is-prefix-red-skin.life60.is-skin > a > .text.t100`
- `.is-prefix-red-skin.hot60.is-skin > a > .text.t100`
- `.hot70 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.is-dark-skin-prefix-red.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.breaking.hot50.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.hot50.no-image.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.hot80 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(14) > .is-aske-skin.hot60.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .hot50.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .hot60.life40.gridspotlightside > a > .text.t100`
- `.opinion.hot60.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .gridtriple.hot40.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(19) > .hot60.gridtriple.life40 > a > .text.t100`
- `.feature > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(23) > .gridtriple.hot40.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.opinion.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .hot30.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .is-aske-skin.hot30.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .is-aske-skin.is-skin.gridtriple:nth-child(2) > a > .text.t100`
- `.is-dark-skin-prefix-red.is-skin.gridtriple > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .gridtriple.hot40.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.hot40.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .life40.hot40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .hot30.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.is-dark-skin.is-skin.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .no-image.is-aske-skin.hot30 > a > .text.t100`
- `.gridtriple.life40.hot40:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .gridtriple.life40.hot40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot60.gridtriple.life40 > a > .text.t100`
- `.card-size-medium.griddouble.hot30:nth-child(1) > a > .text.t100`
- `.card-size-medium.griddouble.hot30:nth-child(2) > a > .text.t100`
- `.griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `.griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(36) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot30.gridtriple.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot30.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot60.gridtriple.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(39) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.is-dark-skin.hot30.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(39) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(40) > .opinion.hot30.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(41) > .is-aske-skin.hot30.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(43) > .gridtriple.life40.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .hot30.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(44) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .life40.hot40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .hot40.gridspotlightside.life20:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
- `.breakingvarsel.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(47) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(49) > .is-dark-skin-prefix-red.is-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(49) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(49) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`

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

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.breaking-stripe`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
