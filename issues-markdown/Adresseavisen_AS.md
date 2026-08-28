# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2026-08-28T09:49:24.651Z
**URL:** [https://www.adressa.no/](https://www.adressa.no/)
**Total Violations:** 6

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

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/image-alt?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 107

#### Affected Elements:

- `.hot100 > a > .t100`
- `.customSkin-kondolanse > a > .t100`
- `.hot20 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(1) > .is-bundle-wrapper.gridspotlight[position="1"] > .is-bundle-dark-skin.isBundle.grid > .gridfullsize-bundle.is-dark-skin.card-size-large > a > .t100`
- `.griddouble.small-items.is-dark-skin:nth-child(1) > a > .t100`
- `.griddouble.small-items.is-dark-skin:nth-child(2) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(1) > .is-dark-skin.hot60.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(1) > .hot70.gridspotlightside.life40 > a > .t100`
- `.life20.hot60.gridspotlightside > a > .t100`
- `.liveblog > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(4) > .is-bundle-wrapper.gridspotlight[position="1"] > .is-bundle-dark-skin.isBundle.grid > .complex-subteasers-wrapper.gridfullsize.grid > .small-items.is-dark-skin.life20:nth-child(1) > a > .t100`
- `.variant-b > a > .t100`
- `.hot70.small-items.is-dark-skin > a > .t100`
- `.is-hendelse-skin.life20.gridspotlightside > a > .t100`
- `.gridfullsize-bundle.hot70.is-dark-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .is-bundle-wrapper.gridspotlight[position="1"] > .is-bundle-dark-skin.isBundle.grid > .complex-subteasers-wrapper.gridfullsize.grid > .small-items.is-dark-skin.gridfullsize > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .hot70.gridspotlightside.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(8) > .life20.gridspotlightside.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(10) > .is-hendelse-skin.life20.is-skin > a > .t100`
- `.life20.gridtriple.hot50:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(10) > .life20.gridtriple.hot50:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .is-bundle-wrapper.gridspotlight[position="1"] > .is-bundle-dark-skin.isBundle.grid > .gridfullsize-bundle.is-dark-skin.card-size-large > a > .t100`
- `.hot80.small-items.opinion > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .no-image.life20.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .is-section-meninger-skin.opinion.gridspotlightside:nth-child(4) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .gridfullsize-bundle.hot70.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .complex-subteasers-wrapper.gridfullsize.grid > .hot80.small-items.gridfullsize > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .is-section-meninger-skin.opinion.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .is-dark-skin.hot60.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(14) > .no-image.life20.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(16) > .life20.gridtriple.hot50:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(16) > .hot70.gridtriple.life40 > a > .t100`
- `.is-section-sport-skin.life20.is-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .no-image.life20.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .gridspotlight.card-size-large.life20 > a > .t100`
- `.is-section-kultur-skin.hot70.gridspotlightside > a > .t100`
- `.is-section-sport-skin.hot60.gridspotlightside > a > .t100`
- `.is-section-mn24-skin.gridspotlight.card-size-large > a > .t100`
- `.variant-a.gridspotlightside.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .no-image.life20.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(20) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.AdWithTeaser.grid:nth-child(21) > .hot70.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(22) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(22) > .gridtriple.hot50.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(22) > .gridtriple.hot50.life40:nth-child(3) > a > .t100`
- `.hot40.gridspotlightside.life40 > a > .t100`
- `.is-section-kultur-skin.hot70.grade > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .gridspotlightside.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(26) > .is-section-meninger-skin.opinion.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(26) > .gridtriple.hot50.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(26) > .gridtriple.hot50.life40:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .is-section-meninger-skin.opinion.gridspotlight > a > .t100`
- `.life20.gridspotlightside.hot50:nth-child(2) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(29) > .grade.gridtriple.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .gridspotlightside.hot50.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .is-section-meninger-skin.opinion.gridspotlight > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .is-section-mn24-skin.hot60.gridspotlightside > a > .t100`
- `.AdWithTeaser.grid:nth-child(32) > .is-section-kultur-skin.hot60.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(33) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(33) > .hot60.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(33) > .life60.gridtriple.hot50 > a > .t100`
- `.is-section-kultur-skin.life60.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.hot30 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .gridspotlightside.hot50.life40:nth-child(3) > a > .t100`
- `.customSkin-podcast.gridspotlightside.hot50 > a > .t100`
- `.AdWithTeaser.grid:nth-child(37) > .gridtriple.hot50.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .gridspotlightside.hot50.life40 > a > .t100`
- `.is-section-sport-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .hot60.gridspotlightside.life40 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .grade.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(40) > .hot60.gridtriple.life40:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(40) > .hot60.gridtriple.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(40) > .is-section-meninger-skin.opinion.hot60 > a > .t100`
- `.is-rbk-skin.opinion.is-skin > a > .t100`
- `.customSkin-podcast.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .is-section-mn24-skin.hot60.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(42) > .is-dark-skin.hot60.gridspotlightside > a > .t100`
- `.is-rbk-skin.hot60.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .is-section-trdby-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .gridspotlightside.hot50.life40 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(44) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(45) > .hot60.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(45) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(45) > .life60.gridtriple.hot50 > a > .t100`
- `.variant-a.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(46) > .gridtriple.hot50.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(46) > .gridtriple.hot50.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.grid:nth-child(47) > .life60.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(48) > .gridtriple.hot50.life40:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(48) > .gridtriple.hot50.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(48) > .gridtriple.hot50.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(49) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(50) > .is-section-kultur-skin.grade.life60 > a > .t100`
- `.is-section-trdby-skin.life60.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(50) > .life60.gridtriple.hot50:nth-child(3) > a > .t100`
- `.hot40.is-section-trdby-skin.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(52) > .is-section-kultur-skin.grade.life60:nth-child(2) > a > .t100`
- `.is-section-kultur-skin.grade.life60:nth-child(3) > a > .t100`
- `.ThreeTeasers.grid:nth-child(53) > .life60.gridtriple.hot50:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(53) > .life60.gridtriple.hot50:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(53) > .life60.gridtriple.hot50:nth-child(3) > a > .t100`
- `.ThreeTeasers.grid:nth-child(54) > .life60.gridtriple.hot50:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(54) > .life60.gridtriple.hot50:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(54) > .life60.gridtriple.hot50:nth-child(3) > a > .t100`

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
