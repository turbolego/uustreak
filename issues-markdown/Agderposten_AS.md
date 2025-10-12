# WCAG Violations Report for Agderposten AS

**Timestamp:** 2025-10-12T00:25:09.461Z
**URL:** [https://www.agderposten.no/](https://www.agderposten.no/)
**Total Violations:** 6

## Violation Details

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2
- **Count:** 1

#### Affected Elements:

- `#dakapo_postopbar`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.is-primary-skin.is-skin.gridtriple > a > .text.t100 > h3`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 95

#### Affected Elements:

- `.gridfullsize.hot60.life40 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot80.gridspotlightside.life40 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .no-image.is-dark-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .life20.gridspotlightside.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-primary-skin.gridspotlight.card-size-large > a > .text.t100`
- `.is-rosa-skin > a > .text.t100`
- `.is-primary-skin.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(4) > .hot70.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(4) > .gridtriple.hot60.life40:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(5) > .life60.hot70.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(7) > .is-primary-skin.gridspotlight.card-size-large > a > .text.t100`
- `.no-image.is-dark-skin.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(7) > .gridspotlightside.hot60.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .life20.gridspotlightside.hot60:nth-child(1) > a > .text.t100`
- `.life60.opinion.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .no-image.is-aske-skin.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .gridtriple.hot60.life40:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .life20.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .gridtriple.hot60.life40:nth-child(3) > a > .text.t100`
- `.life60.opinion.hot70 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(19) > .hot70.gridtriple.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .life20.gridspotlight.card-size-large > a > .text.t100`
- `.life60.is-primary-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .no-image.is-aske-skin.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(21) > .is-dark-skin.is-skin.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(21) > .gridspotlight.card-size-large.hot70 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(21) > .no-image.is-aske-skin.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(23) > .hot70.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(23) > .is-aske-skin.is-skin.gridtriple:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(23) > .no-image.is-aske-skin.life20 > a > .text.t100`
- `.hot40 > a > .text.t100`
- `.is-aske-skin.is-skin.gridspotlightside:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(24) > .no-image.is-aske-skin.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(25) > .is-aske-skin.life20.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .is-aske-skin.life20.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .life20.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .gridspotlightside.hot60.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .life20.gridtriple.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .gridtriple.hot60.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .hot70.gridtriple.life40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(28) > .hot70.gridtriple.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .opinion.hot50.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .hot80.gridspotlightside.life40 > a > .text.t100`
- `.hot50.life20.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.hot70 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .opinion.hot50.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(31) > .hot70.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot70.gridtriple.life40:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot70.gridtriple.life40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot70.gridtriple.life40:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .is-primary-skin.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .gridspotlightside.hot60.life40:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .gridspotlightside.hot60.life40:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(34) > .is-dark-skin.is-skin.gridtriple > a > .text.t100`
- `.variant-a > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .hot70.gridspotlightside.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .gridtriple.hot60.life40:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .gridtriple.hot60.life40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .hot50.gridtriple.life40 > a > .text.t100`
- `.hot30 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .hot70.gridspotlightside.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .gridspotlightside.hot60.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .is-primary-skin.is-skin.gridspotlightside > a > .text.t100`
- `.opinion.hot50.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .is-dark-skin.is-skin.hot70 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(40) > .is-dark-skin.is-skin.hot70 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .hot50.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .is-dark-skin.is-skin.hot70 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .gridtriple.hot60.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .hot70.gridspotlightside.life40:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .hot70.gridspotlightside.life40:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(43) > .hot70.gridtriple.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .is-dark-skin.is-skin.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .hot70.gridspotlightside.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .gridtriple.hot60.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .life60.hot70.gridtriple > a > .text.t100`
- `.opinion.hot50.gridtriple > a > .text.t100`
- `.hot50.is-aske-skin.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot50.gridspotlightside.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.opinion.hot50.gridspotlightside:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.hot70 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .opinion.hot50.gridspotlightside:nth-child(3) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .is-dark-skin.is-skin.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .gridtriple.hot60.life40:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .hot70.gridtriple.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(49) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(49) > .gridspotlightside.hot60.life40:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(49) > .no-image.is-aske-skin.is-skin > a > .text.t100`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.Layout`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.top`
- `.Layout`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
