# WCAG Violations Report for Eiendomsmegler 1 AS

**Timestamp:** 2026-10-03T04:09:58.270Z
**URL:** [https://www.eiendomsmegler1.no/](https://www.eiendomsmegler1.no/)
**Total Violations:** 2

## Violation Details

### ARIA dialog and alertdialog nodes should have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA dialog and alertdialog node has an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-dialog-name?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.optin`
  - **HTML:** `<div role="dialog" class="optin" aria-live="polite" aria-describedby="modalDescription">`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.optin-settings__section:nth-child(3) > .optin-grid > .optin-grid__col2 > .optin-settings__header.ffe-h5`
  - **HTML:** `<h3 class="ffe-h5 optin-settings__header"><span>Teknisk</span></h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `h5`
  - **HTML:** `<h5 class="ffe-h5 PortableText-module__bZqguG__topPadding"><strong>Dataskraping av nettsider</strong></h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid

