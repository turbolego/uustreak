# WCAG Violations Report for Deloitte Norge

**Timestamp:** 2026-10-02T17:09:33.046Z
**URL:** [https://www.deloitte.com/no/no.html](https://www.deloitte.com/no/no.html)
**Total Violations:** 4

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 8

#### Affected Elements:

- **Target:** `.cmp-dual-slider__left-wrapper > .cmp-dual-slider__slide > .swiper-wrapper.cmp-dual-slider__slide-wrapper > .swiper-slide.cmp-dual-slider__slide-item[role="group"]:nth-child(1)`
  - **HTML:** `<li id="-target-1-1" class="swiper-slide cmp-dual-slider__slide-item" role="group">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `#-target-2-1`
  - **HTML:** `<li id="-target-2-1" class="swiper-slide cmp-dual-slider__slide-item" role="group">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `#-target-3-1`
  - **HTML:** `<li id="-target-3-1" class="swiper-slide cmp-dual-slider__slide-item" role="group">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `#-target-4-1`
  - **HTML:** `<li id="-target-4-1" class="swiper-slide cmp-dual-slider__slide-item" role="group">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `.cmp-dual-slider__right-wrapper > .cmp-dual-slider__slide > .swiper-wrapper.cmp-dual-slider__slide-wrapper > .swiper-slide.cmp-dual-slider__slide-item[role="group"]:nth-child(1)`
  - **HTML:** `<li id="-target-1-2" class="swiper-slide cmp-dual-slider__slide-item" role="group">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `#-target-2-2`
  - **HTML:** `<li id="-target-2-2" class="swiper-slide cmp-dual-slider__slide-item" role="group">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `#-target-3-2`
  - **HTML:** `<li id="-target-3-2" class="swiper-slide cmp-dual-slider__slide-item" role="group">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `#-target-4-2`
  - **HTML:** `<li id="-target-4-2" class="swiper-slide cmp-dual-slider__slide-item" role="group">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `#title-v2-24efabdc > .cmp-title__text`
  - **HTML:** `<h3 class="cmp-title__text"><span>Aktuelt</span></h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `h5`
  - **HTML:** `<h5 class="cmp-title__text"> Følg oss </h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.cmp-dual-slider__left-wrapper > .cmp-dual-slider__slide > .swiper-wrapper.cmp-dual-slider__slide-wrapper`
  - **HTML:** `<ul class="swiper-wrapper cmp-dual-slider__slide-wrapper">`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: [role=group]

- **Target:** `.cmp-dual-slider__right-wrapper > .cmp-dual-slider__slide > .swiper-wrapper.cmp-dual-slider__slide-wrapper`
  - **HTML:** `<ul class="swiper-wrapper cmp-dual-slider__slide-wrapper">`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: [role=group]


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.cmp-header__welcome`
  - **HTML:** `<div class="cmp-header__welcome">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

