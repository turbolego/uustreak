# WCAG Violations Report for Deloitte Norge

**Timestamp:** 2026-10-24T03:37:16.654Z
**URL:** [https://www.deloitte.com/no/no.html](https://www.deloitte.com/no/no.html)
**Total Violations:** 5

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 8

#### Affected Elements:

- `.cmp-dual-slider__left-wrapper > .cmp-dual-slider__slide > .swiper-wrapper.cmp-dual-slider__slide-wrapper > .swiper-slide.cmp-dual-slider__slide-item[role="group"]:nth-child(1)`
- `#-target-2-1`
- `#-target-3-1`
- `#-target-4-1`
- `.cmp-dual-slider__right-wrapper > .cmp-dual-slider__slide > .swiper-wrapper.cmp-dual-slider__slide-wrapper > .swiper-slide.cmp-dual-slider__slide-item[role="group"]:nth-child(1)`
- `#-target-2-2`
- `#-target-3-2`
- `#-target-4-2`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `#title-v2-24efabdc > .cmp-title__text`
- `h5`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 11

#### Affected Elements:

- `#search-button`
- `button[aria-label="nettstedvelger"]`
- `#promo-v3-91a23afb`
- `#promo-v3-fe37bd87`
- `#promo-v3-f1dc99bc`
- `#promo-v3-b98706d0`
- `#promo-v3-89074564`
- `#promo-v3-0204c5c7`
- `#promo-v3-c86aaf3f`
- `#promo-v3-44b96a43`
- `.ot-cookie-policy-link`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 2

#### Affected Elements:

- `.cmp-dual-slider__left-wrapper > .cmp-dual-slider__slide > .swiper-wrapper.cmp-dual-slider__slide-wrapper`
- `.cmp-dual-slider__right-wrapper > .cmp-dual-slider__slide > .swiper-wrapper.cmp-dual-slider__slide-wrapper`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.cmp-header__welcome`
