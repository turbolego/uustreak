# WCAG Violations Report for Deloitte Norge

**Timestamp:** 2026-05-05T20:20:13.810Z
**URL:** [https://www.deloitte.com/no/no.html](https://www.deloitte.com/no/no.html)
**Total Violations:** 3

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `#title-v2-24efabdc > .cmp-title__text`
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
