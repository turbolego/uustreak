# WCAG Violations Report for Elkjøp AS

**Timestamp:** 2026-10-02T17:10:41.996Z
**URL:** [https://www.elkjop.no/](https://www.elkjop.no/)
**Total Violations:** 1

## Violation Details

### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 3

#### Affected Elements:

- **Target:** `button:nth-child(1) > .xl\:flex-col.text-\(--header-text\).px-4`
  - **HTML:** `<li class="group flex h-full cursor-pointer items-center justify-center gap-2 px-4 text-(--header-text) xl:flex-col">`
  - **Failure summary:** Fix any of the following: List item does not have a <ul>, <ol> parent element

- **Target:** `div[data-component="AccountPopoverMenu"] > .xl\:flex-col.text-\(--header-text\).px-4`
  - **HTML:** `<li class="group flex h-full cursor-pointer items-center justify-center gap-2 px-4 text-(--header-text) xl:flex-col">`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list"

- **Target:** `li[data-testid="cart"]`
  - **HTML:** `<li class="group flex h-full cursor-pointer items-center justify-center gap-2 px-4 text-(--header-text) xl:flex-col" data-testid="cart">`
  - **Failure summary:** Fix any of the following: List item does not have a <ul>, <ol> parent element

