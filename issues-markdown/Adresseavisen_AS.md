# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2026-10-16T03:22:53.286Z
**URL:** [https://www.adressa.no/](https://www.adressa.no/)
**Total Violations:** 9

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- `.disabled`
- `.right`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.Abobutton`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `#dakapo_postopbar`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .no-image.is-hendelse-skin.life20 > a > .t100 > h3`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 99

#### Affected Elements:

- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.breakingvarsel > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .no-image.is-hendelse-skin.life20 > a > .t100`
- `.hot60.gridspotlightside.life40:nth-child(4) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .no-image.is-hendelse-skin.life20 > a > .t100`
- `.is-rbk-skin.opinion.gridspotlight > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot60.gridspotlightside.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot70.gridspotlightside.life40 > a > .t100`
- `.grade.hot70.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .is-section-kultur-skin.hot60.is-skin > a > .t100`
- `.hot10 > a > .t100`
- `.is-section-kultur-skin.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .life60.hot60.gridspotlightside > a > .t100`
- `.life20.hot70.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .hot70.gridspotlightside.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot70 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(10) > .life20.hot50.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(12) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(12) > .life20.hot50.gridtriple:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(12) > .hot60.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .gridspotlight.life60.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .hot60.gridspotlightside.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .hot70.gridspotlightside.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .no-image.life20.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .is-section-meninger-skin.opinion.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .gridspotlight.card-size-large.hot70 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(16) > .is-hendelse-skin.life20.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(18) > .hot60.gridtriple.life40 > a > .t100`
- `.is-section-sport-skin.life60.hot60 > a > .t100`
- `.is-section-sport-skin.life20.hot50 > a > .t100`
- `.grade.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .life20.hot50.gridspotlightside:nth-child(2) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .life20.hot50.gridspotlightside:nth-child(3) > a > .t100`
- `.AdWithTeaser.grid:nth-child(21) > .is-section-kultur-skin.hot50.is-skin > a > .t100`
- `.is-hendelse-skin.life20.hot60 > a > .t100`
- `.variant-a.gridspotlight.life60 > a > .t100`
- `.grade.hot50.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(22) > .no-image.life20.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(25) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.customSkin-podcast.hot50.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(25) > .hot50.gridtriple.life40:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .gridspotlight.life60.card-size-large > a > .t100`
- `.is-section-trdby-skin.life20.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(26) > .life20.hot50.gridspotlightside:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(28) > .is-section-mn24-skin.life20.hot50 > a > .t100`
- `.variant-c > a > .t100`
- `.variant-a.is-section-kultur-skin.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(30) > .hot60.gridtriple.life40:nth-child(2) > a > .t100`
- `a[href$="frekke-banker"] > .t100`
- `.AdWithTeaser.grid:nth-child(32) > .hot70.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .is-section-kultur-skin.hot60.is-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(33) > .is-section-sport-skin.hot60.is-skin > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(34) > .is-section-kultur-skin.hot60.is-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(36) > .is-hendelse-skin.hot60.is-skin > a > .t100`
- `.is-section-meninger-skin.opinion.gridspotlight > a > .t100`
- `.is-rbk-skin.hot60.is-skin > a > .t100`
- `.AdWithTeaser.grid:nth-child(37) > .hot70.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(38) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(38) > .is-hendelse-skin.life20.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(38) > .life20.hot50.gridtriple:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .hot40.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.hot70 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .is-section-kultur-skin.life60.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(40) > .hot70.gridspotlightside.life40 > a > .t100`
- `.AdWithTeaser.grid:nth-child(41) > .is-section-sport-skin.hot50.is-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .hot60.gridspotlightside.life40:nth-child(1) > a > .t100`
- `a[href$="takk-for-turen"] > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(42) > .is-section-meninger-skin.opinion.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(43) > .variant-a.is-section-kultur-skin.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(43) > .hot70.gridtriple.life40:nth-child(2) > a > .t100`
- `.hot70.gridtriple.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(44) > .hot60.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .variant-a.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .hot70.gridspotlightside.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(45) > .life60.hot60.gridspotlightside > a > .t100`
- `.hot50.gridspotlightside.life40:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(46) > .hot50.gridspotlightside.life40:nth-child(3) > a > .t100`
- `.is-section-trdby-skin.hot60.is-skin > a > .t100`
- `.hot40.is-section-trdby-skin.is-skin > a > .t100`
- `.hot40.is-section-mn24-skin.is-skin > a > .t100`
- `.is-section-sport-skin.life60.hot50 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(49) > .hot70.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(50) > .gridspotlight.life60.card-size-large > a > .t100`
- `.customSkin-podcast.life60.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(50) > .hot50.gridspotlightside.life40 > a > .t100`
- `.life60.hot70.gridtriple > a > .t100`
- `.is-section-kultur-skin.grade.life60 > a > .t100`
- `.grade.life60.hot50:nth-child(3) > a > .t100`
- `.hot80 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(53) > .gridspotlight.life60.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(53) > .customSkin-podcast.hot50.gridspotlightside > a > .t100`
- `.life60.hot50.gridtriple:nth-child(1) > a > .t100`
- `.variant-a.is-section-kultur-skin.life60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(54) > .hot50.gridtriple.life40 > a > .t100`
- `.gridfullsize.life60.hot50 > a > .t100`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.Layout`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.top`
- `.Layout`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
