# WCAG Violations Report for De Bergenske AS

**Timestamp:** 2026-11-12T06:07:53.239Z
**URL:** [https://www.debergenske.no/](https://www.debergenske.no/)
**Total Violations:** 4

## Violation Details

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

- `.min-h-full`
- `.text-Theme\/Light`
- `.custom-select.md\:col-span-3[data-v-60bd7221=""]`
- `.dp__pointer`
- `.btn-theme-default`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(2)`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(3)`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(4)`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(5) > .py-15[data-v-4e61ed59=""] > .container[data-v-4e61ed59=""] > .heading.text-\[clamp\(theme\(fontSize\.4xl\)\,4vw\,theme\(fontSize\.6xl\)\)\].pb-12`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(6) > .py-15[data-v-4e61ed59=""] > .xl\:pr-0.xl\:pl-15.grid-cols-4 > .xl\:col-span-3.col-span-4.lg\:col-span-4`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(7) > .py-15[data-v-4e61ed59=""] > .xl\:pr-0.xl\:pl-15.grid-cols-4 > .xl\:col-span-3.col-span-4.lg\:col-span-4`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(8)`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(9)`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(10)`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(11) > .py-15[data-v-4e61ed59=""] > .container[data-v-4e61ed59=""] > .heading.text-\[clamp\(theme\(fontSize\.4xl\)\,4vw\,theme\(fontSize\.6xl\)\)\].pb-12`
- `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(12)`
- `.xl\:col-span-6 > .lg\:text-center`
- `.xl\:col-span-6 > div:nth-child(2)`
