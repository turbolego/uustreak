# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2026-07-31T01:04:36.154Z
**URL:** [https://www.adressa.no/](https://www.adressa.no/)
**Total Violations:** 7

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- `.disabled`
- `.right`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.Abobutton`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 26

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
- `.center.no-padding.table-cell:nth-child(14) > .fade-image.icon > .off[src=""]`
- `.center.no-padding.table-cell:nth-child(14) > .fade-image.icon > .on`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 87

#### Affected Elements:

- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot70.gridspotlight.card-size-large > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .grade.hot50.gridspotlightside > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-section-kultur-skin.hot70.is-skin > a > .t100`
- `.hot20 > a > .t100`
- `.is-section-kultur-skin.hot70.gridspotlight > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot70.gridspotlightside.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .life20.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .hot70.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .hot60.gridspotlightside.life40 > a > .t100`
- `.is-section-sport-skin.life60.is-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .opinion.is-section-meninger-skin.is-skin > a > .t100`
- `.variant-d > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .hot60.gridspotlightside.life40:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .no-image.life20.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(12) > .hot70.grade.gridtriple > a > .t100`
- `.hot70.gridtriple.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(12) > .hot60.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .life20.hot50.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .hot60.gridspotlightside.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .opinion.is-section-meninger-skin.is-skin > a > .t100`
- `.is-section-trdby-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .hot50.gridspotlightside.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(18) > .opinion.is-section-meninger-skin.life20 > a > .t100`
- `.hot80.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(18) > .hot60.gridtriple.life40 > a > .t100`
- `.hot70.grade.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .is-section-trdby-skin.is-skin.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .is-section-mn24-skin.life20.is-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .no-image.life20.hot50 > a > .t100`
- `.AdWithTeaser.grid:nth-child(21) > .life20.hot50.gridtriple > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .opinion.is-section-meninger-skin.life20 > a > .t100`
- `.is-section-sport-skin.gridspotlight.card-size-large > a > .t100`
- `.is-rbk-skin.life20.is-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .no-image.life20.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(25) > .hot70.grade.gridtriple > a > .t100`
- `.is-section-sport-skin.life20.is-skin:nth-child(2) > a > .t100`
- `.hot40.is-section-sport-skin.life20 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .is-section-kultur-skin.gridspotlight.card-size-large > a > .t100`
- `.is-hendelse-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .opinion.is-section-meninger-skin.is-skin > a > .t100`
- `.hot40.gridspotlightside.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .grade.hot50.gridspotlightside > a > .t100`
- `.hot70.life60.gridtriple > a > .t100`
- `.hot60.gridtriple.life40:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(30) > .is-section-kultur-skin.is-skin.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(30) > .opinion.is-section-meninger-skin.life20 > a > .t100`
- `.AdWithTeaser.grid:nth-child(32) > .hot50.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.tip > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .is-section-kultur-skin.is-skin.hot60 > a > .t100`
- `.no-image.hot60.gridspotlightside > a > .t100`
- `.is-section-kultur-skin.grade.is-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .opinion.is-section-meninger-skin.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .variant-a.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .opinion.is-section-meninger-skin.is-skin:nth-child(3) > a > .t100`
- `.AdWithTeaser.grid:nth-child(37) > .is-section-trdby-skin.is-skin.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(38) > .life60.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(38) > .hot60.gridtriple.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(38) > .hot60.gridtriple.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .hot60.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .variant-a.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .hot50.gridspotlightside.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .is-section-kultur-skin.is-skin.hot60 > a > .t100`
- `.AdWithTeaser.grid:nth-child(41) > .hot60.gridtriple.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .is-section-kultur-skin.is-skin.hot60 > a > .t100`
- `.variant-a.life60.gridspotlight > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .hot60.gridspotlightside.life40:nth-child(3) > a > .t100`
- `.ThreeTeasers.grid:nth-child(43) > .life60.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(43) > .gridtriple.hot50.life40 > a > .t100`
- `.life60.hot60.gridtriple > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(44) > .hot50.gridtriple.life40 > a > .t100`
- `.is-section-kultur-skin.life60.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .hot70.gridspotlightside.life40 > a > .t100`
- `.hot30 > a > .t100`
- `.variant-a.gridtriple.hot50 > a > .t100`
- `.hot80.is-section-kultur-skin.life60 > a > .t100`
- `.gridtriple.hot50.life40:nth-child(3) > a > .t100`
- `.variant-b > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .hot50.gridspotlightside.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(48) > .life60.gridspotlight.card-size-large > a > .t100`
- `.is-rbk-skin.life60.is-skin > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(49) > .life60.hot50.gridtriple > a > .t100`
- `.hot40.gridfullsize.life60 > a > .t100`

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

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
