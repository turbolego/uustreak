# WCAG Violations Report for Extra Leker Butikker AS

**Timestamp:** 2026-10-22T03:43:09.319Z
**URL:** [https://www.extra-leker.no/](https://www.extra-leker.no/)
**Total Violations:** 9

## Violation Details

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.section-items`
  - **HTML:** `<div class="section-items nav-sections-items mage-tabs-disabled" role="tablist">`
  - **Failure summary:** Fix any of the following: Element has children which are not allowed: [role=tabpanel]

- **Target:** `#ui-id-1`
  - **HTML:** `<ul id="ui-id-1" class="ui-menu ui-widget ui-widget-content ui-corner-all" role="menu" tabindex="0">`
  - **Failure summary:** Fix any of the following: Element has children which are not allowed: li


### Certain ARIA roles must be contained by particular parents

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require parent roles are contained by them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-required-parent?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 8

#### Affected Elements:

- **Target:** `#ui-id-2`
  - **HTML:** `<a href="https://www.extra-leker.no/" class="level-top ui-menu-item-wrapper" id="ui-id-2" tabindex="-1" role="menuitem"><span class="icon-text"><span>Hjem</span></span></a>`
  - **Failure summary:** Fix any of the following: Required ARIA parents role not present: menu, menubar, group

- **Target:** `#ui-id-3`
  - **HTML:** `<a class="level-top ui-menu-item-wrapper" aria-haspopup="true" id="ui-id-3" tabindex="-1" role="menuitem"><span class="ui-menu-icon ui-icon ui-icon-caret-1-e"></span><span class="icon-text"><span>Kategorier</span></span></a>`
  - **Failure summary:** Fix any of the following: Required ARIA parents role not present: menu, menubar, group

- **Target:** `#ui-id-56`
  - **HTML:** `<a href="https://www.extra-leker.no/leker" class="level-top ui-menu-item-wrapper" aria-haspopup="true" id="ui-id-56" tabindex="-1" role="menuitem"><span class="ui-menu-icon ui-icon ui-icon-caret-1-e"></span><span class="icon-text"><span>Le…`
  - **Failure summary:** Fix any of the following: Required ARIA parents role not present: menu, menubar, group

- **Target:** `#ui-id-120`
  - **HTML:** `<a href="https://www.extra-leker.no/leker-pa-tilbud" class="level-top ui-menu-item-wrapper" id="ui-id-120" tabindex="-1" role="menuitem"><span class="icon-text"><span>Tilbud</span></span></a>`
  - **Failure summary:** Fix any of the following: Required ARIA parents role not present: menu, menubar, group

- **Target:** `#ui-id-121`
  - **HTML:** `<a href="https://www.extra-leker.no/lego-shop" class="level-top ui-menu-item-wrapper" id="ui-id-121" tabindex="-1" role="menuitem"><span class="icon-text"><span>LEGO </span></span></a>`
  - **Failure summary:** Fix any of the following: Required ARIA parents role not present: menu, menubar, group

- **Target:** `#ui-id-122`
  - **HTML:** `<a href="https://www.extra-leker.no/gavetips" class="level-top ui-menu-item-wrapper" id="ui-id-122" tabindex="-1" role="menuitem"><span class="icon-text"><span>Gavetips</span></span></a>`
  - **Failure summary:** Fix any of the following: Required ARIA parents role not present: menu, menubar, group

- **Target:** `#ui-id-123`
  - **HTML:** `<a href="https://www.extra-leker.no/nye-varer" class="level-top ui-menu-item-wrapper" id="ui-id-123" tabindex="-1" role="menuitem"><span class="icon-text"><span>Nyheter</span></span></a>`
  - **Failure summary:** Fix any of the following: Required ARIA parents role not present: menu, menubar, group

- **Target:** `#ui-id-124`
  - **HTML:** `<a href="https://www.extra-leker.no/merker-leketoy/" class="level-top ambrands-link ui-menu-item-wrapper" title="Merker" id="ui-id-124" tabindex="-1" role="menuitem"> Merker </a>`
  - **Failure summary:** Fix any of the following: Required ARIA parents role not present: menu, menubar, group


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 16

#### Affected Elements:

- **Target:** `#CybotCookiebotDialogNavDeclaration`
  - **HTML:** `<a id="CybotCookiebotDialogNavDeclaration" class="CybotCookiebotDialogNavItemLink CybotCookiebotDialogActive" href="#" data-target="CybotCookiebotDialogBody" tabindex="0" role="tab" aria-selected="true" aria-controls="CybotCookiebotDialogB…`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.91 (foreground color: #00953b, background color: #ffffff, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`
  - **HTML:** `<button id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll" class="CybotCookiebotDialogBodyButton" tabindex="0" lang="nb">Tillat alle</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.91 (foreground color: #ffffff, background color: #00953b, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(1) > .product-item-info > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
  - **HTML:** `<span>Hama Perler</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #808080, background color: #ffffff, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(2) > .product-item-info > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
  - **HTML:** `<span>Hama Perler</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #808080, background color: #ffffff, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(4) > .product-item-info > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
  - **HTML:** `<span>Hama Perler</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #808080, background color: #ffffff, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(1) > div[lass="product-item-info"] > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
  - **HTML:** `<span>LEGO</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #808080, background color: #ffffff, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(1) > div[lass="product-item-info"] > .details.product-item-details.product > .product-price-stock > .price-box > .old-price > .price-container > .price-wrapper > .price`
  - **HTML:** `<span class="price"> 346,- </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #808080, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(2) > div[lass="product-item-info"] > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
  - **HTML:** `<span>LEGO</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #808080, background color: #ffffff, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(2) > div[lass="product-item-info"] > .details.product-item-details.product > .product-price-stock > .price-box > .old-price > .price-container > .price-wrapper > .price`
  - **HTML:** `<span class="price"> 346,- </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #808080, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(3) > div[lass="product-item-info"] > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
  - **HTML:** `<span>Kiddieland</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #808080, background color: #ffffff, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(3) > div[lass="product-item-info"] > .details.product-item-details.product > .product-price-stock > .price-box > .old-price > .price-container > .price-wrapper > .price`
  - **HTML:** `<span class="price"> 399,- </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #808080, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(4) > div[lass="product-item-info"] > .details.product-item-details.product > .name.product-item-name[data-tiny-equalizer="product-title-clerk-height"] > .product-item-manufacturer[data-tiny-equalizer="product-brand-clerk-height"] > span`
  - **HTML:** `<span>LEGO</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #808080, background color: #ffffff, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(4) > div[lass="product-item-info"] > .details.product-item-details.product > .product-price-stock > .price-box > .old-price > .price-container > .price-wrapper > .price`
  - **HTML:** `<span class="price"> 346,- </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #808080, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.lipscore-slide-active > .lipscore-testimonial-slider-slide-content > .lipscore-testimonial-slider-header > .lipscore-testimonial-slider-info > .lipscore-testimonial-slider-user`
  - **HTML:** `<span class="lipscore-testimonial-slider-user"> <span class="lipscore-visually-hidden">Forfatter:&nbsp;</span> Pertti Lindroos </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.29 (foreground color: #ababab, background color: #ffffff, font size: 13.5pt (18px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `.lipscore-slide-active > .lipscore-testimonial-slider-slide-content > .lipscore-testimonial-slider-header > .lipscore-testimonial-slider-date`
  - **HTML:** `<span class="lipscore-testimonial-slider-date"> <span class="lipscore-visually-hidden">Dato:&nbsp;</span> 12.10.2026 </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.29 (foreground color: #ababab, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.lipscore-slide-active > .lipscore-testimonial-slider-slide-content > .lipscore-testimonial-slider-text > .lipscore-testimonial-text-content`
  - **HTML:** `<span class="lipscore-testimonial-text-content">Gikk som avtalt och planerat. Tack !</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.29 (foreground color: #ababab, background color: #ffffff, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 28

#### Affected Elements:

- **Target:** `.photo.product-item-photo[data-clerk-product-id="15216"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/6/1/61534_1__179549__h62090134.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.photo.product-item-photo[data-clerk-product-id="15215"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/6/1/61533_1__179548__h62090134.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.photo.product-item-photo[data-clerk-product-id="115026"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/n/t/nti-889503_1_1__306440__h62090134.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.photo.product-item-photo[data-clerk-product-id="15219"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/6/1/61537_1__179552__h62090134.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.photo.product-item-photo[data-clerk-product-id="15217"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/6/1/61535_1_1__179550__h62090134.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.photo.product-item-photo[data-clerk-product-id="47955"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/n/t/nti-868160_1__226696__hb10cfaaf.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.photo.product-item-photo[data-clerk-product-id="105417"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/1/0/10374_1__297278__h62090134.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.photo.product-item-photo[data-clerk-product-id="111153"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/1/0/10365_1__302625__h62090134.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.photo.product-item-photo[data-clerk-product-id="15224"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/6/1/61542_1__179557__h62090134.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.photo.product-item-photo[data-clerk-product-id="15232"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/6/1/61550_1_1__179565__h62090134.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.photo.product-item-photo[data-clerk-product-id="105416"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/1/0/10372_1__297277__h62090134.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.photo.product-item-photo[data-clerk-product-id="15226"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/6/1/61544_1__179559__h62090134.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(1) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="100065"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/2/5/250211-093412-77243_1__292225__ha489cfab.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(2) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="100064"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/2/5/250211-093348-77242_1__292224__hcf7dff1b.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(3) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="43067"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/n/t/nti-861172_1__221285__hc730dc11.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(4) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="105581"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/7/7/77240_1__297442__h62090134.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(5) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="93104"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/7/6/76924_1__285414__h62090134.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(6) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="69020"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/n/t/nti-880533_10__228692__h62090134.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(7) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="86988"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/n/t/nti-883132_1__276261__h62090134.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(8) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="97413"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/n/t/nti-885931_1__289684__h62090134.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(9) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="74823"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/n/t/nti-881802_1__252381__h62090134.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(10) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="100073"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/2/5/250211-093455-77251_1__292233__hbe97e1ec.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(11) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="82367"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/n/t/nti-883036_1__267020__h62090134.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(12) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="93049"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/3/1/31151_1__285359__h62090134.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(13) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="47965"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/n/t/nti-868172_18__226708__h62090134.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(14) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="91628"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/2/4/240222-071750-76919_1__283922__hc60ba9ae.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(15) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="36272"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/9/1/91528_1__208668__heb3095a4.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(16) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="100066"] > .product-image-container > .product-image-wrapper > .product-image-photo`
  - **HTML:** `<img class="product-image-photo" src="https://www.extra-leker.no/media/catalog/product/2/5/250211-093341-77244_1__292226__h2dc19744.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 29

#### Affected Elements:

- **Target:** `.photo.product-item-photo[data-clerk-product-id="15216"]`
  - **HTML:** `<a data-clerk-product-id="15216" class="product photo product-item-photo" href="https://www.extra-leker.no/hama-midi-perler-1000-stk-hvit-nr-01" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking-added="true" style=…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.photo.product-item-photo[data-clerk-product-id="15215"]`
  - **HTML:** `<a data-clerk-product-id="15215" class="product photo product-item-photo" href="https://www.extra-leker.no/hama-midi-perler-1000-stk-svart-nr-18" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking-added="true" style…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.photo.product-item-photo[data-clerk-product-id="115026"]`
  - **HTML:** `<a data-clerk-product-id="115026" class="product photo product-item-photo" href="https://www.extra-leker.no/squishy-klemmeleke-mystery-10-cm-steamed-bun" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking-added="tru…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.photo.product-item-photo[data-clerk-product-id="15219"]`
  - **HTML:** `<a data-clerk-product-id="15219" class="product photo product-item-photo" href="https://www.extra-leker.no/hama-midi-perler-1000-stk-rod-nr-05" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking-added="true" style="…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.photo.product-item-photo[data-clerk-product-id="15217"]`
  - **HTML:** `<a data-clerk-product-id="15217" class="product photo product-item-photo" href="https://www.extra-leker.no/hama-midi-perler-1000-stk-gul-nr-03" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking-added="true" style="…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.photo.product-item-photo[data-clerk-product-id="47955"]`
  - **HTML:** `<a data-clerk-product-id="47955" class="product photo product-item-photo" href="https://www.extra-leker.no/pengeskap-med-kode" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking-added="true" style="height: 285px;">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.photo.product-item-photo[data-clerk-product-id="105417"]`
  - **HTML:** `<a data-clerk-product-id="105417" class="product photo product-item-photo" href="https://www.extra-leker.no/lego-botanicals-10374-rosa-rosebukett" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking-added="true" styl…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.photo.product-item-photo[data-clerk-product-id="111153"]`
  - **HTML:** `<a data-clerk-product-id="111153" class="product photo product-item-photo" href="https://www.extra-leker.no/lego-icons-10365-kaptein-jack-sparrows-sjoroverskute" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking-ad…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.photo.product-item-photo[data-clerk-product-id="15224"]`
  - **HTML:** `<a data-clerk-product-id="15224" class="product photo product-item-photo" href="https://www.extra-leker.no/hama-midi-perler-1000-stk-gronn-nr-10" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking-added="true" style…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.photo.product-item-photo[data-clerk-product-id="15232"]`
  - **HTML:** `<a data-clerk-product-id="15232" class="product photo product-item-photo" href="https://www.extra-leker.no/hama-midi-perler-1000-stk-bla-nr-08" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking-added="true" style="…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.photo.product-item-photo[data-clerk-product-id="105416"]`
  - **HTML:** `<a data-clerk-product-id="105416" class="product photo product-item-photo" href="https://www.extra-leker.no/lego-botanicals-10372-hibiskus" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking-added="true" style="heig…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.photo.product-item-photo[data-clerk-product-id="15226"]`
  - **HTML:** `<a data-clerk-product-id="15226" class="product photo product-item-photo" href="https://www.extra-leker.no/hama-midi-perler-1000-stk-brun-nr-12" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking-added="true" style=…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(1) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="100065"]`
  - **HTML:** `<a data-clerk-product-id="100065" class="product photo product-item-photo" href="https://www.extra-leker.no/lego-speed-champions-77243-oracle-red-bull-racing-rb20-f1-racerbil" data-tiny-equalizer="product-photo-clerk-height" data-clerk-cli…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(2) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="100064"]`
  - **HTML:** `<a data-clerk-product-id="100064" class="product photo product-item-photo" href="https://www.extra-leker.no/lego-speed-champions-77242-ferrari-sf-24-f1-racerbil" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking-ad…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(3) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="43067"]`
  - **HTML:** `<a data-clerk-product-id="43067" class="product photo product-item-photo" href="https://www.extra-leker.no/kiddieland-traktor-med-henger-fra-12-maneder-1" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking-added="tr…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(4) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="105581"]`
  - **HTML:** `<a data-clerk-product-id="105581" class="product photo product-item-photo" href="https://www.extra-leker.no/lego-speed-champions-77240-hypersportsbilen-bugatti-centodieci" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-t…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(5) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="93104"]`
  - **HTML:** `<a data-clerk-product-id="93104" class="product photo product-item-photo" href="https://www.extra-leker.no/lego-speed-champions-76924-mercedes-amg-g-63-og-mercedes-amg-sl-63" data-tiny-equalizer="product-photo-clerk-height" data-clerk-clic…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(6) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="69020"]`
  - **HTML:** `<a data-clerk-product-id="69020" class="product photo product-item-photo" href="https://www.extra-leker.no/dickie-toys-lastebilkoffert-m-9-lekebiler" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking-added="true" s…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(7) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="86988"]`
  - **HTML:** `<a data-clerk-product-id="86988" class="product photo product-item-photo" href="https://www.extra-leker.no/snowracer-iconic-red" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking-added="true" style="height: 285px;">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(8) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="97413"]`
  - **HTML:** `<a data-clerk-product-id="97413" class="product photo product-item-photo" href="https://www.extra-leker.no/slush-puppie-slushmaskin-ny" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking-added="true" style="height: …`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(9) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="74823"]`
  - **HTML:** `<a data-clerk-product-id="74823" class="product photo product-item-photo" href="https://www.extra-leker.no/mini-bordspill-air-hockey" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking-added="true" style="height: 28…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(10) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="100073"]`
  - **HTML:** `<a data-clerk-product-id="100073" class="product photo product-item-photo" href="https://www.extra-leker.no/lego-speed-champions-77251-mclaren-f1-team-mcl38-racerbil" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracki…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(11) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="82367"]`
  - **HTML:** `<a data-clerk-product-id="82367" class="product photo product-item-photo" href="https://www.extra-leker.no/syma-stuntkule-med-led-lys-revolt-orbiter" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking-added="true" s…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(12) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="93049"]`
  - **HTML:** `<a data-clerk-product-id="93049" class="product photo product-item-photo" href="https://www.extra-leker.no/lego-creator-31151-t-rex" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking-added="true" style="height: 285…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(13) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="47965"]`
  - **HTML:** `<a data-clerk-product-id="47965" class="product photo product-item-photo" href="https://www.extra-leker.no/interaktiv-plysjbamse-med-fortellinger-30-cm-luna" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking-added=…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(14) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="91628"]`
  - **HTML:** `<a data-clerk-product-id="91628" class="product photo product-item-photo" href="https://www.extra-leker.no/lego-speed-champions-76919-2023-mclaren-formula-1-racerbil" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracki…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(15) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="36272"]`
  - **HTML:** `<a data-clerk-product-id="36272" class="product photo product-item-photo" href="https://www.extra-leker.no/vtech-aktivitetsbord-med-6-laerestasjoner" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking-added="true" s…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target > .product-item.clerk-slider-item[data-tiny-equalizer="product-item-clerk-height"]:nth-child(16) > div[lass="product-item-info"] > .photo.product-item-photo[data-clerk-product-id="100066"]`
  - **HTML:** `<a data-clerk-product-id="100066" class="product photo product-item-photo" href="https://www.extra-leker.no/lego-speed-champions-77244-mercedes-amg-f1-w15-racerbil" data-tiny-equalizer="product-photo-clerk-height" data-clerk-click-tracking…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.cookies > a[href$="extra-leker.no/"]`
  - **HTML:** `<a href="https://www.extra-leker.no/"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#\$id`
  - **HTML:** `<ol id="$id" class=":target clerk-slider products list items product-items">`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: div

- **Target:** `span[data-clerk-content-id="3"] > .widget.block-products-list.block > .products-grid.wrapper.products > .target`
  - **HTML:** `<ol id="" class="target clerk-slider products list items product-items">`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: div


### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 8

#### Affected Elements:

- **Target:** `.nav-1.menu-item-home.active`
  - **HTML:** `<li class="level0 nav-1 first level-top menu-item-home ui-menu-item active"><a href="https://www.extra-leker.no/" class="level-top ui-menu-item-wrapper" id="ui-id-2" tabindex="-1" role="menuitem"><span class="icon-text"><span>Hjem</span></…`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `#ui-id-1 > .nav-2.menu-type-subcategories.has-6subcategories`
  - **HTML:** `<li class="level0 nav-2 category-item level-top parent menu-type-subcategories has-6subcategories ui-menu-item">`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `#ui-id-1 > .nav-3.menu-type-subcategories.has-6subcategories`
  - **HTML:** `<li class="level0 nav-3 category-item level-top parent menu-type-subcategories has-6subcategories ui-menu-item">`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `#ui-id-1 > .nav-4.level0.level-top`
  - **HTML:** `<li class="level0 nav-4 category-item level-top ui-menu-item"><a href="https://www.extra-leker.no/leker-pa-tilbud" class="level-top ui-menu-item-wrapper" id="ui-id-120" tabindex="-1" role="menuitem"><span class="icon-text"><span>Tilbud</sp…`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `.has-active`
  - **HTML:** `<li class="level0 nav-5 category-item has-active level-top ui-menu-item"><a href="https://www.extra-leker.no/lego-shop" class="level-top ui-menu-item-wrapper" id="ui-id-121" tabindex="-1" role="menuitem"><span class="icon-text"><span>LEGO …`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `#ui-id-1 > .nav-6.level0.level-top`
  - **HTML:** `<li class="level0 nav-6 category-item level-top ui-menu-item"><a href="https://www.extra-leker.no/gavetips" class="level-top ui-menu-item-wrapper" id="ui-id-122" tabindex="-1" role="menuitem"><span class="icon-text"><span>Gavetips</span></…`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `#ui-id-1 > .nav-7.level0.level-top`
  - **HTML:** `<li class="level0 nav-7 category-item last level-top ui-menu-item"><a href="https://www.extra-leker.no/nye-varer" class="level-top ui-menu-item-wrapper" id="ui-id-123" tabindex="-1" role="menuitem"><span class="icon-text"><span>Nyheter</sp…`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `#ui-id-1 > .ambrands-menu-item.level0[data-ambrands-js="brands-menu-link"]`
  - **HTML:** `<li class="level0 ambrands-menu-item ui-menu-item" data-ambrands-js="brands-menu-link">`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.usp-section`
  - **HTML:** `<div class="links usp-section" style="padding-right: 0px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.skipLink`
  - **HTML:** `<a href="#maincontent" class="skipLink" tabindex="1">Til hovedinnhold</a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `.sticky-header-row > .logo[title="Magento Commerce"][href$="extra-leker.no/"]`
  - **HTML:** `<a class="logo" tabindex="2" href="https://www.extra-leker.no/" title="Magento Commerce"> <img src="https://www.extra-leker.no/static/version1792134407/frontend/Convert/extra-leker/nb_NO/images/logo.svg" alt="Magento Commerce"> </a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

