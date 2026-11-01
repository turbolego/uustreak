# WCAG Violations Report for Aktiv Eiendomsmegling AS

**Timestamp:** 2026-11-01T03:23:28.576Z
**URL:** [https://aktiv.no/](https://aktiv.no/)
**Total Violations:** 3

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `#summary-4e5afa88-4847-4840-9815-c4e1889467a6 > h2:nth-child(2)`
  - **HTML:** `<h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `#summary-0ea42923-3099-4a8f-826a-62d527a86834 > h2:nth-child(2)`
  - **HTML:** `<h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.ProjectsSliderContentV2_item__XyMYZ:nth-child(1) > .ProjectsSliderContentV2_link__jiC_D.ProjectsSliderContentV2_linkInheritsColor__8yyxz > .ProjectsSliderContentV2_contentWrapper__F2Xkp > .ProjectsSliderContentV2_title__Jz1iE.ProjectsSliderContentV2_addressTitle__hh_pM`
  - **HTML:** `<h3 class="ProjectsSliderContentV2_title__Jz1iE ProjectsSliderContentV2_addressTitle__hh_pM">Jens Otterbechs vei 1B</h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 2

#### Affected Elements:

- **Target:** `meta[name="viewport"]:nth-child(9)`
  - **HTML:** `<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">`
  - **Failure summary:** Fix any of the following: user-scalable=no on <meta> tag disables zooming on mobile devices

- **Target:** `meta[name="viewport"]:nth-child(53)`
  - **HTML:** `<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">`
  - **Failure summary:** Fix any of the following: user-scalable=no on <meta> tag disables zooming on mobile devices

