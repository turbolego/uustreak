# WCAG Violations Report for Tana arbeidsservice AS

**Timestamp:** 2026-11-23T06:40:36.516Z
**URL:** [https://www.tana-arbeidsservice.no/](https://www.tana-arbeidsservice.no/)
**Total Violations:** 1

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#splide01-slide01`
  - **HTML:** `<li class="wp-block-kadence-sli..." id="splide01-slide01" role="tabpanel" aria-roledescription="slide" aria-label="%1$s of %2$s" style="margin-right: 0px; w...">`
  - **Failure summary:** Fix any of the following: ARIA role tabpanel is not allowed for given element

