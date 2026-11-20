# WCAG Violations Report for Fartt IKT IKS

**Timestamp:** 2026-11-20T06:08:46.435Z
**URL:** [https://www.fartt.no/](https://www.fartt.no/)
**Total Violations:** 2

## Violation Details

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.sidebar-menu-close`
  - **HTML:** `<a class="sidebar-menu-close" href="#"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.opening`
  - **HTML:** `<div class="opening">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.wp-block-list`
  - **HTML:** `<ul class="wp-block-list shortcut has-medium-font-size">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.wp-block-group > .wp-block-paragraph`
  - **HTML:** `<p class="wp-block-paragraph"><strong>Aktuelt</strong> fra FARTT IKT</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.wp-block-columns`
  - **HTML:** `<div class="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-7387b849 wp-block-columns-is-layout-flex">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

