# WCAG Violations Report for De Bergenske AS

**Timestamp:** 2025-10-24T00:37:51.671Z
**URL:** [https://www.debergenske.no/](https://www.debergenske.no/)
**Total Violations:** 10

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-allowed-role?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT
- **Count:** 1

#### Affected Elements:

- `#ppms_cm_close-popup`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 5

#### Affected Elements:

- `#ppms_cm_agree-to-all`
- `#ppms_cm_reject-all`
- `#ppms_cm_content_expander_show_btn`
- `#popup-link`
- `#ppms_cm_footer__powered_by`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `#splide02-slide01 > .collection-item--fullWidth[fluidwidth="true"][theme="default"] > .prose-a\:text-white.\!bg-Theme\/Dark.lg\:p-7 > .prose-a\:text-white.\!text-white`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT
- **Count:** 28

#### Affected Elements:

- `.splide__arrow--prev.left-5[aria-controls="splide01-track"] > .w-12`
- `.splide__arrow--next.right-5[aria-controls="splide01-track"] > .w-12`
- `.grid-of-1 > .lg\:col-span-3.collection-item--fullWidth[theme=""] > .sm\:pr-6.flex-1.media`
- `#splide02-slide01 > .collection-item--fullWidth[fluidwidth="true"][theme="default"] > .sm\:max-w-full.flex-1.media`
- `.splide__arrow--prev.left-5[aria-controls="splide02-track"] > .w-12`
- `.splide__arrow--next.right-5[aria-controls="splide02-track"] > .w-12`
- `.splide__arrow--prev.left-5[aria-controls="splide03-track"] > .w-12`
- `.splide__arrow--next.right-5[aria-controls="splide03-track"] > .w-12`
- `#splide04-slide01 > .collection-item--fullWidth[fluidwidth="true"][theme="default"] > .sm\:max-w-full.flex-1.media`
- `.splide__arrow--prev.left-5[aria-controls="splide04-track"] > .w-12`
- `.splide__arrow--next.right-5[aria-controls="splide04-track"] > .w-12`
- `#splide05-slide01 > .collection-item--fullWidth[fluidwidth="true"][theme="default"] > .sm\:max-w-full.flex-1.media`
- `.splide__arrow--prev.left-5[aria-controls="splide05-track"] > .w-12`
- `.splide__arrow--next.right-5[aria-controls="splide05-track"] > .w-12`
- `.grid-of-6 > .lg\:col-span-2.collection-item[theme=""]:nth-child(1) > .sm\:pr-6.flex-1.media`
- `.grid-of-6 > .lg\:row-span-2.lg\:col-start-3[theme=""] > .sm\:pr-6.flex-1.media`
- `.grid-of-6 > .lg\:row-start-2.collection-item[theme=""]:nth-child(3) > .sm\:pr-6.flex-1.media`
- `.grid-of-6 > .lg\:row-start-2.collection-item[theme=""]:nth-child(4) > .sm\:pr-6.flex-1.media`
- `.grid-of-6 > .lg\:row-start-3.collection-item[theme=""]:nth-child(5) > .sm\:pr-6.flex-1.media`
- `.lg\:col-span-2.lg\:row-start-3[theme=""] > .sm\:pr-6.flex-1.media`
- `.grid-of-5 > .lg\:col-span-2.collection-item[theme=""] > .sm\:pr-6.flex-1.media`
- `.grid-of-5 > .lg\:row-span-2.lg\:col-start-3[theme=""] > .sm\:pr-6.flex-1.media`
- `.grid-of-5 > .lg\:row-start-2.collection-item[theme=""]:nth-child(3) > .sm\:pr-6.flex-1.media`
- `.grid-of-5 > .lg\:row-start-2.collection-item[theme=""]:nth-child(4) > .sm\:pr-6.flex-1.media`
- `.lg\:col-span-3.lg\:row-start-3[theme=""] > .sm\:pr-6.flex-1.media`
- `#splide06-slide01 > .collection-item--fullWidth[fluidwidth="true"][theme="default"] > .sm\:max-w-full.flex-1.media`
- `.splide__arrow--prev.left-5[aria-controls="splide06-track"] > .w-12`
- `.splide__arrow--next.right-5[aria-controls="splide06-track"] > .w-12`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.maxLg\:py-5`
- `#splide01`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 14

#### Affected Elements:

- `#splide04-slide01 > .collection-item--fullWidth[fluidwidth="true"][theme="default"] > .lg\:p-7.mx-6.bg-secondary > .items-end.gap-x-6.flex > .shrink-0.text-4xl.hover\:border-brand`
- `#splide05-slide01 > .collection-item--fullWidth[fluidwidth="true"][theme="default"] > .lg\:p-7.mx-6.bg-secondary > .items-end.gap-x-6.flex > .shrink-0.text-4xl.hover\:border-brand`
- `.grid-of-6 > .lg\:col-span-2.collection-item[theme=""]:nth-child(1) > .sm\:ml-6.bg-secondary.-mt-9 > .items-end.gap-x-6.flex > .shrink-0.text-4xl.hover\:border-brand`
- `.grid-of-6 > .lg\:row-span-2.lg\:col-start-3[theme=""] > .sm\:ml-6.bg-secondary.-mt-9 > .items-end.gap-x-6.flex > .shrink-0.text-4xl.hover\:border-brand`
- `.grid-of-6 > .lg\:row-start-2.collection-item[theme=""]:nth-child(3) > .sm\:ml-6.bg-secondary.-mt-9 > .items-end.gap-x-6.flex > .shrink-0.text-4xl.hover\:border-brand`
- `.grid-of-6 > .lg\:row-start-2.collection-item[theme=""]:nth-child(4) > .sm\:ml-6.bg-secondary.-mt-9 > .items-end.gap-x-6.flex > .shrink-0.text-4xl.hover\:border-brand`
- `.grid-of-6 > .lg\:row-start-3.collection-item[theme=""]:nth-child(5) > .sm\:ml-6.bg-secondary.-mt-9 > .items-end.gap-x-6.flex > .shrink-0.text-4xl.hover\:border-brand`
- `.lg\:col-span-2.lg\:row-start-3[theme=""] > .sm\:ml-6.bg-secondary.-mt-9 > .items-end.gap-x-6.flex > .shrink-0.text-4xl.hover\:border-brand`
- `.grid-of-5 > .lg\:col-span-2.collection-item[theme=""] > .sm\:ml-6.bg-secondary.-mt-9 > .items-end.gap-x-6.flex > .shrink-0.text-4xl.hover\:border-brand`
- `.grid-of-5 > .lg\:row-span-2.lg\:col-start-3[theme=""] > .sm\:ml-6.bg-secondary.-mt-9 > .items-end.gap-x-6.flex > .shrink-0.text-4xl.hover\:border-brand`
- `.grid-of-5 > .lg\:row-start-2.collection-item[theme=""]:nth-child(3) > .sm\:ml-6.bg-secondary.-mt-9 > .items-end.gap-x-6.flex > .shrink-0.text-4xl.hover\:border-brand`
- `.grid-of-5 > .lg\:row-start-2.collection-item[theme=""]:nth-child(4) > .sm\:ml-6.bg-secondary.-mt-9 > .items-end.gap-x-6.flex > .shrink-0.text-4xl.hover\:border-brand`
- `.lg\:col-span-3.lg\:row-start-3[theme=""] > .sm\:ml-6.bg-secondary.-mt-9 > .items-end.gap-x-6.flex > .shrink-0.text-4xl.hover\:border-brand`
- `#splide06-slide01 > .collection-item--fullWidth[fluidwidth="true"][theme="default"] > .lg\:p-7.mx-6.bg-secondary > .items-end.gap-x-6.flex > .shrink-0.text-4xl.hover\:border-brand`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 62

#### Affected Elements:

- `.right-0`
- `.gap-1`
- `.custom-select.md\:col-span-3[data-v-0de6cb4c=""]`
- `.dp__pointer`
- `.btn-theme-default`
- `.DARK.\!bg-Theme\/Dark:nth-child(2)`
- `.DARK.\!bg-Theme\/Dark:nth-child(3) > .py-15[data-v-5bb271bd=""] > .container[data-v-5bb271bd=""] > .heading.text-\[clamp\(theme\(fontSize\.4xl\)\,4vw\,theme\(fontSize\.6xl\)\)\].leading-\[1\.15\]`
- `.DARK.\!bg-Theme\/Dark:nth-child(4)`
- `.DARK.\!bg-Theme\/Dark:nth-child(5) > .py-15[data-v-5bb271bd=""] > .container-fluid.xl\:pr-0.xl\:pl-15 > .xl\:col-span-3.col-span-4.lg\:col-span-4`
- `.\!bg-Theme\/Light > .py-15[data-v-5bb271bd=""] > .container[data-v-5bb271bd=""] > .heading.text-\[clamp\(theme\(fontSize\.4xl\)\,4vw\,theme\(fontSize\.6xl\)\)\].leading-\[1\.15\]`
- `.DARK.\!bg-Theme\/Dark:nth-child(7) > .py-15[data-v-5bb271bd=""] > .container-fluid.xl\:pr-0.xl\:pl-15 > .xl\:col-span-3.col-span-4.lg\:col-span-4`
- `.DARK.\!bg-Theme\/Dark:nth-child(8) > .py-15[data-v-5bb271bd=""] > .container-fluid.xl\:pr-0.xl\:pl-15 > .xl\:col-span-3.col-span-4.lg\:col-span-4`
- `.DARK.\!bg-Theme\/Dark:nth-child(9) > .py-15[data-v-5bb271bd=""] > .container[data-v-5bb271bd=""] > .heading.text-\[clamp\(theme\(fontSize\.4xl\)\,4vw\,theme\(fontSize\.6xl\)\)\].leading-\[1\.15\]`
- `.grid-of-6 > .lg\:col-span-2.collection-item[theme=""]:nth-child(1) > .sm\:pr-6.flex-1.media`
- `.lg\:col-span-2.collection-item[theme=""]:nth-child(1) > .sm\:ml-6.bg-secondary.-mt-9 > h3`
- `.grid-of-6 > .lg\:col-span-2.collection-item[theme=""]:nth-child(1) > .sm\:ml-6.bg-secondary.-mt-9 > .items-end.gap-x-6.flex > .grow.\!text-textcolor.font-light`
- `.grid-of-6 > .lg\:row-span-2.lg\:col-start-3[theme=""] > .sm\:pr-6.flex-1.media`
- `.lg\:row-span-2.lg\:col-start-3[theme=""] > .sm\:ml-6.bg-secondary.-mt-9 > h3`
- `.grid-of-6 > .lg\:row-span-2.lg\:col-start-3[theme=""] > .sm\:ml-6.bg-secondary.-mt-9 > .items-end.gap-x-6.flex > .grow.\!text-textcolor.font-light`
- `.grid-of-6 > .lg\:row-start-2.collection-item[theme=""]:nth-child(3) > .sm\:pr-6.flex-1.media`
- `.lg\:row-start-2.collection-item[theme=""]:nth-child(3) > .sm\:ml-6.bg-secondary.-mt-9 > h3`
- `.grid-of-6 > .lg\:row-start-2.collection-item[theme=""]:nth-child(3) > .sm\:ml-6.bg-secondary.-mt-9 > .items-end.gap-x-6.flex > .grow.\!text-textcolor.font-light`
- `.grid-of-6 > .lg\:row-start-2.collection-item[theme=""]:nth-child(4) > .sm\:pr-6.flex-1.media`
- `.lg\:row-start-2.collection-item[theme=""]:nth-child(4) > .sm\:ml-6.bg-secondary.-mt-9 > h3`
- `.grid-of-6 > .lg\:row-start-2.collection-item[theme=""]:nth-child(4) > .sm\:ml-6.bg-secondary.-mt-9 > .items-end.gap-x-6.flex > .grow.\!text-textcolor.font-light`
- `.grid-of-6 > .lg\:row-start-3.collection-item[theme=""]:nth-child(5) > .sm\:pr-6.flex-1.media`
- `.lg\:row-start-3.collection-item[theme=""]:nth-child(5) > .sm\:ml-6.bg-secondary.-mt-9 > h3`
- `.grid-of-6 > .lg\:row-start-3.collection-item[theme=""]:nth-child(5) > .sm\:ml-6.bg-secondary.-mt-9 > .items-end.gap-x-6.flex > .grow.\!text-textcolor.font-light`
- `.lg\:col-span-2.lg\:row-start-3[theme=""] > .sm\:pr-6.flex-1.media`
- `.lg\:col-span-2.lg\:row-start-3[theme=""] > .sm\:ml-6.bg-secondary.-mt-9 > h3`
- `.lg\:col-span-2.lg\:row-start-3[theme=""] > .sm\:ml-6.bg-secondary.-mt-9 > .items-end.gap-x-6.flex > .grow.\!text-textcolor.font-light`
- `.grid-of-5 > .lg\:col-span-2.collection-item[theme=""] > .sm\:pr-6.flex-1.media`
- `.lg\:col-span-2.collection-item[theme=""] > .sm\:ml-6.bg-secondary.-mt-9 > h2`
- `.grid-of-5 > .lg\:col-span-2.collection-item[theme=""] > .sm\:ml-6.bg-secondary.-mt-9 > .items-end.gap-x-6.flex > .grow.\!text-textcolor.font-light`
- `.grid-of-5 > .lg\:row-span-2.lg\:col-start-3[theme=""] > .sm\:pr-6.flex-1.media`
- `.lg\:row-span-2.lg\:col-start-3[theme=""] > .sm\:ml-6.bg-secondary.-mt-9 > h2`
- `.grid-of-5 > .lg\:row-span-2.lg\:col-start-3[theme=""] > .sm\:ml-6.bg-secondary.-mt-9 > .items-end.gap-x-6.flex > .grow.\!text-textcolor.font-light`
- `.grid-of-5 > .lg\:row-start-2.collection-item[theme=""]:nth-child(3) > .sm\:pr-6.flex-1.media`
- `.lg\:row-start-2.collection-item[theme=""]:nth-child(3) > .sm\:ml-6.bg-secondary.-mt-9 > h2`
- `.grid-of-5 > .lg\:row-start-2.collection-item[theme=""]:nth-child(3) > .sm\:ml-6.bg-secondary.-mt-9 > .items-end.gap-x-6.flex > .grow.\!text-textcolor.font-light`
- `.grid-of-5 > .lg\:row-start-2.collection-item[theme=""]:nth-child(4) > .sm\:pr-6.flex-1.media`
- `.lg\:row-start-2.collection-item[theme=""]:nth-child(4) > .sm\:ml-6.bg-secondary.-mt-9 > h2`
- `.grid-of-5 > .lg\:row-start-2.collection-item[theme=""]:nth-child(4) > .sm\:ml-6.bg-secondary.-mt-9 > .items-end.gap-x-6.flex > .grow.\!text-textcolor.font-light`
- `.lg\:col-span-3.lg\:row-start-3[theme=""] > .sm\:pr-6.flex-1.media`
- `.lg\:col-span-3.lg\:row-start-3[theme=""] > .sm\:ml-6.bg-secondary.-mt-9 > h2`
- `.lg\:col-span-3.lg\:row-start-3[theme=""] > .sm\:ml-6.bg-secondary.-mt-9 > .items-end.gap-x-6.flex > .grow.\!text-textcolor.font-light`
- `.DARK.\!bg-Theme\/Dark:nth-child(11)`
- `.\!bg-white > .py-15[data-v-5bb271bd=""] > .container-fluid.xl\:pr-0.xl\:pl-15 > .xl\:col-span-3.col-span-4.lg\:col-span-4`
- `.lg\:text-center`
- `#\34 1a85971-de72-4bb9-8638-913f40d8f8bf`
- `div:nth-child(1) > .text-2xl.font-light[data-v-45958cc3=""] > label > div[data-v-45958cc3=""]`
- `#bcec652d-d951-41ac-ad2e-92b83a7f9443`
- `div:nth-child(2) > .text-2xl.font-light[data-v-45958cc3=""] > label > div[data-v-45958cc3=""]`
- `#\38 e49b73a-fd56-4559-8fbc-ef393afd16f6`
- `div:nth-child(3) > .text-2xl.font-light[data-v-45958cc3=""] > label > div[data-v-45958cc3=""]`
- `.border-greyAlt`
- `.mt-2`
- `#ppms_cm_language_select_btn_id`
- `#ppms-68b46b4f-2362-49d8-8054-214dfd5e0e70`
- `#ppms-2fe8bc9e-97d5-445d-9bf9-9d5a02dacf45`
- `#popup-link`
- `#ppms_cm_footer__powered_by`

### Select element must have an accessible name

- **Impact:** critical
- **Description:** Ensure select element has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/select-name?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT
- **Count:** 1

#### Affected Elements:

- `.maxMd\:w-full`
