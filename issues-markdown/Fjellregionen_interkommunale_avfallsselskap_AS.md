# WCAG Violations Report for Fjellregionen interkommunale avfallsselskap AS

**Timestamp:** 2026-11-20T06:10:26.506Z
**URL:** [https://www.fias.no/](https://www.fias.no/)
**Total Violations:** 2

## Violation Details

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.col-lg-6.col-xl-4:nth-child(2) > .align-items-center.no-gutters.row > .col-12:nth-child(1) > .home-content-img > a`
  - **HTML:** `<a href="https://www.fias.no/nyheter/storre-eller-mindre-avfallsdunker/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.sr-only-focusable`
  - **HTML:** `<a href="#main-content" class="sr-only sr-only-focusable">Skip to main content</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

