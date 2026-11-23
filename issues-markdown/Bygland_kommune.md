# WCAG Violations Report for Bygland kommune

**Timestamp:** 2026-11-23T06:08:35.523Z
**URL:** [https://www.bygland.kommune.no/](https://www.bygland.kommune.no/)
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

- **Target:** `img[alt="Bygland kommune"]`
  - **HTML:** `<img alt="Bygland kommune" src="/handlers/bv.ashx/i79db4270-5725-493a-ace0-1557447e0225/81c30bygland-kommune-med-hjarta-i-bygland.png">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

