# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2026-09-22T03:34:18.003Z
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
- **Count:** 24

#### Affected Elements:

- `.center.no-padding.table-cell:nth-child(2) > .fade-image.icon > img[src=""]`
- `.center.no-padding.table-cell:nth-child(2) > .fade-image.icon > img:nth-child(2)`
- `.center.no-padding.table-cell:nth-child(3) > .fade-image.icon > img[src=""]`
- `.center.no-padding.table-cell:nth-child(3) > .fade-image.icon > img:nth-child(2)`
- `.center.no-padding.table-cell:nth-child(4) > .fade-image.icon > img[src=""]`
- `.center.no-padding.table-cell:nth-child(4) > .fade-image.icon > img:nth-child(2)`
- `.center.no-padding.table-cell:nth-child(5) > .fade-image.icon > img[src=""]`
- `.center.no-padding.table-cell:nth-child(5) > .fade-image.icon > img:nth-child(2)`
- `.center.no-padding.table-cell:nth-child(6) > .fade-image.icon > img[src=""]`
- `.center.no-padding.table-cell:nth-child(6) > .fade-image.icon > img:nth-child(2)`
- `.center.no-padding.table-cell:nth-child(7) > .fade-image.icon > img[src=""]`
- `.center.no-padding.table-cell:nth-child(7) > .fade-image.icon > img:nth-child(2)`
- `.center.no-padding.table-cell:nth-child(8) > .fade-image.icon > img[src=""]`
- `.center.no-padding.table-cell:nth-child(8) > .fade-image.icon > img:nth-child(2)`
- `.center.no-padding.table-cell:nth-child(9) > .fade-image.icon > img[src=""]`
- `.center.no-padding.table-cell:nth-child(9) > .fade-image.icon > img:nth-child(2)`
- `.center.no-padding.table-cell:nth-child(10) > .fade-image.icon > img[src=""]`
- `.center.no-padding.table-cell:nth-child(10) > .fade-image.icon > img:nth-child(2)`
- `.center.no-padding.table-cell:nth-child(11) > .fade-image.icon > img[src=""]`
- `.center.no-padding.table-cell:nth-child(11) > .fade-image.icon > img:nth-child(2)`
- `.center.no-padding.table-cell:nth-child(12) > .fade-image.icon > img[src=""]`
- `.center.no-padding.table-cell:nth-child(12) > .fade-image.icon > img:nth-child(2)`
- `.center.no-padding.table-cell:nth-child(13) > .fade-image.icon > img[src=""]`
- `.center.no-padding.table-cell:nth-child(13) > .fade-image.icon > img:nth-child(2)`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 80

#### Affected Elements:

- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.breakingvarsel > a > .t100`
- `.hot80.gridspotlightside.life40 > a > .t100`
- `.variant-a.is-section-sport-skin.life20 > a > .t100`
- `.opinion.is-section-meninger-skin.gridspotlight > a > .t100`
- `.is-section-mn24-skin.life20.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .hot70.life60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .hot70.life40.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .hot60.life40.gridtriple > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .hot70.gridspotlightside.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .no-image.life20.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .is-section-kultur-skin.hot60.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(10) > .hot70.life40.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(10) > .hot60.life40.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(10) > .life20.hot50.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(12) > .hot70.life40.gridtriple > a > .t100`
- `.is-section-kultur-skin.grade.hot60 > a > .t100`
- `a[href$="dyrk-din-hage"] > .t100`
- `.ThreeTeasers.grid:nth-child(14) > .life20.hot50.gridtriple:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(14) > .life20.hot50.gridtriple:nth-child(2) > a > .t100`
- `.hot80.life40.gridtriple > a > .t100`
- `.is-dark-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(16) > .no-image.life20.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(16) > .life20.hot50.gridtriple:nth-child(3) > a > .t100`
- `.ThreeTeasers.grid:nth-child(18) > .is-section-mn24-skin.life20.is-skin > a > .t100`
- `.customSkin-podcast.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(18) > .opinion.is-section-meninger-skin.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .life20.gridspotlightside.hot50:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .is-section-kultur-skin.gridspotlight.card-size-large > a > .t100`
- `.is-section-kultur-skin.life20.gridspotlightside > a > .t100`
- `.life20.hot60.gridtriple > a > .t100`
- `.gridspotlight.card-size-large.grade > a > .t100`
- `.is-hendelse-skin > a > .t100`
- `.life60.gridspotlightside.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .no-image.life20.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(25) > .is-section-mn24-skin.life20.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(25) > .hot40.life60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(25) > .life20.hot50.gridtriple:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .opinion.is-section-meninger-skin.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .is-section-kultur-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .hot60.gridspotlightside.life40 > a > .t100`
- `.gridspotlight.card-size-large.life20 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .is-section-kultur-skin.hot60.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .hot60.gridspotlightside.life40:nth-child(3) > a > .t100`
- `.grade.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot70.life40.gridtriple:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(30) > .life60.hot50.gridtriple > a > .t100`
- `.hot70.life40.gridtriple:nth-child(3) > a > .t100`
- `.AdWithTeaser.grid:nth-child(32) > .is-section-sport-skin.hot60.is-skin > a > .t100`
- `.hot40.is-section-kultur-skin.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot70 > a > .t100`
- `.is-rbk-skin > a > .t100`
- `.flipped.AdWithTeaser.grid:nth-child(34) > .opinion.is-section-meninger-skin.is-skin > a > .t100`
- `.hot50.life40.gridtriple:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(36) > .hot50.life40.gridtriple:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(36) > .variant-a.is-section-sport-skin.is-skin > a > .t100`
- `.AdWithTeaser.grid:nth-child(37) > .opinion.is-section-meninger-skin.is-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .gridspotlight.card-size-large.life60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .is-section-sport-skin.gridspotlightside.is-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .hot40.gridspotlightside.life40 > a > .t100`
- `.flipped.AdWithTeaser.grid:nth-child(39) > .hot60.life40.gridtriple > a > .t100`
- `.hot40.grade.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.life60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .hot60.gridspotlightside.life40 > a > .t100`
- `.is-section-kultur-skin.grade.hot70 > a > .t100`
- `.ThreeTeasers.grid:nth-child(42) > .hot60.life40.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(42) > .is-section-kultur-skin.grade.life60 > a > .t100`
- `.hot40.is-section-kultur-skin.life60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .gridspotlight.card-size-large.life60 > a > .t100`
- `.life60.hot60.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .hot70.gridspotlightside.life40 > a > .t100`
- `.is-section-trdby-skin > a > .t100`
- `.customSkin-podcast.hot40.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot40.life60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(45) > .life60.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(46) > .life60.hot50.gridtriple > a > .t100`
- `.customSkin-podkast.hot40.life60 > a > .t100`
- `.customSkin-podkast.life60.hot60 > a > .t100`
- `.customSkin-podcast.life60.hot50 > a > .t100`

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
