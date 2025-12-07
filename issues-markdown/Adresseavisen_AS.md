# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2025-12-07T00:26:54.991Z
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
- **Count:** 99

#### Affected Elements:

- `.gridfullsize.card-size-large.hot60 > a > .t100`
- `.is-rbk-skin > a > .t100`
- `.is-section-mn24-skin.hot70.life20 > a > .t100`
- `.Bundles:nth-child(1) > .ThreeTeasers.grid > .hot60.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.is-section-sport-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(1) > .life20.gridspotlightside.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(1) > .opinion.is-section-sport-skin.gridspotlightside > a > .t100`
- `.life60.hot60.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(4) > .is-section-kultur-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(4) > .hot60.gridspotlightside.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(4) > .no-image.life20.gridspotlightside > a > .t100`
- `.hot70.life60.is-section-sport-skin > a > .t100`
- `.grade.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(6) > .hot60.life20.gridtriple > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .no-image.life20.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .opinion.hot70.is-section-sport-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .life20.gridspotlightside.hot50:nth-child(4) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .no-image.life20.gridspotlightside:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .gridspotlight.card-size-large.is-section-sport-skin > a > .t100`
- `.breaking > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(11) > .is-section-sport-skin.life20.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(14) > .life20.hot50.gridtriple:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(14) > .no-image.life20.hot50:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(14) > .no-image.life20.hot50:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .hot70.life60.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .no-image.life20.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(15) > .life20.gridspotlightside.hot50:nth-child(4) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .no-image.life20.gridspotlightside:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.hot20.is-section-sport-skin.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .no-image.life20.gridspotlightside:nth-child(4) > a > .t100`
- `.ThreeTeasers.grid:nth-child(19) > .hot40.life20.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(19) > .hot50.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(19) > .life20.hot50.gridtriple > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .opinion.hot70.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .hot70.gridspotlightside.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(21) > .gridspotlightside.hot50.life40 > a > .t100`
- `.AdWithTeaser.grid:nth-child(22) > .is-section-sport-skin.is-skin.hot50 > a > .t100`
- `.is-section-trdby-skin.life20.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(23) > .hot40.life20.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(23) > .is-section-sport-skin.life20.is-skin > a > .t100`
- `.feature.hot50.gridtriple > a > .t100`
- `.hot40.is-section-sport-skin.life20 > a > .t100`
- `.hot40.is-section-kultur-skin.is-skin > a > .t100`
- `.hot20.is-section-trdby-skin.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .opinion.hot70.gridspotlight > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .no-image.life20.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(27) > .hot40.life20.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .is-section-meninger-skin.opinion.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(29) > .hot60.gridspotlightside.life40:nth-child(3) > a > .t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot60.life20.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(30) > .is-section-kultur-skin.hot60.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot60.gridtriple.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(32) > .hot50.gridtriple.life40 > a > .t100`
- `.life60.gridspotlightside.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .hot60.gridspotlightside.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(36) > .is-section-kultur-skin.hot60.is-skin > a > .t100`
- `.is-section-meninger-skin.opinion.life20:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(36) > .is-section-meninger-skin.opinion.life20:nth-child(3) > a > .t100`
- `.AdWithTeaser.grid:nth-child(37) > .is-section-mn24-skin.life20.is-skin > a > .t100`
- `.no-image.hot60.gridtriple > a > .t100`
- `.grade.hot50.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(38) > .hot60.gridtriple.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .is-section-sport-skin.is-skin.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .life60.gridspotlight.card-size-large > a > .t100`
- `.is-section-mn24-skin.hot40.life20 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .gridspotlightside.hot50.life40 > a > .t100`
- `.AdWithTeaser.grid:nth-child(41) > .is-section-trdby-skin.is-skin.hot50 > a > .t100`
- `.is-section-sport-skin.hot60.gridspotlightside > a > .t100`
- `.is-section-meninger-skin.opinion.gridspotlight > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .hot60.gridspotlightside.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(43) > .hot60.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(44) > .hot60.gridtriple.life40:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(44) > .hot60.gridtriple.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(44) > .hot60.gridtriple.life40:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .is-section-meninger-skin.opinion.gridspotlightside > a > .t100`
- `.is-section-kultur-skin.hot70.gridspotlightside > a > .t100`
- `.AdWithTeaser.grid:nth-child(46) > .hot70.is-section-sport-skin.is-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .is-section-kultur-skin.gridspotlightside.is-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .is-section-kultur-skin.hot70.life60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlightside.hot50.life40:nth-child(3) > a > .t100`
- `.ThreeTeasers.grid:nth-child(48) > .hot50.gridtriple.life40 > a > .t100`
- `.grade.is-section-kultur-skin.hot70 > a > .t100`
- `.ThreeTeasers.grid:nth-child(48) > .life60.hot60.gridtriple > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(49) > .life60.hot60.gridtriple > a > .t100`
- `.AdWithTeaser.grid:nth-child(51) > .life60.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(52) > .is-section-trdby-skin.is-skin.hot50 > a > .t100`
- `.life60.hot50.gridtriple:nth-child(2) > a > .t100`
- `.life60.hot50.gridtriple:nth-child(3) > a > .t100`
- `.feature.life60.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(53) > .is-section-trdby-skin.gridspotlightside.is-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(53) > .hot70.gridspotlightside.life40 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(54) > .is-section-trdby-skin.is-skin.hot50 > a > .t100`
- `.gridfullsize.hot50.life40 > a > .t100`

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
