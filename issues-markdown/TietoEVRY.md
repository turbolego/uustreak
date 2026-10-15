# WCAG Violations Report for TietoEVRY

**Timestamp:** 2026-10-15T05:47:03.282Z
**URL:** [https://www.tieto.com/no/](https://www.tieto.com/no/)
**Total Violations:** 3

## Violation Details

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.md\:gap-6.gap-4.h-full > .md\:gap-6.gap-4`
  - **HTML:** `<nav class="flex h-full items-center gap-4 md:gap-6">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.group\/header-logo`
  - **HTML:** `<a class="group/header-logo rounded-sm px-2 py-1" href="/no/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Embedded code from OneTrust
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#onetrust-banner-sdk`
  - **HTML:** `<div id="onetrust-banner-sdk" class="otCenterRounded default vertical-align-content" tabindex="0" aria-label="We use cookies" aria-describedby="onetrust-policy-text">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

