# WCAG Violations Report for Landbruksdirektoratet

**Timestamp:** 2026-10-10T08:37:31.388Z
**URL:** [https://www.landbruksdirektoratet.no/nb](https://www.landbruksdirektoratet.no/nb)
**Total Violations:** 1

## Violation Details

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `scroll-into-view`
  - **HTML:** `<scroll-into-view> <a href="#top-of-page" class="to-top-link"> <span class="icon-arrow"></span> <span class="to-top-link__label">Til toppen</span> </a> </scroll-into-view>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#__googlesearch-trigger`
  - **HTML:** `<a id="__googlesearch-trigger" class="__googlesearch-trigger small active"> <img alt="AI-powered search" src="/nb/_/attachment/inline/0d3f92ab-66aa-4f8d-9509-7057f59e5543:60e18473ce51e2e803dd6b5b25d29e57cac783ab/search-ai.png"> <p>KI søk</…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

