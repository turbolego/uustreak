# WCAG Violations Report for Bekk

**Timestamp:** 2026-10-22T03:37:16.029Z
**URL:** [https://www.bekk.no/](https://www.bekk.no/)
**Total Violations:** 2

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- **Target:** `._1fnfllg8[as="button"]:nth-child(1)`
  - **HTML:** `<button class="_1fnfllg8 _1a34q2w0 xhzyau7" as="button">`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `._1fnfllg8[as="button"]:nth-child(2)`
  - **HTML:** `<button class="_1fnfllg8 _1a34q2w0 xhzyau7" as="button">`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `._1aoibce2`
  - **HTML:** `<a aria-label="Mer faglig påfyll" class="_1aoibce2 _1aoibce1" href="/fag" data-discover="true">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

