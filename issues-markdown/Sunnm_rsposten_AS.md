# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2025-10-18T00:25:57.297Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 7

## Violation Details

### <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements

- **Impact:** serious
- **Description:** Ensure <dl> elements are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/definition-list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1
- **Count:** 2

#### Affected Elements:

- `.Credits:nth-child(2) > dl:nth-child(3)`
- `.Credits:nth-child(2) > dl:nth-child(4)`

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

- `.gridfullsize.hot50.life20 > a > .text.t100 > h3`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 98

#### Affected Elements:

- `.gridfullsize.hot50.life20 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.is-dark-skin.is-skin.life40 > a > .text.t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.opinion.hot50.life40 > a > .text.t100`
- `.breakingvarsel.is-aske-skin.is-skin > a > .text.t100`
- `.hot70.is-dark-skin.life60 > a > .text.t100`
- `.variant-a > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .gridspotlight.card-size-large.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .is-dark-skin-prefix-red.is-skin.life40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(4) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.is-prefix-red-skin.life60.is-skin > a > .text.t100`
- `.breakingvarsel.is-dark-skin.hot50 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(5) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(6) > .hot40.gridtriple.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(7) > .gridtriple.life40.hot60 > a > .text.t100`
- `.life60.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(7) > .hot50.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .is-prefix-red-skin.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .hot60.gridspotlightside.life20 > a > .text.t100`
- `.hot80.is-dark-skin-prefix-red.no-image > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.no-image.life40.hot60 > a > .text.t100`
- `.life60.hot50.gridspotlight > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.breakingvarsel.hot40.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .gridtriple.life40.hot60 > a > .text.t100`
- `.hot80.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(13) > .hot50.gridtriple.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .hot50.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .life40.hot60.gridspotlightside:nth-child(2) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .opinion.life40.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(16) > .gridtriple.life40.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .hot50.life40.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(17) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .is-dark-skin.is-skin.hot40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(18) > .hot30.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.hot30.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .life60.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.no-image.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(21) > .hot40.gridtriple.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .is-aske-skin.is-skin.life40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.hot50.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .opinion.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(24) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(25) > .gridtriple.life40.hot60 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .life60.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .opinion.hot30.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .opinion.life40.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .is-aske-skin.is-skin.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .opinion.hot30.gridtriple > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .hot40.gridtriple.life20:nth-child(2) > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(29) > .hot40.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .hot40.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .no-image.hot40.life40 > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(34) > .hot40.gridtriple.life20 > a > .text.t100`
- `.opinion.hot40.gridtriple > a > .text.t100`
- `.is-dark-skin.no-image.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(35) > .hot40.gridtriple.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot30.life40.gridspotlightside > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(37) > .hot30.gridspotlightside.life20 > a > .text.t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .gridtriple.life40.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .life40.hot60.gridspotlightside > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
- `.hot70.life40.gridspotlightside > a > .text.t100`
- `.AdWithTeaser.grid:nth-child(41) > .hot40.gridtriple.life40 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .gridtriple.life40.hot60 > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(42) > .opinion.hot30.gridtriple > a > .text.t100`
- `a[href$="snoe-i-vente"] > .text.t100`
- `.is-dark-skin-prefix-red.gridspotlight.card-size-large > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot60.gridspotlightside.life20:nth-child(3) > a > .text.t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot60.gridspotlightside.life20:nth-child(4) > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .opinion.life40.hot60 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .is-prefix-red-skin.gridspotlight.card-size-large > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .hot50.gridspotlightside.life20 > a > .text.t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(44) > .no-image.is-aske-skin.is-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot40.gridtriple.life40:nth-child(1) > a > .text.t100`
- `.is-primary-skin > a > .text.t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot40.gridtriple.life20 > a > .text.t100`

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
