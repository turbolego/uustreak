# WCAG Violations Report for Itera

**Timestamp:** 2026-10-09T05:02:05.487Z
**URL:** [https://www.itera.com/no/](https://www.itera.com/no/)
**Total Violations:** 5

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#search-form-open`
  - **HTML:** `<button id="search-form-open" class="search-button">`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `.right`
  - **HTML:** `<button class="horisontal-scroll-btn right" style="display: block;">`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.our-cases-container:nth-child(1) > h3`
  - **HTML:** `<h3 style="color: rgba(0, 0, 0, 1);">TESS moderniserer industrien gjennom egenutviklet digital handelsplattform</h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `#hs_cos_wrapper_module_175075604499012_ > h3`
  - **HTML:** `<h3><strong>Joachim Trøbråten</strong>, Key Account Manager</h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.frontpage-hero-main-content`
  - **HTML:** `<main class="frontpage-hero-main-content">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.our-cases-main-section > main`
  - **HTML:** `<main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.


### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#main-content`
  - **HTML:** `<main id="main-content" class="body-container-wrapper">`
  - **Failure summary:** Fix any of the following: Document has more than one main landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#main-content`
  - **HTML:** `<main id="main-content" class="body-container-wrapper">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

