# WCAG Violations Report for Ung.no

**Timestamp:** 2026-11-11T05:21:15.706Z
**URL:** [https://www.ung.no/](https://www.ung.no/)
**Total Violations:** 1

## Violation Details

### Elements must only use permitted ARIA attributes

- **Impact:** serious
- **Description:** Ensure ARIA attributes are not prohibited for an element's role
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-prohibited-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#main-content-anchor`
  - **HTML:** `<div id="main-content-anchor" aria-label="Hovedinnhold" tabindex="-1" class="absolute left-[-999px] top-[-9999] scroll-mt-40 focus:outline-none"></div>`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on "div" elements with no valid role attribute.

