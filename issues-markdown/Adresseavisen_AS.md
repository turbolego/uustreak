# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2026-01-17T00:27:26.059Z
**URL:** [https://www.adressa.no/](https://www.adressa.no/)
**Total Violations:** 10

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- `.disabled`
- `.right`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.Abobutton`

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

- `.hot70.gridspotlightside.life20 > a > .t100 > h3`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 24

#### Affected Elements:

- `.center.no-padding.table-cell:nth-child(2) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(2) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(3) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(3) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(4) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(4) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(5) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(5) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(6) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(6) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(7) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(7) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(8) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(8) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(9) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(9) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(10) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(10) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(11) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(11) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(12) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(12) > .fade-image.icon > .on`
- `.center.no-padding.table-cell:nth-child(13) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(13) > .fade-image.icon > .on`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 105

#### Affected Elements:

- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlightside.life40 > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot50.life20 > a > .t100`
- `.hot70.gridspotlightside.life20 > a > .t100`
- `.hot80.is-section-kultur-skin.grade > a > .t100`
- `.hot80.gridspotlightside.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .no-image.gridspotlightside.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .is-section-mn24-skin.is-skin.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .hot70.gridtriple.life40 > a > .t100`
- `.hot70.gridtriple.life20 > a > .t100`
- `.gridfullsize-bundle.hot70.card-size-large > a > .t100`
- `.small-items.hot60.gridtriple > a > .t100`
- `.small-items.is-section-meninger-skin.opinion > a > .t100`
- `.small-items.hot70.gridtriple:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot70.gridspotlightside.life40 > a > .t100`
- `.grade.hot60.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(8) > .hot60.gridspotlightside.life40 > a > .t100`
- `.is-rbk-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(8) > .gridspotlightside.hot50.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(10) > .hot70.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(10) > .hot60.gridtriple.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(10) > .hot50.gridtriple.life20 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(13) > .grade.life60.gridspotlight > a > .t100`
- `.life60.gridspotlightside.hot50 > a > .t100`
- `.hot80.gridspotlightside.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(14) > .hot60.gridspotlightside.life40:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(14) > .is-section-kultur-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(14) > .hot60.gridspotlightside.life40:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(14) > .no-image.gridspotlightside.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(17) > .hot60.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(17) > .hot70.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(17) > .hot50.gridtriple.life20 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(18) > .is-section-sport-skin.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(18) > .gridspotlightside.hot50.life20 > a > .t100`
- `.opinion.hot70.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .is-section-meninger-skin.opinion.is-skin > a > .t100`
- `.gridfullsize-bundle.hot80.card-size-large > a > .t100`
- `.griddouble.small-items.hot70 > a > .t100`
- `.griddouble.small-items.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .gridspotlightside.hot50.life40 > a > .t100`
- `.is-rbk-skin.is-skin.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(22) > .hot50.gridtriple.life20:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(22) > .is-section-meninger-skin.opinion.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(22) > .is-section-mn24-skin.is-skin.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .is-section-meninger-skin.opinion.is-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .hot70.gridspotlightside.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .gridspotlightside.hot50.life20:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .hot80.life60.gridspotlight > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .gridspotlightside.hot50.life20:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .no-image.gridspotlightside.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(28) > .hot50.gridtriple.life20:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(28) > .hot50.gridtriple.life20:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(28) > .is-section-meninger-skin.opinion.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(29) > .is-section-sport-skin.is-skin.hot50 > a > .t100`
- `.no-image.hot50.gridtriple > a > .t100`
- `.is-section-sport-skin.life60.hot70 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(31) > .is-section-trdby-skin.is-skin.hot50 > a > .t100`
- `.hot70.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .gridspotlightside.hot50.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(32) > .no-image.gridspotlightside.hot50 > a > .t100`
- `.is-section-trdby-skin.is-skin.gridspotlightside > a > .t100`
- `.hot40.is-section-kultur-skin.is-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(35) > .hot60.gridspotlightside.life40 > a > .t100`
- `.life60.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(37) > .hot60.gridtriple.life40:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(37) > .is-section-kultur-skin.is-skin.hot60 > a > .t100`
- `.hot30.gridtriple.life20 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(38) > .opinion.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(39) > .is-section-meninger-skin.opinion.is-skin:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(39) > .hot50.gridtriple.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(39) > .is-section-meninger-skin.opinion.is-skin:nth-child(3) > a > .t100`
- `.hot40.gridtriple.life20 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(41) > .life60.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(41) > .is-section-meninger-skin.opinion.is-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(41) > .gridspotlightside.hot50.life20:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(42) > .life60.hot50.gridtriple > a > .t100`
- `.is-section-sport-skin.is-skin.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .is-section-kultur-skin.gridspotlight.card-size-large > a > .t100`
- `.is-section-mn24-skin.is-skin.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(44) > .is-section-mn24-skin.is-skin.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(44) > .is-section-meninger-skin.opinion.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(44) > .hot60.gridtriple.life40 > a > .t100`
- `.AdWithTeaser.grid:nth-child(45) > .is-rbk-skin.is-skin.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .hot60.gridspotlightside.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlightside.hot50.life20 > a > .t100`
- `.hot30.no-image.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .hot60.gridspotlightside.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .is-section-mn24-skin.is-skin.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .no-image.gridspotlightside.hot50 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(48) > .hot50.gridtriple.life20 > a > .t100`
- `.AdWithTeaser.grid:nth-child(50) > .hot50.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(51) > .is-section-trdby-skin.is-skin.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(51) > .life60.hot50.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(51) > .hot60.gridtriple.life40 > a > .t100`
- `.h-low > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(52) > .is-section-kultur-skin.life60.is-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(52) > .hot60.gridspotlightside.life40 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(53) > .hot60.gridtriple.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(54) > .hot60.gridspotlightside.life40:nth-child(1) > a > .t100`
- `.is-section-sport-skin.life60.gridspotlight > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(54) > .hot60.gridspotlightside.life40:nth-child(3) > a > .t100`

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

### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1, RGAAv4, RGAA-10.6.1
- **Count:** 6

#### Affected Elements:

- `a:nth-child(5)`
- `section:nth-child(4) > div > div > .Tips > dl > dd > a[href="tel:46407200"]`
- `div > div > p > a:nth-child(1)`
- `p > a:nth-child(2)`
- `a[href$="medietilsynet.no/"]`
- `p > a:nth-child(4)`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
