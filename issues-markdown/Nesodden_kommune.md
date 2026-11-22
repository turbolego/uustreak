# WCAG Violations Report for Nesodden kommune

**Timestamp:** 2026-11-22T05:37:13.890Z
**URL:** [https://www.nesodden.kommune.no/](https://www.nesodden.kommune.no/)
**Total Violations:** 3

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.back-to-top-button`
  - **HTML:** `<button class="back-to-top-button"><span>Back To Top</span></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `img[alt="Nesodden Kommune"]`
  - **HTML:** `<img alt="Nesodden Kommune" src="/handlers/bv.ashx/i14addc2a-d277-4514-8ea1-511ad0c4888f/logoer-tl-lys-bakgrunn.png">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.container-floating-notifications`
  - **HTML:** `<div class="container-floating-notifications" style="background: url("/images/1px_Black_Opacity_75.png");">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

