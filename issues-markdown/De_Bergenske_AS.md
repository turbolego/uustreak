# WCAG Violations Report for De Bergenske AS

**Timestamp:** 2026-10-30T04:45:47.390Z
**URL:** [https://www.debergenske.no/](https://www.debergenske.no/)
**Total Violations:** 7

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 6

#### Affected Elements:

- `img[width="164"]`
- `#splide01-slide01`
- `#splide02-slide01`
- `#splide03-slide01`
- `#splide04-slide01`
- `img[width="150"]`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 29

#### Affected Elements:

- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(3) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:flex-col-reverse.lg\:h-\[740px\][theme=""]:nth-child(1) > .h-auto.max-w-full.sm\:px-6`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(3) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:h-\[740px\].collection-item[theme=""]:nth-child(2) > .h-auto.max-w-full.sm\:px-6`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(3) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:flex-col-reverse.lg\:h-\[740px\][theme=""]:nth-child(3) > .h-auto.max-w-full.sm\:px-6`
- `.lg\:col-span-2 > .sm\:pr-6.media.flex-1`
- `.lg\:row-start-2.col-span-1.row-span-1:nth-child(3) > .sm\:pr-6.media.flex-1`
- `.lg\:row-start-2.col-span-1.row-span-1:nth-child(4) > .sm\:pr-6.media.flex-1`
- `.lg\:row-start-3 > .sm\:pr-6.media.flex-1`
- `.splide__arrow--prev.left-5[aria-controls="splide01-track"] > .w-12[data-nuxt-img=""]`
- `.splide__arrow--next.right-5[aria-controls="splide01-track"] > .w-12[data-nuxt-img=""]`
- `#splide02-slide01 > .collection-item--fullWidth[fluidwidth="true"][theme="default"] > .sm\:max-w-full.media.flex-1`
- `.splide__arrow--prev.left-5[aria-controls="splide02-track"] > .w-12[data-nuxt-img=""]`
- `.splide__arrow--next.right-5[aria-controls="splide02-track"] > .w-12[data-nuxt-img=""]`
- `#splide03-slide01 > .collection-item--fullWidth[fluidwidth="true"][theme="default"] > .sm\:max-w-full.media.flex-1`
- `.splide__arrow--prev.left-5[aria-controls="splide03-track"] > .w-12[data-nuxt-img=""]`
- `.splide__arrow--next.right-5[aria-controls="splide03-track"] > .w-12[data-nuxt-img=""]`
- `.grid-of-1 > .lg\:col-span-3.collection-item--fullWidth.col-span-1 > .sm\:pr-6.media.flex-1`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(9) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:flex-col-reverse.lg\:h-\[740px\][theme=""]:nth-child(1) > .h-auto.max-w-full.sm\:px-6`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(9) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:h-\[740px\].collection-item[theme=""]:nth-child(2) > .h-auto.max-w-full.sm\:px-6`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(9) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:flex-col-reverse.lg\:h-\[740px\][theme=""]:nth-child(3) > .h-auto.max-w-full.sm\:px-6`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(9) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:h-\[740px\].collection-item[theme=""]:nth-child(4) > .h-auto.max-w-full.sm\:px-6`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(9) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:flex-col-reverse.lg\:h-\[740px\][theme=""]:nth-child(5) > .h-auto.max-w-full.sm\:px-6`
- `.lg\:h-\[740px\].collection-item[theme=""]:nth-child(6) > .h-auto.max-w-full.sm\:px-6`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(10) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:flex-col-reverse.lg\:h-\[740px\][theme=""]:nth-child(1) > .h-auto.max-w-full.sm\:px-6`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(10) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:h-\[740px\].collection-item[theme=""]:nth-child(2) > .h-auto.max-w-full.sm\:px-6`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(10) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:flex-col-reverse.lg\:h-\[740px\][theme=""]:nth-child(3) > .h-auto.max-w-full.sm\:px-6`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(10) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:h-\[740px\].collection-item[theme=""]:nth-child(4) > .h-auto.max-w-full.sm\:px-6`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(10) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:flex-col-reverse.lg\:h-\[740px\][theme=""]:nth-child(5) > .h-auto.max-w-full.sm\:px-6`
- `.splide__arrow--prev.left-5[aria-controls="splide04-track"] > .w-12[data-nuxt-img=""]`
- `.splide__arrow--next.right-5[aria-controls="splide04-track"] > .w-12[data-nuxt-img=""]`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- `.chat-nudge`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.maxLg\:py-5`
- `#splide01`

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `.chat-nudge`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 18

#### Affected Elements:

- `.top-0`
- `.text-Theme\/Light`
- `.custom-select.md\:col-span-3[data-v-53d2364d=""]`
- `.dp__pointer`
- `.btn-theme-default`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(2)`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(3)`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(4)`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(5) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .heading.text-\[clamp\(theme\(fontSize\.4xl\)\,4vw\,theme\(fontSize\.6xl\)\)\].pb-12`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(6) > .py-15[data-v-d53f09c7=""] > .xl\:pr-0.xl\:pl-15.grid-cols-4 > .xl\:col-span-3.col-span-4.lg\:col-span-4`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(7) > .py-15[data-v-d53f09c7=""] > .xl\:pr-0.xl\:pl-15.grid-cols-4 > .xl\:col-span-3.col-span-4.lg\:col-span-4`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(8)`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(9)`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(10)`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(11) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .heading.text-\[clamp\(theme\(fontSize\.4xl\)\,4vw\,theme\(fontSize\.6xl\)\)\].pb-12`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(12)`
- `.xl\:col-span-6 > .lg\:text-center`
- `.xl\:col-span-6 > div:nth-child(2)`

### Select element must have an accessible name

- **Impact:** critical
- **Description:** Ensure select element has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/select-name?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- `select`
