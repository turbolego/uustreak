# WCAG Violations Report for Telia Norge AS

**Timestamp:** 2026-10-15T05:48:40.158Z
**URL:** [https://www.telia.no/](https://www.telia.no/)
**Total Violations:** 2

## Violation Details

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 9

#### Affected Elements:

- **Target:** `.slide:nth-child(4) > ._teddy-card--rich-card_139sd_168._teddy-card--gray_139sd_281._teddy-grid_1dv1t_2 > ._teddy-card__inset--top_139sd_426._teddy-card__inset--left_139sd_429._teddy-card__inset--right_139sd_432 > ._teddy-image_jxcdf_2`
  - **HTML:** `<img src="/globalassets/1-ground-zero-prod/images/rich-card-images-568-x-202/sommer-2025/06_digital_sommer25_airpods_4_rich_card_568x202.jpg" class="_teddy-image_jxcdf_2">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.slide:nth-child(1) > .product-card-link > ._teddy-card--border_139sd_58._teddy-card--product_139sd_323.product-card > div:nth-child(2) > .null.secondary-image > ._teddy-image_jxcdf_2`
  - **HTML:** `<img class="_teddy-image_jxcdf_2">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.slide:nth-child(2) > .product-card-link > ._teddy-card--border_139sd_58._teddy-card--product_139sd_323.product-card > div:nth-child(2) > .null.secondary-image > ._teddy-image_jxcdf_2`
  - **HTML:** `<img class="_teddy-image_jxcdf_2">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.slide:nth-child(3) > .product-card-link > ._teddy-card--border_139sd_58._teddy-card--product_139sd_323.product-card > div:nth-child(2) > .null.secondary-image > ._teddy-image_jxcdf_2`
  - **HTML:** `<img class="_teddy-image_jxcdf_2">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.slide:nth-child(4) > .product-card-link > ._teddy-card--border_139sd_58._teddy-card--product_139sd_323.product-card > div:nth-child(2) > .null.secondary-image > ._teddy-image_jxcdf_2`
  - **HTML:** `<img class="_teddy-image_jxcdf_2">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.slide:nth-child(5) > .product-card-link > ._teddy-card--border_139sd_58._teddy-card--product_139sd_323.product-card > div:nth-child(2) > .null.secondary-image > ._teddy-image_jxcdf_2`
  - **HTML:** `<img class="_teddy-image_jxcdf_2">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.slide:nth-child(10) > .product-card-link > ._teddy-card--border_139sd_58._teddy-card--product_139sd_323.product-card > div:nth-child(2) > .null.secondary-image > ._teddy-image_jxcdf_2`
  - **HTML:** `<img class="_teddy-image_jxcdf_2">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.slide:nth-child(11) > .product-card-link > ._teddy-card--border_139sd_58._teddy-card--product_139sd_323.product-card > div:nth-child(2) > .null.secondary-image > ._teddy-image_jxcdf_2`
  - **HTML:** `<img class="_teddy-image_jxcdf_2">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `div:nth-child(1) > .null.secondary-image > ._teddy-image_jxcdf_2`
  - **HTML:** `<img class="_teddy-image_jxcdf_2">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 8

#### Affected Elements:

- **Target:** `div[data-di-id="Mobilabonnement"]`
  - **HTML:** `<div data-di-id="Mobilabonnement" tabindex="0" role="button" class="_teddy-grid_1dv1t_2 _teddy-card_139sd_3 _teddy-card--gray_139sd_281 undefined _teddy-card--layout_139sd_61 _teddy-card--navigation-vertical_139sd_102 main-category-card">`
  - **Failure summary:** Fix any of the following: Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")

- **Target:** `div[data-di-id="Mobiltelefoner"]`
  - **HTML:** `<div data-di-id="Mobiltelefoner" tabindex="0" role="button" class="_teddy-grid_1dv1t_2 _teddy-card_139sd_3 _teddy-card--gray_139sd_281 undefined _teddy-card--layout_139sd_61 _teddy-card--navigation-vertical_139sd_102 main-category-card">`
  - **Failure summary:** Fix any of the following: Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")

- **Target:** `div[data-di-id="Internett"]`
  - **HTML:** `<div data-di-id="Internett" tabindex="0" role="button" class="_teddy-grid_1dv1t_2 _teddy-card_139sd_3 _teddy-card--gray_139sd_281 undefined _teddy-card--layout_139sd_61 _teddy-card--navigation-vertical_139sd_102 main-category-card">`
  - **Failure summary:** Fix any of the following: Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")

- **Target:** `div[data-di-id="Strømming og TV"]`
  - **HTML:** `<div data-di-id="Strømming og TV" tabindex="0" role="button" class="_teddy-grid_1dv1t_2 _teddy-card_139sd_3 _teddy-card--gray_139sd_281 undefined _teddy-card--layout_139sd_61 _teddy-card--navigation-vertical_139sd_102 main-category-card">`
  - **Failure summary:** Fix any of the following: Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")

- **Target:** `._teddy-card--purple-light_139sd_234._teddy-card--navigation-vertical_139sd_102[role="button"]:nth-child(1)`
  - **HTML:** `<div tabindex="0" role="button" class="_teddy-grid_1dv1t_2 _teddy-card_139sd_3 _teddy-card--purple-light_139sd_234 undefined _teddy-card--layout_139sd_61 _teddy-card--navigation-vertical_139sd_102">`
  - **Failure summary:** Fix any of the following: Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")

- **Target:** `._teddy-card--purple-light_139sd_234._teddy-card--navigation-vertical_139sd_102[role="button"]:nth-child(2)`
  - **HTML:** `<div tabindex="0" role="button" class="_teddy-grid_1dv1t_2 _teddy-card_139sd_3 _teddy-card--purple-light_139sd_234 undefined _teddy-card--layout_139sd_61 _teddy-card--navigation-vertical_139sd_102">`
  - **Failure summary:** Fix any of the following: Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")

- **Target:** `._teddy-card--purple-light_139sd_234._teddy-card--navigation-vertical_139sd_102[role="button"]:nth-child(3)`
  - **HTML:** `<div tabindex="0" role="button" class="_teddy-grid_1dv1t_2 _teddy-card_139sd_3 _teddy-card--purple-light_139sd_234 undefined _teddy-card--layout_139sd_61 _teddy-card--navigation-vertical_139sd_102">`
  - **Failure summary:** Fix any of the following: Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")

- **Target:** `._teddy-card--purple-light_139sd_234._teddy-card--navigation-vertical_139sd_102[role="button"]:nth-child(4)`
  - **HTML:** `<div tabindex="0" role="button" class="_teddy-grid_1dv1t_2 _teddy-card_139sd_3 _teddy-card--purple-light_139sd_234 undefined _teddy-card--layout_139sd_61 _teddy-card--navigation-vertical_139sd_102">`
  - **Failure summary:** Fix any of the following: Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")

