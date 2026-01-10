# WCAG Violations Report for Vitus Apotek Norsk Medisinaldepot AS

**Timestamp:** 2026-01-10T00:41:21.850Z
**URL:** [https://www.vitusapotek.no/](https://www.vitusapotek.no/)
**Total Violations:** 6

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 6

#### Affected Elements:

- `.product-listing.product-grid.product-slider:nth-child(2) > .owl-wrapper-outer > .owl-wrapper > .owl-item:nth-child(1) > .product-item > .panel.panel-default.fit-row-height-done > .carousel-promotion-section.hidden > .product-carousel-member-promotion > a`
- `.product-listing.product-grid.product-slider:nth-child(4) > .owl-wrapper-outer > .owl-wrapper > .owl-item:nth-child(1) > .product-item > .panel.panel-default.fit-row-height-done > .carousel-promotion-section.hidden > .product-carousel-member-promotion > a`
- `.owl-item:nth-child(2) > .product-item > .panel.panel-default.fit-row-height-done > .carousel-promotion-section.hidden > .product-carousel-member-promotion > a`
- `.owl-item:nth-child(3) > .product-item > .panel.panel-default.fit-row-height-done > .carousel-promotion-section.hidden > .product-carousel-member-promotion > a`
- `.owl-item:nth-child(4) > .product-item > .panel.panel-default.fit-row-height-done > .carousel-promotion-section.hidden > .product-carousel-member-promotion > a`
- `.owl-item:nth-child(5) > .product-item > .panel.panel-default.fit-row-height-done > .carousel-promotion-section.hidden > .product-carousel-member-promotion > a`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `span:nth-child(1) > a[target="_blank"] > img`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.secondary-navigation`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `span:nth-child(1) > a[target="_blank"]`

### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `div > .log_in`

### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 1

#### Affected Elements:

- `meta[name="viewport"]`
