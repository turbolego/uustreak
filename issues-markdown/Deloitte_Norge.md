# WCAG Violations Report for Deloitte Norge

**Timestamp:** 2025-11-16T00:48:33.389Z
**URL:** [https://www.deloitte.com/no/no.html](https://www.deloitte.com/no/no.html)
**Total Violations:** 4

## Violation Details

### Certain ARIA roles must be contained by particular parents

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require parent roles are contained by them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-parent?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 8

#### Affected Elements:

- `.cmp-dual-slider__left-wrapper > .cmp-dual-slider__slide > .swiper-wrapper.cmp-dual-slider__slide-wrapper > .swiper-slide.cmp-dual-slider__slide-item[role="tab"]:nth-child(1)`
- `#-target-2-1`
- `#-target-3-1`
- `#-target-4-1`
- `.cmp-dual-slider__right-wrapper > .cmp-dual-slider__slide > .swiper-wrapper.cmp-dual-slider__slide-wrapper > .swiper-slide.cmp-dual-slider__slide-item[role="tab"]:nth-child(1)`
- `#-target-2-2`
- `#-target-3-2`
- `#-target-4-2`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `h5`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 2

#### Affected Elements:

- `.cmp-dual-slider__left-wrapper > .cmp-dual-slider__slide > .swiper-wrapper.cmp-dual-slider__slide-wrapper`
- `.cmp-dual-slider__right-wrapper > .cmp-dual-slider__slide > .swiper-wrapper.cmp-dual-slider__slide-wrapper`

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 4

#### Affected Elements:

- `.cmp-dual-slider__left-wrapper > .cmp-dual-slider__slide > .swiper-wrapper.cmp-dual-slider__slide-wrapper > .swiper-slide.cmp-dual-slider__slide-item[role="tab"]:nth-child(1)`
- `#-target-2-1`
- `#-target-3-1`
- `#-target-4-1`
