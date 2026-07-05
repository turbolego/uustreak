# WCAG Violations Report for Telia Norge AS

**Timestamp:** 2026-07-05T00:54:36.909Z
**URL:** [https://www.telia.no/](https://www.telia.no/)
**Total Violations:** 3

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `._teddy-heading--title-500_lke53_42`
- `.usp-item:nth-child(1) > .usp-item-content > h4`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 4

#### Affected Elements:

- `.slide:nth-child(1) > .product-card-link > ._teddy-card--white_kudfq_267._teddy-card--border_kudfq_58._teddy-card--product_kudfq_323 > div:nth-child(2) > .null.secondary-image > ._teddy-image_jxcdf_2`
- `.slide:nth-child(5) > .product-card-link > ._teddy-card--white_kudfq_267._teddy-card--border_kudfq_58._teddy-card--product_kudfq_323 > div:nth-child(2) > .null.secondary-image > ._teddy-image_jxcdf_2`
- `.slide:nth-child(9) > .product-card-link > ._teddy-card--white_kudfq_267._teddy-card--border_kudfq_58._teddy-card--product_kudfq_323 > div:nth-child(2) > .null.secondary-image > ._teddy-image_jxcdf_2`
- `._teddy-card--rich-card_kudfq_168._teddy-card--gray_kudfq_281._teddy-card--layout_kudfq_61:nth-child(4) > ._teddy-card__inset--top_kudfq_420._teddy-card__inset--left_kudfq_423._teddy-card__inset--right_kudfq_426 > ._teddy-image_jxcdf_2`

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
- `._teddy-card--purple-light_kudfq_234._teddy-card--navigation-vertical_kudfq_102[role="button"]:nth-child(1)`
- `._teddy-card--purple-light_kudfq_234._teddy-card--navigation-vertical_kudfq_102[role="button"]:nth-child(2)`
- `._teddy-card--purple-light_kudfq_234._teddy-card--navigation-vertical_kudfq_102[role="button"]:nth-child(3)`
- `._teddy-card--purple-light_kudfq_234._teddy-card--navigation-vertical_kudfq_102[role="button"]:nth-child(4)`
