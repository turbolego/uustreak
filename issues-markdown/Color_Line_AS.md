# WCAG Violations Report for Color Line AS

**Timestamp:** 2026-10-22T03:39:47.184Z
**URL:** [https://www.colorline.no/](https://www.colorline.no/)
**Total Violations:** 3

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 2

#### Affected Elements:

- **Target:** `button[aria-labelledby=":r4:"]`
  - **HTML:** `<button class="undefined bu..." type="button" aria-labelledby=":r4:" aria-expanded="false" aria-haspopup="true">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `button[aria-labelledby=":rc:"]`
  - **HTML:** `<button class="undefined bu..." type="button" aria-labelledby=":rc:" aria-expanded="false" aria-haspopup="true">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.wrapper.bg-white > .h-\(--navbar-mobile-height\).md\:h-\(--navbar-desktop-height\).py-24 > .flex-wrap.gap-12.justify-between > .justify-end.gap-10[data-controller="deviation-status"] > nav`
  - **HTML:** `<nav>`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `.cl-skip-links`
  - **HTML:** `<div class="cl-skip-links"> <a href="#mainContent">Gå til hovedinnholdet</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.wrapper.bg-white > .h-\(--navbar-mobile-height\).md\:h-\(--navbar-desktop-height\).py-24 > .flex-wrap.gap-12.justify-between > .logo[href="/"]`
  - **HTML:** `<a href="/" class="logo"> <img src="/build/images/color_line_logo_horizontal.svg" alt="Color Line logo" class="h-auto w-128 md:w-170" fetchpriority="high" loading="eager"> </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.lg\:justify-start`
  - **HTML:** `<div class="flex justify-center lg:justify-start gap-8 mt-40">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.md\:flex-row-reverse > div:nth-child(2)`
  - **HTML:** `<div> <div class="caption"> <p class="m-0">Color Line ©2026</p> </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.button-pill`
  - **HTML:** `<a href="https://www.colorline.no/webchat?chat=sailings&lang=no" class=" button button-primary button-medium button-pill fixed bottom-16 right-16 h-52 w-52 bg-primary-base-700 hover:bg-primary-base-800 z-(--z-index-chat-btn)" aria-label="C…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

