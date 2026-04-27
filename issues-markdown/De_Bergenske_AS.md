# WCAG Violations Report for De Bergenske AS

**Timestamp:** 2026-04-27T08:00:35.328Z
**URL:** [https://www.debergenske.no/](https://www.debergenske.no/)
**Total Violations:** 8

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 8

#### Affected Elements:

- `img[width="164"]`
- `#splide01-slide01`
- `#splide02-slide01`
- `#splide03-slide01`
- `#splide04-slide01`
- `#splide05-slide01`
- `#splide06-slide01`
- `img[width="150"]`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#ppms_cm_close-popup`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 5

#### Affected Elements:

- `#ppms_cm_agree-to-all`
- `#ppms_cm_reject-all`
- `#ppms_cm_content_expander_show_btn`
- `#popup-link`
- `#ppms_cm_footer__powered_by`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 34

#### Affected Elements:

- `#splide01-slide01 > .collection-item--fullWidth[fluidwidth="true"][theme="default"] > .sm\:max-w-full.flex-1.media`
- `.splide__arrow--prev.left-5[aria-controls="splide01-track"] > .w-12`
- `.splide__arrow--next.right-5[aria-controls="splide01-track"] > .w-12`
- `.splide__arrow--prev.left-5[aria-controls="splide02-track"] > .w-12`
- `.splide__arrow--next.right-5[aria-controls="splide02-track"] > .w-12`
- `.grid-of-1 > .lg\:col-span-3.collection-item--fullWidth[theme=""] > .sm\:pr-6.flex-1.media`
- `.DARK.\!bg-Theme\/Dark:nth-child(6) > .py-15[data-v-3b06c5a9=""] > .container[data-v-3b06c5a9=""] > .grid-of-5.lg\:grid-rows-\[1\.5fr_0\.8fr_1\.3fr\].space-y-6 > .lg\:col-span-2.col-span-1[theme=""] > .sm\:pr-6.flex-1.media`
- `.DARK.\!bg-Theme\/Dark:nth-child(6) > .py-15[data-v-3b06c5a9=""] > .container[data-v-3b06c5a9=""] > .grid-of-5.lg\:grid-rows-\[1\.5fr_0\.8fr_1\.3fr\].space-y-6 > .lg\:row-start-2.col-span-1[theme=""]:nth-child(3) > .sm\:pr-6.flex-1.media`
- `.DARK.\!bg-Theme\/Dark:nth-child(6) > .py-15[data-v-3b06c5a9=""] > .container[data-v-3b06c5a9=""] > .grid-of-5.lg\:grid-rows-\[1\.5fr_0\.8fr_1\.3fr\].space-y-6 > .lg\:row-start-2.col-span-1[theme=""]:nth-child(4) > .sm\:pr-6.flex-1.media`
- `.DARK.\!bg-Theme\/Dark:nth-child(6) > .py-15[data-v-3b06c5a9=""] > .container[data-v-3b06c5a9=""] > .grid-of-5.lg\:grid-rows-\[1\.5fr_0\.8fr_1\.3fr\].space-y-6 > .lg\:col-span-3.lg\:row-start-3.collection-item--fullWidth > .sm\:pr-6.flex-1.media`
- `.lg\:flex-col-reverse.lg\:h-\[740px\][theme=""]:nth-child(1) > .h-auto.sm\:px-6.max-w-full`
- `.lg\:h-\[740px\].collection-item[theme=""]:nth-child(2) > .h-auto.sm\:px-6.max-w-full`
- `.lg\:flex-col-reverse.lg\:h-\[740px\][theme=""]:nth-child(3) > .h-auto.sm\:px-6.max-w-full`
- `.splide__arrow--prev.left-5[aria-controls="splide03-track"] > .w-12`
- `.splide__arrow--next.right-5[aria-controls="splide03-track"] > .w-12`
- `#splide04-slide01 > .collection-item--fullWidth[fluidwidth="true"][theme="default"] > .sm\:max-w-full.flex-1.media`
- `.splide__arrow--prev.left-5[aria-controls="splide04-track"] > .w-12`
- `.splide__arrow--next.right-5[aria-controls="splide04-track"] > .w-12`
- `#splide05-slide01 > .collection-item--fullWidth[fluidwidth="true"][theme="default"] > .sm\:max-w-full.flex-1.media`
- `.splide__arrow--prev.left-5[aria-controls="splide05-track"] > .w-12`
- `.splide__arrow--next.right-5[aria-controls="splide05-track"] > .w-12`
- `.grid-of-6 > .lg\:col-span-2.col-span-1[theme=""]:nth-child(1) > .sm\:pr-6.flex-1.media`
- `.grid-of-6 > .lg\:row-span-2.lg\:col-start-3[theme=""] > .sm\:pr-6.flex-1.media`
- `.grid-of-6 > .lg\:row-start-2.col-span-1[theme=""]:nth-child(3) > .sm\:pr-6.flex-1.media`
- `.grid-of-6 > .lg\:row-start-2.col-span-1[theme=""]:nth-child(4) > .sm\:pr-6.flex-1.media`
- `.grid-of-6 > .lg\:row-start-3.col-span-1[theme=""]:nth-child(5) > .sm\:pr-6.flex-1.media`
- `.lg\:col-span-2.lg\:row-start-3[theme=""] > .sm\:pr-6.flex-1.media`
- `.DARK.\!bg-Theme\/Dark:nth-child(12) > .py-15[data-v-3b06c5a9=""] > .container[data-v-3b06c5a9=""] > .grid-of-5.lg\:grid-rows-\[1\.5fr_0\.8fr_1\.3fr\].space-y-6 > .lg\:col-span-2.col-span-1[theme=""] > .sm\:pr-6.flex-1.media`
- `.DARK.\!bg-Theme\/Dark:nth-child(12) > .py-15[data-v-3b06c5a9=""] > .container[data-v-3b06c5a9=""] > .grid-of-5.lg\:grid-rows-\[1\.5fr_0\.8fr_1\.3fr\].space-y-6 > .lg\:row-span-2.lg\:col-start-3[theme=""] > .sm\:pr-6.flex-1.media`
- `.DARK.\!bg-Theme\/Dark:nth-child(12) > .py-15[data-v-3b06c5a9=""] > .container[data-v-3b06c5a9=""] > .grid-of-5.lg\:grid-rows-\[1\.5fr_0\.8fr_1\.3fr\].space-y-6 > .lg\:row-start-2.col-span-1[theme=""]:nth-child(3) > .sm\:pr-6.flex-1.media`
- `.DARK.\!bg-Theme\/Dark:nth-child(12) > .py-15[data-v-3b06c5a9=""] > .container[data-v-3b06c5a9=""] > .grid-of-5.lg\:grid-rows-\[1\.5fr_0\.8fr_1\.3fr\].space-y-6 > .lg\:row-start-2.col-span-1[theme=""]:nth-child(4) > .sm\:pr-6.flex-1.media`
- `.DARK.\!bg-Theme\/Dark:nth-child(12) > .py-15[data-v-3b06c5a9=""] > .container[data-v-3b06c5a9=""] > .grid-of-5.lg\:grid-rows-\[1\.5fr_0\.8fr_1\.3fr\].space-y-6 > .lg\:col-span-3.lg\:row-start-3.collection-item--fullWidth > .sm\:pr-6.flex-1.media`
- `.splide__arrow--prev.left-5[aria-controls="splide06-track"] > .w-12`
- `.splide__arrow--next.right-5[aria-controls="splide06-track"] > .w-12`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.maxLg\:py-5`
- `#splide01`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 24

#### Affected Elements:

- `.top-0`
- `.gap-1`
- `.custom-select.md\:col-span-3[data-v-bea1500f=""]`
- `.dp__pointer`
- `.btn-theme-default`
- `.DARK.\!bg-Theme\/Dark:nth-child(2)`
- `.DARK.\!bg-Theme\/Dark:nth-child(3) > .py-15[data-v-3b06c5a9=""] > .xl\:pr-0.xl\:pl-15.grid-cols-4 > .xl\:col-span-3.col-span-4.lg\:col-span-4`
- `.DARK.\!bg-Theme\/Dark:nth-child(5)`
- `.DARK.\!bg-Theme\/Dark:nth-child(6)`
- `.DARK.\!bg-Theme\/Dark:nth-child(7)`
- `.DARK.\!bg-Theme\/Dark:nth-child(8) > .py-15[data-v-3b06c5a9=""] > .container[data-v-3b06c5a9=""] > .heading.text-\[clamp\(theme\(fontSize\.4xl\)\,4vw\,theme\(fontSize\.6xl\)\)\].leading-\[1\.15\]`
- `.DARK.\!bg-Theme\/Dark:nth-child(9) > .py-15[data-v-3b06c5a9=""] > .xl\:pr-0.xl\:pl-15.grid-cols-4 > .xl\:col-span-3.col-span-4.lg\:col-span-4`
- `.DARK.\!bg-Theme\/Dark:nth-child(10) > .py-15[data-v-3b06c5a9=""] > .xl\:pr-0.xl\:pl-15.grid-cols-4 > .xl\:col-span-3.col-span-4.lg\:col-span-4`
- `.DARK.\!bg-Theme\/Dark:nth-child(11)`
- `.DARK.\!bg-Theme\/Dark:nth-child(12)`
- `.DARK.\!bg-Theme\/Dark:nth-child(13) > .py-15[data-v-3b06c5a9=""] > .container[data-v-3b06c5a9=""] > .heading.text-\[clamp\(theme\(fontSize\.4xl\)\,4vw\,theme\(fontSize\.6xl\)\)\].leading-\[1\.15\]`
- `.DARK.\!bg-Theme\/Dark:nth-child(14)`
- `.space-y-9 > .lg\:text-center`
- `.space-y-9 > div:nth-child(2)`
- `#ppms_cm_language_select_btn_id`
- `#ppms-68b46b4f-2362-49d8-8054-214dfd5e0e70`
- `#ppms-2fe8bc9e-97d5-445d-9bf9-9d5a02dacf45`
- `#popup-link`
- `#ppms_cm_footer__powered_by`

### Select element must have an accessible name

- **Impact:** critical
- **Description:** Ensure select element has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- `.maxMd\:w-full`
