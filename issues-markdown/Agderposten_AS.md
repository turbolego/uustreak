# WCAG Violations Report for Agderposten AS

**Timestamp:** 2026-01-22T00:30:40.309Z
**URL:** [https://www.agderposten.no/](https://www.agderposten.no/)
**Total Violations:** 6

## Violation Details

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

- `.is-rosa-skin > a > .text.t100 > h3`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 98

#### Affected Elements:

- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-aske-skin.gridspotlight.card-size-large > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot60.life40:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot60.life40:nth-child(1) > a > .text.t100`
- `.hot50.is-aske-skin.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-dark-skin.is-skin.gridspotlightside > a > .text.t100`
- `.is-rosa-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(4) > .hot50.is-aske-skin.is-skin > a > .text.t100`
- `.gridtriple.hot60.life40:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(5) > .gridtriple.hot60.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .is-dark-skin.hot70.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .hot70.gridspotlightside.life40:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .gridspotlightside.hot60.life40:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .no-image.gridspotlightside.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(12) > .life20.gridtriple.hot60:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(12) > .gridtriple.hot60.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(12) > .life20.gridtriple.hot60:nth-child(3) > a > .text.t100`
- `.hot80.life60.gridtriple > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(16) > .gridtriple.hot60.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(18) > .gridspotlight.card-size-large.hot70 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(18) > .gridspotlightside.hot60.life40:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(18) > .gridspotlightside.hot60.life40:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .gridspotlightside.hot60.life40:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .opinion.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
- `.life60.hot70.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(21) > .is-aske-skin.is-skin.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(21) > .life20.gridtriple.hot60:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .gridspotlight.card-size-large.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .is-dark-skin.no-image.hot70 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(23) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .opinion.hot50.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .gridspotlight.card-size-large.life20 > a > .text.t100`
- `.opinion.hot50.no-image > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(26) > .is-dark-skin.hot70.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .is-aske-skin.hot70.is-skin > a > .text.t100`
- `.opinion.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot70.gridtriple.life40:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .is-aske-skin.hot70.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .hot30.no-image.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(29) > .hot70.gridtriple.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .hot70.gridspotlightside.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .no-image.gridspotlightside.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(31) > .is-aske-skin.is-skin.life20:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(31) > .is-aske-skin.is-skin.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(31) > .opinion.hot50.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(32) > .life20.gridtriple.hot60 > a > .text.t100`
- `.hot30.griddouble.no-image > a > .text.t100`
- `.griddouble.opinion.no-image > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(34) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(34) > .gridspotlightside.hot60.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(34) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(35) > .life20.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .hot70.gridtriple.life40 > a > .text.t100`
- `.hot50.no-image.is-aske-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .hot50.life20.gridtriple:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .gridspotlightside.hot60.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .opinion.hot50.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(38) > .is-dark-skin.is-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(39) > .gridspotlight.card-size-large.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(39) > .hot50.life20.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(39) > .life20.gridspotlightside.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .hot70.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .opinion.hot50.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(40) > .life20.gridtriple.hot60 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(41) > .hot70.gridtriple.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .hot70.gridspotlightside.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot40 > a > .text.t100`
- `.opinion.hot50.gridspotlight > a > .text.t100`
- `.opinion.hot70.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .is-dark-skin.no-image.hot70 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(44) > .hot70.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot70.gridtriple.life40:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot70.gridtriple.life40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot70.gridtriple.life40:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .is-aske-skin.hot70.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .opinion.no-image.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .opinion.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .gridspotlightside.hot60.life40:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(47) > .gridspotlightside.hot60.life40:nth-child(3) > a > .text.t100`
- `a[href$="brann-i-bil"] > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .is-aske-skin.is-skin.gridtriple:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .hot70.gridtriple.life40:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(49) > .is-dark-skin.no-image.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(49) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot80.life60.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(50) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(50) > .gridspotlightside.hot60.life40 > a > .text.t100`
- `.hot80.gridspotlightside.life40 > a > .text.t100`
- `.card-size-medium.griddouble.hot50 > a > .text.t100`
- `.card-size-medium.griddouble.hot60 > a > .text.t100`

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
