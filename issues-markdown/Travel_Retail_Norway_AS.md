# WCAG Violations Report for Travel Retail Norway AS

**Timestamp:** 2026-10-30T05:04:41.274Z
**URL:** [https://www.tax-free.no/no/](https://www.tax-free.no/no/)
**Total Violations:** 10

## Violation Details

### ARIA dialog and alertdialog nodes should have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA dialog and alertdialog node has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-dialog-name?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#trn-popover-10`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.media-banner_container_text-position_BOTTOM_RIGHT.media-banner_container_content-alignment_LEFT.media-banner_container_text-theme_LIGHT > .subtitle`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.media-banner_container_text-position_BOTTOM_RIGHT.media-banner_container_content-alignment_LEFT.media-banner_container_text-theme_LIGHT > .subtitle`
- `.message-heading`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 56

#### Affected Elements:

- `.header.ab-version_1[aria-label="Butikkvelger"]`
- `.page-header > .FavoriteProductsSlot.has-components[position="FavoriteProductsSlot"] > trn-wish-list-icon > .wishlist-icon-button[aria-label="Se mine favoritter"][href$="wishlists"]`
- `.media-banner-grid_width-2.media-banner-grid_height-4.media-banner-grid_item:nth-child(1) > trn-media-banner-item > .media-banner_wrapper_rounded.media-banner_wrapper[_ngcontent-ng-c2539610980=""] > .media-banner_link[title="KJØP NÅ"][target="_self"]`
- `.media-banner-grid_width-2.media-banner-grid_height-4.media-banner-grid_item:nth-child(2) > trn-media-banner-item > .media-banner_wrapper_rounded.media-banner_wrapper[_ngcontent-ng-c2539610980=""] > .media-banner_link[aria-label="Se årets julekalendere"][title="KJØP NÅ"]`
- `a[aria-label="Se alle tilbuder"]`
- `#scrollable_viewport_35 > trn-product-card:nth-child(1) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_35 > trn-product-card:nth-child(2) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_35 > trn-product-card:nth-child(3) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_35 > trn-product-card:nth-child(4) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_35 > trn-product-card:nth-child(5) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_35 > trn-product-card:nth-child(6) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_35 > trn-product-card:nth-child(7) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_35 > trn-product-card:nth-child(8) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_35 > trn-product-card:nth-child(9) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_35 > trn-product-card:nth-child(10) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_35 > trn-product-card:nth-child(11) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_35 > trn-product-card:nth-child(12) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `trn-product-card:nth-child(13) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `trn-product-card:nth-child(14) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `trn-product-card:nth-child(15) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `trn-product-card:nth-child(16) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `.Section2A > trn-click-and-collect-card > section > .card > .card__content[_ngcontent-ng-c1426933823=""] > .card__steps-block[_ngcontent-ng-c1426933823=""] > .card__steps[_ngcontent-ng-c1426933823=""] > trn-airport-pill > .pill[aria-label="Butikkvelger"][_ngcontent-ng-c2052881801=""]`
- `#scrollable_viewport_49 > trn-product-card:nth-child(1) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_49 > trn-product-card:nth-child(2) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_49 > trn-product-card:nth-child(3) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_49 > trn-product-card:nth-child(4) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_49 > trn-product-card:nth-child(5) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_49 > trn-product-card:nth-child(6) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_49 > trn-product-card:nth-child(7) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_49 > trn-product-card:nth-child(8) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_49 > trn-product-card:nth-child(9) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_51 > trn-product-card:nth-child(1) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_51 > trn-product-card:nth-child(2) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_51 > trn-product-card:nth-child(3) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_51 > trn-product-card:nth-child(4) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_51 > trn-product-card:nth-child(5) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_51 > trn-product-card:nth-child(6) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_51 > trn-product-card:nth-child(7) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_53 > trn-product-card:nth-child(1) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_53 > trn-product-card:nth-child(2) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_53 > trn-product-card:nth-child(3) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_53 > trn-product-card:nth-child(4) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_53 > trn-product-card:nth-child(5) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_53 > trn-product-card:nth-child(6) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_53 > trn-product-card:nth-child(7) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_53 > trn-product-card:nth-child(8) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_53 > trn-product-card:nth-child(9) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_53 > trn-product-card:nth-child(10) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_53 > trn-product-card:nth-child(11) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `#scrollable_viewport_53 > trn-product-card:nth-child(12) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
- `.media-banner-grid_width-3.media-banner-grid_height-3.media-banner-grid_item:nth-child(1) > trn-media-banner-item > .media-banner_wrapper_section-BOTTOM.media-banner_wrapper_rounded.media-banner_wrapper > .media-banner_link[title="KJØP NÅ"][target="_self"]`
- `.media-banner-grid_width-3.media-banner-grid_height-3.media-banner-grid_item:nth-child(2) > trn-media-banner-item > .media-banner_wrapper_section-BOTTOM.media-banner_wrapper_rounded.media-banner_wrapper > .media-banner_link[title="KJØP NÅ"][target="_self"]`
- `a[aria-label="Les artikkel Vinguide"]`
- `a[aria-label="Les artikkel Ginbølgen"]`
- `trn-article:nth-child(3) > .primary > div[_ngcontent-ng-c1098918959=""] > .article-link[_ngcontent-ng-c1098918959=""] > trn-link[icon="arrow_forward"][iconplacement="icon-right"][_ngcontent-ng-c1098918959=""] > .primary-dark[title="Les artikkelen"][target="_self"]`
- `.footer[aria-label="Butikkvelger"][_ngcontent-ng-c1743065153=""]`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.cx-header`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.cx-header`
- `trn-footer-links-navigation > nav[aria-label="Navigasjon i bunntekst"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 44

#### Affected Elements:

- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1769598"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1783610"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1777717"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1780559"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1746146"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1783569"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1783399"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1783405"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1640316"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1184600"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1771581"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1777754"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1777731"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1783177"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1772028"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1783640"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1783335"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1783468"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1777589"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1780558"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1772037"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1584510"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1610977"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1778029"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1783172"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1795418"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1773594"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1795413"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1773784"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1795318"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1795415"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1773585"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="850593"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1620594"][href$="smash-xxl"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1687774"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1625512"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1694087"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1625510"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1374037"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1723423"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1625509"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1625507"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1625508"][href$="freia-daim"]`
- `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1625511"]`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `bam-playlist,.player-container`

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `bam-playlist,bam-player[video-id="puv_wcjPeir9SacUpcig1WckEf"],.has-preview.wrapper[role="button"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `trn-skip-content`
