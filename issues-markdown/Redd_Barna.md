# WCAG Violations Report for Redd Barna

**Timestamp:** 2026-03-05T00:40:46.389Z
**URL:** [https://www.reddbarna.no/#](https://www.reddbarna.no/#)
**Total Violations:** 4

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `.skip-link`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `h6`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 4

#### Affected Elements:

- `.lib-link__link[rel=""] > .lib-link__img-wrap > .lib-link__featured-image[decoding="async"]`
- `.wp-block-column.wp-block-column-is-layout-flow.is-layout-flow:nth-child(1) > .has-post-image.wp-block-lib-accentuated-link > .lib-link__link[rel="noreferrer noopener"][target="_blank"] > .lib-link__img-wrap > .lib-link__featured-image[decoding="async"]`
- `.wp-block-column.wp-block-column-is-layout-flow.is-layout-flow:nth-child(2) > .has-post-image.wp-block-lib-accentuated-link > .lib-link__link[rel="noreferrer noopener"][target="_blank"] > .lib-link__img-wrap > .lib-link__featured-image[decoding="async"]`
- `.wp-block-column.wp-block-column-is-layout-flow.is-layout-flow:nth-child(3) > .has-post-image.wp-block-lib-accentuated-link > .lib-link__link[rel="noreferrer noopener"][target="_blank"] > .lib-link__img-wrap > .lib-link__featured-image[decoding="async"]`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 8

#### Affected Elements:

- `#give-amount`
- `.give-btn-level-0`
- `.give-btn-level-1`
- `.give-btn-level-2`
- `.give-btn-level-custom`
- `#frequency-single`
- `#frequency-recurring`
- `.give-step-one-buttons > .give-submit.advance-btn.give-btn`
