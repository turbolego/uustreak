# WCAG Violations Report for Extra Leker Butikker AS

**Timestamp:** 2026-01-21T00:26:00.785Z
**URL:** [https://www.extra-leker.no/#](https://www.extra-leker.no/#)
**Total Violations:** 7

## Violation Details

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `.section-items`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 14

#### Affected Elements:

- `#CybotCookiebotDialogNavDeclaration`
- `#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`
- `.product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(2) > .product-item-info > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
- `.product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(3) > .product-item-info > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
- `.product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(4) > .product-item-info > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
- `.product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(4) > .product-item-info > .details.product-item-details.product > .product-price-stock > .price-box > .old-price > .price-container > .price-wrapper > .price`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(1) > div[lass="product-item-info"] > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(1) > div[lass="product-item-info"] > .details.product-item-details.product > .product-price-stock > .price-box > .old-price > .price-container > .price-wrapper > .price`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(2) > div[lass="product-item-info"] > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(2) > div[lass="product-item-info"] > .details.product-item-details.product > .product-price-stock > .price-box > .old-price > .price-container > .price-wrapper > .price`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(3) > div[lass="product-item-info"] > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
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
- `.photo.product-item-photo[data-clerk-product-id="46923"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="46922"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.product-item-info > .photo.product-item-photo[data-clerk-product-id="99946"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="93155"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="105478"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="100064"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="15226"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="15221"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="15240"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="105416"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `.photo.product-item-photo[data-clerk-product-id="109456"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(1) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="99946"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(2) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="105474"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(3) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="99916"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(4) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="105489"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(5) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="107162"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(6) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="55698"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(7) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="47163"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(8) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="95011"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(9) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="41977"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(10) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="31184"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(11) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="87983"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(12) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="3958"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(13) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="74764"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(14) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="12020"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(15) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="107816"] > .product-image-container > .product-image-wrapper > .product-image-photo`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(16) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="43004"] > .product-image-container > .product-image-wrapper > .product-image-photo`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 29

#### Affected Elements:

- `.photo.product-item-photo[data-clerk-product-id="47955"]`
- `.photo.product-item-photo[data-clerk-product-id="46923"]`
- `.photo.product-item-photo[data-clerk-product-id="46922"]`
- `.product-item-info > .photo.product-item-photo[data-clerk-product-id="99946"]`
- `.photo.product-item-photo[data-clerk-product-id="93155"]`
- `.photo.product-item-photo[data-clerk-product-id="105478"]`
- `.photo.product-item-photo[data-clerk-product-id="100064"]`
- `.photo.product-item-photo[data-clerk-product-id="15226"]`
- `.photo.product-item-photo[data-clerk-product-id="15221"]`
- `.photo.product-item-photo[data-clerk-product-id="15240"]`
- `.photo.product-item-photo[data-clerk-product-id="105416"]`
- `.photo.product-item-photo[data-clerk-product-id="109456"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(1) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="99946"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(2) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="105474"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(3) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="99916"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(4) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="105489"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(5) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="107162"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(6) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="55698"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(7) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="47163"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(8) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="95011"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(9) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="41977"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(10) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="31184"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(11) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="87983"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(12) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="3958"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(13) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="74764"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(14) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="12020"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(15) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="107816"]`
- `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(16) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="43004"]`
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
