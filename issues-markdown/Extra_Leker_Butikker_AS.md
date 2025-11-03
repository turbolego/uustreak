# WCAG Violations Report for Extra Leker Butikker AS

**Timestamp:** 2025-11-03T00:24:03.835Z
**URL:** [https://www.extra-leker.no/#](https://www.extra-leker.no/#)
**Total Violations:** 9

## Violation Details

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 2

#### Affected Elements:

- `.section-items`
- `#ui-id-1`

### Certain ARIA roles must be contained by particular parents

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require parent roles are contained by them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-parent?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 9

#### Affected Elements:

- `#ui-id-2`
- `#ui-id-3`
- `#ui-id-59`
- `#ui-id-60`
- `#ui-id-61`
- `#ui-id-62`
- `#ui-id-63`
- `#ui-id-127`
- `#ui-id-128`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 16

#### Affected Elements:

- `#CybotCookiebotDialogNavDeclaration`
- `#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`
- `.product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(1) > .product-item-info > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
- `.product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(1) > .product-item-info > .details.product-item-details.product > .product-price-stock > .price-box > .old-price > .price-container > .price-wrapper > .price`
- `.product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(2) > .product-item-info > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
- `.product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(2) > .product-item-info > .details.product-item-details.product > .product-price-stock > .price-box > .old-price > .price-container > .price-wrapper > .price`
- `.product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(3) > .product-item-info > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
- `.product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(3) > .product-item-info > .details.product-item-details.product > .product-price-stock > .price-box > .old-price > .price-container > .price-wrapper > .price`
- `.product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(4) > .product-item-info > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(1) > div[lass="product-item-info"] > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(1) > div[lass="product-item-info"] > .details.product-item-details.product > .product-price-stock > .price-box > .old-price > .price-container > .price-wrapper > .price`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(2) > div[lass="product-item-info"] > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(2) > div[lass="product-item-info"] > .details.product-item-details.product > .product-price-stock > .price-box > .old-price > .price-container > .price-wrapper > .price`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(3) > div[lass="product-item-info"] > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(3) > div[lass="product-item-info"] > .details.product-item-details.product > .product-price-stock > .price-box > .price-container > .price-wrapper > .price`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(4) > div[lass="product-item-info"] > .details.product-item-details.product > .product-price-stock > .price-box > .price-container > .price-wrapper > .price`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 28

#### Affected Elements:

- `.photo.product-item-photo[data-clerk-product-id="100587"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="52930"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="93826"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="15216"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="78045"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="105417"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="39961"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="1524"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="15215"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="55766"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="15240"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="105416"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(1) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="39119"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(2) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="78039"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(3) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="85755"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(4) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="85561"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(5) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="55227"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(6) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="45575"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(7) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="74823"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(8) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="94497"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(9) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="55828"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(10) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="78493"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(11) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="92834"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(12) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="48662"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(13) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="52621"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(14) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="48401"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(15) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="85148"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(16) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="74753"] > .product-image-container > .product-image-wrapper > .product-image-photo`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 29

#### Affected Elements:

- `.photo.product-item-photo[data-clerk-product-id="100587"]`
- `.photo.product-item-photo[data-clerk-product-id="52930"]`
- `.photo.product-item-photo[data-clerk-product-id="93826"]`
- `.photo.product-item-photo[data-clerk-product-id="15216"]`
- `.photo.product-item-photo[data-clerk-product-id="78045"]`
- `.photo.product-item-photo[data-clerk-product-id="105417"]`
- `.photo.product-item-photo[data-clerk-product-id="39961"]`
- `.photo.product-item-photo[data-clerk-product-id="1524"]`
- `.photo.product-item-photo[data-clerk-product-id="15215"]`
- `.photo.product-item-photo[data-clerk-product-id="55766"]`
- `.photo.product-item-photo[data-clerk-product-id="15240"]`
- `.photo.product-item-photo[data-clerk-product-id="105416"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(1) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="39119"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(2) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="78039"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(3) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="85755"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(4) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="85561"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(5) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="55227"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(6) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="45575"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(7) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="74823"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(8) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="94497"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(9) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="55828"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(10) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="78493"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(11) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="92834"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(12) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="48662"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(13) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="52621"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(14) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="48401"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(15) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="85148"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(16) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="74753"]`
- `.cookies > a[href$="extra-leker.no/"]`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 2

#### Affected Elements:

- `#\$id`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target`

### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 9

#### Affected Elements:

- `#ui-id-1 > .nav-1.menu-item-home.level0`
- `#ui-id-1 > .nav-2.menu-type-subcategories.has-6subcategories`
- `#ui-id-1 > .nav-3.level0.level-top`
- `#ui-id-1 > .nav-4.active.level0`
- `#ui-id-1 > .nav-5.level0.level-top`
- `#ui-id-1 > .nav-6.level0.level-top`
- `#ui-id-1 > .nav-7.menu-type-subcategories.has-6subcategories`
- `#ui-id-1 > .nav-8.level0.level-top`
- `#ui-id-1 > .ambrands-menu-item.level0[data-ambrands-js="brands-menu-link"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.usp-section`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.skipLink`
- `.sticky-header-row > .logo[title="Magento Commerce"][href$="extra-leker.no/"]`
