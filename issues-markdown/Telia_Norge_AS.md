# WCAG Violations Report for Telia Norge AS

**Timestamp:** 2026-01-20T00:36:29.609Z
**URL:** [https://www.telia.no/#](https://www.telia.no/#)
**Total Violations:** 3

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.usp-item:nth-child(1) > .usp-item-content > h4`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 9

#### Affected Elements:

- `.slide:nth-child(1) > .product-card-link > ._teddy-card--white_vxy5c_267._teddy-card--border_vxy5c_58._teddy-card--product_vxy5c_323 > div:nth-child(2) > .secondary-image.null > ._teddy-image_jxcdf_2`
- `.slide:nth-child(2) > .product-card-link > ._teddy-card--white_vxy5c_267._teddy-card--border_vxy5c_58._teddy-card--product_vxy5c_323 > div:nth-child(1) > .secondary-image.null > ._teddy-image_jxcdf_2`
- `.slide:nth-child(3) > .product-card-link > ._teddy-card--white_vxy5c_267._teddy-card--border_vxy5c_58._teddy-card--product_vxy5c_323 > div:nth-child(1) > .secondary-image.null > ._teddy-image_jxcdf_2`
- `.slide:nth-child(4) > .product-card-link > ._teddy-card--white_vxy5c_267._teddy-card--border_vxy5c_58._teddy-card--product_vxy5c_323 > div:nth-child(1) > .secondary-image.null > ._teddy-image_jxcdf_2`
- `.slide:nth-child(5) > .product-card-link > ._teddy-card--white_vxy5c_267._teddy-card--border_vxy5c_58._teddy-card--product_vxy5c_323 > div:nth-child(2) > .secondary-image.null > ._teddy-image_jxcdf_2`
- `.slide:nth-child(6) > .product-card-link > ._teddy-card--white_vxy5c_267._teddy-card--border_vxy5c_58._teddy-card--product_vxy5c_323 > div:nth-child(1) > .secondary-image.null > ._teddy-image_jxcdf_2`
- `.slide:nth-child(7) > .product-card-link > ._teddy-card--white_vxy5c_267._teddy-card--border_vxy5c_58._teddy-card--product_vxy5c_323 > div:nth-child(1) > .secondary-image.null > ._teddy-image_jxcdf_2`
- `.slide:nth-child(8) > .product-card-link > ._teddy-card--white_vxy5c_267._teddy-card--border_vxy5c_58._teddy-card--product_vxy5c_323 > div:nth-child(1) > .secondary-image.null > ._teddy-image_jxcdf_2`
- `._teddy-card--gray_vxy5c_281._teddy-card--rich-card_vxy5c_168._teddy-grid_1dv1t_2:nth-child(4) > ._teddy-card__inset--top_vxy5c_418._teddy-card__inset--left_vxy5c_421._teddy-card__inset--right_vxy5c_424 > ._teddy-image_jxcdf_2`

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 8

#### Affected Elements:

- `div[data-di-id="Mobilabonnement"]`
- `div[data-di-id="Mobiltelefoner"]`
- `div[data-di-id="Internett"]`
- `div[data-di-id="Strømming og TV"]`
- `._teddy-card--purple-light_vxy5c_234._teddy-card--navigation-vertical_vxy5c_102[role="button"]:nth-child(1)`
- `._teddy-card--purple-light_vxy5c_234._teddy-card--navigation-vertical_vxy5c_102[role="button"]:nth-child(2)`
- `._teddy-card--purple-light_vxy5c_234._teddy-card--navigation-vertical_vxy5c_102[role="button"]:nth-child(3)`
- `._teddy-card--purple-light_vxy5c_234._teddy-card--navigation-vertical_vxy5c_102[role="button"]:nth-child(4)`
