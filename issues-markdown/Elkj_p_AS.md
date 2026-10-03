# WCAG Violations Report for Elkjøp AS

**Timestamp:** 2026-10-03T04:10:22.871Z
**URL:** [https://www.elkjop.no/](https://www.elkjop.no/)
**Total Violations:** 2

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


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#kindly-chat-api > div, .sc-9dlu7b-2`
  - **HTML:** `<div class="sc-9dlu7b-2 jtruoE">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

