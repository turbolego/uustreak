# WCAG Violations Report for Norsk Rikskringkasting AS

**Timestamp:** 2026-11-05T09:02:21.784Z
**URL:** [https://www.nrk.no/](https://www.nrk.no/)
**Total Violations:** 2

## Violation Details

### ARIA attributes must conform to valid names

- **Impact:** critical
- **Description:** Ensure attributes that begin with aria- are valid ARIA attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `svg[width="50"]`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="none" aria-role="img" aria-label="2026">`
  - **Failure summary:** Fix any of the following: Invalid ARIA attribute name: aria-role


### [role="img"] and [role="image"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] and [role="image"] elements have alternative text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `div[data-del-av-kongressen="senatet"] > ._graf_105n3_77 > div[role="img"]`
  - **HTML:** `<div role="img" aria-describedby="dh-usa-mellomvalg-widgets-graf-description">`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

