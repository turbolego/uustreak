# WCAG Violations Report for Gjerstad kommune

**Timestamp:** 2026-11-19T06:40:56.174Z
**URL:** [https://www.gjerstad.kommune.no/](https://www.gjerstad.kommune.no/)
**Total Violations:** 2

## Violation Details

### ARIA hidden element must not be focusable or contain focusable elements

- **Impact:** serious
- **Description:** Ensure aria-hidden elements are not focusable nor contain focusable elements
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-hidden-focus?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-10.8.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#searchBoxContainer`
  - **HTML:** `<div class="search-box" role="search" id="searchBoxContainer" aria-hidden="true">`
  - **Failure summary:** Fix all of the following: Focusable content should be disabled, be removed from the DOM, or not be hidden with aria-hidden


### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `img`
  - **HTML:** `<img alt="Gjerstad kommune" src="/handlers/bv.ashx/if83be776-2ec0-4f7f-8305-86b0f42fb667/logo-gk-med-ny-visjon-april-2026.jpg">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

