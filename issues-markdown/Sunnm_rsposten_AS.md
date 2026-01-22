# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-01-22T00:38:35.627Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 8

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

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `#dakapo_postopbar`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.gridfullsize.life40.hot60 > a > .text.t100 > h3`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 98

#### Affected Elements:

- `.gridfullsize.life40.hot60 > a > .text.t100`
- `.breakingvarsel > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot60.payed:nth-child(3) > a > .text.t100`
- `.is-dark-skin.is-skin.life40:nth-child(4) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .life40.gridspotlightside.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.hot70 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot60.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(3) > .life40.gridtriple.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.breaking > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .gridspotlightside.hot60.payed > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.life60.gridspotlightside.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(7) > .life40.gridspotlightside.hot60 > a > .text.t100`
- `.life60.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .gridtriple.hot60.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(9) > .hot40.gridtriple.life20 > a > .text.t100`
- `.hot80.life60.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .life40.gridspotlightside.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlightside.hot60.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .hot40.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlightside.hot60.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .gridtriple.hot60.payed:nth-child(1) > a > .text.t100`
- `.opinion.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(15) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot50.gridspotlightside.payed:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(17) > .hot50.gridspotlightside.payed:nth-child(3) > a > .text.t100`
- `.is-prefix-red-skin > a > .text.t100`
- `.hot50.opinion.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .opinion.life40.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(21) > .hot30.opinion.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(21) > .gridtriple.hot60.life20 > a > .text.t100`
- `.hot30.life40.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .hot40.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(24) > .hot40.gridtriple.payed > a > .text.t100`
- `.hot50.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .gridspotlightside.hot60.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .life40.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .gridtriple.hot60.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .gridtriple.hot60.life20:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(28) > .gridtriple.hot60.payed > a > .text.t100`
- `.is-aske-skin.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .hot50.gridspotlightside.payed:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .hot50.gridspotlightside.payed:nth-child(3) > a > .text.t100`
- `a[href$="11-ble-tatt"] > .text.t100`
- `.hot30.opinion.gridspotlightside:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.hot30.opinion.gridspotlightside:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .gridtriple.hot60.payed:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .life40.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot30.opinion.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .hot40.gridspotlightside.life20:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .hot40.gridspotlightside.life20:nth-child(4) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .opinion.life40.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .life40.hot40.gridspotlightside:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(37) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .hot40.gridtriple.payed:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .life40.hot40.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(38) > .is-aske-skin.is-skin.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .opinion.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .hot40.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(42) > .hot30.opinion.gridtriple > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .is-dark-skin.is-skin.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .gridspotlightside.hot60.payed > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(44) > .hot40.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot30.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .is-dark-skin.is-skin.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlightside.hot60.payed:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .is-aske-skin.is-skin.gridspotlightside:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot30.gridspotlightside.payed > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.hot50.gridtriple.payed > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .gridtriple.hot60.payed > a > .text.t100`
- `.hot50.gridtriple.life20:nth-child(3) > a > .text.t100`

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
