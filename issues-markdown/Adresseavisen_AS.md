# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2026-09-07T06:58:38.952Z
**URL:** [https://www.adressa.no/](https://www.adressa.no/)
**Total Violations:** 10

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
- **Count:** 81

#### Affected Elements:

- `.hot70.gridfullsize.life40 > a > .t100`
- `.is-section-meninger-skin.opinion.gridspotlight > a > .t100`
- `.variant-a.is-section-meninger-skin.opinion > a > .t100`
- `.hot20.gridspotlightside.life40 > a > .t100`
- `.hot20.is-section-mn24-skin.life20 > a > .t100`
- `.gridfullsize-bundle > a > .t100`
- `.small-items.griddouble.variant-a:nth-child(1) > a > .t100`
- `.small-items.griddouble.variant-a:nth-child(2) > a > .t100`
- `.breaking > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-section-kultur-skin.hot60.gridspotlightside > a > .t100`
- `.variant-a.gridtriple.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(8) > .life60.gridtriple.hot60 > a > .t100`
- `.hot70.life20.gridtriple > a > .t100`
- `.h-low > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .hot60.gridspotlightside.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(10) > .is-section-kultur-skin.life60.hot60 > a > .t100`
- `.is-rbk-skin.opinion.hot70 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlight.card-size-large.is-section-kultur-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .is-hendelse-skin.life20.gridspotlightside:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(12) > .no-image.is-hendelse-skin.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(14) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(14) > .grade.gridtriple.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(14) > .hot70.is-section-kultur-skin.gridtriple > a > .t100`
- `.hot80 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .grade.gridspotlightside.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .no-image.is-hendelse-skin.life20 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(16) > .no-image.life20.gridspotlightside:nth-child(4) > a > .t100`
- `.life20.gridspotlightside.hot50:nth-child(1) > a > .t100`
- `.hot70.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(18) > .is-hendelse-skin.life20.gridspotlightside > a > .t100`
- `.no-image.is-hendelse-skin.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(20) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(20) > .life20.gridtriple.hot50:nth-child(2) > a > .t100`
- `.is-section-mn24-skin.life20.gridtriple > a > .t100`
- `.is-rbk-skin.hot60.gridtriple > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .gridspotlight.card-size-large.is-section-kultur-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .no-image.life20.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .is-hendelse-skin.life20.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(22) > .is-section-meninger-skin.opinion.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(25) > .is-section-kultur-skin.life60.hot60 > a > .t100`
- `.is-rbk-skin.gridspotlight.card-size-large > a > .t100`
- `.is-dark-skin.hot60.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(26) > .grade.gridtriple.hot60 > a > .t100`
- `.is-section-kultur-skin.life20.grade > a > .t100`
- `.ThreeTeasers.grid:nth-child(26) > .gridtriple.hot50.life40 > a > .t100`
- `.grade.gridtriple.hot50:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(28) > .is-section-kultur-skin.grade.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(28) > .is-section-sport-skin.gridtriple.hot50 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(29) > .hot60.gridtriple.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.grade > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .grade.gridspotlightside.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(30) > .is-section-kultur-skin.gridspotlightside.hot50 > a > .t100`
- `.AdWithTeaser.grid:nth-child(32) > .is-section-sport-skin.gridtriple.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .is-section-kultur-skin.grade.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.grade > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .is-hendelse-skin.gridspotlightside.hot50 > a > .t100`
- `.is-section-kultur-skin.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(36) > .gridtriple.hot60.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(36) > .is-section-kultur-skin.grade.gridtriple:nth-child(2) > a > .t100`
- `.hot70.is-section-kultur-skin.life60 > a > .t100`
- `.AdWithTeaser.grid:nth-child(37) > .gridtriple.hot50.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .gridspotlight.card-size-large.is-section-kultur-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .life60.gridspotlightside.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .is-section-kultur-skin.life60.grade > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .gridtriple.hot50.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .gridspotlightside.hot50.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.life60 > a > .t100`
- `.hot40.gridspotlightside.life40 > a > .t100`
- `.AdWithTeaser.grid:nth-child(41) > .life60.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(42) > .gridtriple.hot50.life40:nth-child(1) > a > .t100`
- `.is-section-trdby-skin.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(42) > .gridtriple.hot50.life40:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .is-dark-skin.gridspotlight.card-size-large > a > .t100`
- `.hot40.life60.gridspotlightside > a > .t100`
- `.is-section-trdby-skin.hot60.gridspotlightside > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(44) > .life60.gridtriple.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .gridspotlightside.hot50.life40 > a > .t100`
- `.is-section-trdby-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .life60.gridspotlightside.hot50 > a > .t100`
- `.gridfullsize.life60.hot50 > a > .t100`
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

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.breaking-stripe`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
