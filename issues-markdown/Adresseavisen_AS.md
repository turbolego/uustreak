# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2026-09-06T02:01:49.809Z
**URL:** [https://www.adressa.no/](https://www.adressa.no/)
**Total Violations:** 9

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

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 91

#### Affected Elements:

- `.opinion.is-rbk-skin.hot70 > a > .t100`
- `.is-hendelse-skin.life20.gridspotlightside > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .life20.gridspotlightside.hot50:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlightside.hot50.life40 > a > .t100`
- `.gridfullsize-bundle.card-size-large.is-section-kultur-skin > a > .t100`
- `.small-items.is-section-kultur-skin.life60 > a > .t100`
- `.small-items.is-section-kultur-skin.hot60:nth-child(2) > a > .t100`
- `.small-items.is-section-kultur-skin.grade > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .no-image.life20.gridspotlightside > a > .t100`
- `.hot60.grade.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(8) > .life60.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(8) > .hot70.is-section-kultur-skin.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(8) > .life20.gridtriple.hot50 > a > .t100`
- `.gridfullsize-bundle.is-rbk-skin.card-size-large > a > .t100`
- `.hot10.is-rbk-skin.small-items:nth-child(1) > a > .t100`
- `.hot10.is-rbk-skin.small-items:nth-child(2) > a > .t100`
- `.variant-a > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .is-section-kultur-skin.grade.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .is-section-sport-skin.gridspotlightside.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .no-image.life20.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .no-image.life20.gridspotlightside > a > .t100`
- `.gridfullsize-bundle.is-dark-skin.hot70 > a > .t100`
- `.griddouble.is-dark-skin.small-items:nth-child(1) > a > .t100`
- `.griddouble.is-dark-skin.small-items:nth-child(2) > a > .t100`
- `.grade.gridspotlightside.hot50:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .is-section-kultur-skin.grade.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(14) > .life20.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(14) > .is-section-kultur-skin.gridtriple.hot50 > a > .t100`
- `.hot80 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.no-image.life20.gridspotlightside:nth-child(2) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .is-section-sport-skin.gridspotlightside.hot50 > a > .t100`
- `.is-section-mn24-skin.no-image.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .is-hendelse-skin.gridspotlightside.hot50 > a > .t100`
- `.gridspotlight.card-size-large.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .no-image.life20.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .is-section-mn24-skin.life20.gridspotlightside > a > .t100`
- `.is-section-mn24-skin.hot40.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(20) > .is-section-meninger-skin.opinion.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(20) > .hot60.grade.gridtriple > a > .t100`
- `.AdWithTeaser.grid:nth-child(21) > .hot60.grade.gridtriple > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .gridfullsize-bundle.hot70.card-size-large > a > .t100`
- `.hot10.small-items.life60 > a > .t100`
- `.is-section-kultur-skin.hot60.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .hot60.gridspotlightside.life40:nth-child(3) > a > .t100`
- `.is-section-kultur-skin.grade.gridspotlightside:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .gridfullsize-bundle.card-size-large.life60 > a > .t100`
- `.small-items.hot70.life20 > a > .t100`
- `.hot70.is-section-kultur-skin.life60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(26) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(26) > .life20.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(26) > .is-section-kultur-skin.hot60.grade > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .life60.gridspotlightside.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(28) > .no-image.life20.gridspotlightside > a > .t100`
- `.is-section-meninger-skin.opinion.life20 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(29) > .is-section-kultur-skin.life60.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .gridspotlightside.hot50.life40:nth-child(1) > a > .t100`
- `.is-section-sport-skin.opinion.hot70 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(30) > .gridspotlightside.hot50.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.grid:nth-child(32) > .hot70.is-section-kultur-skin.gridtriple > a > .t100`
- `.hot40.is-dark-skin.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(33) > .hot60.gridtriple.life40:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(33) > .is-section-meninger-skin.opinion.hot60 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(34) > .is-section-kultur-skin.hot60.gridtriple > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .hot60.gridspotlightside.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(36) > .hot70.grade.gridspotlightside > a > .t100`
- `.AdWithTeaser.grid:nth-child(37) > .hot60.gridtriple.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .is-section-kultur-skin.gridspotlightside.hot50 > a > .t100`
- `.is-section-mn24-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(38) > .gridspotlightside.hot50.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .life60.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(40) > .hot40.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(40) > .hot60.gridtriple.life40 > a > .t100`
- `.hot40.life60.gridtriple > a > .t100`
- `.is-hendelse-skin.gridtriple.hot50 > a > .t100`
- `.is-dark-skin.gridspotlight.card-size-large > a > .t100`
- `.is-section-trdby-skin.gridspotlightside.hot50 > a > .t100`
- `.hot40.grade.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .gridspotlightside.hot50.life40 > a > .t100`
- `.hot40.gridspotlight.card-size-large > a > .t100`
- `.is-section-trdby-skin.hot60.gridspotlightside > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(44) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(45) > .life60.gridtriple.hot50 > a > .t100`
- `.is-rbk-skin.gridtriple.hot50 > a > .t100`
- `.is-dark-skin.gridtriple.hot50 > a > .t100`
- `.is-section-trdby-skin.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .life60.gridspotlightside.hot50:nth-child(2) > a > .t100`
- `.life60.gridspotlightside.hot50:nth-child(3) > a > .t100`
- `.AdWithTeaser.grid:nth-child(47) > .life60.gridtriple.hot50 > a > .t100`

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

### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1, RGAAv4, RGAA-10.6.1
- **Count:** 6

#### Affected Elements:

- `a:nth-child(5)`
- `section:nth-child(4) > div > div > .Tips > dl > dd > a[href="tel:46407200"]`
- `div > div > p > a:nth-child(1)`
- `p > a:nth-child(2)`
- `a[href$="medietilsynet.no/"]`
- `p > a:nth-child(4)`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
