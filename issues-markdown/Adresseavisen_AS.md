# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2026-05-10T01:04:34.431Z
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
- **Count:** 99

#### Affected Elements:

- `.is-section-mn24-skin.gridspotlight.card-size-large > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot50.life40 > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-section-kultur-skin.hot70.gridspotlightside > a > .t100`
- `a[href$="ta-med-dorull"] > .t100`
- `.is-section-sport-skin.hot70.gridspotlight > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .life20.gridspotlightside.hot50:nth-child(3) > a > .t100`
- `.grade.is-section-kultur-skin.hot60 > a > .t100`
- `.opinion.is-section-meninger-skin.hot70 > a > .t100`
- `.hot70.gridtriple.life40:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.variant-a > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .no-image.life20.gridspotlightside > a > .t100`
- `.life20.hot60.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(8) > .is-section-sport-skin.life20.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(8) > .is-rbk-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(8) > .no-image.life20.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(8) > .hot70.gridspotlightside.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(10) > .hot60.gridtriple.life40 > a > .t100`
- `.is-section-trdby-skin.life60.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(10) > .opinion.is-section-meninger-skin.life20 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(13) > .life60.hot70.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(13) > .gridspotlightside.hot50.life40 > a > .t100`
- `.is-section-kultur-skin.hot60.gridspotlightside > a > .t100`
- `.variant-b.no-image.life20 > a > .t100`
- `.is-section-kultur-skin.life20.gridspotlightside > a > .t100`
- `.is-section-kultur-skin.hot70.gridspotlight > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(14) > .life60.gridspotlightside.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(17) > .hot60.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(17) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(17) > .grade.life60.is-section-kultur-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(18) > .life60.hot70.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(18) > .hot60.gridspotlightside.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(18) > .life20.gridspotlightside.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .gridspotlightside.hot50.life40 > a > .t100`
- `.tip > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .life20.gridspotlightside.hot50:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .no-image.life20.gridspotlightside > a > .t100`
- `.AdWithTeaser.grid:nth-child(21) > .opinion.is-section-meninger-skin.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(22) > .life20.gridtriple.hot50:nth-child(1) > a > .t100`
- `.variant-b.life60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(22) > .life20.gridtriple.hot50:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .life60.gridspotlight.card-size-large > a > .t100`
- `.is-rbk-skin.hot60.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .no-image.life20.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .is-section-sport-skin.hot60.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .hot70.gridspotlightside.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .is-rbk-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .hot60.gridspotlightside.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(28) > .opinion.is-section-meninger-skin.hot60 > a > .t100`
- `.life20.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(28) > .life20.gridtriple.hot50 > a > .t100`
- `.variant-b.is-section-sport-skin.hot70 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .is-section-sport-skin.gridspotlight.card-size-large > a > .t100`
- `.life20.gridspotlightside.hot50:nth-child(2) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(31) > .life20.gridspotlightside.hot50:nth-child(3) > a > .t100`
- `.AdWithTeaser.grid:nth-child(32) > .hot60.gridtriple.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .life20.gridspotlightside.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .is-section-kultur-skin.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(33) > .gridspotlightside.hot50.life40 > a > .t100`
- `.hot40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(36) > .life20.gridtriple.hot50:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(36) > .opinion.is-section-meninger-skin.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(36) > .is-section-kultur-skin.hot60.gridtriple > a > .t100`
- `.AdWithTeaser.grid:nth-child(37) > .is-section-trdby-skin.gridtriple.is-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.grade.is-section-kultur-skin.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(38) > .hot60.gridspotlightside.life40 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(39) > .gridtriple.hot50.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .opinion.is-section-meninger-skin.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .life60.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(40) > .is-section-kultur-skin.hot70.gridspotlightside > a > .t100`
- `.AdWithTeaser.grid:nth-child(41) > .hot70.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(42) > .opinion.is-section-meninger-skin.hot60:nth-child(1) > a > .t100`
- `.is-rbk-skin.hot60.gridtriple > a > .t100`
- `.opinion.is-section-meninger-skin.hot60:nth-child(3) > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .is-section-kultur-skin.gridspotlight.card-size-large > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .life60.gridspotlightside.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(43) > .gridspotlightside.hot50.life40 > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(44) > .gridtriple.hot50.life40 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot60.gridspotlightside.life40:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot70.gridspotlight.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot60.gridspotlightside.life40:nth-child(3) > a > .t100`
- `.ThreeTeasers.grid:nth-child(46) > .gridtriple.hot50.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(46) > .grade.life60.is-section-kultur-skin > a > .t100`
- `.h-low > a > .t100`
- `.AdWithTeaser.grid:nth-child(47) > .hot60.gridtriple.life40 > a > .t100`
- `.is-section-sport-skin.life60.gridspotlight > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(48) > .gridspotlightside.hot50.life40:nth-child(2) > a > .t100`
- `.is-section-mn24-skin.gridspotlightside.is-skin > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(49) > .gridtriple.hot50.life40 > a > .t100`
- `.is-section-trdby-skin.gridspotlightside.is-skin > a > .t100`
- `.gridspotlight.card-size-large.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(51) > .gridspotlightside.hot50.life40:nth-child(3) > a > .t100`
- `.ThreeTeasers.grid:nth-child(52) > .is-rbk-skin.gridtriple.is-skin > a > .t100`
- `.life60.is-section-kultur-skin.hot60 > a > .t100`
- `.gridtriple.hot50.life40:nth-child(3) > a > .t100`
- `.is-section-trdby-skin.gridtriple.is-skin:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(53) > .is-section-trdby-skin.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(53) > .life60.gridtriple.hot50 > a > .t100`

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

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.user`
- `.main`
