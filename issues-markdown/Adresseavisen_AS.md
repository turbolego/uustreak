# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2026-01-04T00:29:33.230Z
**URL:** [https://www.adressa.no/](https://www.adressa.no/)
**Total Violations:** 8

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
- **Count:** 95

#### Affected Elements:

- `.variant-a.gridspotlight.card-size-large > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-section-sport-skin.life20.is-skin > a > .t100`
- `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .life20.gridspotlightside.hot50:nth-child(3) > a > .t100`
- `.is-section-kultur-skin.is-skin.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-bundle-wrapper.gridspotlight[position="1"] > .is-bundle-dark-skin.has-bundle-title.isBundle > .gridfullsize-bundle.is-dark-skin.card-size-large > a > .t100`
- `.breakingvarsel > a > .t100`
- `.is-section-sport-skin.hot60.life20 > a > .t100`
- `.is-section-sport-skin.is-skin.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(4) > .hot60.gridtriple.life40:nth-child(2) > a > .t100`
- `.variant-a.hot60.gridtriple > a > .t100`
- `.h-low.gridfullsize-bundle.opinion > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .is-bundle-wrapper.gridspotlight[position="1"] > .isBundle.grid > .complex-subteasers-wrapper.gridfullsize.grid > .small-items.gridfullsize.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .hot60.gridspotlightside.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(5) > .no-image.life20.gridspotlightside > a > .t100`
- `.variant-a.hot60.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(8) > .is-section-trdby-skin.is-skin.gridspotlightside > a > .t100`
- `.hot80.gridfullsize-bundle.is-dark-skin > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(8) > .is-bundle-wrapper.gridspotlight[position="1"] > .is-bundle-dark-skin.has-bundle-title.isBundle > .complex-subteasers-wrapper.gridfullsize.grid > .small-items.is-dark-skin.hot60 > a > .t100`
- `.small-items.is-dark-skin.life20:nth-child(2) > a > .t100`
- `.small-items.is-dark-skin.life20:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(8) > .gridspotlightside.life40.hot50:nth-child(3) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(8) > .no-image.life20.gridspotlightside > a > .t100`
- `.h-low.is-dark-skin.hot70 > a > .t100`
- `.ThreeTeasers.grid:nth-child(10) > .hot70.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(10) > .no-image.life20.gridtriple > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(13) > .gridspotlight.card-size-large.hot70 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(13) > .is-section-trdby-skin.is-skin.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(13) > .is-section-meninger-skin.opinion.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(13) > .no-image.life20.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(14) > .is-section-mn24-skin.life20.is-skin > a > .t100`
- `.is-section-meninger-skin.opinion.gridspotlight > a > .t100`
- `.opinion.hot70.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(14) > .no-image.life20.gridspotlightside > a > .t100`
- `.ThreeTeasers.grid:nth-child(17) > .no-image.life20.gridtriple > a > .t100`
- `.is-section-trdby-skin.life20.is-skin > a > .t100`
- `.feature > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(18) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(18) > .hot60.life20.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(18) > .gridspotlightside.life40.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(18) > .no-image.life20.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .no-image.life20.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .gridspotlight.card-size-large.hot70 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(20) > .life20.gridspotlightside.hot50:nth-child(4) > a > .t100`
- `.AdWithTeaser.grid:nth-child(21) > .life20.gridtriple.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(22) > .is-section-mn24-skin.life20.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(22) > .hot70.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(22) > .is-section-meninger-skin.opinion.hot60 > a > .t100`
- `.customSkin-focus-top > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .hot60.gridspotlightside.life40 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .no-image.life20.gridspotlightside > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(25) > .hot70.gridspotlightside.life40 > a > .t100`
- `.hot40.life20.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(26) > .is-section-sport-skin.hot60.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(28) > .hot60.life20.gridtriple > a > .t100`
- `.opinion.hot70.gridtriple > a > .t100`
- `.hot40.is-section-trdby-skin.is-skin > a > .t100`
- `.ThreeTeasers.grid:nth-child(29) > .life60.gridtriple.hot50 > a > .t100`
- `.grade.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(29) > .is-section-trdby-skin.is-skin.gridtriple > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(31) > .gridtriple.life40.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(32) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.ThreeTeasers.grid:nth-child(32) > .life20.gridtriple.hot50:nth-child(2) > a > .t100`
- `.ThreeTeasers.grid:nth-child(32) > .is-section-mn24-skin.life20.is-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .gridspotlight.card-size-large.hot60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .is-section-mn24-skin.life20.is-skin > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(35) > .is-section-trdby-skin.is-skin.gridspotlightside > a > .t100`
- `.AdWithTeaser.grid:nth-child(36) > .is-section-meninger-skin.opinion.life20 > a > .t100`
- `.is-dark-skin.is-skin.gridspotlightside > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(37) > .gridspotlight.life60.card-size-large > a > .t100`
- `.life60.hot70.gridspotlightside > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(38) > .gridtriple.life40.hot50 > a > .t100`
- `.ThreeTeasers.grid:nth-child(39) > .hot60.gridtriple.life40:nth-child(1) > a > .t100`
- `.ThreeTeasers.grid:nth-child(39) > .is-section-meninger-skin.opinion.hot60 > a > .t100`
- `.ThreeTeasers.grid:nth-child(39) > .hot60.gridtriple.life40:nth-child(3) > a > .t100`
- `.AdWithTeaser.grid:nth-child(40) > .hot70.gridtriple.life40 > a > .t100`
- `.is-section-kultur-skin.gridspotlight.life60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(41) > .gridspotlightside.life40.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(41) > .life60.gridspotlightside.hot50 > a > .t100`
- `.is-section-kultur-skin.grade.life60 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .life60.gridspotlightside.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .gridspotlight.card-size-large.hot70 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(43) > .gridspotlightside.life40.hot50 > a > .t100`
- `.life60.hot60.gridtriple > a > .t100`
- `.ThreeTeasers.grid:nth-child(44) > .hot60.gridtriple.life40 > a > .t100`
- `.ThreeTeasers.grid:nth-child(44) > .grade.life60.hot70 > a > .t100`
- `.hot80.life60.gridtriple > a > .t100`
- `.is-section-trdby-skin.gridspotlight.life60 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .gridspotlightside.life40.hot50 > a > .t100`
- `.OnePlusXTeasers.grid:nth-child(46) > .life60.gridspotlightside.hot50 > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .life60.gridspotlightside.hot50:nth-child(1) > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.life60.card-size-large > a > .t100`
- `.flipped.OnePlusXTeasers.grid:nth-child(47) > .life60.gridspotlightside.hot50:nth-child(3) > a > .t100`
- `.AdWithTeaser.flipped.grid:nth-child(48) > .life60.gridtriple.hot50 > a > .t100`

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
