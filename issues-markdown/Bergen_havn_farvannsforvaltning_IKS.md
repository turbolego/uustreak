# WCAG Violations Report for Bergen havn farvannsforvaltning IKS

**Timestamp:** 2026-11-20T06:03:24.873Z
**URL:** [https://www.bergenhavn.no/](https://www.bergenhavn.no/)
**Total Violations:** 5

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `#chattrick-container, button[aria-label="Open Chat"]`
  - **HTML:** `<button aria-label="Open Chat" aria-hidden="false" tabindex="0" style="background-color: va...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#main`
  - **HTML:** `<main id="main">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.focus\:not-sr-only`
  - **HTML:** `<a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-primary focus:underline">Hopp til hovedinnhold</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### [role="img"] and [role="image"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] and [role="image"] elements have alternative text
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.xl\:block, #plug-widget`
  - **HTML:** `<div class="widget landscape noselect" id="plug-widget" role="img" aria-describedby="Live data of delivery of shorepower in kilowatts and savings of CO2 compared to equivalent litres of gas used driving around the world">`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute


### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- **Target:** `.scrollbar-hidden`
  - **HTML:** `<ul class="scrollbar-hidden flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain" data-v-d5342730="">`
  - **Failure summary:** Fix any of the following: Element should have focusable content Element should be focusable

