# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2026-05-11T00:51:40.809Z
**URL:** [https://www.adressa.no/](https://www.adressa.no/)
**Total Violations:** 9

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

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 22

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
- **Count:** 102

#### Affected Elements:

- `.gridfullsize.life20.hot60 > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot50.life40 > a > .t100`
- `.variant-a.is-rbk-skin.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-section-sport-skin.life20.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .life60.gridspotlightside.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .hot70.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .hot60.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .hot50.gridtriple.life40 > a > .t100`
- `.gridfullsize-bundle > a > .t100`
- `.small-items.griddouble.is-rbk-skin:nth-child(1) > a > .t100`
- `.small-items.griddouble.is-rbk-skin:nth-child(2) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .is-section-kultur-skin.grade.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(6) > .life20.gridspotlightside.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(8) > .gridspotlightside.hot60.life40 > a > .t100`
- `.is-section-trdby-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(8) > .grade.gridspotlightside.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(10) > .hot70.is-section-kultur-skin.is-skin > a > .t100`
- `.grade.hot60.gridtriple > a > .t100`
- `.is-section-sport-skin.life20.hot60 > a > .t100`
- `.is-section-sport-skin.hot70.gridspotlight > a > .t100`
- `.life20.gridspotlightside.hot50:nth-child(2) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(13) > .no-image.life20.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(13) > .is-section-kultur-skin.grade.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(14) > .opinion.is-section-meninger-skin.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(14) > .life20.hot50.gridtriple:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(14) > .no-image.life20.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(17) > .is-section-mn24-skin.life20.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(17) > .hot60.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(17) > .hot50.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(18) > .grade.hot50.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(18) > .life20.hot50.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(18) > .life60.hot50.gridtriple > a > .t100`
- `.no-image.life20.gridspotlightside:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .is-section-sport-skin.life20.gridspotlightside > a > .t100`
- `.no-image.life20.gridspotlightside:nth-child(4) > a > .t100`
- `.is-section-mn24-skin.life20.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.hot40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .is-section-kultur-skin.grade.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(25) > .is-section-sport-skin.hot60.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(25) > .hot70.life60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(25) > .life20.hot60.gridtriple > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .gridspotlightside.hot50.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.is-section-trdby-skin.life60.gridspotlightside > a > .t100`
- `.hot70.is-section-kultur-skin.gridspotlight > a > .t100`
- `.opinion.is-section-meninger-skin.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .is-section-kultur-skin.gridspotlightside.hot60 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(29) > .hot60.gridtriple.life40 > a > .t100`
- `.is-section-kultur-skin.life20.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(31) > .hot70.life60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(31) > .hot50.gridtriple.life40 > a > .t100`
- `.AdWithTeaser.grid:nth-child(32) > .opinion.is-section-meninger-skin.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .is-section-kultur-skin.grade.life60 > a > .t100`
- `.is-rbk-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .gridspotlightside.hot50.life40 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(35) > .hot60.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.life60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .gridspotlightside.hot50.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .life60.gridspotlightside.hot50 > a > .t100`
- `.variant-a.life60.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(38) > .hot60.gridtriple.life40:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(38) > .is-section-sport-skin.hot60.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(38) > .is-rbk-skin.hot60.is-skin > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .is-rbk-skin.hot60.is-skin > a > .t100`
- `.tip > a > .t100`
- `.opinion.is-section-meninger-skin.gridspotlight > a > .t100`
- `.is-section-sport-skin.gridspotlightside.hot60 > a > .t100`
- `.AdWithTeaser.grid:nth-child(41) > .hot50.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .is-section-trdby-skin.gridspotlightside.is-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .is-section-kultur-skin.gridspotlightside.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(43) > .is-section-kultur-skin.hot60.is-skin > a > .t100`
- `.life60.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(43) > .is-section-kultur-skin.grade.is-skin > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(44) > .hot60.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot50.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(45) > .life60.hot50.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot60.gridtriple.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .is-section-kultur-skin.grade.life60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .is-section-sport-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .gridspotlightside.hot60.life40 > a > .t100`
- `.AdWithTeaser.grid:nth-child(47) > .hot50.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(48) > .hot50.gridtriple.life40:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(48) > .is-section-trdby-skin.is-skin.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(48) > .is-rbk-skin.is-skin.hot50 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(49) > .hot50.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(51) > .gridspotlight.card-size-large.life60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(51) > .life60.gridspotlightside.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(51) > .is-section-kultur-skin.life60.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(52) > .life60.gridspotlightside.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(52) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(52) > .is-section-trdby-skin.gridspotlightside.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(53) > .life60.hot50.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(53) > .hot50.gridtriple.life40:nth-child(2) > a > .t100`
- `.variant-a.is-section-trdby-skin.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(54) > .variant-a.hot50.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(54) > .life60.hot50.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(54) > .is-section-trdby-skin.is-skin.hot50 > a > .t100`

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
