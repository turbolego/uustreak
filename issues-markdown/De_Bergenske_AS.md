# WCAG Violations Report for De Bergenske AS

**Timestamp:** 2026-11-14T08:45:03.545Z
**URL:** [https://www.debergenske.no/](https://www.debergenske.no/)
**Total Violations:** 4

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `.chat-nudge`
  - **HTML:** `<div data-v-0de3a129="" class="chat-nudge fixed bot..." role="button" tabindex="0" aria-label="Åpne chat" style="width: min(375px, -2...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.maxLg\:py-5`
  - **HTML:** `<nav class="overflow-hidden relative flex maxLg:py-5 maxLg:flex maxLg:flex-col container lg:overflow-visible flex-row justify-between items-center lg:h-12 lg:static">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `#splide01`
  - **HTML:** `<div class="splide splide--slide splide--ltr splide--draggable is-active is-overflow is-initialized" id="splide01" role="region" aria-roledescription="carousel" style="max-width: 100%;">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.chat-nudge`
  - **HTML:** `<div data-v-0de3a129="" class="chat-nudge fixed bot..." role="button" tabindex="0" aria-label="Åpne chat" style="width: min(375px, -2...">`
  - **Failure summary:** Fix any of the following: Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 18

#### Affected Elements:

- **Target:** `.min-h-full`
  - **HTML:** `<video class="w-full min-w-full min-h-full max-w-none object-cover object-center object-cover max-h-full" playsinline="true" loop="" muted="" autoplay="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.text-Theme\/Light`
  - **HTML:** `<div class="flex flex-col gap-1 lg:gap-9 max-w-full text-Theme/Light"><!----><h1 lang="no" class="font-bell font-medium uppercase leading-[1.15] text-[clamp(theme(fontSize.4xl),6vw,theme(fontSize.8xl))]">Velkommen til våre restauranter og …`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.custom-select.md\:col-span-3[data-v-60bd7221=""]`
  - **HTML:** `<div class="custom-select md:col-span-3" data-v-60bd7221="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.dp__pointer`
  - **HTML:** `<input data-test="dp-input" class="dp__pointer dp__input_readonly dp__input dp__input_icon_pad dp__input_reg" inputmode="none" placeholder="Velg dato" value="" autocomplete="off" aria-label="Datepicker input">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.btn-theme-default`
  - **HTML:** `<a href="https://book.debergenske.no/MultiProperty/MultiPropertyV1/Start?multiPropertyId=052816d8-b60b-41cb-8379-453771dea6f9&year=&month=&day=&stayLength=0&roomConfig=a2&currency=NOK&culture=nb" target="_blank" class="btn-theme-default su…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(2)`
  - **HTML:** `<section class="!bg-Theme/Dark !text-white DARK" data-v-169ec3b8="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(3)`
  - **HTML:** `<section class="!bg-Theme/Dark !text-white DARK" data-v-4e61ed59="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(4)`
  - **HTML:** `<section class="!bg-Theme/Dark !text-white DARK" data-v-4e61ed59="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(5) > .py-15[data-v-4e61ed59=""] > .container[data-v-4e61ed59=""] > .heading.text-\[clamp\(theme\(fontSize\.4xl\)\,4vw\,theme\(fontSize\.6xl\)\)\].pb-12`
  - **HTML:** `<h2 class="heading pb-12 text-[clamp(theme(fontSize.4xl),4vw,theme(fontSize.6xl))] leading-[1.15] font-bell uppercase" data-v-4e61ed59="">Kickoff for suksess</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(6) > .py-15[data-v-4e61ed59=""] > .xl\:pr-0.xl\:pl-15.grid-cols-4 > .xl\:col-span-3.col-span-4.lg\:col-span-4`
  - **HTML:** `<div class="flex flex-col col-span-4 lg:col-span-4 xl:col-span-3" data-v-4e61ed59="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(7) > .py-15[data-v-4e61ed59=""] > .xl\:pr-0.xl\:pl-15.grid-cols-4 > .xl\:col-span-3.col-span-4.lg\:col-span-4`
  - **HTML:** `<div class="flex flex-col col-span-4 lg:col-span-4 xl:col-span-3" data-v-4e61ed59="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(8)`
  - **HTML:** `<section class="!bg-Theme/Dark !text-white DARK" data-v-4e61ed59="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(9)`
  - **HTML:** `<section class="!bg-Theme/Dark !text-white DARK" data-v-4e61ed59="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(10)`
  - **HTML:** `<section class="!bg-Theme/Dark !text-white DARK" data-v-4e61ed59="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(11) > .py-15[data-v-4e61ed59=""] > .container[data-v-4e61ed59=""] > .heading.text-\[clamp\(theme\(fontSize\.4xl\)\,4vw\,theme\(fontSize\.6xl\)\)\].pb-12`
  - **HTML:** `<h2 class="heading pb-12 text-[clamp(theme(fontSize.4xl),4vw,theme(fontSize.6xl))] leading-[1.15] font-bell uppercase" data-v-4e61ed59="">Vi er Bergen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(12)`
  - **HTML:** `<section class="!bg-Theme/Dark !text-white DARK" data-v-169ec3b8="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.xl\:col-span-6 > .lg\:text-center`
  - **HTML:** `<div class="lg:text-center">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.xl\:col-span-6 > div:nth-child(2)`
  - **HTML:** `<div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

