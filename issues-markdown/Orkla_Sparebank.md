# WCAG Violations Report for Orkla Sparebank

**Timestamp:** 2026-10-08T10:26:10.930Z
**URL:** [https://www.orklasparebank.no/](https://www.orklasparebank.no/)
**Total Violations:** 1

## Violation Details

### [role="img"] and [role="image"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] and [role="image"] elements have alternative text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.icon--pil-dropdown-ned-24`
  - **HTML:** `<span class="icon icon--24 icon--pil-dropdown-ned-24" role="img"></span>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

- **Target:** `.icon--linkedin-24`
  - **HTML:** `<span class="icon icon--24 icon--linkedin-24" role="img"></span>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

- **Target:** `.icon--facebook-24`
  - **HTML:** `<span class="icon icon--24 icon--facebook-24" role="img"></span>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

- **Target:** `.icon--youtube-24`
  - **HTML:** `<span class="icon icon--24 icon--youtube-24" role="img"></span>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

