# WCAG Violations Report for Karmøy kommune

**Timestamp:** 2026-10-10T08:33:57.744Z
**URL:** [https://www.karmoy.kommune.no/](https://www.karmoy.kommune.no/)
**Total Violations:** 2

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `h4`
  - **HTML:** `<h4 class="ac-heading ac-heading--4"><span class="ac-heading-text">Ofte søkt</span></h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.back-to-top-button`
  - **HTML:** `<a class="back-to-top-button js-new-back-to-top-button" href="#header"> <span>Til toppen</span> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

