# WCAG Violations Report for Agderposten AS

**Timestamp:** 2025-10-20T00:24:18.247Z
**URL:** [https://www.agderposten.no/](https://www.agderposten.no/)
**Total Violations:** 7

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

- `.is-dark-skin.life20.is-skin > a > .text.t100 > h4`

### Aside should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the complementary landmark or aside is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-complementary-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.tip.no-image.is-aske-skin > .teaserasides`
- `.ThreeTeasers.grid:nth-child(45) > .tip.gridtriple.hot70 > .teaserasides`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 99

#### Affected Elements:

- `.gridfullsize.hot60.card-size-small > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.hot70 > a > .text.t100`
- `.variant-a > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot50.gridspotlightside.card-size-small > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot70.card-size-small > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-dark-skin.no-image.is-skin > a > .text.t100`
- `.is-dark-skin.life20.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(4) > .life20.hot60.gridtriple:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(4) > .life20.hot60.gridtriple:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(5) > .is-dark-skin.is-skin.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(7) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(7) > .life20.is-aske-skin.is-skin:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(7) > .no-image.life20.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .life20.gridspotlightside.hot70 > a > .text.t100`
- `.variant-b.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .gridspotlightside.hot70.card-size-small:nth-child(3) > a > .text.t100`
- `.hot60.gridtriple.card-size-small:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .life20.is-aske-skin.is-skin > a > .text.t100`
- `.is-primary-skin.life20.is-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(14) > .gridtriple.hot70.card-size-small > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(19) > .hot60.gridtriple.card-size-small > a > .text.t100`
- `.griddouble.no-image.is-aske-skin:nth-child(1) > a > .text.t100`
- `.griddouble.no-image.hot50 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .no-image.life20.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .is-aske-skin.is-skin.gridspotlightside:nth-child(3) > a > .text.t100`
- `.life60.opinion.gridtriple:nth-child(1) > a > .text.t100`
- `.life60.opinion.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(23) > .gridtriple.hot70.card-size-small:nth-child(3) > a > .text.t100`
- `.hot40.gridspotlightside.card-size-small > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .gridspotlight.card-size-large.hot70 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(24) > .opinion.hot50.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(25) > .gridtriple.hot70.card-size-small > a > .text.t100`
- `.life60.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .gridspotlightside.hot60.card-size-small:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .gridtriple.hot70.card-size-small:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(27) > .gridtriple.hot70.card-size-small:nth-child(2) > a > .text.t100`
- `.life20.hot50.gridtriple > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(28) > .gridtriple.hot70.card-size-small > a > .text.t100`
- `.griddouble.is-dark-skin.no-image > a > .text.t100`
- `.griddouble.no-image.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .gridspotlightside.hot60.card-size-small > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .gridspotlightside.hot70.card-size-small > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(31) > .gridtriple.hot70.card-size-small > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .gridtriple.hot70.card-size-small:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(32) > .hot60.gridtriple.card-size-small > a > .text.t100`
- `.tip.no-image.is-aske-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .is-dark-skin.hot50.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .no-image.life20.is-aske-skin > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(34) > .life20.is-aske-skin.is-skin > a > .text.t100`
- `.opinion.no-image.hot50 > a > .text.t100`
- `.is-primary-skin.hot50.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .gridspotlightside.hot70.card-size-small > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .gridtriple.hot70.card-size-small:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .gridtriple.hot70.card-size-small:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(36) > .gridtriple.hot70.card-size-small:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(37) > .gridtriple.hot70.card-size-small > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .gridspotlight.card-size-large.hot70 > a > .text.t100`
- `.is-gul-skin > a > .text.t100`
- `.variant-b.no-image.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .gridspotlightside.hot60.card-size-small:nth-child(1) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(39) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(40) > .hot60.gridtriple.card-size-small > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .gridtriple.hot70.card-size-small:nth-child(1) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(41) > .gridtriple.hot70.card-size-small:nth-child(2) > a > .text.t100`
- `.hot40.opinion.gridtriple > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .is-aske-skin.is-skin.gridspotlightside:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .is-aske-skin.is-skin.gridspotlightside:nth-child(3) > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(43) > .gridtriple.hot70.card-size-small > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .gridspotlightside.hot70.card-size-small > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .is-dark-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .hot50.gridspotlightside.card-size-small > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .tip.gridtriple.hot70 > a > .text.t100`
- `.opinion.hot50.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.opinion.hot50.gridspotlight > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .is-dark-skin.hot50.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .is-dark-skin.is-skin.gridspotlightside:nth-child(3) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .is-dark-skin.is-skin.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .opinion.hot50.gridspotlightside > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .hot50.gridtriple.card-size-small > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .gridtriple.hot70.card-size-small > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(48) > .hot60.gridtriple.card-size-small > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(49) > .gridspotlight.card-size-large.hot70 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(49) > .gridspotlightside.hot60.card-size-small > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(49) > .gridspotlightside.hot70.card-size-small > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(50) > .gridspotlightside.hot60.card-size-small > a > .text.t100`
- `.is-dark-skin.hot50.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(50) > .gridspotlightside.hot70.card-size-small > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(51) > .gridtriple.hot70.card-size-small > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(51) > .hot60.gridtriple.card-size-small:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(51) > .hot60.gridtriple.card-size-small:nth-child(3) > a > .text.t100`

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
