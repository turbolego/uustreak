# WCAG Violations Report for Riksteatret

**Timestamp:** 2025-12-01T00:57:08.696Z
**URL:** [https://www.riksteatret.no/#](https://www.riksteatret.no/#)
**Total Violations:** 4

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 9

#### Affected Elements:

- `.swiper-slide-duplicate-active[data-swiper-slide-index="0"][aria-label="1 / 3"]:nth-child(1)`
- `.swiper-slide-duplicate-next[data-swiper-slide-index="1"][aria-label="2 / 3"]:nth-child(2)`
- `.swiper-item-prev`
- `.swiper-item-active`
- `.swiper-item-next`
- `.swiper-slide-duplicate-prev`
- `.swiper-slide-duplicate-active[data-swiper-slide-index="0"][aria-label="1 / 3"]:nth-child(7)`
- `.swiper-slide-duplicate-next[data-swiper-slide-index="1"][aria-label="2 / 3"]:nth-child(8)`
- `.swiper-slide-duplicate[data-swiper-slide-index="2"][aria-label="3 / 3"]:nth-child(9)`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `.swiper-item-next > .swiper-item__inner[data-content-reference="1172686"][data-epi-block-id="1170785"] > .swiper-item__text-container > .swiper-item__heading`
- `.swiper-item-next > .swiper-item__inner[data-content-reference="1172686"][data-epi-block-id="1170785"] > .swiper-item__text-container > .swiper-item__text`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 8

#### Affected Elements:

- `#feature_1 > .module__grid > .module__content > .module__body > h4`
- `#feature_2 > .module__grid > .module__content > .module__body > h4`
- `#feature_3 > .module__grid > .module__content > .module__body > h4`
- `#feature_4 > .module__grid > .module__content > .module__body > h4`
- `#feature_5 > .module__grid > .module__content > .module__body > h4`
- `#feature_6 > .module__grid > .module__content > .module__body > h4`
- `#feature_7 > .module__grid > .module__content > .module__body > h4`
- `#feature_8 > .module__grid > .module__content > .module__body > h4`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `#swiper-wrapper-465e15c06353ad52`
