# WCAG Violations Report for Extra Leker Butikker AS

**Timestamp:** 2025-12-28T00:30:22.082Z
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
- `#ui-id-126`
- `#ui-id-127`
- `#ui-id-128`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 13

#### Affected Elements:

- `#CybotCookiebotDialogNavDeclaration`
- `#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`
- `.product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(2) > .product-item-info > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
- `.product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(2) > .product-item-info > .details.product-item-details.product > .product-price-stock > .price-box > .old-price > .price-container > .price-wrapper > .price`
- `.product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(3) > .product-item-info > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
- `.product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(3) > .product-item-info > .details.product-item-details.product > .product-price-stock > .price-box > .old-price > .price-container > .price-wrapper > .price`
- `.product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(4) > .product-item-info > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(1) > div[lass="product-item-info"] > .details.product-item-details.product > .product-price-stock > .price-box > .old-price > .price-container > .price-wrapper > .price`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(2) > div[lass="product-item-info"] > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(2) > div[lass="product-item-info"] > .details.product-item-details.product > .product-price-stock > .price-box > .old-price > .price-container > .price-wrapper > .price`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(3) > div[lass="product-item-info"] > .details.product-item-details.product > .product-price-stock > .price-box > .old-price > .price-container > .price-wrapper > .price`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(4) > div[lass="product-item-info"] > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(4) > div[lass="product-item-info"] > .details.product-item-details.product > .product-price-stock > .price-box > .old-price > .price-container > .price-wrapper > .price`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 28

#### Affected Elements:

- `.photo.product-item-photo[data-clerk-product-id="47955"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="7371"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="93155"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="100042"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="46922"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="46923"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="105247"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="15219"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="74772"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="100043"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="107883"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="109456"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(1) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="103887"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(2) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="105491"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(3) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="48662"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(4) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="97304"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(5) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="105504"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(6) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="20626"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(7) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="107564"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(8) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="40848"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(9) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="46087"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(10) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="85892"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(11) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="55821"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(12) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="83311"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(13) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="33994"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(14) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="82367"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(15) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="89775"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(16) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="89212"] > .product-image-container > .product-image-wrapper > .product-image-photo`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 29

#### Affected Elements:

- `.photo.product-item-photo[data-clerk-product-id="47955"]`
- `.photo.product-item-photo[data-clerk-product-id="7371"]`
- `.photo.product-item-photo[data-clerk-product-id="93155"]`
- `.photo.product-item-photo[data-clerk-product-id="100042"]`
- `.photo.product-item-photo[data-clerk-product-id="46922"]`
- `.photo.product-item-photo[data-clerk-product-id="46923"]`
- `.photo.product-item-photo[data-clerk-product-id="105247"]`
- `.photo.product-item-photo[data-clerk-product-id="15219"]`
- `.photo.product-item-photo[data-clerk-product-id="74772"]`
- `.photo.product-item-photo[data-clerk-product-id="100043"]`
- `.photo.product-item-photo[data-clerk-product-id="107883"]`
- `.photo.product-item-photo[data-clerk-product-id="109456"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(1) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="103887"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(2) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="105491"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(3) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="48662"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(4) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="97304"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(5) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="105504"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(6) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="20626"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(7) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="107564"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(8) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="40848"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(9) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="46087"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(10) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="85892"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(11) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="55821"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(12) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="83311"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(13) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="33994"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(14) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="82367"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(15) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="89775"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(16) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="89212"]`
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
- `#ui-id-1 > .nav-4.level0.level-top`
- `#ui-id-1 > .nav-5.level0.level-top`
- `#ui-id-1 > .nav-6.menu-type-subcategories.has-6subcategories`
- `#ui-id-1 > .nav-7.level0.level-top`
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
